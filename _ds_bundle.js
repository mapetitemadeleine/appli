/* @ds-bundle: {"format":4,"namespace":"MaPetiteMadeleineDesignSystem_e1b54a","components":[{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"ExerciseBlock","sourcePath":"components/content/ExerciseBlock.jsx"},{"name":"VocabCard","sourcePath":"components/content/VocabCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DifficultyRating","sourcePath":"components/core/DifficultyRating.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"app/exercices.js":"53a9bca9507b","app/ios-frame.jsx":"24642b887be3","app/mpm-app.jsx":"8d51cbfb8829","components/content/Callout.jsx":"7d6f6e2d454a","components/content/Card.jsx":"c40f7ebeeed0","components/content/ExerciseBlock.jsx":"4243699b5b68","components/content/VocabCard.jsx":"27c405cc3d7c","components/core/Button.jsx":"cd4c9c595804","components/core/DifficultyRating.jsx":"26c29bc3df13","components/core/Divider.jsx":"d1da645d28c8","components/core/Tag.jsx":"8eb4be14ec19","data/hero-palette.js":"8bf11111da02","data/saints-1714.js":"71ee545d1884","exports/hippolyte/LiaisonsScroll.jsx":"720d24c763fd","exports/hippolyte/animations-v3.jsx":"06ae64d470d6","exports/tiktok/animations-v2.jsx":"33e9200b93f5","exports/tiktok/madeleine-scenes.jsx":"3f64a3590630","sw.js":"7e0bb830df5b","ui_kits/newsletter/ExerciseSection.jsx":"60a906b6f43c","ui_kits/newsletter/NewsletterHeader.jsx":"0608f3b0f791","ui_kits/newsletter/PostHero.jsx":"a490f809a793","ui_kits/newsletter/SubscribeFooter.jsx":"20fb2af12067","ui_kits/newsletter/VocabSection.jsx":"5bf73860302e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaPetiteMadeleineDesignSystem_e1b54a = window.MaPetiteMadeleineDesignSystem_e1b54a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// app/exercices.js
try { (() => {
// Tous les billets, par ordre chronologique. Source : les corrigés publiés.
// type: "choix" | "saisie" | "ecoute" (audio lu à voix haute) | "image"
window.MPM_EXERCICES = [{
  id: "vocabulaire-anaclet",
  date: "2026-07-13",
  saint: "Saint Anaclet",
  niveau: "b2",
  theme: "Vocabulaire",
  titre: "Les mots soutenus",
  accroche: "Sentiments, antonymes et locutions latines : le français des lettrés.",
  items: [{
    type: "choix",
    enonce: "La bienveillance est un sentiment…",
    options: ["positif", "négatif"],
    reponse: 0,
    note: "Bienveillance : vouloir du bien à autrui."
  }, {
    type: "choix",
    enonce: "L'acrimonie est un sentiment…",
    options: ["positif", "négatif"],
    reponse: 1,
    note: "L'acrimonie, c'est l'aigreur dans le propos."
  }, {
    type: "choix",
    enonce: "La mansuétude est un sentiment…",
    options: ["positif", "négatif"],
    reponse: 0,
    note: "La mansuétude, c'est la douceur indulgente."
  }, {
    type: "saisie",
    enonce: "Le contraire de « prodigue » :",
    reponse: ["économe"],
    note: "Prodigue dépense sans compter ; économe garde."
  }, {
    type: "saisie",
    enonce: "Le contraire de « éphémère » :",
    reponse: ["durable"],
    note: "Éphémère ne dure qu'un jour."
  }, {
    type: "choix",
    enonce: "« In extremis » signifie :",
    options: ["avant toute expérience", "au tout dernier moment", "par le fait même"],
    reponse: 1,
    note: "A priori = avant l'expérience ; ipso facto = par le fait même."
  }, {
    type: "choix",
    enonce: "On promulgue…",
    options: ["un traité", "une loi", "un prix"],
    reponse: 1,
    note: "On ratifie un traité, on décerne un prix."
  }, {
    type: "ecoute",
    enonce: "Écoutez, puis écrivez le verbe qui convient.",
    audio: "Le président va gracier un condamné.",
    reponse: ["gracier"],
    note: "Gracier un condamné : lui remettre sa peine."
  }],
  histoire: "Anaclet fut l'un des tout premiers évêques de Rome. On lui attribue l'usage d'écrire et de conserver les actes de la communauté : un homme d'archives."
}, {
  id: "proverbes-alexis",
  date: "2026-07-17",
  saint: "Saint Alexis",
  niveau: "b1",
  theme: "Vocabulaire",
  titre: "Expressions et proverbes",
  accroche: "Ce que la langue dit avec des images.",
  items: [{
    type: "choix",
    enonce: "« Avoir la tête dans les nuages » veut dire :",
    options: ["être distrait, rêveur", "être très grand", "être fier"],
    reponse: 0,
    note: "Le rêveur a la tête ailleurs."
  }, {
    type: "choix",
    enonce: "« Manger sur le pouce » veut dire :",
    options: ["manger salement", "prendre vite son repas, debout", "manger avec les doigts"],
    reponse: 1,
    note: "Sans s'asseoir, en vitesse."
  }, {
    type: "choix",
    enonce: "« Avoir la puce à l'oreille » veut dire :",
    options: ["entendre mal", "se douter de quelque chose", "être agacé"],
    reponse: 1,
    note: "Un soupçon vous est venu."
  }, {
    type: "choix",
    enonce: "« Mettre son grain de sel » veut dire :",
    options: ["donner son avis sans qu'on le demande", "assaisonner un plat", "faire une farce"],
    reponse: 0,
    note: "L'avis de trop."
  }, {
    type: "saisie",
    enonce: "Il pleut très fort : il pleut des ___",
    reponse: ["cordes", "des cordes"],
    note: "Il pleut des cordes."
  }, {
    type: "saisie",
    enonce: "Ne pas venir à un rendez-vous : poser un ___",
    reponse: ["lapin", "un lapin"],
    note: "Poser un lapin."
  }, {
    type: "choix",
    enonce: "« En faire tout un fromage » :",
    options: ["cuisiner longtemps", "exagérer l'importance d'une petite chose", "se vanter"],
    reponse: 1,
    note: "Beaucoup de bruit pour peu."
  }, {
    type: "ecoute",
    enonce: "Écoutez : que veut dire cette phrase ?",
    audio: "Ce matin, j'ai un chat dans la gorge.",
    options: ["Je suis enroué", "J'ai faim", "Je suis en colère"],
    reponse: 0,
    note: "Avoir un chat dans la gorge : être enroué."
  }],
  histoire: "Alexis quitta une maison riche pour vivre pauvre et inconnu. La légende dit qu'il revint chez lui sans se faire reconnaître et vécut sous l'escalier de la maison de son père."
}, {
  id: "lecture-clair",
  date: "2026-07-18",
  saint: "Saint Clair",
  niveau: "b1",
  theme: "Compréhension",
  titre: "Le chien perdu",
  accroche: "Lisez entre les lignes : ce que le texte dit, et ce qu'il ne dit pas.",
  items: [{
    type: "choix",
    enonce: "Pourquoi cherche-t-elle jusque dans la maison, où le chien n'entre jamais ?",
    options: ["Par habitude", "Parce que l'inquiétude la pousse à tout vérifier", "Parce qu'il y fait frais"],
    reponse: 1,
    note: "L'inquiétude fait chercher même où c'est impossible."
  }, {
    type: "choix",
    enonce: "Sa première explication est-elle prouvée ?",
    options: ["Oui, le texte la confirme", "Non, elle imagine une explication vraisemblable"],
    reponse: 1,
    note: "« Peut-être… c'est certainement cela » : c'est une supposition."
  }, {
    type: "choix",
    enonce: "Comment sait-elle que quelqu'un arrive ?",
    options: ["Elle le voit au loin", "Elle entend les sabots d'un cheval sur le chemin"],
    reponse: 1,
    note: "L'oreille avant l'œil."
  }, {
    type: "choix",
    enonce: "Vrai, faux, ou impossible à savoir : elle pense d'abord qu'il est parti au village.",
    options: ["Vrai", "Faux", "Impossible à savoir"],
    reponse: 1,
    note: "Faux : elle pense qu'il a suivi le troupeau et s'est perdu dans les bois."
  }, {
    type: "choix",
    enonce: "Vrai, faux, ou impossible à savoir : on l'a trouvé près d'un cours d'eau.",
    options: ["Vrai", "Faux", "Impossible à savoir"],
    reponse: 0,
    note: "Vrai : « trouvé près d'un ruisseau »."
  }, {
    type: "choix",
    enonce: "Vrai, faux, ou impossible à savoir : il a mangé de la farine.",
    options: ["Vrai", "Faux", "Impossible à savoir"],
    reponse: 2,
    note: "On sait seulement qu'il est resté couché près des sacs."
  }, {
    type: "choix",
    enonce: "À la fin, pourquoi le chien aboie-t-il joyeusement ?",
    options: ["Il a faim", "Il aime les escapades et veut repartir", "Il a peur de la charrette"],
    reponse: 1,
    note: "« Déjà prêt à repartir »."
  }],
  histoire: "Clair fut ermite en Normandie. Son nom dit la lumière, et l'on venait le consulter pour les maux des yeux."
}, {
  id: "dialogue-marguerite",
  date: "2026-07-20",
  saint: "Sainte Marguerite",
  niveau: "a2",
  theme: "Compréhension",
  titre: "Au restaurant",
  accroche: "Le dialogue d'un client et d'un serveur, à remettre dans l'ordre.",
  items: [{
    type: "ecoute",
    enonce: "Le client commence. Que dit-il ?",
    audio: "Excusez-moi, Monsieur, s'il vous plaît !",
    options: ["Excusez-moi, Monsieur, s'il vous plaît !", "L'addition, s'il vous plaît.", "Bonsoir, une table pour deux."],
    reponse: 0,
    note: "On appelle d'abord poliment."
  }, {
    type: "choix",
    enonce: "Le serveur répond :",
    options: ["Oui, je vous écoute. Il y a un problème ?", "Je n'ai pas le temps.", "Le menu est là."],
    reponse: 0,
    note: "Formule d'accueil courante."
  }, {
    type: "choix",
    enonce: "Le client explique :",
    options: ["Ce n'est pas le plat que j'ai commandé.", "C'est trop froid.", "Je voudrais payer."],
    reponse: 0,
    note: "On dit le problème simplement."
  }, {
    type: "saisie",
    enonce: "Le serveur s'excuse : « Oh, toutes mes ___ »",
    reponse: ["excuses", "toutes mes excuses"],
    note: "Toutes mes excuses."
  }, {
    type: "ecoute",
    enonce: "Qu'avait commandé le client ?",
    audio: "J'ai commandé du saumon avec du riz et des haricots verts.",
    options: ["Du saumon", "Du bœuf en sauce", "Une salade"],
    reponse: 0,
    note: "C'était le plat du jour."
  }, {
    type: "choix",
    enonce: "Avec le saumon, que conseille le serveur ?",
    options: ["Un vin rouge de Bourgogne", "Un vin blanc d'Alsace, un Riesling", "Une bière"],
    reponse: 1,
    note: "Un blanc vif accompagne le poisson."
  }],
  histoire: "Marguerite gardait les brebis avant d'être connue. On la fête au cœur de l'été, quand les troupeaux montent vers les hauteurs."
}, {
  id: "negation-victor",
  date: "2026-07-21",
  saint: "Saint Victor",
  niveau: "b1",
  theme: "Grammaire",
  titre: "La négation",
  accroche: "Personne, rien, jamais, nulle part : la place de chaque mot.",
  items: [{
    type: "saisie",
    enonce: "Contraire : « Le directeur reçoit quelqu'un ce matin. » → Le directeur ___ ce matin.",
    reponse: ["ne reçoit personne", "ne reçoit personne ce matin"],
    note: "Personne remplace quelqu'un, après le verbe."
  }, {
    type: "choix",
    enonce: "Contraire de « Nous passons un concours au printemps. »",
    options: ["Nous ne passons pas un concours", "Nous ne passons aucun concours", "Nous ne passons rien"],
    reponse: 1,
    note: "Aucun se substitue à l'article."
  }, {
    type: "saisie",
    enonce: "Contraire : « Mon frère a toujours raison. » → Mon frère ___ raison.",
    reponse: ["n'a jamais", "n'a jamais raison"],
    note: "Jamais s'installe entre l'auxiliaire et le participe."
  }, {
    type: "choix",
    enonce: "« Au marché, on trouve du thé et du café. » Au négatif :",
    options: ["on ne trouve pas de thé et de café", "on ne trouve ni thé ni café"],
    reponse: 1,
    note: "Ni… ni… supprime les deux articles."
  }, {
    type: "saisie",
    enonce: "« Je me sens bien partout. » → Je ne me sens bien ___",
    reponse: ["nulle part"],
    note: "Nulle part se place après le verbe conjugué et son complément."
  }, {
    type: "choix",
    enonce: "« Il reste du gâteau. » Au négatif :",
    options: ["Il ne reste plus de gâteau", "Il ne reste pas du gâteau"],
    reponse: 0,
    note: "Plus marque la fin ; de remplace du."
  }, {
    type: "saisie",
    enonce: "Au passé composé : « Il ne vient plus jamais. » → Il ___ venu.",
    reponse: ["n'est plus jamais"],
    note: "Les deux adverbes se placent avant le participe."
  }, {
    type: "ecoute",
    enonce: "Écoutez, puis répondez au négatif : « Avez-vous rencontré quelqu'un ? »",
    audio: "Avez-vous rencontré quelqu'un ce matin ?",
    reponse: ["non, je n'ai rencontré personne", "je n'ai rencontré personne"],
    note: "Personne se place après le participe passé."
  }],
  histoire: "Victor était officier à Marseille. Il refusa les honneurs qu'on lui offrait pour rester fidèle à sa parole donnée."
}, {
  id: "subjonctif-madeleine",
  date: "2026-07-22",
  saint: "Sainte Madeleine",
  niveau: "b1",
  theme: "Conjugaison",
  titre: "Le subjonctif présent",
  accroche: "Après le doute et le souhait : le subjonctif.",
  items: [{
    type: "saisie",
    enonce: "Il faut que tu ___ (finir) tes devoirs avant le dîner.",
    reponse: ["finisses"],
    note: "Deuxième groupe : finisse, finisses, finisse…"
  }, {
    type: "saisie",
    enonce: "Je veux que vous ___ (être) à l'heure demain matin.",
    reponse: ["soyez"],
    note: "Être : que je sois, que vous soyez."
  }, {
    type: "saisie",
    enonce: "Bien qu'il ___ (faire) froid, elle sort sans manteau.",
    reponse: ["fasse"],
    note: "Bien que demande toujours le subjonctif."
  }, {
    type: "saisie",
    enonce: "Je doute qu'ils ___ (savoir) la vérité.",
    reponse: ["sachent"],
    note: "Savoir : que je sache, qu'ils sachent."
  }, {
    type: "saisie",
    enonce: "Il vaut mieux que tu ___ (prendre) le train.",
    reponse: ["prennes"],
    note: "Prendre : que je prenne, que nous prenions."
  }, {
    type: "choix",
    enonce: "Je pense que tu ___ raison.",
    options: ["as (indicatif)", "aies (subjonctif)"],
    reponse: 0,
    note: "Après la certitude, l'indicatif."
  }, {
    type: "choix",
    enonce: "Je ne pense pas que tu ___ raison.",
    options: ["as (indicatif)", "aies (subjonctif)"],
    reponse: 1,
    note: "La négation introduit le doute : subjonctif."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le verbe au subjonctif.",
    audio: "J'aimerais que nous allions au bord de la mer cet été.",
    reponse: ["allions", "nous allions"],
    note: "Aller : que nous allions."
  }],
  histoire: "Madeleine fut la première à trouver le tombeau vide. On la représente souvent avec un flacon de parfum, en souvenir du geste de reconnaissance qu'on lui prête."
}, {
  id: "vacances-apollinaire",
  date: "2026-07-23",
  saint: "Saint Apollinaire",
  niveau: "b1",
  theme: "Vocabulaire",
  titre: "Le vocabulaire des vacances",
  accroche: "Villégiature, farniente, embruns : les beaux mots de l'été.",
  items: [{
    type: "saisie",
    enonce: "Une personne qui part en vacances au mois de juillet est un ___",
    reponse: ["juillettiste", "un juillettiste"],
    note: "Et celle qui part en août est un aoûtien."
  }, {
    type: "choix",
    enonce: "« Balnéaire » se rapporte…",
    options: ["aux bains, à la mer", "à la montagne", "à la campagne"],
    reponse: 0,
    note: "Une station balnéaire est au bord de l'eau."
  }, {
    type: "saisie",
    enonce: "La bande de terre le long de la mer : le ___",
    reponse: ["littoral", "le littoral"],
    note: "Le littoral."
  }, {
    type: "saisie",
    enonce: "Ne rien faire, avec délices : le ___",
    reponse: ["farniente", "le farniente"],
    note: "De l'italien far niente."
  }, {
    type: "choix",
    enonce: "Un « périple », c'est :",
    options: ["un long voyage avec des étapes", "une courte promenade", "un retard"],
    reponse: 0,
    note: "Et l'escale est l'arrêt du voyage."
  }, {
    type: "saisie",
    enonce: "Les gouttelettes salées portées par le vent : les ___",
    reponse: ["embruns", "les embruns"],
    note: "Les embruns."
  }, {
    type: "choix",
    enonce: "L'ouïe, c'est le sens de…",
    options: ["voir et regarder", "entendre et écouter", "sentir et humer"],
    reponse: 1,
    note: "La vue, l'ouïe, l'odorat, le goût, le toucher."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le mot qui manque.",
    audio: "Nous avons passé l'été en villégiature au bord de la mer.",
    reponse: ["villégiature", "en villégiature"],
    note: "La villégiature : le séjour de repos."
  }],
  histoire: "Apollinaire fut évêque de Ravenne, ville des mosaïques et des marais. Il connut la mer toute sa vie."
}, {
  id: "caniculaires",
  date: "2026-07-24",
  saint: "Jours Caniculaires",
  niveau: "a2",
  theme: "Compréhension",
  titre: "Un appel un jour de canicule",
  accroche: "Julien téléphone à Camille. Écoutez bien.",
  items: [{
    type: "ecoute",
    enonce: "D'où Julien téléphone-t-il ?",
    audio: "Oui, ici à Lyon, il fait trente-huit degrés !",
    options: ["De Paris", "De Lyon", "D'Avignon"],
    reponse: 1,
    note: "Trente-huit degrés à Lyon."
  }, {
    type: "ecoute",
    enonce: "Quelle température fait-il à Avignon ?",
    audio: "Oh là là, presque quarante ! Je reste à la maison, les volets fermés toute la journée.",
    options: ["Trente-huit degrés", "Presque quarante degrés", "Trente degrés"],
    reponse: 1,
    note: "Presque quarante."
  }, {
    type: "choix",
    enonce: "Que fait Camille pendant la journée ?",
    options: ["Elle sort se promener", "Elle reste chez elle, les volets fermés", "Elle va à la piscine"],
    reponse: 1,
    note: "Les volets fermés gardent la fraîcheur."
  }, {
    type: "ecoute",
    enonce: "Que fait Julien pour supporter la chaleur ?",
    audio: "Moi, je bois beaucoup d'eau et je sors seulement le soir.",
    options: ["Il boit beaucoup d'eau et sort le soir", "Il dort toute la journée", "Il prend des douches froides"],
    reponse: 0,
    note: "Boire et éviter les heures chaudes."
  }, {
    type: "choix",
    enonce: "Qu'annonce-t-on pour dimanche ?",
    options: ["Encore de la chaleur", "Un orage", "De la pluie toute la semaine"],
    reponse: 1,
    note: "Enfin un peu de fraîcheur."
  }, {
    type: "saisie",
    enonce: "Cet après-midi, Julien va à la ___ avec les enfants.",
    reponse: ["piscine", "à la piscine", "la piscine"],
    note: "À la piscine."
  }],
  histoire: "Les Jours Caniculaires vont du vingt-quatre juillet au vingt-six août. On les nomme ainsi d'après Sirius, l'étoile du Chien, qui se lève alors avec le soleil."
}, {
  id: "comparatifs-pantaleon",
  date: "2026-07-27",
  saint: "Saint Pantaléon",
  niveau: "a2",
  theme: "Grammaire",
  titre: "Plus, moins, autant",
  accroche: "Comparer sans se tromper de mot.",
  items: [{
    type: "choix",
    enonce: "Romans : 84 lecteurs. Poésie : 20. Il y a ___ lecteurs de romans que de poésie.",
    options: ["plus de", "moins de", "autant de"],
    reponse: 0,
    note: "Plus de… que de… devant un nom."
  }, {
    type: "choix",
    enonce: "Bandes dessinées : 56. Livres pratiques : 56. Les lecteurs sont ___",
    options: ["plus nombreux", "aussi nombreux", "moins nombreux"],
    reponse: 1,
    note: "Aussi… que… devant un adjectif."
  }, {
    type: "saisie",
    enonce: "Biographies : 38. Romans : 84. Il y a ___ lecteurs de biographies que de romans.",
    reponse: ["moins de", "moins"],
    note: "Moins de… que de…"
  }, {
    type: "choix",
    enonce: "Devant un nom, on écrit :",
    options: ["plus nombreux que", "plus de … que de"],
    reponse: 1,
    note: "Nom : plus de. Adjectif : plus… que."
  }, {
    type: "saisie",
    enonce: "Livres pratiques : 56. Bandes dessinées : 56. Il y a ___ lecteurs de livres pratiques que de bandes dessinées.",
    reponse: ["autant de", "autant"],
    note: "Autant de marque l'égalité."
  }, {
    type: "ecoute",
    enonce: "Écoutez : la comparaison est-elle juste ?",
    audio: "Les lecteurs de poésie sont moins nombreux que les lecteurs de biographies.",
    options: ["Oui : 20 contre 38", "Non"],
    reponse: 0,
    note: "Vingt contre trente-huit."
  }],
  histoire: "Pantaléon était médecin à Nicomédie et soignait les pauvres sans se faire payer. On l'invoque encore chez les gens de l'art."
}, {
  id: "progression-anne",
  date: "2026-07-28",
  saint: "Sainte Anne",
  niveau: "b1",
  theme: "Grammaire",
  titre: "De A1 à C2, marche par marche",
  accroche: "Six niveaux, six questions : jusqu'où irez-vous ?",
  items: [{
    type: "choix",
    enonce: "A1 — Sophie est la fille de mon oncle. C'est ma ___ préférée.",
    options: ["sœur", "cousine", "tante"],
    reponse: 1,
    note: "La fille de l'oncle est la cousine."
  }, {
    type: "saisie",
    enonce: "A1 — Écrivez 1856 en toutes lettres.",
    reponse: ["mille huit cent cinquante-six"],
    note: "Cent et vingt ne prennent pas de s ici."
  }, {
    type: "choix",
    enonce: "A1 — Pouvez-vous me ___ avant dix-huit heures ?",
    options: ["rappelez", "rappeler", "rappelé"],
    reponse: 1,
    note: "Après un verbe modal, l'infinitif."
  }, {
    type: "choix",
    enonce: "A2 — À cet instant, la jeune fille ___ du jardin en courant.",
    options: ["a sorti", "est sortie", "est sorti"],
    reponse: 1,
    note: "Sortir, verbe de mouvement : être, et accord avec le sujet."
  }, {
    type: "choix",
    enonce: "B1 — Après « bien que », on emploie :",
    options: ["l'indicatif", "le subjonctif"],
    reponse: 1,
    note: "Bien qu'il fasse froid…"
  }, {
    type: "ecoute",
    enonce: "B2 — Écoutez et écrivez le mot manquant.",
    audio: "Il a agi avec une grande mansuétude envers son adversaire.",
    reponse: ["mansuétude"],
    note: "La mansuétude : la douceur indulgente."
  }],
  histoire: "Anne est la mère de Marie, la grand-mère de l'histoire sainte. En Bretagne, on lui bâtit des chapelles au bord des chemins."
}, {
  id: "orthographe-marthe",
  date: "2026-07-29",
  saint: "Sainte Marthe",
  niveau: "b1",
  theme: "Orthographe",
  titre: "Une consonne ou deux ?",
  accroche: "Les pièges de l'œil : doubles consonnes et accents.",
  items: [{
    type: "choix",
    enonce: "Choisissez la bonne graphie :",
    options: ["appeller", "appeler", "apeler"],
    reponse: 1,
    note: "Deux p, un seul l à l'infinitif."
  }, {
    type: "choix",
    enonce: "Choisissez la bonne graphie :",
    options: ["professionel", "professionnel"],
    reponse: 1,
    note: "Deux n."
  }, {
    type: "choix",
    enonce: "Choisissez la bonne graphie :",
    options: ["envelope", "enveloppe"],
    reponse: 1,
    note: "Deux p."
  }, {
    type: "saisie",
    enonce: "Le chat pose sa ___ en jouant sur la pâte à tarte.",
    reponse: ["patte"],
    note: "La patte de l'animal, sans accent ; la pâte du boulanger, avec."
  }, {
    type: "saisie",
    enonce: "Ton écharpe ? Elle est ___ , tu l'as oubliée sur le banc.",
    reponse: ["là"],
    note: "Là, adverbe de lieu, prend l'accent."
  }, {
    type: "choix",
    enonce: "Le soir, on n'entre pas dans un bar avec une ___ de fer.",
    options: ["bar", "barre"],
    reponse: 1,
    note: "La barre de fer, deux r."
  }, {
    type: "saisie",
    enonce: "Dès le mois de ___ , elle a fait son premier essai.",
    reponse: ["mai"],
    note: "Mai, le mois ; mais, la conjonction ; mets, du verbe mettre."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le dernier mot.",
    audio: "Elle a travaillé sans arrêt.",
    reponse: ["arrêt", "sans arrêt"],
    note: "Arrêt, avec un accent circonflexe et deux r."
  }],
  histoire: "Marthe recevait les voyageurs dans sa maison de Béthanie. On la dit active et pratique, la patronne de ceux qui tiennent maison."
}, {
  id: "varie-abdon",
  date: "2026-07-30",
  saint: "Saint Abdon",
  niveau: "b1",
  theme: "Vocabulaire",
  titre: "Du nom à l'adjectif",
  accroche: "Dériver, mesurer, opposer : trois exercices en un.",
  items: [{
    type: "saisie",
    enonce: "la révolution → l'adjectif : ___",
    reponse: ["révolutionnaire"],
    note: "Suffixe -aire."
  }, {
    type: "saisie",
    enonce: "le courage → l'adjectif : ___",
    reponse: ["courageux"],
    note: "Suffixe -eux."
  }, {
    type: "saisie",
    enonce: "la province → l'adjectif : ___",
    reponse: ["provincial"],
    note: "Suffixe -al."
  }, {
    type: "choix",
    enonce: "la mémoire → l'adjectif :",
    options: ["mémoriel", "mémorable", "mémoreux"],
    reponse: 1,
    note: "Mémorable : dont on se souvient."
  }, {
    type: "choix",
    enonce: "« Un tiers des personnes », c'est environ :",
    options: ["25 %", "33 %", "50 %"],
    reponse: 1,
    note: "Un tiers = 33 %."
  }, {
    type: "choix",
    enonce: "« Les trois quarts des personnes », c'est :",
    options: ["75 %", "49 %", "66 %"],
    reponse: 0,
    note: "Trois quarts = 75 %."
  }, {
    type: "choix",
    enonce: "« À peine la moitié », c'est :",
    options: ["51 %", "49 %", "60 %"],
    reponse: 1,
    note: "À peine : juste en dessous."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez l'adjectif entendu.",
    audio: "Ce fut une victoire éclatante : un retour victorieux.",
    reponse: ["victorieux"],
    note: "la victoire → victorieux."
  }],
  histoire: "Abdon vint de Perse à Rome. On raconte qu'il recueillait discrètement les corps des suppliciés pour leur donner une sépulture."
}, {
  id: "conjugaison-germain",
  date: "2026-07-31",
  saint: "Saint Germain",
  niveau: "b1",
  theme: "Conjugaison",
  titre: "Deux passés, un futur",
  accroche: "Le passé composé pour l'événement, l'imparfait pour le décor, le futur pour la suite.",
  items: [{
    type: "saisie",
    enonce: "Hier, un imprévu ___ (survenir) pendant la réunion.",
    reponse: ["est survenu"],
    note: "Survenir se conjugue avec être."
  }, {
    type: "saisie",
    enonce: "Les ingénieurs ___ (résoudre) enfin le problème.",
    reponse: ["ont résolu"],
    note: "Participe passé irrégulier : résolu."
  }, {
    type: "saisie",
    enonce: "Après un long effort, elle ___ (atteindre) le sommet.",
    reponse: ["a atteint"],
    note: "Avec avoir, pas d'accord ici : le complément suit le verbe."
  }, {
    type: "choix",
    enonce: "Les voisins ___ (se plaindre) du bruit toute la nuit.",
    options: ["ont plaint", "se sont plaints", "se sont plaint"],
    reponse: 1,
    note: "Verbe pronominal : auxiliaire être, accord avec le sujet."
  }, {
    type: "saisie",
    enonce: "Chaque hiver, nous ___ (voyager) vers la montagne.",
    reponse: ["voyagions"],
    note: "Imparfait : l'habitude, le décor."
  }, {
    type: "saisie",
    enonce: "Futur simple — je (courir) : ___",
    reponse: ["courrai", "je courrai"],
    note: "Deux r au futur : courrai."
  }, {
    type: "choix",
    enonce: "Futur simple — il (falloir) :",
    options: ["il faudra", "il fallera", "il faudrait"],
    reponse: 0,
    note: "Radical irrégulier faudr-."
  }, {
    type: "ecoute",
    enonce: "Écoutez, puis écrivez le verbe conjugué.",
    audio: "Elles recevront une lettre demain matin.",
    reponse: ["recevront", "elles recevront"],
    note: "Recevoir fait recevr- au futur."
  }],
  histoire: "Germain fut évêque d'Auxerre. On raconte qu'il quitta une vie de chasse et de fêtes pour se mettre au service des pauvres, et qu'il traversa la mer deux fois pour aller enseigner en Bretagne."
}, {
  id: "vocabulaire-pierre",
  date: "2026-08-01",
  saint: "Saint Pierre",
  niveau: "a2",
  theme: "Vocabulaire",
  titre: "Le mot juste, en images",
  accroche: "Regardez l'image, écrivez le mot. Pensez à l'article.",
  items: [{
    type: "image",
    enonce: "Elle a des tentacules.",
    image: "uploads/tweetybirdhorizon_une_pieuvre_--chaos_25_--ar_11_--profile_au_af8206f9-e126-40b4-8aa9-bb6ad8f01a15_0.png",
    reponse: ["une pieuvre", "la pieuvre", "pieuvre"],
    note: "Une pieuvre — on dit aussi un poulpe."
  }, {
    type: "image",
    enonce: "Il dort en nageant.",
    image: "uploads/tweetybirdhorizon_un_requin_--chaos_25_--ar_11_--sref_httpss._34961576-465e-4f53-a8b0-34cdbfeb9d7b_1.png",
    reponse: ["un requin", "le requin", "requin"],
    note: "Un requin."
  }, {
    type: "image",
    enonce: "Elle est rouge et verte.",
    image: "uploads/tweetybirdhorizon_une_pastque_--chaos_25_--ar_11_--sref_https_b33eb6dc-1f32-403d-b8ba-43ad9fb816d9_1.png",
    reponse: ["une pastèque", "la pastèque", "pastèque"],
    note: "Une pastèque, le fruit de l'été."
  }, {
    type: "image",
    enonce: "Quand il pleut, elle met ses…",
    image: "uploads/tweetybirdhorizon_des_bottes_--chaos_25_--ar_11_--sref_httpss_cb8c3b6c-3c82-40f4-a46a-31abc7e515b9_2.png",
    reponse: ["des bottes", "les bottes", "bottes"],
    note: "Des bottes — toujours au pluriel, comme les chaussures."
  }, {
    type: "image",
    enonce: "Il plante un clou avec…",
    image: "uploads/tweetybirdhorizon_un_marteau_--chaos_25_--ar_11_--sref_httpss_44911ecf-1df2-4e17-865a-67a4c5b500f0_0.png",
    reponse: ["un marteau", "le marteau", "marteau"],
    note: "Un marteau."
  }, {
    type: "image",
    enonce: "Elle fait du miel.",
    image: "uploads/tweetybirdhorizon_une_abeille_--chaos_25_--ar_11_--sref_https_37854e78-7243-4686-9115-b1e0c318b085_3.png",
    reponse: ["une abeille", "l'abeille", "abeille"],
    note: "Une abeille. Attention : l'abeille, avec élision."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le mot qui manque.",
    audio: "Il ferme son pantalon avec une ceinture.",
    reponse: ["une ceinture", "ceinture", "la ceinture"],
    note: "Une ceinture."
  }, {
    type: "image",
    enonce: "Elle est rouge à points noirs.",
    image: "uploads/tweetybirdhorizon_une_coccinelle_--chaos_25_--ar_11_--sref_ht_f152c076-7fa3-4d02-a65f-7d16c394276d_0.png",
    reponse: ["une coccinelle", "la coccinelle", "coccinelle"],
    note: "Une coccinelle, la bête à bon Dieu."
  }],
  histoire: "Pierre était pêcheur sur le lac de Galilée. Son nom veut dire la pierre : celle sur laquelle on bâtit. On le représente souvent avec des clés à la main."
}, {
  id: "pluriel-etienne",
  date: "2026-08-03",
  saint: "Saint Étienne",
  niveau: "b1",
  theme: "Orthographe",
  titre: "Le pluriel des noms",
  accroche: "Un s, un x, ou rien du tout ?",
  items: [{
    type: "saisie",
    enonce: "un journal → des ___",
    reponse: ["journaux"],
    note: "Les noms en -al font -aux."
  }, {
    type: "saisie",
    enonce: "un bijou → des ___",
    reponse: ["bijoux"],
    note: "Bijou, caillou, chou, genou, hibou, joujou, pou prennent un x."
  }, {
    type: "saisie",
    enonce: "un pneu → des ___",
    reponse: ["pneus"],
    note: "Pneu et bleu font exception aux mots en -eu."
  }, {
    type: "saisie",
    enonce: "un œil → des ___",
    reponse: ["yeux"],
    note: "Pluriel irrégulier."
  }, {
    type: "choix",
    enonce: "un festival → des…",
    options: ["festivaux", "festivals"],
    reponse: 1,
    note: "Bal, carnaval, festival, récital gardent le s."
  }, {
    type: "choix",
    enonce: "Pour leur anniversaire, mes … ont reçu deux … et des … .",
    options: ["neveus / jeus / cadeaus", "neveux / jeux / cadeaux", "neveux / jeus / cadeaux"],
    reponse: 1,
    note: "Les mots en -eu et -eau prennent un x."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le pluriel du dernier mot.",
    audio: "Le vitrail bleu de la cathédrale. Au pluriel : les vitraux.",
    reponse: ["vitraux", "les vitraux"],
    note: "Vitrail suit la série travail, corail, émail."
  }],
  histoire: "Étienne fut le premier des diacres, chargé du service des tables et du soin des veuves. On le dit doux et clair dans sa parole."
}, {
  id: "marche-dominique",
  date: "2026-08-04",
  saint: "Saint Dominique",
  niveau: "a2",
  theme: "Compréhension",
  titre: "Le marché de Perrine",
  accroche: "Ce qu'elle achète, ce qu'elle paye, ce qu'on ne sait pas.",
  items: [{
    type: "choix",
    enonce: "Le lard est-il cité dans le texte ?",
    options: ["Oui", "Non"],
    reponse: 0,
    note: "Le lard, le beurre, les poireaux, les cerises, les carottes, le fromage, les pommes, les oignons, les prunes et le saucisson."
  }, {
    type: "choix",
    enonce: "Les tomates sont-elles citées ?",
    options: ["Oui", "Non"],
    reponse: 1,
    note: "Ni tomates, ni oranges, ni raisin, ni salade."
  }, {
    type: "choix",
    enonce: "Pourquoi part-elle au marché ?",
    options: ["Pour voir ses amies", "Il ne reste plus rien à manger à la maison", "Pour vendre ses œufs"],
    reponse: 1,
    note: "C'est dit dès la première ligne."
  }, {
    type: "choix",
    enonce: "Vrai ou faux : le beurre est le produit le plus cher.",
    options: ["Vrai", "Faux"],
    reponse: 0,
    note: "Douze sous, contre sept pour le lard et cinq pour le fromage."
  }, {
    type: "choix",
    enonce: "Vrai, faux, ou impossible à savoir : elle achète des pommes pour faire une tarte.",
    options: ["Vrai", "Faux", "Impossible à savoir"],
    reponse: 2,
    note: "Le texte dit qu'elle en achète, jamais pourquoi."
  }, {
    type: "ecoute",
    enonce: "Écoutez : quel jour sommes-nous ?",
    audio: "Aujourd'hui, c'est samedi, jour de marché.",
    reponse: ["samedi"],
    note: "Samedi, jour de marché."
  }],
  histoire: "Dominique parcourait les routes à pied, sans bagage, pour aller parler aux gens des villages. On disait de lui qu'il causait volontiers avec tout le monde."
}, {
  id: "modaux-transfiguration",
  date: "2026-08-06",
  saint: "La Transfiguration",
  niveau: "a2",
  theme: "Conjugaison",
  titre: "Les verbes modaux",
  accroche: "Pouvoir, vouloir, devoir, savoir : de La Rochelle à Québec.",
  items: [{
    type: "saisie",
    enonce: "Sur le quai, le jeune Antoine ___ (vouloir) devenir marin.",
    reponse: ["veut"],
    note: "je veux, tu veux, il veut."
  }, {
    type: "saisie",
    enonce: "« ___ -tu monter jusqu'en haut du mât ? » (savoir)",
    reponse: ["sais"],
    note: "je sais, tu sais, il sait."
  }, {
    type: "saisie",
    enonce: "S'il veut s'engager, Antoine ___ (devoir) vivre sans confort.",
    reponse: ["doit"],
    note: "je dois, tu dois, il doit."
  }, {
    type: "choix",
    enonce: "« Vous ___ monter à bord dès ce soir. »",
    options: ["pouvez", "pouvoirez", "pouvons"],
    reponse: 0,
    note: "nous pouvons, vous pouvez, ils peuvent."
  }, {
    type: "saisie",
    enonce: "Pendant la tempête, les marins n'ont pas ___ dormir. (pouvoir)",
    reponse: ["pu"],
    note: "Participe passé : pu."
  }, {
    type: "saisie",
    enonce: "Antoine a ___ apprendre très vite à grimper. (devoir)",
    reponse: ["dû"],
    note: "Participe passé : dû, avec accent circonflexe."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le verbe conjugué.",
    audio: "Nous ne voulons pas retarder le départ, la marée n'attend pas.",
    reponse: ["voulons", "nous voulons"],
    note: "nous voulons, vous voulez, ils veulent."
  }],
  histoire: "La Transfiguration se fête au cœur de l'été. On y célèbre une lumière vue sur une montagne, et les marins d'autrefois y voyaient un bon présage."
}, {
  id: "geographie-cyriaque",
  date: "2026-08-08",
  saint: "Saint Cyriaque",
  niveau: "a2",
  theme: "Vocabulaire",
  titre: "Pays et nationalités",
  accroche: "Le féminin ajoute souvent un -e, mais pas toujours.",
  items: [{
    type: "saisie",
    enonce: "le Portugal → il est ___",
    reponse: ["portugais"],
    note: "Et elle est portugaise."
  }, {
    type: "saisie",
    enonce: "l'Autriche → elle est ___",
    reponse: ["autrichienne"],
    note: "La consonne double : autrichien, autrichienne."
  }, {
    type: "choix",
    enonce: "la Bulgarie → elle est…",
    options: ["bulgarienne", "bulgare", "bulgaraise"],
    reponse: 1,
    note: "Bulgare ne change pas au féminin."
  }, {
    type: "saisie",
    enonce: "le Tchad → elle est ___",
    reponse: ["tchadienne"],
    note: "tchadien, tchadienne."
  }, {
    type: "choix",
    enonce: "le Burkina Faso → il est…",
    options: ["burkinais", "burkinabè"],
    reponse: 1,
    note: "Burkinabè, invariable."
  }, {
    type: "saisie",
    enonce: "la Corée → elle est ___",
    reponse: ["coréenne"],
    note: "coréen, coréenne."
  }, {
    type: "saisie",
    enonce: "le Mexique → il est ___",
    reponse: ["mexicain"],
    note: "mexicain, mexicaine."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez la nationalité au féminin.",
    audio: "Elle vient de Hongrie : elle est hongroise.",
    reponse: ["hongroise"],
    note: "hongrois, hongroise."
  }],
  histoire: "Cyriaque était diacre à Rome et servait les malades. On le représente souvent portant un seau d'eau."
}, {
  id: "plage-laurent",
  date: "2026-08-10",
  saint: "Saint Laurent",
  niveau: "a2",
  theme: "Grammaire",
  titre: "La plage et le conditionnel",
  accroche: "Si j'avais un parasol… Le conditionnel après « si ».",
  items: [{
    type: "saisie",
    enonce: "On l'ouvre pour se protéger du soleil : un ___",
    reponse: ["parasol", "un parasol"],
    note: "Un parasol."
  }, {
    type: "saisie",
    enonce: "On les met aux pieds pour marcher sur le sable chaud : des ___",
    reponse: ["tongs", "des tongs"],
    note: "Des tongs."
  }, {
    type: "saisie",
    enonce: "Si j'avais un parasol, je n' ___ (attraper) pas de coup de soleil.",
    reponse: ["attraperais"],
    note: "Après si + imparfait, le conditionnel."
  }, {
    type: "choix",
    enonce: "Nous ___ tellement mieux à l'ombre !",
    options: ["serions", "serons", "soyons"],
    reponse: 0,
    note: "Conditionnel : radical du futur + terminaisons de l'imparfait."
  }, {
    type: "saisie",
    enonce: "À ta place, je ___ (louer) aussi une chaise longue.",
    reponse: ["louerais"],
    note: "je louerais, tu louerais."
  }, {
    type: "choix",
    enonce: "___ crème solaire sent bon la noix de coco.",
    options: ["Ce", "Cette", "Ces"],
    reponse: 1,
    note: "Crème est féminin singulier."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le verbe au conditionnel.",
    audio: "Avec un peu de crème solaire, tu pourrais rester au soleil.",
    reponse: ["pourrais", "tu pourrais"],
    note: "pouvoir → je pourrais."
  }],
  histoire: "Laurent était diacre à Rome et gardait les biens destinés aux pauvres. Quand on lui demanda les trésors de l'Église, il montra les pauvres eux-mêmes."
}, {
  id: "temporelles-suzanne",
  date: "2026-08-11",
  saint: "Sainte Suzanne",
  niveau: "b1",
  theme: "Grammaire",
  titre: "Les propositions temporelles",
  accroche: "Avant que veut le subjonctif ; quand veut l'indicatif.",
  items: [{
    type: "choix",
    enonce: "Après « avant que », on emploie :",
    options: ["l'indicatif", "le subjonctif"],
    reponse: 1,
    note: "Avant que et en attendant que : subjonctif."
  }, {
    type: "choix",
    enonce: "Après « quand », « lorsque », « après que », on emploie :",
    options: ["l'indicatif", "le subjonctif"],
    reponse: 0,
    note: "Le fait est posé comme réel."
  }, {
    type: "saisie",
    enonce: "Le malade gardera la chambre en attendant que la fièvre ___ (tomber).",
    reponse: ["tombe"],
    note: "En attendant que + subjonctif."
  }, {
    type: "choix",
    enonce: "L'apprenti ouvrira son atelier dès lors qu'il ___ son apprentissage.",
    options: ["aura terminé", "ait terminé"],
    reponse: 0,
    note: "Dès lors que + indicatif ; futur antérieur pour l'antériorité."
  }, {
    type: "choix",
    enonce: "Devant un infinitif, on emploie :",
    options: ["avant que", "avant de"],
    reponse: 1,
    note: "Avant de sortir, couvrez-vous."
  }, {
    type: "saisie",
    enonce: "Nul n'a pu le retenir ___ sa décision prise.",
    reponse: ["une fois"],
    note: "Une fois + participe."
  }, {
    type: "ecoute",
    enonce: "Écoutez : indicatif ou subjonctif ?",
    audio: "Je relirai mes leçons de latin en attendant que le maître revienne.",
    options: ["Indicatif", "Subjonctif"],
    reponse: 1,
    note: "Revienne : subjonctif, après en attendant que."
  }],
  histoire: "Suzanne vivait à Rome, dans la maison de son père, savant et discret. On la dit ferme dans ses refus et douce dans ses paroles."
}, {
  id: "liaisons-hippolyte",
  date: "2026-08-13",
  saint: "Saint Hippolyte",
  niveau: "b1",
  theme: "Orthographe",
  titre: "Les liaisons et le H",
  accroche: "H muet ou H aspiré : la lettre ne se prononce jamais, mais elle change tout.",
  items: [{
    type: "ecoute",
    enonce: "La liaison se fait-elle ?",
    audio: "Les enfants du cocher jouaient dans la cour.",
    options: ["Oui, obligatoire", "Non, interdite"],
    reponse: 0,
    note: "Déterminant + nom : liaison obligatoire."
  }, {
    type: "ecoute",
    enonce: "La liaison se fait-elle ?",
    audio: "Les héros de la fable étaient deux frères.",
    options: ["Oui, obligatoire", "Non, interdite"],
    reponse: 1,
    note: "Héros commence par un H aspiré."
  }, {
    type: "choix",
    enonce: "___ hôtel",
    options: ["le", "l'"],
    reponse: 1,
    note: "H muet : élision."
  }, {
    type: "choix",
    enonce: "___ haricot",
    options: ["le", "l'"],
    reponse: 0,
    note: "H aspiré : pas d'élision."
  }, {
    type: "choix",
    enonce: "___ heure",
    options: ["la", "l'"],
    reponse: 1,
    note: "H muet."
  }, {
    type: "choix",
    enonce: "___ hache",
    options: ["la", "l'"],
    reponse: 0,
    note: "H aspiré."
  }, {
    type: "ecoute",
    enonce: "Répétez, puis dites si la liaison se fait.",
    audio: "Ils ont traversé le hameau.",
    options: ["Oui, obligatoire", "Non, interdite"],
    reponse: 0,
    note: "Ils‿ont : pronom + verbe, liaison obligatoire. Le hameau, lui, garde son H aspiré."
  }],
  histoire: "Hippolyte était gardien de prison à Rome. Touché par la constance d'un prisonnier, il changea de vie et prit soin des pauvres de la ville."
}, {
  id: "conjugaison-assomption",
  date: "2026-08-15",
  saint: "l'Assomption",
  niveau: "a2",
  theme: "Conjugaison",
  titre: "Le deuxième groupe et le futur",
  accroche: "Finir, grandir, bâtir : la famille en -issons.",
  items: [{
    type: "saisie",
    enonce: "Présent — nous (maigrir) : nous ___",
    reponse: ["maigrissons"],
    note: "Deuxième groupe : -issons au pluriel."
  }, {
    type: "saisie",
    enonce: "Présent — ils (réunir) : ils ___",
    reponse: ["réunissent"],
    note: "-issent."
  }, {
    type: "choix",
    enonce: "Présent — je (bâtir) :",
    options: ["je bâtis", "je bâtit", "je bâtie"],
    reponse: 0,
    note: "je bâtis, tu bâtis, il bâtit."
  }, {
    type: "saisie",
    enonce: "Futur — vendredi, nous ___ (être) en vacances.",
    reponse: ["serons"],
    note: "être → je serai, nous serons."
  }, {
    type: "saisie",
    enonce: "Futur — les enfants ___ (aller) à la piscine demain.",
    reponse: ["iront"],
    note: "aller → j'irai, ils iront."
  }, {
    type: "saisie",
    enonce: "Futur — elle ___ (faire) un gâteau pour la fête.",
    reponse: ["fera"],
    note: "faire → je ferai, elle fera."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le verbe au futur.",
    audio: "Un jour, tu viendras chez nous.",
    reponse: ["viendras", "tu viendras"],
    note: "venir → je viendrai, tu viendras."
  }],
  histoire: "Le quinze août, les villages sortent en procession. C'est le grand jour de l'été, entre la moisson finie et les vendanges à venir."
}, {
  id: "jardin-hyacinthe",
  date: "2026-08-17",
  saint: "Saint Hyacinthe",
  niveau: "a2",
  theme: "Vocabulaire",
  titre: "Le jardin de Colette",
  accroche: "Les outils, les fleurs, et une dictée sur les jardins français.",
  items: [{
    type: "saisie",
    enonce: "On le remplit d'eau pour donner à boire aux fleurs : un ___",
    reponse: ["arrosoir", "un arrosoir"],
    note: "Un arrosoir."
  }, {
    type: "saisie",
    enonce: "On les met en terre au printemps : des ___",
    reponse: ["graines", "des graines"],
    note: "Des graines."
  }, {
    type: "saisie",
    enonce: "Grande fleur jaune qui suit le soleil : un ___",
    reponse: ["tournesol", "un tournesol"],
    note: "Un tournesol : il tourne avec le soleil."
  }, {
    type: "choix",
    enonce: "Pour couper les branches d'un rosier, on prend :",
    options: ["un râteau", "un sécateur", "une tondeuse"],
    reponse: 1,
    note: "Le sécateur coupe net."
  }, {
    type: "choix",
    enonce: "Les jardiniers travaillaient chaque jour pour entretenir les haies parfaitement ___",
    options: ["taillées", "taillé", "taillés"],
    reponse: 0,
    note: "Accord avec les haies, féminin pluriel."
  }, {
    type: "saisie",
    enonce: "Ma sœur ___ (rentrer) du jardin à la nuit tombée.",
    reponse: ["est rentrée"],
    note: "Rentrer, verbe de mouvement : être, et accord avec le sujet."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez l'adjectif manquant.",
    audio: "Les chemins sont devenus plus courbes et la nature semblait plus libre.",
    reponse: ["courbes", "plus courbes"],
    note: "Le jardin anglais préfère la courbe à la ligne droite."
  }],
  histoire: "Hyacinthe parcourut l'Europe du Nord à pied. On raconte qu'il traversait les fleuves sans bateau, son manteau étendu sur l'eau."
}, {
  id: "verbes-bernard",
  date: "2026-08-20",
  saint: "Saint Bernard",
  niveau: "a2",
  theme: "Vocabulaire",
  titre: "Les verbes de la montagne",
  accroche: "Le mot exact pour chaque geste, et le cri de chaque bête.",
  items: [{
    type: "choix",
    enonce: "Il ___ enfin au sommet.",
    options: ["parvient", "soulève", "dévale"],
    reponse: 0,
    note: "Parvenir : arriver au terme d'un effort."
  }, {
    type: "choix",
    enonce: "Il ___ la pente en courant.",
    options: ["franchit", "dévale", "soulève"],
    reponse: 1,
    note: "Dévaler : descendre très vite."
  }, {
    type: "saisie",
    enonce: "Le contraire de « construire » : ___",
    reponse: ["détruire"],
    note: "construire ≠ détruire."
  }, {
    type: "saisie",
    enonce: "Le contraire de « avancer » : ___",
    reponse: ["reculer"],
    note: "avancer ≠ reculer."
  }, {
    type: "saisie",
    enonce: "Le cri de la vache : ___",
    reponse: ["meugler"],
    note: "La vache meugle."
  }, {
    type: "saisie",
    enonce: "Le cri du cheval : ___",
    reponse: ["hennir"],
    note: "Le cheval hennit."
  }, {
    type: "choix",
    enonce: "La marmotte…",
    options: ["bêle", "siffle", "brait"],
    reponse: 1,
    note: "La marmotte siffle pour donner l'alerte."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le verbe manquant.",
    audio: "Quand on sonne à la porte du chalet, le chien aboie.",
    reponse: ["aboie"],
    note: "Le chien aboie."
  }],
  histoire: "Bernard fonda l'abbaye de Clairvaux, dans une vallée qu'on disait sombre et qu'il nomma la claire vallée. Il aimait le silence et le travail des mains."
}, {
  id: "passe-compose-zephyrin",
  date: "2026-08-26",
  saint: "Saint Zéphyrin",
  niveau: "a2",
  theme: "Conjugaison",
  titre: "Le passé composé : avoir ou être ?",
  accroche: "Le choix de l'auxiliaire, puis l'accord.",
  items: [{
    type: "choix",
    enonce: "Les moissonneurs ___ partis avant le lever du jour.",
    options: ["ont", "sont"],
    reponse: 1,
    note: "Partir : être, et accord avec le sujet."
  }, {
    type: "saisie",
    enonce: "Ma sœur ___ (rentrer) de la campagne dimanche.",
    reponse: ["est rentrée"],
    note: "Être + accord au féminin."
  }, {
    type: "saisie",
    enonce: "Nous ___ (boire) de l'eau fraîche à la fontaine.",
    reponse: ["avons bu"],
    note: "boire → bu, avec avoir."
  }, {
    type: "saisie",
    enonce: "Participe passé de « ouvrir » : ___",
    reponse: ["ouvert"],
    note: "ouvrir → ouvert."
  }, {
    type: "saisie",
    enonce: "Participe passé de « vivre » : ___",
    reponse: ["vécu"],
    note: "vivre → vécu."
  }, {
    type: "choix",
    enonce: "Mes cousines ___ nous voir samedi.",
    options: ["ont venu", "sont venues", "sont venu"],
    reponse: 1,
    note: "Venir : être, accord féminin pluriel."
  }, {
    type: "saisie",
    enonce: "Vous vous ___ (se lever) tôt pour les moissons.",
    reponse: ["êtes levés", "vous êtes levés"],
    note: "Pronominal : être, accord avec le sujet."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le verbe au passé composé.",
    audio: "Les nuages ont disparu avant midi.",
    reponse: ["ont disparu", "disparu"],
    note: "disparaître → disparu, avec avoir."
  }],
  histoire: "Zéphyrin était romain et de condition modeste. On retient de lui une longue patience et le souci de tenir la maison en paix."
}, {
  id: "rentree-sulpice",
  date: "2026-08-27",
  saint: "Saint Sulpice",
  niveau: "a1",
  theme: "Vocabulaire",
  titre: "Le vocabulaire de la rentrée",
  accroche: "Le cartable, la classe, la récréation : les premiers mots de septembre.",
  items: [{
    type: "saisie",
    enonce: "Le grand sac que l'on porte sur le dos : un ___",
    reponse: ["cartable", "un cartable"],
    note: "Un cartable."
  }, {
    type: "saisie",
    enonce: "Le petit livre où l'on écrit ses leçons : un ___",
    reponse: ["cahier", "un cahier"],
    note: "Un cahier."
  }, {
    type: "saisie",
    enonce: "La pause au milieu de la matinée : la ___",
    reponse: ["récréation", "la récréation"],
    note: "La récréation."
  }, {
    type: "choix",
    enonce: "___ gomme",
    options: ["un", "une"],
    reponse: 1,
    note: "Une gomme, une trousse, une règle, une feuille."
  }, {
    type: "choix",
    enonce: "___ tableau",
    options: ["un", "une"],
    reponse: 0,
    note: "Un tableau, un crayon, un stylo, un cahier."
  }, {
    type: "saisie",
    enonce: "Le matin, j' ___ (entrer) à l'école à huit heures.",
    reponse: ["entre"],
    note: "j'entre, tu entres, il entre."
  }, {
    type: "saisie",
    enonce: "Nous ___ (ouvrir) nos livres.",
    reponse: ["ouvrons"],
    note: "nous ouvrons."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le mot manquant.",
    audio: "La maîtresse écrit au tableau.",
    reponse: ["tableau", "au tableau", "le tableau"],
    note: "Au tableau."
  }],
  histoire: "Sulpice fut évêque de Bourges. On dit qu'il donnait tout ce qu'il recevait et gardait sa maison ouverte aux enfants du pays."
}, {
  id: "temps-augustin",
  date: "2026-08-28",
  saint: "Saint Augustin",
  niveau: "a2",
  theme: "Grammaire",
  titre: "L'expression du temps",
  accroche: "Depuis regarde derrière, dans regarde devant, il y a mesure la distance.",
  items: [{
    type: "choix",
    enonce: "Marcel habite dans notre village ___ trois ans.",
    options: ["depuis", "il y a", "dans"],
    reponse: 0,
    note: "Depuis : l'action continue."
  }, {
    type: "choix",
    enonce: "___ un mois, Hiro est arrivé en France.",
    options: ["Depuis", "Il y a", "Dans"],
    reponse: 1,
    note: "Il y a regarde vers le passé."
  }, {
    type: "choix",
    enonce: "Le train de Paris part ___ dix minutes.",
    options: ["depuis", "il y a", "dans"],
    reponse: 2,
    note: "Dans regarde vers l'avenir."
  }, {
    type: "saisie",
    enonce: "Hier, nous avons cuisiné des madeleines ___ deux heures.",
    reponse: ["pendant"],
    note: "Pendant : la durée d'une action terminée."
  }, {
    type: "saisie",
    enonce: "J'ai appris cette recette ___ une semaine.",
    reponse: ["en"],
    note: "En : le temps qu'il a fallu pour réussir."
  }, {
    type: "choix",
    enonce: "Ma sœur part à Lyon ___ huit jours.",
    options: ["pour", "en", "depuis"],
    reponse: 0,
    note: "Pour : la durée prévue."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez l'indicateur de temps.",
    audio: "On joue aux boules depuis une heure et demie.",
    reponse: ["depuis"],
    note: "Depuis mesure une action commencée et qui dure."
  }],
  histoire: "Augustin écrivit beaucoup, souvent la nuit. Il disait que le temps nous échappe dès qu'on essaie de le définir."
}, {
  id: "questions-mederic",
  date: "2026-08-31",
  saint: "Saint Médéric",
  niveau: "a2",
  theme: "Grammaire",
  titre: "Où, quand, comment",
  accroche: "Poser une question, et la poser bien.",
  items: [{
    type: "saisie",
    enonce: "Réponse : « J'habite à Tours. » Question : ___ habitez-vous ?",
    reponse: ["où"],
    note: "Où interroge sur le lieu."
  }, {
    type: "choix",
    enonce: "Réponse : « À dix heures. » Question :",
    options: ["Quand ouvre le musée ?", "À quelle heure ouvre le musée ?"],
    reponse: 1,
    note: "L'heure précise appelle à quelle heure."
  }, {
    type: "choix",
    enonce: "___ vous a donné cette recette ?",
    options: ["Qui", "Qu'est-ce qui", "Que"],
    reponse: 0,
    note: "Qui : une personne, sujet du verbe."
  }, {
    type: "choix",
    enonce: "___ se passe dans la cuisine ?",
    options: ["Qui", "Qu'est-ce qui", "Que"],
    reponse: 1,
    note: "Qu'est-ce qui : une chose, sujet du verbe."
  }, {
    type: "choix",
    enonce: "___ saison préférez-vous ?",
    options: ["Quel", "Quelle", "Quels"],
    reponse: 1,
    note: "Saison est féminin singulier."
  }, {
    type: "choix",
    enonce: "___ pensez-vous de ce gâteau ?",
    options: ["Quoi", "Que"],
    reponse: 1,
    note: "Quoi ne se met jamais devant le verbe."
  }, {
    type: "saisie",
    enonce: "Avec « est-ce que » : vous vous êtes inscrit au cours ? → ___ vous vous êtes inscrit au cours ?",
    reponse: ["est-ce que"],
    note: "Est-ce que garde l'ordre sujet-verbe."
  }, {
    type: "ecoute",
    enonce: "Écoutez et écrivez le mot interrogatif.",
    audio: "D'où venez-vous, madame ?",
    reponse: ["d'où", "dou"],
    note: "D'où : l'origine, le point de départ."
  }],
  histoire: "Médéric quitta son abbaye pour vivre près de Paris, dans une cellule au bord de la route. Les passants s'arrêtaient lui demander leur chemin."
}, {
  id: "lequel-gilles",
  date: "2026-09-01",
  saint: "Saint Gilles",
  niveau: "b1",
  theme: "Grammaire",
  titre: "Lequel, auquel, duquel",
  accroche: "Le pronom s'accorde avec le nom qu'il remplace, puis la préposition vient se coller devant.",
  items: [{
    type: "choix",
    enonce: "Deux tartes : ___ voulez-vous ?",
    options: ["Lequel", "Laquelle", "Lesquelles"],
    reponse: 1,
    note: "Une tarte, féminin singulier."
  }, {
    type: "choix",
    enonce: "Trois trains : ___ arrive le premier ?",
    options: ["Laquelle", "Lesquels", "Lequel"],
    reponse: 2,
    note: "Un train, masculin singulier."
  }, {
    type: "choix",
    enonce: "Ces lettres : ___ répondez-vous d'abord ?",
    options: ["Auxquelles", "Auxquels", "À laquelle"],
    reponse: 0,
    note: "à + lesquelles = auxquelles."
  }, {
    type: "choix",
    enonce: "Ces deux tableaux : ___ tient-il le plus ?",
    options: ["Auquel", "Auxquels", "À laquelle"],
    reponse: 0,
    note: "Il tient à un seul des deux."
  }, {
    type: "saisie",
    enonce: "Un village : ___ vous souvenez-vous ?",
    reponse: ["duquel"],
    note: "de + lequel = duquel, en un seul mot."
  }, {
    type: "saisie",
    enonce: "Ces falaises : ___ nous approchons-nous ?",
    reponse: ["desquelles"],
    note: "de + lesquelles = desquelles."
  }, {
    type: "choix",
    enonce: "Voici la table sous ___ elles étaient rangées.",
    options: ["souslaquelle", "laquelle", "duquel"],
    reponse: 1,
    note: "Après une préposition simple, on écrit laquelle en deux mots."
  }, {
    type: "ecoute",
    enonce: "Écoutez, puis écrivez le pronom entendu.",
    audio: "C'est le miroir à propos duquel je vous écrivais hier.",
    reponse: ["duquel"],
    note: "à propos de + lequel = à propos duquel."
  }],
  histoire: "Gilles vint d'Orient et choisit de vivre seul dans une forêt près du Rhône. Une biche venait lui donner son lait. Le roi, chassant dans ce bois, la blessa d'une flèche ; plein de regret, il fit bâtir un monastère : la ville de Saint-Gilles, dans le Gard."
}];

/* Enregistrements de la voix : app/audio/<id>-<n>.wav quand le fichier existe. */
window.MPM_EXERCICES.forEach(function (b) {
  var n = 0;
  b.items.forEach(function (it) {
    if (it.type === 'ecoute') {
      n++;
      it.src = 'app/audio/' + b.id + '-' + n + '.wav';
    }
  });
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/exercices.js", error: String((e && e.message) || e) }); }

// app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// app/mpm-app.jsx
try { (() => {
const {
  useState,
  useEffect,
  useRef
} = React;
const DS = window.MaPetiteMadeleineDesignSystem_e1b54a || {};
const {
  DifficultyRating,
  Button: DSButton,
  Divider,
  Tag
} = DS;
const ICONES = 'assets/icons';
const IVORY = '#FBF6EC',
  IVORY2 = '#F4EBD8',
  LINE = '#E6D9BC',
  NAVY = '#1C2B4F',
  NAVY5 = '#38507C',
  NAVY3 = '#7C8CAE',
  OR7 = '#8F6518',
  OR5 = '#B8862B',
  OR3 = '#D9AE5C',
  OR1 = '#F3E4C0';
const SERIF = "'Cormorant Garamond', Georgia, serif",
  BODY = "'EB Garamond', Georgia, serif";
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const store = {
  get() {
    try {
      return JSON.parse(localStorage.getItem('mpm_app_v1')) || {};
    } catch (e) {
      return {};
    }
  },
  set(v) {
    try {
      localStorage.setItem('mpm_app_v1', JSON.stringify(v));
    } catch (e) {}
  }
};
let audioCourant = null;
function dire(item) {
  const texte = typeof item === 'string' ? item : item.audio;
  const src = typeof item === 'object' && item.src;
  try {
    speechSynthesis.cancel();
  } catch (e) {}
  if (audioCourant) {
    audioCourant.pause();
    audioCourant = null;
  }
  if (src) {
    const a = new Audio(src);
    audioCourant = a;
    const p = a.play();
    if (p && p.catch) p.catch(() => {
      if (audioCourant === a) {
        audioCourant = null;
        synth(texte);
      }
    });
    a.onerror = () => {
      if (audioCourant === a) {
        audioCourant = null;
        synth(texte);
      }
    };
    return;
  }
  synth(texte);
}
function synth(texte) {
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texte);
    u.lang = 'fr-FR';
    u.rate = 0.85;
    const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.indexOf('fr') === 0);
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (e) {}
}
const norm = s => (s || '').toLowerCase().trim().replace(/[.!?;:,]/g, '').replace(/\s+/g, ' ');
function Fleur({
  size = 14,
  color = OR5,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: SERIF,
      fontSize: size,
      color,
      lineHeight: 1,
      ...style
    }
  }, "\u269C");
}
function Filet({
  w = 40
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: w,
      height: 1,
      background: OR3
    }
  });
}
function Bouton({
  children,
  onClick,
  variante = 'plein',
  disabled
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 52
    }
  }, /*#__PURE__*/React.createElement(DSButton, {
    variant: variante === 'plein' ? 'primary' : 'secondary',
    size: "lg",
    disabled: disabled,
    onClick: onClick
  }, children));
}
function EnTete({
  titre,
  sous,
  gauche,
  onGauche,
  logo
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: logo ? '46px 18px 12px' : '54px 18px 14px',
      background: IVORY,
      borderBottom: '1px solid ' + LINE,
      position: 'relative',
      flex: 'none'
    }
  }, gauche && /*#__PURE__*/React.createElement("button", {
    onClick: onGauche,
    style: {
      position: 'absolute',
      left: 12,
      top: 52,
      border: 'none',
      background: 'none',
      color: OR7,
      fontFamily: BODY,
      fontSize: 16,
      cursor: 'pointer',
      padding: 6,
      whiteSpace: 'nowrap',
      zIndex: 2
    }
  }, "\u2039 ", gauche), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: gauche ? '4px 74px 0' : 0
    }
  }, logo && /*#__PURE__*/React.createElement("img", {
    src: "assets/logo/madeleine-logo-transparent.png",
    alt: "",
    style: {
      width: 44,
      height: 44,
      display: 'block',
      margin: '0 auto 4px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 22,
      color: NAVY,
      lineHeight: 1.1
    }
  }, titre), sous && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    w: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: 15,
      color: OR7
    }
  }, sous), /*#__PURE__*/React.createElement(Filet, {
    w: 18
  }))));
}
function Serie({
  jours
}) {
  const cases = [0, 1, 2, 3, 4, 5, 6];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      justifyContent: 'center'
    }
  }, cases.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 30,
      height: 34,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (i < jours ? OR3 : '#E4DAC6'),
      background: i < jours ? OR1 : '#FFFFFF'
    }
  }, /*#__PURE__*/React.createElement(Fleur, {
    size: 15,
    color: i < jours ? OR7 : '#DCD2BE'
  }))));
}
function Niveau({
  n,
  size = 19
}) {
  return /*#__PURE__*/React.createElement(DifficultyRating, {
    level: n,
    size: size,
    assetBase: ICONES
  });
}

/* ————— Accueil ————— */
function Accueil({
  ex,
  etat,
  onCommencer,
  onHasard,
  faitAujourdhui
}) {
  const d = new Date(ex.date + 'T08:00:00');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 18px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: OR7
    }
  }, JOURS[d.getDay()], " ", d.getDate() === 1 ? '1er' : d.getDate(), " ", MOIS[d.getMonth()]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: 17,
      color: NAVY5,
      marginTop: 4
    }
  }, ex.saint)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      border: '1px solid ' + LINE,
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 8px 22px rgba(28,43,79,0.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F8E2BE',
      padding: '22px 20px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: OR7,
      marginBottom: 9
    }
  }, "L'exercice du jour"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 29,
      color: NAVY,
      lineHeight: 1.12
    }
  }, ex.titre), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Niveau, {
    n: ex.niveau,
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: BODY,
      fontSize: 17,
      lineHeight: 1.55,
      color: NAVY,
      margin: '0 0 16px',
      textWrap: 'pretty'
    }
  }, ex.accroche), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: BODY,
      fontSize: 14,
      color: NAVY3,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", null, ex.items.length, " questions"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, ex.theme), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "5 minutes")), /*#__PURE__*/React.createElement(Bouton, {
    onClick: onCommencer
  }, faitAujourdhui ? 'Recommencer' : 'Commencer'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 9
    }
  }, /*#__PURE__*/React.createElement(DSButton, {
    variant: "ghost",
    size: "md",
    onClick: onHasard
  }, "Un exercice au hasard")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      background: '#FFFFFF',
      border: '1px solid ' + LINE,
      borderRadius: 16,
      padding: '18px 18px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: 19,
      color: NAVY,
      marginBottom: 14
    }
  }, etat.serie > 0 ? `${etat.serie} jour${etat.serie > 1 ? 's' : ''} de suite` : 'Commencez votre série'), /*#__PURE__*/React.createElement(Serie, {
    jours: etat.serie
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 14,
      color: NAVY3,
      marginTop: 14
    }
  }, "Une madeleine par jour, avec le caf\xE9.")));
}

/* ————— Exercice ————— */
function Question({
  item,
  index,
  total,
  onSuivant
}) {
  const [choix, setChoix] = useState(null);
  const [saisie, setSaisie] = useState('');
  const [valide, setValide] = useState(false);
  const aOptions = !!item.options;
  const joue = useRef(false);
  useEffect(() => {
    setChoix(null);
    setSaisie('');
    setValide(false);
    joue.current = false;
  }, [index]);
  useEffect(() => {
    if (item.type === 'ecoute' && !joue.current) {
      joue.current = true;
      const t = setTimeout(() => dire(item), 420);
      return () => clearTimeout(t);
    }
  }, [index]);
  const juste = aOptions ? choix === item.reponse : item.reponse.some(r => norm(r) === norm(saisie));
  const pret = aOptions ? choix !== null : saisie.trim().length > 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 24px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      marginBottom: 20
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 3,
      background: i < index ? OR5 : i === index ? NAVY3 : '#E4DAC6'
    }
  }))), item.type === 'ecoute' && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => dire(item),
    style: {
      width: 78,
      height: 78,
      borderRadius: 78,
      border: '1px solid ' + OR3,
      background: OR1,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    stroke: NAVY,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 11.5h4L15.5 7v16L10 18.5H6z",
    fill: NAVY,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 11a5 5 0 0 1 0 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.8 8a9 9 0 0 1 0 14"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 14,
      color: NAVY3,
      marginTop: 8
    }
  }, "Touchez pour r\xE9\xE9couter")), item.image && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: "",
    style: {
      width: 190,
      height: 190,
      objectFit: 'cover',
      borderRadius: 14,
      border: '1px solid ' + LINE
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.3,
      color: NAVY,
      textAlign: 'center',
      marginBottom: 22,
      textWrap: 'pretty'
    }
  }, item.enonce), aOptions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, item.options.map((o, i) => {
    const sel = choix === i;
    const bon = valide && i === item.reponse;
    const faux = valide && sel && i !== item.reponse;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      disabled: valide,
      onClick: () => setChoix(i),
      style: {
        textAlign: 'left',
        padding: '15px 18px',
        borderRadius: 13,
        cursor: valide ? 'default' : 'pointer',
        fontFamily: BODY,
        fontSize: 19,
        color: bon ? '#1E5B3A' : faux ? '#8C2F2F' : NAVY,
        border: '1.5px solid ' + (bon ? '#3E8B62' : faux ? '#B96A6A' : sel ? OR5 : LINE),
        background: bon ? '#EAF3ED' : faux ? '#F8EDEA' : sel ? OR1 : '#FFFFFF'
      }
    }, o);
  })) : /*#__PURE__*/React.createElement("input", {
    value: saisie,
    disabled: valide,
    onChange: e => setSaisie(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && pret && !valide) setValide(true);
    },
    placeholder: "Votre r\xE9ponse",
    autoComplete: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '15px 18px',
      borderRadius: 13,
      fontFamily: BODY,
      fontSize: 20,
      color: valide ? juste ? '#1E5B3A' : '#8C2F2F' : NAVY,
      textAlign: 'center',
      border: '1.5px solid ' + (valide ? juste ? '#3E8B62' : '#B96A6A' : OR3),
      background: valide ? juste ? '#EAF3ED' : '#F8EDEA' : '#FFFFFF',
      outline: 'none'
    }
  }), valide && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      background: '#EAEFF6',
      border: '1px solid #C9D6E8',
      borderRadius: 12,
      padding: '15px 17px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: OR7,
      marginBottom: 6
    }
  }, juste ? 'C\u2019est juste' : 'La réponse'), !juste && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 22,
      color: NAVY,
      marginBottom: 6
    }
  }, aOptions ? item.options[item.reponse] : item.reponse[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 17,
      lineHeight: 1.5,
      color: NAVY,
      textWrap: 'pretty'
    }
  }, item.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 20
    }
  }), /*#__PURE__*/React.createElement(Bouton, {
    disabled: !pret,
    onClick: () => {
      if (!valide) setValide(true);else onSuivant(juste);
    }
  }, valide ? index + 1 === total ? 'Voir le résultat' : 'Question suivante' : 'Vérifier'));
}

/* ————— Fin ————— */
function Fin({
  ex,
  score,
  serie,
  onRejouer,
  onArchive
}) {
  const total = ex.items.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 18px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      color: OR5,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 34,
      color: NAVY,
      lineHeight: 1.1
    }
  }, score, " sur ", total), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: 19,
      color: OR7,
      marginTop: 6
    }
  }, score === total ? 'Sans une faute' : score >= total - 2 ? 'Très bien' : 'Le chemin se fait en marchant')), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      border: '1px solid ' + LINE,
      borderRadius: 16,
      padding: '18px 18px 20px',
      textAlign: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: OR7,
      marginBottom: 14
    }
  }, "Votre s\xE9rie"), /*#__PURE__*/React.createElement(Serie, {
    jours: serie
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: 18,
      color: NAVY,
      marginTop: 14
    }
  }, serie, " jour", serie > 1 ? 's' : '', " de suite")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#EAEFF6',
      border: '1px solid #C9D6E8',
      borderRadius: 16,
      padding: '20px 20px 22px',
      textAlign: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      color: OR7,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    w: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: BODY,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, "Le saint du jour"), /*#__PURE__*/React.createElement(Filet, {
    w: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 24,
      color: NAVY,
      marginBottom: 10
    }
  }, ex.saint), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: BODY,
      fontSize: 16,
      lineHeight: 1.55,
      color: NAVY,
      margin: 0,
      textAlign: 'justify',
      textWrap: 'pretty'
    }
  }, ex.histoire)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Bouton, {
    onClick: onArchive
  }, "Voir mon carnet"), /*#__PURE__*/React.createElement(Bouton, {
    variante: "ligne",
    onClick: onRejouer
  }, "Refaire l'exercice")));
}
function FinCarnet({
  score,
  total,
  restant,
  onRetour
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 20px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 34,
      color: NAVY,
      lineHeight: 1.1,
      marginTop: 10
    }
  }, score, " sur ", total), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: 19,
      color: OR7,
      marginTop: 6,
      marginBottom: 22
    }
  }, score === total ? 'Le carnet s\u2019allège' : 'On y revient demain'), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      border: '1px solid ' + LINE,
      borderRadius: 16,
      padding: '20px 18px 22px',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 30,
      color: NAVY
    }
  }, restant), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 16,
      color: NAVY5,
      marginTop: 4
    }
  }, restant > 1 ? 'questions restent au carnet' : restant === 1 ? 'question reste au carnet' : 'carnet vide, tout est acquis')), /*#__PURE__*/React.createElement(Bouton, {
    onClick: onRetour
  }, "Retour au carnet"));
}

/* ————— Mon carnet ————— */
function Carnet({
  carnet,
  onReviser,
  onAujourdhui
}) {
  const n = Math.min(carnet.length, 8);
  if (!carnet.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 26px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Fleur, {
    size: 26,
    color: OR3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 25,
      color: NAVY,
      margin: '14px 0 8px',
      lineHeight: 1.2
    }
  }, "Votre carnet est vide"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: BODY,
      fontSize: 17,
      lineHeight: 1.55,
      color: NAVY5,
      margin: '0 0 24px',
      textWrap: 'pretty'
    }
  }, "Chaque r\xE9ponse manqu\xE9e vient s'inscrire ici, avec sa r\xE8gle. Vous les reverrez plus tard, jusqu'\xE0 ce qu'elles soient acquises."), /*#__PURE__*/React.createElement(Bouton, {
    onClick: onAujourdhui
  }, "Commencer"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY,
      borderRadius: 16,
      padding: '18px 18px 20px',
      textAlign: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 34,
      color: OR3,
      lineHeight: 1
    }
  }, carnet.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: 18,
      color: IVORY,
      margin: '4px 0 16px'
    }
  }, "\xE0 revoir"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(DSButton, {
    variant: "gold",
    size: "lg",
    onClick: onReviser
  }, `Réviser ${n} question${n > 1 ? 's' : ''}`))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, carnet.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.cle,
    style: {
      background: '#FFFFFF',
      border: '1px solid ' + LINE,
      borderRadius: 14,
      padding: '14px 16px 15px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "navy"
  }, c.theme), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: BODY,
      fontSize: 13,
      color: NAVY3
    }
  }, '⚜ '.repeat(Math.min(3, c.fois || 1)).trim())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 20,
      color: NAVY,
      lineHeight: 1.3,
      marginBottom: 6,
      textWrap: 'pretty'
    }
  }, c.item.enonce), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 16,
      color: OR7,
      fontWeight: 600,
      marginBottom: 4
    }
  }, c.item.options ? c.item.options[c.item.reponse] : c.item.reponse[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 16,
      lineHeight: 1.5,
      color: NAVY5,
      textWrap: 'pretty'
    }
  }, c.item.note)))));
}

/* ————— Coquille ————— */
function Onglets({
  actif,
  onChange
}) {
  const items = [{
    id: 'accueil',
    label: 'Aujourd\u2019hui'
  }, {
    id: 'carnet',
    label: 'Mon carnet'
  }, {
    id: 'progres',
    label: 'Ma série'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid ' + LINE,
      background: IVORY,
      paddingBottom: 20,
      flex: 'none'
    }
  }, items.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onChange(t.id),
    style: {
      flex: 1,
      minHeight: 56,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontFamily: BODY,
      fontSize: 16,
      color: actif === t.id ? OR7 : NAVY3,
      fontWeight: actif === t.id ? 600 : 500,
      borderTop: '2px solid ' + (actif === t.id ? OR5 : 'transparent'),
      marginTop: -1,
      paddingBottom: 2
    }
  }, t.label)));
}
function Progres({
  etat,
  liste
}) {
  const faits = Object.keys(etat.scores || {}).length;
  const totalJustes = Object.entries(etat.scores || {}).reduce((a, [k, v]) => a + v, 0);
  const totalQ = Object.keys(etat.scores || {}).reduce((a, k) => {
    const e = liste.find(x => x.id === k);
    return a + (e ? e.items.length : 0);
  }, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 18px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      border: '1px solid ' + LINE,
      borderRadius: 16,
      padding: '22px 18px 24px',
      textAlign: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 40,
      color: NAVY,
      lineHeight: 1
    }
  }, etat.serie), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: 18,
      color: OR7,
      margin: '6px 0 16px'
    }
  }, "jour", etat.serie > 1 ? 's' : '', " de suite"), /*#__PURE__*/React.createElement(Serie, {
    jours: etat.serie
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 11,
      marginBottom: 18
    }
  }, [['Exercices faits', faits], ['Bonnes réponses', totalQ ? totalJustes + '/' + totalQ : '—']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      flex: 1,
      background: '#FFFFFF',
      border: '1px solid ' + LINE,
      borderRadius: 14,
      padding: '16px 12px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontWeight: 600,
      fontSize: 27,
      color: NAVY
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 13,
      color: NAVY3,
      marginTop: 3
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY,
      borderRadius: 16,
      padding: '22px 20px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: 22,
      color: OR3,
      marginBottom: 8
    }
  }, "La lettre du matin"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: BODY,
      fontSize: 16,
      lineHeight: 1.6,
      color: IVORY,
      margin: '0 0 18px'
    }
  }, "Recevez chaque jour l'exercice et son corrig\xE9 par courrier, avec l'histoire du saint."), /*#__PURE__*/React.createElement("a", {
    href: "https://mapetitemadeleine.substack.com",
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'block',
      textDecoration: 'none',
      minHeight: 50,
      lineHeight: '50px',
      borderRadius: 13,
      background: OR3,
      color: NAVY,
      fontFamily: BODY,
      fontSize: 18,
      fontWeight: 600
    }
  }, "S'abonner")));
}
function App() {
  const liste = window.MPM_EXERCICES;
  const duJour = (() => {
    const auj = new Date().toISOString().slice(0, 10);
    const exact = liste.find(e => e.date === auj);
    if (exact) return exact;
    const passes = liste.filter(e => e.date <= auj);
    return passes.length ? passes[passes.length - 1] : liste[liste.length - 1];
  })();
  const [etat, setEtat] = useState(() => ({
    serie: 3,
    scores: {},
    carnet: [],
    ...store.get()
  }));
  const [onglet, setOnglet] = useState('accueil');
  const [session, setSession] = useState(null);
  const [fin, setFin] = useState(null);
  const carnet = etat.carnet || [];
  useEffect(() => {
    store.set(etat);
  }, [etat]);
  useEffect(() => {
    try {
      speechSynthesis.getVoices();
    } catch (e) {}
  }, []);
  const ouvrir = id => {
    const e = liste.find(x => x.id === id);
    setSession({
      source: 'ex',
      id,
      titre: e.titre,
      items: e.items,
      cles: e.items.map((_, i) => id + '#' + i),
      i: 0,
      score: 0
    });
    setFin(null);
  };
  const reviser = () => {
    const lot = carnet.slice(0, 8);
    setSession({
      source: 'carnet',
      titre: 'Mon carnet',
      items: lot.map(c => c.item),
      cles: lot.map(c => c.cle),
      i: 0,
      score: 0
    });
    setFin(null);
  };
  const suivant = juste => {
    const cle = session.cles[session.i];
    const item = session.items[session.i];
    const exo = session.source === 'ex' ? liste.find(x => x.id === session.id) : null;
    setEtat(s => {
      let c = (s.carnet || []).slice();
      const pos = c.findIndex(x => x.cle === cle);
      if (juste) {
        if (pos > -1) c.splice(pos, 1);
      } else if (pos > -1) c[pos] = {
        ...c[pos],
        fois: (c[pos].fois || 1) + 1
      };else c.push({
        cle,
        item,
        theme: exo ? exo.theme : 'Révision',
        fois: 1
      });
      return {
        ...s,
        carnet: c
      };
    });
    const score = session.score + (juste ? 1 : 0);
    if (session.i + 1 >= session.items.length) {
      if (session.source === 'ex') {
        setEtat(s => ({
          ...s,
          serie: Math.min(7, (s.serie || 0) + (s.scores[session.id] == null ? 1 : 0)),
          scores: {
            ...s.scores,
            [session.id]: score
          }
        }));
      }
      setFin({
        source: session.source,
        id: session.id,
        titre: session.titre,
        total: session.items.length,
        score
      });
      setSession(null);
    } else setSession(s => ({
      ...s,
      i: s.i + 1,
      score
    }));
  };
  let corps, entete;
  if (session) {
    entete = /*#__PURE__*/React.createElement(EnTete, {
      titre: session.titre,
      sous: `${session.i + 1} sur ${session.items.length}`,
      gauche: "Quitter",
      onGauche: () => setSession(null)
    });
    corps = /*#__PURE__*/React.createElement(Question, {
      key: session.i,
      item: session.items[session.i],
      index: session.i,
      total: session.items.length,
      onSuivant: suivant
    });
  } else if (fin && fin.source === 'ex') {
    const e = liste.find(x => x.id === fin.id);
    entete = /*#__PURE__*/React.createElement(EnTete, {
      titre: "Le corrig\xE9",
      sous: e.titre
    });
    corps = /*#__PURE__*/React.createElement(Fin, {
      ex: e,
      score: fin.score,
      serie: etat.serie,
      onRejouer: () => ouvrir(e.id),
      onArchive: () => {
        setFin(null);
        setOnglet('carnet');
      }
    });
  } else if (fin) {
    entete = /*#__PURE__*/React.createElement(EnTete, {
      titre: "Mon carnet",
      sous: "r\xE9vision"
    });
    corps = /*#__PURE__*/React.createElement(FinCarnet, {
      score: fin.score,
      total: fin.total,
      restant: carnet.length,
      onRetour: () => {
        setFin(null);
        setOnglet('carnet');
      }
    });
  } else if (onglet === 'carnet') {
    entete = /*#__PURE__*/React.createElement(EnTete, {
      titre: "Mon carnet",
      sous: "ce qui vous r\xE9siste"
    });
    corps = /*#__PURE__*/React.createElement(Carnet, {
      carnet: carnet,
      onReviser: reviser,
      onAujourdhui: () => setOnglet('accueil')
    });
  } else if (onglet === 'progres') {
    entete = /*#__PURE__*/React.createElement(EnTete, {
      titre: "Ma s\xE9rie",
      sous: "pas \xE0 pas"
    });
    corps = /*#__PURE__*/React.createElement(Progres, {
      etat: etat,
      liste: liste
    });
  } else {
    entete = /*#__PURE__*/React.createElement(EnTete, {
      titre: "Ma petite madeleine",
      sous: "French Class",
      logo: true
    });
    corps = /*#__PURE__*/React.createElement(Accueil, {
      ex: duJour,
      etat: etat,
      faitAujourdhui: etat.scores[duJour.id] != null,
      onCommencer: () => ouvrir(duJour.id),
      onHasard: () => {
        const autres = liste.filter(e => e.id !== duJour.id);
        ouvrir(autres[Math.floor(Math.random() * autres.length)].id);
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: IVORY,
      fontFamily: BODY
    }
  }, entete, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      background: IVORY,
      WebkitOverflowScrolling: 'touch'
    }
  }, corps), (session || fin) && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20,
      background: IVORY,
      flex: 'none'
    }
  }), !session && !fin && /*#__PURE__*/React.createElement(Onglets, {
    actif: onglet,
    onChange: setOnglet
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/mpm-app.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
/**
 * Callout — a boxed note lifted slightly off the page (soft shadow, hairline
 * border). Used for teacher asides, cultural notes, or grammar tips.
 */
function Callout({
  children,
  tone = 'tip',
  title
}) {
  const tones = {
    tip: {
      border: 'var(--madeleine-gold-300)',
      label: title || 'Astuce de prof'
    },
    culture: {
      border: 'var(--madeleine-navy-300)',
      label: title || 'Un peu de culture'
    },
    grammar: {
      border: 'var(--madeleine-sage-500)',
      label: title || 'Point de grammaire'
    }
  };
  const t = tones[tone] || tones.tip;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '16px',
      color: 'var(--madeleine-gold-700)',
      marginBottom: 'var(--space-2)'
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      lineHeight: 1.65,
      color: 'var(--color-text-primary)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
/**
 * Card — generic content preview card (e.g. "recent post" teaser). Flat
 * surface, hairline border, restrained radius; no colored left-border strip.
 */
function Card({
  eyebrow,
  title,
  excerpt,
  meta,
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'block',
      background: 'var(--color-surface)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)',
      textDecoration: 'none',
      color: 'inherit'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--madeleine-gold-700)',
      marginBottom: 'var(--space-2)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '24px',
      color: 'var(--color-text-primary)'
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--madeleine-navy-500)',
      marginTop: 'var(--space-2)',
      lineHeight: 1.6
    }
  }, excerpt), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--madeleine-navy-300)',
      marginTop: 'var(--space-3)'
    }
  }, meta));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/ExerciseBlock.jsx
