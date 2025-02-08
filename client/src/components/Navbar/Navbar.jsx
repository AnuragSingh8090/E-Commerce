import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    console.log(searchText);
  };

  return (
    <nav className="navbar flex items-center justify-between rounded-[3px] gap-[10px] px-[30px] py-[5px] bg-[white] border-b border-[#888888]">
      <div className="bars_container items-center justify-center hidden">
        <i className="fa-solid fa-bars text-[30px] text-[#333232] active:scale-[0.95]  cursor-pointer"></i>
      </div>

      <div className="navLogo w-[60px] flex-shrink-0">
        <NavLink to="/">
          <img src="/Logo.png" alt="Logo" />
        </NavLink>
      </div>

      <ul className="flex items-center justify-between gap-[22px]">
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink to="/electronics">Electronics</NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink to="/beauty">Beauty</NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink to="/clothing">Clothing</NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink to="/kids">Kids</NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink to="/home_appliances">Home & Appliances</NavLink>
        </li>
        <li className="text-[16px] font-[600] text-[#333232] py-[4px] hover:text-[#015169] hover:border-t-2 hover:border-[#015169] transition-colors duration-500 ease">
          <NavLink to="/contact">Contact Us</NavLink>
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
