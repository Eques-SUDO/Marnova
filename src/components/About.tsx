import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Coffee, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import marnova3Image from '../assets/content/images/marnova3.png';

const stats = [
  { icon: <Users size={40} />, value: 90, label: 'Clients Accompagnés', suffix: '+' },
  { icon: <Coffee size={40} />, value: 9, label: 'Filiales Intégrées', suffix: '' },
  { icon: <Award size={40} />, value: 28, label: 'Croissance Moyenne CA Client', suffix: '%' },
  { icon: <Zap size={40} />, value: 45, label: 'Collaborateurs et Talents', suffix: '+' },
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [inView, value]);

    return (
      <span className="stat-value">
        {count}{suffix}
      </span>
    );
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <span className="section-label">À PROPOS</span>
            <h2 className="section-title">
              Nous sommes <span className="gradient-text">Groupe Marnova</span>
            </h2>
            <p className="about-text">
              Groupe Marnova Holding est une structure marocaine née d'un rêve simple mais ambitieux :
              créer un écosystème à la fois créatif, stratégique et humain, capable d'accompagner aussi
              bien les entreprises, les institutions que les porteurs de projet.
            </p>
            <p className="about-text">
              Nous avons construit une approche 360° qui lie la stratégie à l'action, la vision à l'exécution,
              l'impact à la performance. Plus qu'une entreprise, Marnova est une plateforme d'intelligences
              collectives, au service du progrès, de l'innovation et de la culture.
            </p>

            <div className="about-features">
              <motion.div
                className="feature-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="feature-check">✓</span>
                <span>Excellence</span>
              </motion.div>
              <motion.div
                className="feature-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="feature-check">✓</span>
                <span>Créativité Utile</span>
              </motion.div>
              <motion.div
                className="feature-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="feature-check">✓</span>
                <span>Responsabilité</span>
              </motion.div>
              <motion.div
                className="feature-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="feature-check">✓</span>
                <span>Synergie</span>
              </motion.div>
            </div>

            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              En savoir plus
            </motion.button>
          </motion.div>

          <motion.div
            className="about-image"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="image-container">
              <img
                src={marnova3Image}
                alt="Groupe Marnova - Excellence et Innovation"
              />
              <div className="image-decoration"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;