import mongoose, { Document, Model, Schema } from 'mongoose'
import type { IUser } from './types'


const UserSchema: Schema<IUser> = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true, index: true },
    emailVerified: { type: Date },
    password: { type: String },
    accounts: [
        {
            provider: { type: String, required: true },
            providerAccountId: { type: String, required: true }
        }
    ]
})

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
export default User
