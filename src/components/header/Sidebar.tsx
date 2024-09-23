import { Link } from "react-router-dom";
import sidebarLinks from "../../data/sidebar-links";
import CollapsableTab from "./CollapsableTab";

const Sidebar = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`w-64 select-none flex h-screen flex-col justify-between border-e bg-white shadow-2xl z-[99] fixed top-0 right-0 translate-x-[-100%] duration-700 transition-transform`}
      style={{ transform: show ? "translateX(0)" : "translateX(100%)" }}
    >
      <div className="pt-20 pb-4 py-6">
        <a className="block w-fit mx-auto" href="/">
          <span className="sr-only">Home</span>
          <img src="/assets/images/logo.svg" alt="logo" />
        </a>

        <ul className="mt-6">
          {sidebarLinks.map((link) => {
            if (link.collapse)
              return (
                <CollapsableTab
                  key={link.name}
                  name={link.name}
                  icon={link.icon}
                  subs={link.subs}
                  sidebar
                />
              );

            if (!link.collapse)
              return (
                <li className="border-b" key={link.name}>
                  <a
                    href={link.href}
                    className="flex gap-2 items-center rounded-lg px-4 py-2 text-sm font-medium bg-grad text-gray-700"
                  >
                    <img
                      className="h-8 w-8"
                      src={link.icon}
                      alt={`${link.name} svg`}
                    />

                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                </li>
              );
          })}
        </ul>

        <div className="cursor-pointer w-3/4 mx-auto border bg-main text-center py-2 mt-20 rounded-lg text-white hover:bg-white hover:text-main">
          <Link to={"/register"}>تسجيل الدخول</Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
