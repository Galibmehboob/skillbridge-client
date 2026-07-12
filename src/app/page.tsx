import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import FeaturedSkills from "@/features/home/featured-skills/FeaturedSkills";
import Categories from "@/features/home/hero/categories/Categories";
import WhySkillBridge from "@/features/home/why-skillbridge/WhySkillBridge";
import Hero from "@/features/home/hero/Hero";
import Statistics from "@/features/home/statistics/Statistics";
import Testimonials from "@/features/home/testimonials/Testimonials";
import CTA from "@/features/home/cta/CTA";


export default function Home() {
  return (
   <>
   
    <>
      <Navbar/>
      <main>
        <Hero/>
        <FeaturedSkills />
        <Categories/>
        <WhySkillBridge/>
        <Statistics/>
        <Testimonials/>
        <CTA/>
      </main>
      <Footer/>
    </>
   </>
  );
}
