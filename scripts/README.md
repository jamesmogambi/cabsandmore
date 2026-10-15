# Scripts

This directory contains utility scripts for preparing the application for deployment.

## prepare-deploy.sh

This script prepares the Next.js standalone build for deployment to Azure Web App by:

1. Verifying that a standalone build exists (.next/standalone/server.js)
2. Copying the .next/static directory to the standalone output
3. Copying the public directory to the standalone output
4. Removing any stale top-level static/ directory
5. Pruning non-runtime files to reduce deployment size
6. Removing service account keys for security (unless --keep-key is specified)
7. Verifying the output contains all required components

### Usage

```bash
# Prepare for deployment (removes service account keys)
bash scripts/prepare-deploy.sh

# Prepare for deployment (keeps service account keys)
bash scripts/prepare-deploy.sh --keep-key
```

### Output

The script prepares the contents of `.next/standalone` for upload. You should upload the **contents** of this directory (not the directory itself) to your Azure Web App.

### Why This Is Necessary

Next.js standalone builds intentionally exclude the `public/` and `.next/static/` directories because they are meant to be served by a CDN. However, when deploying to a traditional web server like Azure Web App, these files need to be present in the application directory for the server to serve them.

Without these files copied back, the application would serve HTML but load no JavaScript or CSS, resulting in a broken site.
