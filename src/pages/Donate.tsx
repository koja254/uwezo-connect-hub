import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Smartphone, CreditCard, Globe, ArrowRight, Copy, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

export const Donate: React.FC = () => {
  const { toast } = useToast();
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const copyToClipboard = (address: string, label: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    toast({
      title: "Copied!",
      description: `${label} address copied to clipboard.`,
    });
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const cryptoWallets = [
    { name: 'Bitcoin (BTC)', address: 'bc1q5d7kmawnplqpx627vvquwezonetwork778x', label: 'BTC' },
    { name: 'Ethereum (ETH)', address: '0x37kvQaGNhrmEbI6X267VvQTheUwezoNetworkInitiative001', label: 'ETH' },
    { name: 'USDC (ERC-20)', address: '0xd2prZ2FzaXBweDFsTheUwezoNetworkInitiative002', label: 'USDC' }
  ];

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[60vh] flex items-center justify-center bg-paper">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/donation.jpg"
            alt="Donate to The Uwezo Network Initiative"
            className="w-full h-full object-cover grayscale opacity-20"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070';
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10 max-w-4xl text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-coral-deep font-bold bg-coral/20 px-3 py-1 rounded-full border border-ink/20">
            SUPPORT US
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Become an Ally Today
          </h1>
          <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4">
            "We Need Your Support - Leave a Legacy. Invest in the next generation of African tech leaders."
          </p>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-12 bg-bg text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg md:text-xl text-ink-soft leading-relaxed font-sans">
            Every donation directly funds sanitary towel voucher balances for girls to stay in school, components for e-waste smart classroom engineering, and facilitator tools for community-level voter dialogues.
          </p>
        </div>
      </section>

      {/* Donation forms */}
      <section className="py-16 md:py-24 bg-paper border-y-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Donation Channels</h2>
            <p className="text-ink-soft font-mono text-xs uppercase tracking-wider">Securely integrated payment models</p>
          </div>

          <div className="border-2 border-ink bg-bg p-8 shadow-[6px_6px_0_#1F1A17] rounded-none">
            <Tabs defaultValue="mpesa" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3 border-2 border-ink rounded-none bg-paper p-1">
                <TabsTrigger value="mpesa" className="font-mono text-xs uppercase tracking-wider rounded-none data-[state=active]:bg-ink data-[state=active]:text-bg flex items-center justify-center gap-1.5 py-3">
                  <Smartphone className="w-4 h-4" />
                  M-Pesa
                </TabsTrigger>
                <TabsTrigger value="pesapal" className="font-mono text-xs uppercase tracking-wider rounded-none data-[state=active]:bg-ink data-[state=active]:text-bg flex items-center justify-center gap-1.5 py-3">
                  <CreditCard className="w-4 h-4" />
                  Pesapal
                </TabsTrigger>
                <TabsTrigger value="crypto" className="font-mono text-xs uppercase tracking-wider rounded-none data-[state=active]:bg-ink data-[state=active]:text-bg flex items-center justify-center gap-1.5 py-3">
                  <Globe className="w-4 h-4" />
                  Crypto
                </TabsTrigger>
              </TabsList>

              {/* M-Pesa Instructions */}
              <TabsContent value="mpesa" className="space-y-6">
                <div className="border border-ink p-6 bg-paper rounded">
                  <h3 className="font-serif font-bold text-2xl text-ink mb-4">Lipa Na M-Pesa Instructions</h3>
                  <ol className="space-y-3 font-sans text-sm text-ink-soft">
                    <li className="flex gap-2">
                      <span className="font-mono font-bold text-ink">1.</span>
                      <span>Go to M-Pesa menu on your mobile phone</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-mono font-bold text-ink">2.</span>
                      <span>Select <strong>Lipa Na M-Pesa</strong> then <strong>Paybill</strong></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-mono font-bold text-ink">3.</span>
                      <span>Enter Business Number: <strong>400222</strong> (Cooperative Bank)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-mono font-bold text-ink">4.</span>
                      <span>Enter Account Number: <strong>DONATE</strong></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-mono font-bold text-ink">5.</span>
                      <span>Enter the amount you wish to donate</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-mono font-bold text-ink">6.</span>
                      <span>Enter your PIN and press Send</span>
                    </li>
                  </ol>
                </div>
                <div className="border border-ink/40 p-4 bg-butter/10 text-center rounded">
                  <p className="text-xs text-ink-soft font-mono">
                    * M-Pesa transfers directly deposit into our verified NGO accounts in Nairobi, Kenya.
                  </p>
                </div>
              </TabsContent>

              {/* Pesapal Iframe Embed */}
              <TabsContent value="pesapal" className="space-y-6">
                <div className="border border-ink p-6 bg-paper rounded space-y-4">
                  <h3 className="font-serif font-bold text-2xl text-ink">Pesapal Secure Gateway</h3>
                  <p className="text-xs text-ink-soft font-sans">
                    Use our secure, PCI-compliant Pesapal merchant gateway to donate via local/international credit cards, Airtel Money, or bank transfer.
                  </p>
                  
                  {/* Compact embed button iframe */}
                  <div className="flex justify-center border border-ink/10 py-4 bg-bg rounded">
                    <iframe
                      title="Pesapal Compact Donation Button"
                      src="https://store.pesapal.com/embed-code?pageUrl=https://store.pesapal.com/donationform"
                      width={200}
                      height={40}
                      style={{ border: 0 }}
                      frameBorder={0}
                      allowFullScreen
                      loading="lazy"
                      sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin"
                    />
                  </div>

                  <p className="text-[10px] text-ink-soft/70 text-center font-mono">
                    If payment button fails to display, click <a href="https://store.pesapal.com/donationform" target="_blank" rel="noopener noreferrer" className="underline text-coral-deep">here</a> to donate directly on our hosted portal.
                  </p>
                </div>
              </TabsContent>

              {/* Crypto Wallets */}
              <TabsContent value="crypto" className="space-y-6">
                <div className="border border-ink p-6 bg-paper rounded space-y-6">
                  <h3 className="font-serif font-bold text-2xl text-ink">Donate Cryptocurrency</h3>
                  <p className="text-xs text-ink-soft font-sans">
                    We accept decentralized assets for tech lab hardware purchases. Click to copy the public address hashes below:
                  </p>

                  <div className="space-y-4">
                    {cryptoWallets.map((wallet) => (
                      <div key={wallet.name} className="border border-ink p-4 bg-bg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="min-w-0">
                          <span className="font-mono text-xs uppercase tracking-wider text-coral-deep font-bold">{wallet.name}</span>
                          <p className="text-[10px] font-mono text-ink-soft truncate mt-1 select-all">{wallet.address}</p>
                        </div>
                        <Button
                          onClick={() => copyToClipboard(wallet.address, wallet.name)}
                          className="btn-neo bg-ink text-bg border-ink p-2 text-xs font-mono h-10 w-full sm:w-28 flex items-center justify-center gap-1.5"
                        >
                          {copiedAddress === wallet.address ? <Check className="w-4 h-4 text-mint" /> : <Copy className="w-4 h-4" />}
                          {copiedAddress === wallet.address ? 'Copied' : 'Copy'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

            </Tabs>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <SectionDivider />

      <section className="py-16 md:py-24 bg-coral border-b-[1.5px] border-ink text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink">Have Partnership Questions?</h2>
          <p className="text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
            Reach out directly to our partnerships team to coordinate donor-directed grants, equipment donations, or corporate matching.
          </p>
          <div className="pt-4">
            <Button asChild className="btn-neo bg-ink text-bg border-ink px-8 py-5 font-mono text-xs uppercase tracking-wider">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
