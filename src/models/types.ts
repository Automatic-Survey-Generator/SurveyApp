

interface IUser {
    _id?: string
    name?: string
    email: string
    emailVerified?: Date
    accounts: {
        provider: string
        providerAccountId: string
    },
    password: String
}

interface IBlockStructure {
    _id?: string;
    block_type: string;
    label: string;
    required: boolean;
    block_options: string[] | null;
    block_metadata: any;
}

interface IAnswer {
    block_id: string | IBlockStructure
    block_type: string
    answer: string | string[] | null
}

interface ICompletedForm {
    _id?: string
    user: string | IUser
    completed_at: Date
    answers: IAnswer[]
}


interface IForm {
    _id?: string
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




export type { IBlockStructure, ICompletedForm, IForm, IUser, IAnswer }