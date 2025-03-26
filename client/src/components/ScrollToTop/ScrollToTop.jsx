import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component smoothly scrolls to the top of the page whenever the route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null; 
};

export default ScrollToTop;
