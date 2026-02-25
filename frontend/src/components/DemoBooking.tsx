import { useState } from 'react';
import { CalendarDays, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useBookDemo } from '@/hooks/useQueries';

export default function DemoBooking() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const bookDemo = useBookDemo();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !preferredTime.trim()) return;

    try {
      await bookDemo.mutateAsync({ name: name.trim(), phone: phone.trim(), preferredTime: preferredTime.trim() });
      setSubmitted(true);
      setName('');
      setPhone('');
      setPreferredTime('');
    } catch {
      // error handled via bookDemo.isError
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-green-deep to-green-mid relative overflow-hidden">
      <div className="absolute inset-0 leaf-pattern" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <CalendarDays className="w-4 h-4" />
              100% Free — No Commitment
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Book Your Free Demo Class
            </h2>
            <p className="text-white/85 text-base leading-relaxed mb-8">
              Experience our teaching methodology firsthand before enrolling. Get a taste of
              NCERT-based conceptual teaching and see why students love our approach.
            </p>

            <ul className="space-y-3">
              {[
                'Live interactive session with the mentor',
                'NCERT concept explanation demo',
                'Q&A and doubt clearing',
                'Course overview and study plan',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-green-lg">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-pale flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary mb-2">
                  Demo Class Booked!
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Thank you! We'll contact you shortly to confirm your free demo class schedule.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-green-pale"
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Demo
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-serif font-bold text-xl text-primary mb-1">
                  Reserve Your Spot
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in your details and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="demo-name" className="text-foreground font-medium text-sm mb-1.5 block">
                      Full Name *
                    </Label>
                    <Input
                      id="demo-name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="border-green-light focus:border-primary focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="demo-phone" className="text-foreground font-medium text-sm mb-1.5 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="demo-phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="border-green-light focus:border-primary focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="demo-time" className="text-foreground font-medium text-sm mb-1.5 block">
                      Preferred Date & Time *
                    </Label>
                    <Input
                      id="demo-time"
                      type="datetime-local"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      required
                      className="border-green-light focus:border-primary focus:ring-primary/20"
                    />
                  </div>

                  {bookDemo.isError && (
                    <p className="text-destructive text-sm bg-destructive/10 rounded-lg px-3 py-2">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={bookDemo.isPending}
                    className="w-full green-gradient text-white border-0 font-bold text-base py-3 h-auto shadow-green-sm hover:opacity-90 transition-opacity"
                  >
                    {bookDemo.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      'Book Free Demo Class'
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    No payment required. 100% free demo session.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
