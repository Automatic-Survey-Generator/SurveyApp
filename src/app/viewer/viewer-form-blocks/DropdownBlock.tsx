import { useState } from 'react'
import * as React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

import GenericBlock from './GenericBlock'
import { IBlockStructure } from '@/models/types'

export default function DropdownBlock({
    block_structure,
    updateFormDataBlock
}: {
    block_structure: IBlockStructure
    updateFormDataBlock: any
}) {

    const onInputChange = (option: string) => {
        console.log('DropdownBlock option selected: ', option)
        updateFormDataBlock({
            block_id: block_structure._id,
            block_type: block_structure.block_type,
            answer: option
        })
    }

    return (
        <GenericBlock>
            <label className="block text-sm font-medium text-gray-700">{block_structure.label}</label>

            <Select onValueChange={onInputChange}>
                <SelectTrigger className="mt-2">
                    <SelectValue placeholder="None selected" />
                </SelectTrigger>
                <SelectContent >
                    <SelectGroup>
                        {(block_structure.block_options as string[]).map((option, index) => (
                            <SelectItem key={index} value={option} >
                                {option}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </GenericBlock>
    )
}
