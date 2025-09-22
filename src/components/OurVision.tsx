import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const visionPoints = [
  'Exigence',
  'Créativité responsable',
  'Synergie collective',
  'Engagement durable',
  'Responsabilité'
];

const OurVision = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="our-vision" id="vision" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">NOTRE VISION</span>
          <h2 className="section-title">
            L'avenir en <span className="gradient-text">perspective</span>
          </h2>
        </motion.div>

        <div className="vision-grid">
          <motion.div
            className="vision-content"
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="vision-text">
              <p>
                Chez Marnova, nos valeurs ne sont pas de simples principes affichés. Elles forment la
                colonne vertébrale de notre fonctionnement quotidien et de chaque décision stratégique
                que nous prenons.
              </p>

              <p>
                Elles sont le socle sur lequel repose l'ensemble de notre activité : elles guident nos choix,
                orientent nos projets et inspirent la manière dont nous travaillons – entre nous, avec nos
                clients, et avec l'ensemble de nos partenaires.
              </p>

              <div className="vision-columns">
                <div className="vision-column">
                  <p>
                    Chaque valeur a été définie non pas comme un idéal théorique, mais comme
                    une exigence opérationnelle, ancrée dans le réel. Que ce soit dans notre manière de
                    structurer une stratégie, d'exécuter une mission, de gérer une équipe ou de
                    concevoir une identité de marque, nous nous y référons en permanence.
                  </p>
                </div>

                <div className="vision-column">
                  <p>
                    C'est ce socle de valeurs qui nous permet d'avancer de manière alignée, cohérente
                    et durable, dans un environnement en constante évolution. Il fait de Marnova un
                    groupe structuré mais agile, créatif mais rigoureux, performant mais profondément
                    humain.
                  </p>
                </div>
              </div>

              <div className="vision-pillars">
                <h4>Intégrité, innovation et engagement : les piliers de notre démarche.</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="vision-checklist"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="checklist-container">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="checklist-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle className="checklist-icon" size={24} />
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;