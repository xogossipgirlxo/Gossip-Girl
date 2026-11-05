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
    type: "spotted",
    date: "2026-11-05 01:04",
    titre: "Spotted",
    image: "images/photo2.jpeg",
    texte: [
      "B and S sharing the same steps again. Some friendships survive everything, but some secrets never really disappear. Is this a reunion or just another beautiful little performance? How lovely. 💄",
    ],
  },
  {
    type: "spotted",
    date: "2026-11-05 00:20",
    titre: "Spotted",
    image: "images/photo1.jpeg",
    tip: true,
    texte: [
      "S and N together? Well, well, well… Looks like someone has some explaining to do. Coincidence or something more? You know I’ll be watching. 💋",
    ],
  },
  {
    type: "blast",
    date: "2026-11-04 22:30",
    titre: "Welcome",
    texte: [
      "Good evening, all of you whispering in the hallways.",
      "This blog exists because you speak up, and someone has to listen. Send me your tips, and I'll take care of the rest.",
    ],
  },
  {
    type: "spotted",
    date: "2026-11-04 21:10",
    titre: "Spotted",
    tip: true,
    texte: [
      "A red coat and a mischievous smile outside a little bookstore on East 74th Street, at 6:00 p.m. sharp. Who was waiting for whom?",
    ],
  },
  {
    type: "recap",
    date: "2026-11-03 20:00",
    titre: "This Week's Recap",
    texte: [
      "Just one more week, and already the rumors have started circulating again.",
      "My takeaway: lots of hype, not much substance, and that's exactly how I like it. I'll keep watching.", 
    ],
  },
  {
    type: "news",
    date: "2026-11-03 19:00",
    titre: "Rumor of the Week",
    texte: [
      "Rumor has it that a certain Friday night party is being planned in the utmost secrecy. The invitations have apparently already been sent out. Mine got lost, of course.",
    ],
  },
];
