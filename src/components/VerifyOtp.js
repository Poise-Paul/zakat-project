import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [holdBtn, setHoldBtn] = useState(true);
  const navigate = useNavigate();

  const user = useSelector((state) => state.register.user);

  // Handle OTP input
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // only digits
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // auto focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Submit OTP
  const handleVerify = async () => {
    setLoading(true);
    const code = otp.join("");

    try {
      const response = await fetch(
        "http://automatadev-001-site16.atempurl.com/api/v1/authentication/verify-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            otp: code,
            verificationToken: user.verificationToken,
          }),
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        setMessage("✅ Email verified successfully!");
        setTimeout(() => navigate("/signIn"), 1500); // redirect to login
      } else {
        setMessage("❌ Verification failed: " + result.message);
      }
    } catch (err) {
      setMessage("❌ Error verifying OTP");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResend = async () => {
    console.log("User Data >>", user);

    try {
      const response = await fetch(
        "http://automatadev-001-site16.atempurl.com/api/v1/authentication/resend-verification-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.user.email,
          }),
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        setMessage("📩 Verification code resent to your email.");
      } else {
        setMessage("❌ Could not resend: " + result.message);
      }
    } catch (err) {
      setMessage("❌ Error resending OTP");
    }
  };

  useEffect(() => {
    const filled = otp.every((digit) => digit !== "");
    setHoldBtn(!filled);
  }, [otp]);

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[28rem] flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-green-700 text-center">
          Verify Your Email
        </h1>
        <p className="text-gray-600 text-center">
          Enter the 6‑digit code sent to your email
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, i)}
              className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          ))}
        </div>

        {/* Buttons */}
        <button
          onClick={handleVerify}
          disabled={loading || holdBtn}
          className={`w-full ${holdBtn || loading ? "opacity-30 cursor-not-allowed" : ""} bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold`}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        <button
          onClick={handleResend}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold"
        >
          Resend Code
        </button>

        {/* Message */}
        {message && (
          <p className="text-center text-sm font-medium text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyOTP;
