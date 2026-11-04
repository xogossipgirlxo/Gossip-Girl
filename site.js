// =====================================================
//  CONFIG : c'est ici que tu règles ton blog
// =====================================================
const CONFIG = {
  // Nom du blog (change-le quand tu veux)
  nom: "Gossip Girl",
  // Signature à la fin de chaque post
  signature: "You know you love me. XOXO, Gossip Girl.",
  // Phrase sous le titre
  slogan: "You're nobody until you're talked about.",
  // Accroche affichée en début des posts de type "recap" (comme la voix off de la série)
  accroche: "Hey, Upper East Siders. Gossip Girl here.",
  // Lien de ta chaîne Telegram (pour les "blasts"). Laisse "" tant qu'elle n'existe pas.
  telegram: "",
  // Identifiant de ton formulaire Tally (la fin de l'URL tally.so/r/XXXXXX). Laisse "" tant que tu ne l'as pas créé.
  tallyId: "RWxXQK",
};

// =====================================================
//  POSTS : pour publier, ajoute un bloc EN HAUT de la liste
//  type  : "spotted" | "blast" | "news" | "recap"
//  date  : "AAAA-MM-JJ HH:MM" (heure locale)
//  tip   : true  -> affiche "Tip reçu d'un(e) lecteur·rice anonyme"
//  image : optionnel, ex. "images/photo1.jpg" (uniquement avec accord de la personne !)
// =====================================================
const POSTS = [
  {
    type: "blast",
    date: "2026-11-04 22:30",
    titre: "Bienvenue",
    texte: [
      "Bonsoir, vous qui murmurez dans les couloirs.",
      "Ce blog existe parce que vous parlez, et que quelqu'un doit écouter. Envoyez vos tips, je m'occupe du reste.",
    ],
  },
  {
    type: "spotted",
    date: "2026-11-04 21:10",
    titre: "Spotted",
    tip: true,
    texte: [
      "Un manteau rouge et un sourire en coin devant la librairie de la rue des Lilas, à 18h pile. Qui attendait qui ?",
      "(Exemple fictif : supprime ce post et publie les tiens.)",
    ],
  },
  {
    type: "recap",
    date: "2026-11-03 20:00",
    titre: "Le récap de la semaine",
    texte: [
      "Une semaine de plus, et déjà les secrets ont recommencé à circuler.",
      "Ce que je retiens : beaucoup de bruit, peu de vérité, et c'est exactement comme ça que je l'aime. Je continue de regarder.",
      "(Exemple fictif : supprime ce post et publie les tiens.)",
    ],
  },
  {
    type: "news",
    date: "2026-11-03 19:00",
    titre: "Rumeur de la semaine",
    texte: [
      "On dit qu'une certaine soirée de vendredi se prépare dans le plus grand secret. Les invitations seraient déjà parties. Les miennes se sont perdues, bien sûr.",
      "(Exemple fictif : supprime ce post et publie les tiens.)",
    ],
  },
];
