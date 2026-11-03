const SACY_PUBLISHED = ["luc", "marc", "matthieu", "jean", "corinthiens2", "timothee2", "tite", "philemon", "jean2", "jean3", "jude", "genese"];
const SACY_REFS = {"auteurs":[{"cle":"augustin","alias":["august","aug","augst","augustin","augus","augusti","ench","enchir"]},{"cle":"ambroise","alias":["ambr","ambros","ambrosius","amb"]},{"cle":"jerome","alias":["hieron","hier","hieronym","hierom","hyeron"]},{"cle":"gregoire-le-grand","alias":["gregor","greg","gregorius","magn","mor","moral","pastor"]},{"cle":"gregoire-de-nazianze","alias":[]},{"cle":"gregoire-de-nysse","alias":[]},{"cle":"tertullien","alias":["tertull","tertul","tertullian"]},{"cle":"origene","alias":["origen","orig"]},{"cle":"chrysostome","alias":["chrysost","chrys","chrysostom"]},{"cle":"bernard","alias":["bern","ber","bernard"]},{"cle":"bede","alias":["bed","beda"]},{"cle":"eusebe","alias":["euseb"]},{"cle":"irenee","alias":["iren","irenæus","irenaeus","ireneus"]},{"cle":"cyprien","alias":["cyprian","cypr"]},{"cle":"epiphane","alias":["epiph","epiphan"]},{"cle":"athanase","alias":["athanas","athan"]},{"cle":"leon","alias":["leo"]},{"cle":"basile","alias":["basil","basilius"]},{"cle":"hilaire","alias":["hilar","hil"]},{"cle":"cyrille","alias":["cyrill"]},{"cle":"paulin","alias":["paulin"]},{"cle":"josephe","alias":["joseph"]},{"cle":"grotius","alias":["grotius","grot"]},{"cle":"maldonat","alias":["maldon","mald"]},{"cle":"estius","alias":["estius"]},{"cle":"jansenius","alias":["jansen","jansenius"]},{"cle":"jansenius-de-gand","alias":[]},{"cle":"holstenius","alias":[]},{"cle":"theophylacte","alias":["theoph","theophil","theophyl","theophylact"]},{"cle":"euthyme","alias":["euthym","eutym"]},{"cle":"sedulius","alias":["sedul"]},{"cle":"mabillon","alias":["mabil"]},{"cle":"conciles","alias":["conc","concil"]}],"auteurs_composes":[{"auteur":"jansenius","suite":"gand","cle":"jansenius-de-gand"},{"premier":["act"],"suite":"holst","cle":"holstenius"},{"auteur":"gregoire-le-grand","suite":"nazianz","cle":"gregoire-de-nazianze"},{"auteur":"gregoire-le-grand","suite":"nyss","cle":"gregoire-de-nysse"},{"auteur":"gregoire-le-grand","suite":"magn","cle":"gregoire-le-grand"}],"mots":{"liturgie":["aux","circoncision","dim","dimanche","fete","fête","jeudi","lundi","mardi","mercredi","octave","plusieurs","s","samedi","st","suite","un","veille","vendredi","visitation"],"continuation":["apud","contra","de","dom","ep","epist","evangel","hom","homil","in","item","orat","part","ser","serm","sess","tract"],"reperage":["art","c","cap","ch","chap","col","l","lib","liv","n","num","p","pag","part","q","qu","quaest","quæst","t","to","tom","v","vers"]},"bible":{"livres":[{"slug":"genese","fr":"Genèse","abreviations":["Gen","Gn","Genes"]},{"slug":"exode","fr":"Exode","abreviations":["Ex","Exod"]},{"slug":"levitique","fr":"Lévitique","abreviations":["Lv","Lev","Levit","Levitic","Levitiq"]},{"slug":"nombres","fr":"Nombres","abreviations":["Nb","Num","Numer","Nomb"]},{"slug":"deuteronome","fr":"Deutéronome","abreviations":["Dt","Deut"]},{"slug":"josue","fr":"Josué","abreviations":["Jos"]},{"slug":"juges","fr":"Juges","abreviations":["Jg","Jug","Juges","Judic"]},{"slug":"ruth","fr":"Ruth","abreviations":["Rt","Ruth"]},{"slug":"rois","fr":"Rois","num":true,"abreviations":["Reg"]},{"slug":"esdras","fr":"Esdras","abreviations":["Esd","Esdr"]},{"slug":"nehemie","fr":"Néhémie","abreviations":["Neh"]},{"slug":"esther","fr":"Esther","abreviations":["Esth"]},{"slug":"tobie","fr":"Tobie","abreviations":["Tob"]},{"slug":"judith","fr":"Judith","abreviations":["Jdt"]},{"slug":"maccabees","fr":"Maccabées","num":true,"abreviations":["Mac","Mach"]},{"slug":"job","fr":"Job","abreviations":["Job"]},{"slug":"psaumes","fr":"Ps","abreviations":["Ps","Psal","Psalm"]},{"slug":"proverbes","fr":"Proverbes","abreviations":["Prov","Proverb"]},{"slug":"ecclesiaste","fr":"Ecclésiaste","abreviations":["Eccl","Eccles","Ecc","Ecclesiast"]},{"slug":"cantique","fr":"Cantique","abreviations":["Cant","Cantic"]},{"slug":"sagesse","fr":"Sagesse","abreviations":["Sap","Sag","Sapient"]},{"slug":"siracide","fr":"Siracide","abreviations":["Sir","Eccli"]},{"slug":"isaie","fr":"Isaïe","abreviations":["Is","Isai","Isa","Isaie","Isaï","Isaïe"]},{"slug":"jeremie","fr":"Jérémie","abreviations":["Jr","Jer","Jerem"]},{"slug":"lamentations","fr":"Lamentations","abreviations":["Lam","Lament","Thren"]},{"slug":"baruch","fr":"Baruch","abreviations":["Bar"]},{"slug":"ezechiel","fr":"Ézéchiel","abreviations":["Ez","Ezech","Ezechiel","Ezec"]},{"slug":"daniel","fr":"Daniel","abreviations":["Dan","Daniel"]},{"slug":"osee","fr":"Osée","abreviations":["Os","Osée","Osee"]},{"slug":"joel","fr":"Joël","abreviations":["Jl","Joel"]},{"slug":"amos","fr":"Amos","abreviations":["Am","Amos"]},{"slug":"abdias","fr":"Abdias","abreviations":["Ab"]},{"slug":"jonas","fr":"Jonas","abreviations":["Jon"]},{"slug":"michee","fr":"Michée","abreviations":["Mi","Mich"]},{"slug":"nahum","fr":"Nahum","abreviations":["Na"]},{"slug":"habacuc","fr":"Habacuc","abreviations":["Ha","Habac"]},{"slug":"sophonie","fr":"Sophonie","abreviations":["So"]},{"slug":"aggee","fr":"Aggée","abreviations":["Ag","Agg"]},{"slug":"zacharie","fr":"Zacharie","abreviations":["Za","Zach","Zachar"]},{"slug":"malachie","fr":"Malachie","abreviations":["Ml","Mal","Malac","Malach"]},{"slug":"matthieu","fr":"Matthieu","abreviations":["Mt","Matth","Matt","Mat","Math"]},{"slug":"marc","fr":"Marc","abreviations":["Mc","Marc"]},{"slug":"luc","fr":"Luc","abreviations":["Lc","Luc"]},{"slug":"jean","fr":"Jean","abreviations":["Jn","Jo","Joan","Jean"]},{"slug":"actes","fr":"Actes","abreviations":["Act","Ac"]},{"slug":"romains","fr":"Romains","abreviations":["Rm","Rom"]},{"slug":"corinthiens","fr":"Corinthiens","num":true,"abreviations":["Co","Cor"]},{"slug":"galates","fr":"Galates","abreviations":["Ga","Gal","Galat"]},{"slug":"ephesiens","fr":"Éphésiens","abreviations":["Ep","Eph","Ephes"]},{"slug":"philippiens","fr":"Philippiens","abreviations":["Ph","Phil","Philip","Philipp"]},{"slug":"colossiens","fr":"Colossiens","abreviations":["Col","Coloss"]},{"slug":"thessaloniciens","fr":"Thessaloniciens","num":true,"abreviations":["Th","Thess"]},{"slug":"timothee","fr":"Timothée","num":true,"abreviations":["Tim"]},{"slug":"tite","fr":"Tite","abreviations":["Tt","Tit","Tite"]},{"slug":"philemon","fr":"Philémon","abreviations":["Phm","Philem"]},{"slug":"hebreux","fr":"Hébreux","abreviations":["Heb","Hebr"]},{"slug":"jacques","fr":"Jacques","abreviations":["Jc","Jac","Jacob"]},{"slug":"jude","fr":"Jude","abreviations":["Jud"]},{"slug":"apocalypse","fr":"Apocalypse","abreviations":["Ap","Apoc","Apocal"]},{"slug":"pierre","fr":"Pierre","num":true,"abreviations":["Petr"]},{"slug":"paralipomenes","fr":"Paralipomènes","num":true,"abreviations":["Paral"]},{"slug":"samuel","fr":"Samuel","num":true,"abreviations":["Sam"]}],"meme_livre":["Supr","Suprà","Inf","Sup","Supra","Infr","Infrà","Infra"]}};
// render.js — moteur de rendu commun (accueil, sommaire, chapitres, pages-livres, recherche)

