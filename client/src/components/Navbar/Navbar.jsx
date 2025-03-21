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
    <nav className="navbar sticky z-99 top-0 left-0  flex flex-col items-center justify-between gap-[10px] px-[15px] py-[0px] bg-[white] shadow-md">
      <div className="w-full flex items-center mt-[5px] justify-between gap-[20px] relative">
        <div className="logoContainer centerFlex gap-[10px] absolute top-0 left-0 md:static">
          <div
            className="bars_container items-center justify-center text-[25px] text-[var(--primary)] active:scale-[0.95]  cursor-pointer md:hidden"
            onClick={openNavbar}
          >
            <i className="fa-solid fa-bars "></i>
          </div>
          <NavLink to="/" className="centerFlex gap-[10px]">
            <div className="navLogo w-[43px] flex-shrink-0 ">
              <img src="/brand-logo.png" alt="Logo" />
            </div>
            <span
              className="text-[22px] "
              style={{
                fontFamily: "var(--custom-font)",
                background: "linear-gradient(to right, #008ecc, #d26c1e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BazaarWale
            </span>
          </NavLink>
        </div>

        <div className="w-full flex flex-wrap-reverse items-center justify-end gap-[10px] my-[7px] md:flex-nowrap">
          <div className="w-full flex items-center  gap-[20px]">
            <div className="inputContainer flex items-center justify-center search_container w-full text-[13px]  rounded-lg px-3 py-2 bg-[var(--primary-light)]  gap-[7px]">
              <i
                className="fa-solid fa-magnifying-glass active:scale-[0.95] text-[var(--primary)] cursor-pointer"
                onClick={handleSearch}
              ></i>
              <input
                type="text"
                placeholder="Search eg. iphone 15, laptop, etc."
                className="w-full"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
              />
            </div>

            <div className="cart_container relative active:scale-[0.95] text-[20px] cursor-pointer text-[#333232]">
              <NavLink to="/cart">
                <div className="centerFlex gap-2">
                  <div className="relative">
                    <i
                      className="fa-solid text-[var(--primary)] text-[17px] fa-cart-shopping"
                      title="Cart"
                    ></i>
                    <span className="absolute top-0 right-[-30%] select-none centerFlex bg-[#d63909] text-white text-[11px] centerFlex  rounded-[50%] h-[14px] w-[14px]">
                      {cartItems}
                    </span>
                  </div>
                  <span className="text-[15px] ">Cart</span>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="userSection shrink-0 flex justify-center items-center gap-[30px] ">
            {/* <div className="theme_container active:scale-[0.95] text-[20px] cursor-pointer text-[#333232]">
            <i className="fa-solid fa-moon" title="Dark Mode"></i>
          </div> */}

            <div className="user_container relative  text-[17px]  text-[#333232]">
              <div
                className="centerFlex gap-2 cursor-pointer select-none"
                onClick={() =>
                  showDrop ? hideAccountMenu() : showAccountMenu()
                }
              >
                <i
                  className="fa-regular text-[var(--primary)]  fa-user active:scale-[0.95] cursor-pointer"
                  title="Account"
                ></i>
                <span className="text-[16px] ">Log in</span>
              </div>
              {showDrop && isLoggedIn ? (
                <div className="dropContainer absolute top-[40px] right-[-5px]   bg-white px-[15px] py-[8px] rounded-[6px] boxShadow-light">
                  <div className="flex w-max gap-[5px] flex-col items-start shrink-0 text-[15px] text-[#333232]">
                    <NavLink to="/account">
                      <span
                        className="active:scale-[0.95] select-none cursor-pointer"
                        onClick={hideAccountMenu}
                      >
                        <i className="fa-regular fa-user mr-[6px]"></i> My
                        Account
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
        </div>
      </div>

      <ul className="hidden  navItems w-full  py-[8px]  items-center  text-[14px] font-[500] text-[#4f4f4f]  select-none gap-[10px] border-t-[1px] border-[var(--border-light)] md:flex md:flex-wrap md:static">
        <div
          className="navBar absolute top-[15px] right-[15px] hidden "
          onClick={closeNavbar}
        >
          <i className="fa-solid fa-xmark text-[black] text-3xl  active:scale-[0.95]"></i>
        </div>

        <NavLink
          to="/"
          className="py-[3px] px-[10px] shrink-0 hover:text-[var(--primary)] hover:rounded-lg hover:bg-[var(--primary-light)]"
        >
          <li className="centerFlex gap-[7px]">
            <i className="fa-solid fa-house ulIcons "></i>
            Home
          </li>
        </NavLink>

        <NavLink
          to="/electronics"
          className="py-[3px] px-[10px] shrink-0 hover:text-[var(--primary)] hover:rounded-lg hover:bg-[var(--primary-light)]"
        >
          <li className="centerFlex gap-[7px]">
            <i class="fa-solid fa-mobile-screen-button ulIcons"></i>
            Electronics
          </li>
        </NavLink>

        <NavLink
          to="/clothing"
          className="py-[3px] px-[10px] shrink-0 hover:text-[var(--primary)] hover:rounded-lg hover:bg-[var(--primary-light)]"
        >
          <li className="centerFlex gap-[7px]">
            <i class="fa-solid fa-shirt ulIcons"></i>
            Clothing
          </li>
        </NavLink>

        <NavLink
          to="/kids"
          className="py-[3px] px-[10px] shrink-0 hover:text-[var(--primary)] hover:rounded-lg hover:bg-[var(--primary-light)]"
        >
          <li className="centerFlex gap-[7px]">
            <i class="fa-solid fa-children ulIcons"></i>
            Kids
          </li>
        </NavLink>

        <NavLink
          to="/beauty"
          className="py-[3px] px-[10px] shrink-0 hover:text-[var(--primary)] hover:rounded-lg hover:bg-[var(--primary-light)]"
        >
          <li className="centerFlex gap-[7px]">
            <i class="fa-solid fa-spa ulIcons"></i>
            Beauty
          </li>
        </NavLink>

        <NavLink
          to="/home_appliences"
          className="py-[3px] px-[10px] shrink-0 hover:text-[var(--primary)] hover:rounded-lg hover:bg-[var(--primary-light)]"
        >
          <li className="centerFlex gap-[7px]">
            <i className="fa-solid fa-plug ulIcons "></i>
            Home Appliences
          </li>
        </NavLink>

        <NavLink
          to="/kitchen"
          className="py-[3px] px-[10px] shrink-0 hover:text-[var(--primary)] hover:rounded-lg hover:bg-[var(--primary-light)]"
        >
          <li className="centerFlex gap-[7px]">
            <i className="fa-solid fa-kitchen-set ulIcons "></i>
            Kitchen
          </li>
        </NavLink>

        <NavLink
          to="/personal_care"
          className="py-[3px] px-[10px] shrink-0 hover:text-[var(--primary)] hover:rounded-lg hover:bg-[var(--primary-light)]"
        >
          <li className="centerFlex gap-[7px]">
            <i class="fa-solid fa-soap ulIcons"></i>
            Personal Care
          </li>
        </NavLink>

        <NavLink
          to="/support"
          className="py-[3px] px-[10px] shrink-0 hover:text-[var(--primary)] hover:rounded-lg hover:bg-[var(--primary-light)]"
        >
          <li className="centerFlex gap-[7px]">
            <i class="fa-solid fa-headset ulIcons"></i>
            Support
          </li>
        </NavLink>

        <NavLink
          to="/about_us"
          className="py-[3px] px-[10px] shrink-0 hover:text-[var(--primary)] hover:rounded-lg hover:bg-[var(--primary-light)]"
        >
          <li className="centerFlex gap-[7px]">
            <i className="fa-solid fa-building ulIcons "></i>
            About Us
          </li>
        </NavLink>
      </ul>

      <div className="hidden"></div>
    </nav>
  );
};

export default Navbar;
