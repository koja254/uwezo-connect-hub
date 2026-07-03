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
  objectPosition?: string;
}

export const teamMembers: TeamMember[] = [
  // Leadership
  {
    id: 'sharly-moraa',
    name: 'Sharly Moraa',
    role: 'Executive Director & Programs Lead',
    bio: `A distinguished advocate for Sexual and Reproductive Health Rights in Kenya, Sharly specializes in leveraging technology to counter harmful societal norms like Gender-Based Violence (GBV) and to prevent online sexual harassment. As a staunch advocate for the ethical use of AI, she ensures that The Uwezo Network's digital and community interventions remain fundamentally human-centric, translating innovative solutions into tangible dignity for underserved youth.`,
    quote: `"Every girl deserves dignity, every boy deserves knowledge, and both deserve opportunity."`,
    image: '/images/team/Sharly1.jpeg',
    imageAlt: 'Portrait of Sharly Moraa',
    linkedin: 'https://www.linkedin.com/in/sharly-misati-818b28261/',
    email: 'sharly.moraa@uwezolinkinitiative.org',
    category: 'leadership',
    tags: ['SRHR Advocacy', 'Ethical AI', 'Days for Dignity', 'Menstrual Equity'],
    objectPosition: 'center 10%'
  },
  {
    id: 'tevin-omondi',
    name: 'Tevin Omondi',
    role: 'Co-Founder & Technology Lead',
    bio: `A vocal advocate for green industrialization, Tevin specializes in leveraging technology for social good. As the Co-Founder and Technology Lead, he architects The Uwezo Network's maker lab modules and utilizes IoT prototypes to create scalable, low-barrier innovations. Furthermore, he leads the technical development of our digital tools, building the digital database architecture and digital voucher systems that ensure transparent value distribution. He is dedicated to empowering rural Kenya through sustainable, community-driven technological advancement.`,
    quote: `"Technology is only as powerful as the lives it transforms."`,
    image: '/images/team/Tevin0.jpeg',
    imageAlt: 'Portrait of Tevin Omondi',
    linkedin: 'https://www.linkedin.com/in/tevin-omondi-40655723b/',
    email: 'tevin@uwezolinkinitiative.org',
    category: 'leadership',
    tags: ['Digital Vouchers', 'Maker Labs', 'Green Economy', 'Full-Stack Dev']
  },

  // Board Members
  {
    id: 'ali-raqiba',
    name: 'Ali Raqiba',
    role: 'Assistant Program Officer & Field Liaison',
    bio: `Ali serves as the vital link between technical development and community adoption, advocating for green industrialization through our tech labs and coordinating field activities that introduce rural youth to IoT and sustainable engineering.`,
    image: '/images/team/Ali.jpeg',
    imageAlt: 'Portrait of Ali Raqiba',
    linkedin: 'https://www.linkedin.com/in/raqiba-ali-77904b257/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['IoT Labs', 'Youth Tech', 'Green Economy'],
    objectPosition: 'center 35%'
  },
  {
    id: 'peris-makworo',
    name: 'Peris Makworo',
    role: 'Community Outreach Officer',
    bio: `Peris leads direct community engagement for SRHR initiatives, facilitating the distribution of Days for Dignity vouchers at the village level and ensuring the social mission is understood and embraced by the families we serve.`,
    image: '/images/team/Peris.jpeg',
    imageAlt: 'Portrait of Peris Makworo',
    linkedin: 'https://www.linkedin.com/in/peris-makworo-5805602a4/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['SRHR Education', 'Days for Dignity', 'Grassroots'],
    objectPosition: 'center 35%'
  },
  {
    id: 'sharon-kemunto',
    name: 'Sharon Kemunto',
    role: 'Administrative Officer & Communications Specialist',
    bio: `Sharon expertly manages The Uwezo Network's internal operations and organizational communications. She ensures administrative excellence and highly effective internal processes, playing a vital role in coordinating and driving efficiency across all of our core programs.`,
    image: '/images/team/Sharon.jpeg',
    imageAlt: 'Portrait of Sharon Kemunto',
    linkedin: 'https://www.linkedin.com/in/sharon-misati-491341188/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['Operations', 'Administration', 'Comms'],
    objectPosition: 'center 35%'
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
    tags: ['Public Relations', 'Partnerships', 'Outreach'],
    objectPosition: 'center 40%'
  },
  {
    id: 'bob-kimani',
    name: 'Bob Kimani',
    role: 'Implementation Officer & Civic Educator',
    bio: `An IT enthusiast and versatile mobile developer, Bob leads the on-ground implementation of The Uwezo Network's diverse suite of products. Beyond driving civic literacy initiatives, he ensures all our technological solutions effectively reach their target communities, empowering youth to become informed, active participants in the digital economy.`,
    image: '/images/team/Bob.jpeg',
    imageAlt: 'Portrait of Bob Kimani',
    linkedin: 'https://www.linkedin.com/in/bob-kimani-55893a33a/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['Civic Literacy', 'iOS Dev', 'Digital Rights'],
    objectPosition: 'center 40%'
  },
  {
    id: 'kevin-ojwang',
    name: 'Kevin Ojwang',
    role: 'Assistant Field Officer & STEM Educator',
    bio: `Kevin anchors field implementation of the Tech for Tomorrow program, combining a background in data analytics and AI to translate complex STEM concepts into digestible curricula for youth.`,
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
    bio: `Specializing in vulnerability assessment and proactive security, Teresia ensures the integrity of The Uwezo Network's digital infrastructure and leads the security awareness module, mentoring the next generation of digital defenders.`,
    image: '/images/team/Teresia.jpeg',
    imageAlt: 'Placeholder: Teresia Wanjohi',
    linkedin: 'https://www.linkedin.com/in/teresia-wanjohi-379575182/',
    email: 'info@uwezolinkinitiative.org',
    category: 'board',
    tags: ['Cybersecurity', 'Digital Safety', 'STEM'],
    objectPosition: 'center 20%'
  },
  {
    id: 'christine-muna',
    name: 'Christine Muna',
    role: 'Senior Advisory Consultant',
    bio: `With over 15 years of leadership in the nonprofit and humanitarian sectors, Christine provides strategic oversight on donor engagement and international visibility, aligning The Uwezo Network's initiatives with global ESG standards.`,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300',
    imageAlt: 'Portrait of Christine Muna',
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
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300',
    imageAlt: 'Portrait of Hellen Koros',
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
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300',
    imageAlt: 'Portrait of Evans James',
    email: 'info@kenyapovertyaction.org.uk',
    category: 'kpa',
    tags: ['Policy Advocacy', 'WASH', 'Resource Mobilization']
  }
];
