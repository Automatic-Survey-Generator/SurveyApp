import { NextResponse } from 'next/server';

async function getTest(req) {
  // this returns undefined because the request object here is different, 
  // to get the user info we could make use of getServerSession()
  console.log(req.user)
  return NextResponse.json({ message: 'Test' });
}

export { getTest as GET}