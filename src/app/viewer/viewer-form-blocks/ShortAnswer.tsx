import { useState } from "react"
import { Input } from "@/components/ui/input"

import GenericBlock from "./GenericBlock"
import { IBlockStructure } from "@/models/types"


export default function ShortAnswer({block_structure, updateFormDataBlock}: {block_structure: IBlockStructure, updateFormDataBlock: any}){

    const [inputValue, setInputValue] = useState('')


    const onInputChange = (e: any) => {
        setInputValue(e.target.value)
        updateFormDataBlock({
            block_id: block_structure._id,
            block_type: block_structure.block_type,
            answer: e.target.value
        })
    }

    return (

        <GenericBlock>
            <label className="block text-sm font-medium text-gray-700">{block_structure.label}</label>
            <Input
                type="text"
                value={inputValue}
                onChange={onInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder=""
                required={block_structure.required}
            />
        </GenericBlock>

    )

}