const { useState, useEffect, useRef } = React;
const DS = window.MaPetiteMadeleineDesignSystem_e1b54a || {};
const { DifficultyRating, Tag } = DS;
const ICONES = 'assets/icons';

const IVORY = '#FBF6EC', IVORY2 = '#F4EBD8', LINE = '#E6D9BC';
const NAVY = '#1C2B4F', NAVY5 = '#38507C', NAVY3 = '#7C8CAE', NAVY_CLAIR = '#93A1BF';
const OR7 = '#8F6518', OR5 = '#B8862B', OR3 = '#D9AE5C', OR1 = '#F3E4C0';
const VERT_F = '#EDF2E6', VERT_L = '#5B6A4C', VERT_T = '#3D4B30';
const SERIF = "'Cormorant Garamond', Georgia, serif", BODY = "'EB Garamond', Georgia, serif";
const MOIS = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const CHIFFRES = { fontVariantNumeric:'lining-nums', fontFeatureSettings:"'lnum' 1" };

let audioCourant = null;
function dire(item){
  const texte = typeof item === 'string' ? item : item.audio;
  const src = typeof item === 'object' && item.src;
  try { speechSynthesis.cancel(); } catch(e){}
  if (audioCourant) { audioCourant.pause(); audioCourant = null; }
  if (src) {
    const a = new Audio(src);
    audioCourant = a;
    const p = a.play();
    if (p && p.catch) p.catch(()=>{ if (audioCourant === a) { audioCourant = null; synth(texte); } });
    a.onerror = () => { if (audioCourant === a) { audioCourant = null; synth(texte); } };
    return;
  }
  synth(texte);
}
function synth(texte){
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texte);
    u.lang = 'fr-FR'; u.rate = 0.85;
    const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.indexOf('fr') === 0);
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch(e){}
}

const CLUB = (() => {
  try {
    if (document.cookie.split(';').some(c => c.trim().indexOf('mpm_club=') === 0)) return true;
    return !!localStorage.getItem('mpm_club_membre');
  } catch (e) { return false; }
})();
const SITE_CLUB = 'https://mapetitemadeleine.org/club.html';

function jourMois(iso){
  const d = new Date(iso + 'T08:00:00');
  return (d.getDate() === 1 ? '1er' : d.getDate()) + ' ' + MOIS[d.getMonth()];
}
function Niveau({ n, size = 19 }){
  return <DifficultyRating level={n} size={size} assetBase={ICONES} />;
}

/* ————— Le bandeau de l'accueil ————— */
function BandeauAccueil({ onQuitter }){
  return (
    <div style={{ flex:'none' }}>
      <div style={{ height:88, boxSizing:'border-box', padding:'14px 18px', display:'flex', alignItems:'center', gap:14, background:'#EFDFB8' }}>
        <button onClick={onQuitter} style={{ flex:'none', width:66, height:38, boxSizing:'border-box', display:'flex', alignItems:'center', justifyContent:'center',
          border:'1px solid '+OR7, borderRadius:4, background:'transparent', fontFamily:BODY, fontSize:16, color:OR7, cursor:'pointer' }}>Quitter</button>
        <div style={{ flex:1, minWidth:0, height:38, display:'flex', alignItems:'center', justifyContent:'center', gap:12 }}>
          <span style={{ flex:1, height:1, background:OR5 }} />
          <span style={{ fontFamily:SERIF, fontWeight:600, fontSize:40, lineHeight:1, letterSpacing:'0.02em', color:NAVY, whiteSpace:'nowrap' }}>Jeu<span style={{ color:OR7 }}>-</span>Clic</span>
          <span style={{ flex:1, height:1, background:OR5 }} />
        </div>
        <img src="assets/logo/madeleine-logo-transparent.png" alt="" style={{ flex:'none', width:48, height:48, display:'block' }} />
      </div>
      <div style={{ height:3, background:OR5 }} />
    </div>
  );
}

/* Un dialogue à deux répliques se lit mieux sur deux lignes : la réponse
   passe à la ligne, comme au théâtre. */
function replique(t){
  return (t || '').replace(/ — « /g, '\n— « ');
}

