// Theme & Application Controller
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  bindSiteMetadata();
  initNavigation();
  initMobileMenu();

  // Page specific rendering (safely guarded)
  renderProjects("featured-projects", true);
  renderProjects("all-projects", false);
  renderExperience("home-experience", 2);
  renderExperience("about-experience");
  renderExperience("experience-list");
  renderBlogs("latest-blogs");
  renderBlogs("blog-list");
  renderSkills();
  renderProjectPage();
  renderBlogPage();
});

function initTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeButton(theme);

  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
      updateThemeButton(next);
    });
  });
}

function updateThemeButton(theme) {
  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  });
}

function bindSiteMetadata() {
  if (typeof SITE === "undefined") return;
  
  document.querySelectorAll("[data-site-name]").forEach(el => el.textContent = SITE.name);
  document.querySelectorAll("[data-site-role]").forEach(el => el.textContent = SITE.role);
  document.querySelectorAll("[data-location]").forEach(el => el.textContent = SITE.location);
  
  document.querySelectorAll("[data-email]").forEach(el => {
    el.textContent = SITE.email;
    el.href = `mailto:${SITE.email}`;
  });
  document.querySelectorAll("[data-linkedin]").forEach(el => el.href = SITE.linkedin);
  document.querySelectorAll("[data-github]").forEach(el => el.href = SITE.github);
  document.querySelectorAll("[data-leetcode]").forEach(el => el.href = SITE.leetcode);
}

function initNavigation() {
  const currentPath = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });
}

function initMobileMenu() {
  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if (!menu || !nav) return;

  menu.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menu.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  // Close menu when clicking outside or clicking a nav link
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !nav.contains(e.target) && nav.classList.contains("open")) {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Open navigation");
    }
  });
}

function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function copyEmail() {
  if (typeof SITE === "undefined" || !SITE.email) return;
  navigator.clipboard.writeText(SITE.email).then(() => {
    showToast("Email copied to clipboard!");
  }).catch(() => {
    showToast(`Email: ${SITE.email}`);
  });
}

function projectCard(p) {
  return `<article class="card project-card" data-tags="${p.tags.join(" ")}">
    <div>
      <div class="project-type">${p.type}</div>
      <h3>${p.title}</h3>
      <p class="muted">${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>
    <div class="bottom"><a class="text-link" href="project.html?id=${p.id}">View case study →</a></div>
  </article>`;
}

function blogCard(b) {
  return `<article class="card blog-card">
    <div class="blog-meta">${b.category}</div>
    <h3>${b.title}</h3>
    <p class="muted">${b.excerpt}</p>
    <a class="text-link" href="blog.html?post=${b.slug}">Read article →</a>
  </article>`;
}

function renderExperience(targetId, limit = null) {
  const el = document.getElementById(targetId);
  if (!el || typeof EXPERIENCE === "undefined") return;
  const items = limit ? EXPERIENCE.slice(0, limit) : EXPERIENCE;
  el.innerHTML = items.map(x => `<div class="timeline-item">
    <div class="timeline-period">${x.period}</div>
    <div>
      <h3>${x.role}</h3>
      <div class="muted"><strong>${x.company}</strong></div>
      <ul>${x.points.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>
  </div>`).join("");
}

let activeFilter = "All";

function renderProjects(targetId, featuredOnly = false) {
  const el = document.getElementById(targetId);
  if (!el || typeof PROJECTS === "undefined") return;

  if (targetId === "all-projects") {
    renderProjectFilters();
  }

  const items = featuredOnly
    ? PROJECTS.filter(p => p.featured)
    : (activeFilter === "All" ? PROJECTS : PROJECTS.filter(p => p.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase())));

  el.innerHTML = items.map(projectCard).join("");
}

function renderProjectFilters() {
  const filterContainer = document.getElementById("project-filters");
  if (!filterContainer || typeof PROJECTS === "undefined") return;

  const allTags = Array.from(new Set(PROJECTS.flatMap(p => p.tags)));
  const filterList = ["All", ...allTags.slice(0, 6)];

  filterContainer.innerHTML = filterList.map(tag => 
    `<button class="filter-btn ${activeFilter === tag ? "active" : ""}" onclick="filterProjects('${tag}')">${tag}</button>`
  ).join("");
}

