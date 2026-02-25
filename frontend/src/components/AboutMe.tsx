import { Target, GraduationCap, Star } from 'lucide-react';

export default function AboutMe() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-green-lg border-4 border-green-light">
                <img
                  src="/assets/generated/mentor-portrait.dim_400x400.png"
                  alt="NEET Botany Mentor Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-green-md px-4 py-3 border border-green-light">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <div>
                    <div className="text-xs text-muted-foreground">Teaching</div>
                    <div className="font-bold text-primary text-sm">5 Years Exp.</div>
                  </div>
                </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-green-pale border-2 border-green-light -z-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-pale text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <GraduationCap className="w-4 h-4" />
              About Your Mentor
            </div>
            <h2 className="section-heading text-left mb-4">
              Meet KULDEEP PATIDAR
            </h2>
            <p className="text-foreground/80 text-base leading-relaxed mb-6">
              I am <strong>KULDEEP PATIDAR</strong>, a B.Sc. and M.Sc. graduate in Botany from{' '}
              <strong>Banaras Hindu University (BHU)</strong> — one of the top universities in India
              — with <strong>5 years</strong> of teaching experience at{' '}
              <strong>ALLEN KOTA and NARAYANA INDORE</strong>. I specialize in NEET Biology
              preparation with a strong focus on NCERT-based conceptual clarity. I help students
              score high marks in Botany through structured guidance, regular testing, and personal
              mentoring.
            </p>

            {/* Mission */}
            <div className="bg-green-pale border-l-4 border-primary rounded-r-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-primary mb-1">Our Mission</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    To provide concept clarity, exam-oriented preparation, and personalized
                    mentoring for NEET aspirants — helping every student achieve their dream of
                    becoming a doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Qualifications */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'B.Sc. Botany', sub: 'BHU, Varanasi' },
                { label: 'M.Sc. Botany', sub: 'BHU, Varanasi' },
                { label: 'NEET Specialist', sub: 'Biology Expert' },
                { label: 'Pan India', sub: 'Online Classes' },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-secondary rounded-xl p-3 border border-green-light">
                  <div className="font-semibold text-primary text-sm">{label}</div>
                  <div className="text-muted-foreground text-xs">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
