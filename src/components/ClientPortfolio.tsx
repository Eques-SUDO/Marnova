import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import safardreamLogo from '../assets/content/images/clients/SAFARDREAM.jpg';
import taxisahbiLogo from '../assets/content/images/clients/TAXI SAHBI LOGO FR.jpg';
import passionLogo from '../assets/content/images/clients/passion.jpg';
import kiaLogo from '../assets/content/images/clients/KIA.png';
import maisonLogo from '../assets/content/images/clients/maison.jpg';
import moussemLogo from '../assets/content/images/clients/moussem.png';
import marioLogo from '../assets/content/images/clients/33mario.png';
import tacosLogo from '../assets/content/images/clients/tacos.png';
import silaLogo from '../assets/content/images/clients/sila.png';
import omniLogo from '../assets/content/images/clients/omni.png';
import rentLogo from '../assets/content/images/clients/rent.png';
import k2aLogo from '../assets/content/images/clients/k2a.png';
import eleLogo from '../assets/content/images/clients/ele.png';
import petitLogo from '../assets/content/images/clients/petiiit.png';
import fishLogo from '../assets/content/images/clients/fish.png';

const clients = [
  { name: 'Safar Dream', logo: safardreamLogo },
  { name: 'Taxi Sahbi', logo: taxisahbiLogo },
  { name: 'Arts by Passion', logo: passionLogo },
  { name: 'KIA Maroc', logo: kiaLogo },
  { name: 'Maison Drague', logo: maisonLogo },
  { name: 'Moussem', logo: moussemLogo },
  { name: '33 Mario', logo: marioLogo },
  { name: 'Tacos', logo: tacosLogo },
  { name: 'Sila Interiors', logo: silaLogo },
  { name: 'Omnixis', logo: omniLogo },
  { name: 'Rent Good', logo: rentLogo },
  { name: 'K2A Immobilier', logo: k2aLogo },
  { name: 'ELE Properties', logo: eleLogo },
  { name: 'Le Petit Bouillon', logo: petitLogo },
  { name: 'Fish Market', logo: fishLogo }
];

const ClientPortfolio = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="client-portfolio" id="portefeuille" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">NOTRE PORTEFEUILLE CLIENT</span>
          <h2 className="section-title">
            Multi-sectoriel, <span className="gradient-text">ciblé et engagé</span>
          </h2>
          <div className="portfolio-description">
            <p>
              Notre portefeuille client s'étend sur les secteurs les plus dynamiques du marché
              marocain. Nous accompagnons des acteurs de l'automobile, des solutions
              technologiques, de l'immobilier, de l'éducation et de la santé — autant de
              domaines stratégiques où l'impact de la communication se traduit directement
              par de la performance.
            </p>
            <p>
              Nous intervenons aussi dans la restauration, en valorisant
              les enseignes modernes ou concepts émergents. Cette diversité sectorielle
              témoigne de notre capacité d'adaptation, mais surtout de la confiance que nous
              accordent aussi bien des entreprises marocaines que des sociétés étrangères
              installées au Maroc, qui comptent sur nous pour déployer des stratégies à forte
              valeur locale.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="clients-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="client-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="client-logo-image"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPortfolio;