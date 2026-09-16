// Tous les billets, par ordre chronologique. Source : les corrigés publiés.
// type: "choix" | "ecoute" (audio enregistré) | "image" — toujours des boutons, jamais de clavier
window.MPM_EXERCICES = [
  {
    id: "vocabulaire-anaclet", date: "2026-07-13", saint: "Saint Anaclet", niveau: "b2",
    theme: "Vocabulaire", titre: "Les mots soutenus",
    accroche: "Sentiments, antonymes et locutions latines : le français des lettrés.",
    items: [
      { type: "choix", enonce: "La bienveillance est un sentiment…", options: ["positif", "négatif"], reponse: 0, note: "Bienveillance : vouloir du bien à autrui." },
      { type: "choix", enonce: "L'acrimonie est un sentiment…", options: ["positif", "négatif"], reponse: 1, note: "L'acrimonie, c'est l'aigreur dans le propos." },
      { type: "choix", enonce: "La mansuétude est un sentiment…", options: ["positif", "négatif"], reponse: 0, note: "La mansuétude, c'est la douceur indulgente." },
      { type: "choix", enonce: "Le contraire de « prodigue » :", options: ["économe", "généreux", "prodigieux"], reponse: 0, note: "Prodigue dépense sans compter ; économe garde." },
      { type: "choix", enonce: "Le contraire de « éphémère » :", options: ["durable", "passager", "léger"], reponse: 0, note: "Éphémère ne dure qu'un jour." },
      { type: "choix", enonce: "« In extremis » signifie :", options: ["avant toute expérience", "au tout dernier moment", "par le fait même"], reponse: 1, note: "A priori = avant l'expérience ; ipso facto = par le fait même." },
      { type: "choix", enonce: "On promulgue…", options: ["un traité", "une loi", "un prix"], reponse: 1, note: "On ratifie un traité, on décerne un prix." },
      { type: "ecoute", enonce: "Écoutez : que va faire le président ?", audio: "Le président va gracier un condamné.", options: ["gracier un condamné", "juger un condamné", "amnistier une loi"], reponse: 0, note: "Gracier un condamné : lui remettre sa peine." }
    ],
    histoire: "Anaclet fut l'un des tout premiers évêques de Rome. On lui attribue l'usage d'écrire et de conserver les actes de la communauté : un homme d'archives."
  },
  {
    id: "proverbes-alexis", date: "2026-07-17", saint: "Saint Alexis", niveau: "b1",
    theme: "Vocabulaire", titre: "Expressions et proverbes",
    accroche: "Ce que la langue dit avec des images.",
    items: [
      { type: "choix", enonce: "« Avoir la tête dans les nuages » veut dire :", options: ["être distrait, rêveur", "être très grand", "être fier"], reponse: 0, note: "Le rêveur a la tête ailleurs." },
      { type: "choix", enonce: "« Manger sur le pouce » veut dire :", options: ["manger salement", "prendre vite son repas, debout", "manger avec les doigts"], reponse: 1, note: "Sans s'asseoir, en vitesse." },
      { type: "choix", enonce: "« Avoir la puce à l'oreille » veut dire :", options: ["entendre mal", "se douter de quelque chose", "être agacé"], reponse: 1, note: "Un soupçon vous est venu." },
      { type: "choix", enonce: "« Mettre son grain de sel » veut dire :", options: ["donner son avis sans qu'on le demande", "assaisonner un plat", "faire une farce"], reponse: 0, note: "L'avis de trop." },
      { type: "choix", enonce: "Il pleut très fort : il pleut des ___", options: ["cordes", "ficelles", "seaux"], reponse: 0, note: "Il pleut des cordes." },
      { type: "choix", enonce: "Ne pas venir à un rendez-vous : poser un ___", options: ["lapin", "lièvre", "pigeon"], reponse: 0, note: "Poser un lapin." },
      { type: "choix", enonce: "« En faire tout un fromage » :", options: ["cuisiner longtemps", "exagérer l'importance d'une petite chose", "se vanter"], reponse: 1, note: "Beaucoup de bruit pour peu." },
      { type: "ecoute", enonce: "Écoutez : que veut dire cette phrase ?", audio: "Ce matin, j'ai un chat dans la gorge.", options: ["Je suis enroué", "J'ai faim", "Je suis en colère"], reponse: 0, note: "Avoir un chat dans la gorge : être enroué." }
    ],
    histoire: "Alexis quitta une maison riche pour vivre pauvre et inconnu. La légende dit qu'il revint chez lui sans se faire reconnaître et vécut sous l'escalier de la maison de son père."
  },
  {
    id: "lecture-clair", date: "2026-07-18", saint: "Saint Clair", niveau: "b1",
    theme: "Compréhension", titre: "Le chien perdu",
    accroche: "Lisez entre les lignes : ce que le texte dit, et ce qu'il ne dit pas.",
    items: [
      { type: "choix", enonce: "Pourquoi cherche-t-elle jusque dans la maison, où le chien n'entre jamais ?", options: ["Par habitude", "Parce que l'inquiétude la pousse à tout vérifier", "Parce qu'il y fait frais"], reponse: 1, note: "L'inquiétude fait chercher même où c'est impossible." },
      { type: "choix", enonce: "Sa première explication est-elle prouvée ?", options: ["Oui, le texte la confirme", "Non, elle imagine une explication vraisemblable"], reponse: 1, note: "« Peut-être… c'est certainement cela » : c'est une supposition." },
      { type: "choix", enonce: "Comment sait-elle que quelqu'un arrive ?", options: ["Elle le voit au loin", "Elle entend les sabots d'un cheval sur le chemin"], reponse: 1, note: "L'oreille avant l'œil." },
      { type: "choix", enonce: "Vrai, faux, ou impossible à savoir : elle pense d'abord qu'il est parti au village.", options: ["Vrai", "Faux", "Impossible à savoir"], reponse: 1, note: "Faux : elle pense qu'il a suivi le troupeau et s'est perdu dans les bois." },
      { type: "choix", enonce: "Vrai, faux, ou impossible à savoir : on l'a trouvé près d'un cours d'eau.", options: ["Vrai", "Faux", "Impossible à savoir"], reponse: 0, note: "Vrai : « trouvé près d'un ruisseau »." },
      { type: "choix", enonce: "Vrai, faux, ou impossible à savoir : il a mangé de la farine.", options: ["Vrai", "Faux", "Impossible à savoir"], reponse: 2, note: "On sait seulement qu'il est resté couché près des sacs." },
      { type: "choix", enonce: "À la fin, pourquoi le chien aboie-t-il joyeusement ?", options: ["Il a faim", "Il aime les escapades et veut repartir", "Il a peur de la charrette"], reponse: 1, note: "« Déjà prêt à repartir »." }
    ],
    histoire: "Clair fut ermite en Normandie. Son nom dit la lumière, et l'on venait le consulter pour les maux des yeux."
  },
  {
    id: "dialogue-marguerite", date: "2026-07-20", saint: "Sainte Marguerite", niveau: "a2",
    theme: "Compréhension", titre: "Au restaurant",
    accroche: "Le dialogue d'un client et d'un serveur, à remettre dans l'ordre.",
    items: [
      { type: "ecoute", enonce: "Le client commence. Que dit-il ?", audio: "Excusez-moi, Monsieur, s'il vous plaît !", options: ["Excusez-moi, Monsieur, s'il vous plaît !", "L'addition, s'il vous plaît.", "Bonsoir, une table pour deux."], reponse: 0, note: "On appelle d'abord poliment." },
      { type: "choix", enonce: "Le serveur répond :", options: ["Oui, je vous écoute. Il y a un problème ?", "Je n'ai pas le temps.", "Le menu est là."], reponse: 0, note: "Formule d'accueil courante." },
      { type: "choix", enonce: "Le client explique :", options: ["Ce n'est pas le plat que j'ai commandé.", "C'est trop froid.", "Je voudrais payer."], reponse: 0, note: "On dit le problème simplement." },
      { type: "choix", enonce: "Le serveur s'excuse : « Oh, toutes mes ___ »", options: ["excuses", "pardons", "regrets"], reponse: 0, note: "Toutes mes excuses." },
      { type: "ecoute", enonce: "Qu'avait commandé le client ?", audio: "J'ai commandé du saumon avec du riz et des haricots verts.", options: ["Du saumon", "Du bœuf en sauce", "Une salade"], reponse: 0, note: "C'était le plat du jour." },
      { type: "choix", enonce: "Avec le saumon, que conseille le serveur ?", options: ["Un vin rouge de Bourgogne", "Un vin blanc d'Alsace, un Riesling", "Une bière"], reponse: 1, note: "Un blanc vif accompagne le poisson." }
    ],
    histoire: "Marguerite gardait les brebis avant d'être connue. On la fête au cœur de l'été, quand les troupeaux montent vers les hauteurs."
  },
  {
    id: "negation-victor", date: "2026-07-21", saint: "Saint Victor", niveau: "b1",
    theme: "Grammaire", titre: "La négation",
    accroche: "Dire non en français, avec tous les mots du refus.",
    items: [
      { type: "choix", enonce: "Contraire : « Le directeur reçoit quelqu'un ce matin. » → Le directeur ___ ce matin.", options: ["ne reçoit personne", "ne reçoit rien", "ne reçoit pas quelqu'un"], reponse: 0, note: "Personne remplace quelqu'un, après le verbe." },
      { type: "choix", enonce: "Contraire de « Nous passons un concours au printemps. »", options: ["Nous ne passons pas un concours", "Nous ne passons aucun concours", "Nous ne passons rien"], reponse: 1, note: "Aucun se substitue à l'article." },
      { type: "choix", enonce: "Contraire : « Mon frère a toujours raison. » → Mon frère ___ raison.", options: ["n'a jamais", "n'a rien", "n'a personne"], reponse: 0, note: "Jamais s'installe entre l'auxiliaire et le participe." },
      { type: "choix", enonce: "« Au marché, on trouve du thé et du café. » Au négatif :", options: ["on ne trouve pas de thé et de café", "on ne trouve ni thé ni café"], reponse: 1, note: "Ni… ni… supprime les deux articles." },
      { type: "choix", enonce: "« Je me sens bien partout. » → Je ne me sens bien ___", options: ["nulle part", "aucune part", "pas partout"], reponse: 0, note: "Nulle part se place après le verbe conjugué et son complément." },
      { type: "choix", enonce: "« Il reste du gâteau. » Au négatif :", options: ["Il ne reste plus de gâteau", "Il ne reste pas du gâteau"], reponse: 0, note: "Plus marque la fin ; de remplace du." },
      { type: "choix", enonce: "Au passé composé : « Il ne vient plus jamais. » → Il ___ venu.", options: ["n'est plus jamais", "n'a plus jamais"], reponse: 0, note: "Venir prend être, et les deux adverbes se placent avant le participe." },
      { type: "ecoute", enonce: "Écoutez, puis choisissez la réponse au négatif.", audio: "Avez-vous rencontré quelqu'un ce matin ?", options: ["Non, je n'ai rencontré personne", "Non, je n'ai rencontré rien", "Non, je n'ai personne rencontré"], reponse: 0, note: "Personne se place après le participe passé." }
    ],
    histoire: "Victor était officier à Marseille. Il refusa les honneurs qu'on lui offrait pour rester fidèle à sa parole donnée."
  },
  {
    id: "subjonctif-madeleine", date: "2026-07-22", saint: "Sainte Madeleine", niveau: "b1",
    theme: "Conjugaison", titre: "Le subjonctif présent",
    accroche: "Ce qu'on dit quand on doute, quand on souhaite, quand on a peur.",
    items: [
      { type: "choix", enonce: "Il faut que tu ___ (finir) tes devoirs avant le dîner.", options: ["finisses", "finis", "finiras"], reponse: 0, note: "Deuxième groupe : finisse, finisses, finisse…" },
      { type: "choix", enonce: "Je veux que vous ___ (être) à l'heure demain matin.", options: ["soyez", "êtes", "serez"], reponse: 0, note: "Être : que je sois, que vous soyez." },
      { type: "choix", enonce: "Bien qu'il ___ (faire) froid, elle sort sans manteau.", options: ["fasse", "fait", "ferait"], reponse: 0, note: "Bien que demande toujours le subjonctif." },
      { type: "choix", enonce: "Je doute qu'ils ___ (savoir) la vérité.", options: ["sachent", "savent", "sauront"], reponse: 0, note: "Savoir : que je sache, qu'ils sachent." },
      { type: "choix", enonce: "Il vaut mieux que tu ___ (prendre) le train.", options: ["prennes", "prends", "prendras"], reponse: 0, note: "Prendre : que je prenne, que nous prenions." },
      { type: "choix", enonce: "Je pense que tu ___ raison.", options: ["as (indicatif)", "aies (subjonctif)"], reponse: 0, note: "Après la certitude, l'indicatif." },
      { type: "choix", enonce: "Je ne pense pas que tu ___ raison.", options: ["as (indicatif)", "aies (subjonctif)"], reponse: 1, note: "La négation introduit le doute : subjonctif." },
      { type: "ecoute", enonce: "Écoutez : quel verbe au subjonctif entendez-vous ?", audio: "J'aimerais que nous allions au bord de la mer cet été.", options: ["allions", "allons", "irions"], reponse: 0, note: "Aller : que nous allions." }
    ],
    histoire: "Madeleine fut la première à trouver le tombeau vide. On la représente souvent avec un flacon de parfum, en souvenir du geste de reconnaissance qu'on lui prête."
  },
  {
    id: "vacances-apollinaire", date: "2026-07-23", saint: "Saint Apollinaire", niveau: "b1",
    theme: "Vocabulaire", titre: "Le vocabulaire des vacances",
    accroche: "Villégiature, farniente, embruns : les beaux mots de l'été.",
    items: [
      { type: "choix", enonce: "Une personne qui part en vacances au mois de juillet est un ___", options: ["juillettiste", "juilletier", "juillard"], reponse: 0, note: "Et celle qui part en août est un aoûtien." },
      { type: "choix", enonce: "« Balnéaire » se rapporte…", options: ["aux bains, à la mer", "à la montagne", "à la campagne"], reponse: 0, note: "Une station balnéaire est au bord de l'eau." },
      { type: "choix", enonce: "La bande de terre le long de la mer porte un nom savant : le ___", options: ["littoral", "estuaire", "promontoire"], reponse: 0, note: "Le littoral. L'estuaire est l'embouchure d'un fleuve." },
      { type: "choix", enonce: "Ne rien faire, avec délices : le ___", options: ["farniente", "fainéant", "laisser-aller"], reponse: 0, note: "De l'italien far niente." },
      { type: "choix", enonce: "Un « périple », c'est :", options: ["un long voyage avec des étapes", "une courte promenade", "un retard"], reponse: 0, note: "Et l'escale est l'arrêt du voyage." },
      { type: "choix", enonce: "Les gouttelettes salées portées par le vent : les ___", options: ["embruns", "écumes", "embrumes"], reponse: 0, note: "Les embruns." },
      { type: "choix", enonce: "L'ouïe, c'est le sens de…", options: ["voir et regarder", "entendre et écouter", "sentir et humer"], reponse: 1, note: "La vue, l'ouïe, l'odorat, le goût, le toucher." },
      { type: "ecoute", enonce: "Écoutez : qu'ont-ils fait au bord de la mer ?", audio: "Nous avons passé l'été en villégiature au bord de la mer.", options: ["en villégiature", "en pèlerinage", "en apprentissage"], reponse: 0, note: "La villégiature : le séjour de repos." }
    ],
    histoire: "Apollinaire fut évêque de Ravenne, ville des mosaïques et des marais. Il connut la mer toute sa vie."
  },
  {
    id: "caniculaires", date: "2026-07-24", saint: "Jours Caniculaires", niveau: "a2",
    theme: "Compréhension", titre: "Un appel un jour de canicule",
    accroche: "Julien téléphone à Camille. Écoutez bien.",
    items: [
      { type: "ecoute", enonce: "D'où Julien téléphone-t-il ?", audio: "Oui, ici à Lyon, il fait trente-huit degrés !", options: ["De Paris", "De Lyon", "D'Avignon"], reponse: 1, note: "Trente-huit degrés à Lyon." },
      { type: "ecoute", enonce: "Quelle température fait-il à Avignon ?", audio: "Oh là là, presque quarante ! Je reste à la maison, les volets fermés toute la journée.", options: ["Trente-huit degrés", "Presque quarante degrés", "Trente degrés"], reponse: 1, note: "Presque quarante." },
      { type: "choix", enonce: "Que fait Camille pendant la journée ?", options: ["Elle sort se promener", "Elle reste chez elle, les volets fermés", "Elle va à la piscine"], reponse: 1, note: "Les volets fermés gardent la fraîcheur." },
      { type: "ecoute", enonce: "Que fait Julien pour supporter la chaleur ?", audio: "Moi, je bois beaucoup d'eau et je sors seulement le soir.", options: ["Il boit beaucoup d'eau et sort le soir", "Il dort toute la journée", "Il prend des douches froides"], reponse: 0, note: "Boire et éviter les heures chaudes." },
      { type: "choix", enonce: "Qu'annonce-t-on pour dimanche ?", options: ["Encore de la chaleur", "Un orage", "De la pluie toute la semaine"], reponse: 1, note: "Enfin un peu de fraîcheur." },
      { type: "choix", enonce: "Cet après-midi, Julien va ___ avec les enfants.", options: ["à la piscine", "à la plage", "au marché"], reponse: 0, note: "À la piscine, avec les enfants." }
    ],
    histoire: "Les Jours Caniculaires vont du vingt-quatre juillet au vingt-six août. On les nomme ainsi d'après Sirius, l'étoile du Chien, qui se lève alors avec le soleil."
  },
  {
    id: "comparatifs-pantaleon", date: "2026-07-27", saint: "Saint Pantaléon", niveau: "a2",
    theme: "Grammaire", titre: "Plus, moins, autant",
    accroche: "Plus grand, moins cher, aussi beau : l'art de la comparaison.",
    items: [
      { type: "choix", enonce: "Romans : 84 lecteurs. Poésie : 20. Il y a ___ lecteurs de romans que de poésie.", options: ["plus de", "moins de", "autant de"], reponse: 0, note: "Plus de… que de… devant un nom." },
      { type: "choix", enonce: "Bandes dessinées : 56. Livres pratiques : 56. Les lecteurs sont ___", options: ["plus nombreux", "aussi nombreux", "moins nombreux"], reponse: 1, note: "Aussi… que… devant un adjectif." },
      { type: "choix", enonce: "Biographies : 38. Romans : 84. Il y a ___ lecteurs de biographies que de romans.", options: ["moins de", "plus de", "autant de"], reponse: 0, note: "Moins de… que de…" },
      { type: "choix", enonce: "Devant un nom, on écrit :", options: ["plus nombreux que", "plus de … que de"], reponse: 1, note: "Nom : plus de. Adjectif : plus… que." },
      { type: "choix", enonce: "Livres pratiques : 56. Bandes dessinées : 56. Il y a ___ lecteurs de livres pratiques que de bandes dessinées.", options: ["autant de", "plus de", "moins de"], reponse: 0, note: "Autant de marque l'égalité." },
      { type: "ecoute", enonce: "Écoutez : la comparaison est-elle juste ?", audio: "Les lecteurs de poésie sont moins nombreux que les lecteurs de biographies.", options: ["Oui : 20 contre 38", "Non"], reponse: 0, note: "Vingt contre trente-huit." }
    ],
    histoire: "Pantaléon était médecin à Nicomédie et soignait les pauvres sans se faire payer. On l'invoque encore chez les gens de l'art."
  },
  {
    id: "progression-anne", date: "2026-07-28", saint: "Sainte Anne", niveau: "b1",
    theme: "Test de niveau", titre: "De A1 à C2, marche par marche",
    accroche: "Six niveaux, six questions : jusqu'où irez-vous ?",
    items: [
      { type: "choix", enonce: "A1 — Sophie est la fille de mon oncle. C'est ma ___ préférée.", options: ["sœur", "cousine", "tante"], reponse: 1, note: "La fille de l'oncle est la cousine." },
      { type: "choix", enonce: "A1 — 1856 s'écrit :", options: ["mille huit cent cinquante-six", "mille huit cents cinquante-six", "mille huit cent cinquantes-six"], reponse: 0, note: "Cent et vingt ne prennent pas de s ici." },
      { type: "choix", enonce: "A1 — Pouvez-vous me ___ avant dix-huit heures ?", options: ["rappelez", "rappeler", "rappelé"], reponse: 1, note: "Après un verbe modal, l'infinitif." },
      { type: "choix", enonce: "A2 — À cet instant, la jeune fille ___ du jardin en courant.", options: ["a sorti", "est sortie", "est sorti"], reponse: 1, note: "Sortir, verbe de mouvement : être, et accord avec le sujet." },
      { type: "choix", enonce: "B1 — Après « bien que », on emploie :", options: ["l'indicatif", "le subjonctif"], reponse: 1, note: "Bien qu'il fasse froid…" },
      { type: "ecoute", enonce: "B2 — Écoutez : quel mot entendez-vous ?", audio: "Il a agi avec une grande mansuétude envers son adversaire.", options: ["mansuétude", "mansuétitude", "magnitude"], reponse: 0, note: "La mansuétude : la douceur indulgente." }
    ],
    histoire: "Anne est la mère de Marie, la grand-mère de l'histoire sainte. En Bretagne, on lui bâtit des chapelles au bord des chemins."
  },
  {
    id: "orthographe-marthe", date: "2026-07-29", saint: "Sainte Marthe", niveau: "b1",
    theme: "Orthographe", titre: "Une consonne ou deux ?",
    accroche: "Les pièges de l'œil : ce qu'on croit voir, et ce qui est écrit.",
    items: [
      { type: "choix", enonce: "Choisissez la bonne graphie :", options: ["appeller", "appeler", "apeler"], reponse: 1, note: "Deux p, un seul l à l'infinitif." },
      { type: "choix", enonce: "Choisissez la bonne graphie :", options: ["professionel", "professionnel"], reponse: 1, note: "Deux n." },
      { type: "choix", enonce: "Choisissez la bonne graphie :", options: ["envelope", "enveloppe"], reponse: 1, note: "Deux p." },
      { type: "choix", enonce: "Le chat pose sa ___ en jouant sur la pâte à tarte.", options: ["patte", "pâte", "pate"], reponse: 0, note: "La patte de l'animal, sans accent ; la pâte du boulanger, avec." },
      { type: "choix", enonce: "Ton écharpe ? Elle est ___ , tu l'as oubliée sur le banc.", options: ["là", "la", "l'a"], reponse: 0, note: "Là, adverbe de lieu, prend l'accent." },
      { type: "choix", enonce: "Le soir, on n'entre pas dans un bar avec une ___ de fer.", options: ["bar", "barre"], reponse: 1, note: "La barre de fer, deux r." },
      { type: "choix", enonce: "Dès le mois de ___ , elle a fait son premier essai.", options: ["mai", "mais", "mets"], reponse: 0, note: "Mai, le mois ; mais, la conjonction ; mets, du verbe mettre." },
      { type: "ecoute", enonce: "Écoutez : comment s'écrit le dernier mot ?", audio: "Elle a travaillé sans arrêt.", options: ["arrêt", "aret", "arrai"], reponse: 0, note: "Arrêt, avec un accent circonflexe et deux r." }
    ],
    histoire: "Marthe recevait les voyageurs dans sa maison de Béthanie. On la dit active et pratique, la patronne de ceux qui tiennent maison."
  },
  {
    id: "varie-abdon", date: "2026-07-30", saint: "Saint Abdon", niveau: "b1",
    theme: "Vocabulaire", titre: "Du nom à l'adjectif",
    accroche: "Trois exercices, le temps d'un café.",
    items: [
      { type: "choix", enonce: "la révolution → l'adjectif :", options: ["révolutionnaire", "révolutionnel", "révolutif"], reponse: 0, note: "Suffixe -aire." },
      { type: "choix", enonce: "le courage → l'adjectif :", options: ["courageux", "couragier", "couragieux"], reponse: 0, note: "Suffixe -eux." },
      { type: "choix", enonce: "la province → l'adjectif :", options: ["provincial", "provinciel", "provinceux"], reponse: 0, note: "Suffixe -al." },
      { type: "choix", enonce: "la mémoire → l'adjectif :", options: ["mémoriel", "mémorable", "mémoreux"], reponse: 1, note: "Mémorable : dont on se souvient." },
      { type: "choix", enonce: "« Un tiers des personnes », c'est environ :", options: ["25 %", "33 %", "50 %"], reponse: 1, note: "Un tiers = 33 %." },
      { type: "choix", enonce: "« Les trois quarts des personnes », c'est :", options: ["75 %", "49 %", "66 %"], reponse: 0, note: "Trois quarts = 75 %." },
      { type: "choix", enonce: "« À peine la moitié », c'est :", options: ["51 %", "49 %", "60 %"], reponse: 1, note: "À peine : juste en dessous." },
      { type: "ecoute", enonce: "Écoutez : quel adjectif entendez-vous ?", audio: "Ce fut une victoire éclatante : un retour victorieux.", options: ["victorieux", "victoral", "victoreux"], reponse: 0, note: "la victoire → victorieux." }
    ],
    histoire: "Abdon vint de Perse à Rome. On raconte qu'il recueillait discrètement les corps des suppliciés pour leur donner une sépulture."
  },
  {
    id: "conjugaison-germain", date: "2026-07-31", saint: "Saint Germain", niveau: "b1",
    theme: "Conjugaison", titre: "Deux passés, un futur",
    accroche: "Hier, autrefois, demain : trois temps dans une même histoire.",
    items: [
      { type: "choix", enonce: "Hier, un imprévu ___ (survenir) pendant la réunion.", options: ["est survenu", "a survenu"], reponse: 0, note: "Survenir se conjugue avec être." },
      { type: "choix", enonce: "Les ingénieurs ___ (résoudre) enfin le problème.", options: ["ont résolu", "ont résous", "sont résolus"], reponse: 0, note: "Participe passé irrégulier : résolu." },
      { type: "choix", enonce: "Après un long effort, elle ___ (atteindre) le sommet.", options: ["a atteint", "a atteinte", "est atteinte"], reponse: 0, note: "Avec avoir, pas d'accord ici : le complément suit le verbe." },
      { type: "choix", enonce: "Les voisins ___ (se plaindre) du bruit toute la nuit.", options: ["ont plaint", "se sont plaints", "se sont plaint"], reponse: 1, note: "Verbe pronominal : auxiliaire être, accord avec le sujet." },
      { type: "choix", enonce: "Chaque hiver, nous ___ (voyager) vers la montagne.", options: ["voyagions", "voyageons", "voyagerions"], reponse: 0, note: "Imparfait : l'habitude, le décor." },
      { type: "choix", enonce: "Futur simple — je (courir) :", options: ["je courrai", "je courirai", "je courerai"], reponse: 0, note: "Deux r au futur : courrai." },
      { type: "choix", enonce: "Futur simple — il (falloir) :", options: ["il faudra", "il fallera", "il faudrait"], reponse: 0, note: "Radical irrégulier faudr-." },
      { type: "ecoute", enonce: "Écoutez : quel verbe conjugué entendez-vous ?", audio: "Elles recevront une lettre demain matin.", options: ["recevront", "receveront", "recevrons"], reponse: 0, note: "Recevoir fait recevr- au futur." }
    ],
    histoire: "Germain fut évêque d'Auxerre. On raconte qu'il quitta une vie de chasse et de fêtes pour se mettre au service des pauvres, et qu'il traversa la mer deux fois pour aller enseigner en Bretagne."
  },
  {
    id: "vocabulaire-pierre", date: "2026-08-01", saint: "Saint Pierre", niveau: "a2",
    theme: "Vocabulaire", titre: "Le mot juste, en images",
    accroche: "Onze images, onze mots. Les reconnaîtrez-vous ?",
    items: [
      { type: "image", enonce: "Elle a des tentacules.", image: "uploads/tweetybirdhorizon_une_pieuvre_--chaos_25_--ar_11_--profile_au_af8206f9-e126-40b4-8aa9-bb6ad8f01a15_0.png", options: ["une pieuvre", "une méduse", "une écrevisse"], reponse: 0, note: "Une pieuvre — on dit aussi un poulpe." },
      { type: "image", enonce: "Il dort en nageant.", image: "uploads/tweetybirdhorizon_un_requin_--chaos_25_--ar_11_--sref_httpss._34961576-465e-4f53-a8b0-34cdbfeb9d7b_1.png", options: ["un requin", "un dauphin", "un espadon"], reponse: 0, note: "Un requin." },
      { type: "image", enonce: "Elle est rouge et verte.", image: "uploads/tweetybirdhorizon_une_pastque_--chaos_25_--ar_11_--sref_https_b33eb6dc-1f32-403d-b8ba-43ad9fb816d9_1.png", options: ["une pastèque", "un melon", "une courge"], reponse: 0, note: "Une pastèque, le fruit de l'été." },
      { type: "image", enonce: "Quand il pleut, elle met ses…", image: "uploads/tweetybirdhorizon_des_bottes_--chaos_25_--ar_11_--sref_httpss_cb8c3b6c-3c82-40f4-a46a-31abc7e515b9_2.png", options: ["des bottes", "des sandales", "des chaussons"], reponse: 0, note: "Des bottes — toujours au pluriel, comme les chaussures." },
      { type: "image", enonce: "Il plante un clou avec…", image: "uploads/tweetybirdhorizon_un_marteau_--chaos_25_--ar_11_--sref_httpss_44911ecf-1df2-4e17-865a-67a4c5b500f0_0.png", options: ["un marteau", "une pince", "un tournevis"], reponse: 0, note: "Un marteau." },
      { type: "image", enonce: "Elle fait du miel.", image: "uploads/tweetybirdhorizon_une_abeille_--chaos_25_--ar_11_--sref_https_37854e78-7243-4686-9115-b1e0c318b085_3.png", options: ["une abeille", "une guêpe", "un frelon"], reponse: 0, note: "Une abeille. Attention : l'abeille, avec élision." },
      { type: "ecoute", enonce: "Écoutez : avec quoi ferme-t-il son pantalon ?", audio: "Il ferme son pantalon avec une ceinture.", options: ["une ceinture", "une bretelle", "une boucle"], reponse: 0, note: "Une ceinture." },
      { type: "image", enonce: "Elle est rouge à points noirs.", image: "uploads/tweetybirdhorizon_une_coccinelle_--chaos_25_--ar_11_--sref_ht_f152c076-7fa3-4d02-a65f-7d16c394276d_0.png", options: ["une coccinelle", "une punaise", "un scarabée"], reponse: 0, note: "Une coccinelle, la bête à bon Dieu." }
    ],
    histoire: "Pierre était pêcheur sur le lac de Galilée. Son nom veut dire la pierre : celle sur laquelle on bâtit. On le représente souvent avec des clés à la main."
  },
  {
    id: "pluriel-etienne", date: "2026-08-03", saint: "Saint Étienne", niveau: "b1",
    theme: "Orthographe", titre: "Le pluriel des noms",
    accroche: "Un s, un x, ou rien du tout ? À vous de trancher.",
    items: [
      { type: "choix", enonce: "un journal → des…", options: ["journaux", "journals"], reponse: 0, note: "Les noms en -al font -aux." },
      { type: "choix", enonce: "un bijou → des…", options: ["bijoux", "bijous"], reponse: 0, note: "Bijou, caillou, chou, genou, hibou, joujou, pou prennent un x." },
      { type: "choix", enonce: "un pneu → des…", options: ["pneus", "pneux"], reponse: 0, note: "Pneu et bleu font exception aux mots en -eu." },
      { type: "choix", enonce: "un œil → des…", options: ["yeux", "œils", "œilx"], reponse: 0, note: "Pluriel irrégulier." },
      { type: "choix", enonce: "un festival → des…", options: ["festivaux", "festivals"], reponse: 1, note: "Bal, carnaval, festival, récital gardent le s." },
      { type: "choix", enonce: "Pour leur anniversaire, mes … ont reçu deux … et des … .", options: ["neveus / jeus / cadeaus", "neveux / jeux / cadeaux", "neveux / jeus / cadeaux"], reponse: 1, note: "Les mots en -eu et -eau prennent un x." },
      { type: "ecoute", enonce: "Écoutez : quel est le pluriel de « vitrail » ?", audio: "Le vitrail bleu de la cathédrale. Au pluriel : les vitraux.", options: ["les vitraux", "les vitrails"], reponse: 0, note: "Vitrail suit la série travail, corail, émail." }
    ],
    histoire: "Étienne fut le premier des diacres, chargé du service des tables et du soin des veuves. On le dit doux et clair dans sa parole."
  },
  {
    id: "marche-dominique", date: "2026-08-04", saint: "Saint Dominique", niveau: "a2",
    theme: "Compréhension", titre: "Le marché de Perrine",
    accroche: "Ce qu'elle achète, ce qu'elle paye, ce qu'on ne sait pas.",
    items: [
      { type: "choix", enonce: "Le lard est-il cité dans le texte ?", options: ["Oui", "Non"], reponse: 0, note: "Le lard, le beurre, les poireaux, les cerises, les carottes, le fromage, les pommes, les oignons, les prunes et le saucisson." },
      { type: "choix", enonce: "Les tomates sont-elles citées ?", options: ["Oui", "Non"], reponse: 1, note: "Ni tomates, ni oranges, ni raisin, ni salade." },
      { type: "choix", enonce: "Pourquoi part-elle au marché ?", options: ["Pour voir ses amies", "Il ne reste plus rien à manger à la maison", "Pour vendre ses œufs"], reponse: 1, note: "C'est dit dès la première ligne." },
      { type: "choix", enonce: "Vrai ou faux : le beurre est le produit le plus cher.", options: ["Vrai", "Faux"], reponse: 0, note: "Douze sous, contre sept pour le lard et cinq pour le fromage." },
      { type: "choix", enonce: "Vrai, faux, ou impossible à savoir : elle achète des pommes pour faire une tarte.", options: ["Vrai", "Faux", "Impossible à savoir"], reponse: 2, note: "Le texte dit qu'elle en achète, jamais pourquoi." },
      { type: "ecoute", enonce: "Écoutez : quel jour sommes-nous ?", audio: "Aujourd'hui, c'est samedi, jour de marché.", options: ["Samedi", "Dimanche", "Vendredi"], reponse: 0, note: "Samedi, jour de marché." }
    ],
    histoire: "Dominique parcourait les routes à pied, sans bagage, pour aller parler aux gens des villages. On disait de lui qu'il causait volontiers avec tout le monde."
  },
  {
    id: "modaux-transfiguration", date: "2026-08-06", saint: "La Transfiguration", niveau: "a2",
    theme: "Conjugaison", titre: "Les verbes modaux",
    accroche: "Pouvoir, vouloir, devoir, savoir : de La Rochelle à Québec.",
    items: [
      { type: "choix", enonce: "Sur le quai, le jeune Antoine ___ (vouloir) devenir marin.", options: ["veut", "veux", "voulu"], reponse: 0, note: "je veux, tu veux, il veut." },
      { type: "choix", enonce: "« ___ -tu monter jusqu'en haut du mât ? » (savoir)", options: ["Sais", "Sait", "Savais"], reponse: 0, note: "je sais, tu sais, il sait." },
      { type: "choix", enonce: "S'il veut s'engager, Antoine ___ (devoir) vivre sans confort.", options: ["doit", "dois", "devoit"], reponse: 0, note: "je dois, tu dois, il doit." },
      { type: "choix", enonce: "« Vous ___ monter à bord dès ce soir. »", options: ["pouvez", "pouvoirez", "pouvons"], reponse: 0, note: "nous pouvons, vous pouvez, ils peuvent." },
      { type: "choix", enonce: "Pendant la tempête, les marins n'ont pas ___ dormir. (pouvoir)", options: ["pu", "peu", "pouvu"], reponse: 0, note: "Participe passé : pu." },
      { type: "choix", enonce: "Antoine a ___ apprendre très vite à grimper. (devoir)", options: ["dû", "du", "devu"], reponse: 0, note: "Participe passé : dû, avec accent circonflexe." },
      { type: "ecoute", enonce: "Écoutez : quel verbe conjugué entendez-vous ?", audio: "Nous ne voulons pas retarder le départ, la marée n'attend pas.", options: ["voulons", "voulions", "voudrons"], reponse: 0, note: "nous voulons, vous voulez, ils veulent." }
    ],
    histoire: "La Transfiguration se fête au cœur de l'été. On y célèbre une lumière vue sur une montagne, et les marins d'autrefois y voyaient un bon présage."
  },
  {
    id: "geographie-cyriaque", date: "2026-08-08", saint: "Saint Cyriaque", niveau: "a2",
    theme: "Vocabulaire", titre: "Pays et nationalités",
    accroche: "Quatre continents, et le nom qu'on donne à ceux qui y vivent.",
    items: [
      { type: "choix", enonce: "le Portugal → il est…", options: ["portugais", "portugal", "portugien"], reponse: 0, note: "Et elle est portugaise." },
      { type: "choix", enonce: "l'Autriche → elle est…", options: ["autrichienne", "autrichaine", "autrichoise"], reponse: 0, note: "La consonne double : autrichien, autrichienne." },
      { type: "choix", enonce: "la Bulgarie → elle est…", options: ["bulgarienne", "bulgare", "bulgaraise"], reponse: 1, note: "Bulgare ne change pas au féminin." },
      { type: "choix", enonce: "le Tchad → elle est…", options: ["tchadienne", "tchadaise", "tchadine"], reponse: 0, note: "tchadien, tchadienne." },
      { type: "choix", enonce: "le Burkina Faso → il est…", options: ["burkinais", "burkinabè"], reponse: 1, note: "Burkinabè, invariable." },
      { type: "choix", enonce: "la Corée → elle est…", options: ["coréenne", "coréaine", "coréoise"], reponse: 0, note: "coréen, coréenne." },
      { type: "choix", enonce: "le Mexique → il est…", options: ["mexicain", "mexiquain", "mexicien"], reponse: 0, note: "mexicain, mexicaine." },
      { type: "ecoute", enonce: "Écoutez : quelle nationalité entendez-vous ?", audio: "Elle vient de Hongrie : elle est hongroise.", options: ["hongroise", "hongrienne", "hongarienne"], reponse: 0, note: "hongrois, hongroise." }
    ],
    histoire: "Cyriaque était diacre à Rome et servait les malades. On le représente souvent portant un seau d'eau."
  },
  {
    id: "plage-laurent", date: "2026-08-10", saint: "Saint Laurent", niveau: "a2",
    theme: "Grammaire", titre: "La plage et le conditionnel",
    accroche: "Si j'avais un parasol… Une journée à la plage avec Camille et Julien.",
    items: [
      { type: "choix", enonce: "On l'ouvre pour se protéger du soleil : un ___", options: ["parasol", "paravent", "parapluie"], reponse: 0, note: "Un parasol." },
      { type: "choix", enonce: "On les met aux pieds pour marcher sur le sable chaud : des ___", options: ["tongs", "palmes", "chaussons"], reponse: 0, note: "Des tongs." },
      { type: "choix", enonce: "Si j'avais un parasol, je n' ___ (attraper) pas de coup de soleil.", options: ["attraperais", "attraperai", "attrapais"], reponse: 0, note: "Après si + imparfait, le conditionnel." },
      { type: "choix", enonce: "Nous ___ tellement mieux à l'ombre !", options: ["serions", "serons", "soyons"], reponse: 0, note: "Conditionnel : radical du futur + terminaisons de l'imparfait." },
      { type: "choix", enonce: "À ta place, je ___ (louer) aussi une chaise longue.", options: ["louerais", "louerai", "louais"], reponse: 0, note: "je louerais, tu louerais." },
      { type: "choix", enonce: "___ crème solaire sent bon la noix de coco.", options: ["Ce", "Cette", "Ces"], reponse: 1, note: "Crème est féminin singulier." },
      { type: "ecoute", enonce: "Écoutez : quel verbe au conditionnel entendez-vous ?", audio: "Avec un peu de crème solaire, tu pourrais rester au soleil.", options: ["pourrais", "pourras", "pouvais"], reponse: 0, note: "pouvoir → je pourrais." }
    ],
    histoire: "Laurent était diacre à Rome et gardait les biens destinés aux pauvres. Quand on lui demanda les trésors de l'Église, il montra les pauvres eux-mêmes."
  },
  {
    id: "temporelles-suzanne", date: "2026-08-11", saint: "Sainte Suzanne", niveau: "b1",
    theme: "Grammaire", titre: "Les propositions temporelles",
    accroche: "Avant, pendant, après : mettre de l'ordre dans le temps.",
    items: [
      { type: "choix", enonce: "Après « avant que », on emploie :", options: ["l'indicatif", "le subjonctif"], reponse: 1, note: "Avant que et en attendant que : subjonctif." },
      { type: "choix", enonce: "Après « quand », « lorsque », « après que », on emploie :", options: ["l'indicatif", "le subjonctif"], reponse: 0, note: "Le fait est posé comme réel." },
      { type: "choix", enonce: "Le malade gardera la chambre en attendant que la fièvre ___ (tomber).", options: ["tombe", "tombera", "tombait"], reponse: 0, note: "En attendant que + subjonctif." },
      { type: "choix", enonce: "L'apprenti ouvrira son atelier dès lors qu'il ___ son apprentissage.", options: ["aura terminé", "ait terminé"], reponse: 0, note: "Dès lors que + indicatif ; futur antérieur pour l'antériorité." },
      { type: "choix", enonce: "Devant un infinitif, on emploie :", options: ["avant que", "avant de"], reponse: 1, note: "Avant de sortir, couvrez-vous." },
      { type: "choix", enonce: "Nul n'a pu le retenir ___ sa décision prise.", options: ["une fois", "dès que", "avant que"], reponse: 0, note: "Une fois + participe." },
      { type: "ecoute", enonce: "Écoutez : indicatif ou subjonctif ?", audio: "Je relirai mes leçons de latin en attendant que le maître revienne.", options: ["Indicatif", "Subjonctif"], reponse: 1, note: "Revienne : subjonctif, après en attendant que." }
    ],
    histoire: "Suzanne vivait à Rome, dans la maison de son père, savant et discret. On la dit ferme dans ses refus et douce dans ses paroles."
  },
  {
    id: "liaisons-hippolyte", date: "2026-08-13", saint: "Saint Hippolyte", niveau: "b1",
    theme: "Prononciation", titre: "Les liaisons et le H",
    accroche: "La lettre qu'on n'entend jamais, et qui change tout.",
    items: [
      { type: "ecoute", enonce: "La liaison se fait-elle ?", audio: "Les enfants du cocher jouaient dans la cour.", options: ["Oui, obligatoire", "Non, interdite"], reponse: 0, note: "Déterminant + nom : liaison obligatoire." },
      { type: "ecoute", enonce: "La liaison se fait-elle ?", audio: "Les héros de la fable étaient deux frères.", options: ["Oui, obligatoire", "Non, interdite"], reponse: 1, note: "Héros commence par un H aspiré." },
      { type: "choix", enonce: "___ hôtel", options: ["le", "l'"], reponse: 1, note: "H muet : élision." },
      { type: "choix", enonce: "___ haricot", options: ["le", "l'"], reponse: 0, note: "H aspiré : pas d'élision." },
      { type: "choix", enonce: "___ heure", options: ["la", "l'"], reponse: 1, note: "H muet." },
      { type: "choix", enonce: "___ hache", options: ["la", "l'"], reponse: 0, note: "H aspiré." },
      { type: "ecoute", enonce: "Répétez, puis dites si la liaison se fait.", audio: "Ils ont traversé le hameau.", options: ["Oui, obligatoire", "Non, interdite"], reponse: 0, note: "Ils‿ont : pronom + verbe, liaison obligatoire. Le hameau, lui, garde son H aspiré." }
    ],
    histoire: "Hippolyte était gardien de prison à Rome. Touché par la constance d'un prisonnier, il changea de vie et prit soin des pauvres de la ville."
  },
  {
    id: "conjugaison-assomption", date: "2026-08-15", saint: "l'Assomption", niveau: "a2",
    theme: "Conjugaison", titre: "Le deuxième groupe et le futur",
    accroche: "Finir, grandir, bâtir : les verbes qui construisent.",
    items: [
      { type: "choix", enonce: "Présent — nous (maigrir) :", options: ["nous maigrissons", "nous maigrons", "nous maigrions"], reponse: 0, note: "Deuxième groupe : -issons au pluriel." },
      { type: "choix", enonce: "Présent — ils (réunir) :", options: ["ils réunissent", "ils réunent", "ils réunient"], reponse: 0, note: "-issent." },
      { type: "choix", enonce: "Présent — je (bâtir) :", options: ["je bâtis", "je bâtit", "je bâtie"], reponse: 0, note: "je bâtis, tu bâtis, il bâtit." },
      { type: "choix", enonce: "Futur — vendredi, nous ___ (être) en vacances.", options: ["serons", "seront", "sommes"], reponse: 0, note: "être → je serai, nous serons." },
      { type: "choix", enonce: "Futur — les enfants ___ (aller) à la piscine demain.", options: ["iront", "alleront", "vont"], reponse: 0, note: "aller → j'irai, ils iront." },
      { type: "choix", enonce: "Futur — elle ___ (faire) un gâteau pour la fête.", options: ["fera", "faira", "ferra"], reponse: 0, note: "faire → je ferai, elle fera." },
      { type: "ecoute", enonce: "Écoutez : quel verbe au futur entendez-vous ?", audio: "Un jour, tu viendras chez nous.", options: ["viendras", "venras", "viendrais"], reponse: 0, note: "venir → je viendrai, tu viendras." }
    ],
    histoire: "Le quinze août, les villages sortent en procession. C'est le grand jour de l'été, entre la moisson finie et les vendanges à venir."
  },
  {
    id: "jardin-hyacinthe", date: "2026-08-17", saint: "Saint Hyacinthe", niveau: "a2",
    theme: "Vocabulaire", titre: "Le jardin de Colette",
    accroche: "Les outils, les fleurs, et une dictée sur les jardins français.",
    items: [
      { type: "choix", enonce: "On le remplit d'eau pour donner à boire aux fleurs : un ___", options: ["arrosoir", "seau", "tuyau"], reponse: 0, note: "Un arrosoir." },
      { type: "choix", enonce: "On les met en terre au printemps : des ___", options: ["graines", "noyaux", "pépins"], reponse: 0, note: "Des graines." },
      { type: "choix", enonce: "Grande fleur jaune qui suit le soleil : un ___", options: ["tournesol", "souci", "muguet"], reponse: 0, note: "Un tournesol : il tourne avec le soleil." },
      { type: "choix", enonce: "Pour couper les branches d'un rosier, on prend :", options: ["un râteau", "un sécateur", "une tondeuse"], reponse: 1, note: "Le sécateur coupe net." },
      { type: "choix", enonce: "Les jardiniers travaillaient chaque jour pour entretenir les haies parfaitement ___", options: ["taillées", "taillé", "taillés"], reponse: 0, note: "Accord avec les haies, féminin pluriel." },
      { type: "choix", enonce: "Ma sœur ___ (rentrer) du jardin à la nuit tombée.", options: ["est rentrée", "a rentré", "est rentré"], reponse: 0, note: "Rentrer, verbe de mouvement : être, et accord avec le sujet." },
      { type: "ecoute", enonce: "Écoutez : comment sont devenus les chemins ?", audio: "Les chemins sont devenus plus courbes et la nature semblait plus libre.", options: ["plus courbes", "plus courts", "plus larges"], reponse: 0, note: "Le jardin anglais préfère la courbe à la ligne droite." }
    ],
    histoire: "Hyacinthe parcourut l'Europe du Nord à pied. On raconte qu'il traversait les fleuves sans bateau, son manteau étendu sur l'eau."
  },
  {
    id: "mots-croises-eusebe", date: "2026-08-19", saint: "Saint Eusèbe", niveau: "a2",
    theme: "Jeux de mots", titre: "Les mots croisés de l'été",
    accroche: "Cinq grilles : l'été, les vacances, la table et le jardin.",
    items: [
      { type: "choix", enonce: "Sport de glisse sur les vagues (4 lettres) :", options: ["le surf", "la rame", "la voile"], reponse: 0, note: "SURF." },
      { type: "choix", enonce: "Coquillage noir, servi avec des frites (5 lettres) :", options: ["la moule", "l'huître", "la palourde"], reponse: 0, note: "MOULE : moules-frites." },
      { type: "choix", enonce: "Terre entourée d'eau de tous côtés (3 lettres) :", options: ["une île", "un cap", "une baie"], reponse: 0, note: "ÎLE." },
      { type: "choix", enonce: "Fruit jaune coiffé d'une couronne de feuilles (6 lettres) :", options: ["l'ananas", "la banane", "le citron"], reponse: 0, note: "ANANAS." },
      { type: "choix", enonce: "Grande étendue d'eau salée (3 lettres) :", options: ["la mer", "le lac", "la rade"], reponse: 0, note: "MER." },
      { type: "choix", enonce: "Aliment sucré fabriqué par les abeilles (4 lettres) :", options: ["le miel", "la cire", "le sirop"], reponse: 0, note: "MIEL." },
      { type: "ecoute", enonce: "Écoutez : quel mot du jardin entendez-vous ?", audio: "L'oiseau a bâti son nid dans le grand arbre du jardin.", options: ["un nid", "un rat", "un lit"], reponse: 0, note: "NID : la petite maison que l'oiseau bâtit." }
    ],
    histoire: "Eusèbe fut prêtre à Rome au quatrième siècle. La tradition raconte qu'on l'enferma chez lui plusieurs mois, et qu'il continua d'enseigner à travers sa porte close."
  },
  {
    id: "verbes-bernard", date: "2026-08-20", saint: "Saint Bernard", niveau: "a2",
    theme: "Vocabulaire", titre: "Les verbes de la montagne",
    accroche: "Le mot exact pour chaque geste, et le cri de chaque bête.",
    items: [
      { type: "choix", enonce: "Il ___ enfin au sommet.", options: ["parvient", "soulève", "dévale"], reponse: 0, note: "Parvenir : arriver au terme d'un effort." },
      { type: "choix", enonce: "Il ___ la pente en courant.", options: ["franchit", "dévale", "soulève"], reponse: 1, note: "Dévaler : descendre très vite." },
      { type: "choix", enonce: "Le contraire de « construire » :", options: ["détruire", "distraire", "détourner"], reponse: 0, note: "construire ≠ détruire." },
      { type: "choix", enonce: "Le contraire de « avancer » :", options: ["reculer", "retarder", "ralentir"], reponse: 0, note: "avancer ≠ reculer." },
      { type: "choix", enonce: "Le cri de la vache :", options: ["meugler", "bêler", "braire"], reponse: 0, note: "La vache meugle." },
      { type: "choix", enonce: "Le cri du cheval :", options: ["hennir", "braire", "rugir"], reponse: 0, note: "Le cheval hennit." },
      { type: "choix", enonce: "La marmotte…", options: ["bêle", "siffle", "brait"], reponse: 1, note: "La marmotte siffle pour donner l'alerte." },
      { type: "ecoute", enonce: "Écoutez : que fait le chien ?", audio: "Quand on sonne à la porte du chalet, le chien aboie.", options: ["il aboie", "il miaule", "il gronde"], reponse: 0, note: "Le chien aboie." }
    ],
    histoire: "Bernard fonda l'abbaye de Clairvaux, dans une vallée qu'on disait sombre et qu'il nomma la claire vallée. Il aimait le silence et le travail des mains."
  },
  {
    id: "passe-compose-zephyrin", date: "2026-08-26", saint: "Saint Zéphyrin", niveau: "a2",
    theme: "Conjugaison", titre: "Le passé composé : avoir ou être ?",
    accroche: "Ce qu'on a fait, et ce qu'on est devenu.",
    items: [
      { type: "choix", enonce: "Les moissonneurs ___ partis avant le lever du jour.", options: ["ont", "sont"], reponse: 1, note: "Partir : être, et accord avec le sujet." },
      { type: "choix", enonce: "Ma sœur ___ (rentrer) de la campagne dimanche.", options: ["est rentrée", "a rentré", "est rentré"], reponse: 0, note: "Être + accord au féminin." },
      { type: "choix", enonce: "Nous ___ (boire) de l'eau fraîche à la fontaine.", options: ["avons bu", "sommes bus", "avons boi"], reponse: 0, note: "boire → bu, avec avoir." },
      { type: "choix", enonce: "Participe passé de « ouvrir » :", options: ["ouvert", "ouvri", "ouvré"], reponse: 0, note: "ouvrir → ouvert." },
      { type: "choix", enonce: "Participe passé de « vivre » :", options: ["vécu", "vivu", "vivi"], reponse: 0, note: "vivre → vécu." },
      { type: "choix", enonce: "Mes cousines ___ nous voir samedi.", options: ["ont venu", "sont venues", "sont venu"], reponse: 1, note: "Venir : être, accord féminin pluriel." },
      { type: "choix", enonce: "Vous vous ___ (se lever) tôt pour les moissons.", options: ["êtes levés", "avez levés", "êtes levé"], reponse: 0, note: "Pronominal : être, accord avec le sujet." },
      { type: "ecoute", enonce: "Écoutez : quel passé composé entendez-vous ?", audio: "Les nuages ont disparu avant midi.", options: ["ont disparu", "sont disparus", "ont disparus"], reponse: 0, note: "disparaître → disparu, avec avoir." }
    ],
    histoire: "Zéphyrin était romain et de condition modeste. On retient de lui une longue patience et le souci de tenir la maison en paix."
  },
  {
    id: "rentree-sulpice", date: "2026-08-27", saint: "Saint Sulpice", niveau: "a1",
    theme: "Vocabulaire", titre: "Le vocabulaire de la rentrée",
    accroche: "Le cartable, la classe, la récréation : les premiers mots de septembre.",
    items: [
      { type: "choix", enonce: "Le grand sac que l'on porte sur le dos : un ___", options: ["cartable", "classeur", "cahier"], reponse: 0, note: "Un cartable." },
      { type: "choix", enonce: "Le petit livre où l'on écrit ses leçons : un ___", options: ["cahier", "tableau", "cartable"], reponse: 0, note: "Un cahier." },
      { type: "choix", enonce: "La pause au milieu de la matinée : la ___", options: ["récréation", "rentrée", "cantine"], reponse: 0, note: "La récréation." },
      { type: "choix", enonce: "___ gomme", options: ["un", "une"], reponse: 1, note: "Une gomme, une trousse, une règle, une feuille." },
      { type: "choix", enonce: "___ tableau", options: ["un", "une"], reponse: 0, note: "Un tableau, un crayon, un stylo, un cahier." },
      { type: "choix", enonce: "Le matin, j' ___ (entrer) à l'école à huit heures.", options: ["entre", "entres", "entrer"], reponse: 0, note: "j'entre, tu entres, il entre." },
      { type: "choix", enonce: "Nous ___ (ouvrir) nos livres.", options: ["ouvrons", "ouvrions", "ouvrez"], reponse: 0, note: "nous ouvrons." },
      { type: "ecoute", enonce: "Écoutez : où écrit la maîtresse ?", audio: "La maîtresse écrit au tableau.", options: ["au tableau", "au cahier", "au bureau"], reponse: 0, note: "Au tableau." }
    ],
    histoire: "Sulpice fut évêque de Bourges. On dit qu'il donnait tout ce qu'il recevait et gardait sa maison ouverte aux enfants du pays."
  },
  {
    id: "temps-augustin", date: "2026-08-28", saint: "Saint Augustin", niveau: "a2",
    theme: "Grammaire", titre: "L'expression du temps",
    accroche: "Tout à l'heure, depuis huit jours, dans un mois : dire quand.",
    items: [
      { type: "choix", enonce: "Marcel habite dans notre village ___ trois ans.", options: ["depuis", "il y a", "dans"], reponse: 0, note: "Depuis : l'action continue." },
      { type: "choix", enonce: "___ un mois, Hiro est arrivé en France.", options: ["Depuis", "Il y a", "Dans"], reponse: 1, note: "Il y a regarde vers le passé." },
      { type: "choix", enonce: "Le train de Paris part ___ dix minutes.", options: ["depuis", "il y a", "dans"], reponse: 2, note: "Dans regarde vers l'avenir." },
      { type: "choix", enonce: "Hier, nous avons cuisiné des madeleines ___ deux heures.", options: ["pendant", "depuis", "dans"], reponse: 0, note: "Pendant : la durée d'une action terminée." },
      { type: "choix", enonce: "J'ai appris cette recette ___ une semaine.", options: ["en", "pendant", "depuis"], reponse: 0, note: "En : le temps qu'il a fallu pour réussir." },
      { type: "choix", enonce: "Ma sœur part à Lyon ___ huit jours.", options: ["pour", "en", "depuis"], reponse: 0, note: "Pour : la durée prévue." },
      { type: "ecoute", enonce: "Écoutez : quel indicateur de temps entendez-vous ?", audio: "On joue aux boules depuis une heure et demie.", options: ["depuis", "pendant", "il y a"], reponse: 0, note: "Depuis mesure une action commencée et qui dure." }
    ],
    histoire: "Augustin écrivit beaucoup, souvent la nuit. Il disait que le temps nous échappe dès qu'on essaie de le définir."
  },
  {
    id: "questions-mederic", date: "2026-08-31", saint: "Saint Médéric", niveau: "a2",
    theme: "Grammaire", titre: "Où, quand, comment",
    accroche: "Tout ce qu'on peut demander avec cinq petits mots.",
    items: [
      { type: "choix", enonce: "Réponse : « J'habite à Tours. » Question : ___ habitez-vous ?", options: ["Où", "Quand", "Comment"], reponse: 0, note: "Où interroge sur le lieu." },
      { type: "choix", enonce: "Réponse : « À dix heures. » Question :", options: ["Quand ouvre le musée ?", "À quelle heure ouvre le musée ?"], reponse: 1, note: "L'heure précise appelle à quelle heure." },
      { type: "choix", enonce: "___ vous a donné cette recette ?", options: ["Qui", "Qu'est-ce qui", "Que"], reponse: 0, note: "Qui : une personne, sujet du verbe." },
      { type: "choix", enonce: "___ se passe dans la cuisine ?", options: ["Qui", "Qu'est-ce qui", "Que"], reponse: 1, note: "Qu'est-ce qui : une chose, sujet du verbe." },
      { type: "choix", enonce: "___ saison préférez-vous ?", options: ["Quel", "Quelle", "Quels"], reponse: 1, note: "Saison est féminin singulier." },
      { type: "choix", enonce: "___ pensez-vous de ce gâteau ?", options: ["Quoi", "Que"], reponse: 1, note: "Quoi ne se met jamais devant le verbe." },
      { type: "choix", enonce: "Avec « est-ce que » : vous vous êtes inscrit au cours ? → ___ vous vous êtes inscrit au cours ?", options: ["Est-ce que", "Qu'est-ce que", "Est-ce qui"], reponse: 0, note: "Est-ce que garde l'ordre sujet-verbe." },
      { type: "ecoute", enonce: "Écoutez : quel mot interrogatif entendez-vous ?", audio: "D'où venez-vous, madame ?", options: ["D'où", "Où", "Comment"], reponse: 0, note: "D'où : l'origine, le point de départ." }
    ],
    histoire: "Médéric quitta son abbaye pour vivre près de Paris, dans une cellule au bord de la route. Les passants s'arrêtaient lui demander leur chemin."
  },
  {
    id: "lequel-gilles", date: "2026-09-01", saint: "Saint Gilles", niveau: "b1",
    theme: "Grammaire", titre: "Lequel, auquel, duquel",
    accroche: "Lequel ? Auquel ? Duquel ? Le mot qui évite de se répéter.",
    items: [
      { type: "choix", enonce: "Deux tartes : ___ voulez-vous ?", options: ["Lequel", "Laquelle", "Lesquelles"], reponse: 1, note: "Une tarte, féminin singulier." },
      { type: "choix", enonce: "Trois trains : ___ arrive le premier ?", options: ["Laquelle", "Lesquels", "Lequel"], reponse: 2, note: "Un train, masculin singulier." },
      { type: "choix", enonce: "Ces lettres : ___ répondez-vous d'abord ?", options: ["Auxquelles", "Auxquels", "À laquelle"], reponse: 0, note: "à + lesquelles = auxquelles." },
      { type: "choix", enonce: "Ces deux tableaux : ___ tient-il le plus ?", options: ["Auquel", "Auxquels", "À laquelle"], reponse: 0, note: "Il tient à un seul des deux." },
      { type: "choix", enonce: "Un village : ___ vous souvenez-vous ?", options: ["duquel", "de lequel", "auquel"], reponse: 0, note: "de + lequel = duquel, en un seul mot." },
      { type: "choix", enonce: "Ces falaises : ___ nous approchons-nous ?", options: ["desquelles", "de lesquelles", "auxquelles"], reponse: 0, note: "de + lesquelles = desquelles." },
      { type: "choix", enonce: "Voici la table sous ___ elles étaient rangées.", options: ["souslaquelle", "laquelle", "duquel"], reponse: 1, note: "Après une préposition simple, on écrit laquelle en deux mots." },
      { type: "ecoute", enonce: "Écoutez : quel pronom entendez-vous ?", audio: "C'est le miroir à propos duquel je vous écrivais hier.", options: ["duquel", "de lequel", "auquel"], reponse: 0, note: "à propos de + lequel = à propos duquel." }
    ],
    histoire: "Gilles vint d'Orient et choisit de vivre seul dans une forêt près du Rhône. Une biche venait lui donner son lait. Le roi, chassant dans ce bois, la blessa d'une flèche ; plein de regret, il fit bâtir un monastère : la ville de Saint-Gilles, dans le Gard."
  },
  {
    id: "pierres-just", date: "2026-09-02", saint: "Saint Just", niveau: "b1",
    theme: "Vocabulaire", titre: "Les pierres précieuses",
    accroche: "De la mine à la vitrine : les pierres, l'or, les bijoux.",
    items: [
      { type: "image", enonce: "On la porte au doigt.", image: "uploads/tweetybirdhorizon_a_ring_in_gold_and_a_rubis_gemstone_--chaos_79b4a5cb-8776-4a11-bacb-0e4a787e3969_0.png", options: ["une bague", "un bracelet", "une broche"], reponse: 0, note: "Une bague. L'anneau, c'est le cercle de métal." },
      { type: "image", enonce: "Il se ferme derrière le cou.", image: "uploads/tweetybirdhorizon_a_necklace_in_gold_and_rubis_--chaos_25_--a_8e0e1332-921a-40ed-99d8-8190f270b3bc_2.png", options: ["un collier", "un bracelet", "une couronne"], reponse: 0, note: "Un collier." },
      { type: "image", enonce: "Elle se pose sur la tête.", image: "uploads/tweetybirdhorizon_a_crown_in_gold_and_rubis_--chaos_25_--ar_1_375da5e9-1ce3-4294-aa76-4f939656186b_0.png", options: ["une couronne", "une bague", "une broche"], reponse: 0, note: "Une couronne." },
      { type: "image", enonce: "Elles se portent aux oreilles.", image: "uploads/tweetybirdhorizon_earrings_in_gold_and_rubis_--chaos_25_--ar__416211d7-223d-4d51-8fd5-b15f39bdf529_0.png", options: ["des boucles d'oreilles", "un collier", "une broche"], reponse: 0, note: "Des boucles d'oreilles — toujours au pluriel, comme les lunettes." },
      { type: "choix", enonce: "Elle est verte et vient de Colombie : une ___", options: ["émeraude", "topaze", "améthyste"], reponse: 0, note: "Une émeraude." },
      { type: "choix", enonce: "Le morceau d'or brut ramassé dans la rivière :", options: ["un filon", "une pépite", "un tamis"], reponse: 1, note: "La pépite se ramasse ; le filon se creuse ; le tamis lave le sable." },
      { type: "choix", enonce: "Le long couloir souterrain de la mine : une ___", options: ["galerie", "pépite", "veine"], reponse: 0, note: "Une galerie." },
      { type: "choix", enonce: "« Sertir » une pierre, c'est :", options: ["la fixer dans le métal", "la polir", "l'estimer"], reponse: 0, note: "On taille, on sertit, on polit, puis on grave." },
      { type: "ecoute", enonce: "Écoutez : quelle pierre entendez-vous ?", audio: "Ce saphir de Ceylan vaut une fortune.", options: ["un saphir", "un rubis", "une perle"], reponse: 0, note: "Un saphir, bleu comme le ciel du soir." }
    ],
    histoire: "Just vivait à Lyon, ville de marchands et d'ateliers. Il préféra la vie simple aux honneurs et partit vers l'Égypte, où il vécut au désert. Lyon devint plus tard la ville des soyeux et des orfèvres."
  },
  {
    id: "passive-rosalie", date: "2026-09-04", saint: "Sainte Rosalie", niveau: "b1",
    theme: "Grammaire", titre: "La voix passive",
    accroche: "Un voyage à Palerme : ce qui est fait, et par qui.",
    items: [
      { type: "choix", enonce: "Les Grecs ont fondé Palerme. → Palerme ___ par les Grecs.", options: ["a été fondée", "a été fondé", "est fondant"], reponse: 0, note: "Passé composé passif : avoir été + participe accordé avec le sujet." },
      { type: "choix", enonce: "On servira les cannoli au dessert. → Les cannoli ___ au dessert.", options: ["seront servis", "seront servi", "sont servir"], reponse: 0, note: "Futur passif : les cannoli sont masculin pluriel." },
      { type: "choix", enonce: "Un berger découvrit les reliques. → Les reliques…", options: ["furent découvertes", "furent découvert", "sont découvrir"], reponse: 0, note: "Le participe s'accorde toujours avec le sujet : découvertes." },
      { type: "choix", enonce: "La chapelle a été bâtie ___ un architecte sicilien.", options: ["par", "de"], reponse: 0, note: "Une action véritable, avec son auteur : « par »." },
      { type: "choix", enonce: "Les mosaïques ___ (admirer, présent) par des milliers de visiteurs.", options: ["sont admirées", "sont admirés", "ont admiré"], reponse: 0, note: "Présent passif : sont + participe accordé au féminin pluriel." },
      { type: "choix", enonce: "Le marché ouvrira ses portes à l'aube. → Les portes ___ à l'aube.", options: ["seront ouvertes", "seront ouvert", "sont ouvrir"], reponse: 0, note: "Futur passif, participe accordé au féminin pluriel." },
      { type: "choix", enonce: "Autrefois, l'île ___ (gouverner, imparfait) par des rois normands.", options: ["était gouvernée", "est gouvernée", "a été gouvernée"], reponse: 0, note: "Imparfait passif : était + participe accordé." },
      { type: "choix", enonce: "Ce dessert a été inventé à Palerme. → On ___ ce dessert à Palerme.", options: ["a inventé", "a inventée", "est inventé"], reponse: 0, note: "Avec « on », le participe ne s'accorde plus." },
      { type: "ecoute", enonce: "Écoutez : quelle forme passive entendez-vous ?", audio: "Les fresques de la chapelle sont restaurées avec soin.", options: ["sont restaurées", "sont restaurés", "ont restauré"], reponse: 0, note: "Présent passif : sont + participe accordé au féminin pluriel." }
    ],
    histoire: "Rosalie naquit dans une grande famille de Palerme et choisit la solitude d'une grotte du mont Pellegrino. Quatre siècles plus tard, ses reliques y furent retrouvées, puis portées à travers la ville : Palerme la prit pour patronne et lui offre chaque été une grande fête."
  },
  {
    id: "prepositions-cloud", date: "2026-09-07", saint: "Saint Cloud", niveau: "a1",
    theme: "Grammaire", titre: "Les prépositions de lieu",
    accroche: "À la cour des rois francs : où l'on va, où l'on est.",
    items: [
      { type: "choix", enonce: "Clovis est baptisé ___ Reims.", options: ["en", "à", "au"], reponse: 1, note: "Devant un nom de ville, le français dit toujours « à »." },
      { type: "choix", enonce: "Les Francs vivent ___ Gaule.", options: ["en", "au", "à"], reponse: 0, note: "Devant un nom de pays ou de région féminin : « en »." },
      { type: "choix", enonce: "Le jeune prince grandit ___ palais de son grand-père.", options: ["à", "en", "au"], reponse: 2, note: "Devant un nom masculin : à + le = « au »." },
      { type: "choix", enonce: "Des cavaliers veillent ___ frontières du royaume.", options: ["aux", "à", "en"], reponse: 0, note: "Au pluriel : à + les = « aux »." },
      { type: "choix", enonce: "Le roi est assis ___ son grand trône de bois.", options: ["dans", "sur", "sous"], reponse: 1, note: "« Sur » pose la chose au-dessus, en contact." },
      { type: "choix", enonce: "Le chien du prince dort ___ la longue table.", options: ["sur", "sous", "entre"], reponse: 1, note: "« Sous » place la chose en dessous." },
      { type: "choix", enonce: "Ce soir, nous dînons ___ la reine Clotilde.", options: ["dans", "à", "chez"], reponse: 2, note: "« Chez » se dit devant une personne, jamais devant un lieu." },
      { type: "choix", enonce: "La fontaine du jardin est ___ les deux vieux arbres.", options: ["entre", "devant", "sur"], reponse: 0, note: "« Entre » demande deux choses, une de chaque côté." },
      { type: "choix", enonce: "Aujourd'hui, une ville ___ bord de la Seine porte son nom.", options: ["en", "dans", "au"], reponse: 2, note: "L'expression se dit « au bord de » : au bord de la mer, au bord de la route." }
    ],
    histoire: "Cloud était le petit-fils de Clovis et de la reine Clotilde. Il grandit à la cour des rois francs, puis choisit une autre vie : il partit loin de Paris, apprit auprès d'un ermite et se fit moine. Il s'établit ensuite dans un village au bord de la Seine, où il enseignait et cultivait la terre. Ce village porte aujourd'hui son nom : Saint-Cloud."
  },
  {
    id: "possessifs-nativite", date: "2026-09-08", saint: "Nativité de Notre-Dame", niveau: "a2",
    theme: "Grammaire", titre: "Les adjectifs possessifs",
    accroche: "L'arbre d'une famille française : à qui est qui.",
    items: [
      { type: "choix", enonce: "Marie prépare le gâteau avec ___ grand-mère Odile.", options: ["son", "sa", "ses"], reponse: 1, note: "Le mot s'accorde avec la chose possédée : « grand-mère » est féminin." },
      { type: "choix", enonce: "Jean cherche ___ chaussures dans le couloir.", options: ["sa", "son", "ses"], reponse: 2, note: "« Chaussures » est au pluriel : « ses »." },
      { type: "choix", enonce: "« Voici ___ chambre », dit Marie à sa cousine.", options: ["ma", "mon", "mes"], reponse: 0, note: "Marie parle d'elle-même, et « chambre » est féminin." },
      { type: "choix", enonce: "Paul et Louise reçoivent ___ famille chaque dimanche.", options: ["leurs", "leur", "sa"], reponse: 1, note: "Deux possesseurs, mais une seule famille : « leur » sans s." },
      { type: "choix", enonce: "Agnès arrive avec ___ fille Claire.", options: ["sa", "son", "ses"], reponse: 0, note: "Le possesseur est une femme, mais c'est « fille » qui décide : « sa »." },
      { type: "choix", enonce: "« Où est ___ manteau ? », demande Odile à Henri.", options: ["son", "ton", "votre"], reponse: 1, note: "Odile parle à son mari : on se tutoie, donc « ton »." },
      { type: "choix", enonce: "Nous mangeons dans ___ vieille cuisine, comme autrefois.", options: ["nos", "notre", "leur"], reponse: 1, note: "« Nous » et une seule cuisine : « notre »." },
      { type: "choix", enonce: "Qui est Claire pour Jean ? Claire est ___ cousine.", options: ["sa", "leur", "ses"], reponse: 0, note: "Un seul possesseur, Jean, et une cousine : « sa »." },
      { type: "choix", enonce: "Qui est Henri pour Marie et Jean ? Henri est ___ grand-père.", options: ["son", "leur", "leurs"], reponse: 1, note: "Deux possesseurs, un seul grand-père : « leur »." },
      { type: "choix", enonce: "Les grands-parents sont venus avec ___ cadeaux.", options: ["leur", "leurs", "ses"], reponse: 1, note: "Plusieurs cadeaux : « leurs » prend un s." },
      { type: "choix", enonce: "Depuis ce jour, la famille fête ___ anniversaire à la fin de l'été.", options: ["sa", "son", "ses"], reponse: 1, note: "« Anniversaire » est masculin : « son »." }
    ],
    histoire: "Le 8 septembre, l'Église fête la naissance de Marie. La tradition donne à ses parents les noms d'Anne et de Joachim, et place cette naissance à Jérusalem, dans une maison simple. En France, ce jour tombe à la fin des moissons : on l'appelait autrefois la Notre-Dame des vendanges, car il ouvrait la saison du raisin. Les familles se retrouvaient dans les vignes, et l'on parlait beaucoup de sa mère, de son père, de ses cousins."
  },
  {
    id: "chaperon-adrien", date: "2026-09-09", saint: "Saint Adrien", niveau: "a2",
    theme: "Compréhension", titre: "Le Petit Chaperon rouge, partie 1",
    accroche: "Le chemin du bois, la galette, le loup : le conte de Perrault en phrases courtes.",
    items: [
      { type: "choix", enonce: "La petite fille a un surnom à cause de son manteau.", options: ["Vrai", "Faux"], reponse: 0, note: "Un manteau rouge avec un capuchon : le Petit Chaperon rouge." },
      { type: "choix", enonce: "Sa mère met des pommes et un pot de beurre dans le panier.", options: ["Vrai", "Faux"], reponse: 1, note: "Une galette et un petit pot de beurre." },
      { type: "choix", enonce: "La mère-grand est en bonne santé.", options: ["Vrai", "Faux"], reponse: 1, note: "Elle est malade : c'est pour cela que l'enfant part la voir." },
      { type: "choix", enonce: "Le loup mange la petite fille dans le bois.", options: ["Vrai", "Faux"], reponse: 1, note: "Il n'ose pas : des bûcherons travaillent tout près." },
      { type: "choix", enonce: "Le loup prend le chemin le plus long.", options: ["Vrai", "Faux"], reponse: 1, note: "Il prend le plus court, et il court vite." },
      { type: "choix", enonce: "« Mère-grand », dans le conte, veut dire…", options: ["la mère", "la grand-mère", "la marraine"], reponse: 1, note: "C'est la forme ancienne de « grand-mère », chez Perrault." },
      { type: "choix", enonce: "Quel temps fait-il ce jour-là ?", options: ["Il pleut", "Le soleil brille entre les arbres", "Il neige"], reponse: 1, note: "Un beau matin d'été." },
      { type: "choix", enonce: "Où habite la mère-grand ?", options: ["Au bord du bois", "Par-delà le moulin, à la première maison du village", "Derrière l'église"], reponse: 1, note: "C'est la réponse que l'enfant donne au loup." },
      { type: "choix", enonce: "Pourquoi le loup ne mange-t-il pas la petite fille tout de suite ?", options: ["Il n'a pas faim", "Des bûcherons travaillent tout près", "Il préfère la galette"], reponse: 1, note: "La présence des hommes le retient." },
      { type: "choix", enonce: "Que propose le loup ?", options: ["De porter le panier", "De prendre chacun un chemin, pour voir qui arrive le premier", "De l'accompagner jusqu'au moulin"], reponse: 1, note: "C'est le pari des deux chemins." },
      { type: "choix", enonce: "Que fait la petite fille sur le chemin le plus long ?", options: ["Elle court sans s'arrêter", "Elle cueille des noisettes et court après les papillons", "Elle dort sous un arbre"], reponse: 1, note: "Elle prend son temps : le loup arrivera avant elle." }
    ],
    histoire: "Charles Perrault publie ce conte en 1697, dans les Histoires ou contes du temps passé. Il a soixante-neuf ans et il est un homme de Versailles : il a travaillé auprès de Colbert et siégé à l'Académie française. Il met par écrit des histoires que l'on se racontait à la veillée, et il les écrit dans une langue simple, pour être lu à voix haute. La suite du Petit Chaperon rouge paraît demain."
  },
  {
    id: "chaperon-nicolas", date: "2026-09-10", saint: "Saint Nicolas de Tolentino", niveau: "a2",
    theme: "Compréhension", titre: "Le Petit Chaperon rouge, partie 2",
    accroche: "La chevillette, le lit, la grosse voix : la fin du conte de Perrault.",
    items: [
      { type: "choix", enonce: "Le loup arrive le premier chez la mère-grand.", options: ["Vrai", "Faux"], reponse: 0, note: "Il a pris le chemin le plus court." },
      { type: "choix", enonce: "Le loup entre dans la maison par la fenêtre.", options: ["Vrai", "Faux"], reponse: 1, note: "Il entre par la porte, après avoir tiré la chevillette. C'est à la fin qu'il saute par la fenêtre." },
      { type: "choix", enonce: "Que dit le loup derrière la porte ?", options: ["Ouvrez, c'est le médecin", "Je suis votre petite-fille, le Petit Chaperon rouge", "Ouvrez, je suis le loup"], reponse: 1, note: "Il prend une petite voix pour se faire ouvrir." },
      { type: "choix", enonce: "Où le loup enferme-t-il la mère-grand ?", options: ["Dans la cave", "Dans l'armoire", "Au fond du jardin"], reponse: 1, note: "Elle en ressortira à la fin, bien vivante." },
      { type: "choix", enonce: "Le loup se couche dans le lit avec le bonnet de la mère-grand.", options: ["Vrai", "Faux"], reponse: 0, note: "Le bonnet et les draps tirés jusqu'au menton." },
      { type: "choix", enonce: "La petite fille reconnaît le loup tout de suite.", options: ["Vrai", "Faux"], reponse: 1, note: "La grosse voix lui fait peur, mais elle croit que sa mère-grand a un rhume." },
      { type: "choix", enonce: "« Que vous avez de grands bras ! » — « C'est pour mieux t'___, ma fille. »", options: ["embrasser", "embrasse", "embrassant"], reponse: 0, note: "Après « pour mieux », le verbe reste à l'infinitif : on ne le conjugue jamais." },
      { type: "choix", enonce: "« Que vous avez de grandes jambes ! » — « C'est pour mieux ___. »", options: ["je cours", "courir", "courant"], reponse: 1, note: "Toujours l'infinitif." },
      { type: "choix", enonce: "« Que vous avez de grandes oreilles ! » — « C'est pour mieux t'___. »", options: ["écouter", "écoute", "écoutes"], reponse: 0, note: "Écouter, et non entendre : le loup fait semblant d'être attentif." },
      { type: "choix", enonce: "« Que vous avez de grandes dents ! » — « C'est pour mieux te ___ ! »", options: ["mange", "manger", "mangeant"], reponse: 1, note: "La dernière réplique du conte." },
      { type: "choix", enonce: "C'est un chasseur qui ouvre la porte à la fin.", options: ["Vrai", "Faux"], reponse: 0, note: "Le loup saute par la fenêtre et part loin dans le bois." },
      { type: "choix", enonce: "Comment le conte se termine-t-il ?", options: ["Le loup emporte la galette", "La mère-grand sort de l'armoire et l'on mange la galette ensemble", "La petite fille repart seule au village"], reponse: 1, note: "Une fin douce, dans cette version." }
    ],
    histoire: "Nicolas est né vers 1245 dans un village des Marches, en Italie. Devenu moine augustin, il s'installe à Tolentino et y reste trente ans, sans jamais en repartir. On l'écoutait volontiers : il parlait doucement, et il passait ses journées auprès des malades et des pauvres de la ville. La tradition raconte qu'il tomba malade à son tour, et qu'il guérit après avoir mangé un petit pain trempé dans l'eau. Depuis, on bénit le 10 septembre des petits pains que l'on porte aux malades. Il est mort à Tolentino en 1305, et c'est le premier augustin que l'Église ait canonisé."
  },
  {
    id: "conjugaison-prothe", date: "2026-09-11", saint: "Saint Prothé", niveau: "a2",
    theme: "Conjugaison", titre: "Les verbes en -dre",
    accroche: "Des verbes du troisième groupe qui ne suivent pas les mêmes règles.",
    items: [
      { type: "choix", enonce: "J'___ la pluie sur les volets.", options: ["entend", "entends", "entende"], reponse: 1, note: "Je entends, tu entends, il entend : le s est pour les deux premières personnes." },
      { type: "choix", enonce: "Nous ___ le train de sept heures.", options: ["attendons", "attendrons", "attendions"], reponse: 0, note: "Présent : nous attendons. Attendrons serait le futur." },
      { type: "choix", enonce: "Vous ___ toujours avec patience.", options: ["répondes", "répondez", "répondiez"], reponse: 1, note: "Vous répondez, comme vous attendez, vous descendez." },
      { type: "choix", enonce: "Ils ___ l'escalier doucement.", options: ["descend", "descendent", "descendes"], reponse: 1, note: "Le d revient à toutes les personnes : ils descendent." },
      { type: "choix", enonce: "Je ___ la porte du jardin en bleu.", options: ["peint", "peins", "peinds"], reponse: 1, note: "Je peins : la famille de peindre perd le d au singulier." },
      { type: "choix", enonce: "Nous ___ ensemble le dimanche.", options: ["peindons", "peignons", "peinons"], reponse: 1, note: "Au pluriel, le d devient gn : nous peignons." },
      { type: "choix", enonce: "Elle ___ la lampe à minuit.", options: ["éteint", "éteind", "éteins"], reponse: 0, note: "Il ou elle éteint, sans d et sans s." },
      { type: "choix", enonce: "Vous ___ le froid de novembre.", options: ["craindez", "craignez", "craigniez"], reponse: 1, note: "Craindre suit peindre : vous craignez." },
      { type: "choix", enonce: "Ils ___ une photo à leur lettre.", options: ["joindent", "joignent", "joinent"], reponse: 1, note: "Ils joignent, comme ils peignent." },
      { type: "choix", enonce: "Hier, nous ___ un beau concert.", options: ["avons entendu", "avons entendus", "sommes entendus"], reponse: 0, note: "Avec avoir, le participe ne s'accorde pas avec le sujet." },
      { type: "choix", enonce: "Mon frère ___ tout le salon.", options: ["a peindu", "a peint", "a peins"], reponse: 1, note: "Le participe de peindre est peint." },
      { type: "choix", enonce: "J'___ la radio pour mieux lire.", options: ["ai éteind", "ai éteint", "ai éteins"], reponse: 1, note: "Éteindre donne éteint, comme peindre donne peint." }
    ],
    histoire: "Prothé et son frère Hyacinthe vivaient à Rome. Ils servaient une jeune femme de bonne famille, Eugénie, et ils l'ont suivie quand elle est devenue chrétienne. Tous les trois lisaient les livres saints ensemble. On raconte qu'ils répondaient avec calme et douceur à ceux qui les interrogeaient. Le calendrier de 1714 les fête le 11 septembre. Leurs tombes ont été retrouvées au dix-neuvième siècle, sur la voie Salaria. Le mot qui leur convient est justement un verbe du jour : ils ont su entendre et répondre."
  }
];

