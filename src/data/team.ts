export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  quote?: string;
  image?: string;
  imageAlt?: string;
  linkedin?: string;
  email?: string;
  category: 'leadership' | 'board' | 'kpa' | 'extended';
  tags?: string[];
}

export const teamMembers: TeamMember[] = [
  // Leadership
  {
    id: 'sharly-moraa',
    name: 'Sharly Moraa',
    role: 'Executive Director & Programs Lead',
    bio: `A distinguished advocate for Sexual and Reproductive Health Rights in Kenya, Sharly specializes in leveraging technology to counter harmful societal norms like Gender-Based Violence (GBV) and to prevent online sexual harassment. As a staunch advocate for the ethical use of AI, she ensures that Uwezo's digital and community interventions remain fundamentally human-centric, translating innovative solutions into tangible dignity for underserved youth.`,
    quote: `"Every girl deserves dignity, every boy deserves knowledge, and both deserve opportunity."`,
    image: '/images/team/Sharly1.jpeg',
    imageAlt: 'Portrait of Sharly Moraa',
    linkedin: 'https://www.linkedin.com/in/sharly-misati-818b28261/',
    email: 'sharly.moraa@uwezolinkinitiative.org',
    category: 'leadership',
    tags: ['SRHR Advocacy', 'Ethical AI', 'Eco Loop', 'Menstrual Equity']
  },
  {
    id: 'tevin-omondi',
    name: 'Tevin Omondi',
    role: 'Co-Founder & Technology Lead',
    bio: `A vocal advocate for green industrialization, Tevin specializes in leveraging technology for social good. As the Co-Founder and Technology Lead, he architects the Uwezo Fab Lab and utilizes IoT prototypes to create scalable, low-barrier innovations. Furthermore, he leads the technical development of the Uwezo Eco Loop program, building the blockchain architecture and digital voucher systems that ensure transparent value distribution. He is dedicated to empowering rural Kenya through sustainable, community-driven technological advancement.`,
    quote: `"Technology is only as powerful as the lives it transforms."`,
    image: '/images/team/Tevin0.jpeg',
    imageAlt: 'Portrait of Tevin Omondi',
    linkedin: 'https://www.linkedin.com/in/tevin-omondi-40655723b/',
    email: 'tevin@uwezolinkinitiative.org',
    category: 'leadership',
    tags: ['Blockchain for Impact', 'Uwezo Fab Lab', 'Green Economy', 'Smart Contracts']
  },

  // Board Members
  {
    id: 'ali-raqiba',
    name: 'Ali Raqiba',
    role: 'Assistant Program Officer & Field Liaison',
    bio: `Ali serves as the vital link between technical development and community adoption, advocating for green industrialization through the Uwezo Fab Lab and coordinating field activities that introduce rural youth to IoT and sustainable engineering.`,
    image: '/images/team/Ali.jpeg',
    imageAlt: 'Portrait of Ali Raqiba',
    linkedin: 'https://www.linkedin.com/in/raqiba-ali-77904b257/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['Uwezo Fab Lab', 'Youth Tech', 'Green Economy']
  },
  {
    id: 'peris-makworo',
    name: 'Peris Makworo',
    role: 'Community Outreach Officer',
    bio: `Peris leads direct community engagement for SRHR initiatives, facilitating the distribution of Eco Loop vouchers at the village level and ensuring the social mission is understood and embraced by the families we serve.`,
    image: '/images/team/Peris.jpeg',
    imageAlt: 'Portrait of Peris Makworo',
    linkedin: 'https://www.linkedin.com/in/peris-makworo-5805602a4/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['SRHR Education', 'Eco Loop', 'Grassroots']
  },
  {
    id: 'sharon-kemunto',
    name: 'Sharon Kemunto',
    role: 'Administrative Officer & Communications Specialist',
    bio: `Sharon expertly manages Uwezo's internal operations and organizational communications. She ensures administrative excellence and highly effective internal processes, playing a vital role in coordinating and driving efficiency across all four of our core programs.`,
    image: '/images/team/Sharon.jpeg',
    imageAlt: 'Portrait of Sharon Kemunto',
    linkedin: 'https://www.linkedin.com/in/sharon-misati-491341188/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['Operations', 'Administration', 'Comms']
  },
  {
    id: 'johnson-gitonga',
    name: 'Johnson Gitonga',
    role: 'Partnerships & PR Assistant',
    bio: `Johnson manages the initiative's public image and partner network, working closely with the executive team to communicate program impact to stakeholders, media, and local government bodies.`,
    image: '/images/team/Johnson.jpeg',
    imageAlt: 'Portrait of Johnson Gitonga',
    linkedin: 'https://www.linkedin.com/in/johnson-gitonga-391ab4347/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['Public Relations', 'Partnerships', 'Outreach']
  },
  {
    id: 'bob-kimani',
    name: 'Bob Kimani',
    role: 'Implementation Officer & Civic Educator',
    bio: `An IT enthusiast and versatile mobile developer, Bob leads the on-ground implementation of Uwezo Link's diverse suite of products. Beyond driving civic literacy initiatives, he ensures all our technological solutions effectively reach their target communities, empowering youth to become informed, active participants in the digital economy.`,
    image: '/images/team/Bob.jpeg',
    imageAlt: 'Portrait of Bob Kimani',
    linkedin: 'https://www.linkedin.com/in/bob-kimani-55893a33a/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['Civic Literacy', 'iOS Dev', 'Digital Rights']
  },
  {
    id: 'kevin-ojwang',
    name: 'Kevin Ojwang',
    role: 'Assistant Field Officer & STEM Educator',
    bio: `Kevin anchors field implementation of the Uwezo Teaching program, combining a background in data analytics and AI to translate complex STEM concepts into digestible curricula for youth.`,
    image: '/images/team/Kevin.jpeg',
    imageAlt: 'Portrait of Kevin Ojwang',
    linkedin: 'https://www.linkedin.com/in/kevin-ojwang-aa71a6308/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['STEM Education', 'Data Analytics', 'AI']
  },
  {
    id: 'teresia-wanjohi',
    name: 'Teresia Wanjohi',
    role: 'Technology Assistant & Cybersecurity Specialist',
    bio: `Specializing in vulnerability assessment and proactive security, Teresia ensures the integrity of Uwezo's digital infrastructure and leads the security awareness module within Uwezo Teaching, mentoring the next generation of digital defenders.`,
    image: '/images/team/Teresia.jpeg',
    imageAlt: 'Placeholder: Teresia Wanjohi',
    linkedin: 'https://www.linkedin.com/in/teresia-wanjohi-379575182/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['Cybersecurity', 'Digital Safety', 'STEM']
  },
  {
    id: 'christine-muna',
    name: 'Christine Muna',
    role: 'Senior Advisory Consultant',
    bio: `With over 15 years of leadership in the nonprofit and humanitarian sectors, Christine provides strategic oversight on donor engagement and international visibility, aligning Uwezo's initiatives with global ESG standards.`,
    image: '/images/team/placeholder.jpeg',
    imageAlt: 'Placeholder: Christine Muna',
    linkedin: 'https://www.linkedin.com/in/christine-muna-a35878155/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['Strategy', 'Global Comms', 'ESG']
  },
  {
    id: 'hellen-koros',
    name: 'Hellen Koros',
    role: 'Finance & Compliance Officer',
    bio: `As a Certified Public Accountant, Hellen maintains the financial health and transparency of the initiative, overseeing budget allocation and ensuring rigorous compliance with international accounting standards for nonprofits.`,
    image: '/images/team/placeholder.jpeg',
    imageAlt: 'Placeholder: Hellen Koros',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['Finance', 'CPA', 'Compliance']
  },

  // KPA Representative
  {
    id: 'evans-james',
    name: 'Evans James',
    role: 'Executive Director, Kenya Poverty Action',
    bio: `Development expert with 20+ years in water, health, and sanitation. Executive Director of KPA and advisor to multiple organizations. Skilled in strategic partnerships, resource mobilization, and policy advocacy. Dedicated to fostering sustainable, community-driven change.`,
    image: '/images/team/placeholder.jpeg',
    imageAlt: 'Placeholder: Evans James',
    email: 'info@kenyapovertyaction.org.uk',
    category: 'kpa',
    tags: ['Policy Advocacy', 'WASH', 'Resource Mobilization']
  }
];
