import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { sucessToast } from "../../components/Toasters/Toasters";
const Register = () => {
  const [Register, setRegister] = useState({
    fullname: "",
    mobile: "",
    email: "",
    password: "",
    age: "",
    gender: "",
  });

  const navigate = useNavigate();
  function redirectLogin() {
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(Register);
    sucessToast("Account Created Successfully !!");
    redirectLogin();
  };
  return (
    <>
      <div className="flex items-center justify-center  bg-gray-100 p-[10px] py-[25px]">
        <div className="bg-white p-[20px] rounded-[12px] shadow-md w-[360px]">
          <h2 className="text-[24px] font-[600] text-gray-800 mb-[24px] text-center">
            Register
          </h2>
          <form onSubmit={handleLogin}>
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
                  setRegister({ ...Register, fullname: e.target.value })
                }
                value={Register.fullname}
                type="text"
                id="fullName"
                placeholder="Enter your fullname"
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
                  setRegister({ ...Register, mobile: e.target.value })
                }
                value={Register.mobile}
                type="number"
                id="number"
                placeholder="Enter your mobile number"
                className="w-full px-[12px] py-[5px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
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
                  setRegister({ ...Register, email: e.target.value })
                }
                value={Register.email}
                type="email"
                id="email"
                placeholder="Enter your email id"
                className="w-full px-[12px] py-[5px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Password */}
            <div className="mb-[10px]">
              <label
                htmlFor="password"
                className="block text-[15px] font-[500] text-gray-700 mb-[5px]"
              >
                Password
              </label>
              <input
                required
                onChange={(e) =>
                  setRegister({ ...Register, password: e.target.value })
                }
                value={Register.password}
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-[12px] py-[5px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Age & Gender */}
            <div className=" flex align-center justify-center gap-[20px]">
              {/* Age */}
              <div className="mb-[10px] w-full">
                <label
                  htmlFor="age"
                  className="block text-[15px] font-[500] text-gray-700 mb-[5px] "
                >
                  Age
                </label>
                <input
                  required
                  onChange={(e) =>
                    setRegister({ ...Register, age: e.target.value })
                  }
                  value={Register.age}
                  type="number"
                  id="age"
                  min="10"
                  max="100"
                  placeholder="Your age"
                  className="w-full px-[12px] py-[5px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {/* Gender */}
              <div className="mb-[10px] w-full">
                <label
                  htmlFor="gender"
                  className="block text-[15px] font-[500] text-gray-700 mb-[5px]"
                >
                  Gender
                </label>
                <select
                  required
                  onChange={(e) =>
                    setRegister({ ...Register, gender: e.target.value })
                  }
                  value={Register.gender}
                  id="gender"
                  className="w-full px-[12px] py-[8px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {/* Error Message */}

            <ToastContainer />

            <button className="w-full mt-[15px] bg-blue-600 text-white py-[5px] rounded-[8px] font-[500] text-[18px] hover:bg-blue-700 transition duration-200 cursor-pointer active:scale-[0.98]">
              Register
            </button>
          </form>

          <p className="text-[14px] text-gray-600 mt-[16px] text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>

          <div className="flex items-center my-[18px]">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="mx-[12px] text-[14px] text-gray-500">OR</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <button className="w-full flex items-center justify-center bg-white border border-gray-300 py-[9px] rounded-[8px] text-[14px] font-[500] text-gray-700 hover:bg-gray-50 transition duration-200 cursor-pointer active:scale-[0.98]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              className="w-[20px] h-[20px] mr-[12px]"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
