// ============================================================
// ASCG — Centre Socioculturel de Ganges : JS partagé
// nav, reveals, compteurs, jauge de collecte, carrousel,
// onglets, lightbox. Aucune dépendance externe.
// ============================================================
(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const euros = (n) =>
    n.toLocaleString("fr-FR", { maximumFractionDigits: 0 }) + " €";

  // ---------- Année du pied de page ----------
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Menu mobile ----------
  const toggle = $(".nav-toggle");
  const links = $(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
    });
    $$("a", links).forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", false);
      })
    );
  }

  // ---------- En-tête + barre de progression ----------
  const header = $(".site-header");
  const progress = $("#progress");
  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 20);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Apparitions au défilement ----------
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  // ---------- Compteurs animés (data-count / data-count-euros) ----------
  function animateCount(el) {
    const target = parseFloat(el.dataset.count || el.dataset.countEuros || 0);
    const asEuros = "countEuros" in el.dataset;
    const dur = 1600;
    const t0 = performance.now();
    function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = asEuros ? euros(val) : val.toLocaleString("fr-FR");
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const ioCount = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCount(e.target);
          ioCount.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  // ---------- Collecte : injecte les chiffres de collecte.js ----------
  const C = window.COLLECTE;
  if (C) {
    $$("[data-collecte]").forEach((el) => {
      const key = el.dataset.collecte;
      if (key === "collecte" || key === "objectif") {
        el.dataset.countEuros = C[key];
        el.textContent = "0 €";
        ioCount.observe(el);
      } else if (key === "donateurs") {
        el.dataset.count = C[key];
        el.textContent = "0";
        ioCount.observe(el);
      } else if (key === "pourcent") {
        el.textContent = Math.max(1, Math.round((C.collecte / C.objectif) * 100)) + " %";
      } else if (key === "maj") {
        el.textContent = C.maj;
      } else if (key === "url") {
        el.href = C.url;
      } else if (key === "partage") {
        const msg =
          "As-salamou alaykoum ! Soutenez la construction du centre socioculturel de Ganges — chaque pierre compte : " +
          C.url;
        el.href = "https://wa.me/?text=" + encodeURIComponent(msg);
      }
    });

    // Jauges
    const ioGauge = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.width =
              Math.max(1.5, (C.collecte / C.objectif) * 100) + "%";
            ioGauge.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    $$(".gauge-fill").forEach((el) => ioGauge.observe(el));
  }

  // Compteurs autonomes (hors collecte)
  $$("[data-count]").forEach((el) => {
    if (!el.dataset.collecte) ioCount.observe(el);
  });

  // ---------- Carrousel ----------
  $$(".carousel").forEach((root) => {
    const track = $(".carousel-track", root);
    const slides = $$(".carousel-slide", root);
    const dotsBox = $(".carousel-dots", root);
    const prev = $("[data-prev]", root);
    const next = $("[data-next]", root);
    if (!track || slides.length < 2) return;

    let index = 0;
    let timer = null;

    const dots = slides.map((_, i) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", "Aller au visuel " + (i + 1));
      b.addEventListener("click", () => go(i));
      dotsBox.appendChild(b);
      return b;
    });

    function go(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      dots.forEach((d, j) => d.classList.toggle("active", j === index));
    }

    function play() {
      stop();
      timer = setInterval(() => go(index + 1), 5000);
    }
    function stop() {
      if (timer) clearInterval(timer);
    }

    prev && prev.addEventListener("click", () => { go(index - 1); play(); });
    next && next.addEventListener("click", () => { go(index + 1); play(); });
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", play);

    // Glisser (tactile + souris)
    let startX = null;
    track.addEventListener("pointerdown", (e) => {
      startX = e.clientX;
      stop();
    });
    window.addEventListener("pointerup", (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      startX = null;
      play();
    });

    go(0);
    play();
  });

  // ---------- Onglets ----------
  const tabsNav = $(".tabs-nav");
  if (tabsNav) {
    const buttons = $$("button", tabsNav);
    const panels = $$(".tab-panel");
    function openTab(id) {
      buttons.forEach((b) => b.classList.toggle("active", b.dataset.tab === id));
      panels.forEach((p) => p.classList.toggle("active", p.id === id));
    }
    buttons.forEach((b) => b.addEventListener("click", () => {
      openTab(b.dataset.tab);
      history.replaceState(null, "", "#" + b.dataset.tab);
    }));
    // Ouvre l'onglet indiqué dans l'URL (ex. activites.html#enfants)
    const fromHash = location.hash.slice(1);
    if (fromHash && panels.find((p) => p.id === fromHash)) openTab(fromHash);
    else if (buttons[0]) openTab(buttons[0].dataset.tab);
  }

  // ---------- Lightbox ----------
  const lb = $("#lightbox");
  if (lb) {
    const lbImg = $("img", lb);
    $$("[data-zoom] img, .gallery-item img, .plan-card img").forEach((img) =>
      img.addEventListener("click", () => {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lb.classList.add("open");
        lb.setAttribute("aria-hidden", false);
      })
    );
    function closeLb() {
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", true);
    }
    lb.addEventListener("click", closeLb);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLb();
    });
  }
})();
