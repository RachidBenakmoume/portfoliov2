(function () {
  // ─── i18n System ───
  var translations = {};
  var currentLang = localStorage.getItem("lang") || "fr";

  function loadTranslations(lang) {
    return fetch(lang + ".json")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        translations[lang] = data;
      });
  }

  function applyTranslations(lang) {
    var t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        if (el.tagName === "TITLE") {
          document.title = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Re-run typewriter with new text
    restartTypewriter(t["hero_title_typewriter"]);
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    var btn = document.getElementById("langToggle");
    if (btn) btn.textContent = lang.toUpperCase();
    applyTranslations(lang);
  }

  // ─── Theme System ───
  var currentTheme = localStorage.getItem("theme") || "dark";

  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    var btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";

    // Update mesh gradient bg color
    meshBgColor = getComputedStyle(document.documentElement).getPropertyValue("--mesh-bg").trim();
  }

  // ─── Mesh Gradient Background ───
  var meshBgColor = "#0a0a0b";

  function initMesh(canvas, colors, speed) {
    var ctx = canvas.getContext("2d");
    var blobs = colors.map(function (c) {
      return {
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: 0.3 + Math.random() * 0.2,
        color: c,
      };
    });

    function resize() {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      var w = canvas.width,
        h = canvas.height;
      ctx.fillStyle = meshBgColor;
      ctx.fillRect(0, 0, w, h);

      blobs.forEach(function (b) {
        b.x += b.vx / w;
        b.y += b.vy / h;
        if (b.x < -0.2 || b.x > 1.2) b.vx *= -1;
        if (b.y < -0.2 || b.y > 1.2) b.vy *= -1;

        var grd = ctx.createRadialGradient(
          b.x * w,
          b.y * h,
          0,
          b.x * w,
          b.y * h,
          b.r * Math.max(w, h),
        );
        grd.addColorStop(0, b.color);
        grd.addColorStop(1, "transparent");

        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = "source-over";
      });

      requestAnimationFrame(draw);
    }
    draw();
  }

  initMesh(
    document.getElementById("meshHero"),
    [
      "rgba(74,255,139,.15)",
      "rgba(200,169,126,.12)",
      "rgba(94,173,181,.1)",
      "rgba(168,116,142,.08)",
    ],
    0.3,
  );

  // ─── Typewriter Effect for Hero Title ───
  var typewriterEl = document.getElementById("typewriterText");
  var typewriterTimeout = null;

  function restartTypewriter(text) {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    var charIndex = 0;
    typewriterEl.innerHTML = '<span class="type-cursor"></span>';

    function type() {
      if (charIndex <= text.length) {
        typewriterEl.innerHTML =
          text.substring(0, charIndex) +
          '<span class="type-cursor"></span>';
        charIndex++;
        typewriterTimeout = setTimeout(type, 80);
      } else {
        typewriterEl.innerHTML = text;
      }
    }
    typewriterTimeout = setTimeout(type, 200);
  }

  // ─── Accordion Panel Click/Hover ───
  document.querySelectorAll(".accordion-panel").forEach(function (panel) {
    panel.addEventListener("click", function () {
      var siblings = panel.parentElement.children;
      for (var i = 0; i < siblings.length; i++)
        siblings[i].classList.remove("active");
      panel.classList.add("active");
    });
  });

  // ─── Experience Sticky Stack (ScrollTrigger) ───
  gsap.registerPlugin(ScrollTrigger);
  var experienceCards = document.querySelectorAll(".experience-card");
  var timelineStates = document.querySelectorAll(".timeline-state");

  experienceCards.forEach(function (card) {
    ScrollTrigger.create({
      trigger: card,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: function () {
        activateExperience(card.dataset.experience);
      },
      onEnterBack: function () {
        activateExperience(card.dataset.experience);
      },
    });
  });

  function activateExperience(num) {
    experienceCards.forEach(function (c) {
      c.classList.toggle("active", c.dataset.experience === num);
    });
    timelineStates.forEach(function (s) {
      s.classList.toggle("active", s.dataset.state === num);
    });
  }

  // ─── Skills Grid Spotlight Effect ───
  var skillsGrid = document.getElementById("skillsGrid");
  if (skillsGrid) {
    skillsGrid.addEventListener("mousemove", function (e) {
      var cards = skillsGrid.querySelectorAll(".skill-card");
      cards.forEach(function (c) {
        var r = c.getBoundingClientRect();
        c.style.setProperty("--mx", e.clientX - r.left + "px");
        c.style.setProperty("--my", e.clientY - r.top + "px");
      });
    });
  }

  // ─── Security Stats Odometer Effect ───
  document.querySelectorAll(".security-stat-num").forEach(function (odo) {
    var val = odo.dataset.value;
    var suffix = odo.dataset.suffix || "";
    var digits = val.split("");
    odo.innerHTML = "";

    digits.forEach(function () {
      var digit = document.createElement("div");
      digit.className = "odo-digit";
      var strip = document.createElement("div");
      strip.className = "odo-strip";
      for (var i = 0; i <= 9; i++) {
        var s = document.createElement("span");
        s.textContent = i;
        strip.appendChild(s);
      }
      digit.appendChild(strip);
      odo.appendChild(digit);
    });

    if (suffix) {
      var sfx = document.createElement("span");
      sfx.className = "stat-suffix";
      sfx.textContent = suffix;
      odo.appendChild(sfx);
    }

    ScrollTrigger.create({
      trigger: odo,
      start: "top 85%",
      once: true,
      onEnter: function () {
        var strips = odo.querySelectorAll(".odo-strip");
        strips.forEach(function (strip, i) {
          var target = parseInt(digits[i]);
          var h = strip.children[0].offsetHeight;
          strip.style.transform = "translateY(-" + target * h + "px)";
          strip.style.transitionDelay = i * 0.12 + "s";
        });
      },
    });
  });

  // ─── Dock Navigation ───
  var dock = document.getElementById("dock");
  if (dock) {
    var dockItems = dock.querySelectorAll(".dock-item");
    var baseSize = 48,
      maxSize = 68,
      range = 110;

    dock.addEventListener("mousemove", function (e) {
      dockItems.forEach(function (item) {
        var rect = item.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var dist = Math.abs(e.clientX - cx);
        var scale = Math.max(
          baseSize,
          maxSize - (dist / range) * (maxSize - baseSize),
        );
        if (dist > range) scale = baseSize;
        item.style.width = scale + "px";
        item.style.height = scale + "px";
        item.style.fontSize = scale * 0.45 + "px";
      });
    });

    dock.addEventListener("mouseleave", function () {
      dockItems.forEach(function (item) {
        item.style.width = "";
        item.style.height = "";
        item.style.fontSize = "";
      });
    });

    dockItems.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        var target = document.getElementById(item.dataset.section);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    var sections = [
      "home",
      "projects",
      "experience",
      "skills",
      "testimonials",
      "contact",
    ]
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    function updateActive() {
      var y = window.scrollY + window.innerHeight / 3;
      var current = sections[0];
      sections.forEach(function (s) {
        if (s.offsetTop <= y) current = s;
      });
      dockItems.forEach(function (item) {
        item.classList.toggle(
          "active",
          item.dataset.section === current.id,
        );
      });
    }
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
  }

  // ─── Contact Section Curtain Reveal ───
  var curtainSection = document.querySelector(".contact-section-wrapper");
  if (curtainSection && window.innerWidth > 768) {
    gsap.to("#cLeft", {
      xPercent: -100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: curtainSection,
        start: "top top",
        end: "60% top",
        scrub: 0.5,
      },
    });
    gsap.to("#cRight", {
      xPercent: 100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: curtainSection,
        start: "top top",
        end: "60% top",
        scrub: 0.5,
      },
    });
  }

  // ─── Init Controls ───
  // Apply saved theme immediately
  setTheme(currentTheme);

  // Load both translations then apply
  Promise.all([loadTranslations("fr"), loadTranslations("en")]).then(function () {
    applyTranslations(currentLang);
    var btn = document.getElementById("langToggle");
    if (btn) btn.textContent = currentLang.toUpperCase();
  });

  // Wire up toggle buttons
  document.getElementById("langToggle").addEventListener("click", function () {
    setLang(currentLang === "fr" ? "en" : "fr");
  });

  document.getElementById("themeToggle").addEventListener("click", function () {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
})();
