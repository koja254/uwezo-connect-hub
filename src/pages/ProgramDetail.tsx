import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Download, Activity, Heart, ShieldCheck, Cpu, Code2, GraduationCap, Users, Landmark } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import LazyImage from '@/components/LazyImage';
import { Button } from '@/components/ui/button';
import { programs } from '@/data/programs';

const CountUp = ({ end, duration = 3500, suffix = "", prefix = "", decimals = 0 }: { end: number; duration?: number; suffix?: string; prefix?: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const totalMiliseconds = duration;
    const steps = decimals > 0 ? 100 : Math.min(end, 60);
    const incrementTime = totalMiliseconds / steps;
    const stepValue = end / steps;
    
    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
        
        // Setup dynamic tick from time to time (fluctuation/live updates)
        const tickTimer = setInterval(() => {
          setCount(current => {
            const change = (Math.random() > 0.4 ? 1 : -1) * (decimals > 0 ? 0.1 : 1);
            const next = current + change;
            if (next > end * 1.10) return current - change;
            if (next < end * 0.90) return current + change;
            return parseFloat(next.toFixed(decimals));
          });
        }, 5000 + Math.random() * 5000);
        
        return () => clearInterval(tickTimer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [end, duration, decimals]);
  return <span>{prefix}{count.toFixed(decimals)}{suffix}</span>;
};


const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find(p => p.slug === slug);

  if (!program) {
    return (
      <div className="min-h-screen bg-bg">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4 text-ink">Program Not Found</h1>
          <Link to="/programs" className="text-coral-deep hover:underline font-mono text-sm uppercase">
            ← Back to Programs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Days for Dignity Details
  if (slug === 'days-for-dignity') {
    return (
      <div className="min-h-screen bg-bg text-ink">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 overflow-hidden border-b-[1.5px] border-ink bg-paper min-h-[60vh] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/sanitary.jpg"
              alt="Days for Dignity"
              className="w-full h-full object-cover grayscale opacity-[0.45]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070';
              }}
            />
          </div>
          <div className="container mx-auto px-4 z-10 max-w-4xl text-center space-y-6 relative flex flex-col items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold bg-coral/20 px-3 py-1 rounded-full border border-ink/20 animate-pulse">
              HEALTH EQUITY & DIGITAL DIGNITY
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
              Days for Dignity
            </h1>
            <span className="font-mono text-xs uppercase tracking-wider text-coral-deep block mt-1">
              (Formerly known as Uwezo Voucher)
            </span>
            <p className="font-serif text-xl italic text-ink max-w-2xl mx-auto leading-relaxed border-l-2 border-coral pl-4 text-left bg-bg/85 p-4 border border-ink">
              "We leverage technology through an offline-first digital loyalty system to replace stigmatizing handouts, returning dignity to girls."
            </p>
          </div>
        </section>

        {/* Narrative & Period Poverty */}
        <section className="py-16 md:py-24 bg-bg">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold text-ink">The Crisis of Period Poverty</h2>
                <p className="text-ink-soft text-sm leading-relaxed font-sans">
                  Menstrual health products are unaffordable for 65% of Kenyan women and girls. Schoolgirls can miss up to 4 days every month—which translates to nearly 20% of the entire academic year lost.
                </p>
                <p className="text-ink-soft text-sm leading-relaxed font-sans">
                  Desperation forces vulnerable girls into transactional sex just to manage their biology, fueling the Triple Threat: New HIV infections, teenage pregnancies, and gender-based violence (SGBV).
                </p>
              </div>
              <div className="border-2 border-ink p-6 bg-butter shadow-[5px_5px_0_#1F1A17] rotate-[-1deg] relative">
                <div className="tape-accent bg-coral-deep" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-bold mb-4">The Triple Threat Amplified</h3>
                <ul className="space-y-3 font-sans text-xs text-ink-soft">
                  <li className="flex items-start">
                    <span className="text-coral-deep mr-2 font-bold">✦</span>
                    <span>20% of school year lost to biological absenteeism.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral-deep mr-2 font-bold">✦</span>
                    <span>Desperate need for pads fuels high SGBV risk.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral-deep mr-2 font-bold">✦</span>
                    <span>Handouts fail due to logistical corruption and leakages.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Do It flowchart */}
            <div className="border-2 border-ink bg-paper p-8 shadow-[6px_6px_0_#1F1A17] space-y-8">
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold text-ink">How the Learn-to-Earn Loop Works</h3>
                <p className="text-ink-soft font-mono text-[10px] uppercase tracking-wider mt-1">Our offline-first digital voucher system</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Step 1 */}
                <div className="border-2 border-ink p-6 bg-mint/10 hover:bg-mint/20 hover:-translate-y-0.5 transition-all duration-300 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-ink text-bg font-bold flex items-center justify-center font-mono shadow-[2px_2px_0_#1F1A17]">1</div>
                    <h4 className="font-serif font-bold text-xl text-ink mt-3">EARN</h4>
                    <p className="text-ink-soft text-xs leading-relaxed font-sans mt-2">
                      School attendance is tracked programmatically. Regular attendance automatically triggers digital reward points on our portal.
                    </p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="border-2 border-ink p-6 bg-coral/10 hover:bg-coral/20 hover:-translate-y-0.5 transition-all duration-300 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-ink text-bg font-bold flex items-center justify-center font-mono shadow-[2px_2px_0_#1F1A17]">2</div>
                    <h4 className="font-serif font-bold text-xl text-ink mt-3">REDEEM</h4>
                    <p className="text-ink-soft text-xs leading-relaxed font-sans mt-2">
                      Girls use offline QR-coded ID cards at local participating kiosks to privately select and retrieve sanitary products.
                    </p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="border-2 border-ink p-6 bg-lavender/10 hover:bg-lavender/20 hover:-translate-y-0.5 transition-all duration-300 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-ink text-bg font-bold flex items-center justify-center font-mono shadow-[2px_2px_0_#1F1A17]">3</div>
                    <h4 className="font-serif font-bold text-xl text-ink mt-3">SETTLE</h4>
                    <p className="text-ink-soft text-xs leading-relaxed font-sans mt-2">
                      The platform batches transactions and automates bulk Mobile Money payments back to the local kiosk vendor, paying a commission to our local partner vendors for distribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Panel */}
            <div className="space-y-6 pt-6">
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold text-ink">Track Record</h3>
                <p className="text-ink-soft font-mono text-[10px] uppercase tracking-wider">Direct impact metrics from the field</p>
              </div>
              <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:overflow-x-visible md:pb-0">
                <div className="border-2 border-ink p-6 text-center bg-paper shadow-[4px_4px_0_#1F1A17] hover:-translate-y-1 transition-transform duration-300 snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
                  <Users className="w-8 h-8 mx-auto text-coral-deep mb-3" />
                  <div className="text-4xl font-serif font-bold text-ink">
                    <CountUp end={150} suffix="+" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-ink-soft mt-1">Girls Mentored & Supported</div>
                </div>
                <div className="border-2 border-ink p-6 text-center bg-paper shadow-[4px_4px_0_#1F1A17] hover:-translate-y-1 transition-transform duration-300 snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
                  <Activity className="w-8 h-8 mx-auto text-coral-deep mb-3" />
                  <div className="text-4xl font-serif font-bold text-ink">
                    <CountUp end={88} suffix="%" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-ink-soft mt-1">Attendance Maintained</div>
                </div>
                <div className="border-2 border-ink p-6 text-center bg-paper shadow-[4px_4px_0_#1F1A17] hover:-translate-y-1 transition-transform duration-300 snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
                  <ShieldCheck className="w-8 h-8 mx-auto text-coral-deep mb-3" />
                  <div className="text-4xl font-serif font-bold text-ink">
                    <CountUp end={320} prefix="KES " suffix="K" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-ink-soft mt-1">Vouchers Redeemed</div>
                </div>
              </div>
            </div>

            {/* Sustainability business model */}
            <div className="border-t border-ink/10 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-coral-deep">B2B Platform-as-a-Service</h3>
                  <p className="text-ink-soft text-sm font-sans leading-relaxed">
                    By licensing this system to other NGOs for bulk necessities (food, textbooks, hygiene kits), we eliminate ~30% in physical logistics overhead. We collect a 3% - 5% utilization fee per transaction to sustain operation.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-coral-deep">Sustainability & Scale</h3>
                  <p className="text-ink-soft text-sm font-sans leading-relaxed">
                    This offline-first solution replaces standard stigmatizing handouts with digital capability, building a resilient aid economy inside local communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 bg-coral text-ink text-center border-t-2 border-ink">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <h2 className="font-serif text-4xl font-bold">Support Days for Dignity</h2>
            <p className="text-ink-soft text-sm leading-relaxed max-w-xl mx-auto">
              Help us translate voucher balances into real-world hygiene products for schoolgirls across Kenya.
            </p>
            <div className="pt-4">
              <Button asChild className="btn-neo bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 px-8 py-5 font-mono text-xs uppercase tracking-wider font-bold">
                <Link to="/donate">
                  Support Our Cause
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }


  // Tech for Tomorrow Details
  if (slug === 'tech-for-tomorrow') {
    return (
      <div className="min-h-screen bg-bg text-ink">
        <Header />
        
        {/* Mint Hero */}
        <section className="relative pt-28 pb-16 overflow-hidden border-b-[1.5px] border-ink bg-[#EBF5EE] min-h-[60vh] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/techtommorow.jpg"
              alt="Tech for Tomorrow"
              className="w-full h-full object-cover grayscale opacity-[0.45]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070';
              }}
            />
          </div>
          <div className="container mx-auto px-4 z-10 max-w-4xl text-center space-y-6 relative animate-fadeIn flex flex-col items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-ink bg-bg/50 px-3 py-1 rounded-full border border-ink/20 font-bold">
              STEM & AI LEARNING PILLAR
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
              Tech for Tomorrow
            </h1>
            <p className="font-serif text-xl italic text-ink max-w-2xl mx-auto leading-relaxed border-l-2 border-ink pl-4 text-left bg-bg/80 p-4 border border-ink">
              "We bridge the digital divide by equipping youth with foundational IT literacy, computational logic, and hands-on hardware engineering skills."
            </p>
          </div>
        </section>

        {/* How Uwezo Teaching Works */}
        <section className="py-16 md:py-24 bg-bg">
          <div className="container mx-auto px-4 max-w-4xl space-y-16">
            
            {/* Context & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold">Empowering Kenya's Next Generation</h2>
                <p className="text-ink-soft text-sm leading-relaxed font-sans">
                  Approximately 67% of Kenyan youth face unemployment. In addition, less than 30% of STEM professionals in Africa are women, and significant device disparities lock rural schools out of the tech revolution.
                </p>
                <p className="text-ink-soft text-sm leading-relaxed font-sans">
                  Tech for Tomorrow addresses this gap directly through rural-friendly mobile labs, training facilitators, and supplying offline-first computing curricula to public schools.
                </p>
              </div>

              {/* Sticky note style goals */}
              <div className="border-2 border-ink p-6 bg-mint shadow-[5px_5px_0_#1F1A17] rotate-[1.5deg] relative">
                <div className="tape-accent bg-coral-deep" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-bold mb-4">Program Goals</h3>
                <ul className="space-y-3 font-sans text-xs text-ink-soft">
                  <li className="flex items-start">
                    <span className="text-ink font-bold mr-2">✔</span>
                    <span>Empower underserved youth with essential IT capabilities and math skills.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ink font-bold mr-2">✔</span>
                    <span>Achieve gender balance across all digital training sessions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ink font-bold mr-2">✔</span>
                    <span>Support student groups to prototype local solutions.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Curriculum Framework */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-center">Curriculum Framework</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Basic IT & Math Foundations */}
                <div className="border-2 border-ink p-6 bg-paper rounded shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-ink mb-4" />
                  <h4 className="font-serif font-bold text-xl mb-2">IT & Math Basics</h4>
                  <p className="text-ink-soft text-xs leading-relaxed font-sans">
                    Building basic computer literacy, digital workflows, and mathematical logic essential for computational thinking and programming.
                  </p>
                </div>

                {/* Software Programming */}
                <div className="border-2 border-ink p-6 bg-paper rounded shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300">
                  <Code2 className="w-8 h-8 text-ink mb-4" />
                  <h4 className="font-serif font-bold text-xl mb-2">Coding Foundations</h4>
                  <p className="text-ink-soft text-xs leading-relaxed font-sans">
                    Introduction to software logic, visual block programming, and basic scripting to build analytical thinking.
                  </p>
                </div>

                {/* Hardware & IoT Prototyping */}
                <div className="border-2 border-ink p-6 bg-paper rounded shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300">
                  <Cpu className="w-8 h-8 text-ink mb-4" />
                  <h4 className="font-serif font-bold text-xl mb-2">Hardware & IoT</h4>
                  <p className="text-ink-soft text-xs leading-relaxed font-sans">
                    Hands-on physical computing: building circuits, programming microcontrollers, and assembling sensors for environmental data collection.
                  </p>
                </div>

              </div>
            </div>

            {/* Impact Metrics */}
            <div className="space-y-6 pt-12 border-t border-ink/10">
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold text-ink">Our Track Record</h3>
                <p className="text-ink-soft font-mono text-[10px] uppercase tracking-wider mt-1">Key milestones achieved in tech education</p>
              </div>
              <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:overflow-x-visible md:pb-0">
                <div className="border-2 border-ink p-6 text-center bg-paper shadow-[4px_4px_0_#1F1A17] hover:-translate-y-1 transition-transform duration-300 snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
                  <Users className="w-8 h-8 mx-auto text-coral-deep mb-3" />
                  <div className="text-4xl font-serif font-bold text-ink">
                    <CountUp end={30} suffix="+" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-ink-soft mt-1">Students Reached & Mentored</div>
                </div>
                <div className="border-2 border-ink p-6 text-center bg-paper shadow-[4px_4px_0_#1F1A17] hover:-translate-y-1 transition-transform duration-300 snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
                  <Cpu className="w-8 h-8 mx-auto text-coral-deep mb-3" />
                  <div className="text-4xl font-serif font-bold text-ink">
                    <CountUp end={2} />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-ink-soft mt-1">Working IoT Prototypes Deployed</div>
                </div>
                <div className="border-2 border-ink p-6 text-center bg-paper shadow-[4px_4px_0_#1F1A17] hover:-translate-y-1 transition-transform duration-300 snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
                  <GraduationCap className="w-8 h-8 mx-auto text-coral-deep mb-3" />
                  <div className="text-4xl font-serif font-bold text-ink">
                    <CountUp end={92} suffix="%" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-ink-soft mt-1">Program Completion Rate</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 bg-coral text-ink text-center border-t-[1.5px] border-ink">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <h2 className="font-serif text-4xl font-bold">Support Tech for Tomorrow</h2>
            <p className="text-ink-soft text-sm leading-relaxed max-w-xl mx-auto">
              Help us expand our mobile STEM labs and provide digital education kits to public schools in Kenya.
            </p>
            <div className="pt-4">
              <Button asChild className="btn-neo bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 px-8 py-5 font-mono text-xs uppercase tracking-wider font-bold">
                <Link to="/donate">
                  Support Our Cause
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Civic Power in Motion Details
  if (slug === 'civic-power-in-motion') {
    return (
      <div className="min-h-screen bg-bg text-ink">
        <Header />
        
        {/* Lavender Hero */}
        <section className="relative pt-28 pb-16 overflow-hidden border-b-[1.5px] border-ink bg-lavender">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-ink bg-bg/50 px-3 py-1 rounded-full border border-ink/20">
              CIVIC ACTION & DEMOCRATIC LITERACY
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
              Civic Power in Motion
            </h1>
            <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink pl-4">
              "We coordinate structured civic dialogues, voter registration awareness, and local accountability hubs across Kenyan counties."
            </p>
          </div>
        </section>

        {/* Narrative & Solutions */}
        <section className="py-16 md:py-24 bg-bg">
          <div className="container mx-auto px-4 max-w-4xl space-y-16">
            
            {/* The Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold">Digital Activism vs. Civic Access</h2>
                <p className="text-ink-soft text-sm leading-relaxed font-sans">
                  While online campaigns organize immense digital power, youth face limited formal pathways to directly influence national policy. Digital mobilizations risk failing to translate into lasting structural participation.
                </p>
                <p className="text-ink-soft text-sm leading-relaxed font-sans">
                  Our model focuses on community-level empowerment, ensuring that basic civic knowledge reaches boda riders, informal vendors, rural girls, and PWDs.
                </p>
              </div>

              {/* Specs */}
              <div className="border-2 border-ink p-6 bg-paper shadow-[4px_4px_0_#1F1A17]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-bold mb-4">Core Interventions</h3>
                <ul className="space-y-3 font-sans text-xs text-ink-soft">
                  <li className="flex items-start">
                    <span className="text-coral-deep mr-2">◆</span>
                    <span>Micro-workshops and grassroots dialogue labs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral-deep mr-2">◆</span>
                    <span>Peer Facilitator networks for high trust.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral-deep mr-2">◆</span>
                    <span>Interactive Voter registration SMS bot.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dashboard / Metrics */}
            <div className="border-2 border-ink p-8 bg-paper rounded space-y-6 shadow-[5px_5px_0_#1F1A17]">
              <h3 className="font-serif text-2xl font-bold text-center">Youth Voter Engagement Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-coral-deep">15% Progress</div>
                  <p className="text-ink-soft text-xs font-mono uppercase tracking-wider mt-1">voter registration targets</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-coral-deep">10% Trained</div>
                  <p className="text-ink-soft text-xs font-mono uppercase tracking-wider mt-1">peer facilitators in counties</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-coral-deep">40% Target</div>
                  <p className="text-ink-soft text-xs font-mono uppercase tracking-wider mt-1">civic literacy improvements</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 bg-paper text-ink text-center border-t-[1.5px] border-ink">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <h2 className="font-serif text-4xl font-bold">Support Civic Power in Motion</h2>
            <p className="text-ink-soft text-sm leading-relaxed max-w-xl mx-auto">
              Help us expand our local civic dialogues and support voter registration drives for young citizens.
            </p>
            <div className="pt-4">
              <Button asChild className="btn-neo bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 px-8 py-5 font-mono text-xs uppercase tracking-wider font-bold">
                <Link to="/donate">
                  Support Our Cause
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Fallback default detail page
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <section className="pt-24 pb-16 bg-paper border-b border-ink/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-4xl font-bold mb-4">{program.title}</h1>
          <p className="text-ink-soft leading-relaxed">{program.description}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProgramDetail;
