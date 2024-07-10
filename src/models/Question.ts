import mongoose, { Document, Model, Schema } from 'mongoose'
import Form from './Form'

interface IQuestion extends Document {
    form: (typeof Form)['_id']
    type: 'text' | 'radio' | 'checkbox' | 'attachment'
    questionText: string
    options?: string[]
    required: boolean
}

const QuestionSchema: Schema<IQuestion> = new Schema({
    form: {
        type: Schema.Types.ObjectId,
        ref: 'Form',
        required: true
    },
    type: {
        type: String,
        enum: ['text', 'radio', 'checkbox', 'attachment'],
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    options: [String], // for radio and checkbox types
    required: {
        type: Boolean,
        default: false
    }
})

const Question: Model<IQuestion> =
    mongoose.models.Question ||
    mongoose.model<IQuestion>('Question', QuestionSchema)
export default Question