try { (() => {
/**
 * ExerciseBlock — a single numbered, gradeable exercise: prompt, an input
 * area, and a reveal for the corrected answer. Reveal is click-to-show,
 * never auto-graded/animated — matches the brand's slow, teacher-led pace.
 */
function ExerciseBlock({
  number,
  prompt,
  answer,
  children
}) {
  const [revealed, setRevealed] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) 0',
      borderBottom: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '20px',
      color: 'var(--madeleine-gold-500)',
      minWidth: '28px'
    }
  }, number, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      color: 'var(--color-text-primary)',
      lineHeight: 1.6
    }
  }, prompt), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, children), answer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, !revealed ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setRevealed(true),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--madeleine-gold-700)',
      textDecoration: 'underline',
      textDecorationColor: 'var(--madeleine-gold-300)',
      cursor: 'pointer'
    }
  }, "Voir la correction") : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--color-success-text)',
      background: 'var(--color-success-bg)',
      border: `1px solid var(--madeleine-sage-500)`,
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-3) var(--space-4)',
      display: 'inline-block'
    }
  }, answer)))));
}
Object.assign(__ds_scope, { ExerciseBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ExerciseBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/VocabCard.jsx
try { (() => {
/**
 * VocabCard — a single vocabulary entry: word, grammatical gender/article,
 * translation, and an example sentence. The newsletter's core "flashcard".
 */
function VocabCard({
  word,
  article,
  translation,
  example
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: 'var(--border-hairline)',
      borderLeft: '3px solid var(--madeleine-gold-500)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-4) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px'
    }
  }, article && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '17px',
      color: 'var(--madeleine-gold-700)'
    }
  }, article), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '24px',
      color: 'var(--color-text-primary)'
    }
  }, word), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      color: 'var(--madeleine-navy-500)'
    }
  }, "\u2014 ", translation)), example && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontSize: '15px',
      color: 'var(--madeleine-navy-500)',
      marginTop: 'var(--space-2)'
    }
  }, "\xAB ", example, " \xBB"));
}
Object.assign(__ds_scope, { VocabCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/VocabCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Button — the brand's single button primitive.
 * Variants read as printed-invitation elements, not app buttons: flat fills,
 * hairline borders, restrained radius, color-shift hover (no scale/bounce).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button'
}) {
  const sizes = {
    sm: {
      padding: '7px 16px',
      fontSize: '14px'
    },
    md: {
      padding: '10px 22px',
      fontSize: '16px'
    },
    lg: {
      padding: '13px 30px',
      fontSize: '18px'
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    letterSpacing: 'var(--tracking-wide)',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background-color 150ms ease, color 150ms ease, border-color 150ms ease, transform 100ms ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--madeleine-navy-700)',
      color: 'var(--color-text-on-navy)',
      border: '1px solid var(--madeleine-navy-700)'
    },
    gold: {
      background: 'var(--madeleine-gold-500)',
      color: 'var(--color-text-on-gold)',
      border: '1px solid var(--madeleine-gold-500)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--madeleine-navy-700)',
      border: '1px solid var(--madeleine-navy-700)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--madeleine-gold-700)',
      border: '1px solid transparent',
      textDecoration: 'underline',
      textDecorationColor: 'var(--madeleine-gold-300)'
    }
  };
  const hover = {
    primary: {
      background: 'var(--madeleine-navy-900)'
    },
    gold: {
      background: 'var(--madeleine-gold-700)'
    },
    secondary: {
      background: 'var(--madeleine-navy-100)'
    },
    ghost: {
      color: 'var(--madeleine-navy-700)'
    }
  };
  const [isHover, setHover] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant],
    ...(isHover && !disabled ? hover[variant] : {}),
    transform: isActive && !disabled ? 'translateY(1px)' : 'none'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/DifficultyRating.jsx
try { (() => {
/**
 * DifficultyRating — the brand's difficulty scale, drawn as little madeleines.
 * Gold madeleines count up the beginner ladder (1 = facile … 3 = B1); blue
 * madeleines mark the advanced tiers (1 = B2, 1 = difficile, 2 = très difficile).
 * Uses the real brand-mark shell (assets/icons), never a redrawn glyph.
 */
const LEVELS = {
  facile: {
    count: 1,
    color: 'gold',
    label: 'Facile'
  },
  a1: {
    count: 1,
    color: 'gold',
    label: 'A1'
  },
  a2: {
    count: 2,
    color: 'gold',
    label: 'A2'
  },
  'a2+': {
    count: 2.5,
    color: 'gold',
    label: 'A2+'
  },
  'b1.1': {
    count: 2.5,
    color: 'gold',
    label: 'B1.1'
  },
  b1: {
    count: 3,
    color: 'gold',
    label: 'B1'
  },
  b2: {
    count: 1,
    color: 'blue',
    label: 'B2'
  },
  difficile: {
    count: 1,
    color: 'blue',
    label: 'Difficile'
  },
  'tres-difficile': {
    count: 2,
    color: 'blue',
    label: 'Très difficile'
  }
};
function DifficultyRating({
  level = 'a2',
  size = 22,
  showLabel = true,
  assetBase = '../../assets/icons'
}) {
  const cfg = LEVELS[level] || LEVELS.a2;
  const src = cfg.color === 'blue' ? `${assetBase}/madeleine-blue.png` : `${assetBase}/madeleine-gold.png`;
  const full = Math.floor(cfg.count);
  const hasHalf = cfg.count - full >= 0.5;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px'
    },
    "aria-hidden": "true"
  }, Array.from({
    length: full
  }).map((_, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    alt: "",
    style: {
      width: `${size}px`,
      height: `${size * 1.2}px`,
      objectFit: 'contain'
    }
  })), hasHalf && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: `${size / 2}px`,
      height: `${size * 1.2}px`,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: `${size}px`,
      height: `${size * 1.2}px`,
      objectFit: 'contain',
      display: 'block'
    }
  }))), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: `${Math.round(size * 0.62)}px`,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: cfg.color === 'blue' ? 'var(--madeleine-navy-500)' : 'var(--madeleine-gold-700)'
    }
  }, cfg.label));
}
Object.assign(__ds_scope, { DifficultyRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DifficultyRating.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * Divider — rule–fleuron–rule section break, the logo's ornament motif
 * reused as a page element. Use between major sections instead of a plain <hr>.
 */
function Divider({
  ornament = '⚜',
  color = 'gold'
}) {
  const colors = {
    gold: 'var(--madeleine-gold-500)',
    navy: 'var(--madeleine-navy-700)'
  };
  const c = colors[color] || colors.gold;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '14px',
      padding: 'var(--space-5) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '90px',
      height: '1px',
      background: c
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      color: c,
      lineHeight: 1
    }
  }, ornament), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '90px',
      height: '1px',
      background: c
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — small pill label for exercise category / CEFR level.
 * The one place in the system a full pill radius is used.
 */
function Tag({
  children,
  tone = 'gold'
}) {
  const tones = {
    gold: {
      background: 'var(--madeleine-gold-100)',
      color: 'var(--madeleine-gold-700)',
      border: '1px solid var(--madeleine-gold-300)'
    },
    navy: {
      background: 'var(--madeleine-navy-100)',
      color: 'var(--madeleine-navy-700)',
      border: '1px solid var(--madeleine-navy-300)'
    },
    sage: {
      background: 'var(--color-success-bg)',
      color: 'var(--color-success-text)',
      border: `1px solid var(--madeleine-sage-500)`
    },
    bordeaux: {
      background: 'var(--color-error-bg)',
      color: 'var(--color-error-text)',
      border: `1px solid var(--madeleine-bordeaux-500)`
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// data/hero-palette.js
try { (() => {
// Ma Petite Madeleine — couleurs de bandeau (hero) par mois
// Le fond du bandeau change chaque mois et suit les saisons, à partir du 1er août.
// Tons clairs uniquement : le titre reste navy #1C2B4F et le sous-titre or #B8862B doivent rester lisibles.
// Cycle : fin d'été (chaud/doré) -> automne (orangé/terre) -> hiver (givré/neutre) -> printemps (tendre) -> été (soleil pâle).

const HERO_PALETTE = {
  "08": {
    mois: "Août",
    saison: "Fin d'été",
    bg: "#F4D592",
    nom: "Or de moisson"
  },
  "09": {
    mois: "Septembre",
    saison: "Début d'automne",
    bg: "#EAC8A4",
    nom: "Vigne rougissante"
  },
  "10": {
    mois: "Octobre",
    saison: "Automne",
    bg: "#DDB184",
    nom: "Feuille sèche"
  },
  "11": {
    mois: "Novembre",
    saison: "Fin d'automne",
    bg: "#CF9E6E",
    nom: "Châtaigne"
  },
  "12": {
    mois: "Décembre",
    saison: "Début d'hiver",
    bg: "#CFDCCE",
    nom: "Sapin givré"
  },
  "01": {
    mois: "Janvier",
    saison: "Cœur d'hiver",
    bg: "#CBDCE2",
    nom: "Bleu de gel"
  },
  "02": {
    mois: "Février",
    saison: "Fin d'hiver",
    bg: "#D8D2E2",
    nom: "Lilas d'hiver"
  },
  "03": {
    mois: "Mars",
    saison: "Début de printemps",
    bg: "#D6E4BE",
    nom: "Vert bourgeon"
  },
  "04": {
    mois: "Avril",
    saison: "Printemps",
    bg: "#CBDE9C",
    nom: "Pistache tendre"
  },
  "05": {
    mois: "Mai",
    saison: "Fin de printemps",
    bg: "#F1CBD3",
    nom: "Rose de mai"
  },
  "06": {
    mois: "Juin",
    saison: "Début d'été",
    bg: "#DEC6E0",
    nom: "Glycine"
  },
  "07": {
    mois: "Juillet",
    saison: "Été",
    bg: "#F5DB93",
    nom: "Tournesol pâle"
  }
};
if (typeof module !== "undefined") module.exports = {
  HERO_PALETTE
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "data/hero-palette.js", error: String((e && e.message) || e) }); }

// data/saints-1714.js
try { (() => {
/* ==========================================================================
   Ma petite madeleine — Calendrier des saints, almanach de 1714
   Transcrit depuis l'almanach de J. Bornoü (Source gallica.bnf.fr / BnF),
   fourni par la fondatrice. Le long « ſ » a été normalisé en « s ».
   Clés : "MM-DD". Sert à titrer chaque billet : « <Thème> de la Saint <Nom> »
   (ex. « Le vocabulaire de la Saint Anaclet », 13 juillet).

   ⚠ TRANSCRIPTION À VÉRIFIER — certains noms de l'estampe sont peu lisibles ;
   corriger ici au besoin, tout le système lit ce seul fichier.
   ========================================================================== */
window.MADELEINE_SAINTS_1714 = {
  "01-01": "La Circoncision",
  "01-02": "s. Ulric",
  "01-03": "ste Geneviève",
  "01-04": "s. Tite",
  "01-05": "s. Siméon",
  "01-06": "Les Rois",
  "01-07": "s. Lucien",
  "01-08": "s. Julien",
  "01-09": "s. Guillaume",
  "01-10": "s. Agathon",
  "01-11": "s. Théodose",
  "01-12": "s. Arcade",
  "01-13": "s. Hilaire",
  "01-14": "S. Nom de Jésus",
  "01-15": "s. Maur",
  "01-16": "s. Marcel P.",
  "01-17": "s. Antoine",
  "01-18": "Chaire de s. Pierre",
  "01-19": "s. Canut",
  "01-20": "s. Sébastien",
  "01-21": "ste Agnès",
  "01-22": "s. Vincent",
  "01-23": "s. Ildephonse",
  "01-24": "s. Timothée",
  "01-25": "Conversion de s. Paul",
  "01-26": "s. Polycarpe",
  "01-27": "s. Jean Chrysostome",
  "01-28": "Septuagésime",
  "01-29": "s. François de Sales",
  "01-30": "ste Martine",
  "01-31": "s. Pierre Nolasque",
  "02-01": "s. Ignace",
  "02-02": "La Purification",
  "02-03": "s. Blaise",
  "02-04": "Sexagésime",
  "02-05": "ste Agathe",
  "02-06": "ste Dorothée",
  "02-07": "s. Romuald",
  "02-08": "s. Jean de Matha",
  "02-09": "ste Apolline",
  "02-10": "ste Scholastique",
  "02-11": "Quinquagésime",
  "02-12": "ste Eulalie",
  "02-13": "Mardi gras",
  "02-14": "Les Cendres",
  "02-15": "s. Faustin",
  "02-16": "s. Onésime",
  "02-17": "s. Théodule",
  "02-18": "Quadragésime",
  "02-19": "s. Mansuet",
  "02-20": "s. Éleuthère",
  "02-21": "Quatre-Temps",
  "02-22": "Chaire de s. Pierre",
  "02-23": "s. Romain",
  "02-24": "s. Mathias",
  "02-25": "Réminiscère",
  "02-26": "s. Nestor",
  "02-27": "s. Léandre",
  "02-28": "s. Pazère",
  "03-01": "s. Aubin",
  "03-02": "s. Simplice",
  "03-03": "ste Cunégonde",
  "03-04": "Oculi",
  "03-05": "s. Phocas",
  "03-06": "s. Victor",
  "03-07": "s. Thomas d'Aquin",
  "03-08": "s. Philémon",
  "03-09": "ste Françoise",
  "03-10": "Les 40 Martyrs",
  "03-11": "Lætare",
  "03-12": "s. Grégoire",
  "03-13": "s. Donat",
  "03-14": "ste Mathilde",
  "03-15": "s. Longin",
  "03-16": "s. Cyriaque",
  "03-17": "ste Gertrude",
  "03-18": "Judica",
  "03-19": "s. Joseph",
  "03-20": "s. Joachim",
  "03-21": "s. Benoît",
  "03-22": "s. Paul (évêque)",
  "03-23": "s. Fidèle",
  "03-24": "s. Gabriel",
  "03-25": "Pâques Fleuries",
  "03-26": "s. Castule",
  "03-27": "s. Rupert",
  "03-28": "s. Gontran",
  "03-29": "s. Jonas",
  "03-30": "Vendredi Saint",
  "03-31": "s. Benjamin",
  "04-01": "s. François de Paule",
  "04-02": "s. Pancrace",
  "04-03": "s. Zozime",
  "04-04": "s. Vincent",
  "04-05": "s. Xyste",
  "04-06": "s. Épiphane",
  "04-07": "Quasimodo",
  "04-08": "Annonciation N.D.",
  "04-09": "ste Marie Égyptienne",
  "04-10": "s. Macaire",
  "04-11": "s. Léon",
  "04-12": "s. Jules",
  "04-13": "s. Herménégilde",
  "04-14": "s. Tiburce",
  "04-15": "s. Basile",
  "04-16": "s. Paterne",
  "04-17": "s. Anicet",
  "04-18": "s. Apollone",
  "04-19": "s. Timon",
  "04-20": "s. Marcien",
  "04-21": "s. Anselme",
  "04-22": "s. Opportune",
  "04-23": "s. Georges",
  "04-24": "s. Bon",
  "04-25": "s. Marc",
  "04-26": "s. Clet",
  "04-27": "s. Antime",
  "04-28": "s. Vital",
  "04-29": "s. Pierre M.",
  "04-30": "ste Catherine de S.",
  "05-01": "s. Jacques et s. Philippe",
  "05-02": "s. Athanase",
  "05-03": "Invention ste Croix",
  "05-04": "ste Monique",
  "05-05": "s. Hugues",
  "05-06": "s. Jean P.L.",
  "05-07": "Rogations",
  "05-08": "Apparition s. Michel",
  "05-09": "Tr. s. Nicolas",
  "05-10": "Ascension",
  "05-11": "s. Mamert",
  "05-12": "s. Nérée",
  "05-13": "s. Servais",
  "05-14": "s. Boniface",
  "05-15": "s. Torquat",
  "05-16": "s. Honoré",
  "05-17": "s. Brunon",
  "05-18": "s. Venant",
  "05-19": "Vigile",
  "05-20": "Pentecôte",
  "05-21": "s. Sophie",
  "05-22": "ste Romaine",
  "05-23": "Vigile",
  "05-24": "ste Jeanne",
  "05-25": "s. Didier",
  "05-26": "s. Philippe de Néri",
  "05-27": "s. Crescens",
  "05-28": "s. Germain",
  "05-29": "s. Maximin",
  "05-30": "s. Félix",
  "05-31": "Fête-Dieu",
  "06-01": "s. Justin",
  "06-02": "s. Marcellin",
  "06-03": "ste Clotilde",
  "06-04": "s. Optat",
  "06-05": "s. Boniface",
  "06-06": "s. Claude",
  "06-07": "Octave Fête-Dieu",
  "06-08": "s. Médard",
  "06-09": "s. Prime",
  "06-10": "s. Landry",
  "06-11": "s. Barnabé",
  "06-12": "s. Sanche",
  "06-13": "s. Antoine de Padoue",
  "06-14": "s. Basile",
  "06-15": "s. Modeste",
  "06-16": "s. Cyr",
  "06-17": "s. Avit",
  "06-18": "ste Marine",
  "06-19": "s. Gervais et s. Protais",
  "06-20": "s. Sylvère",
  "06-21": "s. Leufroy",
  "06-22": "s. Paulin",
  "06-23": "Vigile",
  "06-24": "Nativité s. Jean-Baptiste",
  "06-25": "Tr. s. Éloi",
  "06-26": "s. Jean et s. Paul",
  "06-27": "s. Crescens",
  "06-28": "Vigile",
  "06-29": "s. Pierre et s. Paul",
  "06-30": "Comm. s. Paul",
  "07-01": "Octave s. Jean",
  "07-02": "Visitation N.D.",
  "07-03": "s. Anatole",
  "07-04": "Tr. s. Martin",
  "07-05": "ste Marie",
  "07-06": "s. Tranquille",
  "07-07": "s. Alyre",
  "07-08": "ste Élisabeth",
  "07-09": "s. Audax",
  "07-10": "Les 7 Frères",
  "07-11": "Tr. s. Benoît",
  "07-12": "s. Prix",
  "07-13": "s. Anaclet",
  "07-14": "s. Bonaventure",
  "07-15": "s. Henri",
  "07-16": "N.D. du Carmel",
  "07-17": "s. Alexis",
  "07-18": "s. Clair",
  "07-19": "s. Arsène",
  "07-20": "ste Marguerite",
  "07-21": "s. Victor",
  "07-22": "ste Madeleine",
  "07-23": "s. Apollinaire",
  "07-24": "Jours Caniculaires",
  "07-25": "s. Jacques et s. Christophe",
  "07-26": "s. Éraste",
  "07-27": "s. Pantaléon",
  "07-28": "ste Anne",
  "07-29": "ste Marthe",
  "07-30": "s. Abdon",
  "07-31": "s. Germain",
  "08-01": "s. Pierre-ès-liens",
  "08-02": "s. Étienne P.",
  "08-03": "Invention s. Étienne",
  "08-04": "s. Dominique",
  "08-05": "N.D. des Neiges",
  "08-06": "Transfiguration",
  "08-07": "s. Donat",
  "08-08": "s. Cyriaque",
  "08-09": "Vigile",
  "08-10": "s. Laurent",
  "08-11": "ste Suzanne",
  "08-12": "ste Claire",
  "08-13": "s. Hippolyte",
  "08-14": "Vigile",
  "08-15": "Assomption N.D.",
  "08-16": "s. Roch",
  "08-17": "s. Hyacinthe",
  "08-18": "ste Hélène",
  "08-19": "s. Eusèbe",
  "08-20": "s. Bernard",
  "08-21": "s. Privé",
  "08-22": "s. Symphorien",
  "08-23": "s. Philippe Béniti",
  "08-24": "s. Barthélemy",
  "08-25": "s. Louis",
  "08-26": "Fin des Jours Caniculaires",
  "08-27": "s. Sulpice",
  "08-28": "s. Augustin",
  "08-29": "Décollation de s. Jean",
  "08-30": "s. Fiacre",
  "08-31": "s. Médéric",
  "09-01": "s. Leu et s. Gilles",
  "09-02": "s. Just",
  "09-03": "ste Séraphie",
  "09-04": "ste Rosalie",
  "09-05": "s. Victorin",
  "09-06": "s. Zacharie",
  "09-07": "s. Cloud",
  "09-08": "Nativité N.D.",
  "09-09": "s. Adrien",
  "09-10": "s. Nicolas de T.",
  "09-11": "s. Prothé",
  "09-12": "ste Bonne",
  "09-13": "s. Maurille",
  "09-14": "Exaltation ste Croix",
  "09-15": "s. Nicomède",
  "09-16": "ste Euphémie",
  "09-17": "s. Justin",
  "09-18": "s. Thomas de Villeneuve",
  "09-19": "Quatre-Temps",
  "09-20": "Vigile",
  "09-21": "s. Matthieu",
  "09-22": "s. Maurice",
  "09-23": "s. Lin P.",
  "09-24": "s. Gérard",
  "09-25": "s. Firmin",
  "09-26": "ste Justine",
  "09-27": "s. Côme et s. Damien",
  "09-28": "Vigile",
  "09-29": "s. Michel",
  "09-30": "s. Jérôme",
  "10-01": "s. Rémy",
  "10-02": "s. Ange Gardien",
  "10-03": "s. Léger",
  "10-04": "s. François",
  "10-05": "s. Placide",
  "10-06": "s. Bruno",
  "10-07": "s. Marc P.",
  "10-08": "ste Brigitte",
  "10-09": "s. Denis",
  "10-10": "ste Paule",
  "10-11": "ste Julienne",
  "10-12": "s. Nicaise",
  "10-13": "s. Édouard",
  "10-14": "s. Calixte",
  "10-15": "ste Thérèse",
  "10-16": "s. Gal Abbé",
  "10-17": "s. Florentin",
  "10-18": "s. Luc",
  "10-19": "s. Pierre d'Alcantara",
  "10-20": "s. Caprais",
  "10-21": "ste Ursule",
  "10-22": "s. Melon",
  "10-23": "s. Séverin",
  "10-24": "s. Magloire",
  "10-25": "s. Crépin",
  "10-26": "s. Évariste",
  "10-27": "Vigile",
  "10-28": "s. Simon et s. Jude",
  "10-29": "Tr. ste Geneviève",
  "10-30": "s. Sérapion",
  "10-31": "Vigile",
  "11-01": "La Toussaint",
  "11-02": "Les Trépassés",
  "11-03": "s. Marcel",
  "11-04": "s. Charles",
  "11-05": "s. Zacharie",
  "11-06": "s. Léonard",
  "11-07": "s. Baudouin",
  "11-08": "Les Quatre Couronnés",
  "11-09": "s. Mathurin",
  "11-10": "s. Tryphon",
  "11-11": "s. Martin",
  "11-12": "s. René",
  "11-13": "s. Brice",
  "11-14": "s. Bertrand",
  "11-15": "s. Maclou",
  "11-16": "s. Edmond",
  "11-17": "s. Grégoire",
  "11-18": "s. Odon",
  "11-19": "ste Élisabeth",
  "11-20": "s. Edme",
  "11-21": "Présentation N.D.",
  "11-22": "ste Cécile",
  "11-23": "s. Clément",
  "11-24": "s. Chrysogone",
  "11-25": "ste Catherine",
  "11-26": "ste Geneviève des Ardents",
  "11-27": "s. Colomban",
  "11-28": "s. Sosthène",
  "11-29": "Vigile",
  "11-30": "s. André",
  "12-01": "s. Éloi",
  "12-02": "s. Avent",
  "12-03": "ste Bibiane",
  "12-04": "ste Barbe",
  "12-05": "s. Sabas",
  "12-06": "s. Nicolas",
  "12-07": "s. Ambroise",
  "12-08": "Conception N.D.",
  "12-09": "ste Léocadie",
  "12-10": "s. Melchiade",
  "12-11": "s. Damase",
  "12-12": "s. Hermogène",
  "12-13": "ste Luce",
  "12-14": "s. Héron",
  "12-15": "s. Mesmin",
  "12-16": "s. Ananie",
  "12-17": "s. Lazare",
  "12-18": "s. Gatien",
  "12-19": "s. Libérat",
  "12-20": "s. Philogone",
  "12-21": "s. Thomas",
  "12-22": "s. Honorat",
  "12-23": "ste Victoire",
  "12-24": "Vigile de Noël",
  "12-25": "Noël",
  "12-26": "s. Étienne",
  "12-27": "s. Jean l'Évangéliste",
  "12-28": "Les Saints Innocents",
  "12-29": "s. Thomas de Cantorbéry",
  "12-30": "s. Sabin",
  "12-31": "s. Sylvestre"
};

/** Nom du jour, ex. saintDuJour(7, 13) → "s. Anaclet". */
window.saintDuJour = function (month, day) {
  const key = String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
  return window.MADELEINE_SAINTS_1714[key] || null;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "data/saints-1714.js", error: String((e && e.message) || e) }); }

// exports/hippolyte/LiaisonsScroll.jsx
try { (() => {
// LiaisonsScroll.jsx — récit qui défile horizontalement (16:9), exportable en vidéo.
const {
  useComposition,
  interpolate
} = window;
const {
  useState,
  useRef,
  useLayoutEffect
} = React;
const HTML_TEXT = `Un jeune<span class="po">‿</span>homme arriva à l'hôtel du<span class="na">|</span>hameau par<span class="ob">‿</span>une froide soirée d'hiver. Il<span class="po">‿</span>avait marché deux<span class="ob">‿</span>heures sous les<span class="ob">‿</span>arbres, le long des<span class="na">|</span>haies gelées. Dans la cour, un vieux cocher dételait les chevaux<span class="na">|</span>et rangeait les<span class="na">|</span>harnais en<span class="na">|</span>haut du<span class="na">|</span>hangar.<span class="sp"></span>« Les<span class="ob">‿</span>autres voyageurs son<span class="ob">t</span>-ils<span class="na">|</span>arrivés ? » demanda-<span class="ob">t</span>-il. L'aubergiste, un<span class="ob">‿</span>homme très<span class="po">‿</span>aimable, le fit<span class="po">‿</span>entrer près du feu, lui offrit<span class="po">‿</span>une soupe avec des<span class="na">|</span>haricots, des<span class="ob">‿</span>herbes du jardin et des<span class="ob">‿</span>oignons. « Quel<span class="po">‿</span>heureux<span class="na">|</span>hasard de vous<span class="ob">‿</span>avoir trouvé ! » dit le jeune<span class="po">‿</span>homme<span class="bl">|</span>en<span class="po">‿</span>ôtant son manteau.<span class="sp"></span>On lui raconta alors<span class="po">‿</span>une histoire<span class="po">‿</span>ancienne, celle des<span class="na">|</span>héros du village, ces<span class="ob">‿</span>hommes<span class="bl">‿</span>habiles qui, autrefois, avaient bâti le vieux moulin<span class="na">|</span>et creusé le grand<span class="ob">‿</span>étang. Dehors, des<span class="na">|</span>hiboux<span class="na">|</span>hululaient dans les<span class="na">|</span>hêtres, et le vent<span class="na">|</span>agitait leurs<span class="na">|</span>hautes branches. Nos deux<span class="ob">‿</span>amis restèrent<span class="po">‿</span>ainsi près des braises, et parlèrent jusqu'à une<span class="po">‿</span>heure très<span class="po">‿</span>avancée de la nuit<span class="bl">|</span>étoilée.`;
function LiaisonsPiece() {
  const {
    T,
    authoredTotal
  } = useComposition();
  const [w, setW] = useState(6000);
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (ref.current) setW(ref.current.scrollWidth);
  });
  const startX = 1920; // commence hors-champ à droite
  const endX = -(w + 200); // finit hors-champ à gauche
  const x = interpolate([0, authoredTotal], [startX, endX])(T);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#FBF6EC',
      fontFamily: "'EB Garamond', Georgia, serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '26px',
      border: '2px solid #B8862B',
      pointerEvents: 'none',
      zIndex: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '40px',
      border: '1px solid rgba(184,134,43,0.5)',
      pointerEvents: 'none',
      zIndex: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 168,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      background: 'linear-gradient(#FBF6EC 66%, rgba(251,246,236,0))',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 700,
      fontSize: 48,
      color: '#1C2B4F',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, "Les liaisons de la Saint Hippolyte"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontStyle: 'italic',
      fontSize: 27,
      color: '#B8862B',
      whiteSpace: 'nowrap'
    }
  }, "Lisez \xE0 voix haute, en suivant les couleurs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 168,
      bottom: 132,
      left: 0,
      right: 0,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "rollprompt",
    style: {
      position: 'absolute',
      left: 0,
      top: '50%',
      whiteSpace: 'nowrap',
      transform: `translate(${x}px,-50%)`,
      fontSize: 120,
      color: '#1C2B4F'
    },
    dangerouslySetInnerHTML: {
      __html: HTML_TEXT
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 132,
      background: 'linear-gradient(rgba(251,246,236,0), #FBF6EC 45%)',
      zIndex: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 54,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: 40,
      color: '#38507C',
      fontSize: 24,
      zIndex: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "ob"
  }, "\u203F"), " obligatoire"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "po"
  }, "\u203F"), " possible"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "bl"
  }, "\u203F"), " possible, non faite"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "na"
  }, "|"), " pas de liaison")));
}
window.LiaisonsPiece = LiaisonsPiece;
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/hippolyte/LiaisonsScroll.jsx", error: String((e && e.message) || e) }); }

