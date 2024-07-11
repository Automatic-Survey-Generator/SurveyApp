import { NextResponse } from 'next/server'
import {Form} from '@/models/';

import { dbConnect } from '@/lib/db';

export async function GET() {
  await dbConnect();

  try {
    const forms = await Form.find();
    return NextResponse.json(forms);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch forms', message:error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  // Your POST logic here
  return NextResponse.json({ message: 'This is the forms POST endpoint' })
}
