
import React from 'react';
import {Button} from '@/components/ui/button';
import {Status} from '@/models/types'; // Importing the Status enum from the types file
import type {IForm} from '@/models/types'; // Importing the Form interface from the types file




const StatusBadge: React.FC<{status:Status}> = ({status}) => {
    {
        if (status === Status.draft) {
            return <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                {status}
            </span>
        }
        else if (status === Status.active) {
            return <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {status}
            </span>
        }
        else if (status === Status.ended) {
            return <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
                {status}
            </span>
        }
    }
}



function FormCard({form}:{form:IForm}) {
    return (
        <div className='px-5 py-4 text-sm border cursor-pointer hover:border-gray-300 bg-white shadow-xl rounded-xl'>
            <div className='flex justify-between items-center gap-4'>
                <h3 className='truncate font-medium'>A very long title of the survey</h3>
                <StatusBadge status={form.status} />
            </div>

            <div className='mt-4 mb-2 flex justify-between '>
                <div className='text-xs text-gray-500 space-y-2'>
                    <p>{new Date(form.created_at).toDateString()}</p>
                    <p>{form.completed_forms.length} Submissions</p>
                </div>
                <div className='self-end'>
                    {form.status === Status.draft && <Button className='text-xs font-normal h-6 text-black'>Edit</Button>}
                    {form.status === Status.active && <Button className='text-xs font-normal h-6 text-black'>Review</Button>}
                    {form.status === Status.ended && <Button className='text-xs font-normal h-6 text-black'>Review</Button>}
                </div>
            </div>

        </div>
    )
}


export default function FormList({forms}:{forms:IForm[]}) {

    return (
        <div className='pt-10'>
            <h2 className='py-6 font-bold text-gray-800'>My Forms</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10">
                {forms.map((form) => (
                    <FormCard key={form._id} form={form} />
                ))}
            </div>
        </div>
    )
}