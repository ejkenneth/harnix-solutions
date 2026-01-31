# Harnix SAS - Hub Commercial SaaS B2B

Application web React multi-pages complète pour **harnixsas.com**, un hub commercial SaaS B2B orienté conversion et génération de leads.

## 🎯 Vision du Projet

**Harnix SAS** est une plateforme commerciale dédiée exclusivement à la vente de solutions SaaS B2B. L'objectif principal est la **conversion** et la **génération de leads qualifiés**, sans sections institutionnelles superflues.

### Objectifs Business

- ✅ Présenter 8 solutions SaaS professionnelles
- ✅ Mettre en avant 5 bundles économiques
- ✅ Générer des leads via formulaire de devis intelligent
- ✅ Optimiser la conversion avec des CTA stratégiques
- ✅ Cross-selling entre solutions complémentaires

## 🛠️ Stack Technique

### Core
- **React 18.2** - Bibliothèque UI moderne
- **Vite 5.0** - Build tool ultra-rapide
- **React Router 6.20** - Navigation multi-pages

### Styling
- **SCSS** - Préprocesseur CSS avec variables CSS
- **CSS Modules** - Scoping des styles par composant
- **HeroUI 2.8** - Composants UI modernes et accessibles
- **Design System** - Variables CSS pour thème clair/sombre

### Animations
- **Framer Motion 12.27** - Animations fluides et performantes
  - Transitions de page
  - Hover effects
  - Scroll animations
  - Stagger animations pour les listes

### Features Bonus
- ✅ **Dark Mode** - Toggle avec persistance localStorage
- ✅ **Responsive Design** - Mobile-first approach avec menu hamburger
- ✅ **Accessibilité** - ARIA labels, navigation clavier
- ✅ **Scroll to Top** - Navigation automatique vers le haut des pages

## 📁 Structure du Projet

```
harnixsas/
├── public/                 # Assets statiques
├── src/
│   ├── components/        # Composants réutilisables
│   │   └── Layout/        # Navigation, Footer, Layout principal
│   │       ├── Layout.jsx          # Layout avec thème et ScrollToTop
│   │       ├── Navigation.jsx      # Navigation avec hamburger mobile
│   │       ├── ScrollToTop.jsx     # Scroll automatique vers le haut
│   │       ├── Footer.jsx          # Footer avec liens
│   │       └── Footer.scss         # Styles footer
│   ├── data/              # Données mockées
│   │   └── mockData.js    # Solutions, bundles, helpers
│   ├── pages/             # Pages de l'application
│   │   ├── Home.jsx       # Page d'accueil orientée conversion
│   │   ├── Solutions.jsx  # Liste des 8 solutions
│   │   ├── SolutionDetail.jsx  # Détail solution + cross-sell
│   │   ├── Bundles.jsx    # 5 bundles économiques
│   │   └── Devis.jsx      # Formulaire de devis intelligent
│   ├── styles/            # Styles globaux
│   │   └── main.scss      # Variables, reset, utilitaires
│   ├── App.jsx            # Router principal
│   └── main.jsx           # Point d'entrée
├── package.json
├── vite.config.js
└── README.md
```



```
harnixsas/
├── public/                         # Assets statiques 
├── src/                         
│   ├── components/                 # Composants réutilisables
│   │   └── Layout/                 # Navigation, Footer, Layout principal
│   │       ├── Layout.jsx          # Layout avec thème et ScrollToTop
│   │       ├── Navigation.jsx      # Navigation avec hamburger mobile
│   │       ├── ScrollToTop.jsx     # Scroll automatique vers le haut
│   │       └── Footer.jsx          # Footer avec liens
│   │
│   ├── data/                       # Données mock / fixtures
│   │   └── mockData.js             # Solutions, bundles, helpers
│   ├── pages/                      # Pages de l'application
│   │   ├── Home.jsx                # Page d'accueil orientée conversion
│   │   ├── Solutions.jsx           # Liste des 8 solutions
│   │   ├── SolutionDetail.jsx      # Détail solution + cross-sell
│   │   ├── Bundles.jsx             # 5 bundles économiques
│   │   └── Devis.jsx               # Formulaire de devis
│   ├── styles/                     # Styles globaux et variables
│   │   ├── Bundles.scss           
│   │   ├── Devis.scss             
│   │   ├── Footer.scss             
│   │   ├── Home.scss              
│   │   ├── main.scss               # Variables, reset, utilitaires 
│   │   ├── Navigation.scss         
│   │   ├── SolutionDetail.scss     
│   │   └── Solution.scss
│   ├── App.jsx                     # Router principal + configuration globale
│   └── main.jsx                    # Point d'entrée (montage React)
├── .gitignore
├── package.json
├── vite.config.js
├── vercel.json                      # Config Vercel
└── README.md
```


## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+ et npm/yarn/pnpm

### Installation

```bash
# Cloner le projet (ou naviguer dans le dossier)
cd harnixsas

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Développement

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

L'application sera accessible sur `http://localhost:3000`

### Build Production

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

Les fichiers optimisés seront générés dans le dossier `dist/`

### Preview Production

```bash
npm run preview
# ou
yarn preview
# ou
pnpm preview
```

## 📄 Pages de l'Application

### 1. **Home** (`/`)
Page d'accueil orientée conversion avec :
- Hero section avec CTA principal
- Statistiques (8 solutions, 5 bundles, 100+ clients)
- Preview des 4 solutions phares
- Preview des 2 bundles populaires
- CTA final pour génération de leads

### 2. **Solutions** (`/solutions`)
Liste complète des 8 solutions :
- Cartes interactives avec hover effects
- Prix et taglines visibles
- Features preview (3 premières)
- Lien vers détail de chaque solution

### 3. **Détail Solution** (`/solutions/:slug`)
Page détaillée pour chaque solution :
- Description complète
- Liste des fonctionnalités principales
- Cas d'usage métier (3 exemples)
- **Cross-selling** : Solutions complémentaires
- CTA pour demande de devis

### 4. **Bundles** (`/bundles`)
Présentation des 5 packs économiques :
- Badge d'économie visible
- Solutions incluses dans chaque pack
- Avantages du bundle
- Section "Pourquoi choisir un bundle ?"
- CTA pour devis personnalisé

### 5. **Demande de Devis** (`/devis`)
Formulaire intelligent de génération de leads :
- Informations de contact (validation en temps réel)
- Secteur d'activité et budget estimé
- Sélection multiple de solutions d'intérêt
- Sélection multiple de bundles
- Message libre
- **Feedback visuel** : Page de confirmation avec numéro de référence

## 🎨 Design & UX

### Identité Visuelle
- **Couleurs** : Palette moderne avec gradient primary/secondary
- **Typographie** : System fonts pour performance
- **Espacements** : Système cohérent basé sur rem
- **Ombres** : Hiérarchie visuelle avec shadow system

### Principes UX
1. **Conversion-First** : CTA visibles sur chaque page
2. **Hiérarchie claire** : Information importante mise en avant
3. **Feedback utilisateur** : Animations, états hover, messages d'erreur
4. **Performance** : Lazy loading, optimisations Framer Motion
5. **Accessibilité** : Navigation clavier, ARIA labels

### Animations Framer Motion
- **Page transitions** : Fade in/out
- **Scroll animations** : `whileInView` pour révélation progressive
- **Hover effects** : Scale, translate, shadow
- **Stagger animations** : Listes animées séquentiellement
- **Form feedback** : Animations d'erreur avec `AnimatePresence`

## 📊 Données Mockées

### Solutions (8)
1. **Restora** - 25K FCFA/mois - Cross-sell: Nixai, Paynow
2. **Ticketche** - 5% commission - Cross-sell: Paynow, Nixai
3. **Nixai** - Sur devis - Cross-sell: toutes
4. **Nysia** - Freemium / 5K FCFA/user - Cross-sell: LearnHub, Nixai
5. **Fleetix** - 15K FCFA/véhicule - Cross-sell: StockPro, Nysia
6. **Paynow** - 2% commission - Cross-sell: Restora, Ticketche
7. **StockPro** - 20K FCFA/mois - Cross-sell: Fleetix, Paynow
8. **LearnHub** - Freemium / 30K FCFA - Cross-sell: Nysia, Ticketche

