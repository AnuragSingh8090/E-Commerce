import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { sucessToast } from "../Toasters/Toasters";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [showDrop, setShowDrop] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [cartItems, setCartItems] = useState(5);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const ulReffrence = useRef(null);
  const handleSearch = () => {
    console.log(searchText);
  };

  const handleLogout = () => {
    setLoginPopup(false);
    setShowDrop(false);
    sucessToast("Logout Successfull!!");
    navigate("/login");
  };
  function showAccountMenu() {
    setShowDrop(true);
  }
  function hideAccountMenu() {
    setShowDrop(false);
  }

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
    <nav className="navbar sticky z-99 top-0 left-0 flex items-center justify-between gap-[10px] px-[30px] py-[5px] bg-[white] shadow-md">
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
        className="flex text-[15px] shrink-0 font-[500] text-[#333232] items-center justify-between select-none gap-[22px]"
        ref={ulReffrence}
      >
        <div
          className="navBar absolute top-[15px] right-[15px] hidden "
          onClick={closeNavbar}
        >
          <i className="fa-solid fa-xmark text-[black] text-3xl  active:scale-[0.95]"></i>
        </div>
        <li className="py-[4px] hover:text-[var(--primary)] hover:border-t-2 hover:border-[var(--primary)]  ">
          <NavLink to="/" className="flex items-center justify-center">
            <i className="fa-solid fa-house ulIcons mr-[10px]"></i>
            Home
          </NavLink>
        </li>
        <li className="py-[4px] hover:text-[var(--primary)] hover:border-t-2 hover:border-[var(--primary)]">
          <NavLink
            to="/electronics"
            className="flex items-center justify-center"
          >
            <i className="fa-solid fa-mobile ulIcons mr-[10px]"></i>
            Electronics
          </NavLink>
        </li>
        <li className="py-[4px] hover:text-[var(--primary)] hover:border-t-2 hover:border-[var(--primary)] ">
          <NavLink to="/beauty" className="flex items-center justify-center">
            <i className="fa-solid fa-paintbrush ulIcons mr-[10px]"></i>
            Beauty
          </NavLink>
        </li>
        <li className="py-[4px] hover:text-[var(--primary)] hover:border-t-2 hover:border-[var(--primary)] ">
          <NavLink to="/clothing" className="flex items-center justify-center">
            <i className="fa-solid fa-shirt ulIcons mr-[10px]"></i>
            Clothing
          </NavLink>
        </li>
        <li className="py-[4px] hover:text-[var(--primary)] hover:border-t-2 hover:border-[var(--primary)] ">
          <NavLink to="/kids" className="flex items-center justify-center">
            <i className="fa-solid fa-children ulIcons mr-[10px]"></i>
            Kids
          </NavLink>
        </li>
        <li className="py-[4px] hover:text-[var(--primary)] hover:border-t-2 hover:border-[var(--primary)] ">
          <NavLink
            to="/home_appliances"
            className="flex items-center justify-center"
          >
            <i className="fa-solid fa-kitchen-set ulIcons mr-[10px]"></i>
            Home & Appliances
          </NavLink>
        </li>
        <li className="py-[4px] hover:text-[var(--primary)] hover:border-t-2 hover:border-[var(--primary)] ">
          <NavLink to="/contact" className="flex items-center justify-center">
            <i className="fa-solid fa-envelope ulIcons mr-[10px]"></i>
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div
        className="search_container text-[13px] flex items-center justify-center rounded-lg px-3 py-2 bg-[var(--primary-light)]  gap-[7px]  w-[30%]"
        title="Search"
      >
        <i
          className="fa-solid fa-magnifying-glass active:scale-[0.95] text-[var(--primary)] cursor-pointer"
          onClick={handleSearch}
        ></i>
        <input
          type="text"
          placeholder="Search Item"
          className="w-full"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
        />
      </div>

      <div className="userSection flex justify-center items-center gap-[30px] ">
        {/* <div className="theme_container active:scale-[0.95] text-[20px] cursor-pointer text-[#333232]">
          <i className="fa-solid fa-moon" title="Dark Mode"></i>
        </div> */}

        <div className="cart_container relative active:scale-[0.95] text-[20px] cursor-pointer text-[#333232]">
          <NavLink to="/cart">
            <div className="centerFlex gap-2">
              <div className="relative">
                <i
                  className="fa-solid text-[var(--primary)] text-[17px] fa-cart-shopping"
                  title="Cart"
                ></i>
                <span className="absolute top-0 left-[-50%] select-none centerFlex bg-[#d63909] text-white text-[11px] centerFlex  rounded-[50%] h-[18px] w-[18px]">
                  {cartItems}
                </span>
              </div>
              <span className="text-[15px] ">Cart</span>
            </div>
          </NavLink>
        </div>

        <div className="user_container relative  text-[17px]  text-[#333232]">
          <div
            className="centerFlex gap-2 cursor-pointer select-none"
            onClick={() => (showDrop ? hideAccountMenu() : showAccountMenu())}
          >
            <i
              className="fa-regular text-[var(--primary)]  fa-user active:scale-[0.95] cursor-pointer"
              title="Account"
            ></i>
            <span className="text-[15px] ">Log in</span>
          </div>
          {showDrop && isLoggedIn ? (
            <div className="dropContainer absolute top-[40px] right-[-5px]   bg-white px-[15px] py-[8px] rounded-[6px] boxShadow-light">
              <div className="flex w-max gap-[5px] flex-col items-start shrink-0 text-[15px] text-[#333232]">
                <NavLink to="/account">
                  <span
                    className="active:scale-[0.95] select-none cursor-pointer"
                    onClick={hideAccountMenu}
                  >
                    <i className="fa-regular fa-user mr-[6px]"></i> My Account
                  </span>
                </NavLink>

                <NavLink to="/orders">
                  <span
                    className="active:scale-[0.95] select-none cursor-pointer"
                    onClick={hideAccountMenu}
                  >
                    <i className="fa-solid fa-box mr-[6px]"></i> My Orders
                  </span>
                </NavLink>

                <NavLink to="/login">
                  <span
                    className="active:scale-[0.95] select-none cursor-pointer text-[#006100]"
                    onClick={hideAccountMenu}
                  >
                    <i className="fa-solid fa-right-to-bracket mr-[5px]"></i>{" "}
                    Login
                  </span>
                </NavLink>

                <span
                  className="active:scale-[0.95] select-none cursor-pointer text-[#ce0303]"
                  onClick={() => setLoginPopup(true)}
                >
                  <i className="fa-solid fa-right-from-bracket mr-[5px]"></i>{" "}
                  Log Out
                </span>

                {loginPopup ? (
                  <div className="logoutPopup z-[9999] fixed top-[0] left-[0] h-screen w-screen flex items-center justify-center  bg-[#00000093]">
                    <div className=" bg-white p-[10px] px-[20px] flex flex-col items-center justify-center gap-[20px] rounded-[10px] boxShadow-light">
                      <h2 className="text-center text-[18px]">
                        Do you want to log out?
                      </h2>
                      <div className="flex items-center justify-center gap-[20px] w-full ">
                        <button
                          onClick={handleLogout}
                          className="bg-red-600 py-[5px] px-[25px] cursor-pointer active:scale-[0.95] border-none rounded-[7px] text-white"
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setLoginPopup(false)}
                          className="bg-green-600 py-[5px] px-[25px] cursor-pointer active:scale-[0.95] border-none rounded-[7px] text-white"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
