import React from "react";
import Timer from "./Utils/Timer";
import departmentImage from "../assets/department.jpg";
import citlogo from "../assets/citlogo.jpg";
import staff1 from "../assets/staff1.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <br />
      <br />
      <br />

      <div className="relative min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center px-6">
        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between max-w-6xl mt-8">
          {/* Left - College Logo */}
          <div className="flex-shrink-0">
            <img
              src={citlogo}
              alt="College Logo"
              className="w-48 h-48 mb-4 rounded-full border-4 border-black shadow-lg"
            />
          </div>

          {/* Right - College Name & Department */}
          <div className="flex flex-col text-center md:text-left md:ml-6">
            <h1 className="text-6xl font-extrabold text-black">Coimbatore Institute of Technology</h1>
            <h2 className="text-3xl mt-2 font-bold text-gray-800">
              <span className="text-darkblue-900">Department of Electronics and Communication Engineering</span>
            </h2>
          </div>
        </div>

        {/* Symposium Banner & Animated Text */}
        <div className="w-full flex flex-col md:flex-row items-center max-w-6xl mt-10 gap-8">
          {/* Left - Banner (Larger) */}
          <div className="w-72 h-72">
            <img
              src={departmentImage}
              alt="Symposium Banner"
              className="w-full h-full object-cover rounded-lg shadow-lg border border-gray-300"
            />
          </div>

          {/* Right - Animated Text */}
          <motion.div
            className="text-2xl text-gray-700 font-semibold"
            animate={{ opacity: [0.5, 1], scale: [0.9, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            "Join us for an exciting journey of learning and discovery!"
          </motion.div>
        </div>

        {/* Association Teams Section */}
        <div className="w-full max-w-6xl mt-12">
          <h2 className="text-3xl font-bold text-black text-center mb-6">Association Teams</h2>

          <div className="z-10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg border border-gray-300 w-64"
              >
                <img
                  src={staff1}
                  alt="Association Logo"
                  className="w-28 h-28 rounded-full border-2 border-gray-500 mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">IETE Students Chapter</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Flagship Events Section */}
        <div className="w-full max-w-6xl mt-12">
          <h2 className="text-3xl font-bold text-black text-center mb-6">Flagship Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hackathon Event */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-900">Hackathon</h3>
              <p className="text-gray-700 mt-2">
                Compete with the best minds and solve real-world problems in our thrilling
                Hackathon!
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Register
              </button>
            </div>

            {/* Paper Presentation Event */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-900">Paper Presentation</h3>
              <p className="text-gray-700 mt-2">
                Present your research and innovative ideas to a panel of experts.
              </p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Register
              </button>
            </div>

            {/* Tech Talk Event */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-900">Tech Talk</h3>
              <p className="text-gray-700 mt-2">
                Gain insights from industry leaders in our exclusive Tech Talk sessions.
              </p>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="z-10 mt-10">
          <Timer />
        </div>
      </div>
    </>
  );
};

export default Home;
