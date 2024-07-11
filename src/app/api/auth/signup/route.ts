import { User } from '@/models'
import { hash } from 'bcryptjs'
import { connectToDatabase } from 'mongodb/dbConnect';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

async function handler(req: Request, res: NextApiResponse) {
    await connectToDatabase('local_test_db');
    if (!req.body)
        return NextResponse.json({ error: "Don't have form data...!" }, { status: 422 })
    try {
        const data = await req.json();
        const { username, email, password } = data
        const checkexisting = await User.findOne({ email })
        if (checkexisting)
            return NextResponse.json({ message: 'User Already Exists...!' })
        const hashedPassword = await hash(password, 12)
        const user = new User({
            username,
            email,
            password: hashedPassword
        })
        await user.save()
        return NextResponse.json({ success: true, user}, { status: 201 })
    } catch (error) {
        console.error(`Unable to create user, reason: ${error.message}`)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}

export { handler as POST }