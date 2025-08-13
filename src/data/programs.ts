import { Program } from '@/types';

export const programs: Program[] = [
  {
    id: 'uwezo-token',
    title: 'Uwezo Token – Bridging Education & Dignity',
    slug: 'uwezo-token',
    summary: 'Blockchain-powered solution addressing period poverty and promoting education equity',
    description: `Meet Amina, a bright 15-year-old from rural Kenya who dreams of becoming a doctor. Every month, Amina misses 3–5 days of school because her family cannot afford sanitary pads. This story repeats across countless communities, where period poverty becomes a barrier to education and future opportunities.

"A girl's education should never stop because of her period."

The Uwezo Token program uses blockchain technology to create a sustainable solution. Students earn digital tokens for school attendance and participation in Sexual and Reproductive Health Rights (SRHR) workshops. These tokens can be redeemed for sanitary products, school supplies, and other necessities at patner kiosks and clinics, creating a cycle of empowerment that addresses both immediate needs and long-term education goals.`,
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
      { step: 2, title: 'Earn Tokens', description: 'Complete academic tasks, attend classes, and participate in community activities' },
      { step: 3, title: 'Redeem Rewards', description: 'Exchange tokens for school supplies, resources, and workshop access' },
      { step: 4, title: 'Track Progress', description: 'Monitor achievements and build financial literacy skills' }
    ],
    impact: [
      { metric: 'Students Enrolled', value: '200+', description: 'Active participants across rural schools' },
      { metric: 'Tokens Earned', value: '1K+', description: 'Total tokens earned by students' },
      { metric: 'Resources Redeemed', value: '80%', description: 'Student engagement in redemption activities' }
    ],
    gallery: [
      { src: '/images/image-03.jpg', alt: 'QR ID card and token redemption illustration' },
      { src: '/images/image-04.jpg', alt: 'Girls attending SRHR workshop' },
      { src: '/images/programs.jpg', alt: 'Youth coding on laptops in a rural lab' },
      { src: '/images/pads.png', alt: 'Youth girls holding pads' },
      { src: '/images/sanitary.jpg', alt: 'Sanitary pads' }

    ],
    ctaText: 'View Concept Note',
    ctaAction: 'participate'
  },
  {
    id: 'uwezo-fab-lab',
    title: 'Uwezo Fab Lab – Innovating for Climate & Community',
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
    ctaAction: 'partner'
  },
  {
    id: 'uwezo-teaching',
    title: 'Uwezo Teaching – Learning for the Future',
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
    ctaAction: 'participate'
  }
];
