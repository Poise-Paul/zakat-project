import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [holdBtn, setHoldBtn] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRequest = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://automatadev-001-site15.atempurl.com/api/v1/authentication/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );
      const result = await response.json();
      if (result.status === "success") {
        toast.success(result.message);
        setMessage("📩 Reset email sent. Check your inbox.");
        setTimeout(() => navigate("/resetPassword"), 1500);
      } else {
        toast.error(result.message);
        setMessage("❌ " + result.message);
      }
    } catch {
      toast.error("❌ Error sending reset email");
      setMessage("❌ Error sending reset email");
    } finally {
      setHoldBtn(false);
    }
  };

  useEffect(() => {
    if (email) {
      setHoldBtn(false);
    } else {
      setHoldBtn(true);
    }
  }, [email]);

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md w-[25rem]">
        <h2 className="text-xl font-bold text-green-700">Forgot Password</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border p-2 rounded"
        />
        <button
          onClick={handleRequest}
          disabled={holdBtn || loading}
          className={`bg-green-600 ${holdBtn || loading ? "opacity-30" : ""} text-white py-2 rounded`}
        >
          {loading ? "Loading..." : "Send Reset Email"}
        </button>
        {message && <p className="text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
