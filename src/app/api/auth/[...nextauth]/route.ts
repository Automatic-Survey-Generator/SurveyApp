import type { NextApiResponse } from "next"
import NextAuth from "next-auth"
import { authOptions } from "./options"
import { connectToDatabase } from "mongodb/dbConnect";
import { NextRequest } from "next/server";

async function auth(req: NextRequest, res: NextApiResponse) {
  await connectToDatabase('local_test_db');
  // @ts-ignore
  return await NextAuth(req, res, authOptions)
}


export { auth as GET, auth as POST }