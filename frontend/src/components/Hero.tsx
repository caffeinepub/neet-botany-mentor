import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-botany.dim_1440x600.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-deep/90 via-green-deep/80 to-green-mid/70" />
      {/* Leaf pattern overlay */}
      <div className="absolute inset-0 leaf-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">NEET 2026 Preparation Now Open</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            KULDEEP PATIDAR
            <span className="block text-green-200 text-3xl sm:text-4xl md:text-5xl mt-1">
              NEET Botany Mentor
            </span>
          </h1>

          <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            Expert NCERT-based Botany coaching for NEET aspirants. Personalized mentoring,
            structured preparation, and proven results — all from the comfort of your home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-white text-green-deep hover:bg-green-50 font-bold text-base shadow-green-lg border-0 group"
              onClick={() => scrollTo('#demo')}
            >
              Enroll Now for NEET 2026 Preparation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white hover:bg-white/25 hover:text-white hover:border-white font-semibold text-base backdrop-blur-sm"
              onClick={() => scrollTo('#contact')}
            >
              Limited Seats – Start Your Journey Today
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: BookOpen, label: 'NCERT-Based', sub: 'Complete Coverage' },
              { icon: Users, label: 'Small Batches', sub: 'Personal Attention' },
              { icon: Award, label: 'Result-Oriented', sub: 'Proven Methods' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{label}</div>
                  <div className="text-white/70 text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="oklch(0.99 0 0)" />
        </svg>
      </div>
    </div>
  );
}
