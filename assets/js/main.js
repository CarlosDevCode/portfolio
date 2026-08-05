/**
 * main.js
 * Renderização orientada a dados (SITE_DATA) + interações da página.
 * Modular por função; cada seção pode ser removida sem quebrar o restante.
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initRevealOnScroll();
    initHeroStats();
    initStack();
    initProjects();
    initTimeline("timeline", SITE_DATA.timeline);
    initTimeline("formationTimeline", SITE_DATA.formation);
    initGithubStats();
    initCertifications();
    initObjectives();
    initContact();
    initToTop();
    initFooter();
  });

  /* ---------------------------------------------------------------- NAV */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const list = document.getElementById("navList");
    if (!toggle || !list) return;

    toggle.addEventListener("click", () => {
      const open = list.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });

    list.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        list.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------- REVEAL UX */
  function initRevealOnScroll() {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((t) => observer.observe(t));
  }

  /* -------------------------------------------------------- HERO STATS */
  function initHeroStats() {
    const years = document.getElementById("statYears");
    const projects = document.getElementById("statProjects");
    if (years) years.textContent = SITE_DATA.stats.yearsStudying;
    if (projects) projects.textContent = SITE_DATA.stats.projectsCount;
  }

  /* --------------------------------------------------------------- STACK */
  function initStack() {
    const tabsEl = document.getElementById("stackTabs");
    const gridEl = document.getElementById("stackGrid");
    if (!tabsEl || !gridEl) return;

    const categories = ["Todas", ...SITE_DATA.stack.categories];
    let active = "Todas";

    function renderTabs() {
      tabsEl.innerHTML = "";
      categories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "stack-tab" + (cat === active ? " is-active" : "");
        btn.textContent = cat;
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", String(cat === active));
        btn.addEventListener("click", () => {
          active = cat;
          renderTabs();
          renderGrid();
        });
        tabsEl.appendChild(btn);
      });
    }

    function renderGrid() {
      gridEl.innerHTML = "";
      const items = SITE_DATA.stack.items.filter(
        (i) => active === "Todas" || i.category === active
      );
      items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "tech-card";
        card.innerHTML = `
          <div class="tech-card-top">
            <span class="tech-name">${escapeHTML(item.name)}</span>
            <span class="tech-time">${escapeHTML(item.time)}</span>
          </div>
          <p class="tech-desc">${escapeHTML(item.desc)}</p>
          <div class="level-bar"><span style="width:${item.level}%"></span></div>
        `;
        gridEl.appendChild(card);
      });
    }

    renderTabs();
    renderGrid();
  }

  /* ----------------------------------------------------------- PROJECTS */
  function initProjects() {
    const gridEl = document.getElementById("projectsGrid");
    const filtersEl = document.getElementById("projectFilters");
    const searchEl = document.getElementById("projectSearch");
    if (!gridEl || !filtersEl || !searchEl) return;

    const statuses = ["Todos", ...new Set(SITE_DATA.projects.map((p) => p.status))];
    let activeStatus = "Todos";
    let query = "";

    function renderFilters() {
      filtersEl.innerHTML = "";
      statuses.forEach((s) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "filter-btn" + (s === activeStatus ? " is-active" : "");
        btn.textContent = s;
        btn.addEventListener("click", () => {
          activeStatus = s;
          renderFilters();
          renderGrid();
        });
        filtersEl.appendChild(btn);
      });
    }

    function renderGrid() {
      gridEl.innerHTML = "";
      const q = query.trim().toLowerCase();
      const items = SITE_DATA.projects.filter((p) => {
        const matchesStatus = activeStatus === "Todos" || p.status === activeStatus;
        const matchesQuery =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.tech.join(" ").toLowerCase().includes(q);
        return matchesStatus && matchesQuery;
      });

      if (!items.length) {
        gridEl.innerHTML = `<p class="section-desc">Nenhum projeto encontrado.</p>`;
        return;
      }

      items.forEach((p) => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.innerHTML = `
          <div class="project-media">
            <span class="project-status">${escapeHTML(p.status)}</span>
          </div>
          <div class="project-body">
            <div class="project-top">
              <h3 class="project-name">${escapeHTML(p.name)}</h3>
              <span class="project-year">${p.year}</span>
            </div>
            <p class="project-desc">${escapeHTML(p.desc)}</p>
            <div class="project-tags">
              ${p.tech.map((t) => `<span class="tag">${escapeHTML(t)}</span>`).join("")}
            </div>
            <div class="project-detail"><strong>Objetivo:</strong> ${escapeHTML(p.objective)}</div>
            <div class="project-detail"><strong>Dificuldade:</strong> ${escapeHTML(p.difficulty)}</div>
            <div class="project-detail"><strong>Aprendizados:</strong> ${escapeHTML(p.learnings)}</div>
            <div class="project-detail"><strong>Problema resolvido:</strong> ${escapeHTML(p.solved)}</div>
            <div class="project-links">
              ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">Código</a>` : ""}
              ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo</a>` : ""}
            </div>
          </div>
        `;
        gridEl.appendChild(card);
      });
    }

    searchEl.addEventListener("input", (e) => {
      query = e.target.value;
      renderGrid();
    });

    renderFilters();
    renderGrid();
  }

  /* ----------------------------------------------------------- TIMELINE */
  function initTimeline(elId, data) {
    const el = document.getElementById(elId);
    if (!el || !data) return;
    el.innerHTML = data
      .map(
        (item) => `
      <div class="timeline-item">
        <div class="timeline-date">${escapeHTML(item.date)}</div>
        <div class="timeline-title">${escapeHTML(item.title)}</div>
        <div class="timeline-desc">${escapeHTML(item.desc)}</div>
      </div>
    `
      )
      .join("");
  }

  /* -------------------------------------------------------- GH STATS */
  async function initGithubStats() {
    const el = document.getElementById("statsGrid");
    const commitsEl = document.getElementById("statCommits");
    if (!el) return;

    const username = SITE_DATA.githubUsername;
    const fallback = [
      { label: "Repositórios públicos", value: "—" },
      { label: "Seguidores", value: "—" },
      { label: "Projetos no portfólio", value: SITE_DATA.stats.projectsCount },
      { label: "Anos de estudo", value: SITE_DATA.stats.yearsStudying },
    ];

    renderStats(fallback);

    try {
      const res = await fetch(`https://api.github.com/users/CarlosDevCode`);
      if (!res.ok) throw new Error("GitHub API indisponível");
      const data = await res.json();
      renderStats([
        { label: "Repositórios públicos", value: data.public_repos ?? "—" },
        { label: "Seguidores", value: data.followers ?? "—" },
        { label: "Projetos no portfólio", value: SITE_DATA.stats.projectsCount },
        { label: "Anos de estudo", value: SITE_DATA.stats.yearsStudying },
      ]);
    } catch (err) {
      // Mantém fallback silenciosamente — não interrompe a experiência.
      console.warn("Não foi possível carregar estatísticas do GitHub:", err);
    }

    if (commitsEl) commitsEl.textContent = "—";

    function renderStats(list) {
      el.innerHTML = list
        .map(
          (s) => `
        <div class="stat-box">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${escapeHTML(s.label)}</div>
        </div>
      `
        )
        .join("");
    }
  }

  /* ------------------------------------------------------ CERTIFICATES */
  function initCertifications() {
    const el = document.getElementById("certGrid");
    if (!el) return;
    el.innerHTML = SITE_DATA.certifications
      .map(
        (c) => `
      <article class="cert-card">
        <span class="cert-name">${escapeHTML(c.name)}</span>
        <span class="cert-org">${escapeHTML(c.org)}</span>
        <span class="cert-year">${c.year}</span>
        <a class="cert-link" href="${c.link}" target="_blank" rel="noopener">Verificar</a>
      </article>
    `
      )
      .join("");
  }

  /* -------------------------------------------------------- OBJECTIVES */
  function initObjectives() {
    const el = document.getElementById("objectivesList");
    if (!el) return;
    el.innerHTML = SITE_DATA.objectives
      .map(
        (o, i) => `
      <div class="objective-row">
        <span class="idx">${String(i + 1).padStart(2, "0")}</span>
        <span class="goal">${escapeHTML(o.goal)}</span>
        <span class="target">${escapeHTML(o.target)}</span>
      </div>
    `
      )
      .join("");
  }

  /* ------------------------------------------------------------ CONTACT */
  function initContact() {
    const emailEl = document.getElementById("emailValue");
    const copyBtn = document.getElementById("copyEmailBtn");
    if (emailEl) emailEl.textContent = SITE_DATA.contact.email;

    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(SITE_DATA.contact.email);
          const original = copyBtn.textContent;
          copyBtn.textContent = "Copiado";
          setTimeout(() => (copyBtn.textContent = original), 1800);
        } catch (err) {
          console.warn("Não foi possível copiar o email:", err);
        }
      });
    }
  }

  /* ------------------------------------------------------------ TO TOP */
  function initToTop() {
    const btn = document.getElementById("toTopBtn");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      throttle(() => {
        btn.classList.toggle("is-visible", window.scrollY > 480);
      }, 150)
    );

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -------------------------------------------------------------- FOOTER */
  function initFooter() {
    const yearEl = document.getElementById("footerYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------- UTILS */
  function escapeHTML(str) {
    if (typeof str !== "string") return str;
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function throttle(fn, wait) {
    let last = 0;
    return (...args) => {
      const now = Date.now();
      if (now - last >= wait) {
        last = now;
        fn(...args);
      }
    };
  }
})();
