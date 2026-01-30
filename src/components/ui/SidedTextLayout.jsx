import { motion } from 'framer-motion'

/*
  SidedTextLayout
  - Fournit une mise en page à deux colonnes avec du texte d'un côté et du contenu facultatif de l'autre.
  - Gère le comportement réactif (empilement sur les petits écrans).
  - Props :
    - children : ReactNode - Contenu à afficher dans la mise en page.
    - textSide : « left » | « right » - Côté du contenu textuel (par défaut : « left »).
    - contentSide : ReactNode - Élément facultatif à afficher du côté opposé
    - maxWidth : nombre - Largeur maximale de la zone de texte en pixels (par défaut : 500)
  - Animations : fondu enchaîné décalé pour le contenu textuel
  - Responsivité : mise en page à une seule colonne sur les écrans < 768px
*/

const SidedTextLayout = ({
  children,
  textSide = 'left',
  contentSide = null,
  maxWidth = 500
}) => {
  // Variantes d'animation pour le contenu textuel
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const layoutClass = textSide === 'right' ? 'text-right-side' : 'text-left-side'

  return (
    <div className={`sided-text-layout ${layoutClass}`}>
      {textSide === 'left' ? (
        <>
          {/* Texte à gauche */}
          <motion.div
            className="sided-text-column"
            style={{ maxWidth: `${maxWidth}px` }}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {children}
          </motion.div>

          {/* Contenu à droite */}
          {contentSide && <div className="sided-content-column">{contentSide}</div>}
        </>
      ) : (
        <>
          {/* Contenu à gauche */}
          {contentSide && <div className="sided-content-column">{contentSide}</div>}

          {/* Texte à droite */}
          <motion.div
            className="sided-text-column"
            style={{ maxWidth: `${maxWidth}px`, marginLeft: 'auto' }}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
        </>
      )}
    </div>
  )
}

export default SidedTextLayout
