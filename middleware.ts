import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
  "/api/uploadthing",
  "/:username",
  "/search",
]);

export default clerkMiddleware((auth, request: NextRequest) => {
  const { userId, sessionClaims, redirectToSignIn } = auth();

  if (!userId && !isPublicRoute(request)) {
    return redirectToSignIn({ returnBackUrl: request.url });
  }
  // If the user is logged in and the route is protected, let them view.
  if (userId && !isPublicRoute(request)) return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
