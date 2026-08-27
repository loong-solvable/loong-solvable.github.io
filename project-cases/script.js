/* 重点案例页动效（与首页同一套克制节奏）
   模块：js 标记 / 首条案例错峰进入 / 案例区块滚动显现
   约束：只用 IntersectionObserver，不加 scroll 监听；reduced-motion 双侧处理。 */
(function () {
  "use strict";

  /* js 标记：隐藏态只在此类下生效，无 JS 时全部内容直接可见 */
  document.documentElement.classList.add("js");

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 首条案例错峰进入（总时长约 0.7s） ---------- */

  function playFirstCaseEntrance() {
    var first = document.querySelector(".case-entry");
    if (!first) return;
    var parts = first.querySelectorAll(
      ".case-hero__head, .case-hero__visual, .case-hero__meta"
    );
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

  /* ---------- 启动 ---------- */

  playFirstCaseEntrance();
  setupReveal();
})();
