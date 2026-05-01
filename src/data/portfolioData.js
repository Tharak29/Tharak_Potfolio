export const skills = {
  languages: [
    { icon: '🐍', name: 'Python', level: 'Proficient', cls: 'prof' },
    { icon: '🌐', name: 'HTML & CSS', level: 'Proficient', cls: 'prof' },
    { icon: '⚙️', name: 'C / C++', level: 'Beginner', cls: 'beg' },
    { icon: '🗄️', name: 'SQL', level: 'Proficient', cls: 'prof' },
    { icon: '📜', name: 'JavaScript', level: 'Learning', cls: 'inter' },
  ],
  web: [
    { icon: '🔥', name: 'Flask', level: 'Learning', cls: 'prof' },
    { icon: '⚛️', name: 'React', level: 'Learning', cls: 'learn' },
    { icon: '🗃️', name: 'MySQL', level: 'Proficient', cls: 'prof' },
    { icon: '📮', name: 'REST APIs', level: 'Learning', cls: 'inter' },
    { icon: '📧', name: 'SMTP / Email', level: 'Learning', cls: 'inter' },
  ],
  data: [
    { icon: '🐼', name: 'Pandas', level: 'Proficient', cls: 'prof' },
    { icon: '🔢', name: 'NumPy', level: 'Proficient', cls: 'prof' },
    { icon: '📈', name: 'Matplotlib', level: 'Proficient', cls: 'prof' },
    { icon: '🤖', name: 'Scikit-learn', level: 'Learning', cls: 'learn' },
  ],
  tools: [
    { icon: '🐙', name: 'Git & GitHub', level: 'Intermediate', cls: 'inter' },
    { icon: '💻', name: 'VS Code', level: 'Proficient', cls: 'prof' },
  ],
  hardware: [
    { icon: '🔌', name: 'Arduino', level: 'Intermediate', cls: 'inter' },
  ],
};

export const journey = [
  {
    date: 'Sept 2023 — Present',
    title: 'B.Tech Computer Science & Engineering',
    org: 'SRM IST · Tiruchirappalli',
    desc: "Maintaining a CGPA of 9.51 across core CS subjects — DSA, DBMS, Operating Systems, AI, IoT, Computer Networks. Got involved in hackathons and built projects outside the curriculum because that's where the real learning happens.",
    tags: [
      { label: 'CGPA 9.51', cls: 'blue' },
      { label: 'Active', cls: 'green' },
      { label: '2027 Batch', cls: 'blue' },
    ],
    dotCls: 'filled',
  },
  {
    date: 'Jan 2026 — Feb 2026',
    title: 'AI & Analytics Intern',
    org: 'Hexalytics Business Solutions Pvt. Ltd.',
    desc: '4-week internship working on AI-driven analytics for K–12 education platforms. Used Python, Pandas, and Matplotlib to process student performance data and build visualizations that gave product teams clearer signals for decision-making.',
    tags: [
      { label: 'AI / Analytics', cls: 'purple' },
      { label: 'EdTech', cls: 'blue' },
      { label: 'Python', cls: 'blue' },
      { label: 'Data Viz', cls: 'purple' },
    ],
    dotCls: 'filled purple',
  },
  {
    date: '2025',
    title: '🏆 Protothon Winner',
    org: 'SRM IST · Trichy Hackathon',
    desc: 'Won Protothon 2025 — a university-level hackathon. Built a working prototype under time pressure, presented it, and took 1st place. One of those experiences that genuinely tested problem-solving under stress.',
    tags: [
      { label: '1st Place', cls: 'green' },
      { label: 'Hackathon', cls: 'amber' },
    ],
    dotCls: 'filled green',
  },
  {
    date: 'May 2022 — April 2023',
    title: 'Higher Secondary (HSC)',
    org: 'Amrita Vidyalayam · Kerala · CBSE',
    desc: 'Completed Class 12 with 76.6%. Science stream — Physics, Chemistry, Maths, Computer Science. This is where I first got properly introduced to programming and decided to pursue CS seriously.',
    tags: [
      { label: 'CBSE', cls: 'blue' },
      { label: '76.6%', cls: 'blue' },
    ],
    dotCls: '',
  },
];

export const projects = [
  {
    num: '01 / 03',
    icon: '💊',
    iconCls: 'blue',
    gradCls: 'blue-grad',
    title: 'Smart Medicine Reminder & Health Guidance System',
    desc: "Built for elderly residents who often miss medication. Automates reminders via email, lets staff schedule and manage users through a web dashboard. Also has a symptom checker that uses ML to suggest the right medical department — no more guessing which doctor to see.",
    tags: ['Flask', 'Python', 'MySQL', 'SMTP', 'Scikit-learn', 'HTML/CSS'],
    type: 'Web App · ML',
  },
  {
    num: '02 / 03',
    icon: '🌱',
    iconCls: 'green',
    gradCls: 'green-grad',
    title: 'IoT-Based Smart Irrigation System',
    desc: 'Arduino system that reads soil moisture and rain sensor data in real-time and automatically controls a water pump. When rain is detected, a servo-driven crop cover deploys to protect plants. Reduces water waste and manual effort — actually deployed and tested in a field setup.',
    tags: ['Arduino', 'C / C++', 'Soil Sensors', 'Servo Motor', 'IoT'],
    type: 'IoT · Hardware',
  },
  {
    num: '03 / 03',
    icon: '🌤️',
    iconCls: 'purple',
    gradCls: 'purple-grad',
    title: 'Weather Forecast Web App',
    desc: 'Clean, responsive weather app using the OpenWeatherMap API. Search any city, get current temperature, humidity, weather condition, and a 5-day outlook. Focused on fast loading and readable UI — my first serious JavaScript project involving real API integration and JSON parsing.',
    tags: ['JavaScript', 'HTML', 'CSS', 'OpenWeatherMap API', 'JSON'],
    type: 'Web App · API',
  },
];

export const certs = [
  { icon: '☁️', cls: 'oracle', name: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate', issuer: 'Oracle' },
  { icon: '🤖', cls: 'google', name: 'AI & Machine Learning Virtual Internship', issuer: 'AICTE Eduskill × Google' },
  { icon: '🌐', cls: 'coursera', name: 'Introduction to HTML, CSS & JavaScript', issuer: 'Coursera' },
  { icon: '🐍', cls: 'hrank', name: 'Python Certification', issuer: 'HackerRank' },
  { icon: '📊', cls: 'coursera', name: 'AI & Data Management', issuer: 'Coursera' },
  { icon: '🏆', cls: 'win', name: 'Protothon 2025 — 1st Place', issuer: 'SRM IST, Tiruchirappalli' },
];