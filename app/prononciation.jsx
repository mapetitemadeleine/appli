/* Ma petite madeleine — Les cartes de prononciation.
   Chargé avant app/mpm-app.jsx, expose window.Prononciation.
   Tout est dans une IIFE : les deux scripts babel partagent la portée globale,
   donc les constantes de mpm-app.jsx (IVORY, NAVY, SERIF…) ne doivent pas
   être redéclarées ici. */
(function () {
  const { useState, useEffect, useRef } = React;

  const P = {
    ivoire: '#FBF6EC', ivoire2: '#F4EBD8', ligne: '#E6D9BC', creme: '#E6D9BC',
    navy: '#1C2B4F', encre: '#141F3A', navy5: '#38507C', navy3: '#7C8CAE',
    or7: '#8F6518', or5: '#B8862B', or3: '#D9AE5C', or1: '#E9C87A',
    vert: '#5B6A4C'
  };
  const SERIF_P = "'Cormorant Garamond', Georgia, serif";
  const BODY_P = "'EB Garamond', Georgia, serif";
  const SANS_P = "Montserrat, 'Helvetica Neue', sans-serif";

  /* ——— Les lettres : la clef en grand, le mot, et la suite de lettres à
     mettre en or — toutes ses occurrences (les deux d de dindon). ——— */
  const LETTRES = [
    ['A', 'avocat', 'a'], ['B', 'betterave', 'b'], ['C', 'cadeau', 'c'], ['D', 'dindon', 'd'],
    ['E', 'melon', 'e'], ['F', 'fenêtre', 'f'], ['G', 'gâteau', 'g'], ['H', 'hibou', 'h'],
    ['I', 'île', 'î'], ['J', 'jardin', 'j'], ['K', 'koala', 'k'], ['L', 'lapin', 'l'],
    ['M', 'madeleine', 'm'], ['N', 'nuage', 'n'], ['O', 'orange', 'o'], ['P', 'pont', 'p'],
    ['Q', 'quiche', 'qu'], ['R', 'renard', 'r'], ['S', 'soleil', 's'], ['T', 'tulipe', 't'],
    ['U', 'unicolore', 'u'], ['V', 'violon', 'v'], ['W', 'wagon', 'w'], ['X', 'xylophone', 'x'],
    ['Y', 'yoga', 'y'], ['Z', 'zèbre', 'z']
  ];

  /* ——— Les graphies : deux ou trois lettres, un son. ——— */
  const GRAPHIES = [
    ['an', 'éléphant', 'an'], ['on', 'pont', 'on'], ['in', 'lapin', 'in'], ['ain', 'pain', 'ain'],
    ['eau', 'château', 'eau'], ['eu', 'feu', 'eu'], ['ou', 'mouton', 'ou'], ['oi', 'poire', 'oi'],
    ['un', 'lundi', 'un'], ['ill', 'papillon', 'ill'], ['gn', 'agneau', 'gn'], ['ch', 'cheval', 'ch'],
    ['é', 'café', 'é'], ['è', 'chèvre', 'è'], ['ai', 'maison', 'ai'], ['œu', 'cœur', 'œu'],
    ['ph', 'téléphone', 'ph']
  ];

  /* ——— Les signes qui changent vraiment le son. Le circonflexe n'y est pas :
     ê se dit comme è, î comme i — règle de lecture, pas de prononciation. ——— */
  const SIGNES = [
    ['ç', 'cédille', 'garçon', 'ç'],
    ['ï', 'tréma', 'maïs', 'ï'],
    ['ë', 'tréma', 'Noël', 'ë']
  ];

  /* ——— Les pièges : une lettre, deux prononciations. ——— */
  const PIEGES = [
    ['c', 'dur ou doux', [['cadeau', 'c', 'on dit k'], ['cerise', 'c', 'on dit s']]],
    ['g', 'dur ou doux', [['gâteau', 'g', 'on dit g'], ['girafe', 'g', 'on dit j']]],
    ['s', 'simple ou double', [['rose', 's', 'on dit z'], ['poisson', 'ss', 'on dit s']]],
    ['h', 'muet ou aspiré', [["l'homme", 'h', 'on enchaîne'], ['le hibou', 'h', 'on sépare']]]
  ];

  /* ——— Les familles de son : plusieurs écritures, un seul son. ——— */
  const FAMILLES = [
    ['in', [['lapin', 'in'], ['pain', 'ain'], ['peinture', 'ein'], ['lundi', 'un']]],
    ['an', [['éléphant', 'an'], ['dent', 'en'], ['lampe', 'am'], ['temps', 'em']]],
    ['on', [['pont', 'on'], ['nombre', 'om']]],
    ['é', [['café', 'é'], ['parler', 'er'], ['nez', 'ez'], ['bouquet', 'et']]],
    ['è', [['chèvre', 'è'], ['maison', 'ai'], ['baleine', 'ei'], ['fenêtre', 'ê']]],
    ['o', [['orange', 'o'], ['hôpital', 'ô'], ['château', 'eau'], ['jaune', 'au']]]
  ];

  const VOYELLES_P = ['A', 'E', 'I', 'O', 'U', 'Y'];

  /* U comme unicolore : pas de gravure, un aplat rose fuchsia adouci. */
  const FUCHSIA = '#C4739B';

  const nu = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  /* Nom de fichier tranquille : pas d'accent, pas de ligature. */
  function fichierDe(prefixe, cle) {
    const noms = { 'é': 'e-aigu', 'è': 'e-grave', 'ç': 'c-cedille', 'ï': 'i-trema', 'ë': 'e-trema', 'œu': 'oeu' };
    return prefixe + '-' + (noms[cle] || nu(cle.toLowerCase()).replace(/œ/g, 'oe'));
  }

  /* Découpe le mot en morceaux, encre ou or. Une suite accentuée (é, è, î) se
     cherche telle quelle ; sinon les accents sont ignorés, pour que « an » se
     trouve bien dans « éléphant ». */
  function decouper(mot, saillant) {
    const exact = saillant !== nu(saillant);
    const foin = (exact ? mot : nu(mot)).toLowerCase();
    const aiguille = (exact ? saillant : nu(saillant)).toLowerCase();
    const out = [];
    let i = 0, depart = 0;
    while (i <= foin.length - aiguille.length) {
      if (foin.startsWith(aiguille, i)) {
        if (i > depart) out.push({ t: mot.slice(depart, i), or: false });
        out.push({ t: mot.slice(i, i + aiguille.length), or: true });
        i += aiguille.length;
        depart = i;
      } else i += 1;
    }
    if (depart < mot.length) out.push({ t: mot.slice(depart), or: false });
    return out.length ? out : [{ t: mot, or: false }];
  }

  /* Les gravures de Laurence, une par carte. Tant qu'un fichier manque, on
     emprunte une gravure des billets, servie par le site : la carte garde son
     allure au lieu d'afficher un disque vide. */
  const imageDe = fichier => 'app/img/prononciation/' + fichier + '.jpg';
  const SITE_IMG = 'https://mapetitemadeleine.org/img/vignettes/';
  const VIGNETTES_P = ['caniculaires', 'chaperon-adrien', 'chaperon-nicolas', 'comparatifs-pantaleon',
    'conjugaison-assomption', 'conjugaison-germain', 'conjugaison-prothe', 'dialogue-marguerite',
    'geographie-cyriaque', 'jardin-hyacinthe', 'lecture-clair', 'lequel-gilles', 'liaisons-hippolyte',
    'marche-dominique', 'modaux-transfiguration', 'mots-croises-eusebe', 'negation-victor',
    'orthographe-marthe', 'passe-compose-zephyrin', 'passive-rosalie', 'philippe-beniti',
    'pierres-just', 'plage-laurent', 'pluriel-etienne', 'possessifs-nativite', 'prepositions-cloud',
    'progression-anne', 'proverbes-alexis', 'questions-mederic', 'rentree-sulpice',
    'subjonctif-madeleine', 'temporelles-suzanne', 'temps-augustin', 'vacances-apollinaire',
    'varie-abdon', 'verbes-bernard', 'vocabulaire-anaclet', 'vocabulaire-pierre'];
  let tourP = 0;
  const depannage = () => SITE_IMG + VIGNETTES_P[tourP++ % VIGNETTES_P.length] + '.jpg';

  const CARTES_P = [].concat(
    LETTRES.map(([cle, mot, sa]) => ({
      genre: VOYELLES_P.includes(cle) ? 'voyelle' : 'consonne',
      cle, mot, nom: '', fichier: fichierDe('lettre', cle), morceaux: decouper(mot, sa), mots: [],
      secours: depannage(), aplat: cle === 'U' ? FUCHSIA : null
    })),
    GRAPHIES.map(([cle, mot, sa]) => ({
      genre: 'graphie', cle, mot, nom: '',
      fichier: fichierDe('graphie', cle), morceaux: decouper(mot, sa), mots: [], secours: depannage()
    })),
    SIGNES.map(([cle, nom, mot, sa]) => ({
      genre: 'signe', cle, mot, nom,
      fichier: fichierDe('signe', cle), morceaux: decouper(mot, sa), mots: [], secours: depannage()
    })),
    PIEGES.map(([cle, nom, paire]) => ({
      genre: 'piege', cle, nom, mot: paire.map(p => p[0]).join(', '),
      fichier: fichierDe('piege', cle), morceaux: decouper(paire[0][0], paire[0][1]),
      mots: paire.map(([mot, sa, etiquette], k) => ({
        mot, etiquette, morceaux: decouper(mot, sa),
        fichier: fichierDe('piege', cle) + '-' + (k + 1), secours: depannage()
      }))
    })),
    FAMILLES.map(([cle, liste]) => ({
      genre: 'famille', cle, nom: '', mot: liste.map(l => l[0]).join(', '),
      fichier: fichierDe('famille', cle),
      morceaux: [{ t: liste.length + ' écritures', or: false }],
      mots: liste.map(([mot, sa]) => ({ mot, etiquette: sa, morceaux: decouper(mot, sa) }))
    }))
  );

  /* ——— Le lecteur : le mp3 de Laurence d'abord, le wav ensuite, et la voix de
     synthèse en dernier recours, le temps que les pistes soient gravées. ——— */
  const memoireP = new Map();
  let encoursP = null;
  const PISTES_P = f => [
    'app/audio/prononciation/' + f + '.mp3', 'app/audio/prononciation/' + f + '.wav',
    'audio/prononciation/' + f + '.mp3', 'audio/prononciation/' + f + '.wav'
  ];

  function prechargerP(f) {
    if (!f || memoireP.has(f)) return;
    const suite = liste => {
      if (!liste.length) return;
      try {
        const a = new Audio();
        a.preload = 'auto';
        a.volume = 0.7;
        a.onerror = () => { memoireP.delete(f); suite(liste.slice(1)); };
        a.src = liste[0];
        memoireP.set(f, a);
        a.load();
      } catch (e) {}
    };
    suite(PISTES_P(f));
  }

  function direP(carte) {
    try { speechSynthesis.cancel(); } catch (e) {}
    if (encoursP) { try { encoursP.pause(); } catch (e) {} encoursP = null; }
    const prete = memoireP.get(carte.fichier);
    if (prete && prete.readyState >= 2) {
      try {
        prete.currentTime = 0;
        encoursP = prete;
        const p = prete.play();
        if (p && p.catch) p.catch(() => {});
        return;
      } catch (e) {}
    }
    const secours = () => {
      try {
        const u = new SpeechSynthesisUtterance(carte.mot);
        u.lang = 'fr-FR';
        u.rate = 0.85;
        u.volume = 0.55;
        speechSynthesis.speak(u);
      } catch (e) {}
    };
    const essai = liste => {
      if (!liste.length) return secours();
      try {
        const a = new Audio(liste[0]);
        a.volume = 0.7;
        encoursP = a;
        memoireP.set(carte.fichier, a);
        a.onerror = () => { memoireP.delete(carte.fichier); essai(liste.slice(1)); };
        const p = a.play();
        if (p && p.catch) p.catch(() => essai(liste.slice(1)));
      } catch (e) { secours(); }
    };
    essai(PISTES_P(carte.fichier));
  }

  /* ——— Les pièces ——— */

  function Mot({ morceaux, taille, encre }) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline',
        fontFamily: SERIF_P, fontSize: taille, lineHeight: 1.05 }}>
        {morceaux.map((m, i) => (
          <span key={i} style={{ whiteSpace: 'pre', color: m.or ? P.or5 : (encre || P.navy) }}>{m.t}</span>
        ))}
      </div>
    );
  }

  function Libelle({ children, couleur }) {
    return (
      <div style={{ fontFamily: SANS_P, fontWeight: 500, fontSize: 13, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: couleur }}>{children}</div>
    );
  }

  /* Le médaillon rond qui mord dans le bandeau. Il essaie la gravure de la
     carte, puis la gravure de dépannage, puis l'ivoire orné. */
  function Medaillon({ fichier, secours, taille, epais, aplat, voile }) {
    const [etape, setEtape] = useState(0);
    const source = aplat ? null : etape === 0 ? imageDe(fichier) : etape === 1 ? secours : null;
    return (
      <div style={{ position: 'relative', width: taille, height: taille, borderRadius: '50%', boxSizing: 'border-box',
        border: (epais || 3) + 'px solid ' + P.or5, background: aplat || P.ivoire2, overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        {source
          ? <img src={source} alt="" onError={() => setEtape(e => e + 1)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : aplat ? null
          : <span style={{ fontSize: Math.round(taille * 0.2), color: P.or3 }}>⚜</span>}
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', pointerEvents: 'none',
          background: '#141F3A', opacity: voile ? 0.26 : 0, transition: 'opacity 160ms ease-out' }} />
      </div>
    );
  }

  const BANDEAUX = {
    consonne: { fond: P.navy, libelle: '#F1DEDC99', lettre: P.ivoire, petite: P.or1 },
    voyelle: { fond: P.or3, libelle: '#141F3A99', lettre: P.encre, petite: P.ivoire },
    graphie: { fond: P.vert, libelle: '#F1DEDC99', lettre: P.ivoire, petite: P.ivoire },
    signe: { fond: P.vert, libelle: '#F1DEDC99', lettre: P.ivoire, petite: P.ivoire },
    piege: { fond: P.creme, libelle: '#141F3A99', lettre: P.navy, petite: P.or7 },
    famille: { fond: P.encre, libelle: '#F1DEDC99', lettre: P.or1, petite: P.or1 }
  };

  function Carte({ carte, onToucher }) {
    const t = BANDEAUX[carte.genre];
    const [presse, setPresse] = useState(false);
    const simple = carte.genre === 'consonne' || carte.genre === 'voyelle'
      || carte.genre === 'graphie' || carte.genre === 'signe';
    const italique = carte.genre === 'graphie' || carte.genre === 'famille';
    const libelle = carte.genre === 'signe' ? carte.nom
      : carte.genre === 'famille' ? 'une famille de son'
      : carte.genre === 'piege' ? 'piège' : carte.genre;

    return (
      <div onClick={onToucher}
        onPointerDown={() => setPresse(true)}
        onPointerUp={() => setPresse(false)}
        onPointerCancel={() => setPresse(false)}
        onPointerLeave={() => setPresse(false)}
        style={{ position: 'relative', background: P.ivoire,
        border: '1px solid ' + P.or5, borderRadius: 5, cursor: 'pointer' }}>

        <div style={{ boxSizing: 'border-box', padding: simple ? '16px 20px' : '16px 20px 18px',
          height: simple ? 132 : 'auto', background: t.fond, borderRadius: '4px 4px 0 0' }}>
          <Libelle couleur={t.libelle}>{libelle}</Libelle>
          {carte.genre === 'consonne' || carte.genre === 'voyelle' ? (
            <div style={{ marginTop: 8, whiteSpace: 'nowrap', fontFamily: SERIF_P, fontWeight: 600,
              fontSize: 68, lineHeight: 1, color: t.lettre }}>
              {carte.cle}
              <span style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: t.petite }}> {carte.cle.toLowerCase()}</span>
            </div>
          ) : carte.genre === 'piege' ? (
            <div style={{ marginTop: 6, fontFamily: SERIF_P, fontWeight: 600, fontSize: 52,
              lineHeight: 1, color: t.lettre }}>
              {carte.cle}
              <span style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 26, color: t.petite }}> {carte.nom}</span>
            </div>
          ) : (
            <div style={{ marginTop: carte.genre === 'famille' ? 6 : 8, fontFamily: SERIF_P,
              fontStyle: italique ? 'italic' : 'normal', fontWeight: 600,
              fontSize: carte.genre === 'famille' ? 56 : carte.genre === 'graphie' ? 62 : 68,
              lineHeight: 1.12, color: t.lettre }}>
              {carte.genre === 'famille' ? '« ' + carte.cle + ' »' : carte.cle}
            </div>
          )}
        </div>

        <div style={{ height: 3, background: P.or5 }} />
        <div style={{ height: 2, background: P.ivoire }} />
        <div style={{ height: 1, background: P.ligne }} />

        {simple && (
          <React.Fragment>
            <div style={{ padding: '123px 20px 30px 23px' }}>
              <Mot morceaux={carte.morceaux} taille={52} />
            </div>
            <div style={{ position: 'absolute', top: 38, right: 7 }}>
              <Medaillon fichier={carte.fichier} secours={carte.secours} aplat={carte.aplat} taille={224} voile={presse} />
            </div>
          </React.Fragment>
        )}

        {carte.genre === 'piege' && (
          <div style={{ padding: '26px 23px 30px', display: 'flex', flexDirection: 'column', gap: 22 }}>
            {carte.mots.map((w, i) => (
              <div key={i} style={{ minWidth: 0 }}>
                <div style={{ fontFamily: SANS_P, fontWeight: 500, fontSize: 12,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: P.or7 }}>{w.etiquette}</div>
                <div style={{ marginTop: 3 }}><Mot morceaux={w.morceaux} taille={44} /></div>
              </div>
            ))}
          </div>
        )}

        {carte.genre === 'famille' && (
          <div style={{ padding: '22px 23px 26px', display: 'grid',
            gridTemplateColumns: '1fr 1fr', gap: '20px 14px' }}>
            {carte.mots.map((w, i) => (
              <div key={i} style={{ minWidth: 0 }}>
                <div style={{ fontFamily: SANS_P, fontWeight: 500, fontSize: 12,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: P.or7 }}>{w.etiquette}</div>
                <div style={{ marginTop: 2 }}><Mot morceaux={w.morceaux} taille={28} /></div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  function Pilule({ onClick, fond, encre, filet, children }) {
    return (
      <button onClick={onClick} style={{ padding: '11px 18px', boxSizing: 'border-box',
        border: '1px solid ' + filet, borderRadius: 4, background: fond, whiteSpace: 'nowrap',
        fontFamily: BODY_P, fontSize: 16, color: encre, cursor: 'pointer' }}>{children}</button>
    );
  }

  /* L'écoute automatique : les cartes défilent seules, pour écouter les mains
     occupées (on se brosse les dents, le paquet tourne). */
  function BoutonAuto({ marche, onClick }) {
    return (
      <button onClick={onClick} title={marche ? 'arrêter l\'écoute automatique' : 'écoute automatique'}
        aria-label={marche ? 'arrêter l\'écoute automatique' : 'écoute automatique'}
        style={{ width: 46, height: 46, flex: 'none', boxSizing: 'border-box', borderRadius: 4,
          border: '1px solid ' + (marche ? P.navy : P.or5), background: marche ? P.navy : 'transparent',
          color: marche ? P.or1 : P.or7, fontSize: 17, lineHeight: 1, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {marche ? '❙❙' : '▶'}
      </button>
    );
  }

  function Prononciation() {
    const [i, setI] = useState(0);
    const premier = useRef(true);

    /* Tout le paquet se charge tranquillement en fond. */
    useEffect(() => {
      const pause = window.requestIdleCallback || (f => setTimeout(f, 200));
      let n = 0;
      const suite = () => {
        if (n >= CARTES_P.length) return;
        prechargerP(CARTES_P[n].fichier);
        n += 1;
        pause(suite);
      };
      pause(suite);
    }, []);

    /* La carte arrive, le son part une fois : rien à toucher. */
    useEffect(() => {
      if (premier.current) { premier.current = false; return; }
      direP(CARTES_P[i]);
    }, [i]);

    const bouge = pas => setI(v => (v + pas + CARTES_P.length) % CARTES_P.length);
    const [auto, setAuto] = useState(false);

    /* En écoute automatique, la carte suivante arrive toutes les quatre secondes
       et son son part tout seul. */
    useEffect(() => {
      if (!auto) return;
      const t = setInterval(() => setI(v => (v + 1) % CARTES_P.length), 4000);
      return () => clearInterval(t);
    }, [auto]);
    const carte = CARTES_P[i];

    return (
      <div style={{ padding: '16px 18px 26px', maxWidth: 376, margin: '0 auto', boxSizing: 'border-box' }}>
        <Carte carte={carte} onToucher={() => direP(carte)} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
          <BoutonAuto marche={auto} onClick={() => setAuto(a => !a)} />
          <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
            <Pilule onClick={() => bouge(-1)} fond="transparent" encre={P.or7} filet={P.or5}>précédente</Pilule>
            <Pilule onClick={() => bouge(1)} fond={P.navy} encre={P.ivoire} filet={P.navy}>suivante</Pilule>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 10, fontFamily: BODY_P, fontSize: 15, color: P.navy3 }}>
          {(i + 1) + ' sur ' + CARTES_P.length}
        </div>
      </div>
    );
  }

  Object.assign(window, { Prononciation, CARTES_PRONONCIATION: CARTES_P });
})();
