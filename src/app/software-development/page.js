import SoftHero from "@/components/SoftHero";
import SoftWhoWeAre from "@/components/SoftWhoWeAre";
import SoftwareServicesSection from "@/components/SoftwareServicesSection";
import SoftProcess from "@/components/SoftProcess";
import SoftWhyBest from "@/components/SoftWhyBest";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SoftFaq from "@/components/SoftFaq";
import Footer from "@/components/Footer";
export default function About() {
 return (
    <> 
    < SoftHero />
    <SoftWhoWeAre />
    <SoftwareServicesSection/>
    <SoftProcess />
    <SoftWhyBest />
    <CaseStudiesSection />
    <SoftFaq/>
    <Footer />
    </>
 );
}