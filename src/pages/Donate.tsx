import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Globe, Shield, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const DonationForm = ({ type }: { type: 'one-time' | 'monthly' }) => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  
  const predefinedAmounts = ['25', '50', '100', '250', '500'];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement payment processing
    console.log('Donation form submitted:', { type, amount: amount || customAmount });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label className="text-base font-medium">Select Amount (USD)</Label>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {predefinedAmounts.map((value) => (
            <Button
              key={value}
              type="button"
              variant={amount === value ? "default" : "outline"}
              onClick={() => {
                setAmount(value);
                setCustomAmount('');
              }}
            >
              ${value}
            </Button>
          ))}
        </div>
        <div className="mt-3">
          <Input
            placeholder="Custom amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setAmount('');
            }}
            type="number"
            min="1"
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" required />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" required />
          </div>
        </div>
        
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" required />
        </div>
        
        <div>
          <Label htmlFor="country">Country</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ke">Kenya</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" placeholder="MM/YY" required />
          </div>
          <div>
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="123" required />
          </div>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full cta-primary">
        <Heart className="w-4 h-4 mr-2" />
        Donate ${amount || customAmount || '0'} {type === 'monthly' ? '/month' : ''}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Your donation is secure and encrypted. You will receive a receipt via email.
      </p>
    </form>
  );
};

const Donate = () => {
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
              Your contribution directly impacts students across Kenya, providing them with 
              access to cutting-edge STEM education and life-changing opportunities.
            </p>
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
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Your Impact in Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how your donation translates into real-world impact for students and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">$10</span>
                </div>
                <CardTitle className="text-lg">School Supplies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Provides basic school supplies and materials for one student for a month, 
                  including notebooks, pens, and basic tech accessories.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl">$50</span>
                </div>
                <CardTitle className="text-lg">Workshop Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sponsors one student's participation in a full month of Fab Lab workshops, 
                  including materials and mentorship.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-accent/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">$100</span>
                </div>
                <CardTitle className="text-lg">Full Program</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Covers complete program participation for one student, including Uwezo Tokens, 
                  Fab Lab access, and ongoing support.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Forms */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
                Choose Your Donation Method
              </h2>
              <p className="text-lg text-muted-foreground">
                Support our mission with a secure, convenient donation method that works for you.
              </p>
            </div>

            <Tabs defaultValue="card" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="card" className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4" />
                  <span>Card Payment</span>
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

              <TabsContent value="card">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-primary" />
                        <span>One-Time Donation</span>
                      </CardTitle>
                      <CardDescription>
                        Make a single donation to support our current programs and initiatives.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <DonationForm type="one-time" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-secondary" />
                        <span>Monthly Giving</span>
                      </CardTitle>
                      <CardDescription>
                        Join our monthly giving program for sustained impact and exclusive updates.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <DonationForm type="monthly" />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="mobile">
                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Money Donations</CardTitle>
                    <CardDescription>
                      Support us using M-Pesa and other mobile money services available in Kenya.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-6 bg-muted rounded-xl">
                      <h3 className="font-semibold mb-3">M-Pesa Instructions</h3>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Go to M-Pesa menu on your phone</li>
                        <li>2. Select "Lipa Na M-Pesa"</li>
                        <li>3. Select "Pay Bill"</li>
                        <li>4. Enter Business Number: [To be provided]</li>
                        <li>5. Enter Account Number: DONATE</li>
                        <li>6. Enter amount and confirm</li>
                      </ol>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For other mobile money services or assistance, please contact us directly.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="crypto">
                <Card>
                  <CardHeader>
                    <CardTitle>Cryptocurrency Donations</CardTitle>
                    <CardDescription>
                      Support us with digital currencies. We accept various tokens on multiple networks.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-muted rounded-xl">
                        <h3 className="font-semibold mb-3 flex items-center space-x-2">
                          <Shield className="w-5 h-5" />
                          <span>Ethereum (ERC-20)</span>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Accepted tokens: ETH, USDC, USDT, DAI
                        </p>
                        <div className="p-3 bg-background rounded border text-xs font-mono break-all">
                          [Ethereum Address - To be provided]
                        </div>
                      </div>

                      <div className="p-6 bg-muted rounded-xl">
                        <h3 className="font-semibold mb-3 flex items-center space-x-2">
                          <Globe className="w-5 h-5" />
                          <span>Celo Network</span>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Accepted tokens: CELO, cUSD, cEUR
                        </p>
                        <div className="p-3 bg-background rounded border text-xs font-mono break-all">
                          [Celo Address - To be provided]
                        </div>
                      </div>
                    </div>

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
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Corporate Partnerships
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Partner with us to create lasting impact through corporate social responsibility initiatives, 
              employee engagement programs, and strategic partnerships.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">Sponsorship Packages</h3>
                <p className="text-sm text-muted-foreground">
                  Custom sponsorship opportunities with brand visibility and impact reporting.
                </p>
              </div>
              <div className="p-6 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">Employee Engagement</h3>
                <p className="text-sm text-muted-foreground">
                  Volunteer programs and team-building opportunities with social impact.
                </p>
              </div>
              <div className="p-6 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">Grant Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Collaborative funding for specific programs and infrastructure development.
                </p>
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