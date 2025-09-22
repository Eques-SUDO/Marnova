import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import sparkLogo from '../assets/content/images/sparkk.jpg';
import edentifyLogo from '../assets/content/images/editifyyy.jpg';
import wefeedLogo from '../assets/content/images/wefeed.jpg';
import razoneLogo from '../assets/content/images/Razone.jpg';
import realliqLogo from '../assets/content/images/realliq.jpg';
import ourtechLogo from '../assets/content/images/ouurtech.jpg';
import novaprintLogo from '../assets/content/images/novprod.jpg';

const subsidiaries = [
  {
    name: 'SPARK MOROCCO',
    logo: sparkLogo,
    color: '#1e40af',
    description: 'Première brique du groupe, Spark marque le lancement de notre vision 360 en marketing, avec les premiers clients nationaux à fort impact.'
  },
  {
    name: 'E-DENTIFY',
    logo: edentifyLogo,
    color: '#374151',
    description: 'Lancement officiel d\'E-Dentify comme première agence spécialisée en marketing médical au Maroc, avec une charte éthique assumée.'
  },
  {
    name: 'WEFEED',
    logo: wefeedLogo,
    color: '#eab308',
    description: 'Avec WeFeed, conçue pour accompagner les restaurants, franchises, et concepts food dans leur croissance, avec une approche créative, sectorielle et orientée résultats.'
  },
  {
    name: 'RAZONE',
    logo: razoneLogo,
    color: '#dc2626',
    description: 'Razone impose sa signature artistique en créant une identité complète pour une marque iconique à forte dimension culturelle.'
  },
  {
    name: 'REALLIQ',
    logo: realliqLogo,
    color: '#d4b892',
    description: 'Realliq est notre filiale dédiée au secteur immobilier, BTP et locations meublées. Elle accompagne les promoteurs, agences, architectes et investisseurs dans la valorisation de leurs projets.'
  },
  {
    name: 'OURTECH',
    logo: ourtechLogo,
    color: '#059669',
    description: 'est la filiale tech du Groupe, spécialisée dans le développement informatique, les solutions digitales sur mesure et l\'ingénierie IT. Elle accompagne les entreprises dans leur transformation digitale.'
  },
  {
    name: 'NOVA PRINT',
    logo: novaprintLogo,
    color: '#7c3aed',
    description: 'est la filiale spécialisée en impression professionnelle et habillage visuel. Elle accompagne marques et entreprises dans la création de supports impactants.'
  }
];

const OurSubsidiaries = () => {
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
    <section className="our-subsidiaries" id="filiales" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">NOS FILIALES</span>
          <h2 className="section-title">
            Filiales <span className="gradient-text">Stratégiques</span>
          </h2>
          <p className="section-description">
            Un écosystème d'expertises complémentaires pour une réponse globale
          </p>
        </motion.div>

        <motion.div
          className="subsidiaries-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {subsidiaries.map((subsidiary, index) => (
            <motion.div
              key={index}
              className="subsidiary-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="subsidiary-logo">
                <img
                  src={subsidiary.logo}
                  alt={subsidiary.name}
                  className="subsidiary-logo-image"
                />
              </div>
              <div className="subsidiary-content">
                <h3 className="subsidiary-name">{subsidiary.name}</h3>
                <p className="subsidiary-description">{subsidiary.description}</p>
              </div>
              <motion.div
                className="subsidiary-hover-line"
                style={{ backgroundColor: subsidiary.color }}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurSubsidiaries;