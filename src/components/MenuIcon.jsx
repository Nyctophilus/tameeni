import { useState } from "react";
import Sidebar from "./Sidebar";
import styles from "./menu-icon.module.css";

const MenuIcon = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <label
        htmlFor="burger"
        className={styles.burger}
        onClick={() => {
          if (isMenu) setIsMenu(false);
          else setIsMenu(true);
        }}
      >
        <div className={isMenu ? styles.active : undefined}></div>
        <span></span>
        <span></span>
        <span></span>
      </label>

      <Sidebar show={isMenu} />
    </>
  );
};
export default MenuIcon;
