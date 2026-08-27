(function () {
  var projects = window.PortfolioSites || [];
  var slug = document.body.dataset.site;
  var project = projects.find(function (item) {
    return item.slug === slug;
  });
  var root = document.querySelector("[data-case-root]");

  function asset(file) {
    return "../assets/" + file;
  }

  function nav() {
    return [
      '<header class="case-nav">',
      '  <a class="brand-link" href="../index.html">网站作品集</a>',
      '  <nav aria-label="案例导航">',
      '    <a href="#concept">概念</a>',
      '    <a href="#system">系统</a>',
      '    <a href="#deliverables">交付</a>',
      '  </nav>',
      '  <div class="mode-toggle" data-mode-toggle></div>',
      '</header>'
    ].join("");
  }

  function hero(extra) {
    return [
      '<section class="case-hero ' + (extra || "") + '">',
      '  <div class="hero-copy">',
      '    <p class="kicker">' + project.kicker + '</p>',
      '    <h1>' + project.headline + '</h1>',
      '    <p>' + project.intro + '</p>',
      '    <div class="hero-actions">',
      '      <a class="button primary" href="#deliverables">' + project.cta + '</a>',
      '      <a class="button secondary" href="#concept">' + project.secondary + '</a>',
      '    </div>',
      '  </div>',
      '  <figure class="hero-media">',
      '    <img src="' + asset(project.image) + '" alt="' + project.title + ' 主视觉" decoding="async">',
      '  </figure>',
      '</section>'
    ].join("");
  }

  function factStrip() {
    return [
      '<section class="fact-strip" aria-label="项目信息">',
      project.facts.map(function (fact) {
        return '<span>' + fact + '</span>';
      }).join(""),
      '</section>'
    ].join("");
  }

  function deliverables(items) {
    return [
      '<section id="deliverables" class="deliverables reveal">',
      '  <h2>这个作品能展示什么</h2>',
      '  <div class="deliverable-grid">',
      items.map(function (item) {
        return '<article><h3>' + item.title + '</h3><p>' + item.text + '</p></article>';
      }).join(""),
      '  </div>',
      '</section>'
    ].join("");
  }

  function closing() {
    return [
      '<section class="case-close reveal">',
      '  <div>',
      '    <p class="card-meta">' + project.kind + '</p>',
      '    <h2>' + project.title + ' 可以直接放进作品集。</h2>',
      '  </div>',
      '  <a class="button primary" href="../index.html">返回作品集</a>',
      '</section>'
    ].join("");
  }

  function neon() {
    return [
      nav(),
      hero("hero-neon"),
      factStrip(),
      '<section id="concept" class="split-showcase reveal">',
      '  <div class="poster-type"><span>动态</span><span>识别</span><span>发布</span></div>',
      '  <div><h2>给需要现场感的品牌发布使用。</h2><p>Neon Foundry 把传播系统做成动态装置、发布影片和可跨渠道使用的影像序列。</p></div>',
      '</section>',
      '<section id="system" class="cinema-grid reveal">',
      '  <figure><img src="' + asset(project.image) + '" alt="动态灯光装置细节"></figure>',
      '  <article><h2>一套视觉语言，多种输出。</h2><p>页面靠节奏售卖工作室能力：强裁切图片、大字号、强对比和明确服务项。</p></article>',
      '  <article><h3>适合展示</h3><p>创意工作室、动态品牌、实验型代理公司和活动视觉识别。</p></article>',
      '</section>',
      deliverables([
        { title: "完整落地页", text: "首屏、服务表达、作品网格、方法和收口。" },
        { title: "动效语言", text: "入场动效、悬停反馈和低动效模式。" },
        { title: "素材方向", text: "生成装置主视觉，并适配不同区块裁切。" }
      ]),
      closing()
    ].join("");
  }

  function lumen() {
    return [
      nav(),
      hero("hero-lumen"),
      factStrip(),
      '<section id="concept" class="luxury-editorial reveal">',
      '  <figure><img src="' + asset(project.image) + '" alt="大理石空间里的银色香氛瓶"></figure>',
      '  <div><h2>一个不靠喊口号的产品页。</h2><p>Lumen Atelier 用冷银配色、短文案和画廊式留白，让产品显得克制而高级。</p></div>',
      '</section>',
      '<section id="system" class="material-row reveal">',
      '  <article><h3>金属</h3><p>反射、精密，有建筑感。</p></article>',
      '  <article><h3>石材</h3><p>安静表面让产品更有分量。</p></article>',
      '  <article><h3>留白</h3><p>负空间让页面保持平静。</p></article>',
      '</section>',
      deliverables([
        { title: "高端产品页", text: "首屏、材质叙事、系列模块和试香入口。" },
        { title: "冷感高级配色", text: "用银色、烟灰和近黑替代常见米色黄铜。" },
        { title: "零售级文案", text: "短句表达产品，不堆砌形容词。" }
      ]),
      closing()
    ].join("");
  }

  function pomelo() {
    return [
      nav(),
      hero("hero-pomelo"),
      factStrip(),
      '<section id="concept" class="play-lab reveal">',
      '  <div><h2>可爱，但仍然有设计控制。</h2><p>Pomelo Pop 用颜色、块面和触感摄影，让学习产品亲近但不杂乱。</p></div>',
      '  <div class="lesson-switcher" data-lesson>',
      '    <button type="button" data-color="#f15f5f" aria-pressed="true">字母</button>',
      '    <button type="button" data-color="#1f8f65">形状</button>',
      '    <button type="button" data-color="#ffc840">节奏</button>',
      '    <p data-lesson-copy>拖一拖，点一点，每次只学一个小概念。</p>',
      '  </div>',
      '</section>',
      '<section id="system" class="pop-mosaic reveal">',
      '  <article><h3>家长看得懂</h3><p>利益点直接说明，方便快速判断。</p></article>',
      '  <figure><img src="' + asset(project.image) + '" alt="彩色学习材料和柚子场景"></figure>',
      '  <article><h3>孩子愿意点</h3><p>小屏幕上也有明亮、触手可及的感觉。</p></article>',
      '</section>',
      deliverables([
        { title: "消费应用发布页", text: "首屏、家长信任、课程预览和应用模块。" },
        { title: "互动样例", text: "用一个小课程切换器展示产品气质。" },
        { title: "色彩系统", text: "珊瑚红、绿色和黄色贯穿整页。" }
      ]),
      closing()
    ].join("");
  }

  function northline() {
    return [
      nav(),
      hero("hero-northline"),
      factStrip(),
      '<section id="concept" class="case-study reveal">',
      '  <div><h2>给先看证据再看风格的买家。</h2><p>Northline Works 按真实企业服务案例组织：背景、介入方式、运营模型和结果示例。</p></div>',
      '  <figure><img src="' + asset(project.image) + '" alt="企业团队查看物流网络"></figure>',
      '</section>',
      '<section id="system" class="proof-lanes reveal">',
      '  <article><span>诊断</span><h3>找到拖慢协作的交接点。</h3></article>',
      '  <article><span>重建</span><h3>把流程变成共同运营模型。</h3></article>',
      '  <article><span>落地</span><h3>交付培训、治理和度量方式。</h3></article>',
      '</section>',
      deliverables([
        { title: "企业案例页", text: "服务买家能读懂的可信叙事结构。" },
        { title: "线索承接页面", text: "有行动入口和证据区块，不做假仪表盘。" },
        { title: "会议室气质", text: "灰绿配色、克制动效和可扫描文案。" }
      ]),
      closing()
    ].join("");
  }

  function voltage() {
    return [
      nav(),
      hero("hero-voltage"),
      factStrip(),
      '<section id="concept" class="event-wall reveal">',
      '  <h2>票务页要先有冲击，再给清晰信息。</h2>',
      '  <p>页面用满屏能量开场，再快速进入阵容、场地、票种和合作展示。</p>',
      '</section>',
      '<section id="system" class="lineup-grid reveal">',
      '  <article><h3>灯光房间</h3><p>为现场传播而设计的沉浸装置。</p></article>',
      '  <figure><img src="' + asset(project.image) + '" alt="有观众的灯光节现场"></figure>',
      '  <article><h3>夜间单元</h3><p>演讲和演出共用同一种视觉节奏。</p></article>',
      '  <article><h3>票种系统</h3><p>清楚表达票种状态，不做拥挤价格表。</p></article>',
      '</section>',
      '<section class="kinetic-band" aria-label="活动主题"><span>光</span><span>声音</span><span>房间</span><span>夜晚</span><span>设计</span></section>',
      deliverables([
        { title: "活动落地页", text: "首屏、阵容、票种、合作方和页尾。" },
        { title: "电影感图片使用", text: "用生成活动摄影撑住第一屏。" },
        { title: "强动效感", text: "入场动效加一条受控动态文字带。" }
      ]),
      closing()
    ].join("");
  }

  function harbor() {
    return [
      nav(),
      hero("hero-harbor"),
      factStrip(),
      '<section id="concept" class="retreat-story reveal">',
      '  <figure><img src="' + asset(project.image) + '" alt="面向海岸的阅读房间"></figure>',
      '  <div><h2>卖的不是房间，是一种生活速度。</h2><p>Quiet Harbor 用安静图片、稳定间距和直接预订文案，做出高级但不装饰化的度假网站。</p></div>',
      '</section>',
      '<section id="system" class="stay-grid reveal">',
      '  <article><h3>阅读房间</h3><p>为长时间安静停留准备的小型私人空间。</p></article>',
      '  <article><h3>海边早晨</h3><p>让主视觉承担情绪，不让文案过度表演。</p></article>',
      '  <article><h3>慢餐服务</h3><p>服务说明保持简单，气质更干净。</p></article>',
      '</section>',
      deliverables([
        { title: "酒店民宿网站", text: "首屏、房型故事、入住选择和预订入口。" },
        { title: "编辑感系统", text: "柔和高级的布局，真实图片优先。" },
        { title: "转化路径", text: "清晰入住入口，不做度假页常见堆砌。" }
      ]),
      closing()
    ].join("");
  }

  function bindInteractions() {
    renderModeToggle("[data-mode-toggle]");

    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("observe-me");
    });

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.16 });
      document.querySelectorAll(".observe-me").forEach(function (el) {
        observer.observe(el);
      });
    } else {
      document.querySelectorAll(".observe-me").forEach(function (el) {
        el.classList.add("is-visible");
      });
    }

    var lesson = document.querySelector("[data-lesson]");
    if (lesson) {
      lesson.querySelectorAll("button").forEach(function (button) {
        button.addEventListener("click", function () {
          lesson.style.setProperty("--lesson-color", button.dataset.color);
          lesson.querySelectorAll("button").forEach(function (item) {
            item.setAttribute("aria-pressed", item === button ? "true" : "false");
          });
          lesson.querySelector("[data-lesson-copy]").textContent = "已选择" + button.textContent + "课程。一个小动作，一个可见反馈。";
        });
      });
    }
  }

  function render() {
    if (!project) {
      root.innerHTML = '<main class="case-error"><h1>没有找到这个案例。</h1><a class="button primary" href="../index.html">返回作品集</a></main>';
      return;
    }

    var renderers = {
      "neon-foundry": neon,
      "lumen-atelier": lumen,
      "pomelo-pop": pomelo,
      "northline-works": northline,
      "voltage-room": voltage,
      "quiet-harbor": harbor
    };

    document.title = project.title + " - 网站作品集";
    root.innerHTML = renderers[project.slug]();
    bindInteractions();
  }

  render();
})();
