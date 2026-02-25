import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import CourseStructure from './components/CourseStructure';
import DemoBooking from './components/DemoBooking';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="why">
          <WhyChooseMe />
        </section>
        <section id="course">
          <CourseStructure />
        </section>
        <section id="demo">
          <DemoBooking />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
