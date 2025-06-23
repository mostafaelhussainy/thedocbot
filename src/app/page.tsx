import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";
import ServicesSection2 from "@/components/sections/home/services-2";
import StatsSection from "@/components/sections/home/stats";
import Testimonials from "@/components/testimonials";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact";
import SEO from "./seo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEO />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection2 />
      <StatsSection />
      <Testimonials />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
