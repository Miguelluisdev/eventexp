import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/events',
  '/events/[id]',
  '/sign-in/[[...rest]]',
  '/sign-up/[[...rest]]',
  '/api/webhook/clerk'  
]);

export default clerkMiddleware((auth, request) => {
  console.log(`Checking route: ${request.url}`);
  
  if (!isPublicRoute(request)) {
    console.log('Route is protected. Checking authentication...');
    auth().protect();
  } else {
    console.log('Route is public. No authentication required.');
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
