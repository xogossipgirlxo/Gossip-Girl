const LABELS = { spotted: "Spotted", blast: "Blast", news: "Rumeur", recap: "Récap" };
let currentFilter = "all";
let currentQuery = "";

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

// "il y a 12 min", "il y a 3 h", etc.
function ago(s) {
  const d = new Date(s.replace(" ", "T"));
  const m = Math.round((Date.now() - d.getTime()) / 60000);
  if (isNaN(m) || m < 0) return s;
  if (m < 1) return "à l'instant";
  if (m < 60) return "il y a " + m + " min";
  const h = Math.round(m / 60);
  if (h < 24) return "il y a " + h + " h";
  const j = Math.round(h / 24);
  if (j < 7) return "il y a " + j + " j";
  return s;
}

function setupHeader() {
  document.title = CONFIG.nom;
  const logo = document.getElementById("logo");
  if (logo) logo.textContent = CONFIG.nom;
  const tag = document.getElementById("tagline");
  if (tag) tag.textContent = CONFIG.slogan;
  const tg = document.getElementById("btn-telegram");
  if (tg) {
    if (CONFIG.telegram) tg.href = CONFIG.telegram;
    else tg.style.display = "none";
  }
}

function renderBanner() {
  const b = document.getElementById("banner");
  if (!b || !POSTS.length) return;
  const p = POSTS[0];
  b.innerHTML = "";
  b.appendChild(el("span", "dot"));
  b.appendChild(el("strong", "", "Nouveau blast"));
  b.appendChild(document.createTextNode(" · " + p.titre + " · " + ago(p.date)));
}

function renderPosts() {
  const box = document.getElementById("posts");
  if (!box) return;
  box.innerHTML = "";
  const q = currentQuery.trim().toLowerCase();
  const list = POSTS.filter((p) => {
    if (currentFilter !== "all" && p.type !== currentFilter) return false;
    if (!q) return true;
    return (p.titre + " " + p.texte.join(" ")).toLowerCase().includes(q);
  });
  if (!list.length) {
    box.appendChild(el("div", "empty", q ? "Rien là-dessus. Pour l'instant." : "Rien pour l'instant. Ça ne va pas durer."));
    return;
  }
  list.forEach((p) => {
    const a = el("article");
    const meta = el("div", "meta");
    meta.appendChild(el("span", "tag", LABELS[p.type] || "Post"));
    const t = el("span", "", " · " + ago(p.date));
    t.title = p.date;
    meta.appendChild(t);
    a.appendChild(meta);
    a.appendChild(el("h2", "", p.titre));
    if (p.image) {
      const img = el("img");
      img.src = p.image;
      img.alt = "";
      a.appendChild(img);
    }
    if (p.type === "recap" && CONFIG.accroche) a.appendChild(el("p", "accroche", CONFIG.accroche));
    p.texte.forEach((x) => a.appendChild(el("p", "", x)));
    if (p.tip) a.appendChild(el("div", "source", "Tip reçu d'un(e) lecteur·rice anonyme"));
    a.appendChild(el("div", "sign", CONFIG.signature));
    box.appendChild(a);
  });
}

function setupControls() {
  const chips = document.querySelectorAll(".chip");
  chips.forEach((c) =>
    c.addEventListener("click", () => {
      chips.forEach((x) => x.classList.remove("on"));
      c.classList.add("on");
      currentFilter = c.dataset.f;
      renderPosts();
    })
  );
  const s = document.getElementById("search");
  if (s) s.addEventListener("input", () => { currentQuery = s.value; renderPosts(); });
}

function setupTip() {
  const f = document.getElementById("tally");
  if (!f) return;
  if (CONFIG.tallyId) {
    f.src = "https://tally.so/embed/" + CONFIG.tallyId + "?hideTitle=1&transparentBackground=1&dynamicHeight=1";
  } else {
    f.replaceWith(el("p", "empty", "Le formulaire n'est pas encore branché (voir le guide, étape 4)."));
  }
}

setupHeader();
setupControls();
renderBanner();
renderPosts();
setupTip();
