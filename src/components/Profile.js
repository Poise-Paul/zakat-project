import React, { useState, useEffect } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    baseCurrency: "",
    zipCode: "",
    state: "",
    country: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch current user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "http://automatadev-001-site15.atempurl.com/api/v1/authentication/get-current-user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          },
        );
        const result = await response.json();
        if (result.status === "success") {
          setFormData(result.data.user);
        } else {
          setMessage("❌ " + result.message);
        }
      } catch {
        setMessage("❌ Error fetching profile");
      }
    };
    fetchUser();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update profile
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://automatadev-001-site15.atempurl.com/api/v1/authentication/profile",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify(formData),
        },
      );
      const result = await response.json();
      if (result.status === "success") {
        setMessage("✅ Profile updated successfully!");
      } else {
        setMessage("❌ " + result.message);
      }
    } catch {
      setMessage("❌ Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md w-[30rem]">
        <h2 className="text-xl font-bold text-green-700">My Profile</h2>

        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            value={formData[key] || ""}
            onChange={handleChange}
            placeholder={key}
            className="border p-2 rounded"
          />
        ))}

        <button
          onClick={handleUpdate}
          disabled={loading}
          className={`bg-green-600 ${
            loading ? "opacity-30" : ""
          } text-white py-2 rounded`}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>

        {message && <p className="text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default Profile;
