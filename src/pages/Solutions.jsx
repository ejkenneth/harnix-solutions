import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { solutions } from '../data/mockData'
import '../styles/Solutions.scss'

const Solutions = () => {
  // Variants réutilisables pour apparitions hero UI
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="solutions-page">
      <section className="solutions-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <h1>Nos Solutions SaaS</h1>
            <p className="hero-subtitle">
              8 solutions professionnelles pour automatiser et optimiser votre entreprise.
              Choisissez celle qui correspond à vos besoins.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="solutions-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                className="solution-card-large"
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
              >
                <div className="solution-header">
                  <div className="solution-icon-large">{solution.icon}</div>
                  <div className="solution-info">
                    <h3>{solution.name}</h3>
                    <p className="solution-tagline">{solution.tagline}</p>
                  </div>
                </div>

                <p className="solution-description">{solution.description}</p>

                <div className="solution-features-preview">
                  {solution.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="solution-footer">
                  <div className="solution-price-large">{solution.price}</div>
                  <Link 
                    to={`/solutions/${solution.slug}`}
                    className="btn btn-primary"
                  >
                    Découvrir
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Besoin d&apos;aide pour choisir ?</h2>
            <p>Notre équipe vous aide à trouver la solution parfaite pour votre entreprise</p>
            <Link to="/devis" className="btn btn-primary btn-lg">
              Demander un devis personnalisé
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