(function () {
  const t = localStorage.getItem('sacy-theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
})();

// ── Références bibliques ─────────────────────────────────────────────────────

// Données issues de content/references.json (injectées en tête de ce fichier par build.py : SACY_REFS)
const BIBLE_BOOKS = {};
for (const l of SACY_REFS.bible.livres) for (const a of l.abreviations) BIBLE_BOOKS[a] = l.num ? { slug: l.slug, fr: l.fr, num: true } : { slug: l.slug, fr: l.fr };
for (const a of SACY_REFS.bible.meme_livre) BIBLE_BOOKS[a] = { same: true };   // « Supra », « Infra » : même livre
let SACY_CURRENT_BOOK = null;
let SACY_VERSE_HREF = n => '#v' + n;   // lien d'un « ℣. N » : verset du chapitre affiché (vue chapitre) ou du chapitre en cours (vue page)
let SACY_CURRENT_CHAP = null;   // chapitre en cours de lecture (pour les renvois « v. 22. » sans chapitre)

function fromRoman(s) {
  if (!s) return null;
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  const u = s.toUpperCase();
  if (!/^[IVXLCDM]+$/.test(u)) return null;
  const V = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1};
  let n = 0, prev = 0;
  for (let i = u.length - 1; i >= 0; i--) {
    const v = V[u[i]] || 0;
    n += v < prev ? -v : v;
    prev = v;
  }
  return n || null;
}

// « v. 22. », « vers. 3. » : verset du chapitre en cours (même livre).
const VERSE_ONLY_RE = /^(?:vv?|vers?|versets?)\b\.?\s*(\d+)/i;
// « Ib. v. 17. » : verset 17 du renvoi précédent de la même liste de marges (« Gen. 17. 16. » puis « Ib. v. 17. » = Gen 17, 17).
const IB_VERSE_RE = /^(?:ib|ibid|id|idem)\.?\s*(?:vv?|vers?|versets?)\b\.?\s*(\d+)/i;

function parseBibleRef(text) {
  const mv = text.match(VERSE_ONLY_RE);
  if (mv) {
    if (!SACY_CURRENT_BOOK || !SACY_CURRENT_CHAP) return null;
    return { slug: SACY_CURRENT_BOOK.slug, chapitre: SACY_CURRENT_CHAP, verset: parseInt(mv[1], 10), fr: SACY_CURRENT_BOOK.fr };
  }
  // Formes acceptées : « Matt. 11. 14. », « 1. Cor. 15. 24. », « Joan. XVI, 7 », « Sup. 9. 22. »
  const m = text.match(
    /^((?:[IVX]+|[1-4])\.?\s+)?([A-Za-zÀ-ÿ]+)\.?\s+(?:(?:c|cap)\.?\s*)?([IVXLCD]+|\d+)(?:\s*[.,]\s*(\d+))?/
  );
  if (!m) return null;

  const prefix  = m[1] ? m[1].replace(/\./, '').trim() : null;
  const abbrev  = m[2];
  const chapStr = m[3];

  const info = BIBLE_BOOKS[abbrev];
  if (!info) return null;

  const chapitre = fromRoman(chapStr);
  if (!chapitre || chapitre > 200) return null;
  const verset = m[4] ? parseInt(m[4], 10) : null;

  if (info.same) {
    if (!SACY_CURRENT_BOOK) return null;
    return { slug: SACY_CURRENT_BOOK.slug, chapitre, verset, fr: SACY_CURRENT_BOOK.fr };
  }
  let slug = info.slug;
  let fr   = info.fr;
  if (info.num || (prefix && (abbrev === 'Joan' || abbrev === 'Jo' || abbrev === 'Jn'))) {
    if (!prefix) return null;
    const n = fromRoman(prefix) || parseInt(prefix, 10);
    slug = `${slug}${n}`;
    fr   = `${n} ${fr}`;
  }

  return { slug, chapitre, verset, fr };
}

