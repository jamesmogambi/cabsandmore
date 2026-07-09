// middleware.js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/about",
  "/contact",
  "/api/webhooks(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/sitemap(.*)", // ← add this line
]);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();

  // if (!isPublicRoute(request) && !userId) {
  //   const homeUrl = new URL("/", request.url);
  //   return NextResponse.redirect(homeUrl);
  // }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
