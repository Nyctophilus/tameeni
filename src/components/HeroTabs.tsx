import { useLocation } from "react-router-dom";
import styles from "./hero.module.css";

const HeroTabs = ({ data }: any) => {
  const location = useLocation();
  return (
    <ul
      className={`${styles.insurance_tabs} mx-auto flex gap-2 justify-center`}
    >
      {data.map((link: any) => (
        <li key={link.name} className={`${styles.insurance_tabs_item}`}>
          <a
            className={`${styles.insurance_tabs_item_link} ${
              location.pathname === link.href
                ? styles.insurance_tabs_item_link__active
                : ""
            }`}
            href={link.href}
          >
            {link.icon && (
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
            )}
            <span>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
export default HeroTabs;