// exports/hippolyte/animations-v3.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// animations-v3.jsx — continuous-composition animation engine.
//
// THE MODEL: the animation is ONE element tree rendered as a pure function
// of one authored-time axis. Nothing mounts or unmounts at section
// boundaries, so any element can move, morph, or persist across them by
// ordinary interpolation. The scene list (OM_SCENES) is the user-control
// view — names, order, playback durations — and the engine derives the cue
// table from it, so structure has exactly one source and cannot drift.
//
// API INDEX (every export is a window global):
//   <CompositionStage width height scenes={window.OM_SCENES}
//                     playback={window.OM_PLAYBACK} bg>
//     <Piece />   — ONE component, the whole animation
//   </CompositionStage>
//   useComposition() -> {T, CUES, time, duration, authoredTotal, playing}
//     T: authored seconds (warped per-section by user trims/speeds) —
//        key ALL choreography to T, never to wall-clock time
//     CUES: {SectionName: authoredStart} derived from OM_SCENES; an unknown
//        name returns NaN and raises a preview-only badge (never exports);
//        duplicate section names bind to the first occurrence
//   <Shot from={CUES.Build} to={CUES.Close}> — children visible between two
//     authored times (an authored hard cut in one line); children stay
//     mounted (media keeps its readiness) and are hidden outside the window
//   <Captions items={[{at, until?, text}, ...]} /> — ONE caption element,
//     at most one visible at a time, keyed to T; 'until' defaults to the
//     next item's 'at'; a last item with no 'until' stays to the end
//   WATERCOLOR (only when the Watercolor illustration skill is active —
//   otherwise ignore these entries). A painting is a function(p) written
//   against the paint kit, on a width x height sheet; it needs
//   watercolor_kit.js loaded by a <script> tag before this engine, must
//   be a stable function defined once (module scope, never an inline
//   arrow), and every component below renders <img> elements, so it all
//   exports by construction.
//   <WatercolorPainting painting={fn} from={CUES.X} to={CUES.Y} width height
//     seed scale quality style /> — the painting assembled from its own
//     STROKES: each wash / ink line / splatter is a separate layer
//     stacked over the paper, appearing in painting order between two
//     authored times (washes bloom in, ink draws tip to tail). This is the
//     default way to show a watercolor being painted. It keeps the sheet's
//     aspect ratio (size it with style, e.g. {position:'absolute', left,
//     top, width}). scale is the layers' render resolution over width x
//     height (default 1, a deliberate weight-over-dpi trade — raise it
//     toward the zoom factor if the composition zooms into the painting,
//     or toward the devicePixelRatio for a hero-sized sheet); quality is
//     0..1 layer image quality (default 0.92; 1 is the encoder's maximum).
//   useWatercolorLayers(fn, {width, height, seed, scale, quality}) -> L
//     (null if the kit isn't loaded — load watercolor_kit.js before the
//     engine — or if the painting fails to build) — the painting taken apart into strokes, for
//     choreography beyond in-order painting: L.count strokes, L.kind(i)
//     ('wash' | 'gradedWash' | 'glaze' | 'ink' | 'hatch' | 'splatter' |
//     'dryStroke' | 'reserve' | 'caption'), L.span(i) = the stroke's
//     {from, to} share of the painting's 0..1 timeline; call L.warm()
//     once after load so finished strokes pre-render off the critical
//     path (WatercolorPainting does this itself). Compose with:
//   <WatercolorSheet layers={L} style>children</WatercolorSheet> — the
//     paper the strokes sit on (keeps the sheet's aspect ratio), and
//   <WatercolorStroke index={i} at={0..1} style /> — stroke i as its own
//     element, placed where it was painted; at is its painting progress
//     (0 hidden, 1 finished — drive it from T with animate()); style lets
//     you move, scale, rotate, or fade the stroke (transform / opacity).
//     Strokes are paint, so they multiply: overlapping strokes darken
//     where they cross, as in the still image, within a few 8-bit levels
//     (tighter still at quality 1). The sheet clips to its
//     box — for strokes that fly in from outside it, set
//     style={{overflow: 'visible'}} on the WatercolorSheet. 'reserve' strokes
//     are erasures (lifted paper) — keep them where they were painted and
//     reveal them in order after the strokes they erase; moving an erase
//     around has no sensible meaning.
//   <WatercolorReveal painting={fn} from={CUES.X} to={CUES.Y} width height
//     seed steps scale format quality style />, or <WatercolorReveal
//     frames={[src, ...]} from to /> — the whole painting as ONE flat
//     image that paints on (frames pre-baked in the background, so it is
//     the lightest option and the one to zoom or pan over as a single
//     picture). Prefer WatercolorPainting when the strokes themselves
//     should appear one by one or be individually animated. format is
//     the image MIME type (default image/jpeg), quality 0..1 (default
//     0.88). Frames bake at width x height times scale (default: the
//     device pixel ratio, capped at 2) — if the composition zooms INTO
//     the painting, raise scale toward the maximum zoom so frames stay
//     crisp. The kit caps a sheet at ~12M pixels and the components clamp
//     scale to stay under it; exported video sharpness also depends on
//     the export dialog's own resolution choice.
//   Motion: Easing.{linear, easeIn|Out|InOutQuad/Cubic/Quart/Expo/Sine,
//     easeIn|Out|InOutBack, easeOutElastic}, interpolate(input, output, ease),
//     animate({from, to, start, end, ease}) -> fn(T), clamp(v, min, max)
//   Plumbing (rarely needed): Stage, PlaybackBar, TimelineContext,
//     useTime, useTimeline
//   Seek event (host/export transport): 'data-om-seek-to-time-frame',
//     detail {time, sync, playing} — the stage owns it; never implement it
//     yourself
//
// THE AUTHORING CONTRACT — this is what makes the host timeline's trim and
// speed gestures write back into YOUR file, so follow it exactly:
//   1. Declare the scene list as a JSON string literal in a plain inline
//      <script> of the main document (NOT type="text/babel", NOT a sibling
//      .jsx — only vanilla inline scripts are addressable for write-back):
//        <script>window.OM_SCENES = '[{"name":"Opening","dur":3,"desc":"The logo fades in and the title settles"},{"name":"Build","dur":5,"desc":"Bars grow to their final values"}]';</script>
//      Give every entry a "desc": one short plain-words sentence saying
//      what happens in that section. The user reads it in the timeline's
//      section popover — keep it true whenever you edit the section.
//   2. Pass the string through untouched:
//        <CompositionStage scenes={window.OM_SCENES} ...>
//   3. ALSO declare the playback setting the same way:
//        <script>window.OM_PLAYBACK = '{"mode":"loop"}';</script>
//      and pass it through untouched (values: '{"mode":"loop"}' or
//      '{"mode":"times","count":N}'; omitting keeps loop behavior but
//      leaves the host Repeat control read-only for this document).
//   IMPORTANT — the exportable-video contract: CompositionStage/Stage OWNS
//   it (the data-om-exportable-video-with-duration-secs attribute, the
//   data-om-seek-to-time-frame listener, the svg/foreignObject wrapper,
//   and font inlining). NEVER put the exportable attribute on any other
//   element — a second "exportable root" makes the host timeline and the
//   video exporter bind to the wrong element, and playback control /
//   export silently break.
//
// HOW TIME WORKS: each OM_SCENES entry is a named slice of the authored
// timeline. CUES.Name is that section's authored start (the running sum of
// authored lengths, in literal order). useComposition().T is the authored
// clock: when the user trims or speeds a section on the host timeline, the
// engine replays that section's SAME authored slice over the new playback
// length — your choreography retimes, never cuts off. The optional "nat"
// field on an entry is the engine's authored-length anchor — the host
// timeline stamps it on the first retime; don't set it by hand.
//
// CUE-FIRST DISCIPLINE (what makes a piece read as one continuous video):
//   1. Write the OM_SCENES literal FIRST — it is the piece's outline.
//   2. One helper component per section for readability, but ALL of them
//      render ALL the time inside the one tree, keyed to CUES — never
//      conditionally mounted per section.
//   3. Define exactly three motion helpers up front (e.g.
//      MOTION = {enter, draw, pop} wrapping Easing curves) and use no
//      easing or transform outside them; one caption element, one visible
//      at a time (<Captions> has this built in).
//   A shared element that crosses a boundary is just motion whose start
//   and end straddle a cue: animate({from, to, start: CUES.Build - 0.4,
//   end: CUES.Build + 0.6})(T) glides through the boundary, and a user
//   slowing either section slows the glide without breaking it.
//
// RENDER FROM T ONLY: the exporter seeks each frame with a synchronous
// commit and may serialize the stage the moment the seek event returns —
// anything painted from useEffect or your own requestAnimationFrame lags
// that commit and exports stale. Render everything visible from T and this
// is automatic. A seeked frame is a deterministic render at that time.
//
// HARD CUTS are content now, not structure: wrap a shot's elements in
// <Shot from to> (visibility toggles at the cues; children stay mounted so
// images and videos hold their readiness). Shot also doubles as the
// perf gate for heavy far-away beats.
//
// LOOP SEAMS are the one surviving boundary rule: a looping piece shows
// its last authored frame immediately before its first — make them match
// (settle your choreography by authoredTotal, open it at 0).
//
// DIAGNOSTICS: choreography that references an unknown section name (a
// rename or deletion in OM_SCENES) shows a badge below the stage in the
// preview, outside the exportable svg — visible in preview screenshots,
// never in the exported video. An OM_SCENES section with no choreography
// keyed to it is a valid empty beat, not an error.
/* END USAGE */

// ─────────────────────────────────────────────────────────────────────────────

// ── Easing functions (hand-rolled, Popmotion-style) ─────────────────────────
// All easings take t ∈ [0,1] and return eased t ∈ [0,1] (may overshoot for back/elastic).
const Easing = {
  linear: t => t,
  // Quad
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Cubic
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // Quart
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // Expo
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: t => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, -20 * t + 10);
  },
  // Sine
  easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: t => Math.sin(t * Math.PI / 2),
  easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  // Back (overshoot)
  easeOutBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  easeInOutBack: t => {
    const c1 = 1.70158,
      c2 = c1 * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
  // Elastic
  easeOutElastic: t => {
    const c4 = 2 * Math.PI / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

// ── Core interpolation helpers ──────────────────────────────────────────────

// Clamp a value to [min, max]
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// interpolate([0, 0.5, 1], [0, 100, 50], ease?) -> fn(t)
// Popmotion-style: linearly maps t across input keyframes to output values,
// with optional easing per segment (single fn or array of fns).
function interpolate(input, output, ease = Easing.linear) {
  return t => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const easeFn = Array.isArray(ease) ? ease[i] || Easing.linear : ease;
        const eased = easeFn(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// animate({from, to, start, end, ease})(t) — simpler single-segment tween.
// Returns `from` before `start`, `to` after `end`.
function animate({
  from = 0,
  to = 1,
  start = 0,
  end = 1,
  ease = Easing.easeInOutCubic
}) {
  return t => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline context ────────────────────────────────────────────────────────

const TimelineContext = React.createContext({
  time: 0,
  duration: 10,
  playing: false
});
const useTime = () => React.useContext(TimelineContext).time;
const useTimeline = () => React.useContext(TimelineContext);

// How long a marked (detail.playing === true) host seek keeps the
// external-playback latch alive with no successor. The host play bar's
// seek pump is one-in-flight/latest-wins, so its inter-seek gap is tens
// of milliseconds in the worst case — 400ms is far above that, so a
// marked stream that dies mid-play decays the latch promptly.
var SS_EXT_PLAY_MS = 400;

// ── Font inlining ───────────────────────────────────────────────────────────
// Copy every @font-face rule from the page into a <style> inside the svg's
// foreignObject, with font URLs rewritten to data: URLs. Makes the svg
// self-describing so serializing it alone (video export fast path) still
// renders with the right fonts. Sets data-om-fonts-inlined on the svg when
// done so the exporter can wait for it.

function useInlineFontsInto(svgRef) {
  React.useEffect(() => {
    const svg = svgRef.current;
    const host = svg && svg.querySelector('foreignObject > div');
    if (!svg || !host) return;
    let cancelled = false;
    (async () => {
      const rules = [];
      for (const ss of document.styleSheets) {
        let cssRules;
        try {
          cssRules = ss.cssRules;
        } catch {
          // Cross-origin sheet without crossorigin attr (e.g. the standard
          // fonts.googleapis.com <link>) — fetch the CSS text directly and
          // regex-extract the @font-face blocks.
          if (ss.href) {
            try {
              const txt = await fetch(ss.href).then(r => {
                if (!r.ok) throw 0;
                return r.text();
              });
              for (const ff of txt.match(/@font-face\s*{[^}]*}/g) || []) rules.push({
                css: ff,
                base: ss.href
              });
            } catch {}
          }
          continue;
        }
        if (!cssRules) continue;
        for (const r of cssRules) {
          if (r.type === CSSRule.FONT_FACE_RULE) {
            rules.push({
              css: r.cssText,
              base: ss.href || location.href
            });
          }
        }
      }
      const toDataURL = url => fetch(url).then(r => {
        if (!r.ok) throw 0;
        return r.blob();
      }).then(b => new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => res(url);
        fr.readAsDataURL(b);
      })).catch(() => url);
      const parts = await Promise.all(rules.map(async ({
        css,
        base
      }) => {
        const re = /url\((['"]?)([^'")]+)\1\)/g;
        let out = css,
          m;
        while (m = re.exec(css)) {
          const u = m[2];
          if (u.startsWith('data:')) continue;
          let abs;
          try {
            abs = new URL(u, base).href;
          } catch {
            continue;
          }
          out = out.split(m[0]).join(`url("${await toDataURL(abs)}")`);
        }
        return out;
      }));
      if (cancelled || !parts.length) {
        svg.setAttribute('data-om-fonts-inlined', 'true');
        return;
      }
      const style = document.createElement('style');
      style.textContent = parts.join('\n');
      host.insertBefore(style, host.firstChild);
      svg.setAttribute('data-om-fonts-inlined', 'true');
    })();
    return () => {
      cancelled = true;
    };
  }, []);
}
function Stage({
  width = 1280,
  height = 720,
  duration = 10,
  background = '#f6f4ef',
  fps = 60,
  loop = true,
  autoplay = true,
  // Parsed playback object ({mode:'loop'} | {mode:'times',count:N}) or
  // null. When present it overrides the legacy loop prop — CompositionStage
  // passes the validated value from the OM_PLAYBACK authoring contract.
  playback = null,
  persistKey = 'animstage-v3',
  children
}) {
  // Props arrive as strings when Stage is mounted via <x-import> (DC
  // projects) — coerce so style={{width}} gets a number React can px-ify.
  width = +width || 1280;
  height = +height || 720;
  duration = +duration || 10;
  fps = +fps || 60;
  if (typeof loop === 'string') loop = loop !== 'false';
  if (typeof autoplay === 'string') autoplay = autoplay !== 'false';
  const playTimes = playback && playback.mode === 'times' ? playback.count : null;
  const loopEff = playback ? playback.mode === 'loop' : loop;
  const [time, setTime] = React.useState(() => {
    try {
      const v = parseFloat(localStorage.getItem(persistKey + ':t') || '0');
      return isFinite(v) ? clamp(v, 0, duration) : 0;
    } catch {
      return 0;
    }
  });
  const [playing, setPlaying] = React.useState(autoplay);
  // The external-playback latch: true while the HOST play bar is driving
  // time forward as genuine continuous playback (its play-loop seeks
  // carry detail.playing === true). The engine's own clock stays paused
  // the whole time — exactly one clock ever drives — so this is a
  // separate bit, not a second meaning for `playing`. Set and cleared
  // in the seek handler below; decays via SS_EXT_PLAY_MS when the
  // marked stream stops without a parting unmarked seek.
  const [extPlay, setExtPlay] = React.useState(false);
  const extPlayTimerRef = React.useRef(null);
  const [hoverTime, setHoverTime] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Persist playhead
  React.useEffect(() => {
    try {
      localStorage.setItem(persistKey + ':t', String(time));
    } catch {}
  }, [time, persistKey]);

  // Auto-scale to fit viewport
  React.useEffect(() => {
    if (!stageRef.current) return;
    const el = stageRef.current;
    const measure = () => {
      const barH = 44; // playback bar height
      const s = Math.min(el.clientWidth / width, (el.clientHeight - barH) / height);
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width, height]);

  // Passes completed since playback last started. Lives in a ref so the
  // per-frame wrap can count without re-running this effect; reset on
  // every (re)start so a fresh play (or a host restart) gets the full
  // run count again.
  const passesRef = React.useRef(0);

  // Animation loop
  React.useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    passesRef.current = 0;
    const step = ts => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime(t => {
        let next = t + dt;
        if (next >= duration) {
          if (playTimes !== null) {
            // Play N times then hold the last frame — the partial pass a
            // mid-timeline start produces counts as a pass, so the piece
            // never runs longer than N full durations.
            passesRef.current += 1;
            if (passesRef.current >= playTimes) {
              next = duration;
              setPlaying(false);
            } else {
              next = next % duration;
            }
          } else if (loopEff) {
            next = next % duration;
          } else {
            next = duration;
            setPlaying(false);
          }
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, duration, loopEff, playTimes]);

  // Keyboard: space = play/pause, ← → = seek
  React.useEffect(() => {
    const onKey = e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setPlaying(p => !p);
      } else if (e.code === 'ArrowLeft') {
        setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.code === 'ArrowRight') {
        setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.key === '0' || e.code === 'Home') {
        setTime(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);

  // Video-export protocol + the editor's play bar: hosts dispatch this
  // event per frame; pause + sync the playhead so the frame shows exactly
  // that timestamp. The host play bar marks its play-loop seeks with
  // detail.playing === true — the mark latches extPlay (playback is
  // playback even when a host clock drives it), while ANY unmarked seek
  // (scrub, step, export frame, the transport's pause park) clears the
  // latch in the same commit it retimes, so a seeked frame still renders
  // exactly one scene's state. The engine's own clock pauses either way.
  React.useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    // Sync-seek capability: a dispatcher that marks its seek with
    // detail.sync === true gets the commit applied via ReactDOM.flushSync,
    // so the stage DOM reflects the seeked frame the moment dispatchEvent
    // returns. The video exporter keys off the data-om-sync-seek
    // advertisement to drop its two-display-refresh settle (that wait only
    // exists to let React's async commit land — serialization needs the
    // committed DOM, not the paint). Feature-detected: a runtime without
    // ReactDOM.flushSync never advertises and every seek takes the async
    // path. Unmarked seeks (scrubs, the host play bar) stay async — a
    // forced sync render per pointermove would tax the editor for no one.
    const canSyncSeek = typeof ReactDOM !== 'undefined' && typeof ReactDOM.flushSync === 'function';
    const onSeek = e => {
      const apply = () => {
        setPlaying(false);
        const hostPlay = !!(e.detail && e.detail.playing === true);
        if (extPlayTimerRef.current) {
          clearTimeout(extPlayTimerRef.current);
          extPlayTimerRef.current = null;
        }
        if (hostPlay) {
          // Watchdog: the latch is only as alive as its seek stream. If the
          // host stops without a parting seek (tab jank, bar unmount), the
          // latch decays on its own rather than stranding extPlaying true.
          extPlayTimerRef.current = setTimeout(() => {
            extPlayTimerRef.current = null;
            setExtPlay(false);
          }, SS_EXT_PLAY_MS);
        }
        setExtPlay(hostPlay);
        setTime(clamp(e.detail.time, 0, duration));
      };
      // flushSync is safe here: a native DOM listener runs outside React's
      // lifecycle, and the exporter's dispatchEvent is synchronous, so the
      // commit lands in the same JS task — the engine's own rAF loop can
      // never interleave between seek and serialize.
      if (canSyncSeek && e.detail && e.detail.sync === true) {
        ReactDOM.flushSync(apply);
      } else {
        apply();
      }
    };
    el.addEventListener('data-om-seek-to-time-frame', onSeek);
    if (canSyncSeek) el.setAttribute('data-om-sync-seek', 'true');
    return () => {
      el.removeEventListener('data-om-seek-to-time-frame', onSeek);
      el.removeAttribute('data-om-sync-seek');
      if (extPlayTimerRef.current) {
        clearTimeout(extPlayTimerRef.current);
        extPlayTimerRef.current = null;
      }
      // Drop the latch too: this cleanup runs on every duration change
      // (an agent edit can retime mid-host-play, no gesture involved) and
      // the new effect instance arms no watchdog — clearing only the
      // timer could strand extPlay true forever if the marked stream died
      // in the gap. Fail toward cut: the next marked seek re-latches.
      setExtPlay(false);
    };
  }, [duration]);

  // Inline @font-face rules into the svg's foreignObject so the svg is
  // self-describing — serializing it alone (for video export) then renders
  // with the right fonts. Sets data-om-fonts-inlined once done.
  useInlineFontsInto(canvasRef);
  const displayTime = hoverTime != null ? hoverTime : time;
  const ctxValue = React.useMemo(
  // extPlaying is ADDITIVE: "time is advancing under an external
  // driver's continuous playback". `playing` keeps meaning the
  // engine's OWN clock — the hidden PlaybackBar glyph (and through it
  // the host's clock-reporter/adoption channel) reads that — and
  // CompositionClock is the one consumer that widens to either.
  () => ({
    time: displayTime,
    duration,
    playing,
    extPlaying: extPlay,
    setTime,
    setPlaying
  }), [displayTime, duration, playing, extPlay]);
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      ref: stageRef,
      "data-om-starter": "animations-v3",
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#0a0a0a',
        fontFamily: 'Inter, system-ui, sans-serif'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      ref: canvasRef,
      width: width,
      height: height,
      "data-om-exportable-video-with-duration-secs": duration,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'center',
        flexShrink: 0,
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement("div", {
      xmlns: "http://www.w3.org/1999/xhtml",
      style: {
        width,
        height,
        background,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(TimelineContext.Provider, {
      value: ctxValue
    }, children))))), /*#__PURE__*/React.createElement(PlaybackBar, {
      time: displayTime,
      actualTime: time,
      duration: duration,
      playing: playing,
      onPlayPause: () => setPlaying(p => !p),
      onReset: () => {
        setTime(0);
      },
      onSeek: t => setTime(t),
      onHover: t => setHoverTime(t)
    }))
  );
}

// ── Playback bar ────────────────────────────────────────────────────────────
// Play/pause, return-to-begin, scrub track, time display.
// Uses fixed-width time fields so layout doesn't thrash.

function PlaybackBar({
  time,
  duration,
  playing,
  onPlayPause,
  onReset,
  onSeek,
  onHover
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const timeFromEvent = React.useCallback(e => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    return x * duration;
  }, [duration]);
  const onTrackMove = e => {
    if (!trackRef.current) return;
    const t = timeFromEvent(e);
    if (dragging) {
      onSeek(t);
    } else {
      onHover(t);
    }
  };
  const onTrackLeave = () => {
    if (!dragging) onHover(null);
  };
  const onTrackDown = e => {
    setDragging(true);
    const t = timeFromEvent(e);
    onSeek(t);
    onHover(null);
  };
  React.useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    const onMove = e => {
      if (!trackRef.current) return;
      const t = timeFromEvent(e);
      onSeek(t);
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, [dragging, timeFromEvent, onSeek]);
  const pct = duration > 0 ? time / duration * 100 : 0;
  const fmt = t => {
    const total = Math.max(0, t);
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    const cs = Math.floor(total * 100 % 100);
    return `${String(m).padStart(1, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };
  const mono = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';
  return /*#__PURE__*/React.createElement("div", {
    "data-omelette-chrome": true,
    style: {
      // Slimmed to visually match the host editor bar's basic row (the
      // single-scrubber look): transport first, tighter metrics, quieter
      // chrome. Shown only outside the app — the host bar suppresses this
      // whenever it is present.
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 12px',
      background: 'rgba(20,20,20,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      maxWidth: 680,
      alignSelf: 'center',
      borderRadius: 6,
      color: '#f6f4ef',
      fontFamily: 'Inter, system-ui, sans-serif',
      userSelect: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onPlayPause,
    title: "Play/pause (space)"
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l9 5-9 5V2z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    onClick: onReset,
    title: "Return to start (0)"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v10M12 2L5 7l7 5V2z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'right',
      color: '#f6f4ef'
    }
  }, fmt(time)), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseMove: onTrackMove,
    onMouseLeave: onTrackLeave,
    onMouseDown: onTrackDown,
    style: {
      flex: 1,
      height: 22,
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      background: 'oklch(72% 0.12 250)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${pct}%`,
      top: '50%',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -6,
      background: '#fff',
      borderRadius: 6,
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'left',
      color: 'rgba(246,244,239,0.55)'
    }
  }, fmt(duration)), typeof VideoEncoder !== 'undefined' && /*#__PURE__*/React.createElement(IconButton, {
    title: "Export video",
    onClick: () => window.parent.postMessage({
      type: 'omelette:request-video-export'
    }, '*')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2v7m0 0L4 6m3 3l3-3M2 12h10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
function IconButton({
  children,
  onClick,
  title
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 5,
      color: '#f6f4ef',
      cursor: 'pointer',
      padding: 0,
      transition: 'background 120ms'
    }
  }, children);
}

// ── Scene-list plumbing ──────────────────────────────────────────────────
// Guest-side validation of a scene list (the engine's own inputs: the
// authored prop, and host-dispatched updates). Mirrors the host parser's
// shape rules and constants — keep in sync with parseTimelineScenes in
// apps/web/src/shared/timeline.ts (16KB raw cap, 50 entries, dur finite in
// (0, 300]); returns null on any violation.
function ssParse(raw) {
  if (typeof raw !== 'string' || !raw || raw.length > 16 * 1024) return null;
  var parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (!Array.isArray(parsed) || parsed.length === 0 || parsed.length > 50) return null;
  for (var i = 0; i < parsed.length; i++) {
    var s = parsed[i];
    if (typeof s !== 'object' || s === null) return null;
    if (typeof s.name !== 'string' || typeof s.dur !== 'number') return null;
    if (!isFinite(s.dur) || s.dur <= 0 || s.dur > 300) return null;
  }
  return parsed;
}

// Guest-side validation of the playback value — mirrors the host parser
// (shared/timeline.ts parseTimelinePlayback): {"mode":"loop"} or
// {"mode":"times","count":1..99}, strict all-or-nothing, null otherwise.
// Callers treat null as the loop default.
function ppParse(raw) {
  if (typeof raw !== 'string' || !raw || raw.length > 256) return null;
  var parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return null;
  var keys = Object.keys(parsed);
  if (parsed.mode === 'loop') return keys.length === 1 ? {
    mode: 'loop'
  } : null;
  if (parsed.mode === 'times') {
    if (keys.length !== 2) return null;
    var c = parsed.count;
    if (typeof c !== 'number' || c !== Math.floor(c) || c < 1 || c > 99) return null;
    return {
      mode: 'times',
      count: c
    };
  }
  return null;
}

// Stamps the playback attribute VERBATIM from the authored raw string (the
// host's write-back anchors on that exact value) and listens for the
// host's post-write update event. Same shape as SceneSync; only rendered
// when the document authors a playback literal — an absent contract means
// the attribute stays absent and the document plays its default.
function PlaybackSync(props) {
  var ref = React.useRef(null);
  var raw = props.raw;
  var onUpdate = props.onUpdate;
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var root = el.closest('[data-om-exportable-video-with-duration-secs]');
    if (!root) return;
    root.setAttribute('data-om-timeline-playback', raw);
    var onEvent = function (e) {
      var next = e && e.detail;
      if (ppParse(next)) onUpdate(next);
    };
    root.addEventListener('data-om-timeline-playback-update', onEvent);
    return function () {
      root.removeEventListener('data-om-timeline-playback-update', onEvent);
      root.removeAttribute('data-om-timeline-playback');
    };
  }, [raw, onUpdate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}

// Renders inside the Stage (so it can reach the exportable root via
// closest()): stamps the scenes attribute VERBATIM from the current raw
// string — the host's write-back anchors on that exact value — and listens
// for the host's post-write update event.
function SceneSync(props) {
  var ref = React.useRef(null);
  var raw = props.raw;
  var onUpdate = props.onUpdate;
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var root = el.closest('[data-om-exportable-video-with-duration-secs]');
    if (!root) return;
    root.setAttribute('data-om-timeline-scenes', raw);
    var onEvent = function (e) {
      var next = e && e.detail;
      // Ignore anything that doesn't validate — a bad update must not tear
      // down a working composition.
      if (ssParse(next)) onUpdate(next);
    };
    root.addEventListener('data-om-timeline-scenes-update', onEvent);
    return function () {
      root.removeEventListener('data-om-timeline-scenes-update', onEvent);
      root.removeAttribute('data-om-timeline-scenes');
    };
  }, [raw, onUpdate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}

// ── Continuous composition ──────────────────────────────────────────────

var CompositionContext = React.createContext(null);
function useComposition() {
  var ctx = React.useContext(CompositionContext);
  if (!ctx) throw new Error('useComposition() must be called inside <CompositionStage>');
  return ctx;
}
function ccDerive(scenes) {
  var playStart = 0;
  var authStart = 0;
  var sections = [];
  var table = Object.create(null);
  for (var i = 0; i < scenes.length; i++) {
    var s = scenes[i];
    var nat = typeof s.nat === 'number' && isFinite(s.nat) && s.nat > 0 ? s.nat : s.dur;
    sections.push({
      name: s.name,
      playStart: playStart,
      dur: s.dur,
      authStart: authStart,
      nat: nat
    });
    if (!Object.prototype.hasOwnProperty.call(table, s.name)) {
      table[s.name] = Math.round(authStart * 1000) / 1000;
    }
    playStart += s.dur;
    authStart += nat;
  }
  return {
    sections: sections,
    table: table,
    total: Math.round(playStart * 1000) / 1000,
    authoredTotal: Math.round(authStart * 1000) / 1000
  };
}
function ccWarp(d, t) {
  var ss = d.sections;
  if (ss.length === 0) return 0;
  var idx = ss.length - 1;
  for (var i = 0; i < ss.length; i++) {
    if (t < ss[i].playStart + ss[i].dur) {
      idx = i;
      break;
    }
  }
  var s = ss[idx];
  var local = Math.min(Math.max(t - s.playStart, 0), s.dur);
  var T = s.authStart + (s.dur > 0 ? local * (s.nat / s.dur) : 0);
  return Math.min(T, d.authoredTotal);
}
var CC_META = Object.assign(Object.create(null), {
  toString: 1,
  toLocaleString: 1,
  valueOf: 1,
  toJSON: 1,
  then: 1,
  constructor: 1,
  hasOwnProperty: 1,
  isPrototypeOf: 1,
  propertyIsEnumerable: 1,
  default: 1
});
function ccCueProxy(table, unknownRef) {
  if (typeof Proxy !== 'function') return table;
  return new Proxy(table, {
    get: function (target, prop) {
      if (typeof prop !== 'string' || prop in target) return target[prop];
      if (CC_META[prop] || prop.indexOf('@@') === 0) return Object.prototype[prop];
      unknownRef.current[prop] = true;
      return NaN;
    }
  });
}
function CcUnknownWatch(props) {
  var tl = useTimeline();
  React.useEffect(function () {
    var next = Object.keys(props.unknownRef.current).sort().join(', ');
    if (next !== props.badge) props.setBadge(next);
  }, [tl.time]);
  return null;
}
function CompositionClock(props) {
  var tl = useTimeline();
  var d = props.derived;
  var T = ccWarp(d, tl.time);
  var value = React.useMemo(function () {
    return {
      T: T,
      CUES: props.cues,
      time: tl.time,
      duration: tl.duration,
      authoredTotal: d.authoredTotal,
      playing: tl.playing || tl.extPlaying === true
    };
  }, [T, props.cues, tl.time, tl.duration, d, tl.playing, tl.extPlaying]);
  return /*#__PURE__*/React.createElement(CompositionContext.Provider, {
    value: value
  }, props.children);
}
function Shot(props) {
  var c = useComposition();
  var from = +props.from;
  var to = props.to == null ? Infinity : +props.to;
  var on = isFinite(from) && c.T >= from && c.T < to;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      visibility: on ? 'visible' : 'hidden'
    }
  }, props.children);
}
var CAPTION_FADE = 0.18;
function Captions(props) {
  var c = useComposition();
  var t = c.T;
  var items = (props.items || []).filter(function (it) {
    return it && isFinite(+it.at);
  }).sort(function (a, b) {
    return a.at - b.at;
  });
  var active = null;
  var end = Infinity;
  for (var i = 0; i < items.length; i++) {
    if (t < items[i].at) break;
    active = items[i];
    end = typeof active.until === 'number' && isFinite(active.until) ? active.until : i + 1 < items.length ? items[i + 1].at : Infinity;
  }
  if (!active || t >= end) return null;
  var o = Math.min(1, (t - active.at) / CAPTION_FADE);
  if (isFinite(end)) o = Math.min(o, (end - t) / CAPTION_FADE);
  o = Math.max(0, Math.min(1, o));
  return /*#__PURE__*/React.createElement("div", {
    "data-om-caption": true,
    style: Object.assign({
      position: 'absolute',
      left: '8%',
      right: '8%',
      bottom: '7%',
      textAlign: 'center',
      opacity: o,
      pointerEvents: 'none',
      font: '500 30px Inter, system-ui, sans-serif',
      color: '#f6f4ef',
      textShadow: '0 1px 14px rgba(0,0,0,0.45)'
    }, props.style)
  }, active.text);
}
function CompositionStage(props) {
  var width = +props.width || 1280;
  var height = +props.height || 720;
  var bg = props.bg || '#0b0b0e';
  var autoplay = props.autoplay == null ? true : String(props.autoplay) !== 'false';
  var loop = props.loop == null ? true : String(props.loop) !== 'false';
  var state = React.useState(props.scenes);
  var raw = state[0];
  var setRaw = state[1];
  var scenes = React.useMemo(function () {
    return ssParse(raw);
  }, [raw]);
  var pstate = React.useState(props.playback);
  var praw = pstate[0];
  var setPraw = pstate[1];
  var pb = React.useMemo(function () {
    return ppParse(praw);
  }, [praw]);
  var unknownRef = React.useRef({});
  var badgeState = React.useState('');
  var badge = badgeState[0];
  var setBadge = badgeState[1];
  var derived = React.useMemo(function () {
    unknownRef.current = {};
    return scenes ? ccDerive(scenes) : null;
  }, [scenes]);
  var cues = React.useMemo(function () {
    return derived ? ccCueProxy(derived.table, unknownRef) : null;
  }, [derived]);
  React.useEffect(function () {
    var next = Object.keys(unknownRef.current).sort().join(', ');
    if (next !== badge) setBadge(next);
  });
  if (!scenes) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0b0e',
        color: '#c96442',
        font: '500 16px Inter, system-ui, sans-serif',
        textAlign: 'center'
      }
    }, "animations-v3: the scenes prop isn't a valid JSON scene list", /*#__PURE__*/React.createElement("br", null), "(expected '[", '{', "\"name\":\"\u2026\",\"dur\":N", '}', ", \u2026]')");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Stage, {
    width: width,
    height: height,
    duration: derived.total,
    background: bg,
    autoplay: autoplay,
    loop: loop,
    playback: pb
  }, /*#__PURE__*/React.createElement(SceneSync, {
    raw: raw,
    onUpdate: setRaw
  }), typeof praw === 'string' && praw !== '' && /*#__PURE__*/React.createElement(PlaybackSync, {
    raw: praw,
    onUpdate: setPraw
  }), /*#__PURE__*/React.createElement(CompositionClock, {
    derived: derived,
    cues: cues
  }, props.children), /*#__PURE__*/React.createElement(CcUnknownWatch, {
    unknownRef: unknownRef,
    badge: badge,
    setBadge: setBadge
  })), badge !== '' &&
  /*#__PURE__*/
  // Sibling of Stage, outside the exportable <svg>: visible in the
  // preview (and its screenshots), never in the exported video.
  React.createElement("div", {
    "data-om-unknown-cues": true,
    style: {
      position: 'absolute',
      left: 12,
      bottom: 56,
      zIndex: 10,
      padding: '6px 10px',
      borderRadius: 6,
      background: 'rgba(0,0,0,0.72)',
      color: '#e8906a',
      font: '500 12px Inter, system-ui, sans-serif',
      pointerEvents: 'none'
    }
  }, "choreography references unknown section", badge.indexOf(',') >= 0 ? 's' : '', ": ", badge));
}

