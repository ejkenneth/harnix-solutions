import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { solutions } from '../data/mockData'
import { staggerContainer, fadeInUp, sectionHeader, viewportOnce } from '../components/ui/animVariants'
import '../styles/Solutions.scss'

const Solutions = () => {
  // Variantes d'animation importées depuis components/ui/animVariants pour assurer la cohérence sur toutes les pages

  return (
    <div className="solutions-page">
      <section className="solutions-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            variants={sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
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
            viewport={viewportOnce}
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                className="solution-card-large"
                variants={fadeInUp}
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
