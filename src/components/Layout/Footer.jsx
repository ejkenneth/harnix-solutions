import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@heroui/react'
import '../../styles/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
          >
            <h3>Harnix SAS</h3>
            <p>Solutions SaaS pour transformer votre entreprise.</p>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <h4>Solutions</h4>
            <ul>
              <motion.li whileHover={{ scale: 1.05 }}><Link to="/solutions">Toutes les solutions</Link></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><Link to="/bundles">Bundles & Packs</Link></motion.li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <h4>Contact</h4>
            <ul>
              <motion.li whileHover={{ scale: 1.05 }}><Button as={Link} to="/devis" variant="light" color="primary">Demander un devis</Button></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="mailto:contact@harnixsas.com">contact@harnixsas.com</a></motion.li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; 2024 Harnix SAS. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
