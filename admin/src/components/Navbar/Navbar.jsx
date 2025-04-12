import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  FiHome,
  FiShoppingBag,
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiFileText,
  FiLogOut,
  FiXCircle,
  FiAlignJustify,
} from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const navItems = [
    { name: "Dashboard", icon: <FiHome />, path: "/" },
    { name: "Products", icon: <FiShoppingBag />, path: "/products" },
    { name: "Orders", icon: <FiFileText />, path: "/orders" },
    { name: "Customers", icon: <FiUsers />, path: "/customers" },
    { name: "Analytics", icon: <FiBarChart2 />, path: "/analytics" },
    { name: "Settings", icon: <FiSettings />, path: "/settings" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div
      ref={navbarRef}
      className={`bg-[#262d35] w-[55%] transform  ${
        isOpen ? "translate-x-0" : "translate-x-[-100%]"
      } navBar fixed  h-screen transition-all z-[999] duration-300 left-0 top-0 shrink-0  p-2 text-white flex flex-col gap-2 md:translate-x-0 md:duration-0 md:staticc sm:w-[40%] md:w-[26%] lg:w-[18%]`}
    >
      <div
        className="flex absolute right-[-46px] top-[13px] shadow-lg border-2 border-gray-700 items-center justify-center text-[22px] h-[35px] w-[35px] rounded-full bg-[#262d35] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiXCircle /> : <FiAlignJustify />}
      </div>

      <div className="logoContainer flex items-center flex-col border-b border-gray-700 py-3 justify-center gap-[4px]">
        <NavLink
          to="/"
          className="centerFlex gap-[5px]"
          onClick={() => setIsOpen(false)}
        >
          <div className="navLogo w-[36px] flex-shrink-0 lg:w-[44px]">
            <img src="/brand-logo.png" alt="Logo" />
          </div>
          <span
            className="text-[20px] lg:text-[23px]"
            style={{
              fontFamily: "var(--custom-font)",
              background: "linear-gradient(to right, #008ecc, #d26c1e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BazaarWale
          </span>
          <br />
        </NavLink>
        <span
          className="text-[14px] font-semibold"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 600,
            background: "linear-gradient(to right, #008ecc, #fa6c30)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Admin Pannel
        </span>
      </div>

      <div className="flex nav-items flex-col overflow-y-auto mt-1  flex-grow gap-1 lg:gap-2">
        {navItems.map((item, index) => (
          <NavLink
            to={item.path}
            onClick={() => setIsOpen(false)}
            key={index}
            className="flex w-full items-center gap-2 py-1.5 px-2 rounded-lg text-[14px] text-gray-400 hover:bg-[#0b0e10] hover:text-white "
            end={item.path === "/"}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="mt-auto  border-t border-gray-700 pt-2">
        <button className="flex w-full cursor-pointer items-center gap-2 py-1.5 px-2 rounded-lg transition-all text-[13px] text-gray-400 font-bold hover:bg-gray-900 hover:text-red-500 md:text-[15px]">
          <span className="text-base">
            <FiLogOut />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
