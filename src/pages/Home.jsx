import BottomWithImage from "../components/Home/BottomWithImage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Impacts from "../components/Home/Impacts";
import Choose from "../components/Home/Choose";
import WhyUs from "../components/Home/WhyUs";
import FeatureSection from "../components/Home/FeatureSection";

const Home = () => {
  return (
    <>
      <Header />

      <main className="min-h-[70dvh]">
        <HeroSection />

        <FeatureSection />

        <WhyUs />

        <Choose />

        <Impacts />

        <BottomWithImage />
      </main>

      <Footer />
    </>
  );
};
export default Home;
