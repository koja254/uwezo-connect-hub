import React from 'react';
import { Link } from 'react-router-dom';
import { Download, CheckCircle, Users, Radio, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const caseStudyImages = [
  { src: '/images/img-33.jpeg', alt: 'Youth facilitators leading a civic design session' },
  { src: '/images/img-34.jpeg', alt: 'Community circle discussing civic inclusion solutions' },
  { src: '/images/img-35.jpeg', alt: 'Youth participants co-creating accessibility toolkits' },
];

const overviewSteps = [
  {
    title: 'Micro-Workshops',
    description: 'Local peer facilitators run short, high-energy civic sessions in estates, schools, and village centers.',
  },
  {
    title: 'Inclusion Toolkit',
    description: 'Braille, Kenyan Sign Language, easy-read explainers, and safety protocols keep women and PWDs front and center.',
  },
  {
    title: 'Digital Civic Drops',
    description: 'Short audio-visual content distributed through WhatsApp, TikTok, and community radio keeps momentum alive between meetings.',
  },
  {
    title: 'Voter Activation Bot',
    description: 'A WhatsApp bot nudges youth to register, verify, and learn about electoral processes in real-time.',
  },
];

const keyFeatures = [
  '🟢 Youth-Led Civic Labs',
  '🟢 Peer Facilitator Network',
  '🟢 Accessible Learning for PWDs & Women',
  '🟢 Grassroots Engagement, Not Conferences',
  '🟢 Data-Driven Outreach via Electoral Management Bodies mapping',
];

const impactStats = [
  {
    label: 'Youth Targeted',
    value: '1.5M',
    detail: 'Across 25+ counties',
    Icon: Users,
  },
  {
    label: 'Peer Facilitators Trained',
    value: '200',
    detail: 'Community-based civic champions',
    Icon: GraduationCap,
  },
  {
    label: 'Projected Voter Registrations',
    value: '800K+',
    detail: 'Guided through the activation bot',
    Icon: CheckCircle,
  },
  {
    label: 'Leadership Pipeline',
    value: '25',
    detail: 'Youth prepared for public leadership',
    Icon: Sparkles,
  },
];

const galleryImages = [
  { src: '/images/img-28.jpeg', alt: 'Facilitators briefing youth groups outdoors' },
  { src: '/images/img-29.jpeg', alt: 'Rural civic education circle' },
  { src: '/images/img-30.jpeg', alt: 'Youth sharing civic pledges on placards' },
  { src: '/images/img-31.jpeg', alt: 'Digital civic drop recording session' },
  { src: '/images/img-32.jpeg', alt: 'Peer facilitators coordinating via mobile devices' },
];

const UwezoKwaYouth = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] pt-32 pb-16">
        <div className="absolute inset-0">
          <img
            src="/images/img-27.jpeg"
            alt="Gen Z protests in Nairobi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl text-white space-y-6">
            <p className="uppercase tracking-[0.3em] text-sm text-white/70">Uwezo kwa Youth</p>
            <h1 className="font-poppins text-4xl md:text-5xl font-bold leading-tight">
              From the Streets to the Ballot - Turning Youth Energy into Civic Power
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              The 2024 Gen Z movement showed Kenya the power of youth voices. Yet beyond digital activism lies a deeper need - civic literacy, inclusion, and leadership. Uwezo kwa Youth transforms that energy into lasting participation, reaching youth in villages, schools, estates, and online spaces.
            </p>
            <Button asChild size="lg" className="cta-accent inline-flex items-center space-x-2">
              <a href="/downloads/UwezokwaYouth.pdf" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-hidden="true">📄</span>
                <span>Download Concept Note</span>
                <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-2">Case Study</p>
              <h2 className="font-poppins text-3xl font-bold mb-4">The Gen Z Moment</h2>
              <p className="text-muted-foreground mb-4">
                In 2024, Kenyan youth proved their collective voice could influence national discourse. However, the movement highlighted a gap: civic education and political inclusion at the grassroots. Many youth - especially women and persons with disabilities - remain unregistered, uninformed, and unheard.
              </p>
              <p className="text-muted-foreground">
                Uwezo kwa Youth was born to bridge that gap, creating a new model of continuous civic learning through innovation, inclusivity, and youth-led facilitation with images, storytelling, and tech that feels native to Gen Z culture.
              </p>
            </div>
            <div className="relative">
              <Carousel className="rounded-3xl border border-border shadow-card overflow-hidden" opts={{ loop: true }}>
                <CarouselContent>
                  {caseStudyImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-80 object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              An integrated civic learning loop combining on-the-ground facilitation, inclusive materials, and digital nudges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {overviewSteps.map((step, index) => (
              <Card key={step.title} className="h-full">
                <CardContent className="p-6 flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center font-bold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="font-poppins text-xl">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary font-semibold mb-2">Key Features</p>
              <h2 className="font-poppins text-3xl font-bold mb-4">What Sets Uwezo kwa Youth Apart</h2>
              <p className="text-muted-foreground mb-6">
                We built the program with Gen Z, movement builders, and community elders so that civic learning feels relevant, accessible, and rooted in real Kenyan contexts.
              </p>
              <div className="space-y-4">
                {keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-2xl border border-border shadow-card">
                <Users className="w-10 h-10 text-primary mb-4" />
                <p className="font-poppins text-lg font-semibold mb-2">Grassroots Reach</p>
                <p className="text-muted-foreground text-sm">Village barazas, school clubs, matatu routes, and maker spaces become civic classrooms.</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border shadow-card mt-6">
                <Radio className="w-10 h-10 text-secondary mb-4" />
                <p className="font-poppins text-lg font-semibold mb-2">Digital Civic Drops</p>
                <p className="text-muted-foreground text-sm">Animations, audio notes, and memes delivered weekly keep the conversation alive.</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border shadow-card">
                <MapPin className="w-10 h-10 text-accent mb-4" />
                <p className="font-poppins text-lg font-semibold mb-2">Data-Driven Outreach</p>
                <p className="text-muted-foreground text-sm">Electoral Management Bodies and community data guide us to wards with the widest civic inclusion gaps.</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border shadow-card mt-6">
                <Sparkles className="w-10 h-10 text-rose-500 mb-4" />
                <p className="font-poppins text-lg font-semibold mb-2">Leadership Pipeline</p>
                <p className="text-muted-foreground text-sm">25 young leaders receive advanced coaching for policy, advocacy, and public service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold mb-4">Projected Impact</h2>
            <p className="text-muted-foreground">
              Clean metrics connected to democratic outcomes we can track each quarter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map(({ label, value, detail, Icon }) => (
              <Card key={label} className="text-center">
                <CardContent className="p-8 flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{value}</div>
                  <p className="font-semibold">{label}</p>
                  <p className="text-muted-foreground text-sm">{detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <p className="text-primary font-semibold mb-2">Gallery</p>
              <h2 className="font-poppins text-3xl font-bold">Civic Learning in Motion</h2>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link to="/contact">Partner With Us</Link>
              </Button>
              <Button asChild className="cta-primary">
                <Link to="/donate">Support the Program</Link>
              </Button>
            </div>
          </div>

          <Carousel className="rounded-3xl border border-border shadow-card overflow-hidden" opts={{ loop: true }}>
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="basis-full md:basis-2/3 lg:basis-1/2">
                  <div className="relative h-80 md:h-[420px]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <p className="absolute bottom-4 left-4 text-white text-sm font-medium drop-shadow-lg">
                      {image.alt}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UwezoKwaYouth;
