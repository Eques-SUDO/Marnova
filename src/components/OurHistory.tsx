import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import sparkImage from '../assets/content/images/spark.png';
import ourtechImage from '../assets/content/images/ourtech.png';
import edentifyImage from '../assets/content/images/edintify.png';
import marnova4Image from '../assets/content/images/marnova4.png';

const historyData = [
  {
    year: '2022',
    title: 'Lancement de Spark',
    description: 'Lancement de Spark, première cellule dédiée au marketing global. Les bases sont posées : exigence stratégique, exécution créative, vision 360°.',
    image: sparkImage,
    color: '#DAA520'
  },
  {
    year: '2023',
    title: 'Création de OurTech et WeFeed',
    description: 'Création de OurTech (développement digital) et WeFeed (stratégie food & restauration). Le groupe amorce sa spécialisation sectorielle.',
    image: ourtechImage,
    color: '#B8860B'
  },
  {
    year: '2024',
    title: 'Naissance de nouvelles filiales',
    description: 'Naissance de E-Dentify (marketing santé), Realliq (valorisation immobilière) et RaZone (multidisciplinaire). L\'écosystème prend forme.',
    image: edentifyImage,
    color: '#F4E4A1'
  },
  {
    year: '2025',
    title: 'Structuration officielle',
    description: 'Structuration officielle du Groupe Marnova Holding. Lancement de Nova Print (production offline) et Nova Com (événementiel & médiatisation). Le modèle devient global et intégré.',
    image: marnova4Image,
    color: '#FFD700'
  }
];

const OurHistory = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [progressWidth, setProgressWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      // Animate progress line
      const timer = setTimeout(() => {
        setProgressWidth(100);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100
      },
    },
  };

  const yearVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      rotate: -5
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: 'easeOut'
      },
    },
  };

  return (
    <section className="our-history" id="histoire" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">NOTRE HISTOIRE</span>
          <h2 className="section-title">
            Quelques <span className="gradient-text">Dates</span>
          </h2>
          <p className="section-description">
            L'évolution de Groupe Marnova depuis ses débuts
          </p>
        </motion.div>

        <motion.div
          className="history-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {historyData.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="timeline-card"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="timeline-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <motion.div
                  className="timeline-content"
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="timeline-year"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: item.color,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item.year}
                  </motion.div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurHistory;