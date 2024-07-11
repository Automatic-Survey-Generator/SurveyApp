'use client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import HeaderBlock from './viewer-form-blocks/HeaderBlock'
import ShortAnswer from './viewer-form-blocks/ShortAnswer'
import DropdownBlock from './viewer-form-blocks/DropdownBlock'

import type { IBlockStructure, IAnswer } from '@/models/types'


export default function FormViewer({ block_structures }: { block_structures: Array<IBlockStructure> }) {

  const [formData, setFormData] = useState<IAnswer[]>([])

  const updateFormDataBlock = (dataBlock: IAnswer) => {
    // Update the dataBlock if it already exists in formData (based on block_id)
    // Otherwise, add the dataBlock to formData
    let updatedFormData = formData.map((block) => {
      if (block.block_id === dataBlock.block_id) {
        return dataBlock
      }
      return block
    })

    if (!updatedFormData.some((block) => block.block_id === dataBlock.block_id)) {
      updatedFormData.push(dataBlock)
    }

    setFormData(updatedFormData)

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted: ', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full py-4">

      {/* Here we would normally map through the form_structure Array and render the right component based on its type */}

      <HeaderBlock title="Form Title" description="This is a description of the form" />

      <ShortAnswer block_structure={block_structures[0]} updateFormDataBlock={updateFormDataBlock} />

      <DropdownBlock block_structure={block_structures[2]} updateFormDataBlock={updateFormDataBlock} />

      
      <Button
        type="submit"
        className="mt-auto px-4 py-2 bg-primary text-black font-medium rounded-xl w-full  focus:outline-none focus:ring-2 "
      >
        Submit Form
      </Button>
    </form>
  )
}
