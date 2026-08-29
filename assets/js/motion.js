/* ═══ MOTION : reveal, split text, sparkle, cursor, tilt ══════ */
(() => {
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 1. pecah judul hero jadi huruf ───────────────────────── */
  $$("[data-split]").forEach((el) => {
    const txt = el.textContent.trim();
    el.textContent = "";
    [...txt].forEach((ch, i) => {
      const s = document.createElement("span");
      s.className = "ch" + (ch === " " ? " ch--space" : "");
      s.style.setProperty("--i", i);
      s.textContent = ch === " " ? " " : ch;
      el.appendChild(s);
    });
  });

  /* ── 2. scroll reveal ─────────────────────────────────────── */
  const revealAll = () => $$(".reveal").forEach((el) => el.classList.add("is-in"));

  if (REDUCED) {
    revealAll();
  } else {
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    const watch = (el) => {
      if (el.dataset.d) el.style.setProperty("--d", el.dataset.d);
      io.observe(el);
    };
    $$(".reveal, .timeline, .sweep").forEach(watch);

    /* elemen yang dirender belakangan oleh render.js */
    requestAnimationFrame(() => $$(".reveal:not(.is-in)").forEach(watch));
  }
  /* ── 3. taburan sparkle di hero ───────────────────────────── */
  const sparkBox = $("#heroSparks");
  if (sparkBox && !REDUCED) {
    const spots = [
      [12, 22, 26], [78, 14, 18], [88, 62, 30], [8, 74, 20],
      [42, 8, 14], [64, 86, 22], [30, 92, 16], [95, 34, 13]
    ];
    sparkBox.innerHTML = spots.map(([l, t, s], i) => `
      <svg viewBox="0 0 40 40" width="${s}" height="${s}"
           style="left:${l}%;top:${t}%;--dur:${6 + (i % 4) * 1.4}s;--del:${i * .45}s;
                  opacity:${0.18 + (i % 3) * 0.1}">
        <use href="#spark"/>
      </svg>`).join("");
  }

  /* ── 4. bar progres scroll ────────────────────────────────── */
  const bar = $("#progressBar");
  if (bar) {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── 5. titik kursor ──────────────────────────────────────── */
  const dot = $("#cursorDot");
  if (dot && matchMedia("(hover: hover)").matches) {
    let tx = 0, ty = 0, cx = 0, cy = 0, on = false;

    addEventListener("pointermove", (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!on) { on = true; cx = tx; cy = ty; dot.classList.add("is-on"); }
      const hot = e.target.closest("a, button, .word, .sw, .chip, .mnode, .card");
      dot.classList.toggle("is-hot", !!hot);
    }, { passive: true });

    (function loop() {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      dot.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(loop);
    })();
  }
  /* ── 6. tilt 3D pada kartu foto ───────────────────────────── */
  if (matchMedia("(hover: hover)").matches && !REDUCED) {
    $$("[data-tilt]").forEach((el) => {
      el.addEventListener("pointerenter", () => {
        el.style.transition = "transform .18s var(--e-soft)";
      });
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width  - 0.5;
        const py = (e.clientY - r.top)  / r.height - 0.5;
        el.style.transform =
          `perspective(820px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transition = "transform .6s var(--e-out)";
        el.style.transform  = "";
      });
    });
  }

  /* ── 7. parallax lembut di hero ───────────────────────────── */
  const hero = $(".hero");
  const grid = $(".hero__grid");
  if (hero && !REDUCED && matchMedia("(hover: hover)").matches) {
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width  - 0.5;
      const py = (e.clientY - r.top)  / r.height - 0.5;
      if (sparkBox) sparkBox.style.transform =
        `translate(${px * -26}px, ${py * -18}px)`;
      if (grid) grid.style.backgroundPosition =
        `${px * -14}px ${py * -14}px`;
    }, { passive: true });

    hero.addEventListener("pointerleave", () => {
      if (sparkBox) sparkBox.style.transform = "";
      if (grid) grid.style.backgroundPosition = "";
    });
  }
})();
