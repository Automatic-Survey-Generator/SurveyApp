'use client'

import { useAuth } from '@/hooks/useAuth'
import { useState, useEffect } from 'react';
import { IForm } from '@/models/types';
import AdminTable from '@/components/AdminTable'

export default function AdminPanel() {
  const [formResults, setFormResults] = useState<IForm[]>([]);
  const { loading } = useAuth()

  useEffect(() => {
    async function fetchFormResults() {
      // API get request to /api/forms
      const results =  (await fetch('/api/forms').then(res => res.json()) as IForm[]);
      console.log(results);
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
