import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/Philosophy";
import { Features } from "@/components/Features";
import { Testimonial } from "@/components/Testimonial";
import { Pricing } from "@/components/Pricing";
import { Calendar } from "@/components/Calendar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonial />
      <Pricing />
      <Calendar />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;