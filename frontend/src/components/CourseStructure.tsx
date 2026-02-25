import { BookMarked, ClipboardCheck, TrendingUp, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: BookMarked,
    step: '01',
    title: 'Complete NEET Botany Syllabus Coverage',
    description:
      'Every chapter of NCERT Botany (Class 11 & 12) is covered systematically — from Plant Kingdom to Ecology — ensuring zero gaps in preparation.',
    highlight: 'Full Syllabus',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Weekly Tests',
    description:
      'Regular chapter-wise and cumulative tests every week to reinforce learning, track progress, and build exam temperament.',
    highlight: 'Every Week',
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Monthly Performance Report',
    description:
      'Detailed monthly reports analyzing strengths, weaknesses, and improvement areas to keep students and parents informed.',
    highlight: 'Monthly',
  },
  {
    icon: MessageSquare,
    step: '04',
    title: 'WhatsApp Doubt Support',
    description:
      'Instant doubt resolution via WhatsApp — ask questions anytime and get clear, concise answers to keep your preparation on track.',
    highlight: '24/7 Support',
  },
];

export default function CourseStructure() {
  return (
    <div className="py-20 bg-green-pale/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-green-light">
            <BookMarked className="w-4 h-4" />
            Program Structure
          </div>
          <h2 className="section-heading">Course Structure</h2>
          <p className="section-subheading">
            A structured, comprehensive approach to NEET Botany mastery.
          </p>
        </div>

        {/* Timeline-style layout */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-light to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, step, title, description, highlight }) => (
              <div key={step} className="relative flex flex-col items-center text-center group">
                {/* Step circle */}
                <div className="relative z-10 w-16 h-16 rounded-full green-gradient flex items-center justify-center shadow-green-md mb-5 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 border border-green-light shadow-xs w-full hover:shadow-green-md transition-shadow duration-200">
                  <div className="inline-block bg-green-pale text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {highlight}
                  </div>
                  <h3 className="font-serif font-bold text-foreground text-sm leading-snug mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
