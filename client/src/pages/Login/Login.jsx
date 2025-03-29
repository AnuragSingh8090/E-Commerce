import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sucessToast, errorToast } from "../../components/Toasters/Toasters";

const Login = () => {
  const [Login, setLogin] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = Login;
    console.log("Email : ", email, "Password : ", password);
    if (email === "admin@gmail.com" && password === "admin") {
      sucessToast("Login Successful !!");
      navigate("/");
    } else {
      errorToast("Invalid Email or Password !!");
      setLogin({ email: "", password: "" });
    }
  };
  return (
    <>
      <style jsx>{`
        @keyframes floating {
          0% { transform: translateY(0px) scale(1.05); }
          50% { transform: translateY(-15px) scale(1.05); }
          100% { transform: translateY(0px) scale(1.05); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
      `}</style>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-4 py-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row animate-[fadeIn_0.5s_ease-out]">
          
          {/* Image Section */}
          <div className="md:w-1/2 bg-gradient-to-tr from-blue-400 to-indigo-500 p-8 hidden md:flex flex-col justify-center items-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500 opacity-20 z-0"></div>
            <div className="w-full max-w-md z-10 transform transition-all duration-500 animate-[floating_6s_ease-in-out_infinite]">
              <img 
                src="/loginImage.png" 
                alt="Login" 
                className="w-full h-auto object-cover rounded-xl shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg";
                }}
              />
            </div>
            <div className="mt-8 text-center z-10">
              <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-blue-100">Log in to access your account and continue your shopping journey.</p>
            </div>
            
            {/* Animated shapes */}
            <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-blue-300 opacity-20 animate-pulse"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-indigo-300 opacity-20 animate-pulse"></div>
          </div>
          
          {/* Form Section */}
          <div className="md:w-1/2 p-8 md:p-10">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 relative inline-block">
                Login
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </h2>
              <p className="text-gray-600 text-sm">Please enter your credentials to continue</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="relative">
                <label
                  htmlFor="emailOrMobile"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <i className="fa-solid fa-envelope text-blue-500 mr-2"></i>
                  Email or Mobile <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  onChange={(e) => setLogin({ ...Login, email: e.target.value })}
                  value={Login.email}
                  type="text"
                  id="emailOrMobile"
                  placeholder="Enter your email or mobile"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <i className="fa-solid fa-lock text-blue-500 mr-2"></i>
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    required
                    onChange={(e) =>
                      setLogin({ ...Login, password: e.target.value })
                    }
                    value={Login.password}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex="-1"
                  >
                    {showPassword ? (
                      <i className="fa-solid fa-eye-slash"></i>
                    ) : (
                      <i className="fa-solid fa-eye"></i>
                    )}
                  </button>
                </div>
              </div>

              <button 
                disabled={!Login.email || !Login.password} 
                className={`w-full text-white py-2 rounded-lg font-medium text-sm transition duration-300 active:scale-[0.98] shadow-md relative overflow-hidden ${
                  Login.email && Login.password 
                    ? "bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 animate-[pulse_2s_infinite] cursor-pointer" 
                    : "bg-gray-400 opacity-70"
                }`}
              >
                {Login.email && Login.password && (
                  <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-x-full skew-x-[-20deg] animate-[shimmer_2.5s_infinite]"></span>
                )}
                <i className={`fa-solid fa-right-to-bracket mr-2 ${Login.email && Login.password ? "animate-[bounce_1s_ease_infinite]" : ""}`}></i>
                Sign In
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-5 text-center">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline font-medium transition-colors duration-300">
                Create an account
              </Link>
            </p>

            <div className="flex items-center my-6">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <span className="mx-4 text-sm text-gray-500">OR</span>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            <button className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-300 active:scale-[0.98] shadow-sm cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
                className="w-5 h-5 mr-3"
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
      </div>
    </>
  );
};

export default Login;
