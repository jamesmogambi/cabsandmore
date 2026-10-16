# Scripts

This directory contains utility scripts for preparing the application for deployment.

## prepare-deploy.sh

This script prepares the Next.js standalone build for deployment by:

1. Verifying that a standalone build exists (.next/standalone/server.js)
2. Copying the .next/static directory to the standalone output
3. Copying the public directory to the standalone output
4. Removing any stale top-level static/ directory
5. Pruning non-runtime files to reduce deployment size
6. Removing service account keys for security (unless --keep-key is specified)
7. Verifying the output contains all required components

### Usage

```bash
# Prepare for deployment (removes service account keys including Firebase keys)
bash scripts/prepare-deploy.sh

# Prepare for deployment (keeps service account keys in the artifact)
bash scripts/prepare-deploy.sh --keep-key
```

### Output

The script prepares the contents of `.next/standalone` for upload. You should upload the **contents** of this directory (not the directory itself) to your deployment target.

### Firebase Private Key Handling

For security, the Firebase private key should NOT be included in your deployment. The Firebase admin initialization in `lib/firebase-admin.js` supports two methods:

1. **Environment Variable** (recommended for most platforms):
   - Set `FIREBASE_PRIVATE_KEY` as an environment variable
   - The value should be the full private key string including newlines

2. **External File** (useful for platforms like Vercel where you prefer not to use env vars):
   - Place your Firebase service account JSON file outside your deployed code
   - Set `FIREBASE_PRIVATE_KEY_PATH` environment variable to the path of this file
   - Or place it at `./firebase-private-key.json` relative to your project root
   - The file should be a standard Firebase service account JSON file

**Important**: Never commit your Firebase private key to version control. The `firebase-private-key.json.sample` file shows the expected format.

### Why This Is Necessary

Next.js standalone builds intentionally exclude the `public/` and `.next/static/` directories because they are meant to be served by a CDN. However, when deploying to a traditional web server, these files need to be present in the application directory for the server to serve them.

Without these files copied back, the application would serve HTML but load no JavaScript or CSS, resulting in a broken site.
