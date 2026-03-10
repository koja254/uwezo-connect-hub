"use client";

import React, { useState } from "react";
import { Heart, CreditCard, Smartphone, Globe, Shield, Users, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { cryptoWallets } from "@/data/crypto";

type DonationFormProps = {
  type: "one-time" | "monthly";
};

/**
 * DonationFormEmbedCompact
 * - Renders a compact Pesapal embed button-sized iframe (200x40) as provided by you.
 * - Shows "Open inline" which expands the iframe to full embedded form below (configurable height).
 * - Provides a fallback "Open hosted donation page" link which opens the full page in a new tab.
 */
const DonationFormEmbedCompact: React.FC<DonationFormProps> = ({ type }) => {
  // your provided embed source (keeps pageUrl param)
  const pesapalEmbedSrc =
    "https://store.pesapal.com/embed-code?pageUrl=https://store.pesapal.com/donationform";

  const [expanded, setExpanded] = useState(false);
  const expandedHeight = 600; // when expanded show the full form area

  return (
    <div>
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {type === "monthly" ? "Monthly giving (Pesapal)" : "One-time donation (Pesapal)"}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              onClick={() => {
                // small action - toggle expanded inline view
                setExpanded((s) => !s);
              }}
            >
              {expanded ? "Hide form" : "Open inline"}
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                // open hosted page in new tab as a fallback
                window.open("https://store.pesapal.com/donationform", "_blank", "noopener,noreferrer");
              }}
            >
              Open in new tab
            </Button>
          </div>
        </div>
      </div>

      {/* Small compact iframe (button-sized) */}
      <div className="mb-4">
        <iframe
          title={`Pesapal Compact Button - ${type}`}
          src={pesapalEmbedSrc}
          width={200}
          height={40}
          style={{ border: 0 }}
          frameBorder={0}
          allowFullScreen
          loading="lazy"
          sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin"
        />
      </div>

      {/* Expanded inline iframe (only shown when user toggles) */}
      {expanded && (
        <div className="mb-4 rounded-xl overflow-hidden border">
          <iframe
            title={`Pesapal Full Form - ${type}`}
            src={pesapalEmbedSrc}
            style={{ width: "100%", height: `${expandedHeight}px`, border: 0 }}
            frameBorder={0}
            allowFullScreen
            loading="lazy"
            sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin"
          />
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        If the inline form doesn't load, please disable ad-blockers or use "Open in new tab".
      </p>
    </div>
  );
};

const Donate: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopy = async (address: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(address);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = address;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(address);
      setTimeout(() => setCopied(null), 2000);
      toast({ title: "Copied", description: "Address copied to clipboard." });
    } catch (error) {
      console.error("Copy failed", error);
      toast({ title: "Error", description: "Unable to copy address", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Support Our Mission
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Your contribution directly transforms lives across Kenyan communities.
            </p>
            <div className="max-w-2xl mx-auto mb-8">
              <blockquote className="text-xl md:text-2xl font-light italic text-primary text-center">
                "When you invest in a young person's future, the returns are endless."
              </blockquote>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/image-19.jpg"
                alt="Donation concept illustration"
                className="rounded-2xl shadow-card max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">Your Impact in Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how your donation translates into real-world impact for students and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">$100</span>
                </div>
                <CardTitle className="text-lg">Sanitary Pads for a Term</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Provides a girl with sanitary pads for a full school term, ensuring dignity and uninterrupted education for three months.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl">$150</span>
                </div>
                <CardTitle className="text-lg">IoT Starter Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Funds an IoT climate monitoring kit built from recycled materials, enabling community-led environmental solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-accent/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">$300</span>
                </div>
                <CardTitle className="text-lg">Community Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Supports a full community education workshop for participants.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Forms - compact embed */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">Choose Your Donation Method</h2>
              <p className="text-lg text-muted-foreground">Support our mission with a secure, convenient donation method that works for you.</p>
            </div>

            <Tabs defaultValue="pesapal" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="pesapal" className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4" />
                  <span>Pesapal (Card/Mobile)</span>
                </TabsTrigger>
                <TabsTrigger value="mobile" className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile Money</span>
                </TabsTrigger>
                <TabsTrigger value="crypto" className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>Cryptocurrency</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pesapal">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-primary" />
                        <span>One-Time Donation</span>
                      </CardTitle>
                      <CardDescription>Make a single donation to support our current programs and initiatives.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <DonationFormEmbedCompact type="one-time" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-secondary" />
                        <span>Monthly Giving</span>
                      </CardTitle>
                      <CardDescription>Join our monthly giving program for sustained impact and exclusive updates.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <DonationFormEmbedCompact type="monthly" />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Mobile Money */}
              <TabsContent value="mobile">
                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Money Donations</CardTitle>
                    <CardDescription>Support us using M-Pesa and other mobile money services available in Kenya.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-6 bg-muted rounded-xl">
                      <h3 className="font-semibold mb-3">M-Pesa Paybill Instructions</h3>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Go to M-Pesa menu on your phone</li>
                        <li>2. Select "Lipa Na M-Pesa"</li>
                        <li>3. Select "Pay Bill"</li>
                        <li>4. Enter Business Number: [Insert your Paybill number here]</li>
                        <li>5. Enter Account Number: DONATE</li>
                        <li>6. Enter amount and confirm with your PIN</li>
                      </ol>
                    </div>
                    <p className="text-sm text-muted-foreground">For other mobile money services or assistance, please contact us directly.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Crypto */}
              <TabsContent value="crypto">
                <Card>
                  <CardHeader>
                    <CardTitle>Cryptocurrency Donations</CardTitle>
                    <CardDescription>Support us with digital currencies. We accept various tokens on multiple networks.</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {cryptoWallets.map((wallet) => (
                      <div key={wallet.name} className="p-6 bg-muted rounded-xl">
                        <h3 className="font-semibold mb-3 flex items-center space-x-2">
                          <img src={wallet.icon} alt={wallet.name} className="w-5 h-5" />
                          <span>{wallet.name}</span>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">Network: {wallet.tokens}</p>
                        <div className="p-3 bg-background rounded border text-xs font-mono break-all flex justify-between items-center">
                          <span>{wallet.address}</span>
                          <Button variant="ghost" size="icon" onClick={() => handleCopy(wallet.address)}>
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        {copied === wallet.address && <p className="text-green-500 text-xs mt-1">Copied!</p>}
                      </div>
                    ))}

                    <div className="p-4 bg-primary/10 rounded-xl">
                      <h4 className="font-medium mb-2">Important Notes:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Always verify the address before sending</li>
                        <li>• Include your email in the transaction memo for receipt</li>
                        <li>• Minimum donation: $10 USD equivalent</li>
                        <li>• Transaction fees are covered by the donor</li>
                      </ul>
                    </div>

                    <Button asChild className="w-full">
                      <a href="/contact">Contact Us for Crypto Donations</a>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">Corporate Partnerships</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Partner with us to create lasting impact through corporate social responsibility initiatives, employee engagement programs, and strategic partnerships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">Sponsorship Packages</h3>
                <p className="text-sm text-muted-foreground">Custom sponsorship opportunities with brand visibility and impact reporting.</p>
              </div>
              <div className="p-6 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">Employee Engagement</h3>
                <p className="text-sm text-muted-foreground">Volunteer programs and team-building opportunities with social impact.</p>
              </div>
              <div className="p-6 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">Grant Partnerships</h3>
                <p className="text-sm text-muted-foreground">Collaborative funding for specific programs and infrastructure development.</p>
              </div>
            </div>

            <Button asChild size="lg" variant="outline">
              <a href="/contact">Explore Partnership Opportunities</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
