import { Model, Document } from 'mongoose';

type GeneratorFunction<T> = () => Promise<Partial<T>> | Partial<T>;

export async function generateDocuments<T extends Document>(
  model: Model<T>,
  count: number,
  generator: GeneratorFunction<T>
): Promise<void> {
  const documents: Partial<T>[] = [];

  for (let i = 0; i < count; i++) {
    const doc = await generator();
    documents.push(doc);
  }

  try {
    await model.insertMany(documents);
    console.log(`Successfully inserted ${count} documents into ${model.modelName}`);
  } catch (error) {
    console.error(`Error inserting documents into ${model.modelName}:`, error);
  }
}
