import mongoose, { Document, Model, Schema } from 'mongoose'

import type { IBlockStructure } from './types'


const BlockStructureSchema = new Schema({
    block_type: { type: String, required: true },
    label: { type: String, required: true },
    required: { type: Boolean, required: true },
    block_options: { type: [String], default: null },
    block_metadata: { type: Schema.Types.Mixed }
})


const BlockStructure: Model<IBlockStructure & Document> = mongoose.models.BlockStructure || mongoose.model<IBlockStructure>('BlockStructure', BlockStructureSchema)
export default BlockStructure
