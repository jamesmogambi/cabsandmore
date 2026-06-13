# Cabs & More Landing Site

This is the landing site for **Cabs & More**, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It provides a user-friendly interface for booking services, exploring stores, and managing bookings.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Maps**: [Google Map React](https://github.com/google-map-react/google-map-react)
- **Sitemap**: [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)

## 📋 Requirements

- **Node.js**: 20.9 or later (Required for Next.js 16)
- **Package Manager**: [Yarn](https://yarnpkg.com/) (v1.22.19+)

### 💡 Troubleshooting Node.js Version
If you see an error stating that Node.js 18 is being used even if you have a newer version installed:
1. Ensure you are using NVM and have the correct version activated:
   ```bash
   nvm use
   ```
   (We have included a `.nvmrc` file to help with this).
2. If using an IDE like WebStorm or VS Code, ensure the **Node interpreter** is set to version 20 or 22 in the IDE settings.
3. In some environments, the system Node might take precedence. You can check your active version with `node -v`.

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd cabs-landing-site
```

### 2. Install dependencies
```bash
yarn install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory and add any necessary environment variables.
> **TODO**: Identify specific environment variables required for the project (e.g., Google Maps API Key).

### 4. Run the development server
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

- `yarn dev`: Runs the app in development mode.
- `yarn build`: Builds the app for production and generates the sitemap.
- `yarn start`: Starts the production server.
- `yarn lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

- `/app`: Next.js App Router pages and layouts.
  - `/booking`: Booking flow pages.
  - `/stores`: Store listings and details.
  - `/contact-us`: Contact page.
- `/components`: Reusable UI components.
  - `/ui`: Low-level UI primitives (Radix UI wrappers).
- `/data`: Static data and mock data files.
- `/lib`: Utility functions and shared logic.
- `/public`: Static assets like images and sitemap files.

## 🌐 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 📄 License

> **TODO**: Add license information (e.g., MIT, Proprietary).
