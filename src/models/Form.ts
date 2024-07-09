import mongoose, { Document, Model, Schema } from 'mongoose'
import Question from './Question'

interface IForm extends Document {
    title: string
    description?: string
    questions: (typeof Question)['_id'][]
    createdAt: Date
}

const FormSchema: Schema<IForm> = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Form: Model<IForm> =
    mongoose.models.Form || mongoose.model<IForm>('Form', FormSchema)
export default Form
