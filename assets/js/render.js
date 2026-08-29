/* ═══ RENDER : mengisi seluruh halaman dari data/content.js ═══ */
(() => {
  const C = window.CONTENT || CONTENT;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ambil nilai lewat jalur bertitik, mis. "profile.name" */
  const get = (path) => path.split(".").reduce((o, k) => (o ?? {})[k], C);

  const esc = (s) => String(s ?? "").replace(/[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const initialsOf = (nama) =>
    String(nama || "").trim().split(/\s+/).slice(0, 2)
      .map((w) => w[0] || "").join("").toUpperCase() || "?";

  /* ── 1. teks & gambar sederhana ───────────────────────────── */
  $$("[data-bind]").forEach((el) => {
    const v = get(el.dataset.bind);
    if (v != null && v !== "") el.textContent = v;
  });

  const FALLBACK_IMG = "assets/img/placeholder.svg";

  $$("[data-src-bind]").forEach((el) => {
    const v = get(el.dataset.srcBind);
    el.src = v || FALLBACK_IMG;
    el.addEventListener("error", () => {
      if (!el.src.endsWith(FALLBACK_IMG)) el.src = FALLBACK_IMG;
    });
  });

  const P = C.profile || {};
  const mark = $(".nav__mark");
  if (mark && !P.initials) mark.textContent = initialsOf(P.name);

  const footFile = $("#footFile");
  if (footFile && P.fileName) footFile.textContent = P.fileName;

  document.title = `${P.name || "Portofolio"} — TelUtizen StarterBook 2026`;
  /* ── 2. kartu identitas ───────────────────────────────────── */
  const idList = $("#identityList");
  if (idList) {
    idList.innerHTML = [
      ["NIM / No. Registrasi", P.nim],
      ["Kelompok / Gugus",     P.gugus],
      ["Program Studi",        P.prodi],
      ["Fakultas",             P.fakultas],
      ["Asal Daerah",          P.asal]
    ].map(([k, v]) => `
      <div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  }

  /* ── 3. tiga kata ─────────────────────────────────────────── */
  const wordsBox = $("#wordsList");
  if (wordsBox) {
    wordsBox.innerHTML = (P.tigaKata || []).map((w, i) => `
      <article class="word reveal" data-d="${i + 1}">
        <span class="word__i">0${i + 1} / TIGA KATA</span>
        <b class="word__k">${esc(w.kata)}</b>
        <p class="word__arti">${esc(w.arti)}</p>
      </article>`).join("");
  }

  /* ── 4. hobi ──────────────────────────────────────────────── */
  const hobiBox = $("#hobiList");
  if (hobiBox) {
    hobiBox.innerHTML = (P.hobi || [])
      .map((h) => `<li class="chip">${esc(h)}</li>`).join("");
  }

  /* ── 5. marquee ───────────────────────────────────────────── */
  const mq = $("#marqueeTrack");
  if (mq) {
    const row = (C.marquee || []).map((t) => `<span>${esc(t)}</span>`).join("");
    mq.innerHTML = row + row;   /* digandakan agar putarannya mulus */
  }
  /* ── 6. timeline pengalaman (opsional) ────────────────────── */
  const tlBox   = $("#timelineList");
  const jejakSec = $("#jejak");
  const peng    = (C.pengalaman || []).filter((p) => p && p.judul);
  if (tlBox && jejakSec) {
    if (peng.length) {
      jejakSec.hidden = false;
      tlBox.innerHTML = peng.map((p, i) => `
        <li class="tl reveal" data-d="${i}">
          <span class="tl__year">${esc(p.tahun)}</span>
          <h3 class="tl__title">${esc(p.judul)}</h3>
          <p class="tl__role">${esc(p.peran)}</p>
          <p class="tl__detail">${esc(p.detail)}</p>
        </li>`).join("");
    } else {
      jejakSec.remove();
      $$('.nav__link[href="#jejak"], .mmenu__link[href="#jejak"]')
        .forEach((a) => a.remove());
    }
  }

  /* ── 7. SWOT ──────────────────────────────────────────────── */
  const ACCENT = { S: "#1B2FE8", W: "#F0872E", O: "#0E8FA8", T: "#D3382F" };
  const swotBox = $("#swotGrid");
  if (swotBox) {
    swotBox.innerHTML = (C.swot || []).map((s, i) => `
      <article class="sw reveal" data-d="${i}"
               style="--accent:${ACCENT[s.key] || "#1B2FE8"}">
        <span class="sw__key" aria-hidden="true">${esc(s.key)}</span>
        <span class="sw__badge">${esc(s.key)} · ${esc(s.nama)}</span>
        <h3 class="sw__nama">${esc(s.nama)}</h3>
        <p class="sw__arti">${esc(s.arti)}</p>
        <ul class="sw__list">
          ${(s.items || []).map((it) => `<li>${esc(it)}</li>`).join("")}
        </ul>
      </article>`).join("");
  }
  /* ── 8. Resume : tab + panel ──────────────────────────────── */
  const tabsBox   = $("#resumeTabs");
  const panelsBox = $("#resumePanels");
  const materi    = (C.resume || []).filter((m) => m && m.materi);

  if (tabsBox && panelsBox && materi.length) {
    tabsBox.innerHTML = materi.map((m, i) => `
      <button class="rtab" role="tab" id="rtab-${i}"
              aria-controls="rpanel-${i}" aria-selected="${i === 0}"
              tabindex="${i === 0 ? 0 : -1}">
        <em>${String(i + 1).padStart(2, "0")}</em>
        <b>${esc(m.materi)}</b>
      </button>`).join("");

    panelsBox.innerHTML = materi.map((m, i) => `
      <section class="rpanel" role="tabpanel" id="rpanel-${i}"
               aria-labelledby="rtab-${i}" ${i === 0 ? "" : "hidden"}>
        <header class="rpanel__head">
          <h3 class="rpanel__title">${esc(m.materi)}</h3>
          <div class="rpanel__meta">
            ${m.pemateri ? `<span class="chip">${esc(m.pemateri)}</span>` : ""}
            ${m.tanggal  ? `<span class="chip">${esc(m.tanggal)}</span>`  : ""}
          </div>
        </header>

        <div class="rblock">
          <div class="rblock__h"><i>01</i><p class="label">Poin Utama Materi</p></div>
          <ul>${(m.poinUtama || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>

        <div class="rblock">
          <div class="rblock__h"><i>02</i><p class="label">Hal yang Dipelajari</p></div>
          <ul>${(m.dipelajari || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>

        <div class="rblock rblock--sum">
          <div class="rblock__h"><i>03</i><p class="label">Kesimpulan</p></div>
          <p>${esc(m.kesimpulan)}</p>
        </div>
      </section>`).join("");
  }
})();
