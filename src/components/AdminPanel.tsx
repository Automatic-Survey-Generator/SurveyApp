'use client'

import { useAuth } from '@/hooks/useAuth'

export default function AdminPanel() {

  // TODO: use auth data from session
  const { loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return <h1>Admin Panel Content</h1>
}
