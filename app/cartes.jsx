/* Ma petite madeleine — Les cartes des nombres.
   Chargé avant app/mpm-app.jsx, expose window.Cartes.
   Tout est dans une IIFE : les deux scripts babel partagent la portée globale,
   donc les constantes de mpm-app.jsx (IVORY, NAVY, SERIF…) ne doivent pas
   être redéclarées ici. */
(function () {
  const { useState, useEffect, useRef, useCallback } = React;

  const C = {
    ivoire: '#FBF6EC', ivoire2: '#F4EBD8', ligne: '#E6D9BC',
    navy: '#1C2B4F', navy3: '#7C8CAE', or7: '#8F6518', or5: '#B8862B', or1: '#F3E4C0'
  };
  const SERIF = "'Cormorant Garamond', Georgia, serif";
  const BODY = "'EB Garamond', Georgia, serif";

  const UNITS = ['zéro','un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf'];
  const TENS = { 20:'vingt', 30:'trente', 40:'quarante', 50:'cinquante', 60:'soixante' };

  function ecrire(n) {
    if (n < 20) return UNITS[n];
    if (n === 100) return 'cent';
    if (n < 70) {
      const t = Math.floor(n / 10) * 10, r = n % 10;
      if (r === 0) return TENS[t];
      if (r === 1) return TENS[t] + ' et un';
      return TENS[t] + '-' + UNITS[r];
    }
    if (n < 80) return (n - 60 === 11) ? 'soixante et onze' : 'soixante-' + UNITS[n - 60];
    if (n === 80) return 'quatre-vingts';
    return 'quatre-vingt-' + UNITS[n - 80];
  }

  /* Une couleur par FAMILLE de construction, pas par dizaine : soixante et
     soixante-dix sont la même famille, quatre-vingts et quatre-vingt-dix aussi.
     La couleur enseigne la mécanique au lieu de la décorer. */
  function famille(n) {
    if (n < 20) return '#E7ECDF';
    if (n < 30) return '#F3E4C0';
    if (n < 40) return '#DCE2ED';
    if (n < 50) return '#F1DEDC';
    if (n < 60) return 'oklch(0.932 0.028 300)';
    if (n < 70) return 'oklch(0.935 0.042 92)';
    if (n < 80) return 'oklch(0.930 0.035 175)';
    if (n < 90) return 'oklch(0.930 0.042 55)';
    if (n < 100) return 'oklch(0.928 0.038 350)';
    return '#F4EBD8';
  }
  function filet(n) {
    if (n < 20) return 'oklch(0.815 0.048 145)';
    if (n < 30) return 'oklch(0.825 0.075 85)';
    if (n < 40) return 'oklch(0.785 0.055 258)';
    if (n < 50) return 'oklch(0.830 0.062 18)';
    if (n < 60) return 'oklch(0.805 0.060 300)';
    if (n < 70) return 'oklch(0.810 0.080 92)';
    if (n < 80) return 'oklch(0.805 0.060 175)';
    if (n < 90) return 'oklch(0.815 0.075 55)';
    if (n < 100) return 'oklch(0.810 0.065 350)';
    return 'oklch(0.845 0.050 78)';
  }

  /* Cormorant dessine le « 1 » sans drapeau : il se lit comme un i. On
     n'emprunte que ce glyphe à EB Garamond, ramené à la hauteur d'x des
     chiffres elzéviriens, approches rééquilibrées à la main. */
  function glyphes(s) {
    return String(s).split('').map((c, i) => c === '1'
      ? <span key={i} style={{ fontFamily: BODY, fontWeight: 500, fontSize: '0.7em', margin: '0 0.05em 0 0.025em' }}>1</span>
      : <span key={i} style={{ fontFamily: SERIF, fontWeight: 600 }}>{c}</span>);
  }

  function contour(couleur) {
    const r = 2;
    return [[r,0],[-r,0],[0,r],[0,-r],[r,r],[r,-r],[-r,r],[-r,-r]]
      .map(([x, y]) => x + 'px ' + y + 'px 0 ' + couleur).join(', ');
  }

  /* La piste enregistrée d'abord ; à défaut, la voix de synthèse, pour que le
     paquet soit jouable avant que les 101 pistes soient toutes gravées. */
  let encours = null;
  function dis(n, mot) {
    try { speechSynthesis.cancel(); } catch (e) {}
    if (encours) { encours.pause(); encours = null; }
    const secours = () => {
      try {
        const u = new SpeechSynthesisUtterance(mot);
        u.lang = 'fr-FR'; u.rate = 0.85;
        const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.indexOf('fr') === 0);
        if (v) u.voice = v;
        speechSynthesis.speak(u);
      } catch (e) {}
    };
    const essai = pistes => {
      if (!pistes.length) return secours();
      try {
        const a = new Audio(pistes[0]);
        encours = a;
        a.onerror = () => { if (encours === a) { encours = null; essai(pistes.slice(1)); } };
        const p = a.play();
        if (p && p.catch) p.catch(() => { if (encours === a) { encours = null; essai(pistes.slice(1)); } });
      } catch (e) { secours(); }
    };
    /* Deux emplacements possibles : GitHub aplatit parfois le dossier au dépôt. */
    essai(['audio/nombres/' + n + '.wav', 'audio/' + n + '.wav',
           'audio/nombres/' + n + '.mp3', 'audio/' + n + '.mp3']);
  }

  function Medaillon({ couleur }) {
    return (
      <div style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid ' + couleur, display: 'grid', placeItems: 'center' }}>
        <img src="assets/icons/madeleine-gold.png" alt="" width="12" height="15" style={{ display: 'block', opacity: 0.7 }} />
      </div>
    );
  }

  function Pastille({ cote, signe, fond, encre, opacite }) {
    return (
      <div style={{
        position: 'absolute', top: 34, [cote]: 18, width: 72, height: 72, borderRadius: '50%',
        background: fond, color: encre, display: 'grid', placeItems: 'center',
        fontFamily: SERIF, fontWeight: 300, fontSize: 44, lineHeight: 1, opacity: opacite, pointerEvents: 'none'
      }}>{signe}</div>
    );
  }

  function Pilule({ actif, onClick, children }) {
    return (
      <button type="button" onClick={onClick} style={{
        fontFamily: BODY, fontSize: 16, minHeight: 44, padding: '0 16px', borderRadius: 999, cursor: 'pointer',
        border: '1px solid ' + (actif ? C.or5 : C.ligne), background: actif ? C.or1 : '#FFFFFF', color: C.navy
      }}>{children}</button>
    );
  }

  function Picto({ actif, onClick, titre, children }) {
    return (
      <button type="button" onClick={onClick} title={titre} aria-label={titre} style={{
        width: 56, height: 56, display: 'grid', placeItems: 'center', borderRadius: 8, cursor: 'pointer',
        border: '1px solid ' + (actif ? C.or5 : C.ligne), background: actif ? C.or1 : '#FFFFFF', color: C.navy
      }}>{children}</button>
    );
  }

  const OEIL = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.6 12S5.2 5.4 12 5.4 22.4 12 22.4 12 18.8 18.6 12 18.6 1.6 12 1.6 12Z" /><circle cx="12" cy="12" r="3.2" />
    </svg>
  );
  const VOIX = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 9.5h3l5-4v13l-5-4h-3Z" /><path d="M15.2 9.2a4 4 0 0 1 0 5.6" /><path d="M18 6.6a7.6 7.6 0 0 1 0 10.8" />
    </svg>
  );

  function Cartes() {
    const [borne, setBorne] = useState(() => { const v = +localStorage.getItem('mpm.cartes.borne'); return v === 20 || v === 69 ? v : 100; });
    const [mode, setMode] = useState(() => localStorage.getItem('mpm.cartes.mode') === 'ecouter' ? 'ecouter' : 'voir');
    const [melange, setMelange] = useState(true);
    const [pile, setPile] = useState([]);
    const [retournee, setRetournee] = useState(false);
    const [dx, setDx] = useState(0);
    const [glisse, setGlisse] = useState(false);
    const [sortie, setSortie] = useState(0);
    const [paquet, setPaquet] = useState(false);
    const [ouvertes, setOuvertes] = useState({});
    const depart = useRef({ x: 0, y: 0, bouge: 0 });
    const minuteur = useRef(null);

    const n = pile.length ? pile[0] : null;
    const mot = n == null ? '' : ecrire(n);
    const voir = mode === 'voir';

    const battre = useCallback((b, mix) => {
      const q = [];
      for (let i = 0; i <= b; i++) q.push(i);
      if (mix) for (let i = q.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [q[i], q[j]] = [q[j], q[i]]; }
      setPile(q); setRetournee(false); setDx(0); setSortie(0);
      return q;
    }, []);

    useEffect(() => { const q = battre(borne, melange); if (mode === 'ecouter' && q.length) dis(q[0], ecrire(q[0])); }, []);
    useEffect(() => () => clearTimeout(minuteur.current), []);

    const retourner = () => {
      setRetournee(r => {
        if (!r && n != null) dis(n, mot);
        return !r;
      });
    };

    const jeter = dir => {
      if (n == null || sortie) return;
      setSortie(dir); setGlisse(false); setDx(dir * 560);
      clearTimeout(minuteur.current);
      minuteur.current = setTimeout(() => {
        setPile(p => {
          const q = p.slice(); const c = q.shift();
          if (dir < 0) q.push(c);
          if (mode === 'ecouter' && q.length) dis(q[0], ecrire(q[0]));
          return q;
        });
        setRetournee(false); setDx(0); setSortie(0);
      }, 250);
    };

    const onDown = e => {
      if (sortie) return;
      depart.current = { x: e.clientX, y: e.clientY, bouge: 0 };
      e.currentTarget.setPointerCapture(e.pointerId);
      setGlisse(true);
    };
    const onMove = e => {
      if (!glisse) return;
      const d = e.clientX - depart.current.x;
      depart.current.bouge = Math.max(depart.current.bouge, Math.abs(d), Math.abs(e.clientY - depart.current.y));
      setDx(d);
    };
    const onUp = () => {
      if (!glisse) return;
      if (Math.abs(dx) > 84) { jeter(dx > 0 ? 1 : -1); return; }
      const tap = depart.current.bouge < 8;
      setGlisse(false); setDx(0);
      if (tap) retourner();
    };

    const choisirBorne = b => { setBorne(b); try { localStorage.setItem('mpm.cartes.borne', b); } catch (e) {} battre(b, melange); };
    const choisirMode = m => {
      setMode(m); setRetournee(false);
      try { localStorage.setItem('mpm.cartes.mode', m); } catch (e) {}
      if (m === 'ecouter' && n != null) dis(n, mot);
    };

    const teinte = n == null ? 'transparent' : famille(n);
    const bord = n == null ? C.ligne : filet(n);

    if (paquet) {
      return (
        <div style={{ padding: '14px 14px 26px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
            <Pilule onClick={() => setPaquet(false)}>Revenir au défilé</Pilule>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(92px, 1fr))', gap: 10 }}>
            {Array.from({ length: borne + 1 }, (_, i) => i).map(i => {
              const ouvert = !!ouvertes[i];
              const w = ecrire(i);
              return (
                <div key={i} onClick={() => setOuvertes(o => ({ ...o, [i]: !ouvert }))}
                  style={{ aspectRatio: '63 / 88', background: C.ivoire, border: '1px solid ' + filet(i), borderRadius: 4, padding: 3, cursor: 'pointer' }}>
                  <div style={{ height: '100%', border: '1px solid ' + C.or5, borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, padding: 4, textAlign: 'center', background: famille(i) }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', flexWrap: 'wrap', fontSize: ouvert ? (w.length > 16 ? 13 : 16) : 34, lineHeight: 1, color: C.navy }}>
                      {glyphes(ouvert ? w : String(i))}
                    </div>
                    <div style={{ color: C.or5, fontSize: 9 }}>⚜</div>
                    <div style={{ fontFamily: BODY, fontSize: 12, lineHeight: 1.25, color: C.or7 }}>{ouvert ? String(i) : w}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div style={{ padding: '14px 18px 26px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Pilule actif={borne === 20} onClick={() => choisirBorne(20)}>jusqu'à 20</Pilule>
          <Pilule actif={borne === 69} onClick={() => choisirBorne(69)}>69</Pilule>
          <Pilule actif={borne === 100} onClick={() => choisirBorne(100)}>100</Pilule>
        </div>

        <div style={{ position: 'relative', width: 'min(288px, 100%)', aspectRatio: '63 / 88' }}>
          <div style={{ position: 'absolute', inset: 0, transform: 'rotate(2.5deg) translateY(6px)', background: C.ivoire2, border: '1px solid ' + C.ligne, borderRadius: 6 }} />
          <div style={{ position: 'absolute', inset: 0, transform: 'rotate(-1.5deg) translateY(3px)', background: C.ivoire2, border: '1px solid ' + C.ligne, borderRadius: 6 }} />

          {n != null && (
            <div onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
              style={{
                position: 'absolute', inset: 0, perspective: 1600, cursor: 'grab', touchAction: 'none', userSelect: 'none',
                transition: glisse ? 'none' : 'transform 250ms ease-out',
                transform: 'translateX(' + dx + 'px) rotate(' + (dx * 0.045) + 'deg)'
              }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transition: 'transform 240ms ease-out', transform: retournee ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>

                <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', background: C.ivoire, border: '1px solid ' + bord, borderRadius: 6, boxShadow: '0 8px 22px rgba(28,43,79,0.10)', padding: 6 }}>
                  <div style={{ position: 'relative', height: '100%', border: '1px solid ' + C.or5, borderRadius: 3, background: teinte, display: 'grid', placeItems: 'center' }}>
                    <div style={{ position: 'absolute', top: 10, left: 10 }}><Medaillon couleur={bord} /></div>
                    <div style={{ position: 'absolute', top: 10, right: 10 }}><Medaillon couleur={bord} /></div>
                    <div style={{ position: 'absolute', bottom: 10, left: 10 }}><Medaillon couleur={bord} /></div>
                    <div style={{ position: 'absolute', bottom: 10, right: 10 }}><Medaillon couleur={bord} /></div>
                    <div style={{ display: 'flex', alignItems: 'baseline', fontSize: voir ? 132 : 96, lineHeight: 1, letterSpacing: '-0.01em', color: C.navy, textShadow: contour(bord) }}>
                      {glyphes(voir ? String(n) : '?')}
                    </div>
                  </div>
                </div>

                <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: C.ivoire2, border: '1px solid ' + bord, borderRadius: 6, boxShadow: '0 8px 22px rgba(28,43,79,0.10)', padding: 6 }}>
                  <div style={{ height: '100%', border: '1px solid ' + C.or5, borderRadius: 3, background: teinte, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '16px 14px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', fontSize: 118, lineHeight: 0.9, letterSpacing: '-0.01em', color: C.or7 }}>
                      {glyphes(n)}
                    </div>
                    <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: mot.length > 16 ? 27 : 34, lineHeight: 1.08, color: C.navy, textWrap: 'balance' }}>{mot}</div>
                  </div>
                </div>
              </div>

              <Pastille cote="left" signe="↺" fond="color-mix(in oklab, #7A2E2E 20%, #FBF6EC)" encre="#5A2020" opacite={dx < -20 ? Math.min(1, (-dx - 20) / 64) : 0} />
              <Pastille cote="right" signe="✓" fond="oklch(0.918 0.058 140)" encre="#5B6A4C" opacite={dx > 20 ? Math.min(1, (dx - 20) / 64) : 0} />
            </div>
          )}

          {n == null && (
            <div style={{ position: 'absolute', inset: 0, background: C.ivoire, border: '1px solid ' + C.ligne, borderRadius: 6, padding: 6 }}>
              <div style={{ height: '100%', border: '1px solid ' + C.or5, borderRadius: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: 22, textAlign: 'center' }}>
                <div style={{ color: C.or5, fontSize: 20 }}>⚜</div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 26, color: C.navy }}>Paquet fini</div>
                <div style={{ fontFamily: BODY, fontSize: 17, color: C.navy3 }}>Voilà votre madeleine du jour.</div>
                <Pilule actif onClick={() => battre(borne, melange)}>Reprendre le paquet</Pilule>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Picto actif={voir} onClick={() => choisirMode('voir')} titre="Je vois le chiffre">{OEIL}</Picto>
          <Picto actif={!voir} onClick={() => choisirMode('ecouter')} titre="J'écoute la voix">{VOIX}</Picto>
        </div>

        <div style={{ fontFamily: BODY, fontSize: 15, color: C.navy3, textAlign: 'center', maxWidth: 260, textWrap: 'pretty' }}>
          Touchez pour retourner. À droite si vous l'avez, à gauche pour la revoir.
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Pilule actif={melange} onClick={() => { setMelange(!melange); battre(borne, !melange); }}>{melange ? 'Mélangé' : 'Dans l\u2019ordre'}</Pilule>
          <Pilule onClick={() => setPaquet(true)}>Voir le paquet</Pilule>
        </div>

      </div>
    );
  }

  window.Cartes = Cartes;
})();
