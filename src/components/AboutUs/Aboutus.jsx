import React from "react";
import { motion } from "framer-motion";
import NavBar from "../NavBar";
import Timer from "../Utils/Timer";
import logo from "../../assets/logo.jpg";
import departmentImage from "../../assets/department.jpg";
import collegeImage from "../../assets/college.jpg";
import EventCard from "../EventCard";
import img1 from "../../images/technicalevent.jpg"
import img2 from "../../images/workshop.jpeg"
import img3 from "../../images/guidelines.webp"
import "../../css/Aboutus.scss"; // Import the scoped SCSS file

const AboutUs = () => {
  const events = [
    {
      title: "Technical Events",
      description: "Designed to enhance problem-solving and technical skills, these events challenge students in circuit design, coding, and real-world engineering tasks.",
      icon: "fas fa-microchip",
      image: img1,
    },
    {
      title: "Workshops",
      description: "Hands-on sessions by industry experts offering insights into emerging technologies like IoT, AI, Embedded Systems, and Quantum Computing.",
      icon: "fas fa-tools",
      image: img2,
    },
    {
      title: "Guidelines",
      description: "Participants must register in advance and be punctual for all events. Professionalism and ethical conduct are expected throughout the symposium.",
      icon: "fas fa-clipboard-list",
      image: img3,
    },
  ];
  return (
    <>
      <Timer />
      <div className="about-us-container">
        {/* Particles Background */}
        <div id="particles-js"></div>

        {/* Symposium Section */}
        <motion.section
          className="symposium-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={logo}
            alt="Symposium Logo"
            whileHover={{ scale: 1.05 }}
          />
          <h1>Our Symposium - QUBITRON</h1>
          <p>
            <strong>QUBITRON</strong> is a National-level technical symposium organized by the Electronics and Communication Engineering (ECE) Department of Coimbatore Institute of Technology. Inspired by the fusion of Quantum Computing and Electronics, Qubitron serves as a dynamic platform for students to explore emerging technologies, exchange ideas, and enhance their technical expertise.
          </p>
        </motion.section>

        {/* Department Section */}
        <motion.section
          className="department-section"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={departmentImage}
            alt="Department"
            whileHover={{ scale: 1.05 }}
          />
          <h2>About Our Department</h2>
          <p>
            The Department of Electronics and Communication Engineering was started in the year 1968. Currently, the department offers undergraduate – B.E Electronics and Communication Engineering (Full time), post graduate – M.E Communication Engineering (Full Time and Part Time) and research (Full Time and Part Time) programmes.
          </p>
        </motion.section>

        {/* College Section */}
        <motion.section
          className="college-section"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={collegeImage}
            alt="College"
            whileHover={{ scale: 1.05 }}
          />
          <h2>Our College</h2>
          <p>
            The V. Rangasamy Naidu Educational Trust devoted to the cause of promoting technical and scientific literacy, established Coimbatore Institute of Technology (CIT) in Coimbatore, Tamil Nadu, South India in 1956.
          </p>
        </motion.section>

        {/* Events Section */}
          <motion.section
          className="events-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Our Events</h2>
          <p>
            QUBITRON offers a dynamic lineup of events tailored for technology enthusiasts and aspiring innovators.
          </p>
          <div className="event-cards">
            {events.map((event, index) => (
              <EventCard
                key={index}
                icon={event.icon}
                image={event.image}
                title={event.title}
                description={event.description}
              />
            ))}
          </div>
        </motion.section>

        {/* Map Dashboard */}
        <section className="map-dashboard">
          <h2>Our Location</h2>
          <div className="mapp-container flex relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.001368553433!2d77.0247057!3d11.0283259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858979f85136b%3A0xdd9ca28d3c37cf8a!2sCoimbatore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1708423456789"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
           />
</div>

        </section>

        {/* Floating Animation Text */}
        <motion.div
          className="floating-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          "Innovate. Inspire. Impact."
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;