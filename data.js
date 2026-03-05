/* =====================================================
   DATA.JS — Mock Job Dataset (20+ jobs)
   ===================================================== */

const JOBS = [
  {
    id: 1,
    emoji: '🚀',
    title: 'Frontend Developer Intern',
    company: 'TechNova Solutions',
    location: 'Bangalore, Karnataka',
    type: 'Internship',
    salary: '₹15,000/mo',
    salaryNum: 15000,
    posted: '2026-02-28',
    description: 'Join our dynamic frontend team to build beautiful, performant web apps. You will work closely with senior engineers on real products used by thousands of users. Ideal for students passionate about UI/UX and modern web technologies.',
    responsibilities: [
      'Build responsive UI components using HTML, CSS, and JavaScript',
      'Collaborate with designers and backend developers',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and team stand-ups',
      'Optimise web pages for speed and SEO'
    ],
    requirements: [
      'Pursuing B.Tech / BCA / BSc in Computer Science or related field',
      'Strong knowledge of HTML5, CSS3, and JavaScript',
      'Familiarity with Git and version control',
      'Understanding of responsive design principles',
      'Good communication skills'
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'Figma'],
    category: 'Technology'
  },
  {
    id: 2,
    emoji: '📊',
    title: 'Data Analyst Intern',
    company: 'DataBridge Analytics',
    location: 'Hyderabad, Telangana',
    type: 'Internship',
    salary: '₹12,000/mo',
    salaryNum: 12000,
    posted: '2026-02-26',
    description: 'Help our data science team extract insights from large datasets to drive business decisions. You will use Python, SQL, and data visualisation tools to create impactful reports and dashboards.',
    responsibilities: [
      'Collect, process, and analyse structured and unstructured data',
      'Create visualisations and dashboards in Power BI / Tableau',
      'Write SQL queries to extract data from relational databases',
      'Present findings to stakeholders in a clear manner',
      'Support the data science team on ML projects'
    ],
    requirements: [
      'Pursuing B.Tech / BCA / BSc in any stream',
      'Knowledge of Python and SQL',
      'Analytical mindset and attention to detail',
      'Familiarity with Excel or Google Sheets',
      'Eager to learn and adapt quickly'
    ],
    skills: ['Python', 'SQL', 'Pandas', 'Power BI', 'Excel', 'Tableau'],
    category: 'Data'
  },
  {
    id: 3,
    emoji: '🎨',
    title: 'UI/UX Design Intern',
    company: 'Pixel Studio',
    location: 'Mumbai, Maharashtra',
    type: 'Internship',
    salary: '₹10,000/mo',
    salaryNum: 10000,
    posted: '2026-02-25',
    description: 'Design intuitive and visually stunning interfaces for web and mobile applications. Work alongside product managers and developers to create seamless user experiences that delight customers.',
    responsibilities: [
      'Design wireframes, mockups, and prototypes in Figma',
      'Conduct user research and usability testing',
      'Create and maintain design systems and style guides',
      'Collaborate with developers to ensure pixel-perfect implementation',
      'Iterate designs based on user feedback and analytics'
    ],
    requirements: [
      'Pursuing degree in Design, Fine Arts, or Computer Science',
      'Proficiency in Figma or Adobe XD',
      'Understanding of UX principles and accessibility',
      'Strong portfolio of design projects',
      'Creative eye for colour, typography, and layout'
    ],
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Illustrator'],
    category: 'Design'
  },
  {
    id: 4,
    emoji: '☁️',
    title: 'Cloud Engineer Intern',
    company: 'CloudFirst Technologies',
    location: 'Pune, Maharashtra',
    type: 'Internship',
    salary: '₹18,000/mo',
    salaryNum: 18000,
    posted: '2026-02-24',
    description: 'Get hands-on experience with AWS and DevOps practices. Assist in designing, deploying, and maintaining cloud infrastructure for enterprise clients.',
    responsibilities: [
      'Assist in provisioning and managing AWS resources',
      'Write Infrastructure as Code using Terraform or CloudFormation',
      'Monitor system performance and set up alerts',
      'Support CI/CD pipeline development',
      'Document cloud architecture decisions'
    ],
    requirements: [
      'Pursuing B.Tech in CS, IT, or ECE',
      'Basic understanding of AWS services',
      'Familiarity with Linux command line',
      'Knowledge of networking fundamentals',
      'Passion for automation and DevOps'
    ],
    skills: ['AWS', 'Terraform', 'Linux', 'Docker', 'Git', 'Python'],
    category: 'Technology'
  },
  {
    id: 5,
    emoji: '📱',
    title: 'Android Developer Intern',
    company: 'AppCraft Labs',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    salary: '₹14,000/mo',
    salaryNum: 14000,
    posted: '2026-02-22',
    description: 'Build and maintain Android applications used by millions of users. You will work on feature development, bug fixes, and performance optimisation in a fast-paced startup environment.',
    responsibilities: [
      'Develop new features for our Android app using Kotlin',
      'Write unit and integration tests',
      'Identify and fix performance bottlenecks',
      'Collaborate with backend developers on API integration',
      'Follow Material Design guidelines'
    ],
    requirements: [
      'Pursuing B.Tech / MCA in Computer Science',
      'Knowledge of Kotlin or Java for Android',
      'Understanding of Android SDK and APIs',
      'Familiarity with RESTful APIs',
      'Experience with Git'
    ],
    skills: ['Kotlin', 'Java', 'Android SDK', 'REST APIs', 'Firebase', 'Git'],
    category: 'Mobile'
  },
  {
    id: 6,
    emoji: '🤖',
    title: 'Machine Learning Intern',
    company: 'NeuralPath AI',
    location: 'Bangalore, Karnataka',
    type: 'Internship',
    salary: '₹20,000/mo',
    salaryNum: 20000,
    posted: '2026-02-20',
    description: 'Work on cutting-edge ML research and production models. Gain experience in training, evaluating, and deploying machine learning models for real-world applications in computer vision and NLP.',
    responsibilities: [
      'Assist in data collection, preprocessing, and feature engineering',
      'Train and evaluate ML models using PyTorch / TensorFlow',
      'Implement and benchmark state-of-the-art algorithms',
      'Write research reports and document experiments',
      'Deploy models using FastAPI or Flask'
    ],
    requirements: [
      'Pursuing B.Tech / M.Tech in CS, AI, or Data Science',
      'Strong Python programming skills',
      'Familiarity with machine learning concepts',
      'Knowledge of NumPy, Pandas, and scikit-learn',
      'Understanding of statistics and linear algebra'
    ],
    skills: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'NumPy', 'Pandas'],
    category: 'AI/ML'
  },
  {
    id: 7,
    emoji: '🔐',
    title: 'Cybersecurity Analyst Intern',
    company: 'SecureShield Corp',
    location: 'Delhi, NCR',
    type: 'Internship',
    salary: '₹16,000/mo',
    salaryNum: 16000,
    posted: '2026-02-18',
    description: 'Join our security operations team and protect critical systems from cyber threats. You will conduct vulnerability assessments, monitor security events, and help respond to incidents.',
    responsibilities: [
      'Monitor SIEM dashboards for security incidents',
      'Conduct vulnerability scans and penetration tests',
      'Analyse security logs and create incident reports',
      'Research emerging cyber threats and CVEs',
      'Assist in implementing security policies'
    ],
    requirements: [
      'Pursuing B.Tech / BSc in CS or IT',
      'Basic knowledge of networking (TCP/IP, DNS, HTTP)',
      'Familiarity with Linux and scripting',
      'Interest in cybersecurity and ethical hacking',
      'Analytical and problem-solving mindset'
    ],
    skills: ['Linux', 'Networking', 'Python', 'Wireshark', 'Nmap', 'SIEM'],
    category: 'Security'
  },
  {
    id: 8,
    emoji: '✍️',
    title: 'Content Writer Intern',
    company: 'ContentHive Media',
    location: 'Remote',
    type: 'Internship',
    salary: '₹8,000/mo',
    salaryNum: 8000,
    posted: '2026-02-16',
    description: 'Create engaging, SEO-optimised content for blogs, social media, and marketing campaigns. Learn the art of digital storytelling and grow your writing career with a supportive team.',
    responsibilities: [
      'Write 3-5 blog articles per week on tech and business topics',
      'Research and incorporate relevant keywords for SEO',
      'Proofread and edit content for grammar and clarity',
      'Collaborate with the marketing team on campaigns',
      'Maintain an editorial calendar'
    ],
    requirements: [
      'Pursuing any undergraduate degree',
      'Excellent written English communication skills',
      'Basic understanding of SEO principles',
      'Ability to meet deadlines consistently',
      'Curiosity and interest in technology trends'
    ],
    skills: ['Content Writing', 'SEO', 'WordPress', 'Research', 'Editing'],
    category: 'Marketing'
  },
  {
    id: 9,
    emoji: '📣',
    title: 'Digital Marketing Intern',
    company: 'GrowthEngine Agency',
    location: 'Ahmedabad, Gujarat',
    type: 'Internship',
    salary: '₹9,000/mo',
    salaryNum: 9000,
    posted: '2026-02-14',
    description: 'Gain hands-on experience in SEO, SEM, and social media marketing. Help our clients grow their online presence with data-driven digital marketing strategies.',
    responsibilities: [
      'Manage social media accounts and create content calendars',
      'Run and optimise Google Ads and Meta Ads campaigns',
      'Conduct keyword research and SEO audits',
      'Analyse campaign performance using Google Analytics',
      'Prepare weekly performance reports for clients'
    ],
    requirements: [
      'Pursuing BBA, MBA, or any undergraduate degree',
      'Familiarity with social media platforms',
      'Basic understanding of Google Analytics',
      'Creative mindset and attention to detail',
      'Eagerness to learn digital marketing tools'
    ],
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics', 'Social Media', 'MS Office'],
    category: 'Marketing'
  },
  {
    id: 10,
    emoji: '🏗️',
    title: 'Backend Developer Intern',
    company: 'CodeCraft Systems',
    location: 'Hyderabad, Telangana',
    type: 'Internship',
    salary: '₹16,000/mo',
    salaryNum: 16000,
    posted: '2026-02-12',
    description: 'Build scalable backend services and REST APIs. Work with Node.js, Express, and MongoDB to develop features powering our SaaS platform used by 50,000+ businesses.',
    responsibilities: [
      'Design and implement REST APIs using Node.js and Express',
      'Work with MongoDB and MySQL databases',
      'Write unit tests with Jest',
      'Optimise database queries for performance',
      'Document API endpoints with Swagger'
    ],
    requirements: [
      'Pursuing B.Tech / MCA in Computer Science or IT',
      'Knowledge of JavaScript / TypeScript',
      'Database fundamentals (SQL and NoSQL)',
      'Familiarity with HTTP, REST, and JSON',
      'Experience with Git'
    ],
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs', 'Git'],
    category: 'Technology'
  },
  {
    id: 11,
    emoji: '💼',
    title: 'Business Analyst',
    company: 'Infosys Ltd.',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹6,50,000/yr',
    salaryNum: 54167,
    posted: '2026-02-10',
    description: 'Analyse business processes and systems to identify opportunities for improvement. Work with stakeholders to gather requirements and translate them into technical specifications.',
    responsibilities: [
      'Gather and document business requirements from stakeholders',
      'Create process flow diagrams and use-case documents',
      'Bridge communication between business and technical teams',
      'Conduct gap analysis and impact assessments',
      'Support UAT and deployment activities'
    ],
    requirements: [
      'B.Tech / BBA / MBA degree',
      '0-1 year of relevant experience',
      'Excellent communication and presentation skills',
      'Proficiency in MS Office and JIRA',
      'Analytical thinking and problem-solving ability'
    ],
    skills: ['Business Analysis', 'SQL', 'JIRA', 'MS Office', 'Agile', 'Scrum'],
    category: 'Business'
  },
  {
    id: 12,
    emoji: '🌐',
    title: 'Full Stack Developer',
    company: 'Zoho Corporation',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    salary: '₹8,00,000/yr',
    salaryNum: 66667,
    posted: '2026-02-08',
    description: 'Develop end-to-end web applications for Zoho\'s suite of business products. Contribute to both frontend and backend development with modern technologies.',
    responsibilities: [
      'Develop full-stack features using React and Java',
      'Design and optimise RESTful APIs',
      'Write automated tests and maintain code quality',
      'Participate in Agile ceremonies and sprint planning',
      'Mentor junior developers and interns'
    ],
    requirements: [
      'B.Tech in Computer Science or related field',
      '1-3 years of full-stack development experience',
      'Proficiency in Java and JavaScript / React',
      'Experience with MySQL or PostgreSQL',
      'Strong problem-solving skills'
    ],
    skills: ['React', 'Java', 'Spring Boot', 'MySQL', 'JavaScript', 'Docker'],
    category: 'Technology'
  },
  {
    id: 13,
    emoji: '📈',
    title: 'Financial Analyst Intern',
    company: 'HDFC Bank',
    location: 'Mumbai, Maharashtra',
    type: 'Internship',
    salary: '₹12,000/mo',
    salaryNum: 12000,
    posted: '2026-02-06',
    description: 'Gain exposure to financial analysis, reporting, and modelling in one of India\'s largest banks. Work with treasury, retail, and corporate banking teams.',
    responsibilities: [
      'Prepare daily financial reports and MIS dashboards',
      'Analyse balance sheets, P&L statements, and cash flows',
      'Assist in budgeting and forecasting activities',
      'Conduct research on market trends and competitor analysis',
      'Support audit and compliance functions'
    ],
    requirements: [
      'Pursuing B.Com, MBA Finance, or PGDM',
      'Strong Excel and PowerPoint skills',
      'Basic understanding of financial statements',
      'Attention to detail and accuracy',
      'Ability to work in a structured environment'
    ],
    skills: ['Excel', 'Financial Modelling', 'Tally', 'MS Office', 'Data Analysis'],
    category: 'Finance'
  },
  {
    id: 14,
    emoji: '🎬',
    title: 'Video Editor Intern',
    company: 'Viral Motions Studio',
    location: 'Remote',
    type: 'Internship',
    salary: '₹7,000/mo',
    salaryNum: 7000,
    posted: '2026-02-04',
    description: 'Edit engaging video content for YouTube channels, Instagram Reels, and brand campaigns. Work with our creative team to bring stories to life through compelling visuals.',
    responsibilities: [
      'Edit raw footage into polished videos for multiple platforms',
      'Add motion graphics, captions, and sound design',
      'Collaborate with creative directors and clients',
      'Manage media assets and project files efficiently',
      'Deliver projects within tight deadlines'
    ],
    requirements: [
      'Pursuing any degree',
      'Proficiency in Adobe Premiere Pro or DaVinci Resolve',
      'Basic knowledge of After Effects is a plus',
      'Strong creative sense and storytelling ability',
      'Attention to pacing, colour, and audio'
    ],
    skills: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion Graphics', 'Canva'],
    category: 'Creative'
  },
  {
    id: 15,
    emoji: '🛒',
    title: 'E-commerce Operations Intern',
    company: 'Flipkart',
    location: 'Bangalore, Karnataka',
    type: 'Internship',
    salary: '₹20,000/mo',
    salaryNum: 20000,
    posted: '2026-02-02',
    description: 'Support e-commerce operations including seller management, catalogue quality, and logistics coordination. Gain exposure to India\'s largest e-commerce ecosystem.',
    responsibilities: [
      'Monitor and improve seller performance metrics',
      'Coordinate with logistics and fulfilment partners',
      'Analyse return rates and customer complaints',
      'Assist in catalogue management and quality checks',
      'Prepare operational reports for management'
    ],
    requirements: [
      'Pursuing BBA, MBA, or B.Tech in any stream',
      'Strong analytical and communication skills',
      'Proficiency in Excel and Google Sheets',
      'Customer-first mindset',
      'Ability to multitask in a fast-paced environment'
    ],
    skills: ['Excel', 'Operations', 'Logistics', 'Data Analysis', 'Communication'],
    category: 'Operations'
  },
  {
    id: 16,
    emoji: '🏥',
    title: 'Healthcare IT Intern',
    company: 'Apollo Health Systems',
    location: 'Hyderabad, Telangana',
    type: 'Internship',
    salary: '₹11,000/mo',
    salaryNum: 11000,
    posted: '2026-01-30',
    description: 'Work at the intersection of healthcare and technology. Support the IT team in maintaining hospital management systems, electronic health records, and telemedicine platforms.',
    responsibilities: [
      'Support development of hospital management software',
      'Assist in data migration and system integration projects',
      'Conduct user training sessions for hospital staff',
      'Troubleshoot technical issues in clinical systems',
      'Document technical processes and user guides'
    ],
    requirements: [
      'Pursuing B.Tech / BCA in Computer Science or IT',
      'Basic programming knowledge (Python or Java)',
      'Understanding of databases and SQL',
      'Good communication skills',
      'Interest in healthcare technology'
    ],
    skills: ['SQL', 'Python', 'HL7', 'Java', 'Technical Support', 'Documentation'],
    category: 'Healthcare'
  },
  {
    id: 17,
    emoji: '🌍',
    title: 'Sustainability Analyst Intern',
    company: 'GreenFuture Consulting',
    location: 'Delhi, NCR',
    type: 'Internship',
    salary: '₹9,000/mo',
    salaryNum: 9000,
    posted: '2026-01-28',
    description: 'Analyse environmental impact data and help develop sustainability strategies for corporate clients. Contribute to ESG reporting, carbon footprint analysis, and green certification processes.',
    responsibilities: [
      'Collect and analyse environmental performance data',
      'Assist in preparing ESG and sustainability reports',
      'Research sustainability regulations and frameworks',
      'Support clients in achieving green certifications',
      'Create data visualisations for impact presentations'
    ],
    requirements: [
      'Pursuing BSc Environmental Science, MBA, or B.Tech',
      'Interest in sustainability and ESG',
      'Good research and analytical skills',
      'Proficiency in Excel and data tools',
      'Strong written communication'
    ],
    skills: ['ESG', 'Data Analysis', 'Excel', 'Research', 'PowerPoint'],
    category: 'Environment'
  },
  {
    id: 18,
    emoji: '🎓',
    title: 'EdTech Product Intern',
    company: 'LearnSphere Technologies',
    location: 'Pune, Maharashtra',
    type: 'Internship',
    salary: '₹13,000/mo',
    salaryNum: 13000,
    posted: '2026-01-26',
    description: 'Work on an AI-powered learning management system used by 200+ schools. Collaborate with the product team to design features that improve student outcomes and teacher productivity.',
    responsibilities: [
      'Conduct user research with students and teachers',
      'Define product requirements and write user stories',
      'Prioritise features based on impact and feasibility',
      'Work with engineers and designers on feature delivery',
      'Analyse product metrics and user feedback'
    ],
    requirements: [
      'Pursuing B.Tech / BBA / MBA',
      'Analytical and creative thinking skills',
      'Excellent written and verbal communication',
      'Familiarity with Agile/Scrum workflows',
      'Passion for education and technology'
    ],
    skills: ['Product Management', 'Figma', 'JIRA', 'Analytics', 'User Research'],
    category: 'EdTech'
  },
  {
    id: 19,
    emoji: '🔬',
    title: 'Research & Development Intern',
    company: 'Tata Research Labs',
    location: 'Pune, Maharashtra',
    type: 'Internship',
    salary: '₹25,000/mo',
    salaryNum: 25000,
    posted: '2026-01-24',
    description: 'Contribute to cutting-edge R&D projects in materials science, AI, or smart manufacturing at Tata Research Labs. Work alongside Ph.D. researchers on publishable work.',
    responsibilities: [
      'Conduct literature reviews and summarise research findings',
      'Assist in designing and running experiments',
      'Collect, process, and analyse experimental data',
      'Contribute to research paper writing and documentation',
      'Present findings at internal research seminars'
    ],
    requirements: [
      'Pursuing M.Tech, M.Sc, or B.Tech in relevant discipline',
      'Strong academic background (8+ CGPA preferred)',
      'Prior research or project experience',
      'Critical thinking and scientific rigour',
      'Good written communication for documentation'
    ],
    skills: ['Research', 'Python', 'MATLAB', 'LaTeX', 'Data Analysis', 'Statistics'],
    category: 'Research'
  },
  {
    id: 20,
    emoji: '🏦',
    title: 'FinTech Software Engineer',
    company: 'Razorpay',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹12,00,000/yr',
    salaryNum: 100000,
    posted: '2026-01-22',
    description: 'Build the payment infrastructure that powers millions of transactions a day. Work on high-scale systems in a product-first company that is redefining India\'s fintech landscape.',
    responsibilities: [
      'Design and build high-throughput payment APIs',
      'Ensure system reliability with 99.99% uptime',
      'Implement security best practices for financial systems',
      'Conduct thorough code reviews and technical documentation',
      'Contribute to open source and internal tooling'
    ],
    requirements: [
      '0-2 years of software development experience',
      'Proficiency in Java, Go, or Python',
      'Strong understanding of distributed systems',
      'Experience with microservices and Kubernetes',
      'Knowledge of financial systems is a plus'
    ],
    skills: ['Java', 'Go', 'Microservices', 'Kubernetes', 'PostgreSQL', 'Redis'],
    category: 'FinTech'
  },
  {
    id: 21,
    emoji: '🛡️',
    title: 'Quality Assurance Intern',
    company: 'Wipro Technologies',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    salary: '₹12,000/mo',
    salaryNum: 12000,
    posted: '2026-01-20',
    description: 'Ensure software quality through comprehensive testing strategies. Work with development teams to identify bugs early and maintain high standards across enterprise applications.',
    responsibilities: [
      'Write and execute test cases for web and mobile apps',
      'Perform manual and automated testing using Selenium',
      'Log and track defects in JIRA',
      'Participate in sprint planning and retrospectives',
      'Document test results and quality metrics'
    ],
    requirements: [
      'Pursuing B.Tech / BCA in CS or IT',
      'Basic understanding of software testing concepts',
      'Familiarity with SDLC and Agile methodology',
      'Attention to detail and methodical thinking',
      'Knowledge of Java or Python is a plus'
    ],
    skills: ['Selenium', 'JIRA', 'Java', 'Test Planning', 'Agile', 'SQL'],
    category: 'Technology'
  },
  {
    id: 22,
    emoji: '💡',
    title: 'Innovation & Strategy Intern',
    company: 'McKinsey & Company',
    location: 'Delhi, NCR',
    type: 'Internship',
    salary: '₹50,000/mo',
    salaryNum: 50000,
    posted: '2026-01-18',
    description: 'Work with top management on strategy and innovation projects for Fortune 500 clients across industries. An exceptional opportunity for high-achieving students with strong analytical skills.',
    responsibilities: [
      'Conduct industry research and competitive benchmarking',
      'Build financial models and scenario analyses',
      'Develop client-ready presentations and reports',
      'Facilitate workshops and stakeholder interviews',
      'Contribute to internal knowledge management'
    ],
    requirements: [
      'Pursuing MBA, IIT/IIM graduate preferred',
      'Outstanding academic record',
      'Exceptional analytical and problem-solving skills',
      'Strong communication and presentation abilities',
      'Leadership experience in college activities'
    ],
    skills: ['Strategy', 'Financial Modelling', 'PowerPoint', 'Research', 'Communication'],
    category: 'Consulting'
  }
];

// Unique locations for filter dropdown
const LOCATIONS = [...new Set(JOBS.map(j => j.location.split(',')[1]?.trim() || j.location))].sort();

// Unique job types
const JOB_TYPES = [...new Set(JOBS.map(j => j.type))];
