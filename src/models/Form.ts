import mongoose, { Document, Model, Schema } from 'mongoose'
import { IForm } from './types'


const FormSchema = new Schema({
    version: { type: String, required: true },
    form_title: { type: String, required: true },
    form_description: { type: String, required: true },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    created_at: { type: Date, required: true, index: true },
    active: { type: Boolean, required: true, index: true },
    block_structures: [
        { type: Schema.Types.ObjectId, ref: 'BlockStructure', index: true } // Questions
    ],
    completed_forms: [
        { type: Schema.Types.ObjectId, ref: 'CompletedForm', index: true } // Answers
    ],
    form_metadata: { type: Schema.Types.Mixed }
})

const Form: Model<IForm & Document> = mongoose.models.Form || mongoose.model<IForm>('Form', FormSchema)
export default Form
