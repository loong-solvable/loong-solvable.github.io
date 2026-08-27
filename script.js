/* 唐清乐 · 个人总作品集（K3 参考图驱动方向）
   模块：js 标记 / 数据注入 / 代表项目渲染 / 目录渲染与筛选 /
        移动导航 / 首屏进入编排 / 滚动显现 / 导航激活
   约束：无 scroll 监听、无粒子、无外部库；reduced-motion 双侧处理。 */
(function () {
  "use strict";

  /* js 标记：CSS 隐藏态与移动汉堡只在此类下生效，无 JS 时全部内容直接可见、导航平铺 */
  document.documentElement.classList.add("js");

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ledger = window.TQYProjectLedger;

  if (!ledger || !Array.isArray(ledger.projects)) return;

  /* ---------- 数据注入 ---------- */

  function injectCounts() {
    var total = String(ledger.projects.length);
    document.querySelectorAll("[data-project-count]").forEach(function (el) {
      el.textContent = total;
    });
  }

  function categoryLabel(id) {
    var hit = ledger.categories.find(function (c) {
      return c.id === id;
    });
    return hit ? hit.label : id;
  }

  function projectBySlug(slug) {
    return ledger.projects.find(function (p) {
      return p.slug === slug;
    });
  }

  /* ---------- 代表项目渲染 ----------
     三条代表线显式固定：云梦世界为主卡，拓文 GEO 与 AI 早报为次卡。
     配图为本地真实资产，slug 与图的对应关系在此显式维护。 */

  var FEATURED = [
    {
      slug: "yunmeng",
      primary: true,
      src: "./assets/storymaker-case.jpg",
      alt: "云梦世界叙事系统材料台，展示世界关系与角色卡"
    },
    {
      slug: "xhsgeo",
      primary: false,
      src: "./assets/tuowen-preview.png",
      alt: "拓文 GEO 内容服务官网页面预览"
    },
    {
      slug: "automaticstream",
      primary: false,
      src: "./assets/briefing-dashboard.png",
      alt: "AI 早报系统成品界面，展示分组排序后的结构化新闻"
    }
  ];

  function renderFeatured() {
    var grid = document.querySelector("[data-featured-grid]");
    if (!grid) return;

    FEATURED.forEach(function (config, index) {
      var project = projectBySlug(config.slug);
      if (!project) return;

      var card = document.createElement("article");
      card.className =
        "feature-card" + (config.primary ? " feature-card--primary" : " feature-card--secondary");

      var figure = document.createElement("figure");
      figure.className = "feature-card__media";
      var img = document.createElement("img");
      img.src = config.src;
      img.alt = config.alt;
      img.loading = config.primary ? "eager" : "lazy";
      figure.appendChild(img);
      card.appendChild(figure);

      var body = document.createElement("div");
      body.className = "feature-card__body";

      var indexEl = document.createElement("p");
      indexEl.className = "feature-card__index";
      indexEl.textContent = "0" + (index + 1);
      body.appendChild(indexEl);

      var kicker = document.createElement("p");
      kicker.className = "feature-card__kicker";
      kicker.textContent = "重点案例 / " + categoryLabel(project.category);
      body.appendChild(kicker);

      var title = document.createElement("h3");
      title.textContent = project.title;
      body.appendChild(title);

      var summary = document.createElement("p");
      summary.className = "feature-card__summary";
      summary.textContent = project.summary;
      body.appendChild(summary);

      var meta = document.createElement("div");
      meta.className = "feature-card__meta";
      /* 代表项目只进本地案例锚点；无公开入口的项目不出现外链 */
      if (project.caseAnchor) {
        var link = document.createElement("a");
        link.className = "feature-card__link";
        link.href = "./project-cases/index.html#" + project.caseAnchor;
        link.textContent = "查看案例";
        meta.appendChild(link);
      }
      body.appendChild(meta);

      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* ---------- 目录渲染与筛选 ---------- */

  function renderLedgerItem(project) {
    var item = document.createElement("li");
    item.className = "ledger-item";

    var top = document.createElement("div");
    top.className = "ledger-item__top";
    var title = document.createElement("h3");
    title.textContent = project.title;
    top.appendChild(title);
    var cat = document.createElement("span");
    cat.className = "ledger-item__cat";
    cat.textContent = categoryLabel(project.category);
    top.appendChild(cat);
    item.appendChild(top);

    var summary = document.createElement("p");
    summary.className = "ledger-item__summary";
    summary.textContent = project.summary;
    item.appendChild(summary);

    if (project.href) {
      var link = document.createElement("a");
      link.className = "ledger-item__link";
      link.href = project.href;
      link.textContent = project.linkLabel || "查看";
      if (/^https?:\/\//.test(project.href)) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      item.appendChild(link);
    }

    return item;
  }

  function renderLedger(activeCategory) {
    var grid = document.querySelector("[data-ledger-grid]");
    if (!grid) return;
    grid.textContent = "";
    ledger.projects
      .filter(function (p) {
        return activeCategory === "all" || p.category === activeCategory;
      })
      .forEach(function (p) {
        grid.appendChild(renderLedgerItem(p));
      });
  }

  function renderFilters() {
    var box = document.querySelector("[data-ledger-filters]");
    if (!box) return;
    ledger.categories.forEach(function (cat, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = cat.label;
      button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      button.addEventListener("click", function () {
        box.querySelectorAll("button").forEach(function (b) {
          b.setAttribute("aria-pressed", "false");
        });
        button.setAttribute("aria-pressed", "true");
        renderLedger(cat.id);
      });
      box.appendChild(button);
    });
  }

  /* ---------- 移动导航 ---------- */

  function setupMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var links = document.querySelector("[data-nav-links]");
    if (!toggle || !links) return;

    function close() {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) close();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });
  }

  /* ---------- 首屏进入编排（总时长约 0.9s） ---------- */

  function playHeroEntrance() {
    var parts = document.querySelectorAll(".hero__copy > *, .hero__visual > *");
    if (reducedMotion) {
      parts.forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }
    parts.forEach(function (el, i) {
      window.setTimeout(function () {
        el.classList.add("is-in");
      }, i * 90);
    });
  }

  /* ---------- 滚动显现 ---------- */

  function setupReveal() {
    var items = document.querySelectorAll(".reveal");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.04 }
    );
    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- 导航激活（IntersectionObserver，不用 scroll 监听） ---------- */

  function setupNavSpy() {
    var links = document.querySelectorAll(".nav-links a");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var linkFor = {};
    links.forEach(function (link) {
      var id = link.getAttribute("href");
      if (id && id.charAt(0) === "#") linkFor[id.slice(1)] = link;
    });

    var sections = Object.keys(linkFor)
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    function activate(id) {
      links.forEach(function (link) {
        link.classList.toggle("is-active", link === linkFor[id]);
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) activate(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- 启动 ---------- */

  injectCounts();
  renderFeatured();
  renderFilters();
  renderLedger("all");
  setupMobileNav();
  playHeroEntrance();
  setupReveal();
  setupNavSpy();
})();
