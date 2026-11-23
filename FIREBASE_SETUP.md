# Firebase Setup Guide

This document explains how to configure Firebase for the Cabs & More landing site.

## Overview

The application uses Firebase for:
- Firestore database (via Firebase Admin SDK)
- Firebase client SDK for authentication and other frontend features

## Environment Variables

The following Firebase-related environment variables are used:

| Variable | Description | Required |
|----------|-------------|----------|
| `FIREBASE_PROJECT_ID` | Your Firebase project ID | Yes |
| `FIREBASE_CLIENT_EMAIL` | Service account client email | Yes |
| `FIREBASE_PRIVATE_KEY` | Service account private key (as string) | Yes* |
| `FIREBASE_PRIVATE_KEY_PATH` | Path to service account JSON file | No* |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key (client-side) | Yes |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | Yes |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID (client-side) | Yes |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | Yes |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID | Yes |

*Either `FIREBASE_PRIVATE_KEY` or `FIREBASE_PRIVATE_KEY_PATH` must be provided.

## Firebase Private Key Handling

For security, the Firebase private key should never be committed to version control or exposed in client-side code.

### Option 1: Environment Variable (Recommended)

Set the `FIREBASE_PRIVATE_KEY` environment variable to the full private key string from your Firebase service account JSON file, including the newline characters.

Example:
```
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQ...\n-----END PRIVATE KEY-----\n"
```

### Option 2: External File

Place your Firebase service account JSON file outside your deployed code and reference it via the `FIREBASE_PRIVATE_KEY_PATH` environment variable.

1. Store your `firebase-private-key.json` file in a secure location outside your project
2. Set `FIREBASE_PRIVATE_KEY_PATH=/path/to/your/firebase-private-key.json`
3. Or place it at `./firebase-private-key.json` relative to your project root (will be used if no path is specified)

The service account JSON file should look like:
```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account-email",
  "client_id": "your-client-id",
  ...
}
```

## Client-Side Firebase Configuration

The client-side Firebase configuration uses variables prefixed with `NEXT_PUBLIC_` which are automatically exposed to the browser by Next.js. These are safe to be exposed as they don't contain sensitive information.

## Important Security Notes

1. **Never commit your Firebase private key** to version control
2. **Never expose the Firebase private key** in client-side code
3. **Use restrictive rules** in your Firebase Firestore and Storage security rules
4. **Rotate keys periodically** if you suspect they may have been compromised
5. **Use least privilege principle** - ensure your service account has only the permissions it needs

## Local Development

For local development, you can:
1. Set environment variables in a `.env.local` file (not committed to git)
2. Or export them in your shell before running the dev server

Example `.env.local`:
```
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-service-account@your-project-id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
# ... etc ...
```

## Deployment

When deploying to platforms like Vercel, Netlify, or Azure:

1. Configure the required environment variables in the platform's settings
2. For the Firebase private key, use either:
   - The platform's encrypted environment variable storage (recommended)
   - Or host the key file securely and reference it via `FIREBASE_PRIVATE_KEY_PATH`

The application's build process (`npm run build`) includes a step that prepares the standalone output for deployment, which copies necessary static files while excluding sensitive information like service account keys.

## Zoho Catalyst Deployment

When deploying to Zoho Catalyst, you cannot store the Firebase private key in an environment variable due to the 1000-character limit.

### Steps for Zoho Catalyst:

1. **Store the Firebase Private Key Securely in Zoho Catalyst:**
   - Use Zoho Catalyst Vault to store the private key as a secret.
   - Alternatively, store the key file in Catalyst File System (CFS) in a secure location.

2. **Make the Key File Available at Runtime:**
   - If using Catalyst Vault, you can retrieve the secret and write it to a temporary file during application startup.
   - If using Catalyst File System, ensure the file is accessible to your application.

3. **Set the `FIREBASE_PRIVATE_KEY_PATH` Environment Variable:**
   - In Zoho Catalyst, set the environment variable `FIREBASE_PRIVATE_KEY_PATH` to the absolute path where the private key file will be available at runtime.
   - Example: If you store the key in `/home/user/secrets/firebase-private-key.json`, set:
     ```
     FIREBASE_PRIVATE_KEY_PATH=/home/user/secrets/firebase-private-key.json
     ```

4. **Do NOT Set `FIREBASE_PRIVATE_KEY` Environment Variable:**
   - To avoid the 1000-character limit, do not set the `FIREBASE_PRIVATE_KEY` environment variable in Zoho Catalyst.

5. **Ensure the Key File is Not Included in Your Deployment:**
   - Your deployment package (the Next.js standalone output) should not contain the Firebase private key.
   - The `prepare-deploy.sh` script (or equivalent) already removes `*.json` files from the standalone output by default.

### Example Workflow for Zoho Catalyst:

1. Store your Firebase service account JSON in Catalyst Vault as a secret named `firebase_private_key`.
2. In your Catalyst function's startup script, retrieve the secret and write it to a file:
   ```bash
   # Retrieve the secret from Catalyst Vault and write to a file
   catalyst vault read --secret firebase_private_key > /tmp/firebase-private-key.json
   export FIREBASE_PRIVATE_KEY_PATH=/tmp/firebase-private-key.json
   ```
3. Start your Next.js application (which will read the key from the file specified by `FIREBASE_PRIVATE_KEY_PATH`).

### Important Notes:

- The private key file must be a valid Firebase service account JSON file.
- The file must be readable by the application process.
- Never commit the private key file to version control.
- Rotate the key periodically if you suspect it may have been compromised.


## ⚠️ Important Security Warning About Hardcoded Keys

The current implementation in `lib/firebase-admin.js` has the Firebase private key hardcoded as a constant. **THIS IS A SEVERE SECURITY RISK AND IS NOT RECOMMENDED FOR ANY PRODUCTION DEPLOYMENT.**

### Risks of Hardcoding the Private Key:
1. **Source Code Exposure**: Anyone with access to your source code can see and misuse your Firebase private key
2. **Git History Exposure**: The key will be permanently stored in your Git history
3. **Accidental Sharing**: If you ever share your code for debugging or collaboration, the key is exposed
4. **Key Rotation Difficulty**: If compromised, you must change the code and redeploy

### How to Revert to a Secure Implementation:

If you want to revert to a secure implementation (strongly recommended), restore the previous version of `lib/firebase-admin.js` that reads the key from environment variables or files:

```javascript
// SECURE IMPLEMENTATION (RECOMMENDED)
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";
import { join } from "path";

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
      // Try to read from file (for platforms with env var limits)
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
  }
} catch (error) {
  console.error("❌ Firebase Admin initialization failed:", error);
  // Don't throw the error - let the app handle it gracefully
}

export const adminDb = getFirestore();
```

### For Zoho Catalyst Deployment (Secure Approach):
1. Store your Firebase service account JSON securely in Zoho Catalyst Vault or File System
2. Set the `FIREBASE_PRIVATE_KEY_PATH` environment variable to point to that file
3. Do NOT set `FIREBASE_PRIVATE_KEY` environment variable (avoids the 1000-char limit)
4. Never hardcode the key in your source code

Please reconsider using the secure implementation above for any production deployment.
