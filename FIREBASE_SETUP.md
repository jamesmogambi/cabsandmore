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
