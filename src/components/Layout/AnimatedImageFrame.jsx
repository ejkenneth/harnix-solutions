import { motion } from 'framer-motion'
import { useState } from 'react'

/*
  AnimatedImageFrame
  - Composant affichant une image dans un cadre élégant avec bordure et animations au survol
  - Caractéristiques :
    - Cadre animé au chargement (apparition progressive)
    - Rotation 3D subtile du cadre au survol
    - Ombre accentuée au survol pour un effet de profondeur
    - Image statique à l'intérieur (seul le cadre se transforme)
  - Props :
    - src : chaîne - URL de l'image source (obligatoire)
    - alt : chaîne - Texte alternatif pour accessibilité (obligatoire)
    - width : nombre - Largeur du cadre en pixels (défaut: 400)
    - height : nombre - Hauteur du cadre en pixels (défaut: 300)
    - borderColor : chaîne - Couleur de la bordure (défaut: 'rgba(255,255,255,0.2)')
    - borderWidth : nombre - Épaisseur de la bordure en pixels (défaut: 1)
    - shadow : 'light'|'medium'|'heavy' - Intensité de l'ombre (défaut: 'medium')
  - Responsive : Adaptation automatique sur mobile
*/

const AnimatedImageFrame = ({
  src,
  alt,
  width = 400,
  height = 300,
  borderColor = 'rgba(255, 255, 255, 0.2)',
  borderWidth = 1,
  shadow = 'medium'
}) => {
  // État pour détecter le survol de la souris
  const [isHovered, setIsHovered] = useState(false)

  // Mappage des intensités d'ombre disponibles
  const shadowMap = {
    light: '0 4px 12px rgba(0, 0, 0, 0.15)',
    medium: '0 12px 28px rgba(0, 0, 0, 0.25)',
    heavy: '0 20px 40px rgba(0, 0, 0, 0.35)'
  }

  return (
    // Conteneur avec perspective pour activer les transformations 3D
    <div
      style={{
        perspective: '1000px',
        display: 'inline-block'
      }}
    >
      {/* Cadre principal contenant l'image - animé au survol */}
      <motion.div
        className="animated-image-frame"
        // Animation d'entrée : apparition progressive avec légère montée
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        // Animation de rotation 3D au survol : rotation subtile autour de l'axe Y
        animate={isHovered ? { rotateY: 1.5 } : { rotateY: 0 }}
        // Transition fluide pour la rotation et l'entrée
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        // Événements souris pour gérer l'état de survol
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // Styles du cadre
        style={{
          width: `${width}px`,
          height: `${height}px`,
          // Bordure du cadre avec épaisseur augmentée de 1px
          border: `${borderWidth + 1}px solid ${borderColor}`,
          borderRadius: '8px',
          overflow: 'hidden',
          // Ombre dynamique : plus prononcée au survol
          boxShadow: isHovered ? '0 16px 32px rgba(0, 0, 0, 0.35)' : shadowMap[shadow] || shadowMap.medium,
          cursor: 'pointer',
          // Transformation 3D activée
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Conteneur de l'image - reste statique, seul le cadre se transforme */}
        <div
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block'
            }}
          />
        </div>

        {/* Overlay subtil au survol : ajoute un léger reflet blanc */}
        <motion.div
          className="frame-hover-overlay"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 0.05 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.1)',
            pointerEvents: 'none'
          }}
        />
      </motion.div>
    </div>
  )
}

export default AnimatedImageFrame
