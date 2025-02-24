import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaGamepad,
  FaTools,
  FaDownload,
  FaInfoCircle,
  FaCode,
  FaUsers,
} from "react-icons/fa";
import "../css/MobileNav.scss"; // Import the SCSS file for MobileNav

const MobileNav = ({ isOpen, onClose }) => {
  const [isNonTechDropdownOpen, setNonTechDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    const fileUrl = "/path/to/brochure.pdf"; // Update with your brochure path
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Qubitron_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mobile-nav-overlay fixed inset-0 bg-black bg-opacity-75 z-50">
      <div className="mobile-nav-container fixed top-0 right-0 h-full w-[70%]  bg-opacity-90 p-6 backdrop-blur-sm">
        {/* Close Button */}
        <button onClick={onClose} className="text-yellow-600 text-2xl">
          &times;
        </button>

        {/* Navigation Links */}
        <div className="mt-8 flex flex-col space-y-6">
          <Link to="/techincal-events" onClick={onClose} className="flex items-center text-white hover:text-yellow-500">
            <FaLaptopCode size={22} className="mr-2" /> Technical
          </Link>

          {/* Non-Technical Events Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setNonTechDropdownOpen(true)}
            onMouseLeave={() => setNonTechDropdownOpen(false)}
          >
            <div className="flex items-center text-white hover:text-yellow-500 cursor-pointer">
              <FaGamepad size={22} className="mr-2" /> Non-Technical
            </div>
            {isNonTechDropdownOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/offline-events"
                    onClick={onClose}
                    className="block text-white hover:text-yellow-500"
                  >
                    Offline Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/online-events"
                    onClick={onClose}
                    className="block text-white hover:text-yellow-500"
                  >
                    Online Events
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/workshops" onClick={onClose} className="flex items-center text-white hover:text-yellow-500">
            <FaTools size={22} className="mr-2" /> Workshop
          </Link>
          <Link to="/about-us" onClick={onClose} className="flex items-center text-white hover:text-yellow-500">
            <FaInfoCircle size={22} className="mr-2" /> About Us
          </Link>
          <Link to="/web-developers" onClick={onClose} className="flex items-center text-white hover:text-yellow-500">
            <FaCode size={22} className="mr-2" /> Web Developers
          </Link>
          <Link to="/committee" onClick={onClose} className="flex items-center text-white hover:text-yellow-500">
            <FaUsers size={22} className="mr-2" /> Committee
          </Link>
          <button
            onClick={handleDownload}
            className="flex items-center text-white hover:text-yellow-500"
          >
            <FaDownload size={22} className="mr-2" /> Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;


