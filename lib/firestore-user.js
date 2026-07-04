// lib/firestore-user.js
import { adminDb } from "./firebase-admin";

export async function getUserFromFirestore(clerkId) {
  try {
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
