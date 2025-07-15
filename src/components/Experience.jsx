import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";
import "./Experience.css";

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      id: 1,
      title: "Associate, Cloud Security Analyst",
      company: "SecLogic",
      location: "Noida, Uttar Pradesh",
      period: "August 2024 - Present",
      description:
        "Working in cloud security domain, building cloud-agnostic solutions, automating infrastructure with IaC, optimizing container deployments, and contributing to improving security posture through vulnerability and malware scanning systems.",
      achievements: [
        "Built a Python-based Docker image scanning system with Flask server hosted on EC2, designed to receive scan payloads and trigger vulnerability and secret scans on container images in ECR/Artifact Registry",
        "Used Terraform to provision infrastructure with startup scripts that auto-pull Docker images from internal Artifact Registry, execute scans, and upload results to secured Cloud Storage Buckets",
        "Implemented VPC-level network controls to restrict external access, ensuring only internal organizational traffic could reach the Flask API endpoint",
        "Refactored codebase into a cloud-agnostic system supporting AWS and GCP using Python3, consolidating repositories and cutting maintenance overhead by 40%",
        "Enhanced security by integrating ClamAV for malware scanning, boosting detection rates by 65% and reducing false positives by 30%",
        "Modified a popular open-source Kubernetes vulnerability scanning tool written in Go to extract container image layer metadata and detect embedded secrets",
        "Developed a cloud-agnostic Python script leveraging Kubernetes API to fetch pod logs from the last N hours across dynamic namespaces in both AWS and GCP environments",
        "Built a dynamic GitLab CI/CD pipeline for dependency automation and binary packaging to GCP bucket, reducing deployment time by 30%",
      ],
      technologies: [
        "Python",
        "Flask",
        "Terraform",
        "AWS",
        "GCP",
        "Docker",
        "Kubernetes",
        "ClamAV",
        "GitLab CI/CD",
        "EC2",
        "ECR",
        "Cloud Storage",
      ],
      link: "#",
    },
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey in software development, showcasing growth,
            achievements, and continuous learning.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <FiCalendar />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <FiMapPin />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="company-info">
                  <h4 className="company-name">
                    {exp.company}
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      <FiExternalLink />
                    </a>
                  </h4>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies-used">
                  <h5>Technologies:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="cta-content">
            <h3>Ready to Work Together?</h3>
            <p>
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
