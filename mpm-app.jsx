const { useState, useEffect, useRef } = React;
const DS = window.MaPetiteMadeleineDesignSystem_e1b54a || {};
const { DifficultyRating, Button: DSButton, Divider, Tag } = DS;
const ICONES = 'assets/icons';

const IVORY = '#FBF6EC', IVORY2 = '#F4EBD8', LINE = '#E6D9BC', NAVY = '#1C2B4F', NAVY5 = '#38507C', NAVY3 = '#7C8CAE', OR7 = '#8F6518', OR5 = '#B8862B', OR3 = '#D9AE5C', OR1 = '#F3E4C0';
const SERIF = "'Cormorant Garamond', Georgia, serif", BODY = "'EB Garamond', Georgia, serif";
const MOIS = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const JOURS = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];

const store = {
  get(){ try { return JSON.parse(localStorage.getItem('mpm_app_v1')) || {}; } catch(e){ return {}; } },
  set(v){ try { localStorage.setItem('mpm_app_v1', JSON.stringify(v)); } catch(e){} }
};

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
const norm = s => (s||'').toLowerCase().trim().replace(/[.!?;:,]/g,'').replace(/\s+/g,' ');

function Fleur({ size = 14, color = OR5, style }){
  return <span style={{ fontFamily: SERIF, fontSize: size, color, lineHeight: 1, ...style }}>⚜</span>;
}

function Filet({ w = 40 }){
  return <span style={{ display:'inline-block', width:w, height:1, background:OR3 }} />;
}

function Bouton({ children, onClick, variante = 'plein', disabled }){
  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:52 }}>
      <DSButton variant={variante === 'plein' ? 'primary' : 'secondary'} size="lg" disabled={disabled} onClick={onClick}>{children}</DSButton>
    </div>
  );
}

function EnTete({ titre, sous, gauche, onGauche, logo }){
  return (
    <div style={{ padding: logo ? '46px 18px 12px' : '54px 18px 14px', background:IVORY, borderBottom:'1px solid '+LINE, position:'relative', flex:'none' }}>
      {gauche && <button onClick={onGauche} style={{ position:'absolute', left:12, top:52, border:'none', background:'none', color:OR7, fontFamily:BODY, fontSize:16, cursor:'pointer', padding:6, whiteSpace:'nowrap', zIndex:2 }}>‹ {gauche}</button>}
      <div style={{ textAlign:'center', padding: gauche ? '4px 74px 0' : 0 }}>
        {logo && <img src="assets/logo/madeleine-logo-transparent.png" alt="" style={{ width:44, height:44, display:'block', margin:'0 auto 4px' }} />}
        <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:22, color:NAVY, lineHeight:1.1 }}>{titre}</div>
        {sous && <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginTop:5 }}>
          <Filet w={18} /><span style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:15, color:OR7 }}>{sous}</span><Filet w={18} />
        </div>}
      </div>
    </div>
  );
}

function Serie({ jours }){
  const cases = [0,1,2,3,4,5,6];
  return (
    <div style={{ display:'flex', gap:7, justifyContent:'center' }}>
      {cases.map(i => (
        <div key={i} style={{ width:30, height:34, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center',
          border:'1px solid '+(i < jours ? OR3 : '#E4DAC6'), background: i < jours ? OR1 : '#FFFFFF' }}>
          <Fleur size={15} color={i < jours ? OR7 : '#DCD2BE'} />
        </div>
      ))}
    </div>
  );
}

function Niveau({ n, size = 19 }){
  return <DifficultyRating level={n} size={size} assetBase={ICONES} />;
}

