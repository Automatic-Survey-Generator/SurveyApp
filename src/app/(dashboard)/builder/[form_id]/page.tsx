'use client'

import FormEditor from '@/app/(dashboard)/builder/FormEditor'
import { useParams } from 'next/navigation'


export default function EditorPage() {

  const { form_id } = useParams() as { form_id: string }

  return <FormEditor formId={form_id} />
}
