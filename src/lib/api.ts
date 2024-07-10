"use server"

import mongoose from 'mongoose';
import { dbConnect } from './db';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function getFormById(id: string) {
  // TODO: use db
  // return form

  const field = {
    id: "test",
    label: "label",
    type: "type",
    required: true
  }

  return { id: "id_string", title: "test_title", fields: [field] }
}

const questionSchema = new mongoose.Schema({
  _id: String,
  type: String,
  questionText: String,
  options: String,
  required: Boolean
});

const formSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  questions: [questionSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

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

export const getFormResults = async (): Promise<Form[]> => {
  return await dbConnect().then(async () => {
    const db = mongoose.connection.useDb('local_test_db', { useCache: true });

    if (!db.models['Form']) {
      db.model('Form', formSchema, 'forms');
    }

    const formResults = await db.model('Form').find({}).lean().exec() as Form[]
    return formResults || []
  });

    // const db = await dbConnect()
    // // const db = mongoose.connection.useDb('local_test_db', { useCache: true });

    // if (!db.models['Form']) {
    //   db.model('Form', formSchema, 'forms');
    // }

    // const formResults = await db.model('Form').find({}).lean().exec() as Form[]
    // return formResults || []

}
