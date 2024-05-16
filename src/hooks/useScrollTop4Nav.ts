import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop4Nav = () => {
  const location = useLocation();
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return;
};
export default useScrollTop4Nav;
