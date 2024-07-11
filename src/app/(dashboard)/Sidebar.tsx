'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from '@/components/ui/hover-card'

// Dummy data, normally comes from API
let listOfForms = [
    {
        form_title: 'A survey about Dogs',
        form_id: '0'
    },
    {
        form_title: 'A survey about Cats',
        form_id: '1'
    },
    {
        form_title: 'A survey about Birds',
        form_id: '2'
    },
    {
        form_title: 'A survey about Fish',
        form_id: '3'
    },
    {
        form_title: 'A survey about Elephants',
        form_id: '4'
    },
    {
        form_title: 'A survey about Monkeys',
        form_id: '5'
    },
    {
        form_title: 'A survey about Snakes',
        form_id: '6'
    }
]

function ListIcon() {
    return (
        <div className="w-6 h-6 rounded-full bg-gray-200">
            {/* <Image src='/icons/form_icon.png' alt='form icon'} /> */}
        </div>
    )
}

function ListItem({
    form_title,
    form_id,
    selected_form_id
}: {
    form_title: string
    form_id: string
    selected_form_id: string
}) {
    return (
        <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
                <Link href={'/builder/' + form_id}>
                    <li
                        className={cn(
                            'group cursor-pointer hover:border-primary hover:text-primary mt-3 py-2 px-3 flex gap-3 shadow-md border rounded-xl md:rounded-full md:items-center md:text-center md:p-2',
                            selected_form_id === form_id &&
                                'border-primary text-primary font-bold'
                        )}
                    >
                        <ListIcon />
                        <span className="text-sm truncate hidden md:block">
                            {form_title}
                        </span>
                    </li>
                </Link>
            </HoverCardTrigger>
            <HoverCardContent side="right" className="md:hidden">
                {form_title}
            </HoverCardContent>
        </HoverCard>
    )
}

export default function Sidebar({ className }: { className?: string }) {
    const params = useParams()

    return (
        <nav className={cn('m-5 p-4 rounded-xl flex flex-col', className)}>
            <div className="flex justify-between">
                <h1 className="font-bold text-sm ml-2 text-gray-600">
                    <span className="block md:inline">My</span>
                    <span className="hidden md:inline">&nbsp;</span>
                    <span className="block md:inline">Forms</span>
                </h1>
            </div>

            <ul className="grow mt-4 overflow-auto scrollbar-hide">
                {listOfForms.map((form) => (
                    <ListItem
                        key={form.form_id}
                        selected_form_id={params.form_id as string}
                        form_title={form.form_title}
                        form_id={form.form_id}
                    />
                ))}
            </ul>
        </nav>
    )
}
