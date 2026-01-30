import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedImageFrame from './AnimatedImageFrame'
import ColorSideEffect from '../ui/ColorSideEffect'
import SidedTextLayout from '../ui/SidedTextLayout'

/*
  HeroSection
    - Composant principal de la page d'accueil avec une mise en page moderne côte à côte
    - Caractéristiques :
        - Effet de couleur diagonal animé sur le côté droit
        - Cadre d'image avec bordure fine et animation au survol
        - Contenu textuel à gauche avec animations décalées
        - Section statistiques en dessous
    - Animations :
        - Effet de couleur : mise à l'échelle + fondu
        - Texte : affichage décalé mot par mot
        - Image : fondu + mise à l'échelle avec effet de survol
        - Statistiques : animation décalée
    - Responsive : s'empile verticalement sur mobile, adapte la taille des images et du texte
*/

const HeroSection = () => {
  // Variantes d'animation pour le défilement décalé du texte
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  // Contenu principal du texte avec animation
  const textContent = (
    <motion.div
      className="hero-content-home"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
    >
      <motion.h1 className="hero-title-home" variants={itemVariants}>
        Bienvenue chez <span className="gradient-text-home">Harnix</span>
      </motion.h1>

      <motion.p className="hero-subtitle-home" variants={itemVariants}>
        8 solutions professionnelles pour automatiser, optimiser et faire croître votre business.
        Tarifs transparente, déploiement rapide, support dédié.
      </motion.p>

      <motion.div className="hero-cta-home" variants={itemVariants}>
        <Link to="/devis" className="btn btn-primary btn-lg">
          Obtenir un devis
        </Link>
        <Link to="/solutions" className="btn btn-outline btn-lg">
          Découvrir les solutions
        </Link>
      </motion.div>
    </motion.div>
  )

  // Composant de cadre d'image
  const imageFrame = (
    <div className="hero-image-wrapper">
      <AnimatedImageFrame
        src="/joshua-reddekopp.jpg"
        alt="Open office with computers and technology setup"
        width={420}
        height={320}
        borderColor="rgba(255, 255, 255, 0.15)"
        borderWidth={2}
        shadow="medium"
      />
    </div>
  )

  return (
    <section className="hero hero--redesigned">
      {/* Effet de couleur diagonal sur le côté droit */}
      <ColorSideEffect direction="right" intensity="medium" />

      <div className="container hero-container">
        {/* Mise en page à deux colonnes : texte à gauche, image à droite */}
        <SidedTextLayout
          textSide="left"
          contentSide={imageFrame}
          maxWidth={520}
        >
          {textContent}
        </SidedTextLayout>

        {/* Section Statistiques - conservée à partir de l'original */}
        <motion.div
          className="hero-stats-home"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="stat-home">
            <div className="stat-number-home">8</div>
            <div className="stat-label-home">Solutions</div>
          </div>
          <div className="stat-home">
            <div className="stat-number-home">5</div>
            <div className="stat-label-home">Bundles</div>
          </div>
          <div className="stat-home">
            <div className="stat-number-home">100+</div>
            <div className="stat-label-home">Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection