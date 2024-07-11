
import { User, BlockStructure, Form, CompletedForm } from '@/models';
import { connectToDatabase } from './dbConnect';


await connectToDatabase('hello-db');

// Async function to add example data
async function addExampleData() {
    // Example user data
    const user = new User({
      name: 'John Doe',
      email: 'john.doe@example.com',
      emailVerified: new Date(),
      accounts: [{
        provider: 'google',
        providerAccountId: '12345'
      }]
    });
    await user.save();
  
    // Example block structure data
    const blockStructure = new BlockStructure({
      block_type: 'text',
      label: 'What is your favorite color?',
      required: true,
      block_options: null,
      block_metadata: {}
    });
    await blockStructure.save();
  
    // Example form data
    const form = new Form({
      version: '1.0',
      form_title: 'Favorite Color Survey',
      form_description: 'A simple survey to know your favorite color',
      user_id: user._id,
      created_at: new Date(),
      active: true,
      block_structures: [blockStructure._id],
      completed_forms: [],
      form_metadata: {}
    });
    await form.save();
  
    // Example completed form data
    const completedForm = new CompletedForm({
      user: user._id,
      completed_at: new Date(),
      answers: [{
        block_id: blockStructure._id,
        block_type: 'text',
        answer: 'Blue'
      }]
    });
    await completedForm.save();
  
    // Update form with completed form reference
    form.completed_forms.push(completedForm._id as any);
    await form.save();
  
    console.log('Example data added successfully');
  }
  
  // Run the async function to add example data
  addExampleData().catch(console.error);