// Strokes as layers: paint multiplies, so stroke images stacked with
// mix-blend-mode:multiply over the paper reproduce the flat render.

var WC_PIXEL_CAP = 11000000;
function wcLayerOpts(props) {
  var w = +props.width || 900,
    h = +props.height || 1200;
  var askScale = +props.scale || 1;
  return {
    width: w,
    height: h,
    scale: Math.min(askScale, Math.sqrt(WC_PIXEL_CAP / (w * h))),
    seed: props.seed == null ? undefined : +props.seed,
    quality: props.quality == null ? undefined : +props.quality
  };
}
var wcWarned = {};
function wcWarnOnce(key, message, err) {
  if (wcWarned[key]) return;
  wcWarned[key] = true;
  console.warn(message, err);
}
function useWatercolorLayers(painting, opts) {
  var kit = window.WatercolorKit;
  if (typeof painting !== 'function' || !kit || typeof kit.layers !== 'function') return null;
  try {
    return kit.layers(painting, wcLayerOpts(opts || {}));
  } catch (e) {
    wcWarnOnce('layers:' + e, 'watercolor painting failed to build; rendering the fallback sheet', e);
    return null;
  }
}
var WatercolorSheetContext = React.createContext(null);
function WatercolorSheet(props) {
  var L = props.layers || null;
  var style = Object.assign({
    position: 'relative',
    display: 'block',
    width: '100%',
    aspectRatio: L ? L.width + ' / ' + L.height : '3 / 4',
    isolation: 'isolate',
    overflow: 'hidden'
  }, props.style);
  if (!L) {
    return /*#__PURE__*/React.createElement("div", {
      style: Object.assign(style, {
        background: '#f4f1e8',
        color: '#8a8270',
        font: '12px system-ui, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      })
    }, "watercolor-kit.js not loaded (or the painting failed to build)");
  }
  return /*#__PURE__*/React.createElement(WatercolorSheetContext.Provider, {
    value: L
  }, /*#__PURE__*/React.createElement("div", {
    style: style,
    "data-om-watercolor-sheet": true
  }, /*#__PURE__*/React.createElement("img", {
    src: L.paper,
    alt: props.alt || '',
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      display: 'block'
    }
  }), props.children));
}
function WatercolorStroke(props) {
  var fromSheet = React.useContext(WatercolorSheetContext);
  var L = props.layers || fromSheet;
  if (!L) return null;
  var i = +props.index;
  if (!(i >= 0) || i >= L.count) return null;
  var at = props.at == null ? 1 : clamp(+props.at, 0, 1);
  if (!(at > 0)) return null;
  var box, src;
  try {
    box = L.box(i);
    src = box ? L.src(i, at) : null;
  } catch (e) {
    wcWarnOnce('stroke:' + i + ':' + e, 'watercolor stroke ' + i + ' failed to render; skipping it', e);
    return null;
  }
  if (!box || !src) return null;
  var style = Object.assign({
    position: 'absolute',
    display: 'block',
    left: box.x * 100 + '%',
    top: box.y * 100 + '%',
    width: box.w * 100 + '%',
    height: box.h * 100 + '%',
    mixBlendMode: L.kind(i) === 'reserve' ? 'normal' : 'multiply',
    pointerEvents: 'none'
  }, props.style);
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    "data-om-watercolor-stroke": i,
    "data-om-stroke-kind": L.kind(i),
    style: style
  });
}

// The default watercolor moment: the painting assembled from its strokes,
// each appearing in painting order (a pure function of T).
function WatercolorPainting(props) {
  var c = useComposition();
  var from = +props.from || 0;
  var to = props.to == null ? from + 6 : +props.to;
  var u = clamp((c.T - from) / Math.max(to - from, 0.001), 0, 1);
  var eased = Easing.easeInOutQuad(u);
  var L = useWatercolorLayers(props.painting, props);
  var tick = React.useState(0)[1];
  var warmed = React.useRef(null);
  React.useEffect(function () {
    if (!L || typeof L.warm !== 'function') return;
    var p = L.warm();
    if (warmed.current === p) return;
    var live = true;
    p.then(function () {
      warmed.current = p;
      if (live) tick(function (x) {
        return x + 1;
      });
    });
    return function () {
      live = false;
    };
  }, [L && L.paper, props.painting]);
  var strokes = [];
  if (L) {
    for (var i = 0; i < L.count; i++) {
      var sp = L.span(i);
      var at = clamp((eased - sp.from) / Math.max(sp.to - sp.from, 1e-6), 0, 1);
      if (at <= 0) break;
      strokes.push(/*#__PURE__*/React.createElement(WatercolorStroke, {
        key: i,
        layers: L,
        index: i,
        at: at
      }));
    }
  }
  return /*#__PURE__*/React.createElement(WatercolorSheet, {
    layers: L,
    style: props.style,
    alt: props.alt
  }, strokes);
}

