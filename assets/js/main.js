/* ============================================================
   Victor G. Rocha — Currículo · Interações
   JS vanilla, sem dependências, sem build.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_KEY = 'cv.gonti.theme';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ----------------------------------------------------------
     Tema
     ---------------------------------------------------------- */
  function setTheme(theme, persist) {
    root.dataset.theme = theme;
    if (persist) {
      try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    }
  }

  function toggleTheme() {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  }

  // Acompanha o sistema enquanto o usuário não escolher manualmente
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  var onSystemChange = function (e) {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (err) {}
    if (!saved) setTheme(e.matches ? 'dark' : 'light', false);
  };
  if (systemDark.addEventListener) systemDark.addEventListener('change', onSystemChange);
  else if (systemDark.addListener) systemDark.addListener(onSystemChange);

  /* ----------------------------------------------------------
     Menu mobile
     ---------------------------------------------------------- */
  var nav = $('#nav');
  var navToggle = $('.nav-toggle');

  function setMenu(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('is-locked', open);
  }

  function isMenuOpen() { return !!nav && nav.classList.contains('is-open'); }

  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isMenuOpen()) {
      setMenu(false);
      if (navToggle) navToggle.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1100 && isMenuOpen()) setMenu(false);
  });

  /* ----------------------------------------------------------
     Ações delegadas
     ---------------------------------------------------------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action], [data-copy]');
    if (!el) return;

    var action = el.getAttribute('data-action');

    if (action === 'toggle-theme') { toggleTheme(); return; }
    if (action === 'toggle-menu') { setMenu(!isMenuOpen()); return; }
    if (action === 'to-top') {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
      return;
    }
    if (action === 'toggle-job') { toggleJob(el); return; }

    var text = el.getAttribute('data-copy');
    if (text) { copyText(text, el); }
  });

  /* ----------------------------------------------------------
     Copiar para a área de transferência + toast
     ---------------------------------------------------------- */
  var toast = $('#toast');
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2400);
  }

  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }

  function copyText(text, el) {
    var done = function () {
      showToast('Copiado: ' + text);
      var label = $('span', el);
      if (label) {
        var original = label.textContent;
        label.textContent = 'Copiado!';
        setTimeout(function () { label.textContent = original; }, 2000);
      }
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(function () {
        if (legacyCopy(text)) done();
        else showToast('Não foi possível copiar. Selecione manualmente.');
      });
    } else if (legacyCopy(text)) {
      done();
    } else {
      showToast('Não foi possível copiar. Selecione manualmente.');
    }
  }

  /* ----------------------------------------------------------
     Scroll: header, barra de progresso, botão topo
     ---------------------------------------------------------- */
  var header = $('#header');
  var progressBar = $('#progress-bar');
  var toTop = $('.to-top');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? Math.min(y / max, 1) : 0;

    if (header) header.classList.toggle('is-scrolled', y > 12);
    if (progressBar) progressBar.style.transform = 'scaleX(' + ratio + ')';
    if (toTop) toTop.classList.toggle('is-visible', y > window.innerHeight * 0.6);

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ----------------------------------------------------------
     Reveal on scroll
     ---------------------------------------------------------- */
  var revealEls = $$('.reveal');
  revealEls.forEach(function (el) {
    var d = el.getAttribute('data-reveal-delay');
    if (d) el.style.setProperty('--reveal-delay', d);
  });

  if (reduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealIO = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { revealIO.observe(el); });
  }

  /* ----------------------------------------------------------
     Scrollspy da navegação
     ---------------------------------------------------------- */
  var navLinks = $$('.nav__link');
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute('href');
      return id && id.charAt(0) === '#' ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spyIO.observe(s); });
  }

  /* ----------------------------------------------------------
     Contadores animados
     ---------------------------------------------------------- */
  function formatNumber(value, decimals) {
    try {
      return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }).format(value);
    } catch (e) {
      return decimals ? value.toFixed(decimals) : String(Math.round(value));
    }
  }

  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;

    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1500;
    var start = null;

    function frame(now) {
      if (start === null) start = now;
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + formatNumber(target * eased, decimals) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var counters = $$('[data-count]');
  if (counters.length && !reduced && 'IntersectionObserver' in window) {
    var countIO = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { countIO.observe(el); });
  }

  /* ----------------------------------------------------------
     Anos de carreira e durações — calculados, nunca escritos à mão.
     Assim o currículo não envelhece sozinho entre um deploy e outro.
     ---------------------------------------------------------- */
  function monthsBetween(startISO, endISO) {
    var s = startISO.split('-');
    var start = new Date(Number(s[0]), Number(s[1]) - 1, 1);
    var end;
    if (endISO) {
      var e = endISO.split('-');
      end = new Date(Number(e[0]), Number(e[1]) - 1, 1);
    } else {
      var now = new Date();
      end = new Date(now.getFullYear(), now.getMonth(), 1);
    }
    // Inclusivo nas duas pontas — mesma contagem que o LinkedIn usa,
    // para o site não divergir do perfil.
    return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  }

  function humanDuration(months) {
    if (months < 1) months = 1;
    var years = Math.floor(months / 12);
    var rest = months % 12;
    var parts = [];
    if (years) parts.push(years + (years === 1 ? ' ano' : ' anos'));
    if (rest) parts.push(rest + (rest === 1 ? ' mês' : ' meses'));
    return parts.join(' e ');
  }

  // Duração de cada cargo, anexada ao período já escrito no HTML
  $$('[data-start]').forEach(function (el) {
    var months = monthsBetween(el.getAttribute('data-start'), el.getAttribute('data-end') || '');
    var slot = $('[data-duration]', el);
    if (slot) slot.textContent = humanDuration(months);
  });

  // Anos de carreira no bloco de números
  var careerEl = $('[data-career-since]');
  if (careerEl) {
    var careerYears = Math.floor(monthsBetween(careerEl.getAttribute('data-career-since'), '') / 12);
    careerEl.setAttribute('data-count', String(careerYears));
    careerEl.textContent = String(careerYears);
  }

  /* ----------------------------------------------------------
     Detalhes das experiências (recolhíveis)
     O HTML entrega tudo aberto e o botão escondido: sem JS,
     nenhuma informação do currículo desaparece.
     ---------------------------------------------------------- */
  function toggleJob(btn) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
    panel.classList.toggle('is-open', !open);
    var label = $('span', btn);
    if (label) label.textContent = open ? 'Ver atividades' : 'Ocultar atividades';
  }

  $$('[data-action="toggle-job"]').forEach(function (btn) {
    btn.hidden = false;
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    // O cargo atual já nasce aberto; os anteriores começam recolhidos.
    var startOpen = btn.closest('.job') && btn.closest('.job').classList.contains('job--current');
    btn.setAttribute('aria-expanded', String(!!startOpen));
    panel.hidden = !startOpen;
    var label = $('span', btn);
    if (label) label.textContent = startOpen ? 'Ocultar atividades' : 'Ver atividades';
  });

  /* ----------------------------------------------------------
     Papéis rotativos do hero
     ---------------------------------------------------------- */
  var rotator = $('#rotator');
  if (rotator && !reduced) {
    var words = [
      'chatbots que resolvem',
      'APIs em C# que integram',
      'fluxos conversacionais',
      'backends que aguentam'
    ];
    var slot = $('.rotator__text', rotator);
    var index = 0;

    setInterval(function () {
      if (document.hidden || !slot) return;
      slot.classList.remove('is-in');
      slot.classList.add('is-out');
      setTimeout(function () {
        index = (index + 1) % words.length;
        slot.textContent = words[index];
        slot.classList.remove('is-out');
        slot.classList.add('is-in');
      }, 320);
    }, 3200);
  }

  /* ----------------------------------------------------------
     Spotlight que segue o cursor
     ---------------------------------------------------------- */
  if (!reduced && window.matchMedia('(hover: hover)').matches) {
    $$('.spotlight').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ----------------------------------------------------------
     Cubo 3D das especialidades
     Face N ↔ painel N ↔ botão N: os três andam juntos.
     ---------------------------------------------------------- */
  var cube = $('#cube');
  if (cube) {
    var faces = $$('.cube__face', cube);
    var dots = $$('[data-face-btn]');
    var panels = $$('.platform');
    var count = faces.length;
    var turn = 0;          // acumulador — permite girar sempre pelo caminho mais curto
    var autoTimer = null;
    var paused = false;
    var inView = false;

    function currentFace() { return ((turn % count) + count) % count; }

    function setFace(target) {
      var diff = ((target - currentFace()) % count + count) % count;
      if (diff > count / 2) diff -= count;  // caminho mais curto
      turn += diff;

      cube.style.setProperty('--ry', (-90 * turn) + 'deg');

      faces.forEach(function (f, i) { f.classList.toggle('is-front', i === target); });
      dots.forEach(function (d, i) {
        var on = i === target;
        d.classList.toggle('is-active', on);
        d.setAttribute('aria-selected', String(on));
      });
      panels.forEach(function (p, i) { p.classList.toggle('is-active', i === target); });
    }

    function scheduleAuto() {
      clearTimeout(autoTimer);
      if (reduced || paused || !inView) return;
      autoTimer = setTimeout(function () {
        if (!document.hidden) setFace((currentFace() + 1) % count);
        scheduleAuto();
      }, 5000);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        setFace(i);
        paused = true;          // interação manual assume o controle
        clearTimeout(autoTimer);
      });
    });

    var stage = cube.closest('.platforms__stage');
    if (stage) {
      stage.addEventListener('pointerenter', function () { paused = true; clearTimeout(autoTimer); });
      stage.addEventListener('pointerleave', function () { paused = false; scheduleAuto(); });
    }

    if ('IntersectionObserver' in window) {
      var cubeIO = new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        if (inView) scheduleAuto();
        else clearTimeout(autoTimer);
      }, { threshold: 0.3 });
      cubeIO.observe(cube);
    } else {
      inView = true;
      scheduleAuto();
    }

    setFace(0);
  }

  /* ----------------------------------------------------------
     Inclinação 3D dos cartões de certificação
     ---------------------------------------------------------- */
  if (!reduced && window.matchMedia('(hover: hover)').matches) {
    $$('.tilt').forEach(function (card) {
      var inner = card.firstElementChild;
      if (!inner) return;

      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        inner.style.setProperty('--ryy', ((px - 0.5) * 13).toFixed(2) + 'deg');
        inner.style.setProperty('--rx', ((0.5 - py) * 13).toFixed(2) + 'deg');
        inner.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        inner.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });

      card.addEventListener('pointerleave', function () {
        inner.style.setProperty('--ryy', '0deg');
        inner.style.setProperty('--rx', '0deg');
      });
    });
  }

  /* ----------------------------------------------------------
     Ano no rodapé
     ---------------------------------------------------------- */
  var year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
