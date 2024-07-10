'use client'

import { useAuth } from '@/hooks/useAuth'
import { useState, useEffect } from 'react';
import { getFormResults } from '@/lib/api'; // We'll create this function
import AdminTable from '@/components/AdminTable'

type Question = {
  _id: String,
  type: String,
  questionText: String,
  options: String,
  required: Boolean
}

type Form = {
  _id: String,
  title: String,
  description: String,
  questions: Question[],
  createdAt: Date
}

export default function AdminPanel() {
  const [formResults, setFormResults] = useState<Form[]>([]);
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
