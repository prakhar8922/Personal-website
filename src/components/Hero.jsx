import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import "./Hero.css";

const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/prakhar8922",
      icon: FiGithub,
      color: "#333",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/prakhargoelsde",
      icon: FiLinkedin,
      color: "#0077b5",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/prakhar_8922/",
      icon: SiLeetcode,
      color: "#ffa116",
    },
    {
      name: "Email",
      url: "mailto:prakhargoelcs@gmail.com",
      icon: FiMail,
      color: "#ea4335",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Prakhar Goel
            </motion.h1>

            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Software Engineer
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              A passionate and results-driven Software Engineer with expertise
              in cloud computing, web development, and DevOps. I specialize in
              building scalable, secure systems using Python, JavaScript,
              React.js, Flask, Docker, and Terraform across AWS and GCP.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={scrollToContact}
              >
                Get In Touch
              </a>
              <a
                href="/Prakhar Goel Resume.pdf"
                className="btn btn-secondary"
                download
              >
                <FiDownload />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="profile-image">
              <img
                src="/profile.jpg"
                alt="Prakhar Goel"
                className="actual-profile-image"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
            >
              <link.icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
