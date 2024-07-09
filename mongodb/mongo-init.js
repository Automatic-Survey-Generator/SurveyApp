// This test file is notoriously unreliable
// - it doesn't have typings, relevant imports or async support
// - some data updates immediatelly, some with a big delay

// get database by name
db = db.getSiblingDB('main');

// BigData 1, loads slowly
const sampleForms = [
  {
    version: 0,
    form_title: 'Customer Satisfaction Survey',
    created_at: new Date().toISOString(),
    creator: "admin@example.com",
    form_structure: [
      {
        block_type: "ShortAnswer",
        description: "What is your name?",
        required: true,
        block_data: {},
        block_metadata: {}
      },
      {
        block_type: "OptionsSelector",
        description: "How satisfied are you with our service?",
        required: true,
        block_data: {
          options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"]
        },
        block_metadata: {}
      },
      {
        block_type: "LongAnswer",
        description: "Do you have any additional comments?",
        required: false,
        block_data: {},
        block_metadata: {}
      }
    ],
    order_of_blocks: ["block-1", "block-2", "block-3"],
    completed_forms: []
  },
  {
    version: 0,
    form_title: 'Employee Feedback Form',
    created_at: new Date().toISOString(),
    creator: "hr@example.com",
    form_structure: [
      {
        block_type: "ShortAnswer",
        description: "What is your department?",
        required: true,
        block_data: {},
        block_metadata: {}
      },
      {
        block_type: "MultiOptionsSelector",
        description: "Which benefits do you value most?",
        required: true,
        block_data: {
          options: ["Health Insurance", "401k", "Paid Time Off", "Professional Development", "Gym Membership"]
        },
        block_metadata: {}
      },
      {
        block_type: "LongAnswer",
        description: "How can we improve your work experience?",
        required: false,
        block_data: {},
        block_metadata: {}
      }
    ],
    order_of_blocks: ["block-1", "block-2", "block-3"],
    completed_forms: []
  }
];

// BigData 2, loads slowly
const sampleSubmissions = [
  {
    user: "john.doe@example.com",
    submitted: new Date().toISOString(),
    form_submission: [
      {
        block_id: sampleForms[0].form_structure[0].block_id,
        block_type: "ShortAnswer",
        answer: "John Doe"
      },
      {
        block_id: sampleForms[0].form_structure[1].block_id,
        block_type: "OptionsSelector",
        answer: "Satisfied"
      },
      {
        block_id: sampleForms[0].form_structure[2].block_id,
        block_type: "LongAnswer",
        answer: "The service was great, but could be faster."
      }
    ]
  },
  {
    user: "jane.smith@example.com",
    submitted: new Date().toISOString(),
    form_submission: [
      {
        block_id: sampleForms[1].form_structure[0].block_id,
        block_type: "ShortAnswer",
        answer: "Marketing"
      },
      {
        block_id: sampleForms[1].form_structure[1].block_id,
        block_type: "MultiOptionsSelector",
        answer: ["Health Insurance", "Paid Time Off"]
      },
      {
        block_id: sampleForms[1].form_structure[2].block_id,
        block_type: "LongAnswer",
        answer: "More flexible working hours would be great."
      }
    ]
  }
];

// create collections
db.createCollection('test_data');
db.createCollection('users');
db.createCollection('forms');
db.createCollection('submissions');

// Clear existing data if not using --force-recreate
db.test_data.deleteMany({});
db.users.deleteMany({});
db.forms.deleteMany({});
db.submissions.deleteMany({});

// Insert simple data
db.test_data.insertMany([
  { name: 'Data 1' },
  { name: 'Data 2' },
]);

// Insert users
db.users.insertMany([
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'Jane Doe2', email: 'jane.doe@example.com' },
]);

// Insert sample forms
db.forms.insertMany(sampleForms);

// Insert sample submissions
db.submissions.insertMany(sampleSubmissions);

console.log('Database finished seeding!');
