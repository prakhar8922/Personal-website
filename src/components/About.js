import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "700+", label: "LeetCode Problems" },
    { number: "15+", label: "Technologies Mastered" },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better - my journey, passion, and what drives me to
            create amazing digital experiences.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-description">
              <p>
                I'm Prakhar Goel, a passionate and results-driven Software
                Engineer with a strong foundation in data structures,
                algorithms, and hands-on experience across cloud computing, web
                development, and DevOps. I specialize in building scalable,
                secure, and efficient systems using modern technologies like
                Python, JavaScript (React.js), Flask, Docker, and Terraform, and
                I'm well-versed in working with both AWS and GCP.
              </p>

              <p>
                Currently working in the cloud domain, I've built cloud-agnostic
                solutions, automated infrastructure with IaC, optimized
                container deployments, and contributed to improving security
                posture through vulnerability and malware scanning systems. My
                expertise spans languages like Python, JavaScript, C/C++,
                frameworks including Flask and React.js, and cloud & DevOps
                tools like AWS, GCP, Terraform, Docker, GitLab CI/CD, and
                Kubernetes.
              </p>

              <p>
                I'm committed to continuous learning, holding certifications
                from platforms like Goldman Sachs and Udemy, and consistently
                expanding my expertise in cloud security, automation, and
                machine learning. Outside work, I'm a fitness enthusiast and
                cricket lover with a background in team leadership and
                competitive sports, which shapes my collaborative and
                disciplined approach to work.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <h4>🔧 Core Skills</h4>
                <p>
                  Languages: Python, JavaScript, C/C++ | Frameworks: Flask,
                  React.js, Bootstrap | Cloud & DevOps: AWS, GCP, Terraform,
                  Docker, GitLab CI/CD, Kubernetes | Security: ClamAV, VPC
                  Access Control, Secrets Scanning
                </p>
              </div>

              <div className="highlight-item">
                <h4>💡 Specialization</h4>
                <p>
                  Building scalable, secure cloud-agnostic solutions with
                  automated infrastructure, optimized container deployments, and
                  enhanced security posture through vulnerability scanning
                  systems.
                </p>
              </div>

              <div className="highlight-item">
                <h4>🌐 Passion</h4>
                <p>
                  Using technology to solve real-world problems—whether
                  optimizing infrastructure, securing applications, or
                  delivering insights in domains like finance and investing.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="about-image">
              <div className="image-placeholder">
                <span>About Me Image</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>
            Interested in working together? Let's discuss how I can help bring
            your ideas to life!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
