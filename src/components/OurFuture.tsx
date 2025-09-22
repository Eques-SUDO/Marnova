import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Building, Server, Users, Globe } from 'lucide-react';

const futureGoals = [
  {
    icon: <MapPin size={40} />,
    title: 'DÉPLOIEMENT TERRITORIAL ÉLARGI',
    description: 'ouverture de nouvelles antennes à Tanger, Marrakech et Agadir pour renforcer notre proximité régionale.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Building size={40} />,
    title: 'LANCEMENT DE NOUVELLES FILIALES SECTORIELLES',
    description: 'dans les domaines du tourisme, de l\'agritech et de l\'industrie créative.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Server size={40} />,
    title: 'PLATEFORME TECHNOLOGIQUE INTERNE',
    description: 'développement d\'un CRM propriétaire et d\'un outil d\'automatisation stratégique au service de nos clients.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Users size={40} />,
    title: 'PROGRAMME D\'INCUBATION',
    description: 'un accompagnement sur-mesure pour les jeunes entreprises marocaines ambitieuses.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Globe size={40} />,
    title: 'POSITIONNEMENT INTERNATIONAL',
    description: 'partenariats à l\'étude avec des acteurs d\'Afrique francophone et d\'Europe pour étendre notre modèle.',
    color: 'from-red-500 to-pink-500'
  }
];

const OurFuture = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="our-future" id="avenir" ref={ref}>
      <div className="container">
        <div className="future-grid">
          <motion.div
            className="future-content"
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <span className="section-label">NOTRE AVENIR</span>
            <h2 className="section-title">
              Notre <span className="gradient-text">Avenir</span>
            </h2>

            <div className="future-text">
              <p>
                Chez Marnova, chaque étape franchie prépare la suivante. Notre vision ne
                s'arrête pas à nos réalisations actuelles.
              </p>
              <p>
                Nous construisons un groupe capable d'anticiper les tendances, de répondre
                à l'évolution des marchés et de proposer des solutions toujours plus
                intégrées.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="future-goals"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {futureGoals.map((goal, index) => (
              <motion.div
                key={index}
                className="future-goal"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`goal-icon gradient-bg ${goal.color}`}>
                  {goal.icon}
                </div>
                <div className="goal-content">
                  <h3 className="goal-title">{goal.title}</h3>
                  <p className="goal-description">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="future-quote"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <blockquote>
            "Un modèle au service de la notoriété. Nous ne vendons pas des offres. Nous construisons une image
            forte, une structure stable, une réputation durable."
          </blockquote>
          <div className="quote-description">
            <p>
              Chez Marnova, notre présence parle avant même que nous intervenions : à travers nos prises de parole, notre réseau
              d'influence, la pertinence de nos contenus et notre exigence de collaboration. C'est cette cohérence stratégique qui nous rend
              naturellement attractifs auprès des projets à fort potentiel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurFuture;