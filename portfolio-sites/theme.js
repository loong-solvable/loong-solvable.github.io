(function () {
  var key = "portfolio-sites-mode";
  var stored = localStorage.getItem(key) || "system";
  document.documentElement.dataset.mode = stored;

  window.setPortfolioMode = function (mode) {
    localStorage.setItem(key, mode);
    document.documentElement.dataset.mode = mode;
    document.querySelectorAll("[data-mode-choice]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.dataset.modeChoice === mode ? "true" : "false");
    });
  };

  window.renderModeToggle = function (target) {
    var root = typeof target === "string" ? document.querySelector(target) : target;
    if (!root) return;
    root.innerHTML = [
      '<button type="button" data-mode-choice="system">系统</button>',
      '<button type="button" data-mode-choice="light">浅色</button>',
      '<button type="button" data-mode-choice="dark">深色</button>'
    ].join("");

    root.querySelectorAll("button").forEach(function (button) {
      button.addEventListener("click", function () {
        window.setPortfolioMode(button.dataset.modeChoice);
      });
    });

    window.setPortfolioMode(stored);
  };
})();
