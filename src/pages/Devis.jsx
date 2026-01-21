import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { solutions, bundles } from '../data/mockData'
import '../styles/Devis.scss'

const Devis = () => {
  // Variants réutilisables pour apparitions hero UI
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    secteur: '',
    solutions: [],
    bundles: [],
    message: '',
    budget: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSolutionToggle = (solutionId) => {
    setFormData(prev => ({
      ...prev,
      solutions: prev.solutions.includes(solutionId)
        ? prev.solutions.filter(id => id !== solutionId)
        : [...prev.solutions, solutionId]
    }))
  }

  const handleBundleToggle = (bundleId) => {
    setFormData(prev => ({
      ...prev,
      bundles: prev.bundles.includes(bundleId)
        ? prev.bundles.filter(id => id !== bundleId)
        : [...prev.bundles, bundleId]
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide'
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis'
    }
    if (!formData.entreprise.trim()) {
      newErrors.entreprise = 'Le nom de l\'entreprise est requis'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Simuler l'envoi du formulaire
      console.log('Formulaire soumis:', formData)
      
      // Dans un vrai projet, on ferait un appel API ici
      setTimeout(() => {
        setSubmitted(true)
      }, 500)
    }
  }

  if (submitted) {
    return (
      <div className="devis-page">
        <section className="section success-section">
          <div className="container">
            <motion.div
              className="success-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">✓</div>
              <h1>Demande envoyée avec succès !</h1>
              <p>
                Merci pour votre intérêt. Notre équipe va analyser votre demande et vous contactera 
                dans les 24 heures pour discuter de vos besoins.
              </p>
              <div className="success-details">
                <p><strong>Email de confirmation envoyé à :</strong> {formData.email}</p>
                <p><strong>Numéro de référence :</strong> DEV-{Date.now().toString().slice(-6)}</p>
              </div>
              <motion.a
                href="/"
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Retour à l&apos;accueil
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="devis-page">
      <section className="devis-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <h1>Demande de devis</h1>
            <p className="hero-subtitle">
              Remplissez ce formulaire et recevez un devis personnalisé sous 24h.
              Notre équipe vous contactera pour discuter de vos besoins spécifiques.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="form-container">
            <motion.form
              onSubmit={handleSubmit}
              className="devis-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Informations de base */}
              <div className="form-section">
                <h2>Informations de contact</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="nom" className="form-label">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className={`form-input ${errors.nom ? 'error' : ''}`}
                      placeholder="John Doe"
                    />
                    <AnimatePresence>
                      {errors.nom && (
                        <motion.span
                          className="error-message"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          {errors.nom}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="form-group">
                    <label htmlFor="entreprise" className="form-label">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      id="entreprise"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleChange}
                      className={`form-input ${errors.entreprise ? 'error' : ''}`}
                      placeholder="Mon Entreprise SARL"
                    />
                    <AnimatePresence>
                      {errors.entreprise && (
                        <motion.span
                          className="error-message"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          {errors.entreprise}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="john.doe@entreprise.com"
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.span
                          className="error-message"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          {errors.email}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="form-group">
                    <label htmlFor="telephone" className="form-label">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`form-input ${errors.telephone ? 'error' : ''}`}
                      placeholder="+299 0XXX XXX XXX"
                    />
                    <AnimatePresence>
                      {errors.telephone && (
                        <motion.span
                          className="error-message"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          {errors.telephone}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Secteur et budget */}
              <div className="form-section">
                <h2>Votre projet</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="secteur" className="form-label">
                      Secteur d&apos;activité
                    </label>
                    <select
                      id="secteur"
                      name="secteur"
                      value={formData.secteur}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Sélectionnez un secteur</option>
                      <option value="restaurant">Restauration</option>
                      <option value="evenementiel">Événementiel</option>
                      <option value="logistique">Logistique & Transport</option>
                      <option value="commerce">Commerce & Retail</option>
                      <option value="formation">Formation & Éducation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget" className="form-label">
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Sélectionnez un budget</option>
                      <option value="<50k">Moins de 50K FCFA/mois</option>
                      <option value="50-100k">50K - 100K FCFA/mois</option>
                      <option value="100-200k">100K - 200K FCFA/mois</option>
                      <option value=">200k">Plus de 200K FCFA/mois</option>
                      <option value="sur-mesure">Sur mesure</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Solutions d'intérêt */}
              <div className="form-section">
                <h2>Solutions d&apos;intérêt</h2>
                <p className="section-description">
                  Sélectionnez les solutions qui vous intéressent (optionnel)
                </p>
                <div className="solutions-checkbox-grid">
                  {solutions.map((solution) => (
                    <motion.label
                      key={solution.id}
                      className="checkbox-card"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.solutions.includes(solution.id)}
                        onChange={() => handleSolutionToggle(solution.id)}
                      />
                      <div className="checkbox-content">
                        <span className="checkbox-icon">{solution.icon}</span>
                        <div>
                          <div className="checkbox-title">{solution.name}</div>
                          <div className="checkbox-subtitle">{solution.price}</div>
                        </div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Bundles d'intérêt */}
              <div className="form-section">
                <h2>Bundles d&apos;intérêt</h2>
                <p className="section-description">
                  Nos packs économiques (optionnel)
                </p>
                <div className="bundles-checkbox-grid">
                  {bundles.map((bundle) => (
                    <motion.label
                      key={bundle.id}
                      className="checkbox-card bundle-card"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.bundles.includes(bundle.id)}
                        onChange={() => handleBundleToggle(bundle.id)}
                      />
                      <div className="checkbox-content">
                        <span className="checkbox-icon">{bundle.icon}</span>
                        <div>
                          <div className="checkbox-title">{bundle.name}</div>
                          <div className="checkbox-subtitle">{bundle.price}</div>
                        </div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="form-section">
                <h2>Message</h2>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Décrivez vos besoins ou posez vos questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes..."
                    rows="6"
                  />
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="btn btn-primary btn-lg submit-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer la demande
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Devis
