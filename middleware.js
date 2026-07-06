// middleware.js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/about",
  "/contact",
  "/api/webhooks(.*)",
  "/sign-in(.*)", // Add this to prevent redirect loops
  "/sign-up(.*)", // Add this to prevent redirect loops
]);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();

  // If route is not public and user is not authenticated, redirect to sign-in
  if (!isPublicRoute(request) && !userId) {
    const signInUrl = new URL("/sign-in", request.url);
    // The redirect_url will be automatically handled by Clerk
    // using the fallbackRedirectUrl from your ClerkProvider
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
