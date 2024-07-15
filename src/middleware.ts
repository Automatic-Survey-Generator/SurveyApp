import { NextResponse, NextRequest } from 'next/server';
import { middlewareConfig } from './app/middlewares/middleware-config';
import { executeMiddlewares } from './app/middlewares/middleware-executor';

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    console.log('API Path:', pathname);

    const middlewares = middlewareConfig[pathname];
    if (middlewares) {
        console.log(`Running middlewares for path: ${pathname}`);
        return await executeMiddlewares(middlewares, req);
    }

    return NextResponse.next(); // Return the original request if no middleware found
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|.*\\.png$|favicon\\.ico).*)'],
};
