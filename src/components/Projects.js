import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink, FiEye } from "react-icons/fi";
import "./Projects.css";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Alan AI News Application",
      description:
        "Designed a front-end interface with React.js and JavaScript, integrating Alan AI for voice navigation with 95% command accuracy. Created a lightweight back-end service with Python to fetch multi-source news data, improving content delivery speed by 90%.",
      image: "/project1.jpg",
      technologies: ["React.js", "JavaScript", "Python", "Alan AI", "NLP"],
      github: "https://github.com/prakhar8922",
      live: "#",
      category: "ai",
    },
    {
      id: 2,
      title: "Social Blog Website",
      description:
        "Built a responsive front-end using HTML, CSS, and Bootstrap, boosting user engagement by 25% across devices. Engineered a full-stack solution with Flask and SQLite, optimizing database queries for 95% data consistency.",
      image: "/project2.jpg",
      technologies: ["HTML", "CSS", "Bootstrap", "Flask", "SQLite"],
      github: "https://github.com/prakhar8922",
      live: "#",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Cloud Security Scanner",
      description:
        "Built a Python-based Docker image scanning system with Flask server hosted on EC2, designed to receive scan payloads and trigger vulnerability and secret scans on container images in ECR/Artifact Registry.",
      image: "/project3.jpg",
      technologies: ["Python", "Flask", "Docker", "AWS", "EC2", "ECR"],
      github: "https://github.com/prakhar8922",
      live: "#",
      category: "cloud",
    },
    {
      id: 4,
      title: "Infrastructure as Code (Terraform)",
      description:
        "Used Terraform to provision infrastructure with startup scripts that auto-pull Docker images from internal Artifact Registry, execute scans, and upload results to secured Cloud Storage Buckets.",
      image: "/project4.jpg",
      technologies: ["Terraform", "AWS", "GCP", "Docker", "Cloud Storage"],
      github: "https://github.com/prakhar8922",
      live: "#",
      category: "cloud",
    },
    {
      id: 5,
      title: "Kubernetes Vulnerability Scanner",
      description:
        "Modified a popular open-source Kubernetes vulnerability scanning tool written in Go to extract container image layer metadata and detect embedded secrets, enhancing its security audit capabilities.",
      image: "/project5.jpg",
      technologies: ["Go", "Kubernetes", "Docker", "Security", "API"],
      github: "https://github.com/prakhar8922",
      live: "#",
      category: "cloud",
    },
    {
      id: 6,
      title: "GitLab CI/CD Pipeline",
      description:
        "Built a dynamic GitLab CI/CD pipeline for dependency automation and binary packaging to GCP bucket, reducing deployment time by 30%. Upgraded pipeline for multi-project compatibility with dynamic endpoints.",
      image: "/project6.jpg",
      technologies: ["GitLab CI/CD", "GCP", "Docker", "Automation", "DevOps"],
      github: "https://github.com/prakhar8922",
      live: "#",
      category: "cloud",
    },
    {
      id: 7,
      title: "End-to-end Medical Chatbot using Llama2",
      description:
        "A generative AI chatbot where users can upload a medical book and ask medical questions. The AI, powered by Llama2, answers queries based on the uploaded book, enabling context-aware medical Q&A.",
      image: "/project7.jpg",
      technologies: [
        "Llama2",
        "Generative AI",
        "Python",
        "Streamlit",
        "Langchain",
      ],
      github:
        "https://github.com/prakhar8922/End-to-end-Medical-Chatbot-using-Llama2-main",
      live: "#",
      category: "ai",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work, demonstrating my skills in full-stack
            development, frontend design, and innovative problem-solving.
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FiGithub />
                    View Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FiEye />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/prakhar8922"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FiGithub />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
