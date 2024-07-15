import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const requireAuth = async (req: NextRequest) => {
    const sessionInfo = await getToken({ req });
    if (!sessionInfo) {
        console.log('No session found, redirecting to login');
        return NextResponse.redirect(new URL('/login', req.url));
    }
    // Add user information to request object
    Object.assign(req, { user: sessionInfo })
    return NextResponse.next();
}

export const testMiddleware = async (req) => {
    console.log('Inside test middleware');
    // prints the user info
    console.log(req.user);
    return NextResponse.next(); // Make sure to return the response to propagate changes
}
