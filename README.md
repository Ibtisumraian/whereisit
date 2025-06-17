# 📦 WhereIsIt - Lost & Found Items Website (Client)

A modern full-stack web application to help people post and find lost or found items. This is the client-side repository built using React and TailwindCSS, designed with responsiveness and user experience in mind.

🔗 **Live Site:** [https://whereisit-app.web.app/](https://whereisit-app.web.app/)  
📦 **Server Repo:** [GitHub - Server](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-Ibtisumraian)  
💻 **Client Repo:** [GitHub - Client](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-Ibtisumraian)

---

## 🧠 Purpose

This project is developed as part of **Assignment 11** for showcasing full-stack development skills, including:
- CRUD operations
- User authentication
- JWT integration
- Responsive UI/UX
- File uploads & data management

---

## 🚀 Key Features

- 🔐 **Authentication:** Email/password login + Google login (with Firebase)
- 🧾 **Add Lost/Found Items:** Private route to add item posts with date, location, category
- 🔍 **Search Functionality:** Search posts by title or location
- 📅 **Recovered Flow:** Mark items as recovered with location, date, and person info
- 👤 **User Dashboard:** View, update, and delete own posts
- ✅ **All Recovered Page:** Displays all items marked as recovered
- ⚙️ **JWT Protected Routes:** Ensures route protection with token validation
- 🔁 **Dynamic Layout:** Toggle between table/card view in "All Recovered" page
- 🎨 **Responsive & Eye-catching Design** with Framer Motion and Tailwind
- 📛 **404 Page:** Custom not-found page for invalid routes
- 🛎️ **Toast & Alerts:** For all important actions like create, update, delete
- 🔄 **Dynamic Titles:** Page titles change with each route

---

## 🧰 Tech Stack & Packages

### Frontend:
- **React.js** (Vite)
- **React Router**
- **TailwindCSS** + DaisyUI
- **Framer Motion**
- **React Hook Form**
- **React Datepicker**
- **SweetAlert2**
- **JWT Decode**

---


## 🧰 NPM Packages Used

These are packages required for the application to run:

- **@emotion/react@^11.14.0** – Library for writing CSS-in-JS
- **@tailwindcss/vite@^4.1.8** – TailwindCSS integration for Vite
- **axios@^1.10.0** – Promise-based HTTP client for API requests
- **bootstrap@^5.3.6** – Front-end CSS framework
- **date-fns@^4.1.0** – Modern JavaScript date utility library
- **firebase@^11.8.1** – User authentication and backend integration
- **framer-motion@^12.16.0** – Animation library for React
- **keen-slider@^6.8.6** – Lightweight, responsive slider library
- **lottie-react@^2.4.1** – Render animations from Lottie JSON files
- **react@^19.1.0** – Core React library
- **react-awesome-reveal@^4.3.1** – Animation library for reveal effects
- **react-bootstrap@^2.10.10** – Bootstrap components built with React
- **react-datepicker@^8.4.0** – Date picker component for React
- **react-dom@^19.1.0** – React DOM rendering
- **react-helmet-async@^2.0.5** – Manage HTML document head for SEO
- **react-icons@^5.5.0** – Icon library for React applications
- **react-router@^7.6.2** – Declarative routing for React
- **react-simple-typewriter@^5.0.1** – Typing effect component for text animations
- **react-toastify@^11.0.5** – Toast notifications with rich customization
- **react-tooltip@^5.28.1** – Lightweight and customizable tooltip component
- **sweetalert2@^11.22.0** – Stylish alert and confirmation dialogs
- **swiper@^11.2.8** – Modern touch slider for carousels
- **tailwindcss@^4.1.8** – Utility-first CSS framework for rapid UI development

---

## ⚠️ Known Issues

- In rare cases, reloading a private route may show a flash of login page.
- Search is case-insensitive but location filter may need refinement.
- Initially will set automatically but it may or may not need a reload.

---

## 📄 License

This project is for educational purposes only. All rights reserved by the developer.

---

## 👤 Author

**Ibtisum Raian**  
Email: ibtisumraian@gmail.com  
GitHub: [Ibtisumraian](https://github.com/Ibtisumraian)

---



## 🔐 Environment Variables

