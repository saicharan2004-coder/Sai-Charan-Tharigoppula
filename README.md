# Sai Charan — Personal AI Engineering Portfolio

A minimal, light-blue, responsive personal website built with plain HTML, CSS and JavaScript.

## Files

- `index.html` — homepage
- `about.html` — about + skills + background
- `projects.html` — all projects
- `project.html` — reusable project case-study page
- `experience.html` — full experience
- `blog.html` — weekly blog listing + article reader
- `contact.html` — contact page
- `data.js` — **main editing file** for your name, links, skills, projects, experience and blog posts
- `styles.css` — visual design
- `app.js` — rendering/navigation logic
- `assets/profile.png` — supplied profile image

## Editing in Antigravity

Start with `data.js`. You can update:
1. `SITE` for links/contact
2. `SKILLS` for technologies
3. `PROJECTS` for portfolio projects
4. `EXPERIENCE` for roles
5. `BLOGS` every week for new posts

For a new blog post, add another object to `BLOGS` with:
- `slug`
- `title`
- `date`
- `category`
- `excerpt`
- `body`

No framework or build step is required.

## Before publishing

- Replace `SITE.resume` with your real resume URL/file.
- Add real project screenshots/demo links where available.
- Replace any project wording that you cannot publicly disclose.
- Add measurable outcomes only where you can substantiate them.
- Add a favicon and analytics if desired.

## Local preview

Open `index.html` in a browser, or use any simple local static server.
