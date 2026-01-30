import { motion } from 'framer-motion'

/*
  ColorSideEffect
  - Rend un effet de couleur animé en diagonale/onde sur le côté droit de la section héros
  - Crée une séparation visuelle entre les zones de texte et d'image à l'aide d'une forme de chemin de détourage en diagonale
  - Props :
    - direction : « left » | « right » - Côté sur lequel positionner l'effet (par défaut : « right »)
    - color : chaîne - Couleur ou dégradé CSS (par défaut : dégradé primaire)
    - intensity : « subtle » | « medium » | « bold » - Intensité visuelle (par défaut : « medium »)
  - Animation : mise à l'échelle subtile et changement d'opacité au chargement.
  - Responsive : adapte l'angle et la taille sur les écrans plus petits.
*/

const ColorSideEffect = ({
  direction = 'right',
  color = 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
  intensity = 'medium'
}) => {
  // Obtenir des valeurs d'opacité et d'animation basées sur l'intensité
  const intensityConfig = {
    subtle: { opacity: 0.08, scaleStart: 0.95 },
    medium: { opacity: 0.15, scaleStart: 0.9 },
    bold: { opacity: 0.25, scaleStart: 0.85 }
  }

  const config = intensityConfig[intensity] || intensityConfig.medium

  return (
    <motion.div
      className={`color-side-effect color-side-effect--${direction}`}
      initial={{ scale: config.scaleStart, opacity: 0 }}
      animate={{ scale: 1, opacity: config.opacity }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        background: color,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  )
}

export default ColorSideEffect
