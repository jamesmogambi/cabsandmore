import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";
import { join } from "path";

let adminDb = null;
let isFirebaseReady = false;

// Try to initialize Firebase
try {
  if (!getApps().length) {
    let privateKey = null;
    
    // First try to get from environment variable
    const envPrivateKey = process.env.FIREBASE_PRIVATE_KEY;
    if (envPrivateKey) {
      // Remove quotes if present
      privateKey = envPrivateKey.replace(/^"|"$/g, "");
      // Replace \n with actual newlines
      privateKey = privateKey.replace(/\\n/g, "\n");
    } else {
      // Try to read from file (for platforms with env var limits like Zoho Catalyst)
      const privateKeyPath = process.env.FIREBASE_PRIVATE_KEY_PATH || './firebase-private-key.json';
      try {
        const keyContent = readFileSync(join(process.cwd(), privateKeyPath), 'utf8');
        // Parse as JSON to extract the private key
        const keyJson = JSON.parse(keyContent);
        privateKey = keyJson.private_key;
        // Replace \n with actual newlines if needed
        if (privateKey) {
          privateKey = privateKey.replace(/\\n/g, "\n");
        }
      } catch (fileError) {
        console.warn("⚠️ Could not read Firebase private key from file:", fileError.message);
      }
    }

    if (!privateKey) {
      throw new Error("Firebase private key not found in environment or file");
    }

    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: privateKey,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
    });

    console.log("✅ Firebase Admin initialized");
    isFirebaseReady = true;
    adminDb = getFirestore();
  } else {
    isFirebaseReady = true;
    adminDb = getFirestore();
  }
} catch (error) {
  console.error("❌ Firebase Admin initialization failed:", error);
  // Don't throw the error - let the app handle it gracefully
}

export { adminDb, isFirebaseReady };