function filterProjects(tag) {
  activeFilter = tag;
  renderProjects("all-projects", false);
}

function renderBlogs(targetId) {
  const el = document.getElementById(targetId);
  if (!el || typeof BLOGS === "undefined") return;
  el.innerHTML = BLOGS.map(blogCard).join("");
}

function renderSkills() {
  const el = document.getElementById("skills");
  if (!el || typeof SKILLS === "undefined") return;
  el.innerHTML = Object.entries(SKILLS).map(([group, items]) =>
    `<div class="skill-block"><h3>${group}</h3><div class="tags">${items.map(x => `<span class="tag">${x}</span>`).join("")}</div></div>`
  ).join("");
}

function renderProjectPage() {
  const titleEl = document.getElementById("project-title");
  if (!titleEl || typeof PROJECTS === "undefined") return;

  const caseStudyContainer = document.querySelector(".case-study");
  const id = new URLSearchParams(location.search).get("id");
  const p = PROJECTS.find(x => x.id === id);

  if (!p) {
    document.title = "Project Not Found | Sai Charan Tharigoppula";
    titleEl.textContent = "Project not found";
    const descEl = document.getElementById("project-description");
    if (descEl) descEl.textContent = "The requested project case study could not be found or has been moved.";
    if (caseStudyContainer) {
      caseStudyContainer.innerHTML = `<div class="card empty-state">
        <h2>Case study unavailable</h2>
        <p class="muted">Please check the URL or select a project from the portfolio list.</p>
        <div class="actions"><a class="btn btn-primary" href="projects.html">← Back to all projects</a></div>
      </div>`;
    }
    return;
  }

  document.title = `${p.title} | Sai Charan Tharigoppula`;
  titleEl.textContent = p.title;

  const descEl = document.getElementById("project-description");
  if (descEl) descEl.textContent = p.description;

  const tagsEl = document.getElementById("project-tags");
  if (tagsEl) tagsEl.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join("");

  const probEl = document.getElementById("project-problem");
  if (probEl) probEl.textContent = p.problem;

  const solEl = document.getElementById("project-solution");
  if (solEl) solEl.textContent = p.solution;

  const archEl = document.getElementById("project-architecture");
  if (archEl) archEl.innerHTML = p.architecture.map((x, idx) => `<div class="arch-step"><span>0${idx + 1}</span> ${x}</div>`).join("");

  const outEl = document.getElementById("project-outcomes");
  if (outEl) outEl.innerHTML = p.outcomes.map(x => `<li>${x}</li>`).join("");
}

function renderBlogPage() {
  const list = document.getElementById("blog-list");
  const reader = document.getElementById("blog-reader");
  if (!list || !reader || typeof BLOGS === "undefined") return;

  const slug = new URLSearchParams(location.search).get("post");
  if (!slug) {
    list.style.display = "grid";
    reader.style.display = "none";
    list.innerHTML = BLOGS.map(blogCard).join("");
    return;
  }

  const b = BLOGS.find(x => x.slug === slug);
  if (!b) {
    list.style.display = "none";
    reader.style.display = "block";
    reader.innerHTML = `<div class="card empty-state">
      <h2>Article not found</h2>
      <p class="muted">The post you are looking for does not exist.</p>
      <div class="actions"><a class="btn btn-secondary" href="blog.html">← All articles</a></div>
    </div>`;
    return;
  }

  document.title = `${b.title} | Sai Charan Tharigoppula`;
  list.style.display = "none";
  reader.style.display = "block";
  reader.innerHTML = `<article class="blog-post-full">
    <div class="blog-meta">${b.category}</div>
    <h2>${b.title}</h2>
    <div class="blog-body">${b.body.replace(/\n\n/g, "</p><p>")}</div>
    <div class="actions" style="margin-top:32px"><a class="btn btn-secondary" href="blog.html">← Back to all posts</a></div>
  </article>`;
}

function sendMail(e) {
  e.preventDefault();
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const msgEl = document.getElementById("message");
  if (!nameEl || !emailEl || !msgEl) return;

  const name = nameEl.value;
  const email = emailEl.value;
  const message = msgEl.value;
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}

