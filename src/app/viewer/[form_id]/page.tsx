import FormViewer from "../FormViewer"

let form_structure = [
    {
        block_id: '1',
        block_type: 'ShortAnswer',
        description: 'What is your name?',
        required: true,
        block_data: {},
        block_metadata: {}
    },
    {
        block_id: '2',
        block_type: 'LongAnswer',
        description: 'Describe your most memorable camping trip.',
        required: false,
        block_data: {},
        block_metadata: {}
    },
    {
        block_id: '3',
        block_type: 'MultipleChoice',
        description: 'What is your favorite programming language?',
        required: true,
        block_data: {
            options: ['JavaScript', 'Python', 'Java', 'C#', 'Ruby']
        },
        block_metadata: {}
    }
]

export default async function FormPage() {


    return (
        <div className="container mx-auto bg-white h-full max-w-[700px] px-24">
            <FormViewer form_structure={form_structure} />
        </div>
    )
}