/* La ligne au-dessus du titre ne fait qu'environ 24 signes en capitales
   espacées. Au-delà de 20 signes, le nom du saint occupe la ligne à lui seul :
   mieux vaut pas de date qu'une date coupée par des points de suspension. */
const SIGNES_NOTICE = 20;
function notice(saint, date){
  const nom = (saint || '').trim();
  return nom.length > SIGNES_NOTICE ? nom : nom + ' — ' + jourMois(date);
}

/* ————— Le bandeau bleu : Sortir, le titre, les points ————— */
function Bandeau({ notice, titre, points, onSortir }){
  return (
    <div style={{ flex:'none' }}>
      <div style={{ padding:'14px 18px', display:'flex', alignItems:'flex-start', gap:14, background:NAVY }}>
        <button onClick={onSortir} style={{ flex:'none', width:66, height:38, boxSizing:'border-box', display:'flex', alignItems:'center', justifyContent:'center',
          border:'1px solid '+OR3, borderRadius:4, background:'transparent', fontFamily:BODY, fontSize:16, color:OR3, cursor:'pointer' }}>Sortir</button>
        <div style={{ flex:1, minWidth:0, height:38, position:'relative', paddingRight:4 }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, fontFamily:BODY, fontSize:13, lineHeight:1, letterSpacing:'0.14em', textTransform:'uppercase', color:NAVY_CLAIR,
            whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{notice}</div>
          <div style={{ position:'absolute', bottom:-4, left:0, right:0, fontFamily:SERIF, fontWeight:600, fontSize:20, lineHeight:1, color:IVORY,
            whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{titre}</div>
        </div>
        {points == null
          ? <img src="assets/logo/madeleine-logo-transparent.png" alt="" style={{ flex:'none', width:38, height:38, display:'block', opacity:0.95 }} />
          : <div style={{ flex:'none', width:66, textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
              <div style={{ alignSelf:'stretch', height:38, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:SERIF, fontWeight:600, fontSize:26, lineHeight:1,
                ...CHIFFRES, color:OR3, background:NAVY5, borderRadius:4, marginRight:'-0.12em' }}>{points}</div>
              <div style={{ fontFamily:BODY, fontSize:12, letterSpacing:'0.12em', marginRight:'-0.12em', textTransform:'uppercase', color:NAVY_CLAIR }}>point{points > 1 ? 's' : ''}</div>
            </div>}
      </div>
      <div style={{ height:3, background:OR5 }} />
    </div>
  );
}

/* ————— L'accueil : quatre modules ————— */
function Module({ icone, titre, texte, onClick }){
  const pret = !!onClick;
  const [survol, setSurvol] = useState(false);
  const [appui, setAppui] = useState(false);
  const fond = !pret ? IVORY2 : appui ? '#EFDFB8' : survol ? '#FBF3E2' : '#FFFFFF';
  return (
    <div onClick={onClick}
      onMouseEnter={()=>pret && setSurvol(true)} onMouseLeave={()=>{ setSurvol(false); setAppui(false); }}
      onPointerDown={()=>pret && setAppui(true)} onPointerUp={()=>setAppui(false)} onPointerCancel={()=>setAppui(false)}
      style={{ background: fond, border:'1px solid '+(pret ? (survol || appui ? OR7 : OR3) : LINE), borderRadius:5, transition:'background 120ms ease-out, border-color 120ms ease-out',
      padding:'16px 14px 14px', display:'flex', flexDirection:'column', gap:6, minHeight:148, boxSizing:'border-box', cursor: pret ? 'pointer' : 'default' }}>
      {icone}
      <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:23, lineHeight:1.1, color:NAVY }}>{titre}</div>
      <div style={{ fontFamily:BODY, fontSize:16, lineHeight:1.4, color:NAVY5, textWrap:'pretty' }}>{texte}</div>
      {!pret && <div style={{ marginTop:'auto', alignSelf:'flex-start' }}><Tag>Bientôt</Tag></div>}
    </div>
  );
}

/* Deux cartes à jouer en éventail, à la taille d'une vignette */
function MiniCartes(){
  const carte = (rot, x, fond) => ({
    position:'absolute', left:6 + x, top:2, width:17, height:24, boxSizing:'border-box',
    background:fond, border:'1px solid '+OR5, borderRadius:2, transform:'rotate('+rot+'deg)', transformOrigin:'50% 100%'
  });
  return (
    <div style={{ position:'relative', width:26, height:26 }}>
      <div style={carte(-16, -3, IVORY2)} />
      <div style={{ ...carte(10, 2, '#FFFFFF'), display:'flex', alignItems:'center', justifyContent:'center' }}>
        <span style={{ fontFamily:SERIF, fontSize:11, lineHeight:1, color:OR7 }}>⚜</span>
      </div>
    </div>
  );
}

function Pastille({ enfant, pret = true }){
  return (
    <div style={{ width:26, height:26, border:'1px solid '+(pret ? OR3 : '#CFC0A0'), borderRadius:3, display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily:SERIF, fontSize:17, color:OR7 }}>{enfant}</div>
  );
}

function Accueil({ onExercices, onCartes, onPrononciation }){
  return (
    <div style={{ padding:'14px 18px 26px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
      <Module onClick={onExercices}
        icone={<img src={ICONES + '/madeleine-gold.png'} alt="" style={{ width:26, height:26, display:'block' }} />}
        titre="Tous les exercices" texte="Quizz variés." />
      <Module onClick={onCartes} icone={<MiniCartes />}
        titre="Le jeu des cartes" texte="Apprendre vite et bien." />
      <Module onClick={onPrononciation} icone={<Pastille pret={true} enfant="❦" />}
        titre="La prononciation" texte="A comme avocat…" />
      <Module icone={<Pastille pret={false} enfant="◆" />}
        titre="Le quizz images" texte="Écoutez l'audio de la prof." />
    </div>
  );
}

/* ————— Une ligne de menu ————— */
function Ligne({ vignette, teinte, titre, sous, badge, onClick }){
  const pret = !!onClick;
  const [survol, setSurvol] = useState(false);
  const [appui, setAppui] = useState(false);
  const fond = !pret ? IVORY2 : appui ? '#EFDFB8' : survol ? '#FBF3E2' : '#FFFFFF';
  return (
    <div onClick={onClick}
      onMouseEnter={()=>pret && setSurvol(true)} onMouseLeave={()=>{ setSurvol(false); setAppui(false); }}
      onPointerDown={()=>pret && setAppui(true)} onPointerUp={()=>setAppui(false)} onPointerCancel={()=>setAppui(false)}
      style={{ display:'flex', alignItems:'center', gap:12, background: fond, transition:'background 120ms ease-out, border-color 120ms ease-out',
      border:'1px solid '+(pret ? (survol || appui ? OR7 : OR3) : LINE), borderRadius:5, padding:'12px 14px', cursor: pret ? 'pointer' : 'default' }}>
      <div style={{ flex:'none', width:40, height:40, borderRadius:4, background: teinte[0], border:'1px solid '+teinte[1],
        display:'flex', alignItems:'center', justifyContent:'center', fontFamily:SERIF, fontSize:17, color: pret ? NAVY : '#A79269' }}>{vignette}</div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ display:'flex', alignItems:'baseline', gap:19 }}>
          <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:22, lineHeight:1.1, color: pret ? NAVY : '#6F6647' }}>{titre}</div>
          {badge && <div style={{ flex:'none', fontFamily:BODY, fontSize:12, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:OR7,
            border:'1px solid '+OR3, borderRadius:3, padding:'2px 7px' }}>{badge}</div>}
        </div>
        <div style={{ fontFamily:BODY, fontSize:15, lineHeight:1.3, color: pret ? NAVY5 : '#8A7F60' }}>{sous}</div>
      </div>
      {pret && <div style={{ flex:'none', fontSize:18, color:OR7 }}>›</div>}
    </div>
  );
}

const TEINTES = [['#F2E6DA','#DCC6AE'], ['#E4EAF3','#C2CEE2'], ['#E2EBE4','#BCCFC0'], ['#E7E3F0','#C9C0DE']];
const ORNEMENTS = ['⚜','❦','◆','◈'];
const ETEINT = ['#EDE4D2','#DCCDB2'];

/* ————— Le menu des exercices ————— */
function MenuExercices({ liste, duJour, onOuvrir }){
  const ordre = liste.slice().sort((a,b) => (a.date < b.date ? 1 : -1));
  return (
    <div style={{ padding:'16px 18px 26px', display:'flex', flexDirection:'column', gap:9 }}>
      {ordre.map((e, i) => (
        <Ligne key={e.id} onClick={()=>onOuvrir(e.id)}
          vignette={ORNEMENTS[i % 4]} teinte={TEINTES[i % 4]}
          titre={e.titre} sous={jourMois(e.date) + ' · ' + e.saint}
          badge={e.id === duJour.id ? 'nouveau' : null} />
      ))}
    </div>
  );
}

/* ————— Le menu des paquets ————— */
function MenuPaquets({ onNombres, onPrononciation }){
  return (
    <div style={{ padding:'16px 18px 26px', display:'flex', flexDirection:'column', gap:9 }}>
      <Ligne onClick={onNombres} vignette="❦" teinte={TEINTES[3]} titre="Les nombres" sous="101 cartes" />
      <Ligne onClick={onPrononciation} vignette="◈" teinte={TEINTES[1]} titre="La prononciation" sous="56 cartes" />
    </div>
  );
}

/* ————— Les boutons d'action ————— */
function BoutonJade({ children, onClick, disabled }){
  return (
    <button onClick={onClick} disabled={disabled} style={{ width:'100%', minHeight:52, borderRadius:5, cursor: disabled ? 'default' : 'pointer',
      fontFamily:BODY, fontSize:20, fontWeight:600, background: disabled ? IVORY2 : '#DDE7F3', border:'1px solid '+(disabled ? LINE : '#8AA6C8'),
      color: disabled ? NAVY3 : '#284A76' }}>{children}</button>
  );
}
function BoutonOr({ children, onClick }){
  return (
    <button onClick={onClick} style={{ width:'100%', minHeight:52, borderRadius:5, cursor:'pointer',
      fontFamily:BODY, fontSize:20, fontWeight:600, background:'#F9F1DF', border:'1px solid '+OR3, color:OR7 }}>{children}</button>
  );
}

/* ————— Une question ————— */
function Question({ item, index, total, onSuivant, onMarquer }){
  const [choix, setChoix] = useState(null);
  const [valide, setValide] = useState(false);
  const joue = useRef(false);

  useEffect(() => { setChoix(null); setValide(false); joue.current = false; }, [index]);
  useEffect(() => { if (item.type === 'ecoute' && !joue.current) { joue.current = true; const t = setTimeout(()=>dire(item), 420); return ()=>clearTimeout(t); } }, [index]);

  const juste = choix === item.reponse;

  return (
    <div style={{ padding:'18px 18px 28px', display:'flex', flexDirection:'column', boxSizing:'border-box' }}>
      <div style={{ fontFamily:BODY, fontSize:14, letterSpacing:'0.14em', textTransform:'uppercase', color:OR7, marginBottom:6 }}>
        Question <span style={CHIFFRES}>{index+1}</span> sur <span style={CHIFFRES}>{total}</span>
      </div>

      {item.type === 'ecoute' && (
        <div style={{ textAlign:'center', margin:'10px 0 18px' }}>
          <button onClick={()=>dire(item)} style={{ width:78, height:78, borderRadius:78, border:'1px solid '+OR3, background:OR1, cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke={NAVY} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 11.5h4L15.5 7v16L10 18.5H6z" fill={NAVY} stroke="none" />
              <path d="M19.5 11a5 5 0 0 1 0 8" /><path d="M22.8 8a9 9 0 0 1 0 14" />
            </svg>
          </button>
          <div style={{ fontFamily:BODY, fontSize:14, color:NAVY3, marginTop:8 }}>Touchez pour réécouter</div>
        </div>
      )}

      {item.image && (
        <div style={{ display:'flex', justifyContent:'center', marginBottom:18 }}>
          <img src={item.image} alt="" style={{ width:190, height:190, objectFit:'cover', borderRadius:14, border:'1px solid '+LINE }} />
        </div>
      )}

      <div style={{ fontFamily:SERIF, fontSize:26, lineHeight:1.25, color:NAVY, marginBottom:20, textWrap:'pretty', whiteSpace:'pre-line' }}>{replique(item.enonce)}</div>

      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {(item.options || []).map((o,i) => {
          const sel = choix === i;
          const bon = valide && i === item.reponse;
          const faux = valide && sel && i !== item.reponse;
          return (
            <button key={i} disabled={valide} onClick={()=>setChoix(i)} style={{
              textAlign:'left', padding:'13px 16px', minHeight:52, borderRadius:5, cursor: valide?'default':'pointer',
              display:'flex', alignItems:'center', justifyContent:'space-between', gap:10,
              fontFamily:BODY, fontSize:19, fontWeight: bon ? 600 : 400, color: bon ? VERT_T : faux ? '#5A2020' : NAVY,
              border:'1px solid '+(bon ? VERT_L : faux ? '#B96A6A' : sel ? OR5 : LINE),
              background: bon ? VERT_F : faux ? '#F8EDEA' : sel ? OR1 : '#FFFFFF'
            }}>
              <span>{o}</span>
              {bon && sel && <span style={{ fontFamily:SERIF, fontSize:22, color:VERT_T, whiteSpace:'nowrap' }}>+1 point</span>}
            </button>
          );
        })}
      </div>

      <div style={{ marginTop:16 }}>
        {!valide
          ? <BoutonJade disabled={choix === null} onClick={()=>{ setValide(true); onMarquer(choix === item.reponse); }}>vérifier</BoutonJade>
          : <BoutonJade onClick={onSuivant}>{index+1 === total ? 'voir les points' : 'suite →'}</BoutonJade>}
      </div>

      {valide && item.note && (CLUB
        ? <div style={{ marginTop:14, display:'flex', gap:9 }}>
            <span style={{ flex:'none', color:OR3, fontSize:12, lineHeight:1.5 }}>⚜</span>
            <div style={{ flex:1 }}>
              <span style={{ fontFamily:BODY, fontSize:12, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:OR7, marginRight:7 }}>Le mot du prof</span>
              <span style={{ fontFamily:BODY, fontSize:15, lineHeight:1.5, color:NAVY5, textWrap:'pretty' }}>{item.note}</span>
            </div>
          </div>
        : <a href={SITE_CLUB} style={{ marginTop:22, display:'flex', gap:10, textDecoration:'none',
            alignItems:'baseline', justifyContent:'center', textAlign:'center' }}>
            <span style={{ flex:'none', color:OR3, fontSize:11 }}>⚜</span>
            <span style={{ fontFamily:BODY, fontStyle:'italic', fontSize:15, lineHeight:1.5, color:NAVY5, textWrap:'balance' }}>
              Le mot du prof est réservé aux membres du Club.
            </span>
            <span style={{ flex:'none', color:OR3, fontSize:11 }}>⚜</span>
          </a>)}
    </div>
  );
}

/* ————— La fin d'une séance ————— */
function Fin({ ex, score, onRecommencer, onSortir }){
  const total = ex.items.length;
  return (
    <div style={{ padding:'26px 18px 28px' }}>
      <div style={{ textAlign:'center', marginBottom:24 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, marginBottom:14 }}>
          <span style={{ width:30, height:1, background:OR5 }} /><span style={{ color:OR5, fontSize:16 }}>❦</span><span style={{ width:30, height:1, background:OR5 }} />
        </div>
        <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:56, lineHeight:1, ...CHIFFRES, color:OR7 }}>{score}</div>
        <div style={{ fontFamily:BODY, fontSize:14, letterSpacing:'0.12em', textTransform:'uppercase', color:NAVY3, marginTop:8 }}>
          point{score > 1 ? 's' : ''} sur <span style={CHIFFRES}>{total}</span>
        </div>
        <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:21, color:NAVY, marginTop:14 }}>
          {score === total ? 'Sans une faute' : score >= total - 2 ? 'Très bien' : 'Le chemin se fait en marchant'}
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        <BoutonOr onClick={onRecommencer}>recommencer</BoutonOr>
        <BoutonJade onClick={onSortir}>les autres billets</BoutonJade>
      </div>
      <div style={{ fontFamily:BODY, fontStyle:'italic', fontSize:16, color:NAVY3, textAlign:'center', marginTop:18 }}>
        Les points d'une séance ne sont pas gardés.
      </div>
    </div>
  );
}

/* ————— La coquille ————— */
function App(){
  const liste = window.MPM_EXERCICES;
  const duJour = (() => {
    const auj = new Date().toISOString().slice(0,10);
    const exact = liste.find(e => e.date === auj);
    if (exact) return exact;
    const passes = liste.filter(e => e.date <= auj);
    return passes.length ? passes[passes.length-1] : liste[liste.length-1];
  })();
  const [ecran, setEcran] = useState('accueil');
  const [session, setSession] = useState(null);
  const [fin, setFin] = useState(null);

  useEffect(()=>{ try { speechSynthesis.getVoices(); } catch(e){} }, []);

  const ouvrir = id => {
    const e = liste.find(x=>x.id===id);
    setSession({ id, titre:e.titre, notice:notice(e.saint, e.date), items:e.items, i:0, score:0 });
    setFin(null);
  };
  const sortir = () => { setSession(null); setFin(null); setEcran('accueil'); };

  const marquer = juste => { if (juste) setSession(s => ({ ...s, score: s.score + 1 })); };
  const suivant = () => {
    if (session.i + 1 >= session.items.length){
      setFin({ id: session.id, score: session.score });
      setSession(null);
    } else setSession(s => ({ ...s, i: s.i+1 }));
  };

  let bandeau, corps;
  if (session){
    bandeau = <Bandeau notice={session.notice} titre={session.titre} points={session.score} onSortir={sortir} />;
    corps = <Question key={session.i} item={session.items[session.i]} index={session.i} total={session.items.length} onSuivant={suivant} onMarquer={marquer} />;
  } else if (fin){
    const e = liste.find(x=>x.id===fin.id);
    bandeau = <Bandeau notice="La séance est finie" titre={e.titre} points={fin.score} onSortir={sortir} />;
    corps = <Fin ex={e} score={fin.score} onRecommencer={()=>ouvrir(e.id)} onSortir={()=>{ setFin(null); setEcran('exercices'); }} />;
  } else if (ecran === 'exercices'){
    bandeau = <Bandeau notice="Tous les exercices" titre="Les billets" onSortir={sortir} />;
    corps = <MenuExercices liste={liste} duJour={duJour} onOuvrir={ouvrir} />;
  } else if (ecran === 'paquets'){
    bandeau = <Bandeau notice="Le jeu des cartes" titre="Les paquets" onSortir={sortir} />;
    corps = <MenuPaquets onNombres={()=>setEcran('nombres')} onPrononciation={()=>setEcran('prononciation')} />;
  } else if (ecran === 'nombres'){
    bandeau = <Bandeau notice="De zéro à cent" titre="Les nombres" onSortir={()=>setEcran('paquets')} />;
    corps = <window.Cartes />;
  } else if (ecran === 'prononciation'){
    bandeau = <Bandeau notice="Lettres et graphies" titre="La prononciation" onSortir={sortir} />;
    corps = <window.Prononciation />;
  } else {
    bandeau = <BandeauAccueil onQuitter={()=>{ location.href = 'https://mapetitemadeleine.org/'; }} />;
    corps = <Accueil onExercices={()=>setEcran('exercices')} onCartes={()=>setEcran('paquets')}
      onPrononciation={()=>setEcran('prononciation')} />;
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', background:IVORY, fontFamily:BODY }}>
      {bandeau}
      <div style={{ flex:1, minHeight:0, overflowY:'auto', overflowX:'hidden', background:IVORY,
        WebkitOverflowScrolling:'touch', touchAction:'pan-y', overscrollBehavior:'contain' }}>{corps}</div>
      <div style={{ height:20, background:IVORY, flex:'none' }} />
    </div>
  );
}

Object.assign(window, { App });
