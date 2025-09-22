import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import marnovaLogo from '../assets/content/images/marnova.png';

const Footer = () => {
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
        delayChildren: 0.3,
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

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/marnova_groupe', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/groupe-marnova/', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'À Propos', href: '#about' },
    { name: 'Histoire', href: '#histoire' },
    { name: 'Nos Filiales', href: '#filiales' },
    { name: 'Contact', href: '#contact' },
  ];


  return (
    <footer className="footer" ref={ref}>
      <div className="footer-background">
        <div className="footer-overlay"></div>
      </div>

      <motion.div
        className="footer-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div className="footer-section" variants={itemVariants}>
              <div className="footer-logo">
                <img src={marnovaLogo} alt="Groupe Marnova Holding" className="footer-logo-image" />
              </div>
              <p className="footer-description">
                Une structure marocaine née d'un rêve simple mais ambitieux : créer un écosystème
                à la fois créatif, stratégique et humain, capable d'accompagner les entreprises,
                les institutions et les porteurs de projet.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h3 className="footer-title">Navigation</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="footer-link"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Google Maps */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h3 className="footer-title">Notre Localisation</h3>
              <div className="footer-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2621.8!2d-7.6337009!3d33.5905346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3f9dd71dea3%3A0xf4b70fe97b437795!2sGroupe%20Marnova%20Holding!5e0!3m2!1sen!2sma!4v1642000000000!5m2!1sen!2sma"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Groupe Marnova Holding Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h3 className="footer-title">Contact</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Casablanca, Maroc</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>contact@groupemarnova.ma</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+212 669 128 430</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="footer-bottom"
            variants={itemVariants}
          >
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2025 Groupe Marnova Holding. Tous droits réservés.
              </p>
              <div className="footer-bottom-links">
                <a href="#" className="footer-bottom-link">Politique de confidentialité</a>
                <a href="#" className="footer-bottom-link">Conditions d'utilisation</a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;