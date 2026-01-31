import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { solutions, getSolutionBySlug } from '../data/mockData'
import { staggerContainer, fadeInUp, sectionHeader, ctaVariant, viewportOnce, viewportSingleTime } from '../components/ui/animVariants'
import '../styles/SolutionDetail.scss'

const SolutionDetail = () => {
  // Animation variants are imported from components/ui/animVariants
  // Used for consistent animations across all pages and sections

  const { slug } = useParams()
  const navigate = useNavigate()
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    return (
      <div className="solution-detail">
        <div className="container">
          <div className="error-state">
            <h2>Solution non trouvée</h2>
            <p>La solution que vous recherchez n&apos;existe pas.</p>
            <Link to="/solutions" className="btn btn-primary">
              Voir toutes les solutions
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const crossSellSolutions = solutions.filter(sol => 
    solution.crossSell.includes(sol.id)
  )

  return (
    <div className="solution-detail">
      {/* Hero */}
      <section className="solution-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            variants={sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSingleTime}
          >
            <button onClick={() => navigate(-1)} className="back-button">
              ← Retour
            </button>
            <div className="solution-header">
              <div className="solution-icon-hero">{solution.icon}</div>
              <div>
                <h1>{solution.name}</h1>
                <p className="solution-tagline-hero">{solution.tagline}</p>
              </div>
            </div>
            <p className="solution-description-hero">{solution.description}</p>
            <div className="solution-price-hero">{solution.price}</div>
            <div className="hero-actions">
              <Link to="/devis" className="btn btn-primary btn-lg">
                Demander un devis
              </Link>
              <Link to="/bundles" className="btn btn-outline btn-lg">
                Voir les bundles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <motion.h2
            className="sell-title"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Fonctionnalités principales
          </motion.h2>
          <motion.div
            className="features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {solution.features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
              >
                <div className="feature-icon">✓</div>
                <h4>{feature}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section use-cases-section">
        <div className="container">
          <motion.h2
            className="sell-title"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Cas d&apos;usage
          </motion.h2>
          <motion.div
            className="use-cases-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {solution.useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                className="use-case-card"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cross-sell */}
      {crossSellSolutions.length > 0 && (
        <section className="section cross-sell-section">
          <div className="container">
            <motion.h2
              className="sell-title"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              Solutions complémentaires
            </motion.h2>
            <motion.p
              className="cross-sell-intro"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              Ces solutions fonctionnent parfaitement avec {solution.name} pour maximiser votre productivité.
            </motion.p>
            <motion.div
              className="cross-sell-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {crossSellSolutions.map((sol) => (
                <motion.div
                  key={sol.id}
                  className="cross-sell-card"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="cross-sell-icon">{sol.icon}</div>
                  <h3>{sol.name}</h3>
                  <p>{sol.tagline}</p>
                  <div className="cross-sell-price">{sol.price}</div>
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="btn btn-outline"
                  >
                    Découvrir
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            variants={ctaVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2>Prêt à démarrer avec {solution.name} ?</h2>
            <p>Obtenez un devis personnalisé et une démonstration gratuite</p>
            <Link to="/devis" className="btn btn-primary btn-lg">
              Demander un devis gratuit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SolutionDetail
