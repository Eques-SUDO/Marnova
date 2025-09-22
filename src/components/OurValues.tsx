import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Lightbulb, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: <Award size={40} />,
    number: '1',
    title: 'EXCELLENCE',
    description: 'Nous visons des résultats précis, durables et cohérents. Chaque action est pensée avec rigueur, chaque projet mérite notre plus haut niveau d\'exigence.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Lightbulb size={40} />,
    number: '2',
    title: 'CRÉATIVITÉ UTILE',
    description: 'Notre approche créative est toujours orientée vers l\'objectif. Nous valorisons les idées qui ont du sens, qui portent une stratégie et qui marquent les esprits.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Heart size={40} />,
    number: '3',
    title: 'RESPONSABILITÉ',
    description: 'Nous agissons avec éthique, transparence et respect. Nos décisions intègrent l\'impact humain, sociétal et environnemental de chaque projet.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Users size={40} />,
    number: '4',
    title: 'SYNERGIE',
    description: 'Chaque entité garde son autonomie, mais travaille en parfaite coordination avec les autres. L\'intelligence collective est notre moteur de performance.',
    color: 'from-purple-500 to-pink-500'
  }
];

const OurValues = () => {
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

  return (
    <section className="our-values" id="valeurs" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">NOS VALEURS</span>
          <h2 className="section-title">
            Les valeurs qui <span className="gradient-text">guident notre projet</span>
          </h2>
          <p className="section-description">
            Bâtir un écosystème marocain exigeant, agile et inspirant. Ensemble, faisons grandir l'intelligence collective.
          </p>
        </motion.div>

        <motion.div
          className="values-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-number">{value.number}</div>
              <div className={`value-icon gradient-bg ${value.color}`}>
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <motion.div
                className="value-hover-line"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="values-quote"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <blockquote>
            "Chez Marnova, nos valeurs ne sont pas de simples principes affichés. Elles forment la colonne vertébrale de notre fonctionnement quotidien et de chaque décision stratégique que nous prenons."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;