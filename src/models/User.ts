import mongoose, { Document, Model, Schema } from 'mongoose'

interface IUser extends Document {
    name?: string
    email: string
    emailVerified?: Date
    accounts: {
        provider: string
        providerAccountId: string
    }[]
}

const UserSchema: Schema<IUser> = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    emailVerified: {
        type: Date
    },
    accounts: [
        {
            provider: {
                type: String,
                required: true
            },
            providerAccountId: {
                type: String,
                required: true
            }
        }
    ]
})

const User: Model<IUser> =
    mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
export default User
