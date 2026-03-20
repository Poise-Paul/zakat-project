import React, { useEffect, useState } from "react";
import logo from "../assets/zakat-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/registerSlice";
import toast, { Toaster } from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignIn = () => {
  const [holdBtn, setHoldBtn] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // https://automatadev-001-site15.atempurl.com/api/v1

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://automatadev-001-site16.atempurl.com/api/v1/authentication/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      const result = await response.json();
      if (result.status === "success") {
        toast.success(result.message);
        setMessage("✅ Login successful!");
        // store token if needed
        dispatch(updateUser(result.data));
        localStorage.setItem("authToken", result.data.token.accessToken);
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error(result.message);
        setMessage("❌ " + result.message);
      }
    } catch (err) {
      toast.error("❌ Error logging in");
      setMessage("❌ Error logging in");
    } finally {
      setLoading(false);
    }
  };

  const requiredFields = ["email", "password"];

  useEffect(() => {
    const allFilled = requiredFields.every(
      (key) => formData[key] && formData[key].trim() !== "",
    );
    setHoldBtn(!allFilled);
  }, [formData]);

  return (
    <div className="App bg-green-300/50 h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col gap-7 p-5 w-[27rem] h-[30rem] rounded-2xl">
        {/* Logo + sign holder */}
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          </div>
          <h1 className="text-2xl text-gray-600 font-semibold">Sign In</h1>
          <small className="text-gray-400">Enter your details to sign in</small>
        </div>
        {/* Inputs Holder */}
        <div className="flex flex-col gap-2">
          <div className="border-2 border-gray-200 p-3 flex rounded-xl">
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="border-2 border-gray-200 flex gap-1 items-center p-3 rounded-xl">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full focus:outline-none"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            {showPassword ? (
              <IoMdEye onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <IoMdEyeOff onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
        </div>
        {/* Agree Holder */}
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="focus:outline-none bg-green-500"
            />{" "}
            <small>
              I accept the{" "}
              <span className="text-green-700 underline">
                terms & condition
              </span>{" "}
              of Al-Fattah
            </small>
          </div>
          <div className="">
            <small className="">
              Don't Have An Account?{" "}
              <Link to="/SignUp">
                <span className="text-green-700 underline">Sign Up</span>
              </Link>
            </small>
          </div>
          <div className="flex my-2 justify-between items-center">
            <small className="">
              <Link to="/forgotPassword">
                <span className="text-green-700 underline">
                  Forgot Password
                </span>
              </Link>
            </small>
            <small className="">
              <Link to="/">
                <span className="text-green-700 underline">
                  Back to Home Page
                </span>
              </Link>
            </small>
          </div>
        </div>
        {/* SIgn Up Button */}
        <div>
          <button
            disabled={holdBtn || loading}
            onClick={handleLogin}
            className={`w-full ${holdBtn || loading ? "opacity-30" : ""} bg-gradient-to-r hover:bg-green-700 from-green-400 h-10 rounded-xl text-white font-semibold to-green-700`}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </div>

      {/* Toaster Popups */}
      <Toaster />
    </div>
  );
};

export default SignIn;
