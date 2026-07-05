// actions/services.js
"use server";

import { collection, getDocs, query, orderBy } from "firebase/firestore";

import { convertFirestoreData } from "@/lib/firebase-utils";

export async function fetchServices() {
  try {
    const { db } = await import("@/lib/firebase");

    if (!db) {
      return { success: false, services: [], error: "Firebase not configured" };
    }

    const servicesRef = collection(db, "services");
    const q = query(servicesRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    const services = [];
    querySnapshot.forEach((doc) => {
      // Use the utility to convert all Firestore data
      services.push(convertFirestoreData(doc));
    });

    return { success: true, services };
  } catch (error) {
    console.error("Error fetching services:", error);
    return { success: false, error: error.message };
  }
}
