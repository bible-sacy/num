const SACY_PUBLISHED = ["luc", "marc"];
// render.js — moteur de rendu commun (accueil, sommaire, chapitres, pages-livres, recherche)

(function () {
  const t = localStorage.getItem('sacy-theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
})();

// ── Références bibliques ─────────────────────────────────────────────────────

const BIBLE_BOOKS = {
  'Gen':{slug:'genese',fr:'Genèse'},'Gn':{slug:'genese',fr:'Genèse'},
  'Ex':{slug:'exode',fr:'Exode'},'Exod':{slug:'exode',fr:'Exode'},
  'Lv':{slug:'levitique',fr:'Lévitique'},'Lev':{slug:'levitique',fr:'Lévitique'},
  'Nb':{slug:'nombres',fr:'Nombres'},'Num':{slug:'nombres',fr:'Nombres'},
  'Dt':{slug:'deuteronome',fr:'Deutéronome'},'Deut':{slug:'deuteronome',fr:'Deutéronome'},
  'Jos':{slug:'josue',fr:'Josué'},
  'Jg':{slug:'juges',fr:'Juges'},'Jug':{slug:'juges',fr:'Juges'},
  'Rt':{slug:'ruth',fr:'Ruth'},'Ruth':{slug:'ruth',fr:'Ruth'},
  'Reg':{slug:'rois',fr:'Rois',num:true},
  'Esd':{slug:'esdras',fr:'Esdras'},
  'Neh':{slug:'nehemie',fr:'Néhémie'},
  'Esth':{slug:'esther',fr:'Esther'},
  'Tob':{slug:'tobie',fr:'Tobie'},
  'Jdt':{slug:'judith',fr:'Judith'},
  'Mac':{slug:'maccabees',fr:'Maccées',num:true},
  'Job':{slug:'job',fr:'Job'},
  'Ps':{slug:'psaumes',fr:'Ps'},
  'Prov':{slug:'proverbes',fr:'Proverbes'},
  'Eccl':{slug:'ecclesiaste',fr:'Ecclésiaste'},
  'Cant':{slug:'cantique',fr:'Cantique'},
  'Sap':{slug:'sagesse',fr:'Sagesse'},'Sag':{slug:'sagesse',fr:'Sagesse'},
  'Sir':{slug:'siracide',fr:'Siracide'},'Eccli':{slug:'siracide',fr:'Siracide'},
  'Is':{slug:'isaie',fr:'Isaïe'},
  'Jr':{slug:'jeremie',fr:'Jérémie'},'Jer':{slug:'jeremie',fr:'Jérémie'},
  'Lam':{slug:'lamentations',fr:'Lamentations'},
  'Bar':{slug:'baruch',fr:'Baruch'},
  'Ez':{slug:'ezechiel',fr:'Ézéchiel'},'Ezech':{slug:'ezechiel',fr:'Ézéchiel'},
  'Dan':{slug:'daniel',fr:'Daniel'},
  'Os':{slug:'osee',fr:'Osée'},
  'Jl':{slug:'joel',fr:'Joël'},
  'Am':{slug:'amos',fr:'Amos'},
  'Ab':{slug:'abdias',fr:'Abdias'},
  'Jon':{slug:'jonas',fr:'Jonas'},
  'Mi':{slug:'michee',fr:'Michée'},
  'Na':{slug:'nahum',fr:'Nahum'},
  'Ha':{slug:'habacuc',fr:'Habacuc'},
  'So':{slug:'sophonie',fr:'Sophonie'},
  'Ag':{slug:'aggee',fr:'Aggeé'},
  'Za':{slug:'zacharie',fr:'Zacharie'},
  'Ml':{slug:'malachie',fr:'Malachie'},
  'Mt':{slug:'matthieu',fr:'Matthieu'},'Matth':{slug:'matthieu',fr:'Matthieu'},
  'Mc':{slug:'marc',fr:'Marc'},'Marc':{slug:'marc',fr:'Marc'},
  'Lc':{slug:'luc',fr:'Luc'},'Luc':{slug:'luc',fr:'Luc'},
  'Jn':{slug:'jean',fr:'Jean'},'Jo':{slug:'jean',fr:'Jean'},'Joan':{slug:'jean',fr:'Jean'},
  'Act':{slug:'actes',fr:'Actes'},'Ac':{slug:'actes',fr:'Actes'},
  'Rm':{slug:'romains',fr:'Romains'},'Rom':{slug:'romains',fr:'Romains'},
  'Co':{slug:'corinthiens',fr:'Corinthiens',num:true},'Cor':{slug:'corinthiens',fr:'Corinthiens',num:true},
  'Ga':{slug:'galates',fr:'Galates'},'Gal':{slug:'galates',fr:'Galates'},
  'Ep':{slug:'ephesiens',fr:'Éphésiens'},'Eph':{slug:'ephesiens',fr:'Éphésiens'},
  'Ph':{slug:'philippiens',fr:'Philippiens'},'Phil':{slug:'philippiens',fr:'Philippiens'},
  'Col':{slug:'colossiens',fr:'Colossiens'},
  'Th':{slug:'thessaloniciens',fr:'Thessaloniciens',num:true},
  'Tim':{slug:'timothee',fr:'Timothée',num:true},
  'Tt':{slug:'tite',fr:'Tite'},'Tit':{slug:'tite',fr:'Tite'},
  'Phm':{slug:'philemon',fr:'Philémon'},
  'Heb':{slug:'hebreux',fr:'Hébreux'},'Hebr':{slug:'hebreux',fr:'Hébreux'},
  'Jc':{slug:'jacques',fr:'Jacques'},'Jac':{slug:'jacques',fr:'Jacques'},
  'Jud':{slug:'jude',fr:'Jude'},
  'Ap':{slug:'apocalypse',fr:'Apocalypse'},'Apoc':{slug:'apocalypse',fr:'Apocalypse'},
  // Abréviations rencontrées dans les marges de l'édition de 1759
  'Matt':{slug:'matthieu',fr:'Matthieu'},'Mat':{slug:'matthieu',fr:'Matthieu'},
  'Isai':{slug:'isaie',fr:'Isaïe'},'Isa':{slug:'isaie',fr:'Isaïe'},
  'Jerem':{slug:'jeremie',fr:'Jérémie'},'Genes':{slug:'genese',fr:'Genèse'},
  'Psal':{slug:'psaumes',fr:'Ps'},'Levit':{slug:'levitique',fr:'Lévitique'},'Levitic':{slug:'levitique',fr:'Lévitique'},
  'Ephes':{slug:'ephesiens',fr:'Éphésiens'},'Coloss':{slug:'colossiens',fr:'Colossiens'},
  'Galat':{slug:'galates',fr:'Galates'},'Philip':{slug:'philippiens',fr:'Philippiens'},
  'Mich':{slug:'michee',fr:'Michée'},'Mal':{slug:'malachie',fr:'Malachie'},
  'Osée':{slug:'osee',fr:'Osée'},'Osee':{slug:'osee',fr:'Osée'},
  'Jacob':{slug:'jacques',fr:'Jacques'},'Daniel':{slug:'daniel',fr:'Daniel'},
  'Petr':{slug:'pierre',fr:'Pierre',num:true},'Paral':{slug:'paralipomenes',fr:'Paralipomènes',num:true},
  'Thess':{slug:'thessaloniciens',fr:'Thessaloniciens',num:true},
  // renvois à l'intérieur du même livre
  'Sup':{same:true},'Supra':{same:true},'Infr':{same:true},'Infrà':{same:true},'Infra':{same:true},
};
let SACY_CURRENT_BOOK = null;
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
    /^((?:[IVX]+|[1-4])\.?\s+)?([A-Za-zÀ-ÿ]+)\.?\s+([IVXLCD]+|\d+)(?:\s*[.,]\s*(\d+))?/
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
  const slug = slugify(marge);
  return `<a href="${base}biblio.html#${slug}" class="marge-link marge-extern">${marge}</a>`;
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
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => runSidebarSearch(input.value, resultsBox), 150);
    });
    document.addEventListener('click', (e) => {
      if (!resultsBox.contains(e.target) && e.target !== input) resultsBox.hidden = true;
    });
  }
}

