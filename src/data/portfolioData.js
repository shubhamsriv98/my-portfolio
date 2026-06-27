const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

export const portfolioData = {
  siteTitle: 'Shubham Srivastava | Portfolio',
  logo: 'S.',
  name: 'Shubham.',
  profileImage: img('shubham.jpeg'),
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
      img: img('lnct.jpg'),
    },
    {
      institute: 'Lok Manya High School',
      degree: 'Intermediate (BSEB Board)',
      year: 'Higher Secondary',
      score: '',
      img: img('lokmanya.jpg'),
    },
    {
      institute: 'DAV Public School',
      degree: 'Matriculation (CBSE Board)',
      year: 'Secondary',
      score: '',
      img: img('dav.jpg'),
    },
  ],

  experience: [
    {
      company: 'NatWest Group India',
      role: 'Software Engineer — Trading Platforms',
      timeline: 'Mar 2026 - Present',
      img: img('natwest.jpg'),
    },
    {
      company: 'Publicis Sapient',
      role: 'Software Engineer',
      timeline: 'Oct 2025 - Mar 2026',
      img: img('publicis-sapient.jpg'),
    },
    {
      company: 'Amdocs Development Center India',
      role: 'Software Engineer — Real-Time Billing',
      timeline: 'Jun 2022 - Oct 2025',
      img: img('amdocs.jpg'),
    },
    {
      company: 'Cognizant Technology Solutions',
      role: 'Java Developer',
      timeline: 'Dec 2019 - Jun 2022',
      img: img('cognizant.jpg'),
    },
  ],

  projects: [
    {
      title: 'Invest with Your Savings',
      role: 'Java-based investment platform for KBC customers to allocate savings into fund products (Cognizant)',
      timeline: '2019 - 2022',
      img: img('cognizant.jpg'),
    },
    {
      title: 'Amdocs Real-Time Billing',
      role: 'Cloud-native billing ecosystem for real-time charging, invoicing, and end-to-end monetization',
      timeline: '2022 - 2025',
      img: img('amdocs.jpg'),
    },
    {
      title: 'NatWest Trading Platform',
      role: 'Low-latency trading systems supporting critical transaction flows in the banking domain',
      timeline: '2026 - Present',
      img: img('natwest.jpg'),
    },
  ],

  technicalSkills: [
    [
      { name: 'Java', icon: 'java.png', size: 'hero' },
      { name: 'Spring Boot', icon: 'spring-boot.png', size: 'hero' },
      { name: 'Spring Core', icon: 'spring-core.png' },
    ],
    [
      { name: 'Microservices', icon: 'microservices.png', size: 'hero' },
      { name: 'Spring Data JPA', icon: 'spring-data-jpa.png' },
      { name: 'Spring Security', icon: 'spring-security.png' },
      { name: 'JWT', icon: 'jwt.png' },
    ],
    [
      { name: 'Kafka', icon: 'kafka.png' },
      { name: 'Pub/Sub', icon: 'pubsub.png' },
      { name: 'Low Latency', icon: 'low-latency.png' },
      { name: 'Multithreading', icon: 'multithreading.png' },
    ],
    [
      { name: 'Oracle', icon: 'oracle.png' },
      { name: 'Couchbase', icon: 'couchbase.png' },
      { name: 'KDB+', icon: 'kdb.png' },
      { name: 'JMX', icon: 'jmx.png' },
    ],
    [
      { name: 'Python', icon: 'python.png' },
      { name: 'React JS', icon: 'react.png' },
      { name: 'Data Structures', icon: 'data-structures.png' },
    ],
    [
      { name: 'Docker', icon: 'docker.png' },
      { name: 'Kubernetes', icon: 'kubernetes.png' },
      { name: 'Jenkins', icon: 'jenkins.png' },
      { name: 'Azure', icon: 'azure.png' },
      { name: 'OpenShift', icon: 'openshift.png' },
    ],
    [
      { name: 'Flyway', icon: 'flyway.png' },
      { name: 'Swagger', icon: 'swagger.png' },
      { name: 'GitLab', icon: 'gitlab.png' },
      { name: 'Bitbucket', icon: 'bitbucket.png' },
    ],
    [
      { name: 'Banking', icon: 'banking.png' },
      { name: 'Telecom', icon: 'telecom.png' },
      { name: 'Trading', icon: 'trading.png' },
    ],
  ],

  nonTechnicalSkills: [
    [
      { name: 'Geopolitics', icon: 'geopolitics.png' },
      { name: 'Cricket Analysis', icon: 'cricket.png' },
      { name: 'World Order', icon: 'world-order.png' },
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