/* Sujet réel de chaque question, lorsqu'il diffère du thème du billet.
   Clés : identifiant du billet → numéro de la question (à partir de 0) → sujet. */
var MPM_SUJETS = {
  "progression-anne":  { 0:"Vocabulaire", 1:"Orthographe", 2:"Conjugaison", 3:"Conjugaison", 4:"Conjugaison", 5:"Vocabulaire" },
  "plage-laurent":     { 0:"Vocabulaire", 1:"Vocabulaire", 2:"Conjugaison", 4:"Conjugaison", 6:"Conjugaison" },
  "jardin-hyacinthe":  { 4:"Orthographe", 5:"Conjugaison" },
  "rentree-sulpice":   { 3:"Grammaire", 4:"Grammaire", 5:"Conjugaison", 6:"Conjugaison" },
  "vocabulaire-anaclet": { 5:"Vocabulaire" },
  "orthographe-marthe": { 7:"Orthographe" },
  "geographie-cyriaque": { 1:"Orthographe", 5:"Orthographe" },
  "dialogue-marguerite": { 3:"Vocabulaire" },
  "caniculaires":      { 5:"Vocabulaire" },
  "varie-abdon":       { 4:"Compréhension", 5:"Compréhension", 6:"Compréhension" },
  "subjonctif-madeleine": { 5:"Grammaire", 6:"Grammaire" },
  "conjugaison-assomption": { 3:"Conjugaison", 4:"Conjugaison", 5:"Conjugaison" },
  "liaisons-hippolyte": { 2:"Orthographe", 3:"Orthographe", 4:"Orthographe", 5:"Orthographe" },
  "marche-dominique":  { 5:"Compréhension" }
};

/* Enregistrements de la voix : app/audio/<id>-<n>.wav quand le fichier existe. */
window.MPM_EXERCICES.forEach(function(b){
  var n = 0, sujets = MPM_SUJETS[b.id] || {};
  b.items.forEach(function(it, i){
    it.sujet = sujets[i] || b.theme;
    if (it.type === 'ecoute') { n++; it.src = 'app/audio/' + b.id + '-' + n + '.wav'; }
  });
});
