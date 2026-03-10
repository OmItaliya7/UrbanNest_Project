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
UrbanNest
│
├── public
│   └── header_img.webp
│
├── src
│   ├── assets
│   │   └── images
│   │
│   ├── components
│   │   ├── common
│   │   │   Button.tsx
│   │   │   Input.tsx
│   │   │   Container.tsx
│   │   │   Section.tsx
│   │   │   SectionTitle.tsx
│   │   │
│   │   └── UI
│   │       Loader.tsx
│   │
│   ├── data
│   │   projects.ts
│   │   testimonials.ts
│   │
│   ├── layout
│   │   AppLayout.tsx
│   │   Header.tsx
│   │   Footer.tsx
│   │
│   ├── pages
│   │   Home.tsx
│   │   About.tsx
│   │   Projects.tsx
│   │   Testimonials.tsx
│   │   Contact.tsx
│   │   ErrorPage.tsx
│   │
│   ├── utils
│   │   animation.ts
│   │   validateContactForm.ts
│   │
│   ├── types
│   │   images.d.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
└── vite.config.js
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
https://urban-nest-project.vercel.app/
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