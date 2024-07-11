import { useState } from 'react'
import * as React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

import GenericBlock from './GenericBlock'

export default function DropdownBlock({
    block_structure,
    updateFormDataBlock
}: {
    block_structure: any
    updateFormDataBlock: any
}) {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e: any) => {
        setInputValue(e.target.value)
        updateFormDataBlock({
            block_id: block_structure.block_id,
            block_type: block_structure.block_type,
            answer: e.target.value
        })
    }

    return (
        <GenericBlock>
            <label className="block text-sm font-medium text-gray-700">{block_structure.description}</label>

            <Select >
                <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </GenericBlock>
    )
}
