import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Clock, Award, Lightbulb, Target, Users, Video } from 'lucide-react';

const services = [
  {
    icon: <Clock size={40} />,
    title: 'Stratégie & Conseil',
    description: 'Positionnement, plateforme de marque, business modeling, lancement, benchmarking, accompagnement dirigeants',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Award size={40} />,
    title: 'Branding & Identité Visuelle',
    description: 'Naming, logo, charte graphique, univers visuel, brandbook, habillage physique',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Lightbulb size={40} />,
    title: 'Marketing Digital',
    description: 'Social media, création de contenu, publicité en ligne, lead generation, CRM',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Target size={40} />,
    title: 'Marketing Terrain',
    description: 'Activations, street marketing et actions de proximité à fort impact',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Video size={40} />,
    title: 'Production Audiovisuelle',
    description: 'Tournages, shootings, montage, motion design, diffusion multicanal',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: <Users size={40} />,
    title: 'Print & Signalétique',
    description: 'Flyers, brochures, affiches, stands, papeterie, vitrines et tout support visuel',
    color: 'from-red-500 to-pink-500',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">DES SOLUTIONS SUR MESURE</span>
          <h2 className="section-title">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="section-description">
            Une approche 360° qui lie la stratégie à l'action, la vision à l'exécution, l'impact à la performance
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={300}
              >
                <motion.div
                  className="service-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`service-icon gradient-bg ${service.color}`}>
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <motion.div
                    className="service-hover-line"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;