/* ————— Accueil ————— */
function Accueil({ ex, etat, onCommencer, onHasard, faitAujourdhui }){
  const d = new Date(ex.date + 'T08:00:00');
  return (
    <div style={{ padding:'20px 18px 26px' }}>
      <div style={{ textAlign:'center', marginBottom:18 }}>
        <div style={{ fontFamily:BODY, fontSize:12, letterSpacing:'0.16em', textTransform:'uppercase', color:OR7 }}>
          {JOURS[d.getDay()]} {d.getDate()===1?'1er':d.getDate()} {MOIS[d.getMonth()]}
        </div>
        <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:17, color:NAVY5, marginTop:4 }}>{ex.saint}</div>
      </div>

      <div style={{ background:'#FFFFFF', border:'1px solid '+LINE, borderRadius:16, overflow:'hidden', boxShadow:'0 8px 22px rgba(28,43,79,0.07)' }}>
        <div style={{ background:'#F8E2BE', padding:'22px 20px 20px', textAlign:'center' }}>
          <div style={{ fontFamily:BODY, fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:OR7, marginBottom:9 }}>L'exercice du jour</div>
          <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:29, color:NAVY, lineHeight:1.12 }}>{ex.titre}</div>
        <div style={{ marginTop:12, display:'flex', justifyContent:'center' }}><Niveau n={ex.niveau} size={22} /></div>
        </div>
        <div style={{ padding:'18px 20px 20px' }}>
          <p style={{ fontFamily:BODY, fontSize:17, lineHeight:1.55, color:NAVY, margin:'0 0 16px', textWrap:'pretty' }}>{ex.accroche}</p>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontFamily:BODY, fontSize:14, color:NAVY3, marginBottom:18 }}>
            <span>{ex.items.length} questions</span><span>·</span><span>{ex.theme}</span><span>·</span><span>5 minutes</span>
          </div>
          <Bouton onClick={onCommencer}>{faitAujourdhui ? 'Recommencer' : 'Commencer'}</Bouton>
          <div style={{ display:'flex', flexDirection:'column', marginTop:9 }}>
            <DSButton variant="ghost" size="md" onClick={onHasard}>Un exercice au hasard</DSButton>
          </div>
        </div>
      </div>

      <div style={{ marginTop:24, background:'#FFFFFF', border:'1px solid '+LINE, borderRadius:16, padding:'18px 18px 20px', textAlign:'center' }}>
        <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:19, color:NAVY, marginBottom:14 }}>
          {etat.serie > 0 ? `${etat.serie} jour${etat.serie>1?'s':''} de suite` : 'Commencez votre série'}
        </div>
        <Serie jours={etat.serie} />
        <div style={{ fontFamily:BODY, fontSize:14, color:NAVY3, marginTop:14 }}>Une madeleine par jour, avec le café.</div>
      </div>
    </div>
  );
}

