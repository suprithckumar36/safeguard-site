import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Products from "@/components/landing/Products";
import Experience from "@/components/landing/Experience";
import Comparison from "@/components/landing/Comparison";
import Trust from "@/components/landing/Trust";
import CTA from "@/components/landing/CTA";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <Experience />
        <Comparison />
        <Trust />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