function slugify(text) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// ── Sources non bibliques (Pères, commentateurs) : clé d'auteur d'une marge, pour renvoyer à la bibliographie ─────────────
// Miroir de scripts/sources.py (cle_auteur_seule) — vérifié par scripts/check_sources.py. « Ibid. »/« Idem » = auteur de la source précédente.
const SOURCE_ALIAS = {};
for (const a of SACY_REFS.auteurs) for (const al of a.alias) SOURCE_ALIAS[al] = a.cle;
const SOURCE_COMPOSES = SACY_REFS.auteurs_composes;
const SOURCE_LITURGIE = new Set(SACY_REFS.mots.liturgie);
const SOURCE_CONTINUATION = new Set(SACY_REFS.mots.continuation);
const SOURCE_REPERAGE = new Set(SACY_REFS.mots.reperage);
let SACY_PREV_SOURCE = null;
let BIBLE_LOOSE_RE = null;
function bibleLoose(marge) {   // renvoi biblique irrégulier (« Hebr. [?]. 6. 7. », « Jud. v. 9. ») : texte simple, pas une source
  if (!BIBLE_LOOSE_RE) BIBLE_LOOSE_RE = new RegExp('^(?:[1-4IV]+\\.?\\s+)?(' + Object.keys(BIBLE_BOOKS).filter(k => !BIBLE_BOOKS[k].same).sort((a, b) => b.length - a.length).join('|') +
    ')\\.?\\s+(?:\\[\\?\\]|v\\.|ib\\.|ut\\b|[ivxlcdm]+\\.\\s*\\d)', 'i');
  return BIBLE_LOOSE_RE.test(marge.trim());
}      // dernière source citée dans le flux en cours (Ibid./Idem) ; remise à zéro à chaque colonne

function sourceAuthorKey(marge, prevKey) {
  const t = marge.trim();
  const tokens = t.split(/\s+/);
  const first = (tokens[0] || '').replace(/\.$/, '').toLowerCase();
  const isLit = t.startsWith('†') || (/^[A-Za-zÀ-ÿ]+/.test(t) && SOURCE_LITURGIE.has(first) && !(first in SOURCE_ALIAS));
  if (isLit) return 'liturgie';
  if (/^(ib|ibid|ibidem|id|idem)\b/i.test(t) || (SOURCE_REPERAGE.has(first) && first.length <= 3) || SOURCE_CONTINUATION.has(first) || !/^[A-Za-zÀ-ÿ]/.test(first)) return prevKey || 'non-identifie';
  const key = SOURCE_ALIAS[first];
  if (tokens.length > 1) {                       // auteurs composés (« Jansen. Gand. », « Greg. Nazianz. », « Act. Holst. »)
    const nxt = tokens[1].replace(/[.,]$/, '').toLowerCase();
    for (const c of SOURCE_COMPOSES) if ((c.auteur ? c.auteur === key : (c.premier || []).includes(first)) && nxt.startsWith(c.suite)) return c.cle;
  }
  return key || (slugify(tokens[0].replace(/\.$/, '')) || 'divers');
}

// Renvoi d'une marge dans sa liste (`list`, position `i`) : gère « Ib. v. N » par rapport à la marge précédente.
// Si la marge précédente n'est pas un renvoi biblique (ex. un Père de l'Église : « Ambr. in Luc. c. 2. v. 26. »),
// « Ib. » désigne cet ouvrage et le renvoi n'est pas résolu (pas de lien biblique).
function refForMarge(list, i) {
  const m = list[i].trim();
  const mi = m.match(IB_VERSE_RE);
  if (mi) {
    if (i === 0) return null;
    const prev = refForMarge(list, i - 1);
    return prev ? { slug: prev.slug, chapitre: prev.chapitre, verset: parseInt(mi[1], 10), fr: prev.fr } : null;
  }
  return parseBibleRef(m);
}

function renderMarge(marge, base, list, idx) {
  const ref = list ? refForMarge(list, idx) : parseBibleRef(marge);
  if (ref) SACY_PREV_SOURCE = '__bible__';
  if (ref && typeof SACY_PUBLISHED !== 'undefined' && !SACY_PUBLISHED.includes(ref.slug)) {
    const lab = ref.verset ? `${ref.fr} ${toRoman(ref.chapitre)}, ${ref.verset}` : `${ref.fr} ${toRoman(ref.chapitre)}`;
    return `<span class="marge-link marge-bible marge-hors-site" title="${lab} — livre pas encore publié sur ce site">${marge}</span>`;
  }
  if (ref) {
    const chap  = String(ref.chapitre).padStart(2, '0');
    const hash  = ref.verset ? `#v${ref.verset}` : '';
    const url   = `${base}${ref.slug}/ch${chap}.html${hash}`;
    const label = ref.verset
      ? `${ref.fr} ${toRoman(ref.chapitre)}, ${ref.verset}`
      : `${ref.fr} ${toRoman(ref.chapitre)}`;
    return `<a href="${url}" class="marge-link marge-bible" title="${label}">${marge}</a>`;
  }
  if (IB_VERSE_RE.test(marge.trim())) return `<span class="marge-link">${marge}</span>`;   // « Ib. v. N » d'un ouvrage patristique : pas de lien
  if (bibleLoose(marge)) { SACY_PREV_SOURCE = '__bible__'; return `<span class="marge-link marge-bible-flou">${marge}</span>`; }
  if (IB_VERSE_RE.test(marge.trim())) return `<span class="marge-link">${marge}</span>`;   // « Ib. v. N » d'un ouvrage patristique : pas de lien
  if (SACY_PREV_SOURCE === '__bible__' && /^(ib|ibid|ibidem|id|idem)\b/i.test(marge.trim()))
    return `<span class="marge-link">${marge}</span>`;                                 // « Ibid. 12. » après un renvoi biblique
  const key = sourceAuthorKey(marge, SACY_PREV_SOURCE && SACY_PREV_SOURCE !== '__bible__' ? SACY_PREV_SOURCE : null);
  if (key !== 'liturgie') SACY_PREV_SOURCE = key;
  return `<a href="${base}biblio.html#a-${key}" class="marge-link marge-extern">${marge}</a>`;
}

// ── Utilitaires généraux ──────────────────────────────────────────────────────

function toRoman(n) {
  const v = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const s = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let r = '';
  for (let i = 0; i < v.length; i++) while (n >= v[i]) { r += s[i]; n -= v[i]; }
  return r;
}

// Construit le lien vers le fac-similé réel (bible.sacy.be) à partir des
// métadonnées résolues par build.py (content/facsimile.json), et non plus
// de notre propre pagination interne — qui ne correspond pas à celle du site.
function facUrl(facsimile) {
  if (!facsimile) return null;
  return `https://bible.sacy.be/#/${facsimile.slug}/${facsimile.page}`;
}

