import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

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

  // Fetch countries on mount
  useEffect(() => {
    fetch(
      "http://automatadev-001-site15.atempurl.com/api/v1/locations/countries",
    )
      .then((res) => res.json())
      .then((data) => setCountries(data.data.countries));
  }, []);

  // Handle country change
  const handleCountryChange = (countryName) => {
    setFormData({ ...formData, country: countryName, state: "", city: "" });
    fetch(
      `http://automatadev-001-site15.atempurl.com/api/v1/locations/countries/by-name/${countryName}/states`,
    )
      .then((res) => res.json())
      .then((data) => setStates(data.data.states));
  };

  // Handle state change
  const handleStateChange = (stateId, stateName) => {
    setFormData({ ...formData, state: stateName, city: "" });
    fetch(
      `http://automatadev-001-site15.atempurl.com/api/v1/locations/states/${stateId}/cities`,
    )
      .then((res) => res.json())
      .then((data) => setCities(data.data.cities));
  };

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

        {/* Editable fields */}
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="baseCurrency"
          value={formData.baseCurrency}
          onChange={handleChange}
          placeholder="Base Currency"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="Zip Code"
          className="border p-2 rounded"
        />

        {/* Country dropdown */}
        <select
          value={formData.country}
          onChange={(e) => handleCountryChange(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        {/* State dropdown */}
        <select
          value={formData.state}
          onChange={(e) => {
            const selected = states.find((s) => s.name === e.target.value);
            handleStateChange(selected.id, selected.name);
          }}
          className="border p-2 rounded"
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>

        {/* City dropdown */}
        <select
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          disabled={loading}
          className={`bg-green-600 ${
            loading ? "opacity-30" : ""
          } text-white py-2 rounded`}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>

        {/* Back Button */}
        <button
          onClick={() => navigate("/quickCalc")}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded mt-2"
        >
          ← Back to Calculation
        </button>

        {message && <p className="text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default Profile;
