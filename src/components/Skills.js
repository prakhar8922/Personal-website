import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaJs,
  FaAws,
  FaShieldAlt,
  FaRobot,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGooglecloud,
  SiTerraform,
  SiKubernetes,
  SiFlask,
  SiCplusplus,
  SiGoland,
  SiMicrosoftazure,
  SiMysql,
  // SiPinecone, // removed
  // SiChromadb, // removed
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: FaPython, level: 95, color: "#3776AB" },
        { name: "JavaScript", icon: FaJs, level: 90, color: "#F7DF1E" },
        { name: "C/C++", icon: SiCplusplus, level: 90, color: "#00599C" },
        { name: "Golang", icon: SiGoland, level: 80, color: "#00ADD8" },
        { name: "HTML5/CSS3", icon: FaHtml5, level: 95, color: "#E34F26" },
        { name: "SQL", icon: SiMysql, level: 85, color: "#4479A1" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: FaReact, level: 85, color: "#61DAFB" },
        { name: "Flask", icon: SiFlask, level: 85, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, level: 75, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 70, color: "#336791" },
        { name: "Pinecone", icon: FaRobot, level: 80, color: "#00B37A" },
        { name: "ChromaDB", icon: FaRobot, level: 80, color: "#FFB300" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: FaAws, level: 95, color: "#FF9900" },
        {
          name: "Google Cloud",
          icon: SiGooglecloud,
          level: 95,
          color: "#4285F4",
        },
        { name: "Azure", icon: SiMicrosoftazure, level: 90, color: "#0089D6" },
        { name: "Terraform", icon: SiTerraform, level: 95, color: "#7B42BC" },
        { name: "Docker", icon: FaDocker, level: 95, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, level: 90, color: "#326CE5" },
      ],
    },
    {
      title: "AI & Tools",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 95, color: "#F05032" },
        { name: "ChatGPT", icon: FaRobot, level: 95, color: "#10A37F" },
        { name: "Gemini", icon: FaRobot, level: 95, color: "#5C6BC0" },
        { name: "Llama", icon: FaRobot, level: 95, color: "#FF7043" },
        { name: "Grok", icon: FaRobot, level: 95, color: "#FFD600" },
        {
          name: "Security Tools",
          icon: FaShieldAlt,
          level: 95,
          color: "#FF6600",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and the technologies
            I work with.
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-level">
                        <div className="progress-bar">
                          <motion.div
                            className="progress-fill"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1,
                              delay:
                                categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            }}
                          />
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="summary-content">
            <h3>Why These Skills Matter</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <h4>🔧 Scalable Solutions</h4>
                <p>
                  Building cloud-agnostic, scalable systems that grow with your
                  business needs and handle increasing loads efficiently.
                </p>
              </div>
              <div className="summary-item">
                <h4>🛡️ Security First</h4>
                <p>
                  Implementing robust security measures including vulnerability
                  scanning, malware detection, and secure infrastructure
                  practices.
                </p>
              </div>
              <div className="summary-item">
                <h4>🚀 Automation & DevOps</h4>
                <p>
                  Streamlining deployments with Infrastructure as Code,
                  containerization, and CI/CD pipelines for faster, reliable
                  releases.
                </p>
              </div>
              <div className="summary-item">
                <h4>📊 Data-Driven</h4>
                <p>
                  Leveraging data structures, algorithms, and modern frameworks
                  to create efficient, maintainable solutions that deliver real
                  value.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
