import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSubmitContactForm } from '@/hooks/useQueries';

const WHATSAPP_NUMBER = '918959580121';
const PHONE_DISPLAY = '+91-8959580121';
const EMAIL = 'patidarji121@gmail.com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitContact = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) return;

    try {
      await submitContact.mutateAsync({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      });
      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch {
      // error handled via submitContact.isError
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone',
      value: PHONE_DISPLAY,
      href: `tel:+918959580121`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: PHONE_DISPLAY,
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India (Online Classes Available Pan India)',
      href: undefined,
    },
  ];

  return (
    <div className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-pale text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="section-heading">Contact Us</h2>
          <p className="section-subheading">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-5 border border-green-light shadow-xs flex items-start gap-4 hover:shadow-green-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl green-gradient flex items-center justify-center flex-shrink-0 shadow-green-sm">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary/60 uppercase tracking-wider mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-foreground font-medium text-sm hover:text-primary transition-colors"
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20NEET%20Botany%20mentoring.%20Please%20share%20more%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base px-6 py-4 rounded-2xl transition-colors shadow-md"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-green-light shadow-xs">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-pale flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-green-pale"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-serif font-bold text-xl text-primary mb-1">
                  Send a Message
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in the form below and we'll respond promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-foreground font-medium text-sm mb-1.5 block">
                        Full Name *
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border-green-light focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone" className="text-foreground font-medium text-sm mb-1.5 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="border-green-light focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-email" className="text-foreground font-medium text-sm mb-1.5 block">
                      Email Address *
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-green-light focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-foreground font-medium text-sm mb-1.5 block">
                      Message *
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us about your NEET preparation goals, questions about the program, or anything else..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                      className="border-green-light focus:border-primary resize-none"
                    />
                  </div>

                  {submitContact.isError && (
                    <p className="text-destructive text-sm bg-destructive/10 rounded-lg px-3 py-2">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={submitContact.isPending}
                    className="w-full green-gradient text-white border-0 font-bold text-base py-3 h-auto shadow-green-sm hover:opacity-90 transition-opacity"
                  >
                    {submitContact.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
