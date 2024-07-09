'use client'

import { useAuth } from '@/hooks/useAuth'

export default function FormEditor() {
  const { loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return <h1>Form Editor Content</h1>
}
