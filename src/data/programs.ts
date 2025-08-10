import { Program } from '@/types';

export const programs: Program[] = [
  {
    id: 'uwezo-token',
    title: 'Uwezo Token',
    slug: 'uwezo-token',
    summary: 'Digital rewards system that empowers students to earn tokens for academic achievements and redeem them for educational resources.',
    description: `The Uwezo Token program revolutionizes student motivation through blockchain-based rewards. Students earn digital tokens for academic milestones, attendance, and community engagement, which can be redeemed for school supplies, educational resources, and SRHR workshops.

Our QR-based ID system ensures transparent tracking while building financial literacy through digital wallet management. This innovative approach bridges traditional education with modern technology, preparing students for the digital economy while addressing immediate educational needs.`,
    heroImage: '/images/image-02.jpg',
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
      {
        step: 1,
        title: 'Student Registration',
        description: 'Students receive QR-coded ID cards linking to their digital wallet'
      },
      {
        step: 2,
        title: 'Earn Tokens', 
        description: 'Complete academic tasks, attend classes, and participate in community activities'
      },
      {
        step: 3,
        title: 'Redeem Rewards',
        description: 'Exchange tokens for school supplies, resources, and workshop access'
      },
      {
        step: 4,
        title: 'Track Progress',
        description: 'Monitor achievements and build financial literacy skills'
      }
    ],
    impact: [
      {
        metric: 'Students Enrolled',
        value: '2,500+',
        description: 'Active participants across rural schools'
      },
      {
        metric: 'Tokens Earned',
        value: '150K+',
        description: 'Total tokens earned by students'
      },
      {
        metric: 'Resources Redeemed',
        value: '85%',
        description: 'Student engagement in redemption activities'
      }
    ],
    gallery: [
      { src: '/images/image-03.jpg', alt: 'QR ID card and token redemption illustration' },
      { src: '/images/image-04.jpg', alt: 'Girls attending SRHR workshop' },
      { src: '/images/image-11.jpg', alt: 'Youth coding on laptops in a rural lab' }
    ],
    ctaText: 'Join the Token Program',
    ctaAction: 'participate'
  },
  {
    id: 'uwezo-fab-lab',
    title: 'Uwezo Fab Lab',
    slug: 'uwezo-fab-lab',
    summary: 'Community fabrication laboratory where youth learn to build climate-smart solutions using recycled electronics and sustainable materials.',
    description: `The Uwezo Fab Lab is a state-of-the-art maker space dedicated to environmental innovation and hands-on learning. Young makers transform e-waste into functional devices while developing critical STEM skills and environmental consciousness.

Our lab focuses on climate-smart technologies, from IoT sensors for precision agriculture to solar-powered community solutions. Students learn electronics, programming, 3D printing, and sustainable design principles while addressing real community challenges.

Every project emphasizes circular economy principles, showing how technology can serve both innovation and environmental stewardship.`,
    heroImage: '/images/image-05.jpg',
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
      {
        step: 1,
        title: 'Problem Identification',
        description: 'Identify community challenges that technology can address'
      },
      {
        step: 2,
        title: 'Design & Prototype',
        description: 'Create solutions using recycled materials and sustainable design'
      },
      {
        step: 3,
        title: 'Build & Test', 
        description: 'Construct and iterate on functional prototypes'
      },
      {
        step: 4,
        title: 'Deploy & Scale',
        description: 'Implement solutions in the community and share knowledge'
      }
    ],
    impact: [
      {
        metric: 'E-waste Processed',
        value: '5+ Tons',
        description: 'Electronics diverted from landfills'
      },
      {
        metric: 'Prototypes Built',
        value: '200+',
        description: 'Student-created technological solutions'
      },
      {
        metric: 'Community Projects',
        value: '45',
        description: 'Active deployments serving local needs'
      }
    ],
    gallery: [
      { src: '/images/image-06.jpg', alt: 'Recycled electronics parts on a workbench' },
      { src: '/images/image-07.jpg', alt: 'Students testing an IoT soil moisture sensor' },
      { src: '/images/image-08.jpg', alt: 'Solar-powered water pump prototype in farm' },
      { src: '/images/image-12.jpg', alt: 'Close-up of hands assembling electronics' }
    ],
    ctaText: 'Partner with the Fab Lab',
    ctaAction: 'partner'
  },
  {
    id: 'uwezo-teaching',
    title: 'Uwezo Teaching',
    slug: 'uwezo-teaching',
    summary: 'Mobile education initiative bringing STEM learning directly to underserved communities through hands-on workshops and mentorship.',
    description: `Uwezo Teaching breaks down geographical barriers by bringing world-class STEM education directly to communities that need it most. Our mobile units and educator teams travel to remote areas, setting up temporary learning spaces where students can access hands-on technology education.

The program emphasizes practical skills, critical thinking, and creativity. From basic computer literacy to advanced robotics, we adapt our curriculum to meet communities where they are, building local capacity and inspiring the next generation of innovators.

Our teaching approach focuses on learning by doing, ensuring students gain confidence and real-world applicable skills while fostering a love for lifelong learning.`,
    heroImage: '/images/image-09.jpg',
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
      {
        step: 1,
        title: 'Community Outreach',
        description: 'Identify and connect with underserved communities'
      },
      {
        step: 2,
        title: 'Setup Mobile Lab',
        description: 'Deploy portable teaching equipment and learning materials'
      },
      {
        step: 3,
        title: 'Deliver Workshops',
        description: 'Conduct intensive hands-on learning sessions'
      },
      {
        step: 4,
        title: 'Build Local Capacity',
        description: 'Train local educators and establish ongoing support networks'
      }
    ],
    impact: [
      {
        metric: 'Communities Reached',
        value: '85+',
        description: 'Rural and underserved areas served'
      },
      {
        metric: 'Students Trained',
        value: '3,200+',
        description: 'Direct beneficiaries of mobile education'
      },
      {
        metric: 'Local Educators',
        value: '120+',
        description: 'Teachers trained to continue programs locally'
      }
    ],
    gallery: [
      { src: '/images/image-10.jpg', alt: 'Classroom robotics workshop for girls' },
      { src: '/images/image-11.jpg', alt: 'Youth coding on laptops in a rural lab' },
      { src: '/images/image-18.jpg', alt: 'Volunteers working with local community' }
    ],
    ctaText: 'Request Teaching Visit',
    ctaAction: 'participate'
  }
];