/* ————— Exercice ————— */
function Question({ item, index, total, onSuivant }){
  const [choix, setChoix] = useState(null);
  const [saisie, setSaisie] = useState('');
  const [valide, setValide] = useState(false);
  const aOptions = !!item.options;
  const joue = useRef(false);

  useEffect(() => { setChoix(null); setSaisie(''); setValide(false); joue.current = false; }, [index]);
  useEffect(() => { if (item.type === 'ecoute' && !joue.current) { joue.current = true; const t = setTimeout(()=>dire(item), 420); return ()=>clearTimeout(t); } }, [index]);

  const juste = aOptions ? choix === item.reponse : item.reponse.some(r => norm(r) === norm(saisie));
  const pret = aOptions ? choix !== null : saisie.trim().length > 0;

  return (
    <div style={{ padding:'16px 18px 28px', display:'flex', flexDirection:'column', boxSizing:'border-box' }}>
      <div style={{ display:'flex', gap:5, marginBottom:20 }}>
        {Array.from({length:total}).map((_,i)=>(
          <div key={i} style={{ flex:1, height:3, borderRadius:3, background: i<index ? OR5 : i===index ? NAVY3 : '#E4DAC6' }} />
        ))}
      </div>

      {item.type === 'ecoute' && (
        <div style={{ textAlign:'center', marginBottom:20 }}>
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

      <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:26, lineHeight:1.3, color:NAVY, textAlign:'center', marginBottom:22, textWrap:'pretty' }}>{item.enonce}</div>

      {aOptions ? (
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {item.options.map((o,i) => {
            const sel = choix === i;
            const bon = valide && i === item.reponse;
            const faux = valide && sel && i !== item.reponse;
            return (
              <button key={i} disabled={valide} onClick={()=>setChoix(i)} style={{
                textAlign:'left', padding:'15px 18px', borderRadius:13, cursor: valide?'default':'pointer',
                fontFamily:BODY, fontSize:19, color: bon ? '#1E5B3A' : faux ? '#8C2F2F' : NAVY,
                border:'1.5px solid '+(bon ? '#3E8B62' : faux ? '#B96A6A' : sel ? OR5 : LINE),
                background: bon ? '#EAF3ED' : faux ? '#F8EDEA' : sel ? OR1 : '#FFFFFF'
              }}>{o}</button>
            );
          })}
        </div>
      ) : (
        <input value={saisie} disabled={valide} onChange={e=>setSaisie(e.target.value)}
          onKeyDown={e=>{ if(e.key==='Enter' && pret && !valide) setValide(true); }}
          placeholder="Votre réponse" autoComplete="off" autoCapitalize="off" spellCheck="false"
          style={{ width:'100%', boxSizing:'border-box', padding:'15px 18px', borderRadius:13, fontFamily:BODY, fontSize:20,
            color: valide ? (juste ? '#1E5B3A' : '#8C2F2F') : NAVY, textAlign:'center',
            border:'1.5px solid '+(valide ? (juste ? '#3E8B62' : '#B96A6A') : OR3), background: valide ? (juste ? '#EAF3ED' : '#F8EDEA') : '#FFFFFF', outline:'none' }} />
      )}

      <div style={{ marginTop:16 }}>
        <Bouton disabled={!pret} onClick={()=>{ if(!valide) setValide(true); else onSuivant(juste); }}>
          {valide ? (index+1 === total ? 'Voir le résultat' : 'Question suivante') : 'Vérifier'}
        </Bouton>
      </div>

      {valide && (
        <div style={{ marginTop:16, background:'#EAEFF6', border:'1px solid #C9D6E8', borderRadius:12, padding:'15px 17px' }}>
          <div style={{ fontFamily:BODY, fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', color:OR7, marginBottom:6 }}>
            {juste ? 'C\u2019est juste' : 'La réponse'}
          </div>
          {!juste && <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:22, color:NAVY, marginBottom:6 }}>{aOptions ? item.options[item.reponse] : item.reponse[0]}</div>}
          <div style={{ fontFamily:BODY, fontSize:17, lineHeight:1.5, color:NAVY, textWrap:'pretty' }}>{item.note}</div>
        </div>
      )}

    </div>
  );
}

/* ————— Fin ————— */
function Fin({ ex, score, serie, onRejouer, onArchive }){
  const total = ex.items.length;
  return (
    <div style={{ padding:'24px 18px 28px' }}>
      <div style={{ textAlign:'center', marginBottom:22 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, color:OR5, marginBottom:8 }}><Divider /></div>
        <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:34, color:NAVY, lineHeight:1.1 }}>{score} sur {total}</div>
        <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:19, color:OR7, marginTop:6 }}>
          {score === total ? 'Sans une faute' : score >= total-2 ? 'Très bien' : 'Le chemin se fait en marchant'}
        </div>
      </div>

      <div style={{ background:'#FFFFFF', border:'1px solid '+LINE, borderRadius:16, padding:'18px 18px 20px', textAlign:'center', marginBottom:18 }}>
        <div style={{ fontFamily:BODY, fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', color:OR7, marginBottom:14 }}>Votre série</div>
        <Serie jours={serie} />
        <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:18, color:NAVY, marginTop:14 }}>{serie} jour{serie>1?'s':''} de suite</div>
      </div>

      <div style={{ background:'#EAEFF6', border:'1px solid #C9D6E8', borderRadius:16, padding:'20px 20px 22px', textAlign:'center', marginBottom:20 }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:10, color:OR7, marginBottom:10 }}>
          <Filet w={22} /><span style={{ fontFamily:BODY, fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase' }}>Le saint du jour</span><Filet w={22} />
        </div>
        <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:24, color:NAVY, marginBottom:10 }}>{ex.saint}</div>
        <p style={{ fontFamily:BODY, fontSize:16, lineHeight:1.55, color:NAVY, margin:0, textAlign:'justify', textWrap:'pretty' }}>{ex.histoire}</p>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        <Bouton onClick={onArchive}>Voir mon carnet</Bouton>
        <Bouton variante="ligne" onClick={onRejouer}>Refaire l'exercice</Bouton>
      </div>
    </div>
  );
}

