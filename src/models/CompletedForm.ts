import mongoose, { Document, Model, Schema } from 'mongoose'
import type { ICompletedForm } from './types'


const CompletedFormSchema: Schema<ICompletedForm> = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    completed_at: { type: Date, required: true, index: true },
    answers: [{
        block_id: {
            type: String,
            required: true,
            ref: 'BlockStructure',
            index: true
        },
        block_type: { type: String, required: true },
        answer: { type: Schema.Types.Mixed, default: null }
    }]
})

const CompletedForm: Model<ICompletedForm> =
    mongoose.models.CompletedForm ||
    mongoose.model<ICompletedForm>('CompletedForm', CompletedFormSchema)
export default CompletedForm
