// src/Footer.js
import React from "react";

function Footer() {
  return (
    <div
      className="fixed bottom-0 left-0 w-full h-14 bg-gradient-to-r from-purple-600 to-purple-400 flex items-center justify-between px-6 shadow-lg"
      style={{ zIndex: 50 }}
    >
      {/* Navigation Icons */}
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center text-white cursor-pointer">
          <i className="material-icons text-2xl">home</i>
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center text-white cursor-pointer">
          <i className="material-icons text-2xl">folder</i>
          <span className="text-xs">Projects</span>
        </div>
        <div className="flex flex-col items-center text-white cursor-pointer">
          <i className="material-icons text-2xl">person</i>
          <span className="text-xs">Profile</span>
        </div>
      </div>

      {/* Contact Me Button */}
      <button
        className="bg-black text-white px-4 py-2 rounded-lg flex items-center shadow-md"
        onClick={() => window.location.href = "mailto:shreya.saxena@gmail.com"}
      >
        <i className="material-icons mr-2">email</i>
        Contact Me
      </button>
    </div>
  );
}

export default Footer;