// Paint-on watercolor reveal as a pure function of T — an <img> with a data:
// URL (the exporter serializes those as-is; a live canvas would export blank).
function WatercolorReveal(props) {
  var c = useComposition();
  var from = +props.from || 0;
  var to = props.to == null ? from + 6 : +props.to;
  var u = clamp((c.T - from) / Math.max(to - from, 0.001), 0, 1);
  var style = Object.assign({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }, props.style);
  var frames = Array.isArray(props.frames) && props.frames.length ? props.frames : null;
  var steps = frames ? frames.length - 1 : Math.max(1, Math.round(+props.steps || 36));
  var i = Math.min(steps, Math.round(Easing.easeInOutQuad(u) * steps));
  var painting = typeof props.painting === 'function' ? props.painting : null;
  var kit = window.WatercolorKit;
  var w = +props.width || 900,
    h = +props.height || 1200;
  var askScale = +props.scale || Math.min(2, window.devicePixelRatio || 1);
  var opts = {
    width: w,
    height: h,
    scale: Math.min(askScale, Math.sqrt(11000000 / (w * h))),
    seed: props.seed == null ? undefined : +props.seed,
    steps: steps,
    type: props.format || 'image/jpeg',
    quality: props.quality == null ? 0.88 : +props.quality
  };
  var key = opts.width + 'x' + opts.height + '#' + opts.seed + '@' + opts.scale + '/' + steps + ':' + opts.type + '/' + opts.quality;
  var cache = React.useRef({
    fn: null,
    key: '',
    frames: {},
    baking: false
  }).current;
  var tick = React.useState(0)[1];
  if (cache.fn !== painting && String(cache.fn) !== String(painting) || cache.key !== key) {
    cache.key = key;
    cache.frames = {};
    cache.baking = false;
  }
  cache.fn = painting;
  React.useEffect(function () {
    if (frames || cache.baking || !painting || !kit || typeof kit.bake !== 'function') return;
    cache.baking = true;
    var target = cache.frames;
    try {
      kit.bake(painting, opts, function (n, _t, url) {
        target[n] = url;
      }).then(function (all) {
        if (cache.frames !== target) return;
        for (var n = 0; n < all.length; n++) target[n] = all[n];
        tick(function (x) {
          return x + 1;
        });
      }).catch(function () {
        /* failed bake: the guarded lazy path below still renders */
      });
    } catch (e) {
      /* oversized painting: the guarded lazy path below still renders */
    }
  });
  if (frames) return /*#__PURE__*/React.createElement("img", {
    src: frames[i],
    alt: props.alt || '',
    style: style
  });
  if (!kit || !painting) {
    return /*#__PURE__*/React.createElement("div", {
      style: Object.assign({
        width: '100%',
        height: '100%',
        background: '#f4f1e8',
        color: '#8a8270',
        font: '12px system-ui, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }, props.style)
    }, "watercolor-kit.js not loaded (or no painting function)");
  }
  if (!cache.frames[i]) {
    try {
      cache.frames[i] = kit.frame(painting, Object.assign({}, opts, {
        at: i / steps
      }));
    } catch (e) {
      return /*#__PURE__*/React.createElement("div", {
        style: Object.assign({
          width: '100%',
          height: '100%',
          background: '#f4f1e8',
          color: '#8a8270',
          font: '12px system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }, props.style)
      }, "painting too large to render (", String(e && e.message).slice(0, 80), ")");
    }
  }
  return /*#__PURE__*/React.createElement("img", {
    src: cache.frames[i],
    alt: props.alt || '',
    style: style
  });
}
Object.assign(window, {
  Easing,
  interpolate,
  animate,
  clamp,
  TimelineContext,
  useTime,
  useTimeline,
  Stage,
  PlaybackBar,
  CompositionStage,
  useComposition,
  Shot,
  Captions,
  WatercolorReveal,
  WatercolorPainting,
  WatercolorSheet,
  WatercolorStroke,
  useWatercolorLayers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/hippolyte/animations-v3.jsx", error: String((e && e.message) || e) }); }

// exports/tiktok/animations-v2.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// animations-v2.jsx — timeline animation engine with scene sequencing.
// Exports (on window): Stage, Sprite, TextSprite, ImageSprite, RectSprite,
//   VideoSprite, PlaybackBar, Easing, interpolate, animate, clamp,
//   useTime, useTimeline, useSprite, SceneStage, useScene.
//
// ALWAYS structure the piece as a scene sequence — even a single-scene
// piece is a one-entry list. Do NOT also load animations.jsx: v2 contains
// the whole engine (same globals; loading both means last-wins).
//   <x-import component-from-global-scope="MyPiece"
//             from="./animations-v2.jsx ./my-piece.jsx"></x-import>
//
// THE AUTHORING CONTRACT — this is what makes the host timeline's
// trim and speed gestures write back into YOUR file, so follow it
// exactly:
//   1. Declare the scene list as a JSON string literal in a plain inline
//      <script> of the main document (NOT type="text/babel", NOT a sibling
//      .jsx — only vanilla inline scripts are addressable for write-back):
//        <script>window.OM_SCENES = '[{"name":"Opening","dur":3},{"name":"Peak","dur":4.5}]';</script>
//   2. Pass the string through untouched: <SceneStage scenes={window.OM_SCENES} ...>
//   3. Map scene names to components via the children object.
//   IMPORTANT — the exportable-video contract: SceneStage/Stage OWNS it
//   (the data-om-exportable-video-with-duration-secs attribute, the
//   data-om-seek-to-time-frame listener, the svg/foreignObject wrapper,
//   and font inlining). NEVER put the exportable attribute on any other
//   element — wrapping the stage in a second "exportable root" makes the
//   host timeline and the video exporter bind to the wrong element, and
//   playback control / export silently break.
//   4. ALSO declare the playback setting the same way — this is what makes
//      the host timeline's Repeat control write back into your file:
//        <script>window.OM_PLAYBACK = '{"mode":"loop"}';</script>
//      and pass it through untouched: <SceneStage playback={window.OM_PLAYBACK} ...>
//      Values: '{"mode":"loop"}' (play forever, the default) or
//      '{"mode":"times","count":N}' (play N times, then hold the last
//      frame). Omitting it keeps loop behavior but leaves the host
//      control read-only for this document.
//
//   IMPORTANT — the exportable-video contract: SceneStage/Stage OWNS it
//   (the data-om-exportable-video-with-duration-secs attribute, the
//   data-om-seek-to-time-frame listener, the svg/foreignObject wrapper,
//   and font inlining). NEVER put the exportable attribute on any other
//   element — wrapping the stage in a second "exportable root" makes the
//   host timeline and the video exporter bind to the wrong element, and
//   playback control / export silently break.
//
//   <SceneStage width={1280} height={720} scenes={window.OM_SCENES}
//               bg="#0b0b0e">
//     {{ 'Opening': Opening, 'Peak': Peak }}
//   </SceneStage>
//
// SceneStage({width, height, scenes, bg, autoplay=true, loop=true,
//   transition='cut', children}) — wraps Stage. Scenes play in authored order; total
// duration is the sum of durs, kept in sync with the exportable attr
// automatically. The host timeline shows the scenes as blocks: dragging
// an edge retimes one scene, clicking a block opens rename/speed — and every
// edit lands in the JSON literal in source, then the composition reflows
// live (no reload) via the data-om-timeline-scenes-update event. (The
// time ruler above the blocks is a seek surface — click or drag scrubs;
// it never edits timing.)
//
// TIMING IS USER-EDITABLE (time-stretch): when the user changes a scene's
// length, the engine remaps your scene clock so the SAME choreography
// plays faster or slower — never cut off. That only works for motion
// driven by the scene clock, so inside a scene component ALWAYS animate
// from useScene()'s {localTime, progress} (never your own clock, never
// useTime directly).
//
// The same rule is what makes video export exact AND fast: the exporter
// seeks each frame with a synchronous commit and may serialize the stage
// the moment the seek event returns — anything painted from useEffect or
// your own requestAnimationFrame lags that commit and exports stale.
// Render everything visible from the scene clock's values and this is
// automatic. (Nested <VideoSprite> videos are handled by the exporter.)
//
// TRANSITIONS: scene boundaries are hard cuts by default
// (transition="cut") — exactly one scene is mounted at any time. Scene
// layers are keyed by scene index, so inactive scenes are fully unmounted
// (they do zero per-frame work) and a scene never leaks component state
// into a neighbor, even when two adjacent scenes use the same component.
//   transition="overlap" is opt-in and for OPAQUE scenes only: during
// playback the outgoing scene stays mounted beneath the incoming one for
// ~2 frames, frozen at the frame it had just rendered, so the moments
// where the incoming scene hasn't painted real content yet (an <img>
// still decoding, a <video> before its first frame) show the outgoing
// scene rather than a flash of stage background. It cannot fix content
// that paints WRONG — a video whose first frame paints black paints
// black over the underlay too. Only use it
// when every scene paints the full frame — a scene on a transparent stage
// background will show the previous scene through it (ghosting); keep
// "cut" for those. Paused seeks and video-export frame seeks
// (data-om-seek-to-time-frame) never overlap — a seeked frame always
// renders exactly one scene's state. Playback driven by the EDITOR's
// play bar counts as playback too: the host marks its play-loop seeks
// (detail.playing === true on the same seek event) and the engine reads
// the marked stream as continuous playback, so overlap may engage —
// including across the loop seam, matching self-driven playback — while
// unmarked seeks (scrubs, steps, export frames) keep the
// exactly-one-scene rule. A tick-sized forward step or drag
// WHILE PLAYING reads as playback and may briefly overlap (bounded, ~2
// frames). The loop wrap (last scene back to the first, when loop is on —
// the default) is a boundary like any other and overlaps too, so the
// frame-match contract below applies across the loop seam as well.
//
// THE FRAME-MATCH CONTRACT (this is what makes boundaries seamless, in
// BOTH modes): a scene's entry/exit effects must be 0 at progress 0 and
// at progress 1 — its first and last rendered frames are the settled
// composition, with entrances and exits choreographed strictly inside
// (0, 1). No entry-only squash/rotation/opacity: a scene whose frame at
// progress 0 is mid-squash, rotated, or transparent pops at every cut and
// ghosts under overlap.
//
// The provided sprites bake in entry/exit fades (entryDur/exitDur), so a
// sprite that spans a scene edge violates the contract by construction:
// set entryDur={0} on sprites alive at the scene's first frame and
// exitDur={0} on sprites alive at its last, or inset the sprite's span so
// its fades complete inside the scene. The flip side: a scene that exits
// to fully transparent shows NOTHING at its last frame, so "overlap"
// would hold an empty underlay — following the contract is what makes
// overlap worth turning on.
//
// Scene entries are independent component instances, even when two names
// map to the same component — state never carries across a boundary. For
// one continuous component spanning a retimable stretch (a <video> that
// must keep playing through), use a single scene entry with extra fields
// driving its phases, not two entries of the same component.
//
// Each scene entry may carry extra fields ({"name":"Peak","dur":4,
// "text":"ACME"}) — the active scene component receives the whole entry as
// `scene` plus {localTime, progress, dur, index, count}, and can call
// useScene() anywhere below. Scenes own their entrances/exits — ramp any
// effect up only AFTER progress 0 and settle it back to 0 BEFORE progress
// 1, per THE FRAME-MATCH CONTRACT above. The optional "nat" field is the engine's
// time-stretch anchor — the host timeline manages it; don't set it by
// hand.
/* END USAGE */

// ─────────────────────────────────────────────────────────────────────────────

// ── Easing functions (hand-rolled, Popmotion-style) ─────────────────────────
// All easings take t ∈ [0,1] and return eased t ∈ [0,1] (may overshoot for back/elastic).
const Easing = {
  linear: t => t,
  // Quad
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Cubic
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // Quart
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // Expo
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: t => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, -20 * t + 10);
  },
  // Sine
  easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: t => Math.sin(t * Math.PI / 2),
  easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  // Back (overshoot)
  easeOutBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  easeInOutBack: t => {
    const c1 = 1.70158,
      c2 = c1 * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
  // Elastic
  easeOutElastic: t => {
    const c4 = 2 * Math.PI / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

// ── Core interpolation helpers ──────────────────────────────────────────────

// Clamp a value to [min, max]
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// interpolate([0, 0.5, 1], [0, 100, 50], ease?) -> fn(t)
// Popmotion-style: linearly maps t across input keyframes to output values,
// with optional easing per segment (single fn or array of fns).
function interpolate(input, output, ease = Easing.linear) {
  return t => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const easeFn = Array.isArray(ease) ? ease[i] || Easing.linear : ease;
        const eased = easeFn(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// animate({from, to, start, end, ease})(t) — simpler single-segment tween.
// Returns `from` before `start`, `to` after `end`.
function animate({
  from = 0,
  to = 1,
  start = 0,
  end = 1,
  ease = Easing.easeInOutCubic
}) {
  return t => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline context ────────────────────────────────────────────────────────

const TimelineContext = React.createContext({
  time: 0,
  duration: 10,
  playing: false
});
const useTime = () => React.useContext(TimelineContext).time;
const useTimeline = () => React.useContext(TimelineContext);

// ── Sprite ──────────────────────────────────────────────────────────────────
// Renders children only when the playhead is inside [start, end]. Provides
// a sub-context with `localTime` (seconds since start) and `progress` (0..1).
//
//   <Sprite start={2} end={5}>
//     {({ localTime, progress }) => <Thing x={progress * 100} />}
//   </Sprite>
//
// Or as a plain wrapper — children can call useSprite() themselves.

const SpriteContext = React.createContext({
  localTime: 0,
  progress: 0,
  duration: 0
});
const useSprite = () => React.useContext(SpriteContext);
function Sprite({
  start = 0,
  end = Infinity,
  children,
  keepMounted = false
}) {
  const {
    time
  } = useTimeline();
  const visible = time >= start && time <= end;
  if (!visible && !keepMounted) return null;
  const duration = end - start;
  const localTime = Math.max(0, time - start);
  const progress = duration > 0 && isFinite(duration) ? clamp(localTime / duration, 0, 1) : 0;
  const value = {
    localTime,
    progress,
    duration,
    visible
  };
  return /*#__PURE__*/React.createElement(SpriteContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
}

// ── Sample sprite components ────────────────────────────────────────────────

// TextSprite: fades/slides text in on entry, holds, then fades out on exit.
// Props: text, x, y, size, color, font, entryDur, exitDur, align
function TextSprite({
  text,
  x = 0,
  y = 0,
  size = 48,
  color = '#111',
  font = 'Inter, system-ui, sans-serif',
  weight = 600,
  entryDur = 0.45,
  exitDur = 0.35,
  entryEase = Easing.easeOutBack,
  exitEase = Easing.easeInCubic,
  align = 'left',
  letterSpacing = '-0.01em'
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let ty = 0;
  if (localTime < entryDur) {
    const t = entryEase(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    ty = (1 - t) * 16;
  } else if (localTime > exitStart) {
    const t = exitEase(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    ty = -t * 8;
  }
  const translateX = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      transform: `translate(${translateX}, ${ty}px)`,
      opacity,
      fontFamily: font,
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing,
      whiteSpace: 'pre',
      lineHeight: 1.1,
      willChange: 'transform, opacity'
    }
  }, text);
}

// ImageSprite: scales + fades in; optional Ken Burns drift during hold.
function ImageSprite({
  src,
  x = 0,
  y = 0,
  width = 400,
  height = 300,
  entryDur = 0.6,
  exitDur = 0.4,
  kenBurns = false,
  kenBurnsScale = 1.08,
  radius = 12,
  fit = 'cover',
  placeholder = null // {label: string} for striped placeholder
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutCubic(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    scale = 0.96 + 0.04 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = (kenBurns ? kenBurnsScale : 1) + 0.02 * t;
  } else if (kenBurns) {
    const holdSpan = exitStart - entryDur;
    const holdT = holdSpan > 0 ? (localTime - entryDur) / holdSpan : 0;
    scale = 1 + (kenBurnsScale - 1) * holdT;
  }
  const content = placeholder ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'repeating-linear-gradient(135deg, #e9e6df 0 10px, #dcd8cf 10px 20px)',
      color: '#6b6458',
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, placeholder.label || 'image') : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      borderRadius: radius,
      overflow: 'hidden',
      willChange: 'transform, opacity'
    }
  }, content);
}

// RectSprite: simple rectangle that animates position/size/color via props.
// Useful demo primitive — takes a `render` fn for per-frame customization.
function RectSprite({
  x = 0,
  y = 0,
  width = 100,
  height = 100,
  color = '#111',
  radius = 8,
  entryDur = 0.4,
  exitDur = 0.3,
  render // optional: (ctx) => style overrides
}) {
  const spriteCtx = useSprite();
  const {
    localTime,
    duration
  } = spriteCtx;
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutBack(clamp(localTime / entryDur, 0, 1));
    opacity = clamp(localTime / entryDur, 0, 1);
    scale = 0.4 + 0.6 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInQuad(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = 1 - 0.15 * t;
  }
  const overrides = render ? render(spriteCtx) : {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      background: color,
      borderRadius: radius,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      willChange: 'transform, opacity',
      ...overrides
    }
  });
}

// ── Font inlining ───────────────────────────────────────────────────────────
// Copy every @font-face rule from the page into a <style> inside the svg's
// foreignObject, with font URLs rewritten to data: URLs. Makes the svg
// self-describing so serializing it alone (video export fast path) still
// renders with the right fonts. Sets data-om-fonts-inlined on the svg when
// done so the exporter can wait for it.

function useInlineFontsInto(svgRef) {
  React.useEffect(() => {
    const svg = svgRef.current;
    const host = svg && svg.querySelector('foreignObject > div');
    if (!svg || !host) return;
    let cancelled = false;
    (async () => {
      const rules = [];
      for (const ss of document.styleSheets) {
        let cssRules;
        try {
          cssRules = ss.cssRules;
        } catch {
          // Cross-origin sheet without crossorigin attr (e.g. the standard
          // fonts.googleapis.com <link>) — fetch the CSS text directly and
          // regex-extract the @font-face blocks.
          if (ss.href) {
            try {
              const txt = await fetch(ss.href).then(r => {
                if (!r.ok) throw 0;
                return r.text();
              });
              for (const ff of txt.match(/@font-face\s*{[^}]*}/g) || []) rules.push({
                css: ff,
                base: ss.href
              });
            } catch {}
          }
          continue;
        }
        if (!cssRules) continue;
        for (const r of cssRules) {
          if (r.type === CSSRule.FONT_FACE_RULE) {
            rules.push({
              css: r.cssText,
              base: ss.href || location.href
            });
          }
        }
      }
      const toDataURL = url => fetch(url).then(r => {
        if (!r.ok) throw 0;
        return r.blob();
      }).then(b => new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => res(url);
        fr.readAsDataURL(b);
      })).catch(() => url);
      const parts = await Promise.all(rules.map(async ({
        css,
        base
      }) => {
        const re = /url\((['"]?)([^'")]+)\1\)/g;
        let out = css,
          m;
        while (m = re.exec(css)) {
          const u = m[2];
          if (u.startsWith('data:')) continue;
          let abs;
          try {
            abs = new URL(u, base).href;
          } catch {
            continue;
          }
          out = out.split(m[0]).join(`url("${await toDataURL(abs)}")`);
        }
        return out;
      }));
      if (cancelled || !parts.length) {
        svg.setAttribute('data-om-fonts-inlined', 'true');
        return;
      }
      const style = document.createElement('style');
      style.textContent = parts.join('\n');
      host.insertBefore(style, host.firstChild);
      svg.setAttribute('data-om-fonts-inlined', 'true');
    })();
    return () => {
      cancelled = true;
    };
  }, []);
}
function Stage({
  width = 1280,
  height = 720,
  duration = 10,
  background = '#f6f4ef',
  fps = 60,
  loop = true,
  autoplay = true,
  // Parsed playback object ({mode:'loop'} | {mode:'times',count:N}) or
  // null. When present it overrides the legacy loop prop — SceneStage
  // passes the validated value from the OM_PLAYBACK authoring contract.
  playback = null,
  persistKey = 'animstage',
  children
}) {
  // Props arrive as strings when Stage is mounted via <x-import> (DC
  // projects) — coerce so style={{width}} gets a number React can px-ify.
  width = +width || 1280;
  height = +height || 720;
  duration = +duration || 10;
  fps = +fps || 60;
  if (typeof loop === 'string') loop = loop !== 'false';
  if (typeof autoplay === 'string') autoplay = autoplay !== 'false';
  const playTimes = playback && playback.mode === 'times' ? playback.count : null;
  const loopEff = playback ? playback.mode === 'loop' : loop;
  const [time, setTime] = React.useState(() => {
    try {
      const v = parseFloat(localStorage.getItem(persistKey + ':t') || '0');
      return isFinite(v) ? clamp(v, 0, duration) : 0;
    } catch {
      return 0;
    }
  });
  const [playing, setPlaying] = React.useState(autoplay);
  // The external-playback latch: true while the HOST play bar is driving
  // time forward as genuine continuous playback (its play-loop seeks
  // carry detail.playing === true). The engine's own clock stays paused
  // the whole time — exactly one clock ever drives — so this is a
  // separate bit, not a second meaning for `playing`. Set and cleared
  // in the seek handler below; decays via SS_EXT_PLAY_MS when the
  // marked stream stops without a parting unmarked seek.
  const [extPlay, setExtPlay] = React.useState(false);
  const extPlayTimerRef = React.useRef(null);
  const [hoverTime, setHoverTime] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Persist playhead
  React.useEffect(() => {
    try {
      localStorage.setItem(persistKey + ':t', String(time));
    } catch {}
  }, [time, persistKey]);

  // Auto-scale to fit viewport
  React.useEffect(() => {
    if (!stageRef.current) return;
    const el = stageRef.current;
    const measure = () => {
      const barH = 44; // playback bar height
      const s = Math.min(el.clientWidth / width, (el.clientHeight - barH) / height);
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width, height]);

  // Passes completed since playback last started. Lives in a ref so the
  // per-frame wrap can count without re-running this effect; reset on
  // every (re)start so a fresh play (or a host restart) gets the full
  // run count again.
  const passesRef = React.useRef(0);

  // Animation loop
  React.useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    passesRef.current = 0;
    const step = ts => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime(t => {
        let next = t + dt;
        if (next >= duration) {
          if (playTimes !== null) {
            // Play N times then hold the last frame — the partial pass a
            // mid-timeline start produces counts as a pass, so the piece
            // never runs longer than N full durations.
            passesRef.current += 1;
            if (passesRef.current >= playTimes) {
              next = duration;
              setPlaying(false);
            } else {
              next = next % duration;
            }
          } else if (loopEff) {
            next = next % duration;
          } else {
            next = duration;
            setPlaying(false);
          }
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, duration, loopEff, playTimes]);

  // Keyboard: space = play/pause, ← → = seek
  React.useEffect(() => {
    const onKey = e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setPlaying(p => !p);
      } else if (e.code === 'ArrowLeft') {
        setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.code === 'ArrowRight') {
        setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.key === '0' || e.code === 'Home') {
        setTime(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);

  // Video-export protocol + the editor's play bar: hosts dispatch this
  // event per frame; pause + sync the playhead so the frame shows exactly
  // that timestamp. The host play bar marks its play-loop seeks with
  // detail.playing === true — the mark latches extPlay (playback is
  // playback even when a host clock drives it), while ANY unmarked seek
  // (scrub, step, export frame, the transport's pause park) clears the
  // latch in the same commit it retimes, so a seeked frame still renders
  // exactly one scene's state. The engine's own clock pauses either way.
  React.useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    // Sync-seek capability: a dispatcher that marks its seek with
    // detail.sync === true gets the commit applied via ReactDOM.flushSync,
    // so the stage DOM reflects the seeked frame the moment dispatchEvent
    // returns. The video exporter keys off the data-om-sync-seek
    // advertisement to drop its two-display-refresh settle (that wait only
    // exists to let React's async commit land — serialization needs the
    // committed DOM, not the paint). Feature-detected: a runtime without
    // ReactDOM.flushSync never advertises and every seek takes the async
    // path. Unmarked seeks (scrubs, the host play bar) stay async — a
    // forced sync render per pointermove would tax the editor for no one.
    const canSyncSeek = typeof ReactDOM !== 'undefined' && typeof ReactDOM.flushSync === 'function';
    const onSeek = e => {
      const apply = () => {
        setPlaying(false);
        const hostPlay = !!(e.detail && e.detail.playing === true);
        if (extPlayTimerRef.current) {
          clearTimeout(extPlayTimerRef.current);
          extPlayTimerRef.current = null;
        }
        if (hostPlay) {
          // Watchdog: the latch is only as alive as its seek stream. If the
          // host stops without a parting seek (tab jank, bar unmount), the
          // latch decays on its own — and the expiry setState is itself the
          // render that lets SceneSwitch drop an open window, so expiry can
          // never strand a frozen two-layer frame.
          extPlayTimerRef.current = setTimeout(() => {
            extPlayTimerRef.current = null;
            setExtPlay(false);
          }, SS_EXT_PLAY_MS);
        }
        setExtPlay(hostPlay);
        setTime(clamp(e.detail.time, 0, duration));
      };
      // flushSync is safe here: a native DOM listener runs outside React's
      // lifecycle, and the exporter's dispatchEvent is synchronous, so the
      // commit lands in the same JS task — the engine's own rAF loop can
      // never interleave between seek and serialize.
      if (canSyncSeek && e.detail && e.detail.sync === true) {
        ReactDOM.flushSync(apply);
      } else {
        apply();
      }
    };
    el.addEventListener('data-om-seek-to-time-frame', onSeek);
    if (canSyncSeek) el.setAttribute('data-om-sync-seek', 'true');
    return () => {
      el.removeEventListener('data-om-seek-to-time-frame', onSeek);
      el.removeAttribute('data-om-sync-seek');
      if (extPlayTimerRef.current) {
        clearTimeout(extPlayTimerRef.current);
        extPlayTimerRef.current = null;
      }
      // Drop the latch too: this cleanup runs on every duration change
      // (an agent edit can retime mid-host-play, no gesture involved) and
      // the new effect instance arms no watchdog — clearing only the
      // timer could strand extPlay true forever if the marked stream died
      // in the gap. Fail toward cut: the next marked seek re-latches.
      setExtPlay(false);
    };
  }, [duration]);

  // Inline @font-face rules into the svg's foreignObject so the svg is
  // self-describing — serializing it alone (for video export) then renders
  // with the right fonts. Sets data-om-fonts-inlined once done.
  useInlineFontsInto(canvasRef);
  const displayTime = hoverTime != null ? hoverTime : time;
  const ctxValue = React.useMemo(
  // extPlaying is ADDITIVE: "time is advancing under an external
  // driver's continuous playback". `playing` keeps meaning the
  // engine's OWN clock — the hidden PlaybackBar glyph (and through it
  // the host's clock-reporter/adoption channel) reads that — and
  // SceneSwitch is the one consumer that widens to either.
  () => ({
    time: displayTime,
    duration,
    playing,
    extPlaying: extPlay,
    setTime,
    setPlaying
  }), [displayTime, duration, playing, extPlay]);
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      ref: stageRef,
      "data-om-starter": "animations-v2",
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#0a0a0a',
        fontFamily: 'Inter, system-ui, sans-serif'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      ref: canvasRef,
      width: width,
      height: height,
      "data-om-exportable-video-with-duration-secs": duration,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'center',
        flexShrink: 0,
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement("div", {
      xmlns: "http://www.w3.org/1999/xhtml",
      style: {
        width,
        height,
        background,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(TimelineContext.Provider, {
      value: ctxValue
    }, children))))), /*#__PURE__*/React.createElement(PlaybackBar, {
      time: displayTime,
      actualTime: time,
      duration: duration,
      playing: playing,
      onPlayPause: () => setPlaying(p => !p),
      onReset: () => {
        setTime(0);
      },
      onSeek: t => setTime(t),
      onHover: t => setHoverTime(t)
    }))
  );
}

// ── Playback bar ────────────────────────────────────────────────────────────
// Play/pause, return-to-begin, scrub track, time display.
// Uses fixed-width time fields so layout doesn't thrash.

function PlaybackBar({
  time,
  duration,
  playing,
  onPlayPause,
  onReset,
  onSeek,
  onHover
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const timeFromEvent = React.useCallback(e => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    return x * duration;
  }, [duration]);
  const onTrackMove = e => {
    if (!trackRef.current) return;
    const t = timeFromEvent(e);
    if (dragging) {
      onSeek(t);
    } else {
      onHover(t);
    }
  };
  const onTrackLeave = () => {
    if (!dragging) onHover(null);
  };
  const onTrackDown = e => {
    setDragging(true);
    const t = timeFromEvent(e);
    onSeek(t);
    onHover(null);
  };
  React.useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    const onMove = e => {
      if (!trackRef.current) return;
      const t = timeFromEvent(e);
      onSeek(t);
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, [dragging, timeFromEvent, onSeek]);
  const pct = duration > 0 ? time / duration * 100 : 0;
  const fmt = t => {
    const total = Math.max(0, t);
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    const cs = Math.floor(total * 100 % 100);
    return `${String(m).padStart(1, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };
  const mono = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';
  return /*#__PURE__*/React.createElement("div", {
    "data-omelette-chrome": true,
    style: {
      // Slimmed to visually match the host editor bar's basic row (the
      // single-scrubber look): transport first, tighter metrics, quieter
      // chrome. Shown only outside the app — the host bar suppresses this
      // whenever it is present.
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 12px',
      background: 'rgba(20,20,20,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      maxWidth: 680,
      alignSelf: 'center',
      borderRadius: 6,
      color: '#f6f4ef',
      fontFamily: 'Inter, system-ui, sans-serif',
      userSelect: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onPlayPause,
    title: "Play/pause (space)"
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l9 5-9 5V2z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    onClick: onReset,
    title: "Return to start (0)"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v10M12 2L5 7l7 5V2z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'right',
      color: '#f6f4ef'
    }
  }, fmt(time)), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseMove: onTrackMove,
    onMouseLeave: onTrackLeave,
    onMouseDown: onTrackDown,
    style: {
      flex: 1,
      height: 22,
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      background: 'oklch(72% 0.12 250)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${pct}%`,
      top: '50%',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -6,
      background: '#fff',
      borderRadius: 6,
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'left',
      color: 'rgba(246,244,239,0.55)'
    }
  }, fmt(duration)), typeof VideoEncoder !== 'undefined' && /*#__PURE__*/React.createElement(IconButton, {
    title: "Export video",
    onClick: () => window.parent.postMessage({
      type: 'omelette:request-video-export'
    }, '*')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2v7m0 0L4 6m3 3l3-3M2 12h10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
function IconButton({
  children,
  onClick,
  title
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 5,
      color: '#f6f4ef',
      cursor: 'pointer',
      padding: 0,
      transition: 'background 120ms'
    }
  }, children);
}

// ── VideoSprite ─────────────────────────────────────────────────────────────
// Renders a <video> that loops within [start,end] of its source at `speed`,
// kept in sync with the Stage's playhead. Carries the
// data-om-exportable-video-play-* attrs so video export can mix its audio.
//
//   <VideoSprite src="clip.mp4" start={2} end={5} speed={1}
//     style={{ width: 640, height: 360 }} />

function VideoSprite({
  src,
  start = 0,
  end,
  speed = 1,
  style,
  ...rest
}) {
  start = +start || 0;
  speed = +speed || 1;
  if (end != null) end = +end || undefined;
  const t = useTime();
  const ref = React.useRef(null);
  const span = Math.max(0.001, (end ?? start + 1) - start);
  React.useEffect(() => {
    const v = ref.current;
    if (!v || v.readyState < 1) return;
    const target = start + t * speed % span;
    if (Math.abs(v.currentTime - target) > 0.05) v.currentTime = target;
  }, [t, start, span, speed]);
  return /*#__PURE__*/React.createElement("video", _extends({
    ref: ref,
    src: src,
    muted: true,
    playsInline: true,
    preload: "auto",
    "data-om-exportable-video-play-start": start,
    "data-om-exportable-video-play-end": end ?? start + span,
    "data-om-exportable-video-play-speed": speed,
    style: {
      display: 'block',
      objectFit: 'cover',
      ...style
    }
  }, rest));
}
Object.assign(window, {
  Easing,
  interpolate,
  animate,
  clamp,
  TimelineContext,
  useTime,
  useTimeline,
  Sprite,
  SpriteContext,
  useSprite,
  TextSprite,
  ImageSprite,
  RectSprite,
  VideoSprite,
  Stage,
  PlaybackBar
});

// ── Scene sequencing ─────────────────────────────────────────────────────
// Guest-side validation of a scene list (the engine's own inputs: the
// authored prop, and host-dispatched updates). Mirrors the host parser's
// shape rules and constants — keep in sync with parseTimelineScenes in
// apps/web/src/shared/timeline.ts (16KB raw cap, 50 entries, dur finite in
// (0, 300]); returns null on any violation.
function ssParse(raw) {
  if (typeof raw !== 'string' || !raw || raw.length > 16 * 1024) return null;
  var parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (!Array.isArray(parsed) || parsed.length === 0 || parsed.length > 50) return null;
  for (var i = 0; i < parsed.length; i++) {
    var s = parsed[i];
    if (typeof s !== 'object' || s === null) return null;
    if (typeof s.name !== 'string' || typeof s.dur !== 'number') return null;
    if (!isFinite(s.dur) || s.dur <= 0 || s.dur > 300) return null;
  }
  return parsed;
}

// Guest-side validation of the playback value — mirrors the host parser
// (shared/timeline.ts parseTimelinePlayback): {"mode":"loop"} or
// {"mode":"times","count":1..99}, strict all-or-nothing, null otherwise.
// Callers treat null as the loop default.
function ppParse(raw) {
  if (typeof raw !== 'string' || !raw || raw.length > 256) return null;
  var parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return null;
  var keys = Object.keys(parsed);
  if (parsed.mode === 'loop') return keys.length === 1 ? {
    mode: 'loop'
  } : null;
  if (parsed.mode === 'times') {
    if (keys.length !== 2) return null;
    var c = parsed.count;
    if (typeof c !== 'number' || c !== Math.floor(c) || c < 1 || c > 99) return null;
    return {
      mode: 'times',
      count: c
    };
  }
  return null;
}

// Stamps the playback attribute VERBATIM from the authored raw string (the
// host's write-back anchors on that exact value) and listens for the
// host's post-write update event. Same shape as SceneSync; only rendered
// when the document authors a playback literal — an absent contract means
// the attribute stays absent and the document plays its default.
function PlaybackSync(props) {
  var ref = React.useRef(null);
  var raw = props.raw;
  var onUpdate = props.onUpdate;
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var root = el.closest('[data-om-exportable-video-with-duration-secs]');
    if (!root) return;
    root.setAttribute('data-om-timeline-playback', raw);
    var onEvent = function (e) {
      var next = e && e.detail;
      if (ppParse(next)) onUpdate(next);
    };
    root.addEventListener('data-om-timeline-playback-update', onEvent);
    return function () {
      root.removeEventListener('data-om-timeline-playback-update', onEvent);
      root.removeAttribute('data-om-timeline-playback');
    };
  }, [raw, onUpdate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}
var SceneContext = React.createContext(null);
function useScene() {
  return React.useContext(SceneContext);
}

// Renders inside the Stage (so it can reach the exportable root via
// closest()): stamps the scenes attribute VERBATIM from the current raw
// string — the host's write-back anchors on that exact value — and listens
// for the host's post-write update event.
function SceneSync(props) {
  var ref = React.useRef(null);
  var raw = props.raw;
  var onUpdate = props.onUpdate;
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var root = el.closest('[data-om-exportable-video-with-duration-secs]');
    if (!root) return;
    root.setAttribute('data-om-timeline-scenes', raw);
    var onEvent = function (e) {
      var next = e && e.detail;
      // Ignore anything that doesn't validate — a bad update must not tear
      // down a working composition.
      if (ssParse(next)) onUpdate(next);
    };
    root.addEventListener('data-om-timeline-scenes-update', onEvent);
    return function () {
      root.removeEventListener('data-om-timeline-scenes-update', onEvent);
      root.removeAttribute('data-om-timeline-scenes');
    };
  }, [raw, onUpdate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}

// ── Scene transitions ────────────────────────────────────────────────────
// A boundary tick only counts as "natural playback" when the playhead
// advanced by at most this many seconds. The guard keeps scrubs and long
// jumps (which move time arbitrarily) from reading as playback, and it is
// deliberately loose: half a second admits playback down to 2fps, because
// a false negative silently disables overlap on exactly the heavy scenes
// it serves, while a false positive (a slow forward drag while playing)
// costs two cosmetic frames.
var SS_MAX_TICK = 0.5;
// How many engine ticks the outgoing scene stays mounted under
// transition="overlap": the boundary commit plus one more frame.
var SS_OVERLAP_TICKS = 2;
// Wall-clock ceiling on a window, backstopping the tick budget: ticks are
// only spent by renders, and a pinned clock (the PlaybackBar's hover
// preview holds displayTime still even while playing) stops producing
// them — without this ceiling, both layers could persist for as long as
// the mouse rests on the scrub track. 500ms keeps the tick budget intact
// for playback down to ~4fps; the nudge effect in SceneSwitch guarantees
// a render arrives to enforce it even when the clock is pinned.
var SS_OVERLAP_MAX_MS = 500;
// How long a marked (detail.playing === true) host seek keeps the
// external-playback latch alive with no successor. The host play bar's
// seek pump is one-in-flight/latest-wins, so its inter-seek gap is tens
// of milliseconds in the worst case — 400ms is far above that, and it
// sits below SS_OVERLAP_MAX_MS so a stream that dies mid-window decays
// the latch (and with it the window) no later than the window's own
// wall-clock ceiling would have closed it.
var SS_EXT_PLAY_MS = 400;

// True only for a boundary crossed by what reads as natural forward
// playback: the engine advancing one tick from scene i into scene i+1, or
// wrapping last→first under loop. Export seeks can never pass — the
// export protocol pauses before it retimes, and arming requires playing —
// and neither can paused scrubs or arrow-steps, host scene-edit events
// (dt === 0), or long jumps. A forward drag or arrow-step WHILE PLAYING
// that lands just past a boundary does pass — it is indistinguishable
// from a playback tick by design — and costs a bounded, cosmetic
// two-frame window.
function ssNaturalAdvance(last, idx, t, count, total, playing, loopOn) {
  if (!playing || count < 2) return false;
  if (idx === last.idx + 1) {
    var dt = t - last.t;
    return dt > 0 && dt <= SS_MAX_TICK;
  }
  if (last.idx === count - 1 && idx === 0 && loopOn && t > 0) {
    // Without loop the engine never wraps (it clamps and pauses at the
    // end), so a wrap-shaped pair can only be a user gesture — a cut. And
    // the transport's reset gestures (return-to-start, Home, '0') land on
    // exactly t = 0 without pausing, while a genuine modulo wrap is almost
    // surely fractional — t > 0 rejects resets, and the cheap failure mode
    // is one skipped cosmetic overlap at the seam.
    var dtWrap = t + total - last.t;
    // Two layered defenses against a fake wrap after a mid-play trim
    // shrinks the total. When the wrap happens on the rAF loop's dt=0
    // re-priming tick (the engine path), t is exactly last.t % total, so
    // dtWrap is exactly 0 in IEEE arithmetic and the > 0 test rejects it.
    // When the clock is PINNED instead (the PlaybackBar hover preview sets
    // the displayed time directly, no re-priming tick), dtWrap can land
    // positive while t sits deep inside scene 0 — the t <= one-tick guard
    // is what rejects that path.
    return dtWrap > 0 && dtWrap <= SS_MAX_TICK && t <= SS_MAX_TICK;
  }
  return false;
}

// A scene's inner tree: the scene component under its two context
// providers. The nested TimelineContext.Provider exists in EVERY layer,
// not just frozen ones, for two reasons. Context propagation bypasses
// React's identical-element bailout, so a frozen layer needs a provider
// whose value has stopped changing — without one, Sprite/VideoSprite
// inside the frozen scene would keep reading the live clock through the
// outer provider, see time run past their spans, and blank out (or
// re-seek a video) mid-overlap. And the tree at a layer's keyed position
// must never change shape between roles: a current→previous type change
// would remount the subtree, the very thing the scene key exists to
// prevent. For the current layer the provider re-provides the live value
// unchanged, which is invisible to consumers.
function ssSceneInner(scenes, idx, wallTime, total, map, timelineValue) {
  var scene = scenes[idx];
  // TIME-STRETCH: when the entry carries "nat" (its natural/authored
  // duration — the host timeline stamps it on the first trim), the user's
  // dur edits retime the choreography rather than cutting it: localTime
  // runs 0..nat over dur wall-seconds, so compressing a scene plays the
  // SAME motion faster and stretching slows it. progress is unchanged
  // either way (localTime/nat === wallTime/dur). No nat → factor 1.
  var nat = typeof scene.nat === 'number' && isFinite(scene.nat) && scene.nat > 0 ? scene.nat : scene.dur;
  var stretch = scene.dur > 0 ? nat / scene.dur : 1;
  var localTime = wallTime * stretch;
  var ctx = {
    scene: scene,
    localTime: localTime,
    progress: nat > 0 ? localTime / nat : 0,
    dur: nat,
    index: idx,
    count: scenes.length,
    total: total
  };
  // Own-property lookup: a scene named "constructor" or "toString" must hit
  // the unmapped-scene diagnostic, not a prototype-chain member.
  var Comp = Object.prototype.hasOwnProperty.call(map, scene.name) ? map[scene.name] : null;
  return /*#__PURE__*/React.createElement(TimelineContext.Provider, {
    value: timelineValue
  }, /*#__PURE__*/React.createElement(SceneContext.Provider, {
    value: ctx
  }, Comp ? /*#__PURE__*/React.createElement(Comp, ctx) :
  /*#__PURE__*/
  // An unmapped name renders a quiet diagnostic instead of a dead
  // frame — the mismatch is an authoring bug worth seeing.
  React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.25)',
      font: '500 18px Inter, system-ui, sans-serif'
    }
  }, "unmapped scene: ", scene.name)));
}

