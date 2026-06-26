import { motion } from "framer-motion";
import { FaBolt, FaCubes, FaJsSquare, FaPlug, FaReact } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import {
  fadeInLeft,
  fadeInUp,
  staggerContainer,
} from "../../animations/animationVariants";
import styles from "./About.module.css";

const coreSkills = [
  {
    icon: <FaReact />,
    name: "React.js & Next.js",
    desc: "2+ years building modern web applications",
  },
  {
    icon: <FaJsSquare />,
    name: "JavaScript & TypeScript",
    desc: "ES6+, TypeScript & modern frontend development",
  },
  {
    icon: <FaCubes />,
    name: "UI/UX Design",
    desc: "Figma, Adobe XD & pixel-perfect implementation",
  },
  {
    icon: <FaBolt />,
    name: "Performance",
    desc: "Responsive UI, Core Web Vitals & optimization",
  },
  {
    icon: <FaPlug />,
    name: "API Integration",
    desc: "REST APIs & state management",
  },
];
export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.aboutInner}>
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Interfaces</span> That
            Scale
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A frontend engineer passionate about crafting high-quality,
            performant user experiences.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.textSide}
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className={styles.paragraph}>
              I am a <span className={styles.highlight}>UI/UX Designer & Frontend Developer</span> with
              <span className={styles.highlight}> 7+ years of experience</span> in designing and
              developing responsive websites, landing pages, and enterprise applications.
              Over the last <span className={styles.highlight}>2+ years</span>, I have been
              building modern web applications using <span className={styles.highlight}>React.js, Next.js, TypeScript,</span> and modern frontend technologies.
            </p>
            <p className={styles.paragraph}>
              I specialize in converting <span className={styles.highlight}>Figma, Adobe XD, and PSD </span>
              designs into pixel-perfect, responsive interfaces. My focus is on reusable
              components, clean code, performance optimization, accessibility, and delivering
              seamless user experiences across devices.
            </p>

            <div className={styles.stats}>
              <motion.div
                className={styles.statCard}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.statNumber}>7+</div>
                <div className={styles.statLabel}>Years Overall</div>
              </motion.div>
              <motion.div
                className={styles.statCard}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.statNumber}>2+</div>
                <div className={styles.statLabel}>React & Next.js</div>
              </motion.div>
              <motion.div
                className={styles.statCard}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.statNumber}>60+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={styles.skillsSide}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className={styles.skillsSideTitle}>Core Competencies</p>
            {coreSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                variants={fadeInUp}
                custom={i}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.skillIcon}>{skill.icon}</div>
                <div className={styles.skillInfo}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillDesc}>{skill.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}