import { NextResponse } from 'next/server'

import { dbConnect } from '@/lib/db';
// import Form from '@/models/Form'; // You'll need to create this model

export async function GET() {
  await dbConnect();

  // try {
  //   const forms = await Form.find({}).sort({ createdAt: -1 });
  //   return NextResponse.json(forms);
  // } catch (error) {
  //   return NextResponse.json({ error: 'Failed to fetch forms' }, { status: 500 });
  // }
  return NextResponse.json({ error: 'Failed to fetch forms' }, { status: 500 });
}

export async function POST(request: Request) {
  // Your POST logic here
  return NextResponse.json({ message: 'This is the forms POST endpoint' })
}
