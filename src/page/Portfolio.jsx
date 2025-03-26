import React from "react";
import { useEffect } from "react";

// Sample images
import profileImage from "../assets/profile.jpg";
import ThurstonLogo from "../assets/thurston-logo.png";
import SurgeLogo from "../assets/surge-logo.jpg";
import Airologo from "../assets/airo-logo.jpg";
import QMlogo from "../assets/QMDSI.jpg"
import Experience from "../components/Experience";



const Portfolio = () => {

  const experiences = [
    {
      logo: QMlogo,
      title: 'QA Tester | Quantum Metal Digitals Solutions Incorporated',
      duration: 'Dec 2024 – Present',
      skills: ['Developed and executed test cases for insurance management software.', 'Performed user interface testing and cross-browser compatibility tests.', 'Worked closely with developers to troubleshoot and resolve defects.'],
  
    },
    {
      logo: ThurstonLogo,
      title: 'QA Tester | Thurston Software Solutions, Inc.',
      duration: 'May 2024 – December 2024',
      skills: ['Developed and executed test cases for insurance management software.', 'Performed user interface testing and cross-browser compatibility tests.', 'Worked closely with developers to troubleshoot and resolve defects.'],
    },
    {
      logo: SurgeLogo,
      title: 'QA Tester | Surge Mobile Access',
      duration: 'November 2022 – February 2024',
      skills: ['Developed and executed test cases for insurance management software.', 'Performed user interface testing and cross-browser compatibility tests.', 'Worked closely with developers to troubleshoot and resolve defects.'],
  
    },
    {
      logo: Airologo,
      title: 'QA Tester | Limitless Technology Solutions',
      duration: 'January 2021 – November 2022',
      skills: ['Developed and executed test cases for insurance management software.', 'Performed user interface testing and cross-browser compatibility tests.', 'Worked closely with developers to troubleshoot and resolve defects.'],
    }
  ]

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
                    {
                        experiences.map(experience =><Experience logo = {experience.logo} title = {experience.title} duration={experience.duration} skills={experience.skills}/>)
                    }
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
