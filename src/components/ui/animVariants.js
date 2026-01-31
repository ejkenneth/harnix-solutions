/**
 * Variantes d'animation centralisées pour Framer Motion
 * Garantit des animations cohérentes, professionnelles et subtiles sur toutes les pages
 * 
 * Les variantes sont organisées par type d'animation :
 * - Variantes de conteneur (orchestration décalée)
 * - Variantes d'élément (animations d'éléments individuels)
 * - Variantes spécialisées (effets spécifiques à une section)
 */

// ============================================================================
// CONTAINER VARIANTS - Orchestrate child animations with stagger
// ============================================================================

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // 120ms intervalle entre les enfants
      delayChildren: 0.1 // délai initial avant le premier enfant
    }
  }
}

export const staggerContainerGentle = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Décalage plus doux pour un effet plus lent
      delayChildren: 0.05
    }
  }
}

// ============================================================================
// ITEM VARIANTS - Individual element animations
// ============================================================================

// Fondu enchaîné avec un léger mouvement ascendant (le plus courant) [Français]
// Fade in with subtle upward motion (most common)
export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}


// Ajusté avec un léger mouvement vers le bas (pour les éléments alignés en haut) [Français]
// Fade in with slight downward motion (for top-aligned elements)
export const fadeInDown = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Fondu en entrée avec mouvement de gauche à droite [Français]
// Fade in with left-to-right motion
export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Fondu en entrée avec mouvement de droite à gauche [Français]
// Fade in with right-to-left motion
export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Pas utilisé pour l'instant
// Scale-in animation (subtle scaling from 0.95)
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// ============================================================================
// SECTION HEADER VARIANTS - For title + subtitle pairs
// ============================================================================

export const sectionHeader = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

// ============================================================================
// CARD VARIANTS - For card components with hover effect
// ============================================================================

export const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  hover: {
    y: -4,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
}

// ================================================================================
// CTA (CALL-TO-ACTION) VARIANTS - Pour les sections de boutons/actions importantes (For prominent button/action sections)
// ================================================================================

// Pas utilisé pour l'instant
export const ctaVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

// ============================================================================
// SPECIALTY VARIANTS - Section-specific animations
// ============================================================================

// Animation flottante du badge/label (boucle continue subtile)
export const floatBadge = {
  hidden: { opacity: 0, y: 8, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    y: [0, -6, 0],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut'
    }
  }
}

// Souligner révéler (pour la décoration du texte)
export const underlineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 }
  }
}

// Slide in with rotation (for decorative elements)
export const slideInRotate = {
  hidden: { opacity: 0, x: -30, rotate: -5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// ============================================================================
// UTILITY VARIANTS - Animations spécifiques au timing (Timing-specific animations)
// ============================================================================

// Fade rapide (entrée rapide)[Fast fade (quick entrance)]
export const fastFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

// Fade(Fondu) lent (pour les éléments d'arrière-plan)[Slow fade (for background elements)]
export const slowFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' }
  }
}

// ============================================================================
// VIEWPORT CONFIGURATION (reusable across components)
// ============================================================================

// Déclenche l'animation chaque fois qu'on arrive à la section en scrollant
export const viewportOnce = {
  once: false,  // L'animation se répète à chaque passage
  margin: '-100px'  // Déclenche 100px avant d'entrer en vue
}

// Déclenche l'animation une seule fois au chargement initial
export const viewportSingleTime = {
  once: true,   // L'animation se fait une seule fois
  margin: '-100px'
}

export const viewportRepeated = {
  once: false,
  margin: '-50px'
}
