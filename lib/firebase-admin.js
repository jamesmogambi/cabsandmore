import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Try to initialize Firebase
try {
  if (!getApps().length) {
    let privateKey = process.env.FIREBASE_PRIVATE_KEY;

    // Clean the private key
    if (privateKey) {
      // Remove quotes if present
      privateKey = privateKey.replace(/^"|"$/g, "");
      // Replace \n with actual newlines
      privateKey = privateKey.replace(/\\n/g, "\n");
    }

    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: privateKey,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
    });

    console.log("✅ Firebase Admin initialized");
  }
} catch (error) {
  console.error("❌ Firebase Admin initialization failed:", error);
  // Don't throw the error - let the app handle it gracefully
}

export const adminDb = getFirestore();
