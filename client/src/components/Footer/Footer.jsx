import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer bg-purple-900  w-full text-[white] p-[30px] flex flex-col items-center gap-[40px]">
      <section className="flex gap-10px items-center  justify-between w-[60%]">
        <div className=" w-max">
          <h2 className="font-bold ">Product</h2>
          <ul className=" text-gray-300 text-[14px] mt-2">
            <Link to="/">
              <li className="hover:text-white">Features</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Services</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Enterprise</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Pricing</li>
            </Link>
          </ul>
        </div>
        <div className=" w-max">
          <h2 className="font-bold ">Company</h2>
          <ul className=" text-gray-300 text-[14px] mt-2">
            <Link to="/">
              <li className="hover:text-white">Features</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Services</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Enterprise</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Pricing</li>
            </Link>
          </ul>
        </div>
        <div className=" w-max">
          <h2 className="font-bold ">Help Center</h2>
          <ul className=" text-gray-300 text-[14px] mt-2">
            <Link to="/">
              <li className="hover:text-white">Features</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Services</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Enterprise</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Pricing</li>
            </Link>
          </ul>
        </div>
        <div className=" w-max">
          <h2 className="font-bold ">Partners</h2>
          <ul className=" text-gray-300 text-[14px] mt-2">
            <Link to="/">
              <li className="hover:text-white">Features</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Services</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Enterprise</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">Pricing</li>
            </Link>
          </ul>
        </div>
      </section>

      <p className="text-gray-400 text-center">
        Copyright ©2025 All rights reserved | Block is made with by{" "}
        <b>Anurag Kumar Singh</b>
      </p>
    </div>
  );
};

export default Footer;
