import React from "react";
import { useEffect } from "react";

// Sample images
import profileImage from "../assets/profile.jpg";
import gameStyleLogo from "../assets/surge-logo.jpg";

const Portfolio = () => {
  useEffect(() => {
    // Handle parallax effect
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((el) => {
        let speed = el.getAttribute("data-speed");
        let offset = window.pageYOffset * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-mono antialiased bg-black text-white">
      {/* Header Section with Parallax */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 text-center parallax" data-speed="0.3">
        <div className="relative z-10">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full mx-auto w-32 h-32 object-cover mb-4 shadow-lg border-4 border-white"
          />
          <h1 className="text-4xl font-extrabold tracking-widest text-center">
            Junnel Bande
          </h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-center">
            "Leveling up software quality, one test at a time"
          </p>
        </div>
      </header>

      {/* Main Content Section - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 py-16">
        {/* Left Column - About Me */}
        <section className="bg-black text-white p-8">
          <h2 className="text-3xl font-semibold text-white mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            I am a passionate QA Tester with a commitment to ensuring that software is both reliable and user-friendly. 
            With over 3 years of experience in manual and automated testing, I strive to make a positive impact in the 
            software development lifecycle, helping teams deliver high-quality digital experiences.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Objectives</h3>
          <p className="text-lg leading-relaxed">
            My goal is to continue learning and growing in the field of Quality Assurance, using both traditional and 
            automated testing to help ensure the success of my team’s projects. I thrive in fast-paced environments and 
            am always looking for ways to improve processes and enhance product quality.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">My Learning Journey</h3>
  <p className="text-lg leading-relaxed">
    I’m currently focused on upskilling in <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Ant Design (antd)</strong>. 
    These technologies are essential for building modern, responsive, and efficient web applications, and I’m excited to continue learning 
    and growing my skills in this area.
  </p>
        </section>

        {/* Right Column - Professional Experience */}
        <section className="bg-gray-800 p-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Professional Experience</h2>

          {/* Thurston Software Solutions */}
          <div className="mb-8 border-b border-white pb-8">
            <img src={gameStyleLogo} alt="Thurston Software Solutions" className="w-16 h-16 object-contain mb-4" />
            <h3 className="text-xl font-bold text-white">QA Tester | Thurston Software Solutions, Inc.</h3>
            <p className="text-sm text-gray-400 mb-2">May 2024 – December 2024</p>
            <ul className="list-disc list-inside text-white leading-relaxed">
              <li>Developed and executed test cases for insurance management software.</li>
              <li>Performed user interface testing and cross-browser compatibility tests.</li>
              <li>Worked closely with developers to troubleshoot and resolve defects.</li>
            </ul>
          </div>

          {/* Surge Mobile Access */}
          <div className="mb-8 border-b border-white pb-8">
            <img src={gameStyleLogo} alt="Surge Mobile Access" className="w-16 h-16 object-contain mb-4" />
            <h3 className="text-xl font-bold text-white">QA Tester | Surge Mobile Access</h3>
            <p className="text-sm text-gray-400 mb-2">November 2022 – February 2024</p>
            <ul className="list-disc list-inside text-white leading-relaxed">
              <li>Conducted testing of mobile apps for e-wallet platforms.</li>
              <li>Performed security and regression tests to ensure a seamless user experience.</li>
              <li>Utilized Postman and SQL queries for API testing and data validation.</li>
            </ul>
          </div>

          {/* Limitless Technology Solutions */}
          <div>
            <img src={gameStyleLogo} alt="Limitless Technology Solutions" className="w-16 h-16 object-contain mb-4" />
            <h3 className="text-xl font-bold text-white">QA Tester | Limitless Technology Solutions</h3>
            <p className="text-sm text-gray-400 mb-2">January 2021 – November 2022</p>
            <ul className="list-disc list-inside text-white leading-relaxed">
              <li>Ensured the quality of fintech applications, focusing on transaction security.</li>
              <li>Collaborated with the development team to improve application performance.</li>
              <li>Wrote and maintained test plans and test cases in Jira.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} QA Tester Portfolio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
