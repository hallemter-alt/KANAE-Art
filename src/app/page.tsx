import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BusinessSection from "@/components/BusinessSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BusinessSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
