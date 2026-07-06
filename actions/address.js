// app/actions/address.js
"use server";

import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  addDoc,
  updateDoc,
  deleteDoc,
  Timestamp,
  writeBatch,
} from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

// Helper to get current user using Clerk
async function getCurrentUser() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  // Get user email from session claims
  const email = sessionClaims?.email || sessionClaims?.user?.email;

  if (!email) {
    throw new Error("User email not found");
  }

  return {
    id: userId,
    email: email,
    name:
      sessionClaims?.user?.firstName ||
      sessionClaims?.user?.username ||
      sessionClaims?.user?.fullName ||
      "User",
  };
}

// Get all addresses for current user
export async function getUserAddresses() {
  try {
    const user = await getCurrentUser();

    const addressesRef = collection(db, "addresses");
    const q = query(
      addressesRef,
      where("userId", "==", user.id),
      orderBy("createdAt", "desc"),
    );

    const querySnapshot = await getDocs(q);
    const addresses = [];

    querySnapshot.forEach((doc) => {
      addresses.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.() || doc.data().createdAt,
        updatedAt: doc.data().updatedAt?.toDate?.() || doc.data().updatedAt,
      });
    });

    return { success: true, data: addresses };
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return { success: false, error: error.message };
  }
}

// Add new address
export async function addAddress(addressData) {
  try {
    const user = await getCurrentUser();

    // Get current addresses to check limit
    const currentAddresses = await getUserAddresses();
    if (currentAddresses.data.length >= 5) {
      return { success: false, error: "Maximum 5 addresses allowed" };
    }

    // If this is the first address or marked as default, set as default
    const isFirstAddress = currentAddresses.data.length === 0;
    const isDefault = addressData.isDefault || isFirstAddress;

    // If setting as default, remove default from other addresses
    if (isDefault && currentAddresses.data.length > 0) {
      const batch = writeBatch(db);
      currentAddresses.data.forEach((addr) => {
        if (addr.isDefault) {
          const docRef = doc(db, "addresses", addr.id);
          batch.update(docRef, { isDefault: false });
        }
      });
      await batch.commit();
    }

    const addressesRef = collection(db, "addresses");
    const newAddress = {
      ...addressData,
      userId: user.id,
      userEmail: user.email,
      userName: user.name || "User",
      isDefault: isDefault,
      createdAt: Timestamp.fromDate(new Date()),
      updatedAt: Timestamp.fromDate(new Date()),
    };

    const docRef = await addDoc(addressesRef, newAddress);
    revalidatePath("/address");

    return {
      success: true,
      data: { id: docRef.id, ...newAddress },
      message: "Address added successfully",
    };
  } catch (error) {
    console.error("Error adding address:", error);
    return { success: false, error: error.message };
  }
}

// Update address
export async function updateAddress(addressId, addressData) {
  try {
    const user = await getCurrentUser();

    // Get the address to verify ownership
    const addressRef = doc(db, "addresses", addressId);
    const addressSnap = await getDoc(addressRef);

    if (!addressSnap.exists()) {
      return { success: false, error: "Address not found" };
    }

    if (addressSnap.data().userId !== user.id) {
      return { success: false, error: "Unauthorized" };
    }

    // If setting as default, remove default from other addresses
    if (addressData.isDefault) {
      const currentAddresses = await getUserAddresses();
      const batch = writeBatch(db);
      currentAddresses.data.forEach((addr) => {
        if (addr.isDefault && addr.id !== addressId) {
          const docRef = doc(db, "addresses", addr.id);
          batch.update(docRef, { isDefault: false });
        }
      });
      await batch.commit();
    }

    await updateDoc(addressRef, {
      ...addressData,
      updatedAt: Timestamp.fromDate(new Date()),
    });

    revalidatePath("/address");

    return {
      success: true,
      message: "Address updated successfully",
    };
  } catch (error) {
    console.error("Error updating address:", error);
    return { success: false, error: error.message };
  }
}

// Delete address
export async function deleteAddress(addressId) {
  try {
    const user = await getCurrentUser();

    // Get the address to verify ownership
    const addressRef = doc(db, "addresses", addressId);
    const addressSnap = await getDoc(addressRef);

    if (!addressSnap.exists()) {
      return { success: false, error: "Address not found" };
    }

    if (addressSnap.data().userId !== user.id) {
      return { success: false, error: "Unauthorized" };
    }

    // Check if this is the default address
    const isDefault = addressSnap.data().isDefault;

    await deleteDoc(addressRef);

    // If deleted address was default, set another as default
    if (isDefault) {
      const remainingAddresses = await getUserAddresses();
      if (remainingAddresses.data.length > 0) {
        const firstAddress = remainingAddresses.data[0];
        const newDefaultRef = doc(db, "addresses", firstAddress.id);
        await updateDoc(newDefaultRef, { isDefault: true });
      }
    }

    revalidatePath("/address");

    return {
      success: true,
      message: "Address deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting address:", error);
    return { success: false, error: error.message };
  }
}

// Set default address
export async function setDefaultAddress(addressId) {
  try {
    const user = await getCurrentUser();

    // Get all user addresses
    const currentAddresses = await getUserAddresses();

    // Update all addresses to remove default
    const batch = writeBatch(db);
    currentAddresses.data.forEach((addr) => {
      const docRef = doc(db, "addresses", addr.id);
      batch.update(docRef, { isDefault: addr.id === addressId });
    });
    await batch.commit();

    revalidatePath("/address");

    return {
      success: true,
      message: "Default address updated successfully",
    };
  } catch (error) {
    console.error("Error setting default address:", error);
    return { success: false, error: error.message };
  }
}
