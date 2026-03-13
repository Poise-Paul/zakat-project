import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // Fetch current user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://automatadev-001-site15.atempurl.com/api/v1/authentication/get-current-user",
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
          setUser(result.data.user);
          setFormData(result.data.user);
        } else {
          setMessage("❌ " + result.message);
        }
      } catch {
        setMessage("❌ Error fetching profile");
      }
    };
    fetchUser();
  }, [loading]);

  // Fetch countries
  useEffect(() => {
    fetch(
      "https://automatadev-001-site15.atempurl.com/api/v1/locations/countries",
    )
      .then((res) => res.json())
      .then((data) => setCountries(data.data.countries));
  }, []);

  // Handle country change
  const handleCountryChange = (countryName) => {
    setFormData({ ...formData, country: countryName, state: "", city: "" });
    fetch(
      `https://automatadev-001-site15.atempurl.com/api/v1/locations/countries/by-name/${countryName}/states`,
    )
      .then((res) => res.json())
      .then((data) => setStates(data.data.states));
  };

  // Handle state change
  const handleStateChange = (stateId, stateName) => {
    setFormData({ ...formData, state: stateName, city: "" });
    fetch(
      `https://automatadev-001-site15.atempurl.com/api/v1/locations/states/${stateId}/cities`,
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
        "https://automatadev-001-site15.atempurl.com/api/v1/authentication/profile",
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
      console.log("Hello", result);

      if (result.status === "success") {
        setMessage("✅ Profile updated successfully!");
        setUser(result.data); // refresh displayed profile
        setShowModal(false);
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
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen bg-green-100">
        <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md w-[30rem]">
          <h2 className="text-xl font-bold text-green-700">My Profile</h2>

          {user ? (
            <div className="flex flex-col gap-2">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>First Name:</strong> {user.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {user.lastName}
              </p>
              <p>
                <strong>Address:</strong> {user.address}
              </p>
              <p>
                <strong>Currency:</strong> {user.baseCurrency}
              </p>
              <p>
                <strong>Zip Code:</strong> {user.zipCode}
              </p>
              <p>
                <strong>Country:</strong> {user.country}
              </p>
              <p>
                <strong>State:</strong> {user.state}
              </p>
              <p>
                <strong>City:</strong> {user.city}
              </p>
            </div>
          ) : (
            <p>Loading profile...</p>
          )}

          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 text-white py-2 rounded"
          >
            Update Profile
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded mt-2"
          >
            ← Back
          </button>

          {message && <p className="text-sm">{message}</p>}
        </div>

        {/* Update Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-[30rem] p-6 flex flex-col gap-4">
              <h2 className="text-lg font-bold text-green-700">
                Update Profile
              </h2>

              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="baseCurrency"
                value={formData.baseCurrency}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
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
                  const selected = states.find(
                    (s) => s.name === e.target.value,
                  );
                  if (selected) handleStateChange(selected.id, selected.name);
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
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="border p-2 rounded"
              >
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>

              {/* Modal Actions */}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  disabled={loading}
                  className={`px-4 py-2 bg-green-600 text-white rounded ${loading ? "opacity-30" : ""}`}
                >
                  {loading ? "Updating..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
