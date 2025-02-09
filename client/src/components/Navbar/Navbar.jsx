import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const ulReffrence = useRef();
  const handleSearch = () => {
    console.log(searchText);
  };

  function openNavbar() {
    ulReffrence.current.style.display = "flex";
  }
  function closeNavbar() {
    ulReffrence.current.style.display = "none";
  }

  function handleResize() {
    if (window.innerWidth > 900) {
      if (ulReffrence.current.style.display == "none") {
        openNavbar();
      }
    } else {
      closeNavbar();
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar flex items-center justify-between gap-[10px] px-[30px] py-[5px] bg-[white] shadow-md">
      <div
        className="bars_container items-center justify-center hidden"
        onClick={openNavbar}
      >
        <i className="fa-solid fa-bars text-[30px] text-[#333232] active:scale-[0.95]  cursor-pointer"></i>
      </div>

      <div className="navLogo w-[60px] flex-shrink-0 ">
        <NavLink to="/">
          <img src="/Logo.png" alt="Logo" />
        </NavLink>
      </div>

      <ul
        className="flex items-center justify-between gap-[22px]"
        ref={ulReffrence}
      >
        <div
          className="navBar absolute top-[15px] right-[15px] hidden "
          onClick={closeNavbar}
        >
          <i className="fa-solid fa-xmark text-[black] text-3xl  active:scale-[0.95]"></i>
        </div>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease ">
          <NavLink to="/" className="flex items-center justify-center">
            <i className="fa-solid fa-house ulIcons mr-[10px]"></i>
            Home
          </NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink
            to="/electronics"
            className="flex items-center justify-center"
          >
            <i className="fa-solid fa-mobile ulIcons mr-[10px]"></i>
            Electronics
          </NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink to="/beauty" className="flex items-center justify-center">
            <i className="fa-solid fa-paintbrush ulIcons mr-[10px]"></i>
            Beauty
          </NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink to="/clothing" className="flex items-center justify-center">
            <i className="fa-solid fa-shirt ulIcons mr-[10px]"></i>
            Clothing
          </NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink to="/kids" className="flex items-center justify-center">
            <i className="fa-solid fa-children ulIcons mr-[10px]"></i>
            Kids
          </NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink
            to="/home_appliances"
            className="flex items-center justify-center"
          >
            <i className="fa-solid fa-kitchen-set ulIcons mr-[10px]"></i>
            Home & Appliances
          </NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink to="/contact" className="flex items-center justify-center">
            <i className="fa-solid fa-envelope ulIcons mr-[10px]"></i>
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div
        className="search_container flex items-center justify-center rounded-[8px] px-[8px] py-[3px] border-[2px] border-[#015169] gap-[7px]  w-[270px]"
        title="Search"
      >
        <input
          type="text"
          placeholder="Search Item"
          className="w-full"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
        />
        <i
          className="fa-solid fa-magnifying-glass active:scale-[0.95] text-[#015169] cursor-pointer"
          onClick={handleSearch}
        ></i>
      </div>
      <div className="userSection flex justify-center items-center gap-[30px] ">
        <div className="theme_container active:scale-[0.95] text-[20px] cursor-pointer text-[#333232]">
          <i className="fa-solid fa-moon" title="Dark Mode"></i>
        </div>

        <div className="cart_container active:scale-[0.95] text-[20px] cursor-pointer text-[#333232]">
          <NavLink to="/cart">
            <i className="fa-solid fa-cart-shopping" title="Cart"></i>
          </NavLink>
        </div>

        <div className="user_container active:scale-[0.95] text-[20px] cursor-pointer text-[#333232]">
          <NavLink to="/account">
            <i className="fa-solid fa-user" title="Account"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
