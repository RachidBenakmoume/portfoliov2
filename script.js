(function () {
  // ─── Inline Translations ───
  var translations = {
    fr: {
      page_title: "Yacine Benakmoume \u2014 Ing\u00e9nieur Full Stack Senior & Tech Lead",
      hero_label: "Portfolio",
      hero_title_typewriter: "Ing\u00e9nieur Full Stack Senior & Tech Lead",
      hero_availability: "Disponible \u00b7 Freelance Remote",
      hero_description: "Ing\u00e9nieur logiciel full stack avec 6+ ans d\u2019exp\u00e9rience sur des syst\u00e8mes critiques \u00e0 fort enjeu \u2014 t\u00e9l\u00e9communications nationales, sant\u00e9, finance industrielle. Expert Java/Spring Boot & Angular, architecte microservices et solutions cloud-native, chercheur en s\u00e9curit\u00e9 offensive r\u00e9compens\u00e9 (BugBounty.ch).",
      hero_cta_contact: "Me contacter",
      scroll_hint: "D\u00e9filer pour d\u00e9couvrir \u2193",
      projects_label: "R\u00e9alisations",
      projects_title: "Projets marquants",
      project1_title: "Tarjem DZ",
      project1_num: "Projet 01",
      project1_desc: "Plateforme SaaS de mise en relation entre clients et traducteurs asserment\u00e9s. Workflow complet de gestion de commandes avec g\u00e9n\u00e9ration automatique de certificats PDF.",
      project2_title: "Wesh.dz",
      project2_num: "Projet 02",
      project2_desc: "R\u00e9seau social alg\u00e9rien avec fonctionnalit\u00e9s temps r\u00e9el. Feed personnalis\u00e9, notifications push SSE, messagerie WebSocket et pipeline CDN de traitement m\u00e9dias.",
      project3_panel_title: "Bots Telegram",
      project3_num: "Projet 03",
      project3_h3: "Bots & Veille Automatis\u00e9e",
      project3_desc: "\u00c9cosyst\u00e8me de bots Telegram autonomes : veille tarifaire avec scoring d\u2019opportunit\u00e9s, monitoring logistique temps r\u00e9el, comparateur de vols par scraping intelligent.",
      project4_title: "TikTok Engine",
      project4_num: "Projet 04",
      project4_h3: "TikTok Content Engine",
      project4_desc: "Compte TikTok enti\u00e8rement automatis\u00e9. Pipeline IA : g\u00e9n\u00e9ration proc\u00e9durale \u2192 rendu FFmpeg \u2192 caption IA \u2192 publication automatique. Optimis\u00e9 pour viralit\u00e9 maximale.",
      project5_title: "LLM Agents",
      project5_num: "Projet 05",
      project5_h3: "LLM Engineering & Agents",
      project5_desc: "Pipelines RAG et agents multi-\u00e9tapes avec m\u00e9moire persistante. Int\u00e9gration Claude/GPT pour automatisation m\u00e9tier, orchestration n8n, d\u00e9ploiement LLMs locaux.",
      experience_label: "Parcours",
      experience_title: "Exp\u00e9rience professionnelle",
      exp1_num: "Exp\u00e9rience 01",
      exp1_date: "Sep 2024 \u2014 Pr\u00e9sent",
      exp1_title: "Tech Lead & Expert Full Stack",
      exp1_company: "Consort Group \u00b7 Orange France",
      exp1_detail1: "D\u00e9veloppement d\u2019une biblioth\u00e8que d\u2019abstraction multi-vendeurs interfa\u00e7ant 10+ fabricants d\u2019\u00e9quipements de t\u00e9l\u00e9gestion (Huawei, Delta, Eltek, Emerson\u2026)",
      exp1_detail2: "Plateforme d\u2019orchestration centralis\u00e9e pilotant +40 000 \u00e9quipements de t\u00e9l\u00e9communications \u00e0 l\u2019\u00e9chelle nationale",
      exp1_detail3: "Module IoT pour actions intelligentes \u00e0 distance : contr\u00f4le thermique, gestion \u00e9lectrique \u2014 stack EtherCAT + MQTT + IEC 61131-3",
      exp1_detail4: "Lead d\u2019une \u00e9quipe de 4 ing\u00e9nieurs avec strat\u00e9gie de tests compl\u00e8te : unitaires, mutation, E2E Playwright",
      exp2_num: "Exp\u00e9rience 02",
      exp2_date: "Sep 2022 \u2014 Ao\u00fbt 2024",
      exp2_title: "D\u00e9veloppeur Full Stack Senior",
      exp2_company: "SQLi \u00b7 ENV France",
      exp2_detail1: "Architecte et d\u00e9veloppeur principal de SIRIUS \u2014 SaaS national d\u00e9ploy\u00e9 dans les 4 \u00c9coles Nationales V\u00e9t\u00e9rinaires de France",
      exp2_detail2: "Architecture microservices : 8 services m\u00e9tier ind\u00e9pendants avec Spring Cloud Gateway, 3 frontends Angular segment\u00e9s par r\u00f4le",
      exp2_detail3: "Moteur de facturation (TVA, remises, avoirs), prescription num\u00e9rique conforme au droit v\u00e9t\u00e9rinaire fran\u00e7ais",
      exp2_detail4: "Infrastructure Kubernetes sur OVH : namespaces, ingress TLS, health probes, HPA, CI/CD GitLab \u2014 MEP r\u00e9ussie",
      exp3_num: "Exp\u00e9rience 03",
      exp3_date: "Sep 2020 \u2014 Ao\u00fbt 2022",
      exp3_title: "D\u00e9veloppeur Full Stack (Alternance)",
      exp3_company: "Capgemini Technology \u00b7 Michelin",
      exp3_detail1: "Projet IGX \u2014 refonte syst\u00e8me de gestion financi\u00e8re strat\u00e9gique : r\u00e9\u00e9criture VBA/Oracle vers Spring Boot / Angular / PostgreSQL",
      exp3_detail2: "Pipeline d\u2019int\u00e9gration \u00e9v\u00e9nementielle (mission solo) : consumer Kafka haute disponibilit\u00e9, gestion offsets, dead-letter queues",
      exp3_detail3: "D\u00e9veloppement et int\u00e9gration de jobs Talend pour l\u2019extraction et transformation de donn\u00e9es financi\u00e8res cross-syst\u00e8mes",
      skills_label: "Comp\u00e9tences",
      skills_title: "Stack technique",
      security_tag: "Recherche en s\u00e9curit\u00e9",
      security_h3: "BugBounty.ch \u2014 Chercheur ind\u00e9pendant",
      security_desc: "Deux vuln\u00e9rabilit\u00e9s critiques identifi\u00e9es sur des syst\u00e8mes e-banking suisses en production \u2014 contournement d\u2019authentification et exposition de donn\u00e9es clients sensibles, avec impact estim\u00e9 \u00e0 plusieurs dizaines de milliers de comptes. P\u00e9rim\u00e8tre soumis \u00e0 r\u00e9glementation FINMA.",
      security_stat1_label: "Interventions",
      security_stat2_label: "R\u00e9compens\u00e9es",
      security_stat3_label: "CHF gagn\u00e9s",
      security_stat4_label: "Critiques (CVSS 9+)",
      testimonials_label: "T\u00e9moignages",
      testimonials_title: "Ce qu\u2019on dit de mon travail",
      testimonial1_text_front: "\"Yacine a \u00e9t\u00e9 un atout majeur sur notre projet de t\u00e9l\u00e9gestion. Sa ma\u00eetrise de Spring Boot et son approche architecturale ont permis de livrer une solution robuste g\u00e9rant +40k \u00e9quipements...\"",
      testimonial1_text_back: "Yacine a \u00e9t\u00e9 un atout majeur sur notre projet de t\u00e9l\u00e9gestion. Sa ma\u00eetrise de Spring Boot et son approche architecturale ont permis de livrer une solution robuste g\u00e9rant +40k \u00e9quipements. Tr\u00e8s professionnel.",
      flip_hint: "Cliquer pour lire la suite \u2192",
      testimonial2_text_front: "\"L\u2019architecture microservices de SIRIUS con\u00e7ue par Yacine a parfaitement r\u00e9pondu aux besoins des 4 ENV. Sa capacit\u00e9 \u00e0 traduire des exigences complexes en solutions techniques...\"",
      testimonial2_text_back: "L\u2019architecture microservices de SIRIUS con\u00e7ue par Yacine a parfaitement r\u00e9pondu aux besoins des 4 ENV. Sa capacit\u00e9 \u00e0 traduire des exigences complexes en solutions techniques est remarquable.",
      testimonial3_text_front: "\"Collaborer avec Yacine sur le projet IGX chez Michelin \u00e9tait un plaisir. Son expertise Kafka et sa rigueur sur les pipelines \u00e9v\u00e9nementiels ont vraiment fait la diff\u00e9rence...\"",
      testimonial3_text_back: "Collaborer avec Yacine sur le projet IGX chez Michelin \u00e9tait un plaisir. Son expertise Kafka et sa rigueur sur les pipelines \u00e9v\u00e9nementiels ont vraiment fait la diff\u00e9rence. Code propre, bien test\u00e9.",
      contact_title: "Pr\u00eat \u00e0 collaborer ?",
      contact_subtitle: "Discutons de votre prochain projet. Je suis disponible pour des missions freelance en remote.",
      contact_label_email: "Email",
      contact_label_phone: "T\u00e9l\u00e9phone",
      contact_label_location: "Localisation",
      contact_location_text: "Toulouse, France",
      contact_label_socials: "R\u00e9seaux",
      form_label_name: "Nom complet",
      form_placeholder_name: "Votre nom",
      form_label_email: "Email",
      form_placeholder_email: "votre@email.com",
      form_label_subject: "Sujet",
      form_placeholder_subject: "Objet de votre message",
      form_label_message: "Message",
      form_placeholder_message: "Parlez-moi de votre projet...",
      form_submit: "Envoyer le message",
      curtain_left: "LETS",
      curtain_right: "WORK",
      dock_home: "Accueil",
      dock_projects: "Projets",
      dock_experience: "Exp\u00e9rience",
      dock_skills: "Comp\u00e9tences",
      dock_testimonials: "T\u00e9moignages",
      dock_contact: "Contact",
      footer_title: "Travaillons ensemble"
    },
    en: {
      page_title: "Yacine Benakmoume \u2014 Senior Full Stack Engineer & Tech Lead",
      hero_label: "Portfolio",
      hero_title_typewriter: "Senior Full Stack Engineer & Tech Lead",
      hero_availability: "Available \u00b7 Remote Freelance",
      hero_description: "Full stack software engineer with 6+ years of experience on high-stakes critical systems \u2014 national telecommunications, healthcare, industrial finance. Java/Spring Boot & Angular expert, microservices architect and cloud-native solutions, awarded offensive security researcher (BugBounty.ch).",
      hero_cta_contact: "Contact me",
      scroll_hint: "Scroll to discover \u2193",
      projects_label: "Achievements",
      projects_title: "Key Projects",
      project1_title: "Tarjem DZ",
      project1_num: "Project 01",
      project1_desc: "SaaS platform connecting clients with certified translators. Complete order management workflow with automatic PDF certificate generation.",
      project2_title: "Wesh.dz",
      project2_num: "Project 02",
      project2_desc: "Algerian social network with real-time features. Personalized feed, SSE push notifications, WebSocket messaging and CDN media processing pipeline.",
      project3_panel_title: "Telegram Bots",
      project3_num: "Project 03",
      project3_h3: "Bots & Automated Monitoring",
      project3_desc: "Ecosystem of autonomous Telegram bots: price monitoring with opportunity scoring, real-time logistics tracking, intelligent flight comparison via smart scraping.",
      project4_title: "TikTok Engine",
      project4_num: "Project 04",
      project4_h3: "TikTok Content Engine",
      project4_desc: "Fully automated TikTok account. AI pipeline: procedural generation \u2192 FFmpeg rendering \u2192 AI captioning \u2192 automatic publishing. Optimized for maximum virality.",
      project5_title: "LLM Agents",
      project5_num: "Project 05",
      project5_h3: "LLM Engineering & Agents",
      project5_desc: "RAG pipelines and multi-step agents with persistent memory. Claude/GPT integration for business automation, n8n orchestration, local LLM deployment.",
      experience_label: "Career",
      experience_title: "Professional Experience",
      exp1_num: "Experience 01",
      exp1_date: "Sep 2024 \u2014 Present",
      exp1_title: "Tech Lead & Full Stack Expert",
      exp1_company: "Consort Group \u00b7 Orange France",
      exp1_detail1: "Development of a multi-vendor abstraction library interfacing 10+ remote management equipment manufacturers (Huawei, Delta, Eltek, Emerson\u2026)",
      exp1_detail2: "Centralized orchestration platform managing +40,000 telecommunications equipment at national scale",
      exp1_detail3: "IoT module for intelligent remote actions: thermal control, electrical management \u2014 EtherCAT + MQTT + IEC 61131-3 stack",
      exp1_detail4: "Leading a team of 4 engineers with comprehensive testing strategy: unit, mutation, E2E Playwright",
      exp2_num: "Experience 02",
      exp2_date: "Sep 2022 \u2014 Aug 2024",
      exp2_title: "Senior Full Stack Developer",
      exp2_company: "SQLi \u00b7 ENV France",
      exp2_detail1: "Architect and lead developer of SIRIUS \u2014 national SaaS deployed across all 4 National Veterinary Schools of France",
      exp2_detail2: "Microservices architecture: 8 independent business services with Spring Cloud Gateway, 3 Angular frontends segmented by role",
      exp2_detail3: "Billing engine (VAT, discounts, credits), digital prescription compliant with French veterinary law",
      exp2_detail4: "Kubernetes infrastructure on OVH: namespaces, TLS ingress, health probes, HPA, GitLab CI/CD \u2014 successful production deployment",
      exp3_num: "Experience 03",
      exp3_date: "Sep 2020 \u2014 Aug 2022",
      exp3_title: "Full Stack Developer (Work-Study)",
      exp3_company: "Capgemini Technology \u00b7 Michelin",
      exp3_detail1: "IGX Project \u2014 strategic financial management system overhaul: rewrite from VBA/Oracle to Spring Boot / Angular / PostgreSQL",
      exp3_detail2: "Event-driven integration pipeline (solo mission): high-availability Kafka consumer, offset management, dead-letter queues",
      exp3_detail3: "Development and integration of Talend jobs for cross-system financial data extraction and transformation",
      skills_label: "Skills",
      skills_title: "Tech Stack",
      security_tag: "Security Research",
      security_h3: "BugBounty.ch \u2014 Independent Researcher",
      security_desc: "Two critical vulnerabilities identified on production Swiss e-banking systems \u2014 authentication bypass and exposure of sensitive client data, with estimated impact on tens of thousands of accounts. Scope subject to FINMA regulation.",
      security_stat1_label: "Engagements",
      security_stat2_label: "Rewarded",
      security_stat3_label: "CHF earned",
      security_stat4_label: "Critical (CVSS 9+)",
      testimonials_label: "Testimonials",
      testimonials_title: "What people say about my work",
      testimonial1_text_front: "\"Yacine was a major asset on our remote management project. His mastery of Spring Boot and his architectural approach enabled us to deliver a robust solution managing +40k equipment...\"",
      testimonial1_text_back: "Yacine was a major asset on our remote management project. His mastery of Spring Boot and his architectural approach enabled us to deliver a robust solution managing +40k equipment. Very professional.",
      flip_hint: "Click to read more \u2192",
      testimonial2_text_front: "\"The microservices architecture of SIRIUS designed by Yacine perfectly met the needs of all 4 ENV schools. His ability to translate complex requirements into technical solutions...\"",
      testimonial2_text_back: "The microservices architecture of SIRIUS designed by Yacine perfectly met the needs of all 4 ENV schools. His ability to translate complex requirements into technical solutions is remarkable.",
      testimonial3_text_front: "\"Collaborating with Yacine on the IGX project at Michelin was a pleasure. His Kafka expertise and rigor on event-driven pipelines truly made the difference...\"",
      testimonial3_text_back: "Collaborating with Yacine on the IGX project at Michelin was a pleasure. His Kafka expertise and rigor on event-driven pipelines truly made the difference. Clean, well-tested code.",
      contact_title: "Ready to collaborate?",
      contact_subtitle: "Let\u2019s discuss your next project. I\u2019m available for remote freelance missions.",
      contact_label_email: "Email",
      contact_label_phone: "Phone",
      contact_label_location: "Location",
      contact_location_text: "Toulouse, France",
      contact_label_socials: "Socials",
      form_label_name: "Full name",
      form_placeholder_name: "Your name",
      form_label_email: "Email",
      form_placeholder_email: "your@email.com",
      form_label_subject: "Subject",
      form_placeholder_subject: "Subject of your message",
      form_label_message: "Message",
      form_placeholder_message: "Tell me about your project...",
      form_submit: "Send message",
      curtain_left: "LETS",
      curtain_right: "WORK",
      dock_home: "Home",
      dock_projects: "Projects",
      dock_experience: "Experience",
      dock_skills: "Skills",
      dock_testimonials: "Testimonials",
      dock_contact: "Contact",
      footer_title: "Let\u2019s work together"
    }
  };

  var currentLang = localStorage.getItem("lang") || "fr";

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

    restartTypewriter(t["hero_title_typewriter"]);
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    var btn = document.getElementById("langToggle");
    if (btn) btn.textContent = lang === "fr" ? "EN" : "FR";
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
    if (btn) btn.textContent = theme === "dark" ? "\u2600\ufe0f" : "\ud83c\udf19";

    // Update particle colors on theme change
    updateParticleColors();
  }

  // ─── Particle Constellation Background ───
  var particleColors = { dot: "rgba(126,180,210,0.6)", line: "rgba(126,180,210,0.12)", glow: "rgba(126,180,210,0.08)" };

  function updateParticleColors() {
    if (currentTheme === "light") {
      particleColors = { dot: "rgba(0,150,255,0.5)", line: "rgba(0,150,255,0.1)", glow: "rgba(0,150,255,0.06)" };
    } else {
      particleColors = { dot: "rgba(126,180,210,0.6)", line: "rgba(126,180,210,0.12)", glow: "rgba(126,180,210,0.08)" };
    }
  }

  (function initParticles() {
    var canvas = document.getElementById("heroCanvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var particles = [];
    var mouse = { x: -9999, y: -9999 };
    var PARTICLE_COUNT = 100;
    var CONNECT_DIST = 150;
    var MOUSE_RADIUS = 180;

    function resize() {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    }

    function createParticles() {
      particles = [];
      var w = canvas.offsetWidth;
      var h = canvas.offsetHeight;
      for (var i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: 1.2 + Math.random() * 1.8,
          baseR: 1.2 + Math.random() * 1.8
        });
      }
    }

    resize();
    createParticles();

    window.addEventListener("resize", function () {
      resize();
      createParticles();
    });

    canvas.addEventListener("mousemove", function (e) {
      var rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseleave", function () {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    function draw() {
      var w = canvas.offsetWidth;
      var h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Update and draw particles
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        // Mouse interaction - gentle attraction
        var dmx = mouse.x - p.x;
        var dmy = mouse.y - p.y;
        var distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < MOUSE_RADIUS && distMouse > 0) {
          var force = (1 - distMouse / MOUSE_RADIUS) * 0.02;
          p.vx += dmx * force;
          p.vy += dmy * force;
          p.r = p.baseR + (1 - distMouse / MOUSE_RADIUS) * 2;
        } else {
          p.r += (p.baseR - p.r) * 0.05;
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Restore drift if too slow
        var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed < 0.15) {
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        // Draw dot with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + 4, 0, Math.PI * 2);
        ctx.fillStyle = particleColors.glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = particleColors.dot;
        ctx.fill();
      }

      // Draw connections
      ctx.lineWidth = 1;
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            var opacity = 1 - dist / CONNECT_DIST;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particleColors.line.replace(/[\d.]+\)$/, (opacity * 0.15).toFixed(3) + ")");
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections
      if (mouse.x > -9000) {
        for (var i = 0; i < particles.length; i++) {
          var dx = mouse.x - particles[i].x;
          var dy = mouse.y - particles[i].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            var opacity = 1 - dist / MOUSE_RADIUS;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = particleColors.line.replace(/[\d.]+\)$/, (opacity * 0.25).toFixed(3) + ")");
            ctx.lineWidth = opacity * 1.5;
            ctx.stroke();
          }
        }
        ctx.lineWidth = 1;
      }

      requestAnimationFrame(draw);
    }
    draw();
  })();

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

  // ─── Navbar ───
  var navbar = document.getElementById("navbar");
  var navLinks = document.querySelectorAll(".navbar-links a");
  var hamburger = document.getElementById("hamburger");
  var navLinksContainer = document.getElementById("navLinks");

  // Scroll shadow
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // Smooth scroll
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.getElementById(link.dataset.section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // Close mobile menu
      navLinksContainer.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });

  // Active section tracking
  var sections = ["home", "projects", "experience", "skills", "testimonials", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function updateActiveNav() {
    var y = window.scrollY + window.innerHeight / 3;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.offsetTop <= y) current = s;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.dataset.section === current.id);
    });
  }
  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  // Hamburger toggle
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    navLinksContainer.classList.toggle("open");
  });

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

  // ─── EmailJS Contact Form ───
  // TODO: Replace these with your actual EmailJS credentials
  var EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
  var EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
  var EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var submitBtn = contactForm.querySelector(".form-submit");
      var originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === "fr" ? "Envoi en cours..." : "Sending...";

      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
        .then(function () {
          submitBtn.textContent = currentLang === "fr" ? "Message envoyé !" : "Message sent!";
          submitBtn.classList.add("form-submit--success");
          contactForm.reset();
          setTimeout(function () {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove("form-submit--success");
          }, 3000);
        }, function () {
          submitBtn.textContent = currentLang === "fr" ? "Erreur, réessayez" : "Error, try again";
          submitBtn.classList.add("form-submit--error");
          setTimeout(function () {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove("form-submit--error");
          }, 3000);
        });
    });
  }

  // ─── Init Controls ───
  setTheme(currentTheme);
  setLang(currentLang);

  document.getElementById("langToggle").addEventListener("click", function () {
    setLang(currentLang === "fr" ? "en" : "fr");
  });

  document.getElementById("themeToggle").addEventListener("click", function () {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
})();
