import { NextResponse, NextRequest } from "next/server";

export async function authorized(request: NextRequest) {
    // Array of regex patterns of paths we want to protect
    const protectedPaths = [
        /\/shipping-address/,
        /\/payment-method/,
        /\/place-order/,
        /\/profile/,
        /\/user\/(.*)/,
        /\/order\/(.*)/,
        /\/admin/,
    ];

    // Get pathname from the req URL object
    const { pathname } = request.nextUrl;

    const auth = request.cookies.get("next-auth.session-token");
    // Check if user is not authenticated and accessing a protected path
    if (!auth && protectedPaths.some((p) => p.test(pathname))) return NextResponse.redirect(new URL("/sign-in", request.url));

    // Check for session cart cookie
    const sessionCartId = request.cookies.get("sessionCartId");

    if (!sessionCartId) {
        // Generate new session cart id cookie
        const newSessionCartId = crypto.randomUUID();
        
        // Clone the req headers
        const newRequestHeaders = new Headers(request.headers);
        
        // Create new response and add the new headers
        const response = NextResponse.next({
            request: {
                headers: newRequestHeaders,
            }
        });

        // Set newly generated sessionCartId in the response cookies
        response.cookies.set("sessionCartId", newSessionCartId);

        return response;
    }

    return NextResponse.next();
}