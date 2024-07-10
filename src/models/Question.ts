import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IQuestion extends Document {
    type: 'text' | 'radio' | 'checkbox' | 'attachment'
    questionText: string
    options?: string[]
    required: boolean
    forms: mongoose.Types.ObjectId[]
}

const QuestionSchema: Schema<IQuestion> = new Schema({
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
    },
    forms: [{
        type: Schema.Types.ObjectId,
        ref: 'Form'
    }]
})

const Question: Model<IQuestion> = mongoose.models.Question || mongoose.model<IQuestion>('Question', QuestionSchema)
export default Question
