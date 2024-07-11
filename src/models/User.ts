import mongoose, { Document, Model, Schema } from 'mongoose'
import type { IUser } from './types'


const UserSchema = new Schema({
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

const User: Model<IUser & Document> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
export default User
