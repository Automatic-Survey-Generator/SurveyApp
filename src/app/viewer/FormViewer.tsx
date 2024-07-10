'use client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import HeaderBlock from './viewer-form-blocks/HeaderBlock'
import ShortAnswer from './viewer-form-blocks/ShortAnswer'
import DropdownBlock from './viewer-form-blocks/DropdownBlock'



export default function FormViewer({ form_structure }: { form_structure: Array<any> }) {

  // Should define a type for formData and form_structure when mongoDB is integrated
  const [formData, setFormData] = useState<any>([])

  const updateFormDataBlock = (dataBlock) => {
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

      <ShortAnswer block_structure={form_structure[0]} updateFormDataBlock={updateFormDataBlock} />

      <DropdownBlock block_structure={form_structure[2]} updateFormDataBlock={updateFormDataBlock} />

      
      <Button
        type="submit"
        className="mt-auto px-4 py-2 bg-primary text-white rounded-xl w-full  focus:outline-none focus:ring-2 "
      >
        Submit
      </Button>
    </form>
  )
}
