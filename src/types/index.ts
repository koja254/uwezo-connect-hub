// TypeScript types for Uwezo Link Initiative

export interface Program {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  keyFeatures: string[];
  howItWorks: {
    step: number;
    title: string;
    description: string;
  }[];
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  gallery: {
    src: string;
    alt: string;
  }[];
  ctaText: string;
  ctaAction: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  category: 'leadership' | 'advisory' | 'extended';
}

export interface Resource {
  id: string;
  title: string;
  slug: string;
  type: 'report' | 'blog' | 'download' | 'video';
  summary: string;
  description: string;
  date: string;
  category: string;
  content: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  author: string;
  downloadUrl?: string;
  tags: string[];
}

export interface ImpactStat {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  interestArea: 'volunteer' | 'partner' | 'donate' | 'programs' | 'media' | 'other';
}

export interface DonationTier {
  id: string;
  amount: number;
  currency: 'USD' | 'KES';
  type: 'one-time' | 'monthly' | 'corporate';
  title: string;
  description: string;
  impact: string[];
}

export interface NewsletterSignup {
  email: string;
  firstName?: string;
  lastName?: string;
  interests: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CryptoToken {
  symbol: string;
  name: string;
  network: string;
  address: string;
  description: string;
}