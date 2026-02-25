import { CheckCircle2, Brain, UserCheck, BarChart2, Target } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Strong Command Over NCERT Botany',
    description:
      'Deep expertise in NCERT Botany curriculum ensures every concept is taught with precision and clarity, exactly as required for NEET.',
  },
  {
    icon: Brain,
    title: 'Focus on Conceptual Understanding',
    description:
      'Rather than rote learning, we build genuine understanding so students can tackle any question variation in the exam.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Attention',
    description:
      'Small batch sizes and one-to-one sessions ensure every student receives individual guidance tailored to their needs.',
  },
  {
    icon: BarChart2,
    title: 'Regular Performance Tracking',
    description:
      'Weekly tests and monthly performance reports keep students on track and help identify areas needing improvement.',
  },
  {
    icon: Target,
    title: 'Exam-Focused Preparation',
    description:
      'Every session is designed with the NEET exam in mind — from question patterns to time management strategies.',
  },
];

export default function WhyChooseMe() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-pale text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Our Advantage
          </div>
          <h2 className="section-heading">Why Choose Me?</h2>
          <p className="section-subheading">
            What sets this mentoring program apart from the rest.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={title}
              className={`relative rounded-2xl p-6 border transition-all duration-200 hover:shadow-green-md group ${
                idx === 0
                  ? 'bg-gradient-to-br from-green-deep to-green-mid text-white border-transparent md:col-span-2 lg:col-span-1'
                  : 'bg-white border-green-light hover:border-primary/30'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  idx === 0
                    ? 'bg-white/20'
                    : 'bg-green-pale group-hover:bg-primary group-hover:text-white transition-colors'
                }`}
              >
                <Icon className={`w-6 h-6 ${idx === 0 ? 'text-white' : 'text-primary group-hover:text-white'}`} />
              </div>
              <div
                className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                  idx === 0 ? 'text-white/60' : 'text-primary/60'
                }`}
              >
                Reason {String(idx + 1).padStart(2, '0')}
              </div>
              <h3
                className={`font-serif font-bold text-base mb-2 leading-snug ${
                  idx === 0 ? 'text-white' : 'text-foreground'
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  idx === 0 ? 'text-white/80' : 'text-muted-foreground'
                }`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
