import { ImpactStat, DonationTier, SocialLink, CryptoToken } from '@/types';

export const impactStats: ImpactStat[] = [
  {
    label: 'Students Empowered',
    value: '200+',
    description: 'Young learners across rural Kenya',
    icon: 'GraduationCap'
  },
  {
    label: 'Communities Reached',
    value: '15+',
    description: 'Villages and schools served',
    icon: 'MapPin'
  },
  {
    label: 'E-waste Recycled',
    value: '5+ Tons',
    description: 'Electronics given new life',
    icon: 'Recycle'
  },
  {
    label: 'Local Educators Trained',
    value: '15+',
    description: 'Teachers equipped with STEM skills',
    icon: 'Users'
  }
];

export const donationTiers: DonationTier[] = [
  {
    id: 'pads-for-term',
    amount: 100,
    currency: 'USD',
    type: 'one-time',
    title: 'Sanitary Pads for a Term',
    description: 'Provide a girl with sanitary pads for a full school term',
    impact: [
      'Three months of dignity and school attendance',
      'Access to SRHR education workshops',
      'Uwezo Token rewards for participation'
    ]
  },
  {
    id: 'iot-starter-kit',
    amount: 150,
    currency: 'USD',
    type: 'one-time',
    title: 'IoT Starter Kit',
    description: 'Fund an IoT climate monitoring kit built from recycled materials',
    impact: [
      'Recycled electronics components',
      'Climate monitoring sensors',
      'Student-led innovation project'
    ]
  },
  {
    id: 'community-workshop',
    amount: 200,
    currency: 'USD',
    type: 'one-time',
    title: 'Community Workshop',
    description: 'Support a full community education workshop on AI, coding, and problem-solving',
    impact: [
      'Training for 5 community members',
      'Materials and equipment',
      'Local facilitator support'
    ]
  },
  {
    id: 'monthly-champion',
    amount: 100,
    currency: 'USD',
    type: 'monthly',
    title: 'Monthly Champion',
    description: 'Sustained support for ongoing community programs',
    impact: [
      'Regular SRHR workshops',
      'Fab Lab operations',
      'Teacher training sessions'
    ]
  },
  {
    id: 'corporate-partner',
    amount: 500,
    currency: 'USD',
    type: 'corporate',
    title: 'Corporate Partnership',
    description: 'Comprehensive program sponsorship with community impact',
    impact: [
      'Full program implementation in one community',
      'Corporate social responsibility reporting',
      'Employee volunteer opportunities',
      'Quarterly impact assessments'
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Twitter',
    url: 'https://twitter.com/uwezolink',
    icon: 'Twitter'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/uwezo-link-initiative',
    icon: 'Linkedin'
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/uwezolink',
    icon: 'Facebook'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/uwezolink',
    icon: 'Instagram'
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@uwezolink',
    icon: 'Youtube'
  }
];

export const cryptoTokens: CryptoToken[] = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    network: 'Ethereum Mainnet',
    address: '0x742d35Cc0000000000000000000000000000000',
    description: 'Accept ETH and all ERC-20 tokens on Ethereum network'
  },
  {
    symbol: 'CELO',
    name: 'Celo',
    network: 'Celo Network',
    address: '0x742d35Cc0000000000000000000000000000000',
    description: 'Mobile-first blockchain supporting financial inclusion'
  },
  {
    symbol: 'cUSD',
    name: 'Celo Dollar',
    network: 'Celo Network', 
    address: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
    description: 'Stable cryptocurrency pegged to USD on Celo network'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    network: 'Ethereum Mainnet',
    address: '0xA0b86a33E6440fD5e1A6D9b2c6a7F2b02F5B2a52',
    description: 'Regulated stablecoin for reliable value transfer'
  }
];

// Organization content
export const organizationContent = {
  mission: "Empower marginalized communities through technology, education, and innovation to promote equity, sustainability, and opportunity.",
  
  vision: "A future where every young person, regardless of gender, background, or location has the resources, knowledge, and opportunities to thrive in a changing world.",
  
  coreValues: [
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our community engagements and partnerships."
    },
    {
      title: "Innovation", 
      description: "We embrace creative solutions and cutting-edge technology to address community challenges and create new opportunities."
    },
    {
      title: "Equity",
      description: "We ensure fair access to resources and opportunities, with special attention to marginalized and underserved populations."
    },
    {
      title: "Sustainability",
      description: "Environmental and social responsibility guide our programs, ensuring lasting positive impact for future generations."
    },
    {
      title: "Collaboration",
      description: "We build strong partnerships with communities, organizations, and individuals to maximize our collective impact."
    }
  ],

  sdgCommitments: [
    {
      title: "SDG 4 – Quality Education",
      description: "Through Uwezo Teaching, we provide STEM and AI training to youth and girls, equipping them with future-ready skills and bridging the digital divide in underserved communities.",
      icon: "GraduationCap"
    },
    {
      title: "SDG 5 – Gender Equality",
      description: "We prioritize inclusivity by creating safe, supportive learning environments for girls, ensuring equal access to technology, innovation spaces, and leadership opportunities.",
      icon: "Scale"
    },
    {
      title: "SDG 9 – Industry, Innovation, and Infrastructure",
      description: "Through initiatives like Uwezo Fab Lab, we foster grassroots innovation, support local manufacturing, and empower communities to build sustainable, tech-enabled solutions.",
      icon: "Cpu"
    },
    {
      title: "SDG 13 – Climate Action",
      description: "We address climate change by integrating environmental conservation, IoT-based climate solutions, and community-driven adaptation strategies into our programs.",
      icon: "Leaf"
    }
  ],

  
  howWeWork: [
    {
      phase: "Listen & Learn",
      description: "We begin every engagement by understanding community needs, assets, and aspirations through deep consultation."
    },
    {
      phase: "Co-Design Solutions",
      description: "Working with local partners, we design programs that blend global best practices with local wisdom."
    },
    {
      phase: "Implement & Iterate", 
      description: "Our programs launch with continuous feedback loops, allowing for real-time improvements and adaptations."
    },
    {
      phase: "Build Local Capacity",
      description: "We train local educators and leaders to ensure program sustainability beyond our direct involvement."
    },
    {
      phase: "Measure & Share",
      description: "Rigorous impact measurement informs our work and contributes to the broader field of educational innovation."
    }
  ]
};