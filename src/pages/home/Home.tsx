import Main from "@/components/Main";
import BottomWithImage from "@/components/Home/BottomWithImage";
import HeroSection from "@/components/HeroSection";
import Impacts from "@/components/Home/Impacts";
import Choose from "@/components/Home/Choose";
import WhyUs from "@/components/Home/WhyUs";
import FeatureSection from "@/components/Home/FeatureSection";

function Home() {
  return (
    <Main>
      <HeroSection />

      <FeatureSection />

      <WhyUs />

      <Choose />

      <Impacts />

      <BottomWithImage />
    </Main>
  );
}

export default Home;
