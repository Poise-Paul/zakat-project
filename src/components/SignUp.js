import React, { useEffect, useState } from "react";
import logo from "../assets/zakat-logo.png";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { updateUser } from "../redux/slices/registerSlice";

const SignUp = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [holdBtn, setHoldBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isMuslimChecked, setIsMuslimChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    baseCurrency: "",
    password: "",
    address: "",
    zipCode: "",
    state: "",
    city: "",
    country: "",
  });

  // Fetch Data
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://automatadev-001-site15.atempurl.com/api/v1/locations/countries",
    )
      .then((res) => res.json())
      .then((data) => setCountries(data.data.countries));
  }, []);

  const handleCountryChange = (countryName) => {
    setFormData({ ...formData, country: countryName });
    fetch(
      `https://automatadev-001-site15.atempurl.com/api/v1/locations/countries/by-name/${countryName}/states`,
    )
      .then((res) => res.json())
      .then((data) => setStates(data.data.states));
  };

  const handleStateChange = (stateId, stateName) => {
    setFormData({ ...formData, state: stateName });
    fetch(
      `https://automatadev-001-site15.atempurl.com/api/v1/locations/states/${stateId}/cities`,
    )
      .then((res) => res.json())
      .then((data) => setCities(data.data.cities));
  };

  const handleSubmit = async () => {
    if (!isMuslimChecked) {
      toast.error("Please confirm you are a Muslim to continue.");
      return; // Stops the function here
    }
    setLoading(true);
    const response = await fetch(
      "https://automatadev-001-site15.atempurl.com/api/v1/authentication/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      },
    );
    const result = await response.json();
    if (result.status === "success") {
      setLoading(false);
      console.log("Sign Up Result", result);
      dispatch(updateUser(result.data));
      localStorage.setItem("authToken", result.data.token.accessToken);
      toast.success(result.message);
      navigate("/verifyOtp");
    } else {
      setLoading(false);
      toast.error(result.message);
      if (result.message === "User already exists") {
        navigate("/signIn");
      }
    }
  };

  const requiredFields = [
    "address",
    "firstName",
    "lastName",
    "password",
    "state",
    "zipCode",
    "country",
    "email",
    "city",
    "baseCurrency",
  ];

  useEffect(() => {
    const allFieldsFilled = requiredFields.every(
      (key) => formData[key] && formData[key].toString().trim() !== "",
    );
    setHoldBtn(!(allFieldsFilled && isMuslimChecked));
  }, [formData, isMuslimChecked]); // Added isMuslimChecked to dependencies

  return (
    <div className="App bg-green-300/50 h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col gap-7 p-5 w-[50rem] h-[40rem] rounded-2xl">
        {/* Logo + sign holder */}
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          </div>
          <h1 className="text-2xl text-gray-600 font-semibold">Sign In</h1>
          <small className="text-gray-400">Enter your details to sign in</small>
        </div>
        {/* Inputs Holder */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {" "}
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                placeholder="First Name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                placeholder="Last Name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email Address"
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
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Base Currency (NGN)"
                value={formData.baseCurrency}
                onChange={(e) =>
                  setFormData({ ...formData, baseCurrency: e.target.value })
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="border-2 items-center border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full focus:outline-none"
                placeholder="Enter Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {showPassword ? (
                <IoMdEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500"
                />
              ) : (
                <IoMdEyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={(e) =>
                  setFormData({ ...formData, zipCode: e.target.value })
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <select
                className="w-full focus:outline-none"
                value={formData.country}
                onChange={(e) => handleCountryChange(e.target.value)}
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            {/* State */}
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <select
                className="w-full focus:outline-none"
                value={formData.state}
                onChange={(e) => {
                  const selected = states.find(
                    (s) => s.name === e.target.value,
                  );
                  handleStateChange(selected.id, selected.name);
                }}
              >
                <option value="">Select State</option>
                {states.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <select
                className="w-full focus:outline-none"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              >
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Agree Holder */}
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="focus:outline-none bg-green-500"
              />{" "}
              <small className="capitalize">
                i have asset's in different currencies
              </small>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="focus:outline-none bg-green-500"
              />{" "}
              <small className="capitalize">
                i accept the{" "}
                <span className="text-green-700">terms and condition</span> of
                Al-Fattah
              </small>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="focus:outline-none bg-green-500"
                checked={isMuslimChecked}
                onChange={(e) => setIsMuslimChecked(e.target.checked)}
              />{" "}
              <small className="capitalize">i am a muslim</small>
            </div>
            <small className="capitalize">
              have an account?{" "}
              <Link to="/signIn">
                <span className="text-green-700 underline">Sign In</span>
              </Link>
            </small>
          </div>
        </div>
        {/* SIgn Up Button */}
        <div>
          <button
            onClick={handleSubmit}
            disabled={holdBtn || loading}
            className={`w-full bg-gradient-to-r ${holdBtn || loading ? "opacity-30" : ""} hover:bg-green-700 from-green-400 h-10 rounded-xl text-white font-semibold to-green-700`}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </div>

      {/* Toaster */}
      <Toaster />
    </div>
  );
};

export default SignUp;
