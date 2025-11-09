# 💙 Confidential Wellness Connect  
### Team NeuroNexus — Rishiverse Hackathon 2025

A lightweight, secure, and privacy-focused web app that allows students to confidentially book wellness or counseling sessions with university counselors — built entirely using **React.js, HTML, CSS, and JavaScript**, with no backend or database.

---
## 🎥 Demo Video Link

- [Submission 1+2 ✅](https://www.canva.com/design/DAG4ME5ysLI/NtDJNNzvjYr-hpdxVfXCJQ/watch?utm_content=DAG4ME5ysLI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h24293be649)
- [Demo Frontend View 1](https://drive.google.com/file/d/15OfrBWY5NXcWgSMTXgiBk4BzDrkg3d_L/view?usp=sharing)
- [Demo Frontend View 2](https://drive.google.com/file/d/1g6HTEvCy_Irh93_vAUIu8pT9FC_jddY-/view?usp=sharing)
- [Submission 3]()



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


---

## 🔹 Features Implemented

### 1. **Authentication**
- Login forms with **Google Sign-In**  
- Password reset flow with **request & confirm forms**  
- Reusable **hooks** for form handling (`useLoginForm`, `useResetPasswordRequestForm`, `useResetPasswordConfirmForm`)

### 2. **ERP Module**
- **Dashboard** with `TestComponetForAuth` to display user info  
- **Attendance** and **Clubs** pages  
- **ERP layout** (`ERPLayout.tsx`) with:
  - Sidebar navigation (`AppSidebar`)  
  - Header (`AppHeader`)  
  - Mobile navigation (`MobileNav`)  
  - Dark mode toggle (`ModeSwitcher`)  
- Loading state while pages load (`loading.tsx`)  

### 3. **LMS Module**
- Dashboard and Calendar pages  
- **LMS layout** (`LMSLayout.tsx`) similar to ERP layout  
- Loading spinner for async page load (`loading.tsx`)  

### 4. **UI Components (Atoms)**
- **Button** (`components/ui/button.tsx`) with variants and sizes  
- **Input** (`components/ui/input.tsx`) with variants and sizes  
- **Label** (`components/ui/label.tsx`) for forms  

### 5. **Layout Components**
- **AppShell**: Main wrapper for ERP/LMS pages  
- **AppHeader**: Header with **logo, dark mode toggle, and mobile menu**  
- **AppSidebar**: Sidebar for navigation  
- **MobileNav**: Hamburger menu for small screens  
- **ModeSwitcher & SwitchButton**: Toggle light/dark mode
## 🔹 6. **Constants & Config**

### 🧭 **`endpoints.ts`**
- Contains all backend **API endpoints** in one centralized place  
- Makes it easier to manage and update routes  

### 🎨 **`ui.ts`**
- Defines **UI constants** such as theme colors, font sizes, and layout spacing  
- Helps maintain consistent design across all components  

---
## 🔹 7. **Authentication (Auth Folder)**
### 🔑 **Login**
- `LoginForm.tsx` → Handles **email/password** authentication  
- `GoogleSignIn.tsx` → Enables **Google OAuth** login  
### 🔄 **Reset Password**
- `RequestForm.tsx` → For sending **password reset email**  
- `ConfirmForm.tsx` → For **setting new password** after verification  
### 🧩 **Auth Layout**
- `layout.tsx` → Provides a unified structure for all authentication-related pages  
- Used by login, reset, and confirm screens for consistent branding  
---

## 🔹 8. **ERP Module**
### 📊 **Dashboard**
- Uses `TestComponentForAuth.tsx` to test and display user authentication  
### 🕒 **Attendance Page**
- Displays mock **attendance data** for demonstration purposes  
### 🎓 **Clubs Page**
- Shows a list or layout of **student clubs and activities**  
### 🧱 **ERP Layout**
- `ERPLayout.tsx` → Base layout for all ERP pages  
- Includes:
  - `AppSidebar.tsx` → Sidebar navigation  
  - `AppHeader.tsx` → Header with title and controls  
  - `MobileNav.tsx` → Responsive mobile navigation  
  - `ModeSwitcher.tsx` → Dark/Light theme toggle  
### ⏳ **Loading State**
- `loading.tsx` → Displays a **loading spinner** while ERP data loads  

---
## 🔹 9. **LMS Module**
### 🧠 **Dashboard Page**
- Provides an overview of the **learning management system**  
### 🗓️ **Calendar Page**
- Displays **upcoming assignments, events, and reminders**  
### 🧱 **Layout**
- `LMSLayout.tsx` → Defines structure and navigation for all LMS screens  
### ⏳ **Loading**
- `loading.tsx` → Shows a loading animation during content fetch  

---
## 🔹 10. **Global Files**
### 🌐 **`globals.css`**
- Contains global **CSS resets and base theme styles**  
### 🧩 **`layout.tsx`**
- Root layout that wraps the **entire application**  
### 🚫 **`not-found.tsx`**
- Custom **404 error page** for invalid routes  
### 🏠 **`page.tsx`**
- Homepage entry point linking to **login**, **register**, or **wellness** sections  
### 📄 **`terms-of-service/page.tsx`**
- Displays the **Terms & Conditions** page  
### 🧿 **`favicon.ico`**
- Browser tab icon for branding  

---
## 🔹 11. **Redux & State Management**
### 🧩 **`ReduxProvider.tsx`**
- Wraps the entire app with **Redux Provider** for global state access  
### ⚙️ **Core Store Files**
- `store/index.ts`, `rootReducer.ts`, `hooks.ts` → Core Redux setup  
### 🌗 **Theme Control**
- `modeSlice.ts` → Manages **Light/Dark mode** states  
### 🔐 **Authentication State**
- `authSlice.ts`, `authThunk.ts`, `tokenStorage.ts` → Handle **login, logout, token refresh, and session persistence**  

---
## 🔹 12. **Schemas & Validation**
### ✅ **`LoginSchema.ts`**
- Defines form validation using **Zod**  
- Ensures proper email/password formatting  

---
## 🔹 13. **Utilities & Libraries**
### 🔒 **`crypto.ts`**
- Handles basic **encryption/decryption** for tokens  
### ⚙️ **`axios.ts`**
- Custom **Axios instance** with request/response interceptors for secure API calls  
### 🧰 **`utils.ts`**
- Common **helper functions** used across components  
---

## 🔹 14. **Project Summary**
### 🧭 **Overview**
A modular frontend platform designed for **university students and staff**, featuring:
- 🏫 **ERP Module** – Attendance, Clubs, Profile  
- 📚 **LMS Module** – Dashboard, Calendar  
- 💆 **Wellness Booking System**  
- 🔒 **Secure Authentication** – Email, Google, Reset Password  

---

## 🔹 Styling
- Tailwind CSS for responsive layouts  
- Dark mode ready  
- Flexbox and grid-based layouts for clean dashboard UI  

---

## 🔹 Tech Stack
- **Next.js** (App Router)  
- **TypeScript**  
- **Tailwind CSS**  
- **Redux Toolkit**  
- **Zod & React Hook Form**  
- **Axios**

---

## 🔹 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/prashant2007-wq/mindlink-hackathon.git
cd mindlink-hackathon/frontend-app

# Install dependencies
npm install

# Run development server
npm run dev
```

## 👤Team Members
- Abhijeet Raj Singh  
- Prashant S Bisht
- Urvita Sharma
- Toonu Raj Singh
- Prince Kumar Singh

