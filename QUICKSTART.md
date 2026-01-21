# 🚀 Guide de Démarrage Rapide - Harnix SAS

## Installation Express (5 minutes)

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

L'application sera accessible sur **http://localhost:3000**

### 3. Build pour production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## 📋 Checklist de Vérification

### ✅ Fonctionnalités à Tester

- [ ] **Navigation** : Tous les liens fonctionnent, menu hamburger mobile
- [ ] **Dark Mode** : Toggle dans la navigation desktop
- [ ] **Scroll to Top** : Navigation vers le haut automatique
- [ ] **Page Home** : Hero, stats, previews, CTA
- [ ] **Page Solutions** : 8 cartes avec hover effects
- [ ] **Page Détail Solution** : Features, use cases, cross-sell
- [ ] **Page Bundles** : 5 bundles avec économies visibles
- [ ] **Formulaire Devis** : Validation, sélection solutions/bundles, confirmation
- [ ] **Animations** : Scroll, hover, transitions fluides
- [ ] **Responsive** : Test sur mobile, tablette, desktop

### 🎨 Design à Vérifier

- [ ] Couleurs cohérentes (primary, secondary, success)
- [ ] Typographie lisible sur tous les écrans
- [ ] Espacements harmonieux
- [ ] Ombres et effets visuels subtils
- [ ] Dark mode fonctionnel partout

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev          # Serveur dev sur localhost:3000

# Build
npm run build        # Build production
npm run preview      # Preview build production

# Linting
npm run lint         # Vérifier le code
```

## 🌐 Déploiement Vercel (2 minutes)

### Option 1 : Via GitHub

1. Pousser le code sur GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. "New Project" → Importer repository
4. Vercel détecte automatiquement Vite
5. Cliquer "Deploy"

### Option 2 : Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

## 📝 Structure des Routes

```
/                    → Home (conversion-focused)
/solutions           → Liste des 8 solutions
/solutions/:slug     → Détail solution + cross-sell
/bundles             → 5 bundles économiques
/devis               → Formulaire de devis
```

## 🎯 Points Clés du Projet

### Conversion-Focused
- CTA visibles sur chaque page
- Hero fort avec double CTA
- Cross-selling stratégique
- Formulaire intelligent avec feedback

### Animations Framer Motion
- Transitions de page fluides
- Hover effects sur cartes
- Scroll animations (`whileInView`)
- Stagger animations pour listes

### Navigation Responsive
- Menu desktop avec navigation horizontale
- Menu hamburger mobile avec overlay
- Scroll to top automatique sur navigation

### Dark Mode
- Toggle dans navigation desktop uniquement
- Persistance localStorage
- Variables CSS pour thème

### Données Mockées
- 8 solutions complètes
- 5 bundles avec économies
- Cross-sell configuré
- Helpers pour recherche

## 🐛 Résolution de Problèmes

### Le serveur ne démarre pas
```bash
# Vérifier Node.js version (18+)
node --version

# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Les styles ne s'appliquent pas
- Vérifier que `main.scss` est importé dans `main.jsx`
- Vérifier les imports SCSS dans les composants

### Les animations ne fonctionnent pas
- Vérifier que Framer Motion est installé : `npm list framer-motion`
- Vérifier les imports : `import { motion } from 'framer-motion'`

### Dark mode ne persiste pas
- Vérifier localStorage dans DevTools
- Vérifier que `useEffect` dans `Layout.jsx` s'exécute

## 📚 Documentation Complète

- **README.md** : Documentation complète du projet
- **DOCUMENTATION.md** : Choix UX, business, design system
- **QUICKSTART.md** : Ce fichier (démarrage rapide)

## 🎓 Prochaines Étapes

1. ✅ Tester toutes les fonctionnalités (navigation, hamburger, scroll to top)
2. ⏳ Ajouter des images/illustrations
3. ⏳ Intégrer analytics (Google Analytics)
4. ⏳ Connecter formulaire à API réelle
5. ⏳ Optimiser SEO (meta tags dynamiques)
6. ⏳ Ajouter tests (Jest, React Testing Library)

## 💬 Support

Pour toute question :
- Consulter la documentation complète (`README.md`, `DOCUMENTATION.md`)
- Vérifier les issues GitHub (si applicable)
- Contacter l'équipe : contact@harnixsas.com

---

**Bon développement ! 🚀**
