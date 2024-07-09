'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const isAuthenticated = () => {
  // TODO: use auth data from session
  return true
}

export function useAuth() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login')
    } else {
      setLoading(false)
    }
  }, [router])

  return { loading }
}
