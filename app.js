document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-site-name]").forEach(el => el.textContent = SITE.name);
  document.querySelectorAll("[data-site-role]").forEach(el => el.textContent = SITE.role);
  document.querySelectorAll("[data-email]").forEach(el => {
    el.textContent = SITE.email;
    el.href = `mailto:${SITE.email}`;
  });
  document.querySelectorAll("[data-linkedin]").forEach(el => el.href = SITE.linkedin);
  document.querySelectorAll("[data-github]").forEach(el => el.href = SITE.github);
  document.querySelectorAll("[data-leetcode]").forEach(el => el.href = SITE.leetcode);
  document.querySelectorAll("[data-location]").forEach(el => el.textContent = SITE.location);

  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
  });

  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
});

function projectCard(p) {
  return `<article class="card project-card">
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
    <div class="blog-meta">${b.category} · ${b.date}</div>
    <h3>${b.title}</h3>
    <p class="muted">${b.excerpt}</p>
    <a class="text-link" href="blog.html?post=${b.slug}">Read article →</a>
  </article>`;
}

function renderExperience(targetId, limit = null) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const items = limit ? EXPERIENCE.slice(0, limit) : EXPERIENCE;
  el.innerHTML = items.map(x => `<div class="timeline-item">
    <div class="timeline-period">${x.period}</div>
    <div><h3>${x.role}</h3><div class="muted"><strong>${x.company}</strong></div>
    <ul>${x.points.map(p => `<li>${p}</li>`).join("")}</ul></div>
  </div>`).join("");
}

function renderProjects(targetId, featuredOnly = false) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const items = featuredOnly ? PROJECTS.filter(p => p.featured) : PROJECTS;
  el.innerHTML = items.map(projectCard).join("");
}

function renderBlogs(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = BLOGS.map(blogCard).join("");
}

function renderSkills() {
  const el = document.getElementById("skills");
  if (!el) return;
  el.innerHTML = Object.entries(SKILLS).map(([group, items]) =>
    `<div class="skill-block"><h3>${group}</h3><div class="tags">${items.map(x => `<span class="tag">${x}</span>`).join("")}</div></div>`
  ).join("");
}

function renderProjectPage() {
  const id = new URLSearchParams(location.search).get("id");
  const p = PROJECTS.find(x => x.id === id);
  if (!p) {
    document.getElementById("project-title").textContent = "Project not found";
    return;
  }
  document.title = `${p.title} | Sai Charan Tharigoppula`;
  document.getElementById("project-title").textContent = p.title;
  document.getElementById("project-description").textContent = p.description;
  document.getElementById("project-tags").innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
  document.getElementById("project-problem").textContent = p.problem;
  document.getElementById("project-solution").textContent = p.solution;
  document.getElementById("project-architecture").innerHTML = p.architecture.map(x => `<div class="arch-step">${x}</div>`).join("");
  document.getElementById("project-outcomes").innerHTML = p.outcomes.map(x => `<li>${x}</li>`).join("");
}

function renderBlogPage() {
  const list = document.getElementById("blog-list");
  const reader = document.getElementById("blog-reader");
  if (!list || !reader) return;
  const slug = new URLSearchParams(location.search).get("post");
  if (!slug) {
    list.innerHTML = BLOGS.map(blogCard).join("");
    return;
  }
  const b = BLOGS.find(x => x.slug === slug);
  if (!b) { reader.style.display = "block"; reader.innerHTML = "<p>Post not found.</p>"; return; }
  list.style.display = "none";
  reader.style.display = "block";
  reader.innerHTML = `<div class="blog-meta">${b.category} · ${b.date}</div>
    <h2>${b.title}</h2><p class="muted">${b.body}</p>
    <div class="actions"><a class="btn btn-secondary" href="blog.html">← All posts</a></div>`;
}

function sendMail(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}

renderProjects("featured-projects", true);
renderProjects("all-projects", false);
renderExperience("home-experience", 1);
renderExperience("about-experience");
renderExperience("experience-list");
renderBlogs("latest-blogs");
renderBlogs("blog-list");
renderSkills();
renderProjectPage();
renderBlogPage();
