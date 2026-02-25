import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is this course fully based on NCERT?',
    answer:
      'Yes, the entire course is strictly NCERT-based. We follow a line-by-line discussion approach for both Class 11 and Class 12 Botany NCERT textbooks. Every concept, diagram, and example from NCERT is covered thoroughly, as NEET questions are directly derived from NCERT content.',
  },
  {
    question: 'Are classes recorded?',
    answer:
      'Yes, all live classes are recorded and made available to enrolled students. You can revisit any session at your convenience, making it easy to revise topics or catch up on missed classes. Recordings are accessible for the duration of your enrollment.',
  },
  {
    question: 'How many students per batch?',
    answer:
      'We maintain small batch sizes to ensure personalized attention. Typically, batches have a maximum of [X] students. This allows the mentor to track each student\'s progress individually and address specific doubts effectively. One-to-one sessions are also available for completely personalized guidance.',
  },
  {
    question: 'Is there a demo class?',
    answer:
      'Yes! A free demo class is available for all prospective students. The demo session gives you a firsthand experience of our teaching methodology, NCERT-based approach, and interactive style. There is no payment required and no obligation to enroll after the demo.',
  },
  {
    question: 'What is the fee structure?',
    answer:
      'The fee structure varies based on the type of program selected (one-to-one mentoring vs. small batch classes) and the duration of enrollment. Please contact us directly via phone, WhatsApp, or the contact form for the latest fee details and available packages. Special discounts may be available for early enrollment.',
  },
  {
    question: 'Is doubt support available?',
    answer:
      'Yes, comprehensive doubt support is available via WhatsApp. Students can send their doubts anytime, and responses are provided promptly — typically within a few hours. Additionally, dedicated doubt-clearing sessions are scheduled regularly as part of the program.',
  },
];

export default function FAQ() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-pale text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Everything you need to know about the NEET Botany mentoring program.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white border border-green-light rounded-2xl px-6 shadow-xs data-[state=open]:shadow-green-md data-[state=open]:border-primary/30 transition-all duration-200"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-sm sm:text-base">
                <span className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-pale text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 pl-9">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <div className="mt-10 text-center bg-green-pale rounded-2xl p-6 border border-green-light">
          <p className="text-foreground font-semibold mb-2">Still have questions?</p>
          <p className="text-muted-foreground text-sm mb-4">
            Reach out directly and we'll be happy to help.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 72;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
