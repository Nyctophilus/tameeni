import heroLinks from "../data/hero-links";
import HeroTabs from "./HeroTabs";
import Tabbed from "./Home/Tabbed";
import styles from "./hero.module.css";

const HeroSection = () => {
  return (
    <section
      className={`py-10 w-full min-h-[90dvh] bg-secondary relative ${styles.hero}`}
    >
      <div className="container mx-auto relative z-50">
        <HeroTabs data={heroLinks} />
        <h1
          className={`${styles.bannerHeading} w-100 md:mt-5 lg:mt-5 mt-2.5 mx-auto text-gray-700`}
        >
          الموقع الأول لمقارنة أسعار التأمين في المملكة
        </h1>
        <p className={styles.innerText}>
          20+ شركة تأمين معتمدة - خيارات متعددة - وثيقة تأمين فورية
        </p>

        <div className="mt-4 mb-10 grid place-items-center">
          <img
            src="/assets/images/banner.webp"
            alt="hero banner"
            className="block lg:rounded-2xl lg:max-w-3xl"
          />
        </div>

        <Tabbed />
      </div>
    </section>
  );
};
export default HeroSection;
