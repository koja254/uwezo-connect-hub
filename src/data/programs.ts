import { Program } from '@/types';

const programPriority: Record<string, number> = {
  'days-for-dignity': 0,
  'tech-for-tomorrow': 1,
  'civic-power-in-motion': 2,
};

const programDefinitions: Program[] = [
  {
    id: 'days-for-dignity',
    title: 'Days for Dignity - Health & Education Equity (Formerly known as Uwezo Voucher)',
    slug: 'days-for-dignity',
    summary: 'A data-driven health and education initiative utilizing inclusion matrices to ensure consistent classroom attendance and the fair, localized distribution of sanitary materials to rural school-going girls.',
    description: `A girl's education should never stop because of her period. Yet every month, thousands of bright girls miss 3-5 days of school because their families cannot afford sanitary pads. Days for Dignity addresses this gap through an innovative, data-driven reward system.

Students earn digital education and attendance vouchers for school attendance and participation in Sexual and Reproductive Health Rights (SRHR) workshops. These vouchers are redeemable for sanitary products, school supplies, and other necessities at partner kiosks and clinics, creating a cycle of empowerment that addresses both immediate needs and long-term education goals.`,
    heroImage: '/images/daysfordignity.png',
    heroImageAlt: 'Students in a school corridor receiving assistance',
    keyFeatures: [
      'Inclusion matrices for localized distribution',
      'Attendance and workshop participation tracking',
      'Redeemable educational resources and pads',
      'SRHR workshop access and mentorship',
      'Financial and digital literacy training',
      'Transparent voucher progress tracking'
    ],
    howItWorks: [
      { step: 1, title: 'Inclusion Mapping', description: 'Schools map attendance trends and identify high-need student demographics.' },
      { step: 2, title: 'Earn Vouchers', description: 'Students participate in SRHR workshops and maintain school attendance.' },
      { step: 3, title: 'Redeem Materials', description: 'Redeem vouchers for sanitary towels and essential learning materials at local hubs.' },
      { step: 4, title: 'Impact Verification', description: 'Verify attendance and hygiene metrics to scale support networks.' }
    ],
    impact: [
      { metric: 'Girls Supported', value: '100+', description: 'School-going girls receiving regular materials' },
      { metric: 'Classroom Days Saved', value: '800+', description: 'School days recovered due to reduced absenteeism' },
      { metric: 'SRHR Workshops', value: '3+', description: 'Peer-led youth hygiene and safety sessions' }
    ],
    gallery: [
      { src: '/images/image-03.jpg', alt: 'Voucher redemption and hygiene materials' },
      { src: '/images/pads.png', alt: 'Girls holding pads' },
      { src: '/images/sanitary.jpg', alt: 'Sanitary pads distribution' }
    ],
    ctaText: 'Download Concept Note',
    ctaAction: 'participate',
    downloadUrl: '/downloads/uwezo_eco_loop.pdf'
  },
  {
    id: 'tech-for-tomorrow',
    title: 'Tech for Tomorrow - Digital Economy & Maker Labs',
    slug: 'tech-for-tomorrow',
    summary: "Bridging Africa's digital economy gap through education in established community hubs. Features foundational tech literacy alongside advanced modules in mobile fabrication and IoT hardware for climate solutions.",
    description: `Africa's digital economy is rapidly expanding, yet millions of young people lack access to the skills needed to participate in this transformation. Tech for Tomorrow bridges this gap by delivering localized technology education.

From beginner-friendly digital literacy and coding basics to advanced modules in mobile fabrication (Fab Lab) and IoT hardware prototyping, we equip young people to solve local problems. Students learn to build Smart Climate Agriculture prototypes, soil moisture sensors, and solar-powered devices from recycled e-waste.`,
    heroImage: '/images/img-09.png',
    heroImageAlt: 'Mobile STEM and IoT teaching session with youth',
    keyFeatures: [
      'Digital literacy, coding, and AI bootcamps',
      'Mobile fabrication and 3D printing modules',
      'IoT and climate sensor hardware assembly',
      'E-waste recycling and hardware repurposing',
      'Local teacher training for sustainable scaling',
      'Community innovation challenge projects'
    ],
    howItWorks: [
      { step: 1, title: 'Hub Setup & Access', description: 'Establish learning resources and makerspace devices in local community hubs.' },
      { step: 2, title: 'Tech Literacy Foundation', description: 'Train youth in digital workflows, software development, and AI basics.' },
      { step: 3, title: 'IoT & Fab Lab Specialization', description: 'Build hardware solutions using e-waste, microcontrollers, and climate sensors.' },
      { step: 4, title: 'Deploy Prototypes', description: 'Install student-designed devices in local farms or community centers.' }
    ],
    impact: [
      { metric: 'Hub Graduates', value: '350+', description: 'Youth certified in IT and IoT hardware basics' },
      { metric: 'E-waste Recycled', value: '5+ Tons', description: 'Electronic waste diverted and repurposed for learning' },
      { metric: 'Climate Sensors Deployed', value: '15+', description: 'Environmental monitoring stations built by students' }
    ],
    gallery: [
      { src: '/images/img-05.png', alt: 'Students building microcontrollers' },
      { src: '/images/image-04.jpg', alt: 'Youth coding in the lab' },
      { src: '/images/image-06.jpg', alt: 'E-waste parts on a workbench' },
      { src: '/images/image-08.jpg', alt: 'Smart solar irrigation setup' }
    ],
    ctaText: 'Explore Maker Curriculum',
    ctaAction: 'partner',
    downloadUrl: '/downloads/uwezo_teaching_stem_ai.pdf'
  },
  {
    id: 'civic-power-in-motion',
    title: 'Civic Power in Motion - Youth Democratic Labs',
    slug: 'civic-power-in-motion',
    summary: 'Turning youth advocacy into continuous, inclusive civic participation. Leveraging digital networks and public transparency data pipelines to empower youth voices from the grassroots to national policy.',
    description: `Young people hold the key to democratic accountability and progressive governance. Civic Power in Motion transforms community energy and raw youth advocacy into systematic civic action.

Through inclusive micro-workshops, digital civic drops, and interactive transparency bots, we make daily governance accessible. Our platform helps young people—including young women and persons with disabilities—register to vote, verify local government budget details, and actively contribute to policy formulation.`,
    heroImage: '/images/img-27.jpeg',
    heroImageAlt: 'Kenyan youth participating in civic leadership workshop',
    keyFeatures: [
      'Youth-led civic labs mapping local issues',
      'Peer facilitator network active in urban & rural spaces',
      'Inclusive toolkits (braille, audio, sign language support)',
      'Digital civic drops pushing lessons on WhatsApp & TikTok',
      'Public transparency data pipelines and budget tracking tools'
    ],
    howItWorks: [
      { step: 1, title: 'Civic Lab Mobilization', description: 'Train peer facilitators to host pop-up labs in local neighborhoods.' },
      { step: 2, title: 'Digital Knowledge Drops', description: 'Deploy short-form interactive content detailing civil rights and budgets.' },
      { step: 3, title: 'Transparency Tracking', description: 'Use public data platforms to audit municipal project expenditures.' },
      { step: 4, title: 'Policy Advocacy', description: 'Consolidate youth recommendations to pitch directly to policymakers.' }
    ],
    impact: [
      { metric: 'Youth Reached', value: '1.5M', description: 'Aspirants and citizens engaged via digital channels' },
      { metric: 'Peer Facilitators', value: '200+', description: 'Active community leaders conducting workshops' },
      { metric: 'Audited Projects', value: '12', description: 'Community spending reports published by youth' }
    ],
    gallery: [
      { src: '/images/img-27.jpeg', alt: 'Youth activists collaborating' },
      { src: '/images/img-28.jpeg', alt: 'Civic workshop planning' },
      { src: '/images/img-29.jpeg', alt: 'Community dialogue session' }
    ],
    ctaText: 'Download Policy Note',
    ctaAction: 'participate',
    downloadUrl: '/downloads/UwezokwaYouth.pdf'
  }
];

const getPriority = (id: string) =>
  programPriority[id] ?? Number.MAX_SAFE_INTEGER;

export const programs: Program[] = [...programDefinitions].sort(
  (a, b) => getPriority(a.id) - getPriority(b.id)
);
