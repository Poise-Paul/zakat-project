import React from "react";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[90%] sm:w-[25rem] p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-gray-800 text-center">
          Are you sure you want to Logout?
        </h2>
        <p className="text-gray-600 text-center">
          You will be signed out of your account.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