function FinCarnet({ score, total, restant, onRetour }){
  return (
    <div style={{ padding:'30px 20px 28px', textAlign:'center' }}>
      <Divider />
      <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:34, color:NAVY, lineHeight:1.1, marginTop:10 }}>{score} sur {total}</div>
      <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:19, color:OR7, marginTop:6, marginBottom:22 }}>
        {score === total ? 'Le carnet s\u2019allège' : 'On y revient demain'}
      </div>
      <div style={{ background:'#FFFFFF', border:'1px solid '+LINE, borderRadius:16, padding:'20px 18px 22px', marginBottom:20 }}>
        <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:30, color:NAVY }}>{restant}</div>
        <div style={{ fontFamily:BODY, fontSize:16, color:NAVY5, marginTop:4 }}>{restant > 1 ? 'questions restent au carnet' : restant === 1 ? 'question reste au carnet' : 'carnet vide, tout est acquis'}</div>
      </div>
      <Bouton onClick={onRetour}>Retour au carnet</Bouton>
    </div>
  );
}

/* ————— Mon carnet ————— */
function Carnet({ carnet, onReviser, onAujourdhui }){
  const n = Math.min(carnet.length, 8);
  if (!carnet.length) return (
    <div style={{ padding:'40px 26px', textAlign:'center' }}>
      <Fleur size={26} color={OR3} />
      <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:25, color:NAVY, margin:'14px 0 8px', lineHeight:1.2 }}>Votre carnet est vide</div>
      <p style={{ fontFamily:BODY, fontSize:17, lineHeight:1.55, color:NAVY5, margin:'0 0 24px', textWrap:'pretty' }}>
        Chaque réponse manquée vient s'inscrire ici, avec sa règle. Vous les reverrez plus tard, jusqu'à ce qu'elles soient acquises.
      </p>
      <Bouton onClick={onAujourdhui}>Commencer</Bouton>
    </div>
  );
  return (
    <div style={{ padding:'16px 18px 26px' }}>
      <div style={{ background:NAVY, borderRadius:16, padding:'18px 18px 20px', textAlign:'center', marginBottom:18 }}>
        <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:34, color:OR3, lineHeight:1 }}>{carnet.length}</div>
        <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:18, color:IVORY, margin:'4px 0 16px' }}>à revoir</div>
        <div style={{ display:'flex', flexDirection:'column' }}>
          <DSButton variant="gold" size="lg" onClick={onReviser}>{`Réviser ${n} question${n > 1 ? 's' : ''}`}</DSButton>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:11 }}>
        {carnet.map(c => (
          <div key={c.cle} style={{ background:'#FFFFFF', border:'1px solid '+LINE, borderRadius:14, padding:'14px 16px 15px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:10, marginBottom:8 }}>
              <Tag tone="navy">{c.theme}</Tag>
              <span style={{ fontFamily:BODY, fontSize:13, color:NAVY3 }}>{'⚜ '.repeat(Math.min(3, c.fois || 1)).trim()}</span>
            </div>
            <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:20, color:NAVY, lineHeight:1.3, marginBottom:6, textWrap:'pretty' }}>{c.item.enonce}</div>
            <div style={{ fontFamily:BODY, fontSize:16, color:OR7, fontWeight:600, marginBottom:4 }}>
              {c.item.options ? c.item.options[c.item.reponse] : c.item.reponse[0]}
            </div>
            <div style={{ fontFamily:BODY, fontSize:16, lineHeight:1.5, color:NAVY5, textWrap:'pretty' }}>{c.item.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ————— Coquille ————— */
function Onglets({ actif, onChange }){
  const items = [
    { id:'accueil', label:'Aujourd\u2019hui' },
    { id:'carnet', label:'Mon carnet' },
    { id:'progres', label:'Ma série' }
  ];
  return (
    <div style={{ display:'flex', borderTop:'1px solid '+LINE, background:IVORY, paddingBottom:20, flex:'none' }}>
      {items.map(t => (
        <button key={t.id} onClick={()=>onChange(t.id)} style={{ flex:1, minHeight:56, border:'none', background:'none', cursor:'pointer',
          fontFamily:BODY, fontSize:16, color: actif===t.id ? OR7 : NAVY3, fontWeight: actif===t.id?600:500,
          borderTop:'2px solid '+(actif===t.id?OR5:'transparent'), marginTop:-1, paddingBottom:2 }}>{t.label}</button>
      ))}
    </div>
  );
}

function Progres({ etat, liste }){
  const faits = Object.keys(etat.scores||{}).length;
  const totalJustes = Object.entries(etat.scores||{}).reduce((a,[k,v])=>a+v,0);
  const totalQ = Object.keys(etat.scores||{}).reduce((a,k)=>{ const e = liste.find(x=>x.id===k); return a + (e?e.items.length:0); },0);
  return (
    <div style={{ padding:'22px 18px 26px' }}>
      <div style={{ background:'#FFFFFF', border:'1px solid '+LINE, borderRadius:16, padding:'22px 18px 24px', textAlign:'center', marginBottom:18 }}>
        <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:40, color:NAVY, lineHeight:1 }}>{etat.serie}</div>
        <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:18, color:OR7, margin:'6px 0 16px' }}>jour{etat.serie>1?'s':''} de suite</div>
        <Serie jours={etat.serie} />
      </div>
      <div style={{ display:'flex', gap:11, marginBottom:18 }}>
        {[['Exercices faits', faits], ['Bonnes réponses', totalQ ? totalJustes+'/'+totalQ : '—']].map(([l,v])=>(
          <div key={l} style={{ flex:1, background:'#FFFFFF', border:'1px solid '+LINE, borderRadius:14, padding:'16px 12px', textAlign:'center' }}>
            <div style={{ fontFamily:SERIF, fontWeight:600, fontSize:27, color:NAVY }}>{v}</div>
            <div style={{ fontFamily:BODY, fontSize:13, color:NAVY3, marginTop:3 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ background:NAVY, borderRadius:16, padding:'22px 20px 24px', textAlign:'center' }}>
        <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:22, color:OR3, marginBottom:8 }}>La lettre du matin</div>
        <p style={{ fontFamily:BODY, fontSize:16, lineHeight:1.6, color:IVORY, margin:'0 0 18px' }}>Recevez chaque jour l'exercice et son corrigé par courrier, avec l'histoire du saint.</p>
        <a href="https://mapetitemadeleine.substack.com" target="_blank" rel="noopener" style={{ display:'block', textDecoration:'none', minHeight:50, lineHeight:'50px', borderRadius:13, background:OR3, color:NAVY, fontFamily:BODY, fontSize:18, fontWeight:600 }}>S'abonner</a>
      </div>
    </div>
  );
}

function App(){
  const liste = window.MPM_EXERCICES;
  const duJour = (() => {
    const auj = new Date().toISOString().slice(0,10);
    const exact = liste.find(e => e.date === auj);
    if (exact) return exact;
    const passes = liste.filter(e => e.date <= auj);
    return passes.length ? passes[passes.length-1] : liste[liste.length-1];
  })();
  const [etat, setEtat] = useState(() => ({ serie: 3, scores: {}, carnet: [], ...store.get() }));
  const [onglet, setOnglet] = useState('accueil');
  const [session, setSession] = useState(null);
  const [fin, setFin] = useState(null);
  const carnet = etat.carnet || [];

  useEffect(()=>{ store.set(etat); }, [etat]);
  useEffect(()=>{ try { speechSynthesis.getVoices(); } catch(e){} }, []);

  const ouvrir = id => {
    const e = liste.find(x=>x.id===id);
    setSession({ source:'ex', id, titre:e.titre, items:e.items, cles:e.items.map((_,i)=>id+'#'+i), i:0, score:0 });
    setFin(null);
  };
  const reviser = () => {
    const lot = carnet.slice(0, 8);
    setSession({ source:'carnet', titre:'Mon carnet', items:lot.map(c=>c.item), cles:lot.map(c=>c.cle), i:0, score:0 });
    setFin(null);
  };

  const suivant = juste => {
    const cle = session.cles[session.i];
    const item = session.items[session.i];
    const exo = session.source === 'ex' ? liste.find(x=>x.id===session.id) : null;
    setEtat(s => {
      let c = (s.carnet || []).slice();
      const pos = c.findIndex(x=>x.cle===cle);
      if (juste){ if (pos > -1) c.splice(pos, 1); }
      else if (pos > -1) c[pos] = { ...c[pos], fois: (c[pos].fois||1)+1 };
      else c.push({ cle, item, theme: item.sujet || (exo ? exo.theme : 'Révision'), fois: 1 });
      return { ...s, carnet: c };
    });
    const score = session.score + (juste?1:0);
    if (session.i + 1 >= session.items.length){
      if (session.source === 'ex'){
        setEtat(s => ({ ...s, serie: Math.min(7, (s.serie||0) + (s.scores[session.id]==null ? 1 : 0)), scores: { ...s.scores, [session.id]: score } }));
      }
      setFin({ source: session.source, id: session.id, titre: session.titre, total: session.items.length, score });
      setSession(null);
    } else setSession(s => ({ ...s, i: s.i+1, score }));
  };

  let corps, entete;
  if (session){
    entete = <EnTete titre={session.titre} sous={`${session.i+1} sur ${session.items.length}`} gauche="Quitter" onGauche={()=>setSession(null)} />;
    corps = <Question key={session.i} item={session.items[session.i]} index={session.i} total={session.items.length} onSuivant={suivant} />;
  } else if (fin && fin.source === 'ex'){
    const e = liste.find(x=>x.id===fin.id);
    entete = <EnTete titre="Le corrigé" sous={e.titre} />;
    corps = <Fin ex={e} score={fin.score} serie={etat.serie} onRejouer={()=>ouvrir(e.id)} onArchive={()=>{ setFin(null); setOnglet('carnet'); }} />;
  } else if (fin){
    entete = <EnTete titre="Mon carnet" sous="révision" />;
    corps = <FinCarnet score={fin.score} total={fin.total} restant={carnet.length} onRetour={()=>{ setFin(null); setOnglet('carnet'); }} />;
  } else if (onglet === 'carnet'){
    entete = <EnTete titre="Mon carnet" sous="ce qui vous résiste" />;
    corps = <Carnet carnet={carnet} onReviser={reviser} onAujourdhui={()=>setOnglet('accueil')} />;
  } else if (onglet === 'progres'){
    entete = <EnTete titre="Ma série" sous="pas à pas" />;
    corps = <Progres etat={etat} liste={liste} />;
  } else {
    entete = <EnTete titre="Ma petite madeleine" sous="French Class" logo />;
    corps = <Accueil ex={duJour} etat={etat} faitAujourdhui={etat.scores[duJour.id]!=null} onCommencer={()=>ouvrir(duJour.id)} onHasard={()=>{ const autres = liste.filter(e=>e.id!==duJour.id); ouvrir(autres[Math.floor(Math.random()*autres.length)].id); }} />;
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', background:IVORY, fontFamily:BODY }}>
      {entete}
      <div style={{ flex:1, overflowY:'auto', overflowX:'hidden', background:IVORY, WebkitOverflowScrolling:'touch' }}>{corps}</div>
      {(session || fin) && <div style={{ height:20, background:IVORY, flex:'none' }} />}
      {!session && !fin && <Onglets actif={onglet} onChange={setOnglet} />}
    </div>
  );
}

Object.assign(window, { App });
