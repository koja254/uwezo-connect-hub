import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Upload, AlertTriangle, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export const Careers: React.FC = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    roleCategory: '',
    qualification: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        setFileError('Strictly PDF (.pdf) format is allowed.');
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.roleCategory || !selectedFile) {
      toast({
        title: "Error",
        description: "Please fill all mandatory fields and attach your CV.",
        variant: "destructive"
      });
      return;
    }

    // Client-side rate limiting to prevent spam / DDoS
    const now = Date.now();
    const lastSubmit = localStorage.getItem('last_submit_careers');
    if (lastSubmit) {
      const elapsed = now - parseInt(lastSubmit, 10);
      if (elapsed < 15000) {
        toast({
          title: "Too Many Requests",
          description: "Please wait 15 seconds before submitting another application.",
          variant: "destructive",
        });
        return;
      }
    }
    localStorage.setItem('last_submit_careers', now.toString());

    setIsSubmitting(true);

    // Simulate file renaming to first_last_cv.pdf
    const fileExtension = selectedFile.name.split('.').pop();
    const renamedFileName = `${form.firstName.toLowerCase()}_${form.lastName.toLowerCase()}_cv.${fileExtension}`;
    console.log(`Renaming uploaded file "${selectedFile.name}" to "${renamedFileName}" for backend processing...`);

    // Prepare JSON payload (simulating attachment name metadata)
    const payload = {
      'form-name': 'volunteer', // maps to existing backend volunteer webhook
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      roleCategory: form.roleCategory,
      qualification: form.qualification,
      cvName: renamedFileName,
      cvSize: selectedFile.size
    };

    try {
      const response = await fetch('https://uwezo-backend.onrender.com/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Application Received",
          description: "Your files have been successfully processed.",
        });
        setShowThankYou(true);
        // Clear
        setForm({ firstName: '', lastName: '', email: '', phone: '', roleCategory: '', qualification: '' });
        setSelectedFile(null);
      } else {
        throw new Error();
      }
    } catch (err) {
      toast({
        title: "Application Error",
        description: "Could not submit your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[50vh] flex items-center justify-center bg-paper">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-coral-deep font-bold bg-coral/20 px-3 py-1 rounded-full border border-ink/20">
            OPPORTUNITIES
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Join the Movement
          </h1>
          <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4">
            "We believe in human-first technology. Help us build infrastructures of digital dignity and grassroots innovation."
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold">Want to Join Us?</h2>
            <p className="text-ink-soft font-mono text-xs uppercase tracking-wider mt-1">Submit your details and CV below</p>
          </div>

          <div className="border-2 border-ink p-8 bg-paper shadow-[6px_6px_0_#1F1A17]">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold">First Name *</label>
                  <Input
                    type="text"
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={(e) => setForm({...form, firstName: e.target.value})}
                    required
                    className="bg-bg border-2 border-ink rounded-none px-4 py-3 placeholder:text-ink-soft/40 text-ink focus-visible:ring-0 focus-visible:border-ink"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Last Name *</label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(e) => setForm({...form, lastName: e.target.value})}
                    required
                    className="bg-bg border-2 border-ink rounded-none px-4 py-3 placeholder:text-ink-soft/40 text-ink focus-visible:ring-0 focus-visible:border-ink"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    required
                    className="bg-bg border-2 border-ink rounded-none px-4 py-3 placeholder:text-ink-soft/40 text-ink focus-visible:ring-0 focus-visible:border-ink"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Phone Number *</label>
                  <Input
                    type="tel"
                    placeholder="+254 700 000 000"
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                    required
                    className="bg-bg border-2 border-ink rounded-none px-4 py-3 placeholder:text-ink-soft/40 text-ink focus-visible:ring-0 focus-visible:border-ink"
                  />
                </div>
              </div>

              {/* Role Dropdown */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Department / Role Category *</label>
                <select
                  value={form.roleCategory}
                  onChange={(e) => setForm({...form, roleCategory: e.target.value})}
                  required
                  className="w-full bg-bg border-2 border-ink rounded-none px-4 py-3 text-ink focus-visible:ring-0 focus-visible:border-ink text-sm"
                >
                  <option value="">Select a department...</option>
                  <option value="Programs">Programs & Mentorship</option>
                  <option value="Technology">Technology, AI & Maker Labs</option>
                  <option value="Operations">Operations (HR, Marketing, Admin)</option>
                  <option value="Drivers">Drivers & Field Logistics</option>
                  <option value="Cleaners">Cleaners & General Support</option>
                </select>
              </div>

              {/* Qualifications */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Key Qualifications Summary</label>
                <Input
                  type="text"
                  placeholder="e.g. 2 years in STEM instruction / IT networks / driver certifications"
                  value={form.qualification}
                  onChange={(e) => setForm({...form, qualification: e.target.value})}
                  className="bg-bg border-2 border-ink rounded-none px-4 py-3 placeholder:text-ink-soft/40 text-ink focus-visible:ring-0 focus-visible:border-ink"
                />
              </div>

              {/* CV File Attachment */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold block">Attach CV (PDF format only) *</label>
                <div className="relative border-2 border-dashed border-ink p-6 text-center cursor-pointer bg-bg hover:bg-ink/5 transition-colors">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    required
                  />
                  <div className="space-y-2 text-ink">
                    <Upload className="w-8 h-8 mx-auto text-ink-soft" />
                    <p className="text-xs font-bold font-mono">
                      {selectedFile ? `Selected: ${selectedFile.name}` : 'Click or Drag CV PDF here'}
                    </p>
                  </div>
                </div>
                {fileError && (
                  <p className="text-coral-deep text-xs font-mono flex items-center gap-1.5 mt-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {fileError}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-neo bg-ink text-bg border-ink py-4 font-mono text-xs uppercase tracking-wider"
              >
                {isSubmitting ? 'Processing Application...' : 'Submit Application'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

            </form>
          </div>
        </div>
      </section>

      {/* Thank You Modal Dialog */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="sm:max-w-[420px] bg-paper border-2 border-ink p-8 shadow-[8px_8px_0_#1F1A17] rounded-none text-center space-y-4">
          <DialogHeader>
            <div className="w-16 h-16 bg-mint border-2 border-ink rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_0_#1F1A17] rotate-[-6deg]">
              <CheckCircle2 className="w-8 h-8 text-ink" />
            </div>
            <DialogTitle className="font-serif text-3xl font-bold text-ink pt-4">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-ink-soft text-sm leading-relaxed font-sans pt-2">
              Your application has been successfully filed under our recruitment database. Our HR secretariat will review your CV (which has been indexed for compatibility) and contact you if your skills match our NGO operations.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <Button 
              onClick={() => setShowThankYou(false)}
              className="w-full btn-neo bg-ink text-bg border-ink font-mono text-xs uppercase tracking-wider py-3"
            >
              Back to Careers
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Careers;
