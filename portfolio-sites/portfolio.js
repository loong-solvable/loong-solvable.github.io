(function () {
  var projects = window.PortfolioSites || [];
  var grid = document.querySelector("[data-project-grid]");
  var filters = document.querySelector("[data-filters]");
  var featured = document.querySelector("[data-featured-grid]");
  var search = document.querySelector("[data-search]");
  var state = document.querySelector("[data-gallery-state]");

  function asset(file) {
    return "assets/" + file;
  }

  function renderFilters() {
    var styles = ["全部"].concat(Array.from(new Set(projects.map(function (item) {
      return item.style;
    }))));

    filters.innerHTML = styles.map(function (style, index) {
      return '<button type="button" data-filter="' + style + '" aria-pressed="' + (index === 0 ? "true" : "false") + '">' + style + '</button>';
    }).join("");

    filters.querySelectorAll("button").forEach(function (button) {
      button.addEventListener("click", function () {
        filters.querySelectorAll("button").forEach(function (item) {
          item.setAttribute("aria-pressed", "false");
        });
        button.setAttribute("aria-pressed", "true");
        renderProjects();
      });
    });
  }

  function selectedFilter() {
    var active = filters.querySelector("[aria-pressed='true']");
    return active ? active.dataset.filter : "全部";
  }

  function card(project, index) {
    var colors = project.palette.map(function (color) {
      return '<span style="background:' + color + '"></span>';
    }).join("");

    return [
      '<article class="site-card reveal" style="--i:' + index + '">',
      '  <a href="' + project.href + '" aria-label="打开 ' + project.title + '">',
      '    <figure class="site-card-media">',
      '      <img src="' + asset(project.image) + '" alt="' + project.title + ' 视觉方向" loading="' + (index < 2 ? "eager" : "lazy") + '">',
      '    </figure>',
      '    <div class="site-card-copy">',
      '      <p class="card-meta">' + project.kind + '</p>',
      '      <h2>' + project.title + '</h2>',
      '      <p>' + project.intro + '</p>',
      '      <div class="card-action">进入作品</div>',
      '      <div class="swatches" aria-label="' + project.accentName + ' 配色">' + colors + '</div>',
      '    </div>',
      '  </a>',
      '</article>'
    ].join("");
  }

  function renderEmpty() {
    grid.innerHTML = [
      '<div class="empty-state">',
      '  <p>没有匹配的作品。</p>',
      '  <button type="button" data-reset>显示全部</button>',
      '</div>'
    ].join("");
    grid.querySelector("[data-reset]").addEventListener("click", function () {
      filters.querySelectorAll("button").forEach(function (button, index) {
        button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      });
      if (search) search.value = "";
      renderProjects();
    });
  }

  function renderProjects() {
    var filter = selectedFilter();
    var term = search ? search.value.trim().toLowerCase() : "";
    var items = projects.filter(function (project) {
      var matchesFilter = filter === "全部" || project.style === filter;
      var haystack = [project.title, project.kind, project.style, project.intro].join(" ").toLowerCase();
      return matchesFilter && (!term || haystack.indexOf(term) !== -1);
    });

    state.textContent = "已准备 " + items.length + " 个网站概念";
    if (!items.length) {
      renderEmpty();
      return;
    }
    grid.innerHTML = items.map(card).join("");
    observeReveals();
  }

  function featuredCard(project, index) {
    return [
      '<article class="featured-card reveal" style="--i:' + index + '">',
      '  <a href="' + project.href + '" aria-label="打开 ' + project.title + '">',
      '    <figure>',
      '      <img src="' + asset(project.image) + '" alt="' + project.title + ' 精选封面" loading="' + (index === 0 ? "eager" : "lazy") + '">',
      '    </figure>',
      '    <div>',
      '      <p class="card-meta">' + project.style + '</p>',
      '      <h3>' + project.title + '</h3>',
      '      <p>' + project.kind + '</p>',
      '      <span>打开作品</span>',
      '    </div>',
      '  </a>',
      '</article>'
    ].join("");
  }

  function renderFeatured() {
    if (!featured) return;
    featured.innerHTML = projects.slice(0, 3).map(featuredCard).join("");
  }

  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  function renderLoading() {
    grid.innerHTML = '<div class="skeleton-card" aria-label="加载中"></div><div class="skeleton-card" aria-label="加载中"></div><div class="skeleton-card" aria-label="加载中"></div>';
  }

  try {
    renderModeToggle("[data-mode-toggle]");
    renderFilters();
    renderFeatured();
    renderLoading();
    window.setTimeout(renderProjects, 180);
    if (search) search.addEventListener("input", renderProjects);
  } catch (error) {
    state.textContent = "作品集加载失败";
    grid.innerHTML = '<div class="empty-state"><p>作品集暂时无法加载。</p></div>';
    console.error(error);
  }
})();