function noteHasContent(note) {
  if (!note) return false;
  if (typeof note === 'string') return note.trim() !== '';
  if (Array.isArray(note)) return note.some(p => p.texte && p.texte.trim() !== '');
  return false;
}

function pad2(n) { return String(n).padStart(2, '0'); }

// Racine du site relative à la page courante : '' à la racine, '../' dans un dossier livre
function siteBase() {
  return document.body.dataset.base || '';
}

// L'index de recherche (plusieurs Mo) n'est chargé qu'à la première recherche, pas avec chaque page.
let _searchIndexPromise = null;
function loadSearchIndex() {
  if (typeof SACY_SEARCH_INDEX !== 'undefined') return Promise.resolve(SACY_SEARCH_INDEX);
  if (!_searchIndexPromise) {
    _searchIndexPromise = new Promise((resolve, reject) => {
      const sc = document.createElement('script');
      sc.src = siteBase() + 'search-index.js';
      sc.onload = () => resolve(SACY_SEARCH_INDEX);
      sc.onerror = () => { _searchIndexPromise = null; reject(new Error('index introuvable')); };
      document.head.appendChild(sc);
    });
  }
  return _searchIndexPromise;
}

// ── Thème ────────────────────────────────────────────────────────────────────

function toggleTheme() {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('sacy-theme', next);
  updateThemeIcons(next);
}
function updateThemeIcons(theme) {
  const t = theme || document.documentElement.getAttribute('data-theme') || 'light';
  document.querySelectorAll('.theme-icon').forEach(el => {
    el.textContent = t === 'dark' ? '☀' : '☾';
  });
}

// ── Recherche (partagée entre le sommaire et la page de recherche) ──────────

const SacySearch = {
  fieldsForScope(entry, scope) {
    if (scope === 'versets') return [entry.fr, entry.lat];
    if (scope === 'commentaires') return [entry.note];
    return [entry.fr, entry.lat, entry.note];
  },
  score(entry, terms, scope) {
    const fields = this.fieldsForScope(entry, scope);
    let s = 0;
    for (const term of terms) {
      if (fields.some(f => f && f.toLowerCase().includes(term))) s++;
    }
    return s === terms.length ? s : 0;
  },
  highlight(text, terms) {
    if (!text) return '';
    let result = text;
    for (const term of terms) {
      const re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      result = result.replace(re, '<mark>$1</mark>');
    }
    return result;
  },
  excerpt(text, terms, maxLen) {
    if (!text) return '';
    const lower = text.toLowerCase();
    const idx = terms.map(t => lower.indexOf(t)).filter(i => i >= 0);
    const start = idx.length > 0 ? Math.max(0, Math.min(...idx) - 80) : 0;
    let snippet = text.slice(start, start + maxLen);
    if (start > 0) snippet = '…' + snippet;
    if (start + maxLen < text.length) snippet += '…';
    return snippet;
  },
  run(query, index, limit, scope) {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length || !index) return { terms, results: [] };
    const results = index
      .map(e => ({ entry: e, s: this.score(e, terms, scope) }))
      .filter(r => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, limit || Infinity)
      .map(r => r.entry);
    return { terms, results };
  },
};

// ── Sommaire latéral ─────────────────────────────────────────────────────────

function isMobileSidebar() {
  return window.matchMedia('(max-width: 860px)').matches;
}

function setupSidebar() {
  const shell = document.querySelector('.page-shell');
  if (!shell) return;

  // Repli desktop (persisté)
  const collapseBtn = document.querySelector('.sidebar-collapse-btn');
  if (localStorage.getItem('sacy-sidebar-collapsed') === '1') {
    shell.classList.add('sidebar-collapsed');
  }
  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      if (isMobileSidebar()) {
        // Sur mobile, ce bouton referme le tiroir plutôt que de « replier » la colonne
        shell.classList.remove('sidebar-open');
        return;
      }
      const collapsed = shell.classList.toggle('sidebar-collapsed');
      localStorage.setItem('sacy-sidebar-collapsed', collapsed ? '1' : '0');
    });
  }

  // Bouton flottant : ouvre le tiroir mobile, ou réaffiche le sommaire replié sur desktop
  const openBtn = document.querySelector('.sidebar-open-btn');
  const backdrop = document.querySelector('.sidebar-backdrop');
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      if (isMobileSidebar()) {
        shell.classList.add('sidebar-open');
      } else {
        shell.classList.remove('sidebar-collapsed');
        localStorage.setItem('sacy-sidebar-collapsed', '0');
      }
    });
  }
  if (backdrop) backdrop.addEventListener('click', () => shell.classList.remove('sidebar-open'));

  // Recherche en direct
  const input = document.querySelector('.sidebar-search-input');
  const resultsBox = document.querySelector('.sidebar-search-results');
  if (input && resultsBox) {
    let timer;
    input.addEventListener('focus', () => { loadSearchIndex().catch(() => {}); }, { once: true });   // précharge dès qu'on clique dans le champ
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => runSidebarSearch(input.value, resultsBox), 150);
    });
    document.addEventListener('click', (e) => {
      if (!resultsBox.contains(e.target) && e.target !== input) resultsBox.hidden = true;
    });
  }
}

function input_current(resultsBox) {
  const i = document.querySelector('.sidebar-search-input');
  return i ? i.value.trim() : '';
}

function runSidebarSearch(query, resultsBox) {
  query = query.trim();
  if (query.length < 2) {
    resultsBox.hidden = true;
    return;
  }
  if (typeof SACY_SEARCH_INDEX === 'undefined') {
    resultsBox.innerHTML = '<div class="res-empty">Chargement de l’index…</div>';
    resultsBox.hidden = false;
    loadSearchIndex().then(() => { if (input_current(resultsBox) === query) runSidebarSearch(query, resultsBox); }, () => {
      resultsBox.innerHTML = '<div class="res-empty">Index indisponible</div>';
    });
    return;
  }
  const { terms, results } = SacySearch.run(query, SACY_SEARCH_INDEX, 8);
  const base = siteBase();
  if (results.length === 0) {
    resultsBox.innerHTML = '<div class="res-empty">Aucun résultat</div>';
    resultsBox.hidden = false;
    return;
  }
  resultsBox.innerHTML = results.map(e => {
    const ref = `${e.livreAbr} ${toRoman(e.chapitre)}, ${e.n}`;
    const snippet = SacySearch.excerpt(e.fr || e.note, terms, 90);
    return `<a href="${base}${e.livre}/ch${pad2(e.chapitre)}.html#v${e.n}">` +
      `<span class="res-ref">${ref}</span>${SacySearch.highlight(snippet, terms)}</a>`;
  }).join('') + `<a href="${base}recherche.html?q=${encodeURIComponent(query)}" style="text-align:center;font-variant:small-caps;">Voir tous les résultats →</a>`;
  resultsBox.hidden = false;
}