### Bundles (5)
1. **Pack Restaurant Complet** - 30K FCFA (Économie: 22K)
2. **Pack Événementiel Pro** - 6% commission (Économie: 1%)
3. **Pack Logistique 360** - 30K FCFA (Économie: 20K)
4. **Pack Entreprise Digitale** - 40K FCFA (Économie: 25K)
5. **Pack Commerce Multi-sites** - 38K FCFA (Économie: 9K)

## 🔧 Choix Techniques Justifiés

### Pourquoi Vite ?
- **Performance** : Build ultra-rapide grâce à ESM natif
- **DX** : Hot Module Replacement instantané
- **Simplicité** : Configuration minimale

### Pourquoi Framer Motion ?
- **Performance** : Optimisations GPU pour animations fluides
- **API intuitive** : `whileHover`, `whileInView`, `variants`
- **Accessibilité** : Respect des préférences `prefers-reduced-motion`

### Pourquoi SCSS ?
- **Variables CSS** : Support natif pour thème clair/sombre
- **Nesting** : Code plus lisible et maintenable
- **Modularité** : Import de fichiers SCSS par composant

### Pourquoi React Router ?
- **Multi-pages** : Navigation SPA avec URLs propres
- **SEO-friendly** : URLs sémantiques (`/solutions/restora`)
- **Code splitting** : Possibilité de lazy loading des pages

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via CLI Vercel

```bash
# Installer Vercel CLI globalement
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer (depuis la racine du projet)
vercel

# Pour la production
vercel --prod
```

### Méthode 2 : Via GitHub (Recommandé)

1. **Pousser le code sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-username/harnixsas.git
   git push -u origin main
   ```

2. **Connecter à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer sur "New Project"
   - Importer le repository GitHub
   - Vercel détecte automatiquement Vite

3. **Configuration Vercel**
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build` (automatique)
   - **Output Directory** : `dist` (automatique)
   - **Install Command** : `npm install` (automatique)

4. **Variables d'environnement** (si nécessaire)
   - Ajouter dans les settings du projet Vercel

5. **Déploiement**
   - Cliquer sur "Deploy"
   - Vercel génère automatiquement une URL de preview
   - Chaque push sur `main` déclenche un déploiement automatique

### Configuration Vercel (vercel.json)

Créer un fichier `vercel.json` à la racine pour optimisations :

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Domain Personnalisé

1. Dans les settings du projet Vercel
2. Aller dans "Domains"
3. Ajouter `harnixsas.com`
4. Suivre les instructions DNS

## 🔄 Améliorations Futures

### Court Terme
- [ ] Intégration API réelle pour formulaire de devis
- [ ] Analytics (Google Analytics, Plausible)
- [ ] A/B testing sur CTA
- [ ] Chat en direct (Intercom, Crisp)

### Moyen Terme
- [ ] Blog/Resources pour SEO
- [ ] Témoignages clients
- [ ] Calculateur de ROI interactif
- [ ] Démo vidéo intégrée

### Long Terme
- [ ] Portail client avec authentification
- [ ] Tableau de bord analytics pour leads
- [ ] Intégration CRM (HubSpot, Salesforce)
- [ ] Multilingue (français/anglais)

## 📝 Notes de Développement

### Performance
- Images optimisées (à ajouter si nécessaire)
- Code splitting par route (lazy loading possible)
- CSS critique inline pour above-the-fold

### SEO
- Meta tags dynamiques par page
- Structured data (JSON-LD) pour produits
- Sitemap.xml généré automatiquement

### Accessibilité
- Navigation clavier complète
- Contraste de couleurs WCAG AA
- ARIA labels sur éléments interactifs

## 📄 Licence

Propriétaire - Harnix SAS © 2024

## 👥 Contact

Pour toute question technique ou business :
- Email : contact@harnixsas.com
- Site : harnixsas.com

---

**Développé avec ❤️ pour transformer les entreprises avec des solutions SaaS B2B**
