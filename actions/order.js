// app/actions/orders.js
"use server";

import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { revalidatePath } from "next/cache";

// Helper function to convert Firestore data
const convertFirestoreData = (doc) => {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
    // Convert Firestore Timestamp to Date if needed
    createdAt: data.createdAt?.toDate?.() || data.createdAt,
    updatedAt: data.updatedAt?.toDate?.() || data.updatedAt,
  };
};

// Helper to get db instance
async function getDb() {
  const { db } = await import("@/lib/firebase");
  return db;
}

// Get all orders
export async function getOrders() {
  try {
    const db = await getDb();
    if (!db) {
      return { success: false, error: "Firebase not configured" };
    }
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push(convertFirestoreData(doc));
    });

    return { success: true, data: orders };
  } catch (error) {
    console.error("Error fetching orders:", error);
    return { success: false, error: "Failed to fetch orders" };
  }
}

// Get orders by type
export async function getOrdersByType(type) {
  try {
    const db = await getDb();
    if (!db) {
      return { success: false, error: "Firebase not configured" };
    }
    const ordersRef = collection(db, "orders");
    const q = query(
      ordersRef,
      where("type", "==", type),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);

    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push(convertFirestoreData(doc));
    });

    return { success: true, data: orders };
  } catch (error) {
    console.error("Error fetching orders by type:", error);
    return { success: false, error: "Failed to fetch orders by type" };
  }
}

// Get orders by date range
export async function getOrdersByDateRange(filter) {
  try {
    const db = await getDb();
    if (!db) {
      return { success: false, error: "Firebase not configured" };
    }
    const ordersRef = collection(db, "orders");
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let q;

    switch (filter) {
      case "today":
        q = query(
          ordersRef,
          where("createdAt", ">=", today),
          orderBy("createdAt", "desc"),
        );
        break;
      case "last30days": {
        const thirtyDaysAgo = new Date(now);
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        q = query(
          ordersRef,
          where("createdAt", ">=", thirtyDaysAgo),
          orderBy("createdAt", "desc"),
        );
        break;
      }
      case "upcoming":
        q = query(
          ordersRef,
          where("createdAt", ">", now),
          orderBy("createdAt", "asc"),
        );
        break;
      default:
        q = query(ordersRef, orderBy("createdAt", "desc"));
    }

    const querySnapshot = await getDocs(q);
    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push(convertFirestoreData(doc));
    });

    return { success: true, data: orders };
  } catch (error) {
    console.error("Error filtering orders:", error);
    return { success: false, error: "Failed to filter orders" };
  }
}

// Get order by ID
export async function getOrderById(orderId) {
  try {
    const db = await getDb();
    if (!db) {
      return { success: false, error: "Firebase not configured" };
    }
    const docRef = doc(db, "orders", orderId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return { success: false, error: "Order not found" };
    }

    return { success: true, data: convertFirestoreData(docSnap) };
  } catch (error) {
    console.error("Error fetching order:", error);
    return { success: false, error: "Failed to fetch order" };
  }
}

// Create new order
export async function createOrder(orderData) {
  try {
    const db = await getDb();
    if (!db) {
      return { success: false, error: "Firebase not configured" };
    }
    const ordersRef = collection(db, "orders");
    const newOrder = {
      ...orderData,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: orderData.status || "Pending",
    };

    const docRef = await addDoc(ordersRef, newOrder);
    revalidatePath("/orders");

    return {
      success: true,
      data: { id: docRef.id, ...newOrder },
      message: "Order created successfully",
    };
  } catch (error) {
    console.error("Error creating order:", error);
    return { success: false, error: "Failed to create order" };
  }
}

// Update order status
export async function updateOrderStatus(orderId, status) {
  try {
    const db = await getDb();
    if (!db) {
      return { success: false, error: "Firebase not configured" };
    }
    const docRef = doc(db, "orders", orderId);
    await updateDoc(docRef, {
      status: status,
      updatedAt: new Date(),
    });

    revalidatePath("/orders");
    return { success: true, message: "Order status updated successfully" };
  } catch (error) {
    console.error("Error updating order:", error);
    return { success: false, error: "Failed to update order status" };
  }
}

// Update entire order
export async function updateOrder(orderId, orderData) {
  try {
    const db = await getDb();
    if (!db) {
      return { success: false, error: "Firebase not configured" };
    }
    const docRef = doc(db, "orders", orderId);
    await updateDoc(docRef, {
      ...orderData,
      updatedAt: new Date(),
    });

    revalidatePath("/orders");
    return { success: true, message: "Order updated successfully" };
  } catch (error) {
    console.error("Error updating order:", error);
    return { success: false, error: "Failed to update order" };
  }
}

// Delete order
export async function deleteOrder(orderId) {
  try {
    const db = await getDb();
    if (!db) {
      return { success: false, error: "Firebase not configured" };
    }
    const docRef = doc(db, "orders", orderId);
    await deleteDoc(docRef);

    revalidatePath("/orders");
    return { success: true, message: "Order deleted successfully" };
  } catch (error) {
    console.error("Error deleting order:", error);
    return { success: false, error: "Failed to delete order" };
  }
}

// Get orders with pagination
export async function getOrdersPaginated(pageSize = 10, lastDoc = null) {
  try {
    const db = await getDb();
    if (!db) {
      return { success: false, error: "Firebase not configured" };
    }
    const ordersRef = collection(db, "orders");
    let q;

    if (lastDoc) {
      q = query(
        ordersRef,
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(pageSize),
      );
    } else {
      q = query(ordersRef, orderBy("createdAt", "desc"), limit(pageSize));
    }

    const querySnapshot = await getDocs(q);
    const orders = [];
    let lastVisible = null;

    querySnapshot.forEach((doc) => {
      orders.push(convertFirestoreData(doc));
      lastVisible = doc;
    });

    return {
      success: true,
      data: orders,
      lastDoc: lastVisible,
      hasMore: orders.length === pageSize,
    };
  } catch (error) {
    console.error("Error fetching paginated orders:", error);
    return { success: false, error: "Failed to fetch orders" };
  }
}