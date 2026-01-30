import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { solutions, bundles } from '../data/mockData'
import HeroSection from '../components/Layout/HeroSection.jsx'
import '../styles/Home.scss'

const Home = () => {
  const featuredSolutions = solutions.slice(0, 4)
  const featuredBundles = bundles.slice(0, 2)

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Décalage de 150ms entre enfants
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection />

      {/* Solutions Featured */}
      <section className="section solutions-preview">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Nos solutions phares</h2>
            <p>Découvrez nos solutions les plus populaires</p>
          </motion.div>

          <motion.div
            className="solutions-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredSolutions.map((solution) => (
              <motion.div
                key={solution.id}
                className="solution-card"
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
              >
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.name}</h3>
                <p className="solution-tagline">{solution.tagline}</p>
                <p className="solution-description">{solution.description}</p>
                <div className="solution-price">{solution.price}</div>
                <Link to={`/solutions/${solution.slug}`} className="btn btn-primary">
                  En savoir plus
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/solutions" className="btn btn-outline btn-lg">
              Voir toutes les solutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bundles Featured */}
      <section className="section bundles-preview">
        <div className="container">
          <motion.div
            className="section-header"
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>Bundles économiques</h2>
            <p>Économisez jusqu&apos;à 40% avec nos packs tout-en-un</p>
          </motion.div>

          <motion.div
            className="bundles-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredBundles.map((bundle) => (
              <motion.div
                key={bundle.id}
                className="bundle-card"
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
              >
                <div className="bundle-badge">Économie: {bundle.savings}</div>
                <div className="bundle-icon">{bundle.icon}</div>
                <h3>{bundle.name}</h3>
                <p>{bundle.description}</p>
                <div className="bundle-price">
                  <span className="price-current">{bundle.price}</span>
                  <span className="price-original">{bundle.originalPrice}</span>
                </div>
                <ul className="bundle-features">
                  {bundle.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <Link to="/bundles" className="btn btn-primary">
                  Voir le pack
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/bundles" className="btn btn-outline btn-lg">
              Voir tous les bundles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Prêt à transformer votre entreprise ?</h2>
            <p>Obtenez un devis personnalisé en moins de 24h</p>
            <Link to="/devis" className="btn btn-primary btn-lg">
              Demander un devis gratuit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
