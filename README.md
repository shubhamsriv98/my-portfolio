# Portfolio Website

A React portfolio inspired by [ashutoshsaraf.me](https://ashutoshsaraf.me/), built with Vite and deployable to GitHub Pages.

## Features

- Hero section with typing animation
- Education, Experience, and Projects horizontal card scrollers
- Interactive draggable honeycomb skills sections
- Contact form and social links grid
- Scroll progress bar and section banner
- Fully responsive mobile navigation

## Customize Your Content

Edit `src/data/portfolioData.js` with your:

- Name, logo initials, and profile photo
- Education, experience, and projects
- Technical and non-technical skills
- Social media links
- Resume PDF (place `my_resume.pdf` in the `public/` folder)

## Local Development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio`)
2. Update `base` in `vite.config.js` to match your repo name:
   ```js
   base: '/my-portfolio/',
   ```
   Use `base: '/'` if the repo is named `yourusername.github.io`
3. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
4. In your GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**
5. The workflow in `.github/workflows/deploy.yml` will build and deploy automatically

Your site will be live at `https://shubhamsriv98.github.io/my-portfolio/`

## Contact Form

GitHub Pages is static hosting. For a working contact form, either:

- Sign up at [Formspree](https://formspree.io) and set `formEndpoint` in `portfolioData.js`
- Deploy to [Netlify](https://netlify.com) instead (supports Netlify Forms out of the box)

## Tech Stack

- React 19
- Vite 6
- Plain CSS (matching the original design)
