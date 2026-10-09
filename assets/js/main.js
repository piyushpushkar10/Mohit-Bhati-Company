/* =========================================================
   Site interactivity: config injection, nav, counters, tabs
   ========================================================= */
(function () {
  var C = window.SITE_CONFIG || {};

  function fillConfig() {
    document.querySelectorAll("[data-cfg]").forEach(function (el) {
      var path = el.getAttribute("data-cfg").split(".");
      var val = C;
      path.forEach(function (k) { val = val ? val[k] : undefined; });
      if (val === undefined) return;
      el.textContent = val;
    });
    document.querySelectorAll("[data-cfg-href]").forEach(function (el) {
      var path = el.getAttribute("data-cfg-href").split(".");
      var val = C;
      path.forEach(function (k) { val = val ? val[k] : undefined; });
      if (val !== undefined) el.setAttribute("href", val);
    });
    document.querySelectorAll("title[data-cfg-title]").forEach(function (el) {
      el.textContent = el.textContent.replace("{{company}}", C.companyName || "");
    });
    document.querySelectorAll(".js-company-name").forEach(function (el) {
      el.textContent = C.companyName || el.textContent;
    });
  }

  function renderOffices() {
    var wrap = document.getElementById("offices-list");
    if (!wrap || !C.offices) return;
    wrap.innerHTML = C.offices.map(function (o) {
      return (
        '<div class="office-card">' +
        '<span class="badge">Regional Office</span>' +
        "<h4>" + o.city + "</h4>" +
        "<p>" + o.address + "</p>" +
        "</div>"
      );
    }).join("");
  }

  function renderMap() {
    var frame = document.getElementById("map-frame");
    if (!frame) return;
    var q = encodeURIComponent(C.mapEmbedQuery || C.hq.address || "");
    frame.src = "https://www.google.com/maps?q=" + q + "&output=embed";
  }

  function navToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".nav-menu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
    document.querySelectorAll(".nav-menu > li").forEach(function (li) {
      var btn = li.querySelector(":scope > button, :scope > a");
      if (!li.querySelector(".dropdown")) return;
      btn.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          li.classList.toggle("dd-open");
        }
      });
    });
  }

  function backToTop() {
    var btn = document.querySelector(".back-to-top");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 500);
    });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function counters() {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        obs.unobserve(el);
        var target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var isDecimal = el.getAttribute("data-count").indexOf(".") > -1;
        var start = 0;
        var duration = 1200;
        var startTime = null;
        function step(ts) {
          if (!startTime) startTime = ts;
          var progress = Math.min((ts - startTime) / duration, 1);
          var value = start + (target - start) * progress;
          el.textContent = (isDecimal ? value.toFixed(1) : Math.floor(value)) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { obs.observe(el); });
  }

  function formTabs() {
    var tabs = document.querySelectorAll(".form-tab");
    if (!tabs.length) return;
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("active"); });
        document.querySelectorAll(".form-panel").forEach(function (p) { p.classList.remove("active"); });
        tab.classList.add("active");
        document.getElementById(tab.getAttribute("data-target")).classList.add("active");
      });
    });
  }

  function contactForms() {
    document.querySelectorAll("form.form").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var note = form.querySelector(".form-note");
        if (note) {
          note.textContent = "Thanks! Your message has been noted. We'll get back to you shortly.";
          note.style.color = "var(--primary)";
        }
        form.reset();
      });
    });
  }

  function setActiveNav() {
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-menu a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href && href.split("#")[0] === path) {
        a.closest("li").classList.add("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    fillConfig();
    renderOffices();
    renderMap();
    navToggle();
    backToTop();
    counters();
    formTabs();
    contactForms();
    setActiveNav();
  });
})();
