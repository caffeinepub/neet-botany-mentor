import { Leaf, Heart, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Me', href: '#why' },
  { label: 'Course Structure', href: '#course' },
  { label: 'Demo Class', href: '#demo' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const PHONE_DISPLAY = '+91-8959580121';
const EMAIL = 'patidarji121@gmail.com';

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'neet-botany-mentor'
  );

  return (
    <footer className="bg-green-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-serif font-bold text-base leading-tight">NEET Botany Mentor</div>
                <div className="text-white/60 text-xs">Expert NCERT Guidance</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Helping NEET aspirants achieve their dream of becoming doctors through
              expert Botany mentoring and NCERT-based preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-green-300 flex-shrink-0" />
                <a href={`tel:+918959580121`} className="hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <MessageCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                <a
                  href="https://wa.me/918959580121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-green-300 flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-green-300 flex-shrink-0 mt-0.5" />
                India (Online Classes Available Pan India)
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} NEET Botany Mentor — Kuldeep Patidar. All rights reserved.
          </p>
          <p className="text-white/50 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-green-300 fill-green-300" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
