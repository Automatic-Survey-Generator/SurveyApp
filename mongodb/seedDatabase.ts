import { connectToDatabase, disconnectFromDatabase, clearDatabase } from './dbConnect';
import { generateForm, generateQuestion } from './modelGenerators';

async function seedDatabase(options: { 
    databaseName: string, 
    clearExisting: boolean, 
    questionCount: number,
    formCount: number, 
    questionsPerForm: number 
}) {
    const { databaseName, clearExisting, questionCount, formCount, questionsPerForm } = options;

    await connectToDatabase(databaseName);

    if (clearExisting) {
        await clearDatabase();
    }

    // Generate a pool of questions
    const questions = [];
    for (let i = 0; i < questionCount; i++) {
        // @ts-ignore
        questions.push(await generateQuestion());
    }

    // Generate forms and assign questions
    for (let i = 0; i < formCount; i++) {
        const formQuestions = [];
        for (let j = 0; j < questionsPerForm; j++) {
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            formQuestions.push(randomQuestion);
        }
        await generateForm(formQuestions);
        console.log(`Generated form ${i + 1} with ${questionsPerForm} questions`);
    }

    await disconnectFromDatabase();
}

// Usage
seedDatabase({
    databaseName: 'local_test_db',
    clearExisting: true,
    questionCount: 20,
    formCount: 5,
    questionsPerForm: 4
}).catch(console.error);
