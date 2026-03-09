import ServiceHeroSection from "@/components/ServiceHeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ServicesStackSection from "@/components/ServicesStackSection";
import OurExpertiseSection from "@/components/OurExpertiseSection";
import OurProcessSection from "@/components/OurProcessSection";
import WhyWeAreBestSection from "@/components/WhyWeAreBestSection";
import FAQSection from "@/components/FAQSection";
import StillHaveQuestions from "@/components/StillHaveQuestions";
import Footer from "@/components/Footer";
export default function ServicesPage() {
  return (
    <>
      <ServiceHeroSection />
      <WhoWeAreSection />
      <ServicesStackSection />
      <OurExpertiseSection />
      <OurProcessSection />
      <WhyWeAreBestSection />
      <FAQSection />
      <StillHaveQuestions />
      <Footer />
      
    </>
  );
}