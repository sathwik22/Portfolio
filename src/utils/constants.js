// Static data for the portfolio

export const personalInfo = {
    name: 'Veeramalli Sathwik',
    email: 'veeramallisathwik@gmail.com',
    title: 'Full Stack Developer & GenAI Enthusiast',
    college: 'Indian Institute of Technology, Hyderabad',
    experienceSince: 'August 2023',
    linkedin: 'https://www.linkedin.com/in/sathwik-veeramalli',
    github: 'https://github.com/sathwik22',
    resumePath: '/Veeramalli_Sathwik_Resume.pdf',
};

export const heroLines = [
    "Hi, I'm Veeramalli Sathwik.",
    'Frontend Developer.',
    'React Enthusiast.',
    'Exploring GenAI in Development.',
];

export const aboutDescription = `I'm a passionate Frontend Developer specializing in React and modern JavaScript frameworks, with a strong focus on integrating Generative AI tools to enhance development workflows. My expertise spans application development, UI/UX design, and implementing efficient testing strategies.`;

export const experienceItems = [
    'Joined Bosch in August 2023.',
    'Worked at Rexroth as a Frontend Developer on the ONEX project.',
    'Task Force Member of the GenAI initiative.',
    'Actively leveraging GitHub Copilot in project development.',
    'Joined the GenAI team in May 2024.',
    'Delivered a live demo to the EAL team showcasing GenAI advantages.',
    'Led frontend for a multi-brand automotive e-commerce platform using React, TypeScript, and Redux; built high-performance search for large datasets.',
    'Drove adoption of Behavior Driven Development (BDD) with Gherkin feature files, reducing post-release defects by 35%.',
    'Developed admin panels with React-Admin, cutting administrative effort by 30%.',
    'Built comprehensive unit and E2E test suites with Jest and React Testing Library.',
    'Enhanced SEO for React apps with dynamic meta tags and prioritized sitemaps.',
    'Led vulnerability management, reducing critical/high security issues to zero.',
    'Conducted GitHub Copilot sessions, demonstrating AI-assisted coding best practices.',
    'Mentored interns on frontend best practices and interactive map features.',
    'Contributed to AI-driven initiatives, including a virtual assistant prototype.',
];

export const skills = [
    // Languages
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'LaTeX', level: 60 },
    // Frameworks & Libraries
    { name: 'React', level: 95 },
    { name: 'Material-UI', level: 85 },
    { name: 'Sass', level: 75 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    // Tools
    { name: 'GitHub Copilot', level: 90 },
    { name: 'Postman', level: 80 },
    { name: 'Linux', level: 80 },
    { name: 'Solid Edge', level: 60 },
];

export const projectData = [
    {
        title: 'ONEX @ Rexroth',
        description:
            '"Built a modern, responsive dashboard for Rexroth using React and MUI, enabling users to navigate key links and add any page as a custom favorite. Leveraged GenAI for code optimization and unit testing, achieving a 30% productivity boost. Collaborated with the Bosch Rexroth team to enhance user experience and accessibility.',
        technologies: ['React-admin', 'MUI', 'Jest', 'cypress'],
        image: '/rexroth.PNG',
        feedback: 'https://gpd-theta.vercel.app/',
        demo: 'https://www.boschrexroth.com/en/de/myrexroth/',
        genAIProductivity:
            'https://inside-docupedia.bosch.com/confluence/display/SXEDAHome/DC+Executive+Summary',
    },
    {
        title: 'SRS @ React-Frontend',
        description:
            'Working in the SRS team as a React Developer. Developed a multi-select filter feature for Rotunda, enabling users to filter search results and items efficiently.contributing to the SRS team by resolving Sonar issues using Copilot, enhancing unit test coverage, and exploring ways to address critical security vulnerabilities using GenAI.',
        technologies: ['React', 'Jest'],
        image: '/ford-rotunda.PNG',
        feedback: '',
        demo: '#',
        genAIProductivity:
            'https://contactservicesolutions.atlassian.net/wiki/spaces/SRSCOR/pages/5171150849/OE+s+-+Unit+Testing+Initiative',
    },
];
