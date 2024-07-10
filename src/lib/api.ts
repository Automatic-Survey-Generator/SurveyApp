"use server"

import { dbConnect } from './db';
import { Models } from '@/models';
import { IForm } from '@/models/Form';

export const getFormResults = async (): Promise<IForm[]> => {
  return await dbConnect().then(async () => {
    try {
      const formResults = await Models.Form.find({})
        .populate('questions')
        .lean()
        .exec();

      const data = JSON.parse(JSON.stringify(formResults));
      return data || [];
    } catch (error) {
      console.error('Error fetching form results:', error);
      return [];
    }
  })
}
