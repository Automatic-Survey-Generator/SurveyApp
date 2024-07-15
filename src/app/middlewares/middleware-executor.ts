import { NextResponse, NextRequest } from 'next/server';

export const executeMiddlewares = async (middlewares: Function[], req: NextRequest) => {
  for (const middleware of middlewares) {
    const response = await middleware(req);
    if (!response.headers.get('x-middleware-next')) {
      return response;
    }
  }
  return NextResponse.next();
};
