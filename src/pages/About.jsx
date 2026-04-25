import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import "./About.css";

const AboutMe = () => {
  return (
    <div className="about-page">
      {/* --- About Me + Education Section --- */}
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginTop: 0,
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I'm <strong>Md Fardeen</strong> — a{" "}
          <strong>Software Engineer</strong> and{" "}
          <strong>Machine Learning enthusiast</strong> who loves turning ideas
          into intelligent systems. I believe that good software isn't just about 
          code, it's about creating seamless experiences for users.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          When I'm not coding, I'm exploring new tech trends or working on personal 
          projects to sharpen my skills. I am currently working as a Software Engineer, applying 
          my technical expertise to build scalable and innovative systems. My goal is to build solutions
          that not only perform — but also inspire.
        </p>

        <p>
            B.E Graduated in Artificial Intelligence & Data Science with hands-on 
            experience in Web Dev, ML & Data Science Projects. Proficient in Java, Python, 
            JavaScript, SQL, React. Currently applying my skills 
            professionally as a Software Engineer and contributing to
            impactful software and AI solutions.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              className="edu-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.E in Artificial Intelligence and Data Science
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>C.I.T. Channabasaveshwara Institute Of Technology</strong> — Tumkur,
                  Karnataka
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Graduated | GPA: 7.6
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2021 - 2025</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              className="edu-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>J.W.C. Jamshedpur Worker's College</strong> — Mango
                  , Jamshedpur
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Jharkhand Board | Percentage: 62.2%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2021</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              className="edu-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>S.A.H.S. Sardiha Adibasi High School</strong> — Sardiha,
                  Jharkhand
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Jharkhand Board | Percentage: 56.8%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2020</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