function runSidebarSearch(query, resultsBox) {
  query = query.trim();
  if (query.length < 2 || typeof SACY_SEARCH_INDEX === 'undefined') {
    resultsBox.hidden = true;
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

  if (typeof SACY_LIVRE !== 'undefined') { renderLivre(SACY_LIVRE); return; }
  if (typeof SACY_DATA  !== 'undefined') { renderChapitre(SACY_DATA); return; }
  if (typeof SACY_PAGE  !== 'undefined') { renderPage(SACY_PAGE); return; }
});

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
    if (columns) columns.classList.add('triple', 'show-litteral');
    const comCol = document.querySelector('.col-commentaire');
    if (comCol) comCol.hidden = true;

    const litCol = document.querySelector('.col-litteral');
    const spiCol = document.querySelector('.col-spirituel');
    if (litCol) {
      litCol.hidden = false;
      const t = litCol.querySelector('.litteral-texte');
      if (t) t.innerHTML = buildCommentaire(versets, meta, base, 'noteLitteral', 'noteLitteralVersets', 'lit');
    }
    if (spiCol) {
      spiCol.hidden = false;
      const t = spiCol.querySelector('.spirituel-texte');
      if (t) t.innerHTML = buildCommentaire(versets, meta, base, 'noteSpirituel', 'noteSpirituelVersets', 'spi');
    }
    document.querySelectorAll('.sens-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sens-btn').forEach(b => b.classList.toggle('active', b === btn));
        columns.classList.toggle('show-litteral', btn.dataset.sens === 'litteral');
        columns.classList.toggle('show-spirituel', btn.dataset.sens === 'spirituel');
      });
    });
  } else {
    const comTexte = document.querySelector('.col-commentaire .commentaire-texte');
    if (comTexte) comTexte.innerHTML = buildCommentaire(versets, meta, base);
  }

  setupLatinToggle();
  setupCrosslinks();
  setupCitations();
  highlightSidebarCurrent(meta.livre, meta.chapitre);
}

// ── Colonne française (versets, latin optionnel, renvois) ────────────────────

function pageHref(meta, p, n) {
  // Vue page à page interne si le livre en dispose, sinon fac-similé externe (bible.sacy.be)
  if (meta.pageView) return `page-${p}.html${n ? '#v' + n : ''}`;
  const fac = meta.facsimile;
  return fac ? `https://bible.sacy.be/#/${fac.slug}/${p}` : null;
}

function buildFrancais(versets, meta, base, hasDoubleSens) {
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
      ? `<div class="verset-notebas">${v.nb.map(t => `<p>${t}</p>`).join('')}</div>` : '';

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
    `<p class="note-para-text">${pageLink || ''}${texte}</p>${margesHtml}</div>`;
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
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const ret = e.target.closest('.ref-retour[href^="#v"]');
    if (ret) {
      e.preventDefault();
      const el = document.querySelector(ret.getAttribute('href'));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  (page.notesBas || []).forEach(t => parts.push(`<p class="pf-notebas">${t}</p>`));

  (page.commentaire || []).forEach(c => {
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