function highlightSidebarCurrent(livre, chapitre) {
  if (!livre) return;
  const group = document.querySelector(`.sidebar-tree details.livre-group[data-livre="${livre}"]`);
  if (!group) return;
  group.open = true;
  const canonGroup = group.closest('details.canon-group');
  if (canonGroup) canonGroup.open = true;
  const chAttr = chapitre == null ? '0' : String(chapitre);
  const link = group.querySelector(`a[data-ch="${chAttr}"]`);
  if (link) {
    link.classList.add('current');
    setTimeout(() => link.scrollIntoView({ block: 'nearest' }), 0);
  }
}

// ── Point d'entrée ────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  updateThemeIcons();
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', toggleTheme));
  setupSidebar();

  // pages pré-rendues à la compilation (scripts/prerender.js) : le contenu est déjà dans le HTML, on ne fait que l'activer
  const pre = document.body.dataset.pre;
  if (pre) { hydrate(pre); return; }

  if (typeof SACY_PREFACE_NT !== 'undefined') { renderPrefaceNT(SACY_PREFACE_NT); return; }
  if (typeof SACY_LIVRE !== 'undefined') { renderLivre(SACY_LIVRE); return; }
  if (typeof SACY_DATA  !== 'undefined') { renderChapitre(SACY_DATA); return; }
  if (typeof SACY_PAGE  !== 'undefined') { renderPage(SACY_PAGE); return; }
});

function hydrate(type) {
  if (type === 'chapitre') {
    const columns = document.querySelector('.chapitre-columns');
    if (columns && columns.classList.contains('triple')) setupSensSwitch(columns, null, null);
    setupLatinToggle();
    setupCrosslinks();
    setupCitations();
  } else if (type === 'page') {
    const prev = document.querySelector('.pf-prev[href]'), next = document.querySelector('.pf-next[href]');
    document.addEventListener('keydown', e => {
      if (e.target.matches('input, textarea')) return;
      if (e.key === 'ArrowLeft' && prev) location.href = prev.getAttribute('href');
      if (e.key === 'ArrowRight' && next) location.href = next.getAttribute('href');
    });
    setupCrosslinks();
  }
}

// ── Page-livre : préface + liste des chapitres ────────────────────────────────

function renderLivre(livre) {
  document.title = `${livre.livreFr} — Bible de Sacy`;
  setText('.livre-titre', livre.livreFr);
  setText('.breadcrumb-livre', livre.livreAbr || livre.livreFr);

  const facHref = facUrl(livre.facsimile);
  document.querySelectorAll('.lien-facs').forEach(el => {
    if (facHref) el.href = facHref; else el.style.display = 'none';
  });

  document.querySelectorAll('.lien-pages').forEach(el => {
    if (livre.pagesFirst) { el.href = `page-${livre.pagesFirst}.html`; el.hidden = false; }
  });

  const prefaceDiv = document.querySelector('.livre-preface');
  if (prefaceDiv && livre.preface) {
    const base = siteBase();
    prefaceDiv.innerHTML = livre.preface
      .map(para => buildParaRow(para.texte, para.marges || [], base))
      .join('');
  }

  highlightSidebarCurrent(livre.livre, null);
}

// ── Préface générale du Nouveau Testament (page à part) ───────────────────────

function renderPrefaceNT(data) {
  const base = siteBase();
  const div = document.querySelector('.livre-preface');
  if (div) div.innerHTML = data.preface.map(para => buildParaRow(para.texte, para.marges || [], base)).join('');
  const lien = document.querySelector('.sidebar-tree a.preface-gen');
  if (lien) {
    lien.classList.add('current');
    const g = lien.closest('details.canon-group'); if (g) g.open = true;
  }
}

// ── Page-chapitre ────────────────────────────────────────────────────────────

function renderChapitre(data) {
  const { meta, versets } = data;
  const chapRom = toRoman(meta.chapitre);
  const base = siteBase();

  document.title = `${meta.livreAbr || meta.livreFr} ${chapRom} — Bible de Sacy`;

  setText('.chapter-header .livre', meta.livreFr);
  setText('.chapter-header h1', `Chapitre ${chapRom}`);
  setText('.chapter-header h2', meta.titre || '');
  setText('.breadcrumb-livre', `${meta.livreAbr || meta.livreFr} · Ch. ${chapRom}`);

  const facHref = facUrl(meta.facsimile);
  document.querySelectorAll('.lien-facs').forEach(el => {
    if (facHref) el.href = facHref; else el.style.display = 'none';
  });
  SACY_CURRENT_BOOK = { slug: meta.livre, fr: meta.livreFr };
  SACY_CURRENT_CHAP = meta.chapitre;
  document.querySelectorAll('.lien-pages').forEach(el => {
    if (meta.pageView && meta.pageFacs) { el.href = `page-${meta.pageFacs}.html`; el.hidden = false; }
  });

  const pad = n => String(n).padStart(2, '0');
  const prev = meta.chapitre > 1 ? meta.chapitre - 1 : null;
  const next = meta.chapitre < meta.chapTotal ? meta.chapitre + 1 : null;

  const elPrev = document.querySelector('.nav-prev');
  if (elPrev) {
    if (prev) { elPrev.href = `ch${pad(prev)}.html`; elPrev.textContent = `← ${toRoman(prev)}`; }
    else elPrev.style.visibility = 'hidden';
  }
  const elNext = document.querySelector('.nav-next');
  if (elNext) {
    if (next) { elNext.href = `ch${pad(next)}.html`; elNext.textContent = `${toRoman(next)} →`; }
    else elNext.style.visibility = 'hidden';
  }
  setText('.chapitre-num',
    `${meta.livreAbr || meta.livreFr.slice(0,2).toUpperCase()} · ${chapRom} / ${toRoman(meta.chapTotal)}`);

  const hasDoubleSens = versets.some(v => noteHasContent(v.noteLitteral) || noteHasContent(v.noteSpirituel));

  const colFr = document.querySelector('.col-francais');
  if (colFr) colFr.innerHTML = buildFrancais(versets, meta, base, hasDoubleSens);

  const columns = document.querySelector('.chapitre-columns');

  if (hasDoubleSens) {
    if (columns) columns.classList.add('triple');
    const comCol = document.querySelector('.col-commentaire');
    if (comCol) comCol.hidden = true;

    const litCol = document.querySelector('.col-litteral');
    const spiCol = document.querySelector('.col-spirituel');
    const nLit = versets.filter(v => !v.section && noteHasContent(v.noteLitteral));
    const nSpi = versets.filter(v => !v.section && noteHasContent(v.noteSpirituel));
    if (litCol) {
      litCol.hidden = false;
      const t = litCol.querySelector('.litteral-texte');
      if (t) t.innerHTML = buildCommentaire(versets, meta, base, 'noteLitteral', 'noteLitteralVersets', 'lit');
    }
    if (spiCol) {
      spiCol.hidden = false;
      const t = spiCol.querySelector('.spirituel-texte');
      const index = nSpi.length
        ? `<p class="sens-index">Passages commentés au sens spirituel : ${nSpi.map(v => `<a href="#com-spi-v${v.n}" class="ref-com-lien">${v.n}</a>`).join(', ')}</p>` : '';
      if (t) t.innerHTML = index + buildCommentaire(versets, meta, base, 'noteSpirituel', 'noteSpirituelVersets', 'spi');
    }

    const sw0 = document.querySelector('.sens-switch');
    if (sw0 && columns) { sw0.hidden = false; setupSensSwitch(columns, nLit.length, nSpi.length); }
  } else {
    const comTexte = document.querySelector('.col-commentaire .commentaire-texte');
    if (comTexte) comTexte.innerHTML = buildCommentaire(versets, meta, base);
  }

  setupLatinToggle();
  setupCrosslinks();
  setupCitations();
  highlightSidebarCurrent(meta.livre, meta.chapitre);
}

