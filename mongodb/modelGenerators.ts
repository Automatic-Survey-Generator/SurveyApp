import Form, { IForm } from '@/models/Form';
import Question, { IQuestion } from '@/models/Question';

export async function generateQuestion(): Promise<IQuestion> {
    const questionTypes: Array<'text' | 'radio' | 'checkbox' | 'attachment'> = ['text', 'radio', 'checkbox', 'attachment'];
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    const question = new Question({
        type,
        questionText: `Question ${Math.random().toString(36).substring(7)}`,
        required: Math.random() > 0.5,
        forms: []  // Will be populated when adding to forms
    });

    if (type === 'radio' || type === 'checkbox') {
        question.options = ['Option 1', 'Option 2', 'Option 3'];
    }

    await question.save();
    return question;
}

export async function generateForm(questions: IQuestion[]): Promise<IForm> {
    const form = new Form({
        title: `Form ${Math.random().toString(36).substring(7)}`,
        description: `Description for ${Math.random().toString(36).substring(7)}`,
        questions: questions.map(q => q._id),
        createdAt: new Date()
    });

    await form.save();

    // Update each question to include this form
    for (const question of questions) {
        await Question.findByIdAndUpdate(question._id, { $addToSet: { forms: form._id } });
    }

    return form;
}
