# 💙 Confidential Wellness Connect  
### Team MindLink — Rishiverse Hackathon 2025

A lightweight, secure, and privacy-focused web app that allows students to confidentially book wellness or counseling sessions with university counselors — built entirely using **React.js, HTML, CSS, and JavaScript**, with no backend or database.

---

## 🧩 Problem Statement
**PS3 — Confidential Wellness Connect**

> The goal is to create a secure, confidential, and user-friendly system for students to book wellness and guidance sessions with designated faculty or counselors.

Our solution ensures a private booking experience within the browser itself — simple, elegant, and reliable even without internet-side data storage.

---

## 🚀 Features
- 🧠 **Confidential Booking Flow:** Students can book wellness sessions privately.  
- 👩‍🏫 **Counselor Dashboard:** Displays appointments locally, simulating counselor view.  
- 🔄 **Reschedule & Cancel:** Update or delete sessions from browser storage.  
- 🧘‍♀️ **Calm, Minimal UI:** Designed for a peaceful wellness experience.  
- 💾 **Local Data Storage:** Uses `localStorage` to simulate persistence (no database).  
- 🪄 **Completely Frontend:** Runs fully in browser — safe, simple, and easy to deploy.

---

## ⚙️ Tech Stack
| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend Framework** | React.js | Handles app flow and components |
| **UI Styling** | HTML5, CSS3 | Layout and responsive design |
| **Logic & State** | Vanilla JavaScript + React Hooks | Manage form and app state |
| **Storage** | Browser `localStorage` | Simulates saving appointments |
| **Routing** | React Router DOM | Navigation between pages |
| **Hosting** | GitHub Pages / Netlify | Free deployment |

---
## 📁 Folder Structure

Below is the **complete project folder structure** you need to create:  

```bash
├── frontend-app
│ ├── (auth)
│ │ ├── components
│ │ │ └── AuthBootstrap.tsx
│ │ ├── layout.tsx
│ │ ├── login
│ │ │ ├── components
│ │ │ │ ├── GoogleSignIn.tsx
│ │ │ │ └── LoginForm.tsx
│ │ │ ├── hooks
│ │ │ │ └── useLoginForm.tsx
│ │ │ ├── page.tsx
│ │ │ └── types.ts
│ │ └── reset-password
│ │ ├── components
│ │ │ ├── ConfirmForm.tsx
│ │ │ └── RequestForm.tsx
│ │ ├── confirm
│ │ │ └── page.tsx
│ │ ├── hooks
│ │ │ ├── useResetPasswordConfirmForm.tsx
│ │ │ └── useResetPasswordRequestForm.ts
│ │ └── request
│ │ └── page.tsx
│ ├── (erp)
│ │ ├── attendance
│ │ │ └── page.tsx
│ │ ├── clubs
│ │ │ └── page.tsx
│ │ ├── dashboard
│ │ │ ├── components
│ │ │ │ └── TestComponetForAuth.tsx
│ │ │ └── page.tsx
│ │ ├── layout.tsx
│ │ ├── loading.tsx
│ │ └── profile
│ ├── (lms)
│ │ ├── layout.tsx
│ │ ├── lms
│ │ │ ├── calendar
│ │ │ │ └── page.tsx
│ │ │ └── dashboard
│ │ │ └── page.tsx
│ │ └── loading.tsx
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── not-found.tsx
│ ├── page.tsx
│ └── terms-of-service
│ └── page.tsx
├── components
│ ├── layout
│ │ ├── AppHeader.tsx
│ │ ├── AppShell.tsx
│ │ ├── AppSidebar.tsx
│ │ ├── ERPLayout.tsx
│ │ ├── LMSLayout.tsx
│ │ ├── MobileNav.tsx
│ │ ├── ModeSwitcher.tsx
│ │ └── SwitchButton.tsx
│ ├── shared
│ │ ├── atoms
│ │ │ ├── Button
│ │ │ │ └── index.tsx
│ │ │ ├── Input
│ │ │ │ └── index.tsx
│ │ │ ├── Label
│ │ │ │ └── index.tsx
│ │ │ └── Text
│ │ │ └── index.tsx
│ │ └── molecules
│ │ ├── BackButton
│ │ │ └── index.tsx
│ │ ├── Button
│ │ │ └── index.tsx
│ │ ├── Input
│ │ │ └── index.tsx
│ │ ├── NavButton
│ │ │ └── index.tsx
│ │ ├── PasswordInput
│ │ │ └── index.tsx
│ │ └── temp
│ └── ui
│ ├── button.tsx
│ ├── input.tsx
│ └── label.tsx
├── config
├── constants
│ ├── endpoints.ts
│ └── ui.ts
├── contexts
├── features
│ ├── auth
│ │ ├── authApi.ts
│ │ ├── authSelectors.ts
│ │ ├── authSlice.ts
│ │ ├── authThunk.ts
│ │ ├── tokenStorage.ts
│ │ ├── TokenStorageInitializer.ts
│ │ └── types.ts
│ └── mode
│ └── modeSlice.ts
├── hooks
├── lib
│ ├── axios.ts
│ └── utils.ts
├── mocks
├── schemas
│ └── auth
│ └── LoginSchema.ts
├── store
│ ├── hooks.ts
│ ├── index.ts
│ ├── ReduxProvider.tsx
│ └── rootReducer.ts
├── styles
├── tests
├── types
└── utility
└── crypto.ts

backend-app/
|
│── prisma/
│ ├── schema.prisma # Database schema (normalized tables)
│ ├── migrations/ # Prisma migration files
│
│── src/
│
│ ├── middlewares/
│ │ ├── auth.middleware.js # JWT validation
│ │ ├── error.middleware.js # Centralized error handler
│ │ └── validate.middleware.js# Request validation
│ │
│ ├── utils/
│ │ ├── jwt.js # JWT sign & verify helpers
│ │ ├── bcrypt.js # Hash & compare passwords
│ │ └── logger.js # Logging utility
│ │
│ ├── services/
│ │ ├── user.service.js # Business logic for users
│ │ ├── auth.service.js # Business logic for authentication
│ │ └── post.service.js # Example service (blog posts)
│ │
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ ├── user.controller.js
│ │ └── post.controller.js
│ │
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── user.routes.js
│ │ └── post.routes.js
│ │
│ ├── app.js # Express app setup
│ └── server.js # Server entry point
│
│── .env
│── package.json
```
## 👤Team Members
- Abhijeet Raj Singh  
- Prashant S Bisht
- Urvita Sharma
- Toonu Raj Singh
- Prince Kumar Singh

