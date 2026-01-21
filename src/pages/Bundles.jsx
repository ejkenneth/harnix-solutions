import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { bundles, getSolutionBySlug } from '../data/mockData'
import '../styles/Bundles.scss'

const Bundles = () => {
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
    <div className="bundles-page">
      {/* Hero Section */}
      <section className="bundles-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <h1>Bundles & Packs</h1>
            <p className="hero-subtitle">
              Économisez jusqu&apos;à 40% en combinant plusieurs solutions.
              Nos packs sont conçus pour répondre aux besoins spécifiques de votre secteur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bundles Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            className="bundles-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {bundles.map((bundle) => {
              const bundleSolutions = bundle.solutions.map(slug => 
                getSolutionBySlug(slug)
              ).filter(Boolean)

              return (
                <motion.div
                  key={bundle.id}
                  className="bundle-card-large"
                  variants={staggerItem}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="bundle-header">
                    <div className="bundle-badge-large">
                      Économie: {bundle.savings}
                    </div>
                    <div className="bundle-icon-large">{bundle.icon}</div>
                    <h2>{bundle.name}</h2>
                    <p className="bundle-description">{bundle.description}</p>
                  </div>

                  <div className="bundle-pricing">
                    <div className="price-container">
                      <span className="price-current-large">{bundle.price}</span>
                      <span className="price-original-large">{bundle.originalPrice}</span>
                    </div>
                  </div>

                  <div className="bundle-solutions">
                    <h3>Solutions incluses :</h3>
                    <div className="solutions-list">
                      {bundleSolutions.map((sol) => (
                        <div key={sol.id} className="solution-item">
                          <span className="solution-item-icon">{sol.icon}</span>
                          <div>
                            <div className="solution-item-name">{sol.name}</div>
                            <div className="solution-item-price">{sol.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bundle-features-list">
                    <h3>Avantages du pack :</h3>
                    <ul>
                      {bundle.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="check-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bundle-actions">
                    <Link to="/devis" className="btn btn-primary btn-lg">
                      Demander un devis
                    </Link>
                    <Link to="/solutions" className="btn btn-outline">
                      Voir les solutions
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            Pourquoi choisir un bundle ?
          </motion.h2>
          <motion.div
            className="benefits-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="benefit-icon">💰</div>
              <h3>Économies importantes</h3>
              <p>Jusqu&apos;à 40% de réduction par rapport à l&apos;achat séparé des solutions</p>
            </motion.div>
            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="benefit-icon">🔧</div>
              <h3>Intégration simplifiée</h3>
              <p>Solutions pré-configurées pour fonctionner ensemble dès le départ</p>
            </motion.div>
            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="benefit-icon">🎯</div>
              <h3>Support dédié</h3>
              <p>Équipe dédiée pour vous accompagner dans votre transformation digitale</p>
            </motion.div>
            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="benefit-icon">📈</div>
              <h3>ROI optimisé</h3>
              <p>Maximisez votre retour sur investissement avec des solutions complémentaires</p>
            </motion.div>
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
            <h2>Besoin d&apos;un pack sur mesure ?</h2>
            <p>Notre équipe peut créer un bundle personnalisé adapté à vos besoins spécifiques</p>
            <Link to="/devis" className="btn btn-primary btn-lg">
              Demander un devis personnalisé
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Bundles
