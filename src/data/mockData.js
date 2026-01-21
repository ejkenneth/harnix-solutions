// Données mockées pour les solutions
export const solutions = [
  {
    id: 'restora',
    slug: 'restora',
    name: 'Restora',
    tagline: 'Gestion restaurant',
    description: 'Solution tout-en-un pour la gestion de votre restaurant : commandes, stocks, personnel et analytics.',
    price: '25K FCFA/mois',
    pricingType: 'subscription',
    icon: '🍽️',
    features: [
      'Gestion des commandes en temps réel',
      'Suivi des stocks automatique',
      'Gestion du personnel et planning',
      'Analytics et rapports détaillés',
      'Application mobile incluse'
    ],
    useCases: [
      {
        title: 'Restaurant rapide',
        description: 'Gérez jusqu\'à 500 commandes par jour avec une interface optimisée pour la vitesse.'
      },
      {
        title: 'Restaurant gastronomique',
        description: 'Suivez chaque détail de vos réservations et commandes avec précision.'
      },
      {
        title: 'Chaîne de restaurants',
        description: 'Centralisez la gestion de plusieurs établissements depuis une seule interface.'
      }
    ],
    crossSell: ['nixai', 'paynow']
  },
  {
    id: 'ticketche',
    slug: 'ticketche',
    name: 'Ticketche',
    tagline: 'Billetterie événementielle',
    description: 'Plateforme de billetterie complète pour tous vos événements : concerts, conférences, spectacles.',
    price: '5% commission',
    pricingType: 'commission',
    icon: '🎫',
    features: [
      'Vente de billets en ligne',
      'Gestion des places et catégories',
      'Check-in mobile et QR codes',
      'Statistiques de vente en temps réel',
      'Intégration réseaux sociaux'
    ],
    useCases: [
      {
        title: 'Événements culturels',
        description: 'Organisez vos concerts et spectacles avec une billetterie professionnelle.'
      },
      {
        title: 'Conférences business',
        description: 'Gérez les inscriptions et paiements pour vos événements professionnels.'
      },
      {
        title: 'Festivals',
        description: 'Solution scalable pour gérer des milliers de billets sur plusieurs jours.'
      }
    ],
    crossSell: ['paynow', 'nixai']
  },
  {
    id: 'nixai',
    slug: 'nixai',
    name: 'Nixai',
    tagline: 'Assistant IA business',
    description: 'Solutions IA personnalisées pour automatiser vos processus métier et améliorer votre productivité.',
    price: 'Sur devis',
    pricingType: 'custom',
    icon: '🤖',
    features: [
      'Chatbots intelligents',
      'Automatisation de processus',
      'Analyse prédictive',
      'Reconnaissance vocale et visuelle',
      'Intégration API flexible'
    ],
    useCases: [
      {
        title: 'Service client automatisé',
        description: 'Déployez des chatbots qui répondent 24/7 aux questions de vos clients.'
      },
      {
        title: 'Analyse de données',
        description: 'Exploitez vos données avec des modèles d\'IA sur mesure pour votre secteur.'
      },
      {
        title: 'Automatisation métier',
        description: 'Automatisez vos tâches répétitives et libérez du temps pour l\'essentiel.'
      }
    ],
    crossSell: ['restora', 'ticketche', 'nysia', 'fleetix', 'paynow', 'stockpro', 'learnhub']
  },
  {
    id: 'nysia',
    slug: 'nysia',
    name: 'Nysia',
    tagline: 'Collaboration d\'équipe nouvelle génération',
    description: 'Plateforme de collaboration complète pour vos équipes : communication, gestion de projets, partage de fichiers.',
    price: 'Freemium / 5K FCFA/user',
    pricingType: 'freemium',
    icon: '💼',
    features: [
      'Messagerie instantanée',
      'Gestion de projets et tâches',
      'Stockage cloud sécurisé',
      'Vidéoconférence intégrée',
      'Intégrations tierces'
    ],
    useCases: [
      {
        title: 'Équipes distantes',
        description: 'Maintenez la cohésion de vos équipes même à distance avec des outils collaboratifs puissants.'
      },
      {
        title: 'Gestion de projets',
        description: 'Suivez l\'avancement de vos projets avec des tableaux Kanban et des rapports détaillés.'
      },
      {
        title: 'Communication interne',
        description: 'Centralisez toutes vos communications d\'équipe dans un seul espace.'
      }
    ],
    crossSell: ['learnhub', 'nixai']
  },
  {
    id: 'fleetix',
    slug: 'fleetix',
    name: 'Fleetix',
    tagline: 'Gestion de flotte intelligente',
    description: 'Suivez et gérez votre flotte de véhicules en temps réel : localisation GPS, maintenance, consommation.',
    price: '15K FCFA/véhicule',
    pricingType: 'per-unit',
    icon: '🚗',
    features: [
      'Suivi GPS en temps réel',
      'Gestion de la maintenance',
      'Suivi de consommation',
      'Alertes et notifications',
      'Rapports d\'utilisation détaillés'
    ],
    useCases: [
      {
        title: 'Transport de marchandises',
        description: 'Optimisez vos trajets et réduisez vos coûts de carburant avec un suivi précis.'
      },
      {
        title: 'Flotte de livraison',
        description: 'Gérez vos livreurs et suivez chaque livraison en temps réel.'
      },
      {
        title: 'Véhicules de service',
        description: 'Planifiez les interventions et suivez l\'utilisation de vos véhicules techniques.'
      }
    ],
    crossSell: ['stockpro', 'nysia']
  },
  {
    id: 'paynow',
    slug: 'paynow',
    name: 'Paynow',
    tagline: 'Paiements en ligne sécurisés',
    description: 'Solution de paiement complète pour accepter les paiements en ligne et en point de vente.',
    price: '2% commission',
    pricingType: 'commission',
    icon: '💳',
    features: [
      'Paiements en ligne',
      'Terminaux de paiement',
      'Paiements mobiles',
      'Gestion des remboursements',
      'Rapports financiers détaillés'
    ],
    useCases: [
      {
        title: 'E-commerce',
        description: 'Acceptez les paiements en ligne sur votre site web avec une intégration simple.'
      },
      {
        title: 'Point de vente',
        description: 'Équipez vos magasins avec des terminaux de paiement modernes et sécurisés.'
      },
      {
        title: 'Paiements récurrents',
        description: 'Gérez les abonnements et paiements récurrents automatiquement.'
      }
    ],
    crossSell: ['restora', 'ticketche']
  },
  {
    id: 'stockpro',
    slug: 'stockpro',
    name: 'StockPro',
    tagline: 'Gestion de stock optimisée',
    description: 'Gérez vos stocks intelligemment : alertes automatiques, prévisions de demande, optimisation des coûts.',
    price: '20K FCFA/mois',
    pricingType: 'subscription',
    icon: '📦',
    features: [
      'Suivi des stocks en temps réel',
      'Alertes de réapprovisionnement',
      'Prévisions de demande IA',
      'Gestion multi-entrepôts',
      'Intégration fournisseurs'
    ],
    useCases: [
      {
        title: 'Commerce de détail',
        description: 'Ne manquez jamais de stock avec des alertes intelligentes et des prévisions précises.'
      },
      {
        title: 'E-commerce',
        description: 'Synchronisez vos stocks entre vos différents canaux de vente automatiquement.'
      },
      {
        title: 'Distribution',
        description: 'Gérez plusieurs entrepôts et optimisez vos flux logistiques.'
      }
    ],
    crossSell: ['fleetix', 'paynow']
  },
  {
    id: 'learnhub',
    slug: 'learnhub',
    name: 'LearnHub',
    tagline: 'Plateforme de formation en ligne',
    description: 'Créez et gérez vos formations en ligne : cours, certifications, suivi des apprenants.',
    price: 'Freemium / 30K FCFA',
    pricingType: 'freemium',
    icon: '🎓',
    features: [
      'Création de cours interactifs',
      'Suivi des apprenants',
      'Certifications automatiques',
      'Gamification et badges',
      'Rapports de progression'
    ],
    useCases: [
      {
        title: 'Formation interne',
        description: 'Formez vos équipes avec des cours personnalisés et suivez leur progression.'
      },
      {
        title: 'Académie en ligne',
        description: 'Monétisez vos connaissances en créant votre propre académie de formation.'
      },
      {
        title: 'Onboarding',
        description: 'Intégrez rapidement vos nouveaux collaborateurs avec des parcours structurés.'
      }
    ],
    crossSell: ['nysia', 'ticketche']
  }
]

