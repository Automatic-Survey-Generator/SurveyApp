import { notFound } from 'next/navigation'
import FormViewer from '@/components/FormViewer'
import { getFormById } from '@/lib/api'

export async function generateMetadata({ params }: { params: { formId: string } }) {
  const form = await getFormById(params.formId)
  return {
    title: form ? `${form.title} - Form Viewer` : 'Form Not Found',
  }
}

export default async function FormPage({ params }: { params: { formId: string } }) {
  const form = await getFormById(params.formId)

  if (!form) {
    notFound()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{form.title}</h1>

      <FormViewer form={form} />
    </div>
  )
}
