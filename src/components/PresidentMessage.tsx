import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import mrtaziImage from '../assets/content/images/mrtazi.png';

const PresidentMessage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="president-message" id="president" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">MOT DU PRÉSIDENT</span>
          <h2 className="section-title">
            <span className="gradient-text">Ahmed Labzour Tazi</span>
          </h2>
          <p className="section-description">
            Président & Co-Fondateur Groupe Marnova Holding
          </p>
        </motion.div>

        <div className="president-grid">
          <motion.div
            className="president-image"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="image-container">
              <img
                src={mrtaziImage}
                alt="Ahmed Labzour Tazi - Président & Co-Fondateur Groupe Marnova Holding"
              />
              <div className="image-decoration"></div>
            </div>
          </motion.div>

          <motion.div
            className="president-content"
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <blockquote className="president-quote">
              "Groupe Marnova Holding est bien plus qu'une entreprise. C'est une vision que je porte depuis mon plus jeune âge, inspirée par mon écosystème, mes rencontres et les ambitions que j'ai vues naître autour de moi."
            </blockquote>

            <div className="president-text">
              <p>
                Après plus de cinq ans d'expérience dans des secteurs complémentaires, une conviction s'est imposée : en unissant nos différentes entités avec mes associés co-fondateurs du groupe Marnova, nous pouvions créer bien plus qu'un simple ensemble. Nous pouvions générer de véritables synergies, bâtir des économies d'échelle concrètes et, surtout, produire un impact direct et durable pour nos clients.
              </p>

              <p>
                Marnova est née de cette volonté de soutenir des entrepreneurs ambitieux. Chacun des dirigeants de nos filiales est co-fondateur de sa propre structure, incarnant cette énergie entrepreneuriale. Derrière chaque entreprise du groupe, il y a un jeune, un talent, un potentiel qu'il fallait révéler et accompagner.
              </p>

              <p>
                Avant d'être un projet économique, Marnova est un engagement. Un patriotisme actif, une foi profonde en notre Royaume, et la conviction que notre action dans des secteurs stratégiques peut créer une réelle valeur pour le Maroc et les Marocains.
              </p>

              <p>
                Aujourd'hui, Marnova, c'est cette "nova" — cette lumière nouvelle — qui veut faire bouger les lignes, structurer l'écosystème et placer l'innovation, l'excellence et l'impact au cœur de chaque projet.
              </p>

              <p className="president-signature">
                <strong>L'art de structurer l'avenir, projet après projet.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;