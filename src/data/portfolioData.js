export const portfolioData = {
  siteTitle: 'Shubham Srivastava | Portfolio',
  logo: 'S.',
  name: 'Shubham.',
  profileImage:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
  resumePath: `${import.meta.env.BASE_URL}my_resume.pdf`,

  typingLines: [
    'Senior Software Engineer | Java & Microservices',
    'Banking · Telecom · Trading Platforms',
    'Cloud-native systems built for scale',
    'Spring Boot · Kafka · Low-latency engineering',
  ],

  education: [
    {
      institute: 'LNCT Bhopal',
      degree: 'B.Tech, Computer Science & Engineering',
      year: 'Undergraduate',
      score: '',
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    },
    {
      institute: 'Lok Manya High School',
      degree: 'Intermediate (BSEB Board)',
      year: 'Higher Secondary',
      score: '',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    },
    {
      institute: 'DAV Public School',
      degree: 'Matriculation (CBSE Board)',
      year: 'Secondary',
      score: '',
      img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop',
    },
  ],

  experience: [
    {
      company: 'NatWest Group India',
      role: 'Software Engineer — Trading Platforms',
      timeline: 'Mar 2026 - Present',
      img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
    },
    {
      company: 'Publicis Sapient',
      role: 'Software Engineer',
      timeline: 'Oct 2025 - Mar 2026',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      company: 'Amdocs Development Center India',
      role: 'Software Engineer — Real-Time Billing',
      timeline: 'Jun 2022 - Oct 2025',
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop',
    },
    {
      company: 'Cognizant Technology Solutions',
      role: 'Java Developer',
      timeline: 'Dec 2019 - Jun 2022',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    },
  ],

  projects: [
    {
      title: 'Invest with Your Savings',
      role: 'Java-based investment platform for KBC customers to allocate savings into fund products (Cognizant)',
      timeline: '2019 - 2022',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'Amdocs Real-Time Billing',
      role: 'Cloud-native billing ecosystem for real-time charging, invoicing, and end-to-end monetization',
      timeline: '2022 - 2025',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'NatWest Trading Platform',
      role: 'Low-latency trading systems supporting critical transaction flows in the banking domain',
      timeline: '2026 - Present',
      img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1000&auto=format&fit=crop',
    },
  ],

  technicalSkills: [
    [
      { name: 'Java', icon: 'java-coffee-cup.png' },
      { name: 'Spring Boot', icon: 'spring-logo.png' },
      { name: 'Microservices', icon: 'services.png' },
    ],
    [
      { name: 'Spring Data JPA', icon: 'database.png' },
      { name: 'Spring Security', icon: 'shield.png' },
      { name: 'JWT', icon: 'password.png' },
      { name: 'Kafka', icon: 'apache-kafka.png' },
    ],
    [
      { name: 'Oracle', icon: 'oracle-logo.png' },
      { name: 'Couchbase', icon: 'couchbase.png' },
      { name: 'Python', icon: 'python.png' },
      { name: 'React JS', icon: 'react.png' },
    ],
    [
      { name: 'Docker', icon: 'docker.png' },
      { name: 'Kubernetes', icon: 'kubernetes.png' },
      { name: 'Jenkins', icon: 'jenkins.png' },
      { name: 'Azure', icon: 'azure.png' },
      { name: 'OpenShift', icon: 'red-hat-openshift.png' },
    ],
    [
      { name: 'Flyway', icon: 'database-migration.png' },
      { name: 'Swagger', icon: 'api-settings.png' },
      { name: 'GitLab', icon: 'gitlab.png' },
      { name: 'Bitbucket', icon: 'bitbucket.png' },
    ],
  ],

  nonTechnicalSkills: [
    [
      { name: 'Banking', icon: 'bank-building.png' },
      { name: 'Telecom', icon: 'phone.png' },
      { name: 'Trading', icon: 'stocks.png' },
    ],
    [
      { name: 'Low Latency', icon: 'flash-on.png' },
      { name: 'Multithreading', icon: 'parallel-tasks.png' },
      { name: 'Data Structures', icon: 'flow-chart.png' },
      { name: 'Pub/Sub', icon: 'message.png' },
    ],
    [
      { name: 'Spring Core', icon: 'leaf.png' },
      { name: 'KDB+', icon: 'database.png' },
      { name: 'JMX', icon: 'monitoring.png' },
    ],
  ],

  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shubhamsriv98/',
      className: 'cube-link in',
      icon: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/shubhamsriv98',
      className: 'cube-link yt',
      icon: 'https://img.icons8.com/ios-filled/50/000000/github.png',
    },
  ],

  formEndpoint: '',
};
