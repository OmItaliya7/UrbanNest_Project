# UrbanNest – Modern Real Estate Website

## Project Overview

UrbanNest is a modern real estate website built with **React and TypeScript**.  
The application showcases property projects, testimonials, and a contact form with validation and email integration.

The goal of this project was to practice building a **scalable frontend architecture**, implement **modern UI/UX patterns**, and follow **production-level best practices** such as reusable components, lazy loading, accessibility improvements, and performance optimizations.

---

## Tech Stack

### Frontend
- React
- TypeScript
- React Router DOM
- Tailwind CSS
- Framer Motion

### Tools & Libraries
- EmailJS (contact form)
- React Hot Toast (notifications)
- Vite (build tool)

### Deployment
- Vercel

---

## Features

- Responsive real estate website layout
- React Router based navigation
- Lazy loading of pages for performance optimization
- Reusable UI component system (Button, Input, Section, Container)
- Centralized animation utilities using Framer Motion
- Image optimization using WebP format
- Contact form with validation
- Spam protection using honeypot field
- Loading state and error handling for form submission
- SEO improvements with meta tags and OpenGraph support
- Accessibility improvements using ARIA attributes

---

## Folder Structure

```
UrbanNest/ 
├─ .env
├─ .git/
├─ .gitignore
├─ dist/
├─ node_modules/
├─ public/
│  ├─ favicon.svg
│  └─ header_img.webp
├─ src/
│  ├─ App.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ vite-env.d.ts
│  ├─ assets/
│  │  └─ images/
│  │     ├─ common/
│  │     │  ├─ brand_img.webp
│  │     │  ├─ Logo.webp
│  │     │  └─ Logo_White.webp
│  │     ├─ projects/
│  │     │  ├─ project_img_1.webp
│  │     │  ├─ project_img_2.webp
│  │     │  ├─ project_img_3.webp
│  │     │  ├─ project_img_4.webp
│  │     │  ├─ project_img_5.webp
│  │     │  └─ project_img_6.webp
│  │     └─ testimonials/
│  │        ├─ profile_img_1.webp
│  │        ├─ profile_img_2.webp
│  │        ├─ profile_img_3.webp
│  │        └─ star_icon.webp
│  ├─ components/
│  │  ├─ common/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Container.tsx
│  │  │  ├─ Input.tsx
│  │  │  ├─ Section.tsx
│  │  │  └─ SectionTitle.tsx
│  │  ├─ sections/
│  │  │  └─ Hero.tsx
│  │  └─ ui/
│  │     └─ Loader.tsx
│  ├─ data/
│  │  ├─ navigation.ts
│  │  ├─ projects.ts
│  │  └─ testimonials.ts
│  ├─ hooks/
│  │  └─ useContactForm.ts
│  ├─ layout/
│  │  ├─ AppLayout.tsx
│  │  ├─ Footer.tsx
│  │  └─ Header.tsx
│  ├─ pages/
│  │  ├─ About.tsx
│  │  ├─ Contact.tsx
│  │  ├─ ErrorPage.tsx
│  │  ├─ Home.tsx
│  │  ├─ Projects.tsx
│  │  └─ Testimonials.tsx
│  ├─ services/
│  │  └─ emailService.ts
│  ├─ types/
│  │  ├─ contact.ts
│  │  └─ images.d.ts
│  └─ utils/
│     ├─ animation.ts
│     └─ validateContactForm.ts
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ tailwind.config.js
├─ tsconfig.json
├─ vercel.json
└─ vite.config.js
```

---

## How to Run

Clone the repository

```bash
git clone https://github.com/OmItaliya7/UrbanNest.git
```

Navigate to the project directory

```bash
cd UrbanNest
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open in browser

```
http://localhost:5173
```

---

## Deployment

The project is deployed using **Vercel**.

Deployment steps:

1. Push project to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically

Live Demo

```
https://urbanest-project.vercel.app/
```

---

## Future Improvements

- Move EmailJS logic to backend API
- Add Google Analytics
- Add error monitoring with Sentry
- Implement reCAPTCHA for stronger spam protection

---

## License

This project is for **learning and portfolio purposes**. 
