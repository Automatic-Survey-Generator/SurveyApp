import FormViewer from "../FormViewer"
import type { IBlockStructure } from "@/models/types"
import { BlockTypes } from "@/models/types"

let block_structures : IBlockStructure[] = [
    {
        _id: '1',
        block_type: BlockTypes.ShortAnswer,
        label: 'What is your name?',
        required: true,
        block_options: null,
        block_metadata: null
    },
    {
        _id: '2',
        block_type: BlockTypes.LongAnswer,
        label: 'Tell me about yourself',
        required: true,
        block_options: null,
        block_metadata: null
    },
    {
        _id: '3',
        block_type: BlockTypes.Dropdown,
        label: 'What is your favorite color?',
        required: true,
        block_options: ['Red', 'Blue', 'Green', 'Yellow'],
        block_metadata: null
    },
    {
        _id: '4',
        block_type: BlockTypes.Checkboxes,
        label: 'What are your favorite colors?',
        required: true,
        block_options: ['Red', 'Blue', 'Green', 'Yellow'],
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
