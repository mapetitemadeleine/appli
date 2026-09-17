/* La serrure de bloc — Ma petite madeleine.
   Sur une page d'exercice, le bloc marqué « Réservé au Club » s'estompe après
   une ligne : rien d'autre. Pas de carte, pas de cadre — la pastille devient
   cliquable et mène à la page du Club. Une adresse donnée là ouvre tout le site. */
(() => {
  var CLE = 'mpm_club_membre';
  var CLUB = '/club.html';

  function membre() {
    try {
      if (document.cookie.split(';').some(function (c) { return c.trim().indexOf('mpm_club=') === 0; })) return true;
      return !!localStorage.getItem(CLE);
    } catch (e) { return false; }
  }

  function estTitre(el) {
    return el.matches('h1,h2,h3') || !!el.querySelector('h1,h2,h3');
  }
  function haut(el) { return el.getBoundingClientRect().height; }
  /* Les filets ornés du système (❦ ⚜ ◆) ne comptent pas comme du contenu. */
  function ornement(el) {
    var t = el.textContent.replace(/[\s❦⚜◆—–·]/g, '');
    if (t || el.querySelector('img,audio,input,table,svg')) return false;
    /* une ligne à écrire (filet sous le texte) est du contenu, pas un ornement */
    var s = getComputedStyle(el);
    if (parseFloat(s.borderBottomWidth) > 0) return false;
    return !el.querySelector('[style*="border-bottom"]');
  }

  function pastilles() {
    return [].slice.call(document.querySelectorAll('span,div')).filter(function (el) {
      return el.children.length === 0 && el.textContent.trim().toLowerCase() === 'réservé au club';
    });
  }

  function cacher(el) { el.style.display = 'none'; el.setAttribute('data-mpm-cache', '1'); }

  function poser() {
    pastilles().forEach(function (pastille) {
      if (!pastille.getAttribute('data-mpm-lien')) {
        pastille.setAttribute('data-mpm-lien', '1');
        pastille.style.cursor = 'pointer';
        pastille.title = 'Rejoindre le Club — gratuit';
        pastille.addEventListener('click', function () { location.href = CLUB; });
      }
      if (pastille.getAttribute('data-mpm-fait')) return;

      /* On remonte depuis la pastille jusqu'au premier niveau qui a quelque
         chose après lui : c'est ce « après » qu'il faut estomper. */
      var bloc = pastille;
      while (bloc.parentElement && !bloc.nextElementSibling) bloc = bloc.parentElement;
      if (!bloc.parentElement || !bloc.nextElementSibling) return;

      /* La suite du bloc, jusqu'au titre suivant. Un titre rencontré avant
         tout contenu est le titre du bloc lui-même : on le garde. Si le bloc
         n'a plus de frère, on monte d'un cran pour trouver son contenu. */
      var suite = [], contenu = 0, cran = bloc, montees = 0;
      while (cran && montees < 3 && suite.length < 40) {
        var n = cran.nextElementSibling;
        while (n && suite.length < 40) {
          if (estTitre(n) && contenu) { n = null; break; }
          if (n.matches('footer,nav') || n.querySelector('footer,nav')) { n = null; break; }
          suite.push(n);
          if (!estTitre(n) && !ornement(n)) contenu++;
          n = n.nextElementSibling;
        }
        if (contenu) break;
        cran = cran.parentElement;
        montees++;
      }
      if (!suite.length) return;

      /* Le titre du bloc et la consigne restent lisibles ; l'exercice s'estompe. */
      var laisses = 0, premier = null;
      while (suite.length) {
        var c = suite.shift();
        if (ornement(c) && haut(c) < 120) continue;
        if (laisses < 2 && (estTitre(c) || haut(c) < 60)) { laisses++; continue; }
        premier = c;
        break;
      }
      if (!premier) return;

      pastille.setAttribute('data-mpm-fait', '1');
      premier.setAttribute('data-mpm-estompe', '1');
      premier.style.pointerEvents = 'none';

      if (haut(premier) >= 60) {
        /* Un grand bloc : une ligne visible, puis le fondu. */
        premier.style.maxHeight = '74px';
        premier.style.overflow = 'hidden';
        premier.style.webkitMaskImage = 'linear-gradient(to bottom, #000 0, #000 22%, transparent 96%)';
        premier.style.maskImage = 'linear-gradient(to bottom, #000 0, #000 22%, transparent 96%)';
      } else {
        /* Une suite de petites lignes : elles s'effacent en deux temps. */
        premier.style.opacity = '0.4';
        var second = suite.shift();
        if (second) {
          second.style.opacity = '0.13';
          second.style.pointerEvents = 'none';
          second.setAttribute('data-mpm-estompe', '2');
        }
      }
      suite.forEach(cacher);
    });
  }

  /* La page se dessine en plusieurs temps : on repasse à chaque changement du
     document, sans jamais renoncer trop tôt. */
  function veiller() {
    if (membre()) return;
    poser();
    var tours = 0, t = setInterval(function () { poser(); if (++tours > 40) clearInterval(t); }, 300);
    if (window.MutationObserver) {
      new MutationObserver(function () { poser(); }).observe(document.documentElement, { childList: true, subtree: true });
    }
    window.addEventListener('load', poser);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', veiller);
  else veiller();
})();
