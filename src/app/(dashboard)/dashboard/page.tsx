import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import FormList from './FormList';
import {Status} from '@/models/types'
import type {IForm} from '@/models/types'
import SubmissionsTable from "./SubmissionsTable";


const example_forms: IForm[] = [
    {
        _id: '1',
        version: '1',
        title: 'A very long title of the survey that does some stuff',
        description: 'A very long description of the survey',
        user_id: '1',
        created_at: new Date(),
        status: Status.draft,
        block_structures: [],
        completed_forms: [],
        form_metadata: {}
    },
    {
        _id: '2',
        version: '1',
        title: 'A very long title of the survey',
        description: 'A very long description of the survey',
        user_id: '1',
        created_at: new Date(),
        status: Status.active,
        block_structures: [],
        completed_forms: [],
        form_metadata: {}
    },
    {
        _id: '3',
        version: '1',
        title: 'A very long title of the survey',
        description: 'A very long description of the survey',
        user_id: '1',
        created_at: new Date(),
        status: Status.ended,
        block_structures: [],
        completed_forms: [],
        form_metadata: {}
    },
    {
        _id: '1',
        version: '1',
        title: 'A very long title of the survey that does some stuff',
        description: 'A very long description of the survey',
        user_id: '1',
        created_at: new Date(),
        status: Status.draft,
        block_structures: [],
        completed_forms: [],
        form_metadata: {}
    },
    {
        _id: '2',
        version: '1',
        title: 'A very long title of the survey',
        description: 'A very long description of the survey',
        user_id: '1',
        created_at: new Date(),
        status: Status.active,
        block_structures: [],
        completed_forms: [],
        form_metadata: {}
    },
    {
        _id: '3',
        version: '1',
        title: 'A very long title of the survey',
        description: 'A very long description of the survey',
        user_id: '1',
        created_at: new Date(),
        status: Status.ended,
        block_structures: [],
        completed_forms: [],
        form_metadata: {}
    }
    
]


export default function DashboardPage() {
    return (
        <div className="max-w-6xl mx-auto p-4 pt-10 h-full">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-center">
                <h1 className="text-xl text-gray-600 font-bold">Dashboard</h1>
                <Button className="py-0 text-black">
                    <Plus className="mr-2 h-5 w-5" />
                     New Survey 
                </Button>
            </div>

            <FormList forms={example_forms} />

            <SubmissionsTable submissions={[]} />
        </div>
    );
}