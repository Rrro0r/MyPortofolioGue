/* ═══ MIND OF US : mind map interaktif (drag · zoom · pan) ════ */
(() => {
  const C = window.CONTENT || CONTENT;
  const stage  = document.querySelector(".mou__stage");
  const canvas = document.getElementById("mouCanvas");
  const layer  = document.getElementById("mouNodes");
  const links  = document.getElementById("mouLinks");
  if (!stage || !canvas || !layer || !links) return;

  const P    = C.profile || {};
  const anggota = (C.kelompok || []).filter((m) => m && m.nama).slice(0, 5);

  const esc = (s) => String(s ?? "").replace(/[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const initials = (n) => String(n || "").trim().split(/\s+/).slice(0, 2)
    .map((w) => w[0] || "").join("").toUpperCase() || "?";
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  const view  = { x: 0, y: 0, k: 1 };
  const nodes = [];
  const MIN_K = 0.45, MAX_K = 2.4;

  /* ── bangun node ──────────────────────────────────────────── */
  const avatar = (nama, foto) => foto
    ? `<span class="mnode__av"><img src="${esc(foto)}" alt=""></span>`
    : `<span class="mnode__av">${esc(initials(nama))}</span>`;

  function makeNode(data, isSelf, i) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "mnode" + (isSelf ? " mnode--self" : "");
    el.style.setProperty("--i", i);
    el.setAttribute("aria-label", `Lihat detail ${data.nama}`);
    el.innerHTML = `
      <span class="mnode__top">
        ${avatar(data.nama, data.foto)}
        <span class="mnode__nama">${esc(data.nama)}</span>
      </span>
      <span class="mnode__sub">${esc(data.prodi)}<br>${esc(data.asal)}</span>`;
    layer.appendChild(el);
    const n = { el, data, isSelf, x: 0, y: 0 };
    nodes.push(n);
    return n;
  }
  const self = makeNode({
    nama : P.name,
    prodi: P.prodi,
    asal : P.asal,
    fakultas: P.fakultas,
    hobi : Array.isArray(P.hobi) ? P.hobi.join(", ") : P.hobi,
    funFact: P.funFact,
    foto : P.photo
  }, true, 0);

  anggota.forEach((m, i) => makeNode(m, false, i + 1));

  /* satu path per anggota */
  const paths = anggota.map((_, i) => {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.style.setProperty("--i", i);
    links.appendChild(p);
    return p;
  });

  /* ── tata letak radial ────────────────────────────────────── */
  function layout() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    self.x = w / 2; self.y = h / 2;

    const kids = nodes.filter((n) => !n.isSelf);
    const rx = Math.max(120, w * 0.31);
    const ry = Math.max(110, h * 0.32);

    kids.forEach((n, i) => {
      const a = (-Math.PI / 2) + (i * 2 * Math.PI / Math.max(kids.length, 1));
      n.x = w / 2 + Math.cos(a) * rx;
      n.y = h / 2 + Math.sin(a) * ry;
    });

    view.x = 0; view.y = 0; view.k = 1;
    draw();
  }

  /* ── gambar ───────────────────────────────────────────────── */
  function draw() {
    const t = `translate(${view.x}px, ${view.y}px) scale(${view.k})`;
    layer.style.transform = t;
    links.setAttribute("transform",
      `translate(${view.x} ${view.y}) scale(${view.k})`);

    nodes.forEach((n) => {
      n.el.style.left = n.x + "px";
      n.el.style.top  = n.y + "px";
    });
    nodes.filter((n) => !n.isSelf).forEach((n, i) => {
      const p = paths[i];
      if (!p) return;
      const mx = (self.x + n.x) / 2;
      const my = (self.y + n.y) / 2;
      /* lengkungkan tegak lurus terhadap garis pusat→anggota */
      const dx = n.x - self.x, dy = n.y - self.y;
      const len = Math.hypot(dx, dy) || 1;
      const cx = mx - (dy / len) * len * 0.16;
      const cy = my + (dx / len) * len * 0.16;
      p.setAttribute("d", `M${self.x} ${self.y} Q${cx} ${cy} ${n.x} ${n.y}`);
      p.style.setProperty("--len", Math.round(len * 1.25));
    });
  }

  /* ── zoom ─────────────────────────────────────────────────── */
  function zoomAt(cx, cy, factor) {
    const k2 = clamp(view.k * factor, MIN_K, MAX_K);
    if (k2 === view.k) return;
    view.x = cx - (cx - view.x) * (k2 / view.k);
    view.y = cy - (cy - view.y) * (k2 / view.k);
    view.k = k2;
    draw();
  }

  canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    const r = canvas.getBoundingClientRect();
    zoomAt(e.clientX - r.left, e.clientY - r.top,
           e.deltaY < 0 ? 1.12 : 1 / 1.12);
    hideHint();
  }, { passive: false });

  /* ── pointer : geser node, pan latar, pinch ───────────────── */
  const pts = new Map();
  let drag = null, pan = null, pinch = null, moved = 0;

  canvas.addEventListener("pointerdown", (e) => {
    const nodeEl = e.target.closest(".mnode");
    /* capture bisa gagal (mis. pointer sudah lepas) — jangan hentikan handler */
    try { canvas.setPointerCapture(e.pointerId); } catch { /* abaikan */ }
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved = 0;
    hideHint();

    if (pts.size === 2) {                       /* mulai pinch */
      const [a, b] = [...pts.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) };
      drag = pan = null;
      return;
    }
    if (nodeEl) {
      const n = nodes.find((o) => o.el === nodeEl);
      if (!n) return;
      drag = { n, px: e.clientX, py: e.clientY };
      n.el.classList.add("is-drag");
    } else {
      pan = { px: e.clientX, py: e.clientY };
      canvas.classList.add("is-panning");
    }
  });

  canvas.addEventListener("pointermove", (e) => {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pinch && pts.size >= 2) {
      const [a, b] = [...pts.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const r = canvas.getBoundingClientRect();
      zoomAt((a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top, d / pinch.d);
      pinch.d = d;
      return;
    }

    if (drag) {
      const dx = e.clientX - drag.px, dy = e.clientY - drag.py;
      moved += Math.abs(dx) + Math.abs(dy);
      drag.n.x += dx / view.k;
      drag.n.y += dy / view.k;
      drag.px = e.clientX; drag.py = e.clientY;
      draw();
    } else if (pan) {
      const dx = e.clientX - pan.px, dy = e.clientY - pan.py;
      moved += Math.abs(dx) + Math.abs(dy);
      view.x += dx; view.y += dy;
      pan.px = e.clientX; pan.py = e.clientY;
      draw();
    }
  });

  function endPointer(e) {
    pts.delete(e.pointerId);
    if (pts.size < 2) pinch = null;

    if (drag) {
      drag.n.el.classList.remove("is-drag");
      if (moved < 6) openPanel(drag.n);
      drag = null;
    }
    pan = null;
    canvas.classList.remove("is-panning");
  }
  canvas.addEventListener("pointerup", endPointer);
  canvas.addEventListener("pointercancel", endPointer);
  /* jaring pengaman bila pointer dilepas di luar kanvas */
  addEventListener("pointerup", (e) => { if (pts.has(e.pointerId)) endPointer(e); });

  /* keyboard : Enter / Space membuka detail */
  layer.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const nodeEl = e.target.closest(".mnode");
    const n = nodes.find((o) => o.el === nodeEl);
    if (n) { e.preventDefault(); openPanel(n); }
  });

  /* ── panel detail ─────────────────────────────────────────── */
  const panel = document.getElementById("mouPanel");
  const body  = document.getElementById("mouPanelBody");
  const closeBtn = document.getElementById("mouClose");

  function openPanel(n) {
    if (!panel || !body) return;
    nodes.forEach((o) => o.el.classList.toggle("is-active", o === n));
    paths.forEach((p, i) => {
      const kid = nodes.filter((o) => !o.isSelf)[i];
      p.classList.toggle("is-hot", kid === n);
    });

    const d = n.data;
    body.innerHTML = `
      <p class="label">${n.isSelf ? "Pusat Mind Map" : "Anggota Kelompok"}</p>
      <h3 class="mp__nama">${esc(d.nama)}</h3>
      <dl class="mp__rows">
        <div class="mp__row"><dt>Asal Daerah</dt><dd>${esc(d.asal)}</dd></div>
        <div class="mp__row"><dt>Program Studi</dt><dd>${esc(d.prodi)}</dd></div>
        <div class="mp__row"><dt>Fakultas</dt><dd>${esc(d.fakultas)}</dd></div>
        <div class="mp__row"><dt>Hobi</dt><dd>${esc(d.hobi)}</dd></div>
      </dl>
      <p class="mp__ff"><b>Fun fact — </b>${esc(d.funFact)}</p>`;
    panel.hidden = false;
  }

  function closePanel() {
    if (panel) panel.hidden = true;
    nodes.forEach((o) => o.el.classList.remove("is-active"));
    paths.forEach((p) => p.classList.remove("is-hot"));
  }

  closeBtn?.addEventListener("click", closePanel);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel && !panel.hidden) closePanel();
  });
  /* ── HUD ──────────────────────────────────────────────────── */
  const hint = document.getElementById("mouHint");
  let hintGone = false;
  function hideHint() {
    if (hintGone || !hint) return;
    hintGone = true;
    hint.classList.add("is-gone");
  }

  const center = () => [canvas.clientWidth / 2, canvas.clientHeight / 2];

  document.getElementById("mouZoomIn")
    ?.addEventListener("click", () => zoomAt(...center(), 1.22));
  document.getElementById("mouZoomOut")
    ?.addEventListener("click", () => zoomAt(...center(), 1 / 1.22));

  document.getElementById("mouReset")?.addEventListener("click", () => {
    closePanel();
    layout();
  });

  const fullBtn = document.getElementById("mouFull");
  fullBtn?.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await stage.requestFullscreen();
    } catch { /* browser menolak — abaikan */ }
  });
  document.addEventListener("fullscreenchange", () => {
    if (fullBtn) {
      fullBtn.textContent = document.fullscreenElement ? "Keluar" : "Fullscreen";
    }
    requestAnimationFrame(layout);
  });

  /* ── siklus hidup ─────────────────────────────────────────── */
  layout();

  let rt;
  addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(layout, 160);
  });

  /* animasi masuk saat section terlihat */
  new IntersectionObserver((ents, obs) => {
    ents.forEach((en) => {
      if (!en.isIntersecting) return;
      layout();
      stage.classList.add("is-in");
      obs.disconnect();
    });
  }, { threshold: 0.25 }).observe(stage);
})();
