"use server"

import { dbConnect } from './db';
import {Form} from '@/models';
import { IForm } from '@/models/types';

export const getFormResults = async (): Promise<IForm[]> => {
  return await dbConnect().then(async () => {
    try {
      const formResults = await Form.find({})
        .populate('block_structures')
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
