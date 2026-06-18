
'use strict';

const applications = [
  { company_name: 'Google', job_title: 'Software Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-01-15', notes: 'Applied through LinkedIn referral' },
  { company_name: 'Meta', job_title: 'Frontend Developer', job_type: 'Full-time', status: 'Interviewing', applied_date: '2024-01-18', notes: 'Passed initial screening' },
  { company_name: 'Amazon', job_title: 'Backend Engineer', job_type: 'Full-time', status: 'Rejected', applied_date: '2024-01-20', notes: 'Failed technical round' },
  { company_name: 'Microsoft', job_title: 'Full Stack Developer', job_type: 'Full-time', status: 'Offer', applied_date: '2024-01-22', notes: 'Offer received, negotiating salary' },
  { company_name: 'Apple', job_title: 'iOS Developer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-01-25', notes: null },
  { company_name: 'Netflix', job_title: 'Senior Engineer', job_type: 'Full-time', status: 'Interviewing', applied_date: '2024-02-01', notes: 'Second round scheduled' },
  { company_name: 'Spotify', job_title: 'React Developer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-02-03', notes: null },
  { company_name: 'Airbnb', job_title: 'Software Engineer Intern', job_type: 'Internship', status: 'Rejected', applied_date: '2024-02-05', notes: 'Position filled' },
  { company_name: 'Uber', job_title: 'Backend Developer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-02-08', notes: 'Waiting for response' },
  { company_name: 'Twitter', job_title: 'DevOps Engineer', job_type: 'Full-time', status: 'Interviewing', applied_date: '2024-02-10', notes: 'Technical interview next week' },
  { company_name: 'Stripe', job_title: 'Payment Engineer', job_type: 'Full-time', status: 'Offer', applied_date: '2024-02-12', notes: 'Great offer, considering it' },
  { company_name: 'Shopify', job_title: 'Ruby Developer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-02-15', notes: null },
  { company_name: 'Salesforce', job_title: 'Cloud Engineer', job_type: 'Full-time', status: 'Rejected', applied_date: '2024-02-18', notes: 'Not enough experience' },
  { company_name: 'Adobe', job_title: 'UI Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-02-20', notes: null },
  { company_name: 'Atlassian', job_title: 'Software Engineer Intern', job_type: 'Internship', status: 'Interviewing', applied_date: '2024-02-22', notes: 'First round done' },
  { company_name: 'Slack', job_title: 'Platform Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-02-25', notes: null },
  { company_name: 'GitHub', job_title: 'Developer Advocate', job_type: 'Full-time', status: 'Offer', applied_date: '2024-03-01', notes: 'Accepted offer' },
  { company_name: 'Figma', job_title: 'Frontend Engineer', job_type: 'Full-time', status: 'Interviewing', applied_date: '2024-03-03', notes: 'Design round scheduled' },
  { company_name: 'Notion', job_title: 'Product Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-03-05', notes: null },
  { company_name: 'Linear', job_title: 'Full Stack Engineer', job_type: 'Full-time', status: 'Rejected', applied_date: '2024-03-08', notes: 'Overqualified' },
  { company_name: 'Vercel', job_title: 'Infrastructure Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-03-10', notes: null },
  { company_name: 'Cloudflare', job_title: 'Network Engineer', job_type: 'Full-time', status: 'Interviewing', applied_date: '2024-03-12', notes: 'System design round next' },
  { company_name: 'Twilio', job_title: 'API Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-03-15', notes: null },
  { company_name: 'Datadog', job_title: 'Site Reliability Engineer', job_type: 'Full-time', status: 'Offer', applied_date: '2024-03-18', notes: 'Negotiating remote terms' },
  { company_name: 'HashiCorp', job_title: 'DevOps Intern', job_type: 'Internship', status: 'Applied', applied_date: '2024-03-20', notes: null },
  { company_name: 'MongoDB', job_title: 'Database Engineer', job_type: 'Full-time', status: 'Rejected', applied_date: '2024-03-22', notes: 'Skills mismatch' },
  { company_name: 'Redis', job_title: 'Backend Engineer', job_type: 'Part-time', status: 'Applied', applied_date: '2024-03-25', notes: 'Part time remote role' },
  { company_name: 'Docker', job_title: 'Platform Engineer', job_type: 'Full-time', status: 'Interviewing', applied_date: '2024-03-28', notes: 'HR round completed' },
  { company_name: 'Kubernetes', job_title: 'Cloud Native Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-04-01', notes: null },
  { company_name: 'Grafana', job_title: 'Observability Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-04-03', notes: null },
  { company_name: 'PagerDuty', job_title: 'Incident Engineer', job_type: 'Full-time', status: 'Offer', applied_date: '2024-04-05', notes: 'Good compensation package' },
  { company_name: 'Zoom', job_title: 'Video Engineer', job_type: 'Full-time', status: 'Rejected', applied_date: '2024-04-08', notes: 'Position cancelled' },
  { company_name: 'HubSpot', job_title: 'Growth Engineer', job_type: 'Full-time', status: 'Interviewing', applied_date: '2024-04-10', notes: 'Third round in progress' },
  { company_name: 'Intercom', job_title: 'Software Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-04-12', notes: null },
  { company_name: 'Zendesk', job_title: 'Support Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-04-15', notes: null },
  { company_name: 'Okta', job_title: 'Identity Engineer', job_type: 'Full-time', status: 'Interviewing', applied_date: '2024-04-18', notes: 'Security clearance needed' },
  { company_name: 'Auth0', job_title: 'Security Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-04-20', notes: null },
  { company_name: 'Supabase', job_title: 'Database Intern', job_type: 'Internship', status: 'Offer', applied_date: '2024-04-22', notes: 'Remote internship offer' },
  { company_name: 'PlanetScale', job_title: 'MySQL Engineer', job_type: 'Full-time', status: 'Rejected', applied_date: '2024-04-25', notes: 'Went with another candidate' },
  { company_name: 'Neon', job_title: 'Postgres Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-04-28', notes: null },
  { company_name: 'Railway', job_title: 'Infrastructure Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-05-01', notes: null },
  { company_name: 'Render', job_title: 'Platform Engineer', job_type: 'Part-time', status: 'Interviewing', applied_date: '2024-05-03', notes: 'Contract to hire' },
  { company_name: 'Fly.io', job_title: 'Edge Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-05-05', notes: null },
  { company_name: 'Anthropic', job_title: 'AI Engineer', job_type: 'Full-time', status: 'Interviewing', applied_date: '2024-05-08', notes: 'Very excited about this one' },
  { company_name: 'OpenAI', job_title: 'ML Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-05-10', notes: null },
  { company_name: 'Hugging Face', job_title: 'ML Intern', job_type: 'Internship', status: 'Offer', applied_date: '2024-05-12', notes: 'Dream internship offer' },
  { company_name: 'Cohere', job_title: 'NLP Engineer', job_type: 'Full-time', status: 'Rejected', applied_date: '2024-05-15', notes: 'Need more ML experience' },
  { company_name: 'Mistral', job_title: 'Research Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-05-18', notes: null },
  { company_name: 'Together AI', job_title: 'Inference Engineer', job_type: 'Full-time', status: 'Interviewing', applied_date: '2024-05-20', notes: 'System design round done' },
  { company_name: 'Scale AI', job_title: 'Data Engineer', job_type: 'Full-time', status: 'Applied', applied_date: '2024-05-22', notes: null },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    const data = applications.map((app) => ({
      ...app,
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert('applications', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('applications', null, {});
  },
};