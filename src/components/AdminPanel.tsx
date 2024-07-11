'use client'

import { useAuth } from '@/hooks/useAuth'
import { useState, useEffect } from 'react';
import { getFormResults } from '@/lib/api';
import { IForm } from '@/models/Form';
import AdminTable from '@/components/AdminTable'

export default function AdminPanel() {
  const [formResults, setFormResults] = useState<IForm[]>([]);
  const { loading } = useAuth()

  useEffect(() => {
    async function fetchFormResults() {
      const results = await getFormResults();
      setFormResults(results);
    }
    if (!loading) {
      fetchFormResults();
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>
  }

  return <AdminTable formResults={formResults}/>
}
