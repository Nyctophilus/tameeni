import heroLinks from "../data/hero-links";
import Tabbed from "./Home-UI/Tabbed";
import styles from "./hero.module.css";
import { useLocation } from "react-router-dom";

const HeroSection = () => {
  const location = useLocation();

  return (
    <section
      className={`py-10 w-full min-h-[60dvh] bg-secondary relative ${styles.hero}`}
    >
      <div className="container mx-auto relative z-50">
        <ul
          className={`${styles.insurance_tabs} mx-auto flex gap-2 justify-center`}
        >
          {heroLinks.map((link) => (
            <li key={link.name} className={`${styles.insurance_tabs_item}`}>
              <a
                className={`${styles.insurance_tabs_item_link} ${
                  location.pathname === link.href
                    ? styles.insurance_tabs_item_link__active
                    : ""
                }`}
                href={link.href}
              >
                <img
                  src={
                    location.pathname === link.href
                      ? link.icon.active
                      : link.icon.inactive
                  }
                  alt={link.name}
                  title={link.name}
                  className="w-8 md:w-10 max-w-full"
                />
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <h1
          className={`${styles.bannerHeading} w-100 mt-0 md:mt-5 lg:mt-5 my-2.5 mx-auto`}
        >
          الموقع الأول لمقارنة أسعار التأمين في المملكة
        </h1>
        <p className={styles.innerText}>
          20+ شركة تأمين معتمدة - خيارات متعددة - وثيقة تأمين فورية
        </p>

        <Tabbed />
      </div>
    </section>
  );
};
export default HeroSection;
