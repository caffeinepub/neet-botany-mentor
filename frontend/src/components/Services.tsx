import {
  User,
  Users,
  BookOpen,
  FileQuestion,
  ClipboardList,
  MessageCircle,
  Lightbulb,
} from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'One-to-One Personal Online Mentoring',
    description:
      'Dedicated individual sessions tailored to your learning pace and specific weak areas.',
  },
  {
    icon: Users,
    title: 'Small Batch Live Classes',
    description:
      'Interactive live sessions in small groups ensuring every student gets adequate attention.',
  },
  {
    icon: BookOpen,
    title: 'NCERT Line-by-Line Discussion',
    description:
      'Thorough coverage of every line in NCERT Botany textbooks for complete conceptual clarity.',
  },
  {
    icon: FileQuestion,
    title: 'PYQ (Previous Year Questions) Analysis',
    description:
      'Systematic analysis of past NEET questions to identify patterns and boost exam readiness.',
  },
  {
    icon: ClipboardList,
    title: 'Chapter-wise Tests',
    description:
      'Regular chapter-specific tests to assess understanding and reinforce learning.',
  },
  {
    icon: MessageCircle,
    title: 'Doubt Clearing Sessions',
    description:
      'Dedicated sessions to resolve all your doubts and strengthen conceptual foundations.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy Planning for NEET',
    description:
      'Personalized exam strategy and time management guidance for optimal NEET performance.',
  },
];

export default function Services() {
  return (
    <div className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-pale text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            What We Offer
          </div>
          <h2 className="section-heading">Services Offered</h2>
          <p className="section-subheading">
            Comprehensive NEET Botany preparation services designed to maximize your score.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-green-light shadow-xs hover:shadow-green-md transition-shadow duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl green-gradient flex items-center justify-center mb-4 shadow-green-sm group-hover:scale-105 transition-transform duration-200">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs font-bold text-primary/60 uppercase tracking-wider mb-1">
                Service {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif font-bold text-foreground text-base mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-green-deep to-green-mid rounded-2xl p-6 flex flex-col justify-between text-white leaf-pattern">
            <div>
              <div className="text-white/70 text-xs font-bold uppercase tracking-wider mb-2">
                Get Started
              </div>
              <h3 className="font-serif font-bold text-xl mb-3 leading-snug">
                Ready to Begin Your NEET Journey?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Book a free demo class today and experience the difference.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.querySelector('#demo');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="mt-6 bg-white text-green-deep font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-green-50 transition-colors w-fit"
            >
              Book Free Demo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
