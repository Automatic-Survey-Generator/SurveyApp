import mongoose from 'mongoose';
import Form from './Form';
import Question from './Question';

export const Models = { Form, Question };

export function registerModels() {
  if (!mongoose.models.Form) {
    mongoose.model('Form', Form.schema);
  }
  if (!mongoose.models.Question) {
    mongoose.model('Question', Question.schema);
  }
}
