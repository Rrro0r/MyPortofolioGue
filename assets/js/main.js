/* ═══ MAIN : navigasi, menu mobile, tab resume ════════════════ */
(() => {
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ── 1. navbar menempel saat discroll ─────────────────────── */
  const nav = $("#nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-stuck", scrollY > 24);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── 2. tautan aktif mengikuti section ────────────────────── */
  const links = $$(".nav__link");
  const secs  = links
    .map((a) => $(a.getAttribute("href")))
    .filter(Boolean);

  if (secs.length) {
    const spy = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = "#" + en.target.id;
        links.forEach((a) => a.classList.toggle("is-active",
          a.getAttribute("href") === id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach((s) => spy.observe(s));
  }

  /* ── 3. menu mobile ───────────────────────────────────────── */
  const burger = $("#burger");
  const mmenu  = $("#mobileMenu");

  if (burger && mmenu) {
    $$(".mmenu__link", mmenu).forEach((a, i) => a.style.setProperty("--i", i));

    const setMenu = (open) => {
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
      document.body.style.overflow = open ? "hidden" : "";
      if (open) {
        mmenu.hidden = false;
        requestAnimationFrame(() => mmenu.classList.add("is-open"));
      } else {
        mmenu.classList.remove("is-open");
        setTimeout(() => { mmenu.hidden = true; }, 340);
      }
    };
    burger.addEventListener("click", () =>
      setMenu(burger.getAttribute("aria-expanded") !== "true"));

    $$(".mmenu__link", mmenu).forEach((a) =>
      a.addEventListener("click", () => setMenu(false)));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
        setMenu(false);
      }
    });

    /* tutup otomatis kalau layar dilebarkan ke desktop */
    matchMedia("(min-width: 901px)").addEventListener("change", (e) => {
      if (e.matches) setMenu(false);
    });
  }

  /* ── 4. tab resume ────────────────────────────────────────── */
  const tabs   = $$(".rtab");
  const panels = $$(".rpanel");

  if (tabs.length && panels.length) {
    const strip = tabs[0].parentElement;

    /* di mobile daftar tab bergulir horizontal — bawa tab aktif ke tengah */
    const keepInView = (t) => {
      if (!strip || strip.scrollWidth <= strip.clientWidth + 4) return;
      const sr = strip.getBoundingClientRect();
      const tr = t.getBoundingClientRect();
      strip.scrollTo({
        left: strip.scrollLeft + (tr.left - sr.left) - (sr.width - tr.width) / 2,
        behavior: "smooth"
      });
    };

    const select = (i) => {
      tabs.forEach((t, j) => {
        const on = i === j;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
      });
      keepInView(tabs[i]);
      panels.forEach((p, j) => {
        p.hidden = i !== j;
        if (i === j) {
          p.classList.remove("is-swap");
          void p.offsetWidth;          /* paksa ulang animasi */
          p.classList.add("is-swap");
        }
      });
    };

    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(i));
      t.addEventListener("keydown", (e) => {
        const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (!step) return;
        e.preventDefault();
        const n = (i + step + tabs.length) % tabs.length;
        select(n);
        tabs[n].focus();
      });
    });
  }
  /* ── 5. peringatan bila data belum diisi ──────────────────── */
  const P = (window.CONTENT || {}).profile || {};
  if (/Nama Lengkap Kamu/i.test(P.name || "")) {
    console.info(
      "%c⚑ Data masih placeholder — isi file data/content.js",
      "background:#1B2FE8;color:#fff;padding:4px 8px;border-radius:4px"
    );
  }
})();
