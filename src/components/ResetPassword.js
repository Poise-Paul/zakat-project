import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    resetToken: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [holdBtn, setHoldBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "http://automatadev-001-site15.atempurl.com/api/v1/authentication/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            resetToken: formData.resetToken,
            newPassword: formData.newPassword,
          }),
        },
      );
      const result = await response.json();
      if (result.status === "success") {
        setMessage("✅ Password reset successful!");
        toast.success(result.message);
        setTimeout(() => navigate("/signIn"), 1500);
      } else {
        toast.error(result.message);
        setMessage("❌ " + result.message);
      }
    } catch {
      toast.error("❌ Error resetting password");
      setMessage("❌ Error resetting password");
    } finally {
      setLoading(false);
    }
  };

  const requiredFields = ["resetToken", "newPassword", "confirmPassword"];

  useEffect(() => {
    const allFilled = requiredFields.every(
      (key) => formData[key] && formData[key].trim() !== "",
    );
    setHoldBtn(!allFilled);
  }, [formData]);

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md w-[25rem]">
        <h2 className="text-xl font-bold text-green-700">Reset Password</h2>
        <textarea
          name="resetToken"
          value={formData.resetToken}
          onChange={handleChange}
          placeholder="Paste your reset token here"
          className="border p-2 rounded h-20"
        />
        <div className="border p-2 rounded flex items-center">
          <input
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className="w-full focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="ml-2 text-sm text-green-600 font-semibold focus:outline-none"
          >
            {showNewPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="border p-2 rounded flex items-center">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="ml-2 text-sm text-green-600 font-semibold focus:outline-none"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          onClick={handleReset}
          disabled={holdBtn || loading}
          className={`bg-green-600 ${holdBtn || loading ? "opacity-30" : ""} text-white py-2 rounded`}
        >
          {loading ? "Loading..." : "Reset Password"}
        </button>
        {message && <p className="text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