// Sélecteur : sens littéral / sens spirituel / les deux (trois colonnes, grands écrans seulement).
// nLit / nSpi = nombres de passages commentés (null en hydratation : les compteurs sont déjà dans le HTML).
function setupSensSwitch(columns, nLit, nSpi) {
  const sw = document.querySelector('.sens-switch');
  if (!sw || !columns) return;
  sw.hidden = false;
  if (nLit !== null) {
    sw.querySelector('[data-mode="litteral"] .n').textContent = nLit ? `· ${nLit}` : '';
    sw.querySelector('[data-mode="spirituel"] .n').textContent = nSpi ? `· ${nSpi}` : '';
  }
  const wide = window.matchMedia('(min-width: 1280px)');
  let stored = new URLSearchParams(location.search).get('sens');          // ?sens=litteral|spirituel|both (lien partageable)
  if (!['litteral', 'spirituel', 'both'].includes(stored)) stored = null;
  if (!stored) { try { stored = localStorage.getItem('sacy-sens'); } catch (e) {} }
  const apply = (m, remember) => {
    if (m === 'both' && !wide.matches) m = 'litteral';
    columns.dataset.mode = m;
    sw.querySelectorAll('.sens-mode').forEach(b => b.classList.toggle('active', b.dataset.mode === m));
    sw.querySelector('[data-mode="both"]').hidden = !wide.matches;
    if (remember) {
      try { localStorage.setItem('sacy-sens', m); } catch (e) {}
      const q = new URLSearchParams(location.search); q.set('sens', m);
      history.replaceState(null, '', location.pathname + '?' + q.toString() + location.hash);
    }
  };
  apply(stored || (window.matchMedia('(min-width: 1700px)').matches ? 'both' : 'litteral'), false);
  sw.querySelectorAll('.sens-mode').forEach(b => b.addEventListener('click', () => apply(b.dataset.mode, true)));
  wide.addEventListener('change', () => apply(columns.dataset.mode, false));
  // un renvoi §L / §S du texte français ouvre le commentaire correspondant
  document.addEventListener('click', e => {
    const a = e.target.closest('.ref-com, .ref-com-lien');
    if (!a) return;
    const h = a.getAttribute('href') || '';
    if (h.startsWith('#com-spi-') && columns.dataset.mode === 'litteral') apply('spirituel', true);
    if (h.startsWith('#com-lit-') && columns.dataset.mode === 'spirituel') apply('litteral', true);
  }, true);
}

// ── Colonne française (versets, latin optionnel, renvois) ────────────────────

// « ℣. 38 » (dans les notes de bas de page et le commentaire) = verset 38 du chapitre en cours : lien vers ce verset.
function linkVerses(html, hrefFor) {
  return String(html).replace(/(℣\.?\s*)(\d+)/g, (m, lead, n) => `<a class="ref-verset" href="${hrefFor(parseInt(n, 10))}" title="Verset ${n}">${lead}${n}</a>`);
}

function pageHref(meta, p, n) {
  // Vue page à page interne si le livre en dispose, sinon fac-similé externe (bible.sacy.be)
  if (meta.pageView) return `page-${p}.html${n ? '#v' + n : ''}`;
  const fac = meta.facsimile;
  return fac ? `https://bible.sacy.be/#/${fac.slug}/${p}` : null;
}

function buildFrancais(versets, meta, base, hasDoubleSens) {
  SACY_PREV_SOURCE = null;
  const noteRefMap = {};
  const litRefMap = {};
  const spiRefMap = {};
  versets.forEach(v => {
    if (v.noteVersets && v.noteVersets.length > 1) v.noteVersets.forEach(n => { noteRefMap[n] = v.n; });
    if (v.noteLitteralVersets && v.noteLitteralVersets.length > 1) v.noteLitteralVersets.forEach(n => { litRefMap[n] = v.n; });
    if (v.noteSpirituelVersets && v.noteSpirituelVersets.length > 1) v.noteSpirituelVersets.forEach(n => { spiRefMap[n] = v.n; });
  });

  const rows = [];
  const facHref = facUrl(meta.facsimile);
  const lienPageDebut = facHref
    ? `<a class="ref-page" href="${facHref}" target="_blank" rel="noopener">📖 p. ${meta.facsimile.page}</a>` : '';
  let firstVerse = true;
  let lastP = null;

  for (const v of versets) {
    if (v.section) {
      rows.push(`<div class="section-sep">${v.section}</div>`);
      continue;
    }

    let lienNote;
    if (hasDoubleSens) {
      const litTarget = noteHasContent(v.noteLitteral) ? v.n : (litRefMap[v.n] || null);
      const spiTarget = noteHasContent(v.noteSpirituel) ? v.n : (spiRefMap[v.n] || null);
      const litLien = litTarget ? `<a class="ref-com" href="#com-lit-v${litTarget}" title="Sens littéral">§L</a>` : '';
      const spiLien = spiTarget ? `<a class="ref-com" href="#com-spi-v${spiTarget}" title="Sens spirituel">§S</a>` : '';
      lienNote = litLien + spiLien;
    } else {
      const noteTarget = noteHasContent(v.note) ? v.n : (noteRefMap[v.n] || null);
      lienNote = noteTarget ? `<a class="ref-com" href="#com-v${noteTarget}" title="Commentaire">§</a>` : '';
    }
    // Le fac-similé ne donne que la page de début de chapitre : on ne l'affiche
    // qu'une fois, au premier verset, plutôt que de la répéter partout.
    let lienPage = firstVerse ? lienPageDebut : '';
    if (meta.pageView && v.p && v.p !== lastP) {
      lienPage = `<a class="ref-page" href="${pageHref(meta, v.p, v.n)}" title="Voir la page imprimée">📖 p. ${v.p}</a>`;
    }
    if (v.p) lastP = v.p;
    firstVerse = false;
    const margesHtml = (v.marges && v.marges.length)
      ? `<aside class="verset-marges">${v.marges.map((m, i, arr) => `<span class="marge-item">${renderMarge(m, base, arr, i)}</span>`).join('')}</aside>` : '';
    const nbHtml = (v.nb && v.nb.length)
      ? `<div class="verset-notebas">${v.nb.map(t => `<p>${linkVerses(t, n => '#v' + n)}</p>`).join('')}</div>` : '';

    rows.push(`
    <div class="verset" id="v${v.n}">
      <div class="verset-texte"><sup class="vnum">${v.n}</sup> ${v.fr || '<span class="manquant">[traduction]</span>'}${lienNote}${lienPage}</div>${margesHtml}
      <div class="verset-latin">${v.lat || ''}</div>${nbHtml}
    </div>`);
  }
  return rows.join('');
}

