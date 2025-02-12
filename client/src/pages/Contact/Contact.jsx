import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { sucessToast } from "../../components/Toasters/Toasters";
import "./Contact.css";
const Contact = () => {
  const [Contact, setContact] = useState({
    fullname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(Contact);
    sucessToast(
      `Thank You ${Contact.fullname} 👏, Your message sent Sucessfully !!`
    );
    setContact({
      fullname: "",
      mobile: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="flex items-center justify-around  bg-gray-100 p-[10px] py-[25px]">
        <div className="contact_container flex items-center justify-around gap-[50px] flex-wrap">
          <div className="h-[500px] image_container">
            <img src="/contactImage.png" alt="" className="h-full w-full" />
          </div>
          <div className="contactUs_container bg-white p-[20px] rounded-[12px] shadow-md w-[450px]">
            <h2 className="text-[24px] font-[600] text-gray-800 mb-[24px] text-center">
              Message Us
            </h2>
            <form onSubmit={handleLogin}>
              <div className="rowElement flex items-center justify-between gap-[20px] ">
                {/* Name */}
                <div className="mb-[10px]">
                  <label
                    htmlFor="fullName"
                    className="block text-[15px] font-[500] text-gray-700 mb-[5px]"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    onChange={(e) =>
                      setContact({ ...Contact, fullname: e.target.value })
                    }
                    value={Contact.fullname}
                    type="text"
                    id="fullName"
                    placeholder="Enter fullname"
                    className="w-full px-[12px] py-[5px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Mobile */}
                <div className="mb-[10px]">
                  <label
                    htmlFor="number"
                    className="block text-[15px] font-[500] text-gray-700 mb-[5px]"
                  >
                    Mobile Number
                  </label>
                  <input
                    required
                    onChange={(e) =>
                      setContact({ ...Contact, mobile: e.target.value })
                    }
                    value={Contact.mobile}
                    type="number"
                    id="number"
                    placeholder="Enter mobile "
                    className="w-full px-[12px] py-[5px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="mb-[10px]">
                <label
                  htmlFor="email"
                  className="block text-[15px] font-[500] text-gray-700 mb-[5px]"
                >
                  Email
                </label>
                <input
                  required
                  onChange={(e) =>
                    setContact({ ...Contact, email: e.target.value })
                  }
                  value={Contact.email}
                  type="email"
                  id="email"
                  placeholder="Enter your email id"
                  className="w-full px-[12px] py-[5px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-[10px]">
                <label
                  htmlFor="message"
                  className="block text-[14px] font-[500] text-gray-700 mb-[8px]"
                >
                  Message
                </label>
                <textarea
                  onChange={(e) =>
                    setContact({ ...Contact, message: e.target.value })
                  }
                  value={Contact.message}
                  required
                  id="message"
                  placeholder="Enter your message"
                  className="resize-none h-[150px] w-full px-[12px] py-[10px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <ToastContainer />

              <button className="w-full mt-[10px] bg-blue-600 text-white py-[5px] rounded-[8px] font-[500] text-[18px] hover:bg-blue-700 transition duration-200 cursor-pointer active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
