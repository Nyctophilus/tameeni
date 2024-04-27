import BottomWithImage from "../components/Home-UI/BottomWithImage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Impacts from "../components/Home-UI/Impacts";
import Choose from "../components/Home-UI/Choose";
import WhyUs from "../components/Home-UI/WhyUs";
import FeatureSection from "../components/Home-UI/FeatureSection";

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
