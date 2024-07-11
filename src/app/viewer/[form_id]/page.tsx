import FormViewer from "../FormViewer"
import type { IBlockStructure } from "@/models/types"

let block_structures : IBlockStructure[] = [
    {
        _id: '1',
        block_type: 'ShortAnswer',
        label: 'What is your name?',
        required: true,
        block_options: null,
        block_metadata: null
    },
    {
        _id: '2',
        block_type: 'LongAnswer',
        label: 'Tell me about yourself',
        required: true,
        block_options: null,
        block_metadata: null
    },
    {
        _id: '3',
        block_type: 'MultipleChoice',
        label: 'What is your favorite color?',
        required: true,
        block_options: ['Red', 'Blue', 'Green', 'Yellow'],
        block_metadata: null
    },
    {
        _id: '4',
        block_type: 'Checkboxes',
        label: 'What are your favorite colors?',
        required: true,
        block_options: ['Red', 'Blue', 'Green', 'Yellow'],
        block_metadata: null
    },
    {
        _id: '5',
        block_type: 'Dropdown',
        label: 'What is your favorite color?',
        required: true,
        block_options: ['Red', 'Blue', 'Green', 'Yellow'],
        block_metadata: null
    },
    {
        _id: '6',
        block_type: 'FileUpload',
        label: 'Upload a file',
        required: true,
        block_options: null,
        block_metadata: null
    },
    {
        _id: '7',
        block_type: 'Date',
        label: 'What is your birthdate?',
        required: true,
        block_options: null,
        block_metadata: null
    },
    {
        _id: '8',
        block_type: 'Time',
        label: 'What time is it?',
        required: true,
        block_options: null,
        block_metadata: null
    }
]
   


export default async function FormPage() {


    return (
        <div className="container mx-auto bg-white h-full max-w-2xl md:px-24">
            <FormViewer block_structures={block_structures} />
        </div>
    )
}
