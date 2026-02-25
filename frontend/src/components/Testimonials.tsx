import { Star, Quote } from 'lucide-react';

const placeholderTestimonials = [
  {
    name: 'Priya S.',
    location: 'Delhi',
    rating: 5,
    text: 'Testimonial coming soon...',
    subject: 'NEET 2025 Aspirant',
  },
  {
    name: 'Rahul M.',
    location: 'Mumbai',
    rating: 5,
    text: 'Testimonial coming soon...',
    subject: 'NEET 2025 Aspirant',
  },
  {
    name: 'Ananya K.',
    location: 'Bangalore',
    rating: 5,
    text: 'Testimonial coming soon...',
    subject: 'NEET 2025 Aspirant',
  },
];

export default function Testimonials() {
  return (
    <div className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-pale text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            Student Reviews
          </div>
          <h2 className="section-heading">What Our Students Say</h2>
          <p className="section-subheading">
            Real feedback from students who have transformed their NEET preparation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {placeholderTestimonials.map(({ name, location, rating, text, subject }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-6 border border-green-light shadow-xs hover:shadow-green-md transition-shadow duration-200"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-green-pale flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                "{text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-green-light">
                <div className="w-10 h-10 rounded-full green-gradient flex items-center justify-center text-white font-bold text-sm">
                  {name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{name}</div>
                  <div className="text-xs text-muted-foreground">
                    {subject} · {location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-green-light rounded-full px-5 py-2.5 text-sm text-muted-foreground shadow-xs">
            <Star className="w-4 h-4 text-primary" />
            More reviews coming soon — be the first to share your experience!
          </div>
        </div>
      </div>
    </div>
  );
}
