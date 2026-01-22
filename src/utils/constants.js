// Static data for the portfolio

export const personalInfo = {
    name: 'Sathwik Veeramalli',
    email: 'veeramallisathwik@gmail.com',
    phone: '+91 9676214660',
    title: 'Software Engineer Frontend | React & TypeScript Specialist',
    tagline:
        'Frontend engineer with nearly 3 years building enterprise React apps at Bosch',
    college: 'Indian Institute of Technology, Hyderabad',
    degree: 'B.Tech in Computer Science and Engineering',
    cgpa: '8.17/10.0',
    graduationYear: '2023',
    experienceSince: 'August 2023',
    location: 'Bangalore, India',
    linkedin: 'https://www.linkedin.com/in/veeramalli-sathwik-43951423b',
    github: 'https://github.com/sathwik22',
    resumePath: '/Veeramalli_Sathwik_Resume.pdf',
};

export const heroLines = [
    "Hi, I'm Sathwik Veeramalli.",
    'Software Engineer at Bosch.',
    'React & TypeScript Expert.',
    'Building for 100k+ Users.',
    'AI-Powered Development.',
];

export const aboutDescription = `Frontend engineer with nearly 3 years building enterprise React applications at Bosch, specializing in performance optimization, scalable state management, and test automation. Selected as core member of the Generative AI Task Force, I've delivered 5 production-ready AI prototypes while leading testing standardization across teams.`;

export const experienceItems = [
    {
        period: 'Aug 2023 - Present',
        title: 'Software Engineer Frontend',
        company: 'Bosch Global Software Technologies',
        location: 'Bangalore',
        achievements: [
            'Led React and TypeScript development for multi-brand automotive e-commerce platform serving 100k+ users across 20+ countries (Ford, Jaguar, Toyota, Subaru, Isuzu)',
            'Owned and standardized Jest + React Testing Library setup across all React OEs, defining test architecture, shared utilities, and CI integration',
            'Drove AI-assisted testing adoption with GitHub Copilot, reducing test creation time by 60%',
            'Initiated vulnerability reduction efforts, fixing critical and high-severity issues, resulting in 35% fewer security findings',
            'Architected Redux Toolkit-based state management, reducing prop drilling and improving maintainability',
            'Built reusable component library from Figma designs, accelerating feature delivery by 40%',
            'Optimized performance using memoization, lazy loading, and virtualization, improving page load time by 35%',
            'Engineered high-performance search and filter workflows handling 46,000+ records',
            'Selected as core member of Generative AI Task Force; delivered 5 production-ready AI prototypes including multimodal chatbot solutions',
        ],
    },
];

export const skills = [
    // Frontend Core
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript (ES6+)', level: 95 },
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 90 },
    { name: 'Next.js', level: 80 },
    // State Management & Architecture
    { name: 'Redux Toolkit', level: 90 },
    { name: 'Context API', level: 85 },
    { name: 'React-Admin', level: 85 },
    { name: 'Material-UI', level: 90 },
    // Testing & Quality
    { name: 'Jest', level: 90 },
    { name: 'React Testing Library', level: 90 },
    { name: 'Cypress', level: 85 },
    { name: 'BDD/Gherkin', level: 80 },
    { name: 'TDD', level: 85 },
    // Backend & Database
    { name: 'Python', level: 80 },
    { name: 'Django', level: 75 },
    { name: 'FastAPI', level: 75 },
    { name: 'SQL', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    // DevOps & Tools
    { name: 'Git', level: 90 },
    { name: 'Azure DevOps', level: 85 },
    { name: 'CI/CD', level: 80 },
    { name: 'GitHub Copilot', level: 95 },
    { name: 'Postman', level: 85 },
    // Methodologies
    { name: 'Agile/Scrum', level: 90 },
];

export const projectData = [
    {
        title: 'Multi-Brand Automotive E-Commerce Platform',
        description:
            'Led React and TypeScript development for an enterprise e-commerce platform serving 100k+ users across 20+ countries (Ford, Jaguar, Toyota, Subaru, Isuzu). Architected Redux Toolkit-based state management, built reusable component library from Figma, and optimized performance with lazy loading and virtualization, improving load time by 35%.',
        technologies: [
            'React',
            'TypeScript',
            'Redux Toolkit',
            'Material-UI',
            'Jest',
            'Cypress',
        ],
        image: '/ford-rotunda.PNG',
        feedback: '',
        demo: '#',
        highlights: [
            '100k+ users across 20+ countries',
            '35% performance improvement',
            '40% faster feature delivery',
            'Handling 46,000+ records',
        ],
    },
    {
        title: 'Bosch Car Service AI Assistant',
        description:
            'Built an AI-powered diagnostic assistant using React and Material UI that provides personalized automotive solutions. Implemented feedback-driven learning pipeline to improve answer accuracy, collected user feedback for continuous improvement, and aggregated verified web resources to generate customized solution guides.',
        technologies: [
            'React',
            'Material-UI',
            'AI/ML',
            'REST API',
            'TypeScript',
        ],
        image: '/ai-assistant.PNG',
        feedback: '',
        demo: 'https://bosch-car-service-ai-assistant.vercel.app/',
        github: 'https://github.com/sathwik22/Bosch-Car-Service-AI-Assistant',
    },
    {
        title: 'Department Fund Management System',
        description:
            'Full-stack application using React and Django REST Framework with PostgreSQL backend. Implemented role-based access control with multi-level approval workflow, designed real-time dashboards for fund tracking and utilization analytics, ensuring secure and efficient departmental budget management.',
        technologies: ['React', 'Django', 'PostgreSQL', 'REST API', 'Python'],
        image: '/ddf-management.PNG',
        feedback: '',
        demo: '#',
        github: 'https://github.com/sathwik22/DDF-Management-System',
    },
    {
        title: 'AI-Driven Testing & Quality Initiative',
        description:
            'Owned and standardized Jest + React Testing Library setup across multiple teams. Drove AI-assisted testing adoption using GitHub Copilot, reducing test creation time by 60%. Trained team members on BDD-style scenarios and effective unit testing, establishing best practices for the entire frontend organization.',
        technologies: [
            'Jest',
            'React Testing Library',
            'BDD/Gherkin',
            'GitHub Copilot',
            'CI/CD',
        ],
        image: '/testing-initiative.PNG',
        feedback: '',
        demo: '#',
        highlights: [
            '60% reduction in test creation time',
            'Trained 15+ developers',
            '35% fewer security findings',
            'Standardized testing across teams',
        ],
    },
    {
        title: 'Security Vulnerability Report Viewer',
        description:
            'Award-winning security vulnerability management dashboard developed during the 2025 Security Innovation Hackathon. Provides unified interface for analyzing outputs from Trivy, Grype, and other security scanners. Features smart filtering, severity-based prioritization, and mobile-responsive design. Addresses real-world DevSecOps challenges by centralizing vulnerability tracking and streamlining remediation workflows for enterprise development teams.',
        technologies: [
            'React',
            'Material-UI',
            'DevSecOps',
            'Security Tools',
            'Data Visualization',
        ],
        image: '/vulnerability-viewer.PNG',
        feedback: '',
        demo: 'https://hackathon-semantic.vercel.app/',
        github: 'https://github.com/sathwik22/hackathon-semantic',
        highlights: [
            '2025 Security Innovation Hackathon',
            'Unified multi-scanner interface',
            'Smart vulnerability prioritization',
            'DevSecOps workflow optimization',
        ],
    },
];