// Données mockées pour les bundles
export const bundles = [
  {
    id: 'pack-restaurant',
    slug: 'pack-restaurant-complet',
    name: 'Pack Restaurant Complet',
    price: '30K FCFA',
    originalPrice: '52K FCFA',
    savings: '22K FCFA',
    description: 'Solution complète pour votre restaurant : gestion, paiements et IA.',
    solutions: ['restora', 'nixai', 'paynow'],
    features: [
      'Gestion complète du restaurant',
      'Paiements intégrés',
      'Chatbot IA pour service client',
      'Support prioritaire',
      'Formation incluse'
    ],
    icon: '🍽️'
  },
  {
    id: 'pack-evenementiel',
    slug: 'pack-evenementiel-pro',
    name: 'Pack Événementiel Pro',
    price: '6% commission',
    originalPrice: '7%',
    savings: '1%',
    description: 'Tout pour réussir vos événements : billetterie, paiements et automatisation.',
    solutions: ['ticketche', 'paynow', 'nixai'],
    features: [
      'Billetterie professionnelle',
      'Paiements sécurisés',
      'Automatisation marketing',
      'Analytics événements',
      'Support événement dédié'
    ],
    icon: '🎪'
  },
  {
    id: 'pack-logistique',
    slug: 'pack-logistique-360',
    name: 'Pack Logistique 360',
    price: '30K FCFA',
    originalPrice: '50K FCFA',
    savings: '20K FCFA',
    description: 'Gestion complète de votre logistique : flotte, stocks et collaboration.',
    solutions: ['fleetix', 'stockpro', 'nysia'],
    features: [
      'Suivi flotte GPS',
      'Gestion stocks optimisée',
      'Collaboration équipes',
      'Rapports consolidés',
      'Support logistique expert'
    ],
    icon: '🚚'
  },
  {
    id: 'pack-entreprise',
    slug: 'pack-entreprise-digitale',
    name: 'Pack Entreprise Digitale',
    price: '40K FCFA',
    originalPrice: '65K FCFA',
    savings: '25K FCFA',
    description: 'Transformation digitale complète : collaboration, formation et IA.',
    solutions: ['nysia', 'learnhub', 'nixai'],
    features: [
      'Collaboration d\'équipe',
      'Formation en ligne',
      'IA sur mesure',
      'Support entreprise',
      'Conseil stratégique inclus'
    ],
    icon: '🏢'
  },
  {
    id: 'pack-commerce',
    slug: 'pack-commerce-multi-sites',
    name: 'Pack Commerce Multi-sites',
    price: '38K FCFA',
    originalPrice: '47K FCFA',
    savings: '9K FCFA',
    description: 'Gérez plusieurs points de vente : stocks, paiements et restauration.',
    solutions: ['stockpro', 'paynow', 'restora'],
    features: [
      'Gestion multi-sites',
      'Stocks synchronisés',
      'Paiements unifiés',
      'Rapports consolidés',
      'Support multi-sites'
    ],
    icon: '🏪'
  }
]

// Fonction helper pour trouver une solution par slug
export const getSolutionBySlug = (slug) => {
  return solutions.find(sol => sol.slug === slug)
}

// Fonction helper pour trouver un bundle par slug
export const getBundleBySlug = (slug) => {
  return bundles.find(bundle => bundle.slug === slug)
}
