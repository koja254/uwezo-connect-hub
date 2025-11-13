import { Program } from '@/types';

const programPriority: Record<string, number> = {
  'uwezo-voucher': 0,
  'uwezo-kwa-youth': 1,
  'uwezo-fab-lab': 2,
  'uwezo-teaching': 3,
};

const programDefinitions: Program[] = [
  {
    id: 'uwezo-kwa-youth',
    title: 'Uwezo kwa Youth - Civic Power in Motion',
    slug: 'uwezo-kwa-youth',
    summary: 'From the streets to the ballot, we turn Gen Z protest energy into continuous, inclusive civic participation.',
    description: `The 2024 Gen Z movement showed Kenya what happens when young people insist on accountability. Yet many of those powerful voices still lack civic literacy, remain unregistered, or are disconnected from decision-making spaces - especially young women and persons with disabilities.

Uwezo kwa Youth transforms protest momentum into long-term democratic participation. Through micro-workshops, inclusive toolkits, digital civic drops, and an automated voter activation bot, we reach youth where they are - online, in matatus, at the market, and in village social halls - so that showing up for the republic becomes a daily practice, not just a viral moment.`,
    heroImage: '/images/img-27.jpeg',
    heroImageAlt: 'Kenyan youth peacefully demonstrating with placards',
    keyFeatures: [
      'Youth-led civic labs rooted in local realities',
      'Peer facilitator network spanning urban and rural communities',
      'Accessible learning formats for PWDs and young women',
      'WhatsApp, TikTok, and community radio civic drops',
      'Data-driven outreach mapped against Electoral Management Bodies registration gaps'
    ],
    howItWorks: [
      { step: 1, title: 'Micro-Workshops', description: 'Pop-up sessions in schools, estates, and village centers led by trained peer facilitators.' },
      { step: 2, title: 'Inclusion Toolkit', description: 'Braille, sign language, and easy-read civic guides keep every learner in the conversation.' },
      { step: 3, title: 'Digital Civic Drops', description: 'Weekly short-form audio/visual lessons pushed via WhatsApp, TikTok, and community radio.' },
      { step: 4, title: 'Voter Activation Bot', description: 'Automated guide that nudges youth to register, verify details, and learn about issues that matter.' }
    ],
    impact: [
      { metric: 'Youth Reached', value: '1.5M', description: 'Young people targeted across counties' },
      { metric: 'Peer Facilitators', value: '200', description: 'Local champions trained and active' },
      { metric: 'Voter Registrations', value: '800K+', description: 'Projected new voters guided by the bot' }
    ],
    gallery: [
      { src: '/images/img-27.jpeg', alt: 'Youth activists holding placards' },
      { src: '/images/img-28.jpeg', alt: 'Community workshop with young facilitators' },
      { src: '/images/img-29.jpeg', alt: 'Rural outreach team engaging students' },
      { src: '/images/img-30.jpeg', alt: 'Inclusive civic education session' },
      { src: '/images/img-31.jpeg', alt: 'Digital literacy and civic tech session' },
      { src: '/images/img-32.jpeg', alt: 'Peer facilitators planning outreach' }
    ],
    ctaText: 'Download Concept Note',
    ctaAction: 'participate',
    downloadUrl: '/downloads/UwezokwaYouth.pdf'
  },
  {
    id: 'uwezo-voucher',
    title: 'Uwezo Voucher - Bridging Education & Dignity',
    slug: 'uwezo-voucher',
    summary: 'Blockchain-powered solution addressing period poverty and promoting education equity',
    description: `Meet Amina, a bright 15-year-old from rural Kenya who dreams of becoming a doctor. Every month, Amina misses 3-5 days of school because her family cannot afford sanitary pads. This story repeats across countless communities, where period poverty becomes a barrier to education and future opportunities.

"A girl's education should never stop because of her period."

The Uwezo Voucher program uses blockchain technology to create a sustainable solution. Students earn digital vouchers for school attendance and participation in Sexual and Reproductive Health Rights (SRHR) workshops. These vouchers can be redeemed for sanitary products, school supplies, and other necessities at partner kiosks and clinics, creating a cycle of empowerment that addresses both immediate needs and long-term education goals.`,
    heroImage: '/images/img-21.png',
    heroImageAlt: 'Students in a school corridor receiving assistance',
    keyFeatures: [
      'Blockchain-based reward system',
      'QR code ID cards for secure access',
      'Redeemable educational resources',
      'SRHR workshop access',
      'Financial literacy training',
      'Transparent achievement tracking'
    ],
    howItWorks: [
      { step: 1, title: 'Student Registration', description: 'Students receive QR-coded ID cards linking to their digital wallet' },
      { step: 2, title: 'Earn Vouchers', description: 'Complete academic tasks, attend classes, and participate in community activities' },
      { step: 3, title: 'Redeem Rewards', description: 'Exchange vouchers for school supplies, resources, and workshop access' },
      { step: 4, title: 'Track Progress', description: 'Monitor achievements and build financial literacy skills' }
    ],
    impact: [
      { metric: 'Students Enrolled', value: '200+', description: 'Active participants across rural schools' },
      { metric: 'Vouchers Earned', value: '1K+', description: 'Total voucher earned by students' },
      { metric: 'Resources Redeemed', value: '80%', description: 'Student engagement in redemption activities' }
    ],
    gallery: [
      { src: '/images/image-03.jpg', alt: 'QR ID card and voucher redemption illustration' },
      { src: '/images/image-04.jpg', alt: 'Girls attending SRHR workshop' },
      { src: '/images/programs.jpg', alt: 'Youth coding on laptops in a rural lab' },
      { src: '/images/pads.png', alt: 'Youth girls holding pads' },
      { src: '/images/sanitary.jpg', alt: 'Sanitary pads' }
    ],
    ctaText: 'View Concept Note',
    ctaAction: 'participate',
    downloadUrl: '/downloads/uwezo_voucher_concept_note.pdf'
  },
  {
    id: 'uwezo-fab-lab',
    title: 'Uwezo Fab Lab - Innovating for Climate & Community',
    slug: 'uwezo-fab-lab',
    summary: 'Mobile fabrication laboratory turning e-waste into climate solutions',
    description: `In Kenya, erratic rainfall and mounting e-waste pose growing challenges. Daniel, a 17-year-old from Machakos, witnessed his family's farm struggle with unpredictable weather patterns while electronics waste accumulated in his community. Through the Uwezo Fab Lab, Daniel learned to transform discarded cell phones and computers into IoT sensors that monitor soil moisture and weather patterns.

"We can't stop the rain, but we can design systems to live with it."

Uwezo Fab Lab is a community-driven innovation hub where young people learn to design and create IoT-powered climate solutions as well as learning about environmental conservation. Using recycled electronics and local materials, we build tools like smart irrigation systems, low-cost environmental sensors, and renewable energy prototypes.`,
    heroImage: '/images/img-05.png',
    heroImageAlt: 'Fab Lab workshop with youth building devices',
    keyFeatures: [
      'E-waste recycling and repurposing',
      'IoT and sensor development',
      'Solar energy solutions',
      '3D printing and prototyping',
      'Climate-smart agriculture tech',
      'Community problem-solving projects'
    ],
    howItWorks: [
      { step: 1, title: 'Problem Identification', description: 'Identify community challenges that technology can address' },
      { step: 2, title: 'Design & Prototype', description: 'Create solutions using recycled materials and sustainable design' },
      { step: 3, title: 'Build & Test', description: 'Construct and iterate on functional prototypes' },
      { step: 4, title: 'Deploy & Scale', description: 'Implement solutions in the community and share knowledge' }
    ],
    impact: [
      { metric: 'E-waste Processed', value: '5+ Tons', description: 'Electronics diverted from landfills' },
      { metric: 'Prototypes Built', value: '9+', description: 'Student-created technological solutions' },
      { metric: 'Community Projects', value: '6', description: 'Active deployments serving local needs' }
    ],
    gallery: [
      { src: '/images/image-06.jpg', alt: 'Recycled electronics parts on a workbench' },
      { src: '/images/image-07.jpg', alt: 'Students testing an IoT soil moisture sensor' },
      { src: '/images/image-08.jpg', alt: 'Solar-powered water pump prototype in farm' },
      { src: '/images/image-12.jpg', alt: 'Close-up of hands assembling electronics' }
    ],
    ctaText: 'View Concept Note',
    ctaAction: 'partner',
    downloadUrl: '/downloads/uwezo-fab_lab.pdf'
  },
  {
    id: 'uwezo-teaching',
    title: 'Uwezo Teaching - Learning for the Future',
    slug: 'uwezo-teaching',
    summary: 'Community-based education addressing Africa\'s digital economy gap',
    description: `Mary, a recent secondary school graduate from Turkana, possesses natural problem-solving abilities but has never touched a computer. Across Africa, the digital economy is rapidly expanding, yet millions of young people lack access to the skills needed to participate in this transformation.

"We are not just teaching code; we are teaching possibility."

Uwezo Teaching is our education and training program, offering STEM and AI courses from beginner-friendly basics to advanced certification programs. We partner with local schools, universities, and online platforms to make high-quality tech education accessible to all.`,
    heroImage: '/images/img-09.png',
    heroImageAlt: 'Mobile STEM teaching session with kids',
    keyFeatures: [
      'Mobile teaching units',
      'Hands-on STEM workshops',
      'Robotics and coding bootcamps',
      'Teacher training programs',
      'Community mentorship networks',
      'Curriculum adaptation for local contexts'
    ],
    howItWorks: [
      { step: 1, title: 'Community Outreach', description: 'Identify and connect with underserved communities' },
      { step: 2, title: 'Setup Mobile Lab', description: 'Deploy portable teaching equipment and learning materials' },
      { step: 3, title: 'Deliver Workshops', description: 'Conduct intensive hands-on learning sessions' },
      { step: 4, title: 'Build Local Capacity', description: 'Train local educators and establish ongoing support networks' }
    ],
    impact: [
      { metric: 'Communities Reached', value: '5+', description: 'Rural and underserved areas served' },
      { metric: 'Students Trained', value: '100+', description: 'Direct beneficiaries of mobile education' },
      { metric: 'Local Educators', value: '10+', description: 'Teachers trained to continue programs locally' }
    ],
    gallery: [
      { src: '/images/image-10.jpg', alt: 'Classroom robotics workshop for girls' },
      { src: '/images/programs.jpg', alt: 'Youth coding on laptops in a rural lab' },
      { src: '/images/image-18.jpg', alt: 'Volunteers working with local community' }
    ],
    ctaText: 'View Concept Note',
    ctaAction: 'participate',
    downloadUrl: '/downloads/uwezo_teaching_stem_ai.pdf'
  }
];

const getPriority = (id: string) =>
  programPriority[id] ?? Number.MAX_SAFE_INTEGER;

export const programs: Program[] = [...programDefinitions].sort(
  (a, b) => getPriority(a.id) - getPriority(b.id)
);
