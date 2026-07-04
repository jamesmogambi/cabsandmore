"use server";

import { adminDb, ensureFirebaseInitialized } from "@/lib/firebase-admin";
import { revalidatePath } from "next/cache";

export async function getUserFromFirestore(clerkId) {
  try {
    // Ensure Firebase is initialized before using
    ensureFirebaseInitialized();

    if (!clerkId) {
      console.error("No clerkId provided");
      return null;
    }

    const doc = await adminDb.collection("users").doc(clerkId).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    }
    return null;
  } catch (error) {
    console.error("Error fetching user from Firestore:", error);
    return null;
  }
}

export async function updateUserInFirestore(clerkId, data) {
  try {
    // Ensure Firebase is initialized before using
    ensureFirebaseInitialized();

    if (!clerkId) {
      throw new Error("No clerkId provided");
    }

    const cleanData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== undefined && value !== null,
      ),
    );

    await adminDb
      .collection("users")
      .doc(clerkId)
      .update({
        ...cleanData,
        updatedAt: new Date(),
      });

    revalidatePath("/profile");
    return { success: true };
  } catch (error) {
    console.error("Error updating user in Firestore:", error);
    return { success: false, error: error.message };
  }
}