// ── Commentaire ────────────────────────────────────────────────────────────────

function buildCommentaire(versets, meta, base, field, versetsField, prefix) {
  SACY_PREV_SOURCE = null;
  field = field || 'note';
  versetsField = versetsField || 'noteVersets';
  prefix = prefix || '';
  const idPrefix = prefix ? `com-${prefix}-v` : 'com-v';

  const noted = versets.filter(v => !v.section && noteHasContent(v[field]));
  if (noted.length === 0)
    return '<p class="manquant">Ce commentaire n\'a pas encore été saisi.</p>';

  const versetsMap = {};
  versets.forEach(v => { if (!v.section) versetsMap[v.n] = v; });

  const chapRom  = toRoman(meta.chapitre);
  const livreAbr = meta.livreAbr || meta.livreFr.slice(0,2).toUpperCase();
  return noted.map(v => buildNoteRow(v, meta, chapRom, livreAbr, versetsMap, base, field, versetsField, idPrefix)).join('');
}

function buildNoteRow(v, meta, chapRom, livreAbr, versetsMap, base, field, versetsField, idPrefix) {
  field = field || 'note';
  versetsField = versetsField || 'noteVersets';
  idPrefix = idPrefix || 'com-v';
  const noteVal = v[field];
  const vRange = (v[versetsField] && v[versetsField].length > 1) ? v[versetsField] : [v.n];
  const rangeLabel = vRange.length > 1
    ? `${vRange[0]}–${vRange[vRange.length - 1]}`
    : `${v.n}`;

  const citeKey = `${livreAbr} ${chapRom}, ${rangeLabel}`;
  const citeBtn = `<button class="cite-btn" data-cite="${citeKey}">Citer ¶</button>`;
  const head = `<div class="note-verse-head">
    <a class="ref-retour" href="#v${v.n}">↑</a>
    <strong class="vnum-com">${rangeLabel}</strong>${citeBtn}</div>`;

  const quoteVersets = versetsMap
    ? vRange.map(n => versetsMap[n]).filter(Boolean)
    : [];
  const quoteHtml = quoteVersets.length
    ? `<div class="note-verse-quote">${quoteVersets.map(qv =>
        `<p class="note-quote-line"><span class="note-quote-num">${qv.n}.</span> ${qv.fr || ''}</p>`
      ).join('')}</div>`
    : '';

  let parasHtml;
  if (typeof noteVal === 'string') {
    parasHtml = buildParaRow(noteVal, v.marges || [], base);
  } else {
    let lp = null;
    parasHtml = noteVal.map(para => {
      let pl = '';
      if (meta.pageView && para.p && para.p !== lp) pl = `<a class="ref-page note-page" href="${pageHref(meta, para.p, null)}" title="Voir la page imprimée">📖 p. ${para.p}</a>`;
      if (para.p) lp = para.p;
      return buildParaRow(para.texte, para.marges || [], base, pl);
    }).join('');
  }
  return `<div class="note-row" id="${idPrefix}${v.n}">${head}${quoteHtml}${parasHtml}</div>`;
}

function buildParaRow(texte, marges, base, pageLink) {
  const hasMarges = marges && marges.length > 0;
  const margesHtml = hasMarges
    ? `<aside class="note-para-marges">` +
      marges.map((m, i, arr) => `<span class="marge-item">${renderMarge(m, base, arr, i)}</span>`).join('') +
      `</aside>`
    : '';
  return `<div class="note-para-row${hasMarges ? ' has-marges' : ''}">` +
    `<p class="note-para-text">${pageLink || ''}${SACY_CURRENT_CHAP ? linkVerses(texte, SACY_VERSE_HREF) : texte}</p>${margesHtml}</div>`;
}

// ── Latin optionnel (persisté dans l'URL) ─────────────────────────────────────

function setupLatinToggle() {
  const btn = document.getElementById('latin-toggle');
  const col = document.querySelector('.col-francais');
  if (!btn || !col) return;

  const params = new URLSearchParams(window.location.search);
  const show = params.get('lat') === '1';
  col.classList.toggle('show-latin', show);
  btn.classList.toggle('active', show);
  btn.textContent = show ? 'Masquer le latin' : 'Afficher le latin';

  btn.addEventListener('click', () => {
    const next = !col.classList.contains('show-latin');
    col.classList.toggle('show-latin', next);
    btn.classList.toggle('active', next);
    btn.textContent = next ? 'Masquer le latin' : 'Afficher le latin';

    const p = new URLSearchParams(window.location.search);
    if (next) p.set('lat', '1'); else p.delete('lat');
    const qs = p.toString();
    const url = window.location.pathname + (qs ? '?' + qs : '') + window.location.hash;
    history.replaceState(null, '', url);
  });
}

// ── Liens croisés texte ↔ commentaire ────────────────────────────────────────

function setupCrosslinks() {
  document.addEventListener('click', function (e) {
    const com = e.target.closest('.ref-com[href^="#com-"]');
    if (com) {
      e.preventDefault();
      const el = document.querySelector(com.getAttribute('href'));
      if (el) el.scrollIntoView({ block: 'start' });
    }
    const ret = e.target.closest('.ref-retour[href^="#v"]');
    if (ret) {
      e.preventDefault();
      const el = document.querySelector(ret.getAttribute('href'));
      if (el) el.scrollIntoView({ block: 'start' });
    }
  });
}

// ── Citation ──────────────────────────────────────────────────────────────────

