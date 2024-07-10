import mongoose, { Document, Model, Schema } from 'mongoose'

interface IAnswer {
    question: mongoose.Types.ObjectId
    answerText?: string
    selectedOptions?: string[]
    attachment?: string
}

interface IResponse extends Document {
    form: mongoose.Types.ObjectId
    answers: IAnswer[]
    submittedAt: Date
}

const ResponseSchema: Schema<IResponse> = new Schema({
    form: {
        type: Schema.Types.ObjectId,
        ref: 'Form',
        required: true
    },
    answers: [
        {
            question: {
                type: Schema.Types.ObjectId,
                ref: 'Question',
                required: true
            },
            answerText: String,
            selectedOptions: [String],
            attachment: String
        }
    ],
    submittedAt: {
        type: Date,
        default: Date.now
    }
})

const Response: Model<IResponse> =
    mongoose.models.Response ||
    mongoose.model<IResponse>('Response', ResponseSchema)
export default Response
