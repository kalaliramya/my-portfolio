# My Portfolio

Personal portfolio website for **Kalali Ramya** — Full Stack .NET Developer — built with **React** and **Vite**.

Showcases my experience, skills, and projects, with a contact section for opportunities.

---

## ✨ Features

- **Hero section** with an animated "code panel" showing a live-styled developer profile
- **About Me** section
- **Skills** grid grouped by Frontend, Backend, and Tools
- **Projects** section highlighting real backend/API projects (JWT auth, Razorpay integration, clean architecture)
- **Experience timeline** covering my professional journey
- **Contact section** with clickable email, phone, LinkedIn, and GitHub cards, plus a message form
- Smooth scroll-reveal animations powered by [AOS](https://michalsnik.github.io/aos/)
- Fully responsive layout

---

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool & dev server
- [AOS](https://michalsnik.github.io/aos/) — scroll animations
- ESLint — code linting

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/            # Images
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CodePanel.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── config.js      # Site-wide content/config (name, contact info, etc.)
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/kalaliramya/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Runs the app in development mode with hot module reloading. Open the printed local URL (usually `http://localhost:5173`) in your browser.

### Build

```bash
npm run build
```

Builds the app for production into the `dist/` folder.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## ⚙️ Configuration

Site content such as name, title, tagline, and contact details lives in `src/data/config.js`. Update this file to personalize the content without digging through individual components.

```js
const config = {
  name: "Kalali Ramya",
  title: ".NET Developer",
  contact: {
    email: "your-email@example.com",
    phone: "+91XXXXXXXXXX",
    github: "github.com/yourusername",
    linkedin: "linkedin.com/in/yourusername",
  },
  // ...
};
```

> **Note:** Since this is a public repository, avoid committing sensitive personal information (like a phone number) you don't want publicly visible in source form.

---

## 📦 Deployment

This project can be deployed on any static hosting platform:

- **Vercel** — connect the GitHub repo and deploy with zero config
- **Netlify** — drag-and-drop the `dist/` folder or connect via Git
- **GitHub Pages** — build and push the `dist/` folder to a `gh-pages` branch

---

## 📬 Contact

- **Email:** ramyagoud582@gmail.com
- **GitHub:** [github.com/kalaliramya](https://github.com/kalaliramya)
- **LinkedIn:** [linkedin.com/in/ramya-kalali-dotnetdeveloper](https://linkedin.com/in/ramya-kalali-dotnetdeveloper/)

---

## 📄 License

This project is open source and available for personal reference. Feel free to fork it for your own portfolio.
