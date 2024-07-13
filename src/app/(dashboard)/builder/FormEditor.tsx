'use client'

import { useAuth } from '@/hooks/useAuth'

export default function FormEditor({formId}: {formId: string}) {
  const { loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='bg-white h-full max-w-[700px] m-auto text-3xl text-center'>
      {formId}
    </div>
  )
}
