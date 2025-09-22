import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown } from 'lucide-react';
import marnova1 from '../assets/content/images/marnova1.png';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20, letterSpacing: '0.2em' },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: '0.05em',
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 100,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.8
      }
    }
  };

  return (
    <section className="hero" ref={ref}>
      <div className="hero-background">
        <motion.div
          className="hero-bg-image"
          style={{ backgroundImage: `url(${marnova1})` }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: inView ? 1 : 1.2, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="hero-overlay"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.span
          className="hero-label"
          variants={textVariants}
        >
          MULTISECTOR IMPACT FOR A MODERN MOROCCO
        </motion.span>

        <motion.h1
          className="hero-title"
          variants={textVariants}
        >
          Bâtir un écosystème
          <br />
          <span className="gradient-text">marocain exigeant</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          variants={textVariants}
        >
          Groupe Marnova Holding est une structure marocaine capable d'accompagner aussi bien les entreprises, les institutions que les porteurs de projet
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={textVariants}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Découvrir nos services
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Notre portefeuille
          </motion.button>
        </motion.div>
      </motion.div>


      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;