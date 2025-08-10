import { ImpactStat, DonationTier, SocialLink, CryptoToken } from '@/types';

export const impactStats: ImpactStat[] = [
  {
    label: 'Students Empowered',
    value: '2,500+',
    description: 'Young learners across rural Kenya',
    icon: 'GraduationCap'
  },
  {
    label: 'Communities Reached',
    value: '85+',
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
    value: '120+',
    description: 'Teachers equipped with STEM skills',
    icon: 'Users'
  }
];

export const donationTiers: DonationTier[] = [
  {
    id: 'sponsor-student',
    amount: 10,
    currency: 'USD',
    type: 'one-time',
    title: 'Sponsor a Student',
    description: 'Provide a month of token-based learning for one student',
    impact: [
      'QR-coded ID card and digital wallet setup',
      'Access to educational resources',
      'Participation in weekly SRHR workshops'
    ]
  },
  {
    id: 'equip-lab',
    amount: 50,
    currency: 'USD',
    type: 'one-time',
    title: 'Equip the Lab',
    description: 'Fund essential tools and materials for hands-on learning',
    impact: [
      'Electronics components for 10 student projects',
      'Safety equipment and tools',
      'Sustainable building materials'
    ]
  },
  {
    id: 'mobile-program',
    amount: 100,
    currency: 'USD',
    type: 'one-time',
    title: 'Fund Mobile Teaching',
    description: 'Support a full mobile STEM program visit to a remote community',
    impact: [
      'Transportation and setup costs',
      'Teaching materials for 30 students',
      'Local educator training session'
    ]
  },
  {
    id: 'monthly-champion',
    amount: 25,
    currency: 'USD',
    type: 'monthly',
    title: 'Monthly Champion',
    description: 'Sustained support for program operations',
    impact: [
      'Ongoing mentorship for students',
      'Program maintenance and updates',
      'Community relationship building'
    ]
  },
  {
    id: 'corporate-partner',
    amount: 500,
    currency: 'USD',
    type: 'corporate',
    title: 'Corporate Partnership',
    description: 'Comprehensive program sponsorship with visibility',
    impact: [
      'Full program implementation in one school',
      'Corporate branding on materials',
      'Quarterly impact reports',
      'Team volunteer opportunities'
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
  mission: "To democratize STEM education and empower young people in marginalized communities through innovative technology, hands-on learning, and sustainable development practices.",
  
  vision: "A world where every young person, regardless of geographic or economic barriers, has access to quality STEM education that prepares them to solve local and global challenges.",
  
  coreValues: [
    {
      title: "Innovation with Purpose",
      description: "We embrace cutting-edge technology while staying grounded in community needs and real-world impact."
    },
    {
      title: "Inclusive Excellence", 
      description: "We create programs that welcome all learners, with particular attention to gender equity and accessibility."
    },
    {
      title: "Sustainability First",
      description: "Environmental stewardship guides our curriculum, operations, and the solutions we help students develop."
    },
    {
      title: "Community-Centered",
      description: "Local voices, needs, and knowledge shape every aspect of our programming and partnerships."
    },
    {
      title: "Transparency & Accountability",
      description: "We maintain open communication about our methods, outcomes, and challenges with all stakeholders."
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