import { Document } from 'mongoose'


interface IUser extends Document {
    name?: string
    email: string
    emailVerified?: Date
    accounts: {
        provider: string
        providerAccountId: string
    }
}

interface IBlockStructure extends Document {
    block_type: string
    label: string
    required: boolean
    block_options: string[] | null
    block_metadata: any
}

interface ICompletedForm extends Document {
    user: string | IUser
    completed_at: Date
    answers: {
        block_id: string | IBlockStructure
        block_type: string
        answer: string | string[] | null
    }[]
}


interface IForm extends Document {
    version: string
    form_title: string
    form_description: string
    user_id: string | IUser
    created_at: Date
    active: boolean
    block_structures: (string | IBlockStructure)[]
    completed_forms: (string | ICompletedForm)[]
    form_metadata: any
}




export type { IBlockStructure, ICompletedForm, IForm, IUser }