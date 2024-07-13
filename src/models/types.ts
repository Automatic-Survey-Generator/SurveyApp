

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

enum BlockTypes {
    ShortAnswer = "ShortAnswer",
    LongAnswer = "LongAnswer",
    Options = "Options",
    Checkboxes = "Checkboxes",
    Dropdown = "Dropdown",
    Date = "Date",
    Time = "Time",
    FileUpload = "FileUpload"
}

interface IBlockStructure {
    _id?: string;
    block_type: BlockTypes
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


enum Status {
    draft = "draft",
    active = "active",
    ended = "ended"
}

interface IForm {
    _id?: string
    version: string
    title: string
    description: string
    user_id: string | IUser
    created_at: Date
    status:  Status
    block_structures: (string | IBlockStructure)[]
    completed_forms: (string | ICompletedForm)[]
    form_metadata: any
}



export type { IBlockStructure, ICompletedForm, IForm, IUser, IAnswer }
export { Status, BlockTypes }