function setupCitations() {
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.cite-btn');
    if (!btn) return;
    e.preventDefault();
    const anchor  = btn.closest('[id]');
    const text    = `Bible de Sacy, ${btn.dataset.cite}. ${location.href.split('#')[0]}${anchor ? '#' + anchor.id : ''}`;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = '✓ Copié';
      setTimeout(() => { btn.textContent = orig; }, 2200);
    }).catch(() => { prompt('Référence :', text); });
  });
}

// ── Utilitaire DOM ────────────────────────────────────────────────────────────

function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}


// ── Vue page à page : image du scan en regard de la transcription ───────────────

function renderPage(data) {
  const { meta, page } = data;
  const base = siteBase();
  SACY_CURRENT_BOOK = { slug: meta.livre, fr: meta.livreFr };
  const abr = meta.livreAbr || meta.livreFr;
  const lab = typeof page.imprime === 'string' ? page.imprime : page.p;     // chiffre romain pour les pages liminaires
  document.title = `${abr} — p. ${lab} — Bible de Sacy`;
  setText('.breadcrumb-livre', `${abr} · page ${lab}`);

  const img = document.querySelector('.pf-image img');
  if (img) { img.src = meta.imageUrl; img.alt = `Scan de la page ${page.p}`; }
  const full = document.querySelector('.pf-fullsize');
  if (full) full.href = meta.imageUrl;
  const sacy = document.querySelector('.pf-sacy');
  if (sacy) sacy.href = `https://bible.sacy.be/#/${meta.facSlug}/${page.p}`;

  const chRef = (ch, n) => `ch${pad2(ch)}.html${n ? '#v' + n : ''}`;
  const impr = (page.imprime && typeof page.imprime !== 'string' && page.imprime !== page.p)
    ? ` <span class="pf-imprime" title="Numéro imprimé sur la page : ${page.imprime}">(imprimée « ${page.imprime} »)</span>` : '';
  setText('.pf-num', `Page ${lab}`);
  const numEl = document.querySelector('.pf-num');
  if (numEl && impr) numEl.insertAdjacentHTML('beforeend', impr);

  document.querySelectorAll('.pf-prev').forEach(a => {
    if (meta.prev != null) { a.href = `page-${meta.prev}.html`; a.textContent = `← p. ${meta.prevLabel ?? meta.prev}`; } else a.style.visibility = 'hidden';
  });
  document.querySelectorAll('.pf-next').forEach(a => {
    if (meta.next != null) { a.href = `page-${meta.next}.html`; a.textContent = `p. ${meta.nextLabel ?? meta.next} →`; } else a.style.visibility = 'hidden';
  });

  SACY_PREV_SOURCE = null;
  SACY_VERSE_HREF = n => chRef(SACY_CURRENT_CHAP || page.chapitre, n);
  const parts = [];
  if (page.coupureDebut) parts.push(`<p class="pf-suite">↩ suite de la page précédente</p>`);
  (page.titres || []).forEach(t => parts.push(`<h3 class="pf-titre">${t}</h3>`));
  if (page.sommaire) parts.push(`<p class="pf-sommaire">${page.sommaire}</p>`);

  const margesByVerse = {};
  (page.margesBible || []).forEach(mb => (mb.versets || []).forEach(n => {
    (margesByVerse[n] = margesByVerse[n] || []).push(...(mb.marges || []));
  }));
  (page.versets || []).forEach(v => {
    SACY_CURRENT_CHAP = v.chapitre || page.chapitre;
    const ms = margesByVerse[v.n] || [];
    const msHtml = ms.length
      ? `<aside class="pf-marges">${ms.map((m, i, arr) => `<span class="marge-item">${renderMarge(m, base, arr, i)}</span>`).join('')}</aside>` : '';
    const ref = v.n != null ? `<a class="pf-vnum" href="${chRef(v.chapitre, v.n)}" title="Voir ce verset dans le chapitre">${v.n}</a>` : '<span class="pf-vnum">…</span>';
    parts.push(`<div class="pf-verset" id="v${v.n}">
      <div class="pf-fr">${ref} ${v.fr || ''}</div>
      <div class="pf-lat">${v.lat || ''}</div>${msHtml}</div>`);
  });
  (page.notesBas || []).forEach(t => parts.push(`<p class="pf-notebas">${linkVerses(t, n => chRef(((page.versets || []).slice(-1)[0] || {}).chapitre || page.chapitre, n))}</p>`));

  let senPrec = null;
  (page.commentaire || []).forEach(c => {
    if (c.sens && c.sens !== 'N' && c.sens !== senPrec) {
      parts.push(`<p class="pf-sens pf-sens-${c.sens}">${c.sens === 'L' ? 'Sens littéral' : 'Sens spirituel'}</p>`);
    }
    senPrec = c.sens || senPrec;
    const vs = c.versets || [];
    const ch = (page.versets && page.versets.length ? page.versets[page.versets.length - 1].chapitre : page.chapitre) || page.chapitre;
    const head = vs.length
      ? `<div class="note-verse-head"><strong class="vnum-com"><a href="${chRef(ch, vs[0])}">${abr} ${toRoman(ch)}, ${vs.length > 1 ? vs[0] + '–' + vs[vs.length - 1] : vs[0]}</a></strong></div>` : '';
    SACY_CURRENT_CHAP = ch;
    parts.push(`<div class="note-row">${head}${buildParaRow(c.texte, c.marges || [], base)}</div>`);
  });
  (page.texteGeneral || []).forEach(t => parts.push(`<p class="pf-general">${t}</p>`));
  if (page.coupureFin) parts.push(`<p class="pf-suite">suite page suivante ↪</p>`);
  if (!parts.length || (!(page.versets || []).length && !(page.commentaire || []).length && !(page.titres || []).length && !page.sommaire))
    parts.push(`<p class="manquant">Page sans texte.</p>`);
  document.querySelector('.pf-texte-body').innerHTML = parts.join('');

  const chaps = [...new Set((page.versets || []).map(v => v.chapitre).concat([page.chapitre]).filter(ch => ch != null))];
  const cl = document.querySelector('.pf-chapitres');
  if (cl) cl.innerHTML = chaps.map(ch => ch === 0
    ? `<a class="btn" href="index.html">Préface</a>`
    : `<a class="btn" href="${chRef(ch)}">${abr} ${toRoman(ch)}</a>`).join(' ');

  document.addEventListener('keydown', e => {
    if (e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowLeft' && meta.prev != null) location.href = `page-${meta.prev}.html`;
    if (e.key === 'ArrowRight' && meta.next != null) location.href = `page-${meta.next}.html`;
  });
  setupCrosslinks();
  highlightSidebarCurrent(meta.livre, page.chapitre === 0 ? null : page.chapitre);
}
