import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Download, Activity, Heart, ShieldCheck, Cpu, Code2, GraduationCap, Users, Landmark } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import LazyImage from '@/components/LazyImage';
import { Button } from '@/components/ui/button';
import { programs } from '@/data/programs';

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
      <div className="min-h-screen bg-ink text-bg">
        <Header />
        
        {/* Dark Hero */}
        <section className="relative pt-28 pb-16 overflow-hidden border-b border-bg/10">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-coral font-bold bg-coral/20 px-3 py-1 rounded-full border border-coral/30">
              HEALTH EQUITY & DIGITAL DIGNITY
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-bg">
              Days for Dignity
            </h1>
            <p className="font-serif text-xl italic text-bg/85 max-w-2xl mx-auto leading-relaxed border-l-2 border-coral pl-4">
              "We leverage technology through an offline-first digital loyalty system to replace stigmatizing handouts, returning dignity to girls."
            </p>
          </div>
        </section>

        {/* Narrative & Period Poverty */}
        <section className="py-16 md:py-24 bg-ink">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold text-coral">The Crisis of Period Poverty</h2>
                <p className="text-bg/80 text-sm leading-relaxed font-sans">
                  Menstrual health products are unaffordable for 65% of Kenyan women and girls. Schoolgirls can miss up to 4 days every month—which translates to nearly 20% of the entire academic year lost.
                </p>
                <p className="text-bg/80 text-sm leading-relaxed font-sans">
                  Desperation forces vulnerable girls into transactional sex just to manage their biology, fueling the Triple Threat: New HIV infections, teenage pregnancies, and gender-based violence (SGBV).
                </p>
              </div>
              <div className="border-2 border-bg/25 p-6 bg-bg/5 rounded shadow-[4px_4px_0_rgba(255,255,255,0.1)]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-coral font-bold mb-4">The Triple Threat Amplified</h3>
                <ul className="space-y-3 font-sans text-xs text-bg/90">
                  <li className="flex items-start">
                    <span className="text-coral mr-2">✦</span>
                    <span>20% of school year lost to biological absenteeism.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-2">✦</span>
                    <span>Desperate need for pads fuels high SGBV risk.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-2">✦</span>
                    <span>Handouts fail due to logistical corruption and leakages.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Do It flowchart */}
            <div className="border-2 border-coral bg-bg/5 p-8 rounded space-y-8">
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold text-coral">How the Learn-to-Earn Loop Works</h3>
                <p className="text-bg/75 font-mono text-[10px] uppercase tracking-wider mt-1">Our offline-first digital voucher system</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Step 1 */}
                <div className="border border-coral/30 p-6 rounded bg-ink/50 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-coral text-ink font-bold flex items-center justify-center font-mono">1</div>
                  <h4 className="font-serif font-bold text-xl text-coral">EARN</h4>
                  <p className="text-bg/80 text-xs leading-relaxed font-sans">
                    School attendance is tracked programmatically. Regular attendance automatically triggers digital reward points on our portal.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="border border-coral/30 p-6 rounded bg-ink/50 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-coral text-ink font-bold flex items-center justify-center font-mono">2</div>
                  <h4 className="font-serif font-bold text-xl text-coral">REDEEM</h4>
                  <p className="text-bg/80 text-xs leading-relaxed font-sans">
                    Girls use offline QR-coded ID cards at local participating kiosks to privately select and retrieve sanitary products.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="border border-coral/30 p-6 rounded bg-ink/50 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-coral text-ink font-bold flex items-center justify-center font-mono">3</div>
                  <h4 className="font-serif font-bold text-xl text-coral">SETTLE</h4>
                  <p className="text-bg/80 text-xs leading-relaxed font-sans">
                    The platform batches transactions and automates bulk Mobile Money payments back to the local kiosk vendor.
                  </p>
                </div>
              </div>
            </div>

            {/* Dashboard Panel */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold text-bg">Live Operational Dashboard</h3>
                <p className="text-coral font-mono text-[10px] uppercase tracking-wider">Simulated benchmarks for aid verification</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-bg/10 p-6 text-center rounded bg-bg/5">
                  <Users className="w-8 h-8 mx-auto text-coral mb-3" />
                  <div className="text-3xl font-bold text-bg">342</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-bg/60 mt-1">Active Students</div>
                </div>
                <div className="border border-bg/10 p-6 text-center rounded bg-bg/5">
                  <Activity className="w-8 h-8 mx-auto text-coral mb-3" />
                  <div className="text-3xl font-bold text-bg">87%</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-bg/60 mt-1">Sustained Attendance</div>
                </div>
                <div className="border border-bg/10 p-6 text-center rounded bg-bg/5">
                  <ShieldCheck className="w-8 h-8 mx-auto text-coral mb-3" />
                  <div className="text-3xl font-bold text-bg">KES 487,500</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-bg/60 mt-1">Local Kiosk Payouts</div>
                </div>
              </div>
            </div>

            {/* Sustainability business model */}
            <div className="border-t border-bg/10 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-coral">B2B Platform-as-a-Service</h3>
                  <p className="text-bg/85 text-sm font-sans leading-relaxed">
                    By licensing this system to other NGOs for bulk necessities (food, textbooks, hygiene kits), we eliminate ~30% in physical logistics overhead. We collect a 3% - 5% utilization fee per transaction to sustain operation.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-coral">Sustainability & Scale</h3>
                  <p className="text-bg/85 text-sm font-sans leading-relaxed">
                    This offline-first solution replaces standard stigmatizing handouts with digital capability, building a resilient aid economy inside local communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 bg-bg text-ink text-center border-t-2 border-ink">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <h2 className="font-serif text-4xl font-bold">Support Days for Dignity</h2>
            <p className="text-ink-soft text-sm leading-relaxed max-w-xl mx-auto">
              Help us translate simulated vouchers into real-world hygiene balances for vulnerable schoolgirls across Kenya.
            </p>
            <div className="pt-4">
              <Button asChild className="btn-neo bg-ink text-bg border-ink px-8 py-5 font-mono text-xs uppercase tracking-wider">
                <Link to="/donate">
                  Support This Initiative
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
        <section className="relative pt-28 pb-16 overflow-hidden border-b-[1.5px] border-ink bg-mint">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-ink bg-bg/50 px-3 py-1 rounded-full border border-ink/20">
              STEM & AI LEARNING PILLAR
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
              Tech for Tomorrow
            </h1>
            <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink pl-4">
              "We close the rural digital divide by providing inclusive coding, electronics, and e-waste smart farm training."
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
                  Tech for Tomorrow combines AI certifications and mobile labs to deliver accessible coding education directly to villages.
                </p>
              </div>

              {/* Specs */}
              <div className="border-2 border-ink p-6 bg-paper shadow-[4px_4px_0_#1F1A17]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-bold mb-4">Program Goals</h3>
                <ul className="space-y-3 font-sans text-xs text-ink-soft">
                  <li className="flex items-start">
                    <span className="text-coral-deep mr-2">✔</span>
                    <span>Empower 500+ underserved Kenyan youth annually.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral-deep mr-2">✔</span>
                    <span>Achieve 50% female participation via coding hackathons.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral-deep mr-2">✔</span>
                    <span>Support youth startups with seed grants and mentorship.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Curriculum Framework */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-center">Curriculum Framework</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Tinkercad */}
                <div className="border-2 border-ink p-6 bg-paper rounded shadow-[3px_3px_0_#1F1A17]">
                  <Cpu className="w-8 h-8 text-ink mb-4" />
                  <h4 className="font-serif font-bold text-xl mb-2">Tinkercad Modeling</h4>
                  <p className="text-ink-soft text-xs leading-relaxed font-sans">
                    3D design tools simple enough for schoolkids. Students build physical gear cases and export designs for local 3D printing.
                  </p>
                </div>

                {/* Arduino */}
                <div className="border-2 border-ink p-6 bg-paper rounded shadow-[3px_3px_0_#1F1A17]">
                  <Code2 className="w-8 h-8 text-ink mb-4" />
                  <h4 className="font-serif font-bold text-xl mb-2">Arduino Hardware</h4>
                  <p className="text-ink-soft text-xs leading-relaxed font-sans">
                    Programmable circuit boards that let students bring code to life: blinking LEDs, read environmental sensors, or track soil moisture.
                  </p>
                </div>

                {/* AI certifications */}
                <div className="border-2 border-ink p-6 bg-paper rounded shadow-[3px_3px_0_#1F1A17]">
                  <GraduationCap className="w-8 h-8 text-ink mb-4" />
                  <h4 className="font-serif font-bold text-xl mb-2">AI Certifications</h4>
                  <p className="text-ink-soft text-xs leading-relaxed font-sans">
                    Students map machine learning, NLP, and computer vision models through partnerships with Cisco Academy and Microsoft Learn.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 bg-paper text-ink text-center border-t-[1.5px] border-ink">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <h2 className="font-serif text-4xl font-bold">Support Tech for Tomorrow</h2>
            <p className="text-ink-soft text-sm leading-relaxed max-w-xl mx-auto">
              Help us expand our mobile STEM labs and provide Arduino electronics kits to rural schools in Kenya.
            </p>
            <div className="pt-4">
              <Button asChild className="btn-neo bg-ink text-bg border-ink px-8 py-5 font-mono text-xs uppercase tracking-wider">
                <Link to="/donate">
                  Support This Initiative
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
              <Button asChild className="btn-neo bg-ink text-bg border-ink px-8 py-5 font-mono text-xs uppercase tracking-wider">
                <Link to="/donate">
                  Support This Initiative
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
