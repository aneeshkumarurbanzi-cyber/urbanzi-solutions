import Navbar from "@/components/Navbar";
import HeroGlobeSection from "@/components/HeroGlobeSection";
import HeroSection from "@/components/HeroSection";
import StackedImagesSection from "@/components/StackedImagesSection";
import HeroCard from "@/components/HeroCard";
import ServicesGrid from "@/components/ServicesGrid";
import ProductsHero from "@/components/ProductsHero";
import ProductsSection from "@/components/ProductsSection";
import CaseStudies from "@/components/CaseStudies";
import TransformSection from "@/components/TransformSection";
import BlogSection from "@/components/BlogSection";
import RunningText from "@/components/RunningText";
import TestimonialSection from "@/components/TestimonialSection";

import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroGlobeSection />
      <HeroSection />
      <StackedImagesSection />
      <HeroCard />
      <ServicesGrid />
      <ProductsHero />
      <ProductsSection />
      <CaseStudies />
      <TransformSection />
      <BlogSection />
      <RunningText />
      <TestimonialSection />
    
      <Footer />
    </>
  );
}