// One scene layer: the positioned wrapper that gives a scene its stable
// keyed identity (the scene's index in the authored list) and its role
// styling. The SAME entry keeps its DOM when its role changes (current →
// previous under "overlap" — no unmount/remount, so CSS transitions and
// <video>/<canvas> state survive), while DIFFERENT entries never share
// DOM, even when two adjacent scenes map to the same component type.
// zIndex is set only while an overlap window is active (frozen beneath,
// current above); outside a window the wrapper adds no stacking context.
function ssSceneLayer(idx, z, frozen, inner) {
  return /*#__PURE__*/React.createElement("div", {
    key: idx,
    "data-om-scene-layer": idx,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: z,
      pointerEvents: frozen ? 'none' : undefined
    }
  }, inner);
}

// The active-scene selector. Lives INSIDE Stage so useTime sees the
// timeline context. Renders the current scene's layer — plus, under
// transition="overlap" and only across a naturally-played boundary, the
// outgoing scene's layer beneath it for SS_OVERLAP_TICKS engine ticks.
// The outgoing scene is frozen EXACTLY as last rendered: its stored inner
// element is reused by reference, so the underlay is the frame that was
// just on screen (no synthesized end state), React bails out of the
// identical element (the inactive scene does zero per-frame work), and
// its clock — both contexts — stays pinned at the pre-boundary values.
// The scene's own internal state updates still render: the clock is
// frozen, the subtree isn't dead.
function SceneSwitch(props) {
  var scenes = props.scenes;
  var map = props.map || {};
  var overlapMode = props.transition === 'overlap';
  var timeline = useTimeline();
  var t = timeline.time;
  // Playback is playback whichever clock drives it: the engine's own rAF
  // loop (timeline.playing) or the host play bar's marked seek stream
  // (timeline.extPlaying). Nothing that must stay a cut sets either bit —
  // scrubs, steps, and export frames arrive without the playing mark (an
  // export seek may carry detail.sync, which changes WHEN the commit
  // happens, not what it commits), and clear extPlaying in the same
  // commit they retime — so the window invariant's "a paused render is a
  // SEEK frame" reading is unchanged.
  var playing = timeline.playing || timeline.extPlaying === true;
  var starts = [0];
  for (var i = 0; i < scenes.length; i++) starts.push(starts[i] + scenes[i].dur);
  var total = starts[starts.length - 1];
  // The playhead's scene; the t === total edge (export's last frame, a
  // scrub parked at the end) belongs to the last scene, not to nothing.
  var idx = scenes.length - 1;
  for (var j = 0; j < scenes.length; j++) {
    if (t < starts[j + 1]) {
      idx = j;
      break;
    }
  }
  var wallTime = Math.min(Math.max(t - starts[idx], 0), scenes[idx].dur);
  var inner = ssSceneInner(scenes, idx, wallTime, total, map, timeline);

  // Overlap bookkeeping. It lives in refs and mutates during render, which
  // is safe here because the mutating branches are gated on (t, idx)
  // differing from the previous render's values — a double-invoked render
  // re-runs them as a no-op. (A discarded concurrent render could advance
  // the refs for a frame that never commits; this engine drives time with
  // urgent setState from rAF, so renders aren't interleaved — and the
  // worst case is an overlap window skipped or cut short, never a wrong
  // seeked frame.)
  var lastRef = React.useRef(null); // {idx, t, inner} as of the previous render
  var overlayRef = React.useRef(null); // the active window; invariant below

  // THE OVERLAP WINDOW INVARIANT. A window may exist only while ALL hold:
  //   1. the transition mode is 'overlap';
  //   2. this render is playing — a paused render is a SEEK frame (the
  //      export protocol pauses in the same commit as it retimes), and a
  //      seeked frame must show exactly one scene's state;
  //   3. the current scene is still the one the window opened into
  //      (idx === toIdx);
  //   4. the scenes array is the same object the window opened under (a
  //      host scene edit mid-window invalidates the frozen layer);
  //   5. fewer than SS_OVERLAP_TICKS distinct engine ticks have rendered
  //      since the boundary.
  // The clause below drops the window the moment ANY of these fails, and
  // dropping is terminal: a new window takes a new natural boundary.
  if (overlapMode && lastRef.current) {
    var last = lastRef.current;
    if (last.idx !== idx) {
      // Boundary crossed since the previous render: open a window only for
      // a natural advance, freezing the outgoing scene's last-rendered
      // tree. Anything else (seek, jump, edit) is a cut and clears any
      // window already open.
      overlayRef.current = ssNaturalAdvance(last, idx, t, scenes.length, total, playing, props.loop === true) ? {
        fromIdx: last.idx,
        toIdx: idx,
        scenes: scenes,
        ticks: 0,
        bornAt: Date.now(),
        inner: last.inner
      } : null;
    } else if (overlayRef.current && last.t !== t) {
      overlayRef.current.ticks += 1;
    }
  }
  var ov = overlayRef.current;
  if (ov && (!overlapMode || !playing || idx !== ov.toIdx || scenes !== ov.scenes || ov.ticks >= SS_OVERLAP_TICKS || Date.now() - ov.bornAt > SS_OVERLAP_MAX_MS)) {
    overlayRef.current = ov = null;
  }
  lastRef.current = {
    idx: idx,
    t: t,
    inner: inner
  };

  // The nudge: while a window exists, guarantee a future render so the
  // checks above get a chance to run even if the clock pins (see
  // SS_OVERLAP_MAX_MS). On the normal path the window dies of its tick
  // budget first and the armed timeout is cleaned up without firing.
  var nudgeState = React.useState(0);
  var setNudge = nudgeState[1];
  React.useEffect(function () {
    if (!overlayRef.current) return undefined;
    var id = setTimeout(function () {
      setNudge(function (n) {
        return n + 1;
      });
    }, SS_OVERLAP_MAX_MS + 17);
    return function () {
      clearTimeout(id);
    };
  });
  if (!ov) return [ssSceneLayer(idx, undefined, false, inner)];
  return [ssSceneLayer(ov.fromIdx, 0, true, ov.inner), ssSceneLayer(idx, 1, false, inner)];
}
function SceneStage(props) {
  var width = +props.width || 1280;
  var height = +props.height || 720;
  var bg = props.bg || '#0b0b0e';
  var autoplay = props.autoplay == null ? true : String(props.autoplay) !== 'false';
  var loop = props.loop == null ? true : String(props.loop) !== 'false';
  // Anything other than the exact string 'overlap' means the default 'cut'
  // — a typo must degrade to today's behavior, never to a new one.
  var transition = props.transition === 'overlap' ? 'overlap' : 'cut';
  // The raw string is state: a host write (trim, speed, rename) arrives as
  // the scenes-update event and re-renders the whole composition from the
  // new value — durations AND the Stage duration — without a reload.
  var state = React.useState(props.scenes);
  var raw = state[0];
  var setRaw = state[1];
  var scenes = React.useMemo(function () {
    return ssParse(raw);
  }, [raw]);
  // Playback raw string is state for the same reason the scenes raw is:
  // a host write arrives as the update event and re-renders the engine
  // with the new mode, no reload. Invalid or absent degrades to the
  // legacy loop prop.
  var pstate = React.useState(props.playback);
  var praw = pstate[0];
  var setPraw = pstate[1];
  var pb = React.useMemo(function () {
    return ppParse(praw);
  }, [praw]);
  if (!scenes) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0b0e',
        color: '#c96442',
        font: '500 16px Inter, system-ui, sans-serif',
        textAlign: 'center'
      }
    }, "animations-v2: the scenes prop isn't a valid JSON scene list", /*#__PURE__*/React.createElement("br", null), "(expected '[", '{', "\"name\":\"\u2026\",\"dur\":N", '}', ", \u2026]')");
  }
  var total = 0;
  for (var i = 0; i < scenes.length; i++) total += scenes[i].dur;
  total = Math.round(total * 1000) / 1000;
  // The loop-seam behavior (SceneSwitch's wrap overlap) follows the
  // EFFECTIVE mode: a run-N composition doesn't wrap on its final pass,
  // but its intermediate wraps cross the seam like any loop.
  var loopEff = pb ? pb.mode !== 'times' || pb.count > 1 : loop;
  var inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SceneSync, {
    raw: raw,
    onUpdate: setRaw
  }), typeof praw === 'string' && praw !== '' && /*#__PURE__*/React.createElement(PlaybackSync, {
    raw: praw,
    onUpdate: setPraw
  }), /*#__PURE__*/React.createElement(SceneSwitch, {
    scenes: scenes,
    map: props.children,
    transition: transition,
    loop: loopEff
  }));
  return /*#__PURE__*/React.createElement(Stage, {
    width: width,
    height: height,
    duration: total,
    background: bg,
    autoplay: autoplay,
    loop: loop,
    playback: pb
  }, inner);
}
Object.assign(window, {
  SceneStage,
  useScene
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/tiktok/animations-v2.jsx", error: String((e && e.message) || e) }); }

// exports/tiktok/madeleine-scenes.jsx
try { (() => {
/* madeleine-scenes.jsx — scènes de la vidéo TikTok "Le vocabulaire des animaux" */
const {
  useScene,
  clamp,
  Easing,
  VideoSprite
} = window;
const NAVY = "#1C2B4F",
  IVORY = "#FBF6EC",
  GOLD = "#F4D592",
  GOLDMID = "#D9AE5C",
  GOLDDK = "#B8862B";
const CORM = "'Cormorant Garamond', Georgia, serif";
const EBG = "'EB Garamond', Georgia, serif";
const U = "../../uploads/";
function Brand() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 108,
      left: 0,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/madeleine-logo-transparent.png",
    alt: "",
    style: {
      width: 132,
      height: 132
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontWeight: 600,
      fontSize: 70,
      color: IVORY,
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, "Ma petite madeleine"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontStyle: "italic",
      fontSize: 54,
      color: GOLDMID,
      letterSpacing: "0.14em",
      marginTop: 6
    }
  }, "French Class"))));
}
function Cta() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 150,
      left: 0,
      width: "100%",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: EBG,
      fontWeight: 600,
      fontSize: 58,
      letterSpacing: "0.02em",
      color: GOLD
    }
  }, "mapetitemadeleine.substack.com"));
}

// Intro
const DEFAULT_TOPIC = {
  kicker: "Learn French Daily",
  title: "Le vocabulaire|des animaux",
  sub: "Guess the missing word.",
  level: "LEVEL A2 · BEGINNER"
};
function getTopic() {
  try {
    return Object.assign({}, DEFAULT_TOPIC, JSON.parse(window.OM_TOPIC));
  } catch (e) {
    return DEFAULT_TOPIC;
  }
}
function Intro() {
  const {
    progress
  } = useScene();
  const topic = getTopic();
  const t = Easing.easeOutCubic(clamp(progress / 0.18, 0, 1));
  const scale = 0.97 + 0.03 * t;
  const drift = 1 + 0.02 * progress; // subtle continuous zoom
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: NAVY
    }
  }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transform: `scale(${scale * drift})`,
      opacity: t
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontStyle: "italic",
      fontSize: 54,
      color: GOLDMID,
      letterSpacing: "0.28em",
      textTransform: "uppercase"
    }
  }, topic.kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 2,
      background: GOLDMID,
      margin: "34px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontWeight: 600,
      fontSize: 118,
      color: IVORY,
      lineHeight: 1.14,
      textAlign: "center"
    }
  }, topic.title.split("|").map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("br", null), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontStyle: "italic",
      fontSize: 52,
      color: GOLD,
      marginTop: 30
    }
  }, topic.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 78,
      background: "#F4EBD8",
      color: NAVY,
      fontFamily: EBG,
      fontWeight: 700,
      fontSize: 58,
      letterSpacing: "0.08em",
      padding: "24px 66px",
      borderRadius: 999,
      whiteSpace: "nowrap"
    }
  }, topic.level)));
}

// Round (question -> reveal)
function Round({
  scene
}) {
  const {
    progress,
    localTime,
    dur
  } = useScene();
  const revealAt = dur * 0.52;
  const rt = Easing.easeOutBack(clamp((localTime - revealAt) / 0.5, 0, 1));
  const revealed = localTime >= revealAt;
  // subtle blank pulse before reveal
  const pulse = revealed ? 1 : 0.55 + 0.45 * Math.abs(Math.sin(localTime * 2.2));
  // slow ken burns on image across whole scene
  const kb = 1 + 0.06 * progress;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: NAVY
    }
  }, /*#__PURE__*/React.createElement(Brand, null), !scene.verb && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 424,
      left: 0,
      width: "100%",
      textAlign: "center",
      fontFamily: CORM,
      fontStyle: "italic",
      fontSize: 50,
      color: GOLD,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, getTopic().prompt || "Guess the word"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 508,
      left: 240,
      width: 600,
      height: 600,
      borderRadius: 28,
      overflow: "hidden",
      boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
      border: `3px solid ${GOLDMID}`,
      background: NAVY
    }
  }, scene.video ? /*#__PURE__*/React.createElement(VideoSprite, {
    src: U + scene.video,
    start: 0,
    end: scene.videoDur || dur,
    speed: scene.videoSpeed || 1,
    style: {
      width: "100%",
      height: "100%",
      transform: `scale(${kb})`,
      transformOrigin: "center"
    }
  }) : scene.img === "PLACEHOLDER" || !scene.img ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 22,
      background: "#233461"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 90,
      color: GOLDMID
    }
  }, "\u269C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: EBG,
      fontStyle: "italic",
      fontSize: 34,
      color: GOLD,
      textAlign: "center",
      padding: "0 40px"
    }
  }, scene.slot || "image \u00e0 venir")) : /*#__PURE__*/React.createElement("img", {
    src: U + scene.img,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: `scale(${kb})`,
      transformOrigin: "center"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 1166,
      left: 60,
      width: 960,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontSize: scene.textSize || 72,
      color: IVORY,
      lineHeight: 1.3,
      textWrap: "balance"
    }
  }, /*#__PURE__*/React.createElement("span", null, (scene.before || "").split("\n").map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("br", null), l)), " "), scene.word2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      minWidth: scene.blankWidth2 || scene.blankWidth || 210,
      borderBottom: `7px dotted ${GOLD}`,
      position: "relative",
      verticalAlign: "bottom",
      height: 96
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 6,
      color: GOLD,
      fontWeight: 600,
      opacity: rt,
      transform: `translateY(${(1 - rt) * 14}px)`
    }
  }, revealed ? scene.word2 : "\u00A0"), !revealed && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 2,
      fontSize: "1.1em",
      fontWeight: 700,
      opacity: pulse,
      color: GOLD
    }
  }, "?")), /*#__PURE__*/React.createElement("span", null, " ", (scene.mid || "").split("\n").map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("br", null), l)), " ")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      minWidth: scene.blankWidth || 300,
      borderBottom: `7px dotted ${GOLD}`,
      position: "relative",
      verticalAlign: "bottom",
      height: 96
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 6,
      color: GOLD,
      fontWeight: 600,
      opacity: rt,
      transform: `translateY(${(1 - rt) * 14}px)`
    }
  }, revealed ? scene.word : "\u00A0"), !revealed && (scene.infinitive ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 8,
      fontStyle: "italic",
      fontSize: "0.62em",
      opacity: pulse,
      color: GOLD
    }
  }, scene.infinitive) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 2,
      fontSize: "1.1em",
      fontWeight: 700,
      opacity: pulse,
      color: GOLD
    }
  }, "?"))), /*#__PURE__*/React.createElement("span", null, " ", String(scene.after).split("|").map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("br", null), s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontStyle: "italic",
      fontSize: 56,
      color: GOLD,
      marginTop: 30,
      opacity: rt
    }
  }, scene.hint)), /*#__PURE__*/React.createElement(Cta, null));
}

// Outro
function Outro() {
  const {
    progress
  } = useScene();
  const t = Easing.easeOutCubic(clamp(progress / 0.18, 0, 1));
  const t2 = Easing.easeOutCubic(clamp((progress - 0.12) / 0.2, 0, 1));
  const bob = Math.sin(progress * Math.PI * 5) * 16;
  const glow = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(progress * Math.PI * 6));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: NAVY
    }
  }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 380,
      left: 0,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      opacity: t
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontWeight: 600,
      fontSize: 130,
      color: IVORY,
      lineHeight: 0.98,
      textAlign: "center",
      transform: `scale(${0.94 + 0.06 * t})`
    }
  }, "FREE", /*#__PURE__*/React.createElement("br", null), "HOMEWORK"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontStyle: "italic",
      fontSize: 52,
      color: GOLD,
      marginTop: 34,
      textAlign: "center",
      lineHeight: 1.2
    }
  }, "Exercise + answer key,", /*#__PURE__*/React.createElement("br", null), "straight in your mailbox"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52,
      opacity: t2,
      border: `4px solid ${GOLDMID}`,
      borderRadius: 26,
      background: "#233461",
      padding: "26px 44px",
      boxShadow: `0 0 ${28 * glow}px rgba(217,174,92,${0.5 * glow})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: EBG,
      fontWeight: 600,
      fontSize: 58,
      letterSpacing: "0.02em",
      color: GOLD,
      textAlign: "center",
      lineHeight: 1.2
    }
  }, "mapetitemadeleine", /*#__PURE__*/React.createElement("br", null), ".substack.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      opacity: t2,
      transform: `translateY(${bob}px)`
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "180",
    height: "200",
    viewBox: "0 0 90 100",
    fill: "none",
    stroke: GOLD,
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M45 6 L45 58"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45 58 L45 40 C45 34 36 34 36 40 L36 52"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 46 C36 40 27 40 27 46 L27 56"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27 50 C27 45 19 45 19 50 L19 62 C19 80 30 94 46 94 C62 94 72 80 72 62 L72 34 C72 27 62 27 62 34 L62 58"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45 58 L45 68"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontStyle: "italic",
      fontSize: 44,
      color: IVORY,
      marginTop: 10,
      opacity: t2,
      whiteSpace: "nowrap"
    }
  }, "Link in bio")));
}

// Verb card (shown before each image round)
function VerbCard({
  scene
}) {
  const {
    progress
  } = useScene();
  const t = Easing.easeOutBack(clamp(progress / 0.22, 0, 1));
  const fade = clamp(progress / 0.14, 0, 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: NAVY
    }
  }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: fade
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `translateY(-8px) scale(${0.9 + 0.1 * t})`,
      border: `4px solid ${GOLDMID}`,
      borderRadius: 34,
      background: "#233461",
      boxShadow: "0 24px 66px rgba(0,0,0,0.38)",
      padding: "78px 96px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontStyle: "italic",
      fontSize: 46,
      color: GOLDMID,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      marginBottom: 30
    }
  }, "Conjuguez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CORM,
      fontWeight: 600,
      fontSize: 150,
      color: IVORY,
      lineHeight: 1,
      letterSpacing: "0.03em"
    }
  }, scene.verb), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      height: 2,
      background: GOLDMID,
      margin: "38px auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: EBG,
      fontWeight: 600,
      fontSize: 58,
      color: GOLD,
      letterSpacing: "0.3em",
      textTransform: "uppercase"
    }
  }, scene.tense))));
}
window.MadeleineScenes = {
  Intro,
  VerbCard,
  Round,
  Outro
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/tiktok/madeleine-scenes.jsx", error: String((e && e.message) || e) }); }

// sw.js
try { (() => {
const CACHE = 'mpm-v1';
const SHELL = ['./index.html', './styles.css', './_ds_bundle.js', './manifest.webmanifest', './app/exercices.js', './app/mpm-app.jsx', './assets/logo/madeleine-logo-transparent.png', './assets/app-icon-192.png', './assets/app-icon-512.png', './assets/apple-touch-icon-180.png', 'https://unpkg.com/react@18.3.1/umd/react.development.js', 'https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js', 'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(SHELL.map(u => c.add(u)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(caches.match(req).then(hit => {
    if (hit) {
      fetch(req).then(r => {
        if (r && r.ok) caches.open(CACHE).then(c => c.put(req, r.clone()));
      }).catch(() => {});
      return hit;
    }
    return fetch(req).then(r => {
      if (r && r.ok && (req.url.startsWith(self.location.origin) || /fonts\.gstatic|fonts\.googleapis|unpkg\.com/.test(req.url))) {
        const copie = r.clone();
        caches.open(CACHE).then(c => c.put(req, copie));
      }
      return r;
    }).catch(() => caches.match('./index.html'));
  }));
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sw.js", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/ExerciseSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ExerciseSection — titled group of ExerciseBlock entries, interactive
// (each answer reveals independently on click).
function ExerciseSection({
  title = "L'exercice du jour",
  items
}) {
  const {
    ExerciseBlock
  } = window.MaPetiteMadeleineDesignSystem_e1b54a;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--space-7) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '26px',
      color: 'var(--color-text-primary)',
      marginBottom: 'var(--space-3)'
    }
  }, title), /*#__PURE__*/React.createElement("div", null, items.map((it, i) => /*#__PURE__*/React.createElement(ExerciseBlock, _extends({
    key: i,
    number: i + 1
  }, it)))));
}
window.ExerciseSection = ExerciseSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/ExerciseSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/NewsletterHeader.jsx
try { (() => {
// NewsletterHeader — top masthead: wordmark + tagline, and a subscribe action.
// Mirrors a typical Substack post header, restyled in the brand.
function NewsletterHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-5) var(--space-7)',
      borderBottom: 'var(--border-hairline)',
      background: 'var(--color-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/madeleine-logo.png",
    alt: "Ma petite madeleine",
    style: {
      width: '48px',
      height: '48px'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '20px',
      color: 'var(--color-text-primary)',
      lineHeight: 1.1
    }
  }, "Ma petite madeleine"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '13px',
      color: 'var(--madeleine-gold-700)'
    }
  }, "French Class"))), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--madeleine-gold-500)',
      color: 'var(--color-text-on-gold)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '9px 20px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      letterSpacing: 'var(--tracking-wide)',
      cursor: 'pointer'
    }
  }, "S'abonner"));
}
window.NewsletterHeader = NewsletterHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/NewsletterHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/PostHero.jsx
try { (() => {
// PostHero — title block for a lesson post: eyebrow (level/category),
// display title, italic subtitle, and byline/date meta.
function PostHero({
  eyebrow,
  title,
  subtitle,
  byline,
  date
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-7) var(--space-6)',
      textAlign: 'center',
      background: 'var(--color-bg-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--madeleine-gold-700)',
      marginBottom: 'var(--space-4)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '44px',
      color: 'var(--color-text-primary)',
      margin: 0,
      lineHeight: 1.1
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '20px',
      color: 'var(--madeleine-navy-500)',
      marginTop: 'var(--space-3)'
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--madeleine-navy-300)',
      marginTop: 'var(--space-5)'
    }
  }, byline, " \xB7 ", date));
}
window.PostHero = PostHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/PostHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/SubscribeFooter.jsx
try { (() => {
// SubscribeFooter — closing CTA banner on navy, with the wordmark and a
// gold subscribe button. The last thing a reader sees on every post.
function SubscribeFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--madeleine-navy-700)',
      padding: 'var(--space-8) var(--space-7)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '22px',
      color: 'var(--madeleine-gold-300)',
      marginBottom: 'var(--space-5)'
    }
  }, "Cinq minutes par jour, pas plus."), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--madeleine-gold-500)',
      color: 'var(--color-text-on-gold)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '12px 28px',
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      letterSpacing: 'var(--tracking-wide)',
      cursor: 'pointer'
    }
  }, "S'abonner \xE0 Ma petite madeleine"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      color: 'var(--madeleine-navy-300)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '80px',
      height: '1px',
      background: 'var(--madeleine-navy-300)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px'
    }
  }, "\u269C"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '80px',
      height: '1px',
      background: 'var(--madeleine-navy-300)'
    }
  })));
}
window.SubscribeFooter = SubscribeFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/SubscribeFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/VocabSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// VocabSection — a titled group of VocabCard entries.
function VocabSection({
  title = 'Le vocabulaire du jour',
  items
}) {
  const {
    VocabCard
  } = window.MaPetiteMadeleineDesignSystem_e1b54a;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--space-7) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '26px',
      color: 'var(--color-text-primary)',
      marginBottom: 'var(--space-4)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(VocabCard, _extends({
    key: i
  }, it)))));
}
window.VocabSection = VocabSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/VocabSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ExerciseBlock = __ds_scope.ExerciseBlock;

__ds_ns.VocabCard = __ds_scope.VocabCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DifficultyRating = __ds_scope.DifficultyRating;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

})();
