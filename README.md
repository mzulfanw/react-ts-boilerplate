# React TS Boilerplate
A modern, clean-architecture starter boilerplate to build scalable React applications with TypeScript and awesome modern tools.

---

## 🚀 Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-000000?style=for-the-badge&logo=zod&logoColor=white)
![tsyringe](https://img.shields.io/badge/tsyringe-4A90E2?style=for-the-badge&logo=typescript&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Features

- Clean architecture folder structure & best practices
- Dependency Injection with **tsyringe** for scalable & testable code
- Form handling & validation using **React Hook Form** + **Zod**
- Data fetching, caching & state management with **React Query**
- Responsive & modern UI styling with **Tailwind CSS** & **shadcn/ui**
- Routing with **React Router v6**, including lazy loading and Suspense
- Fast dev experience with **Vite**

---
## 🗂️ Folder Structure

    src/
    ├── app/                 # App bootstrap, global setup (React Query provider, DI container, Context)
    │   ├── bootstrap.tsx    # App entry point, setup providers, etc.
    │   └── queryProvider.tsx
    │
    ├── assets/              # All static assets (images, fonts, icons, etc.)
    │
    ├── components/          # Shared components (UI primitives, buttons, layout components)
    │
    ├── features/            # Feature modules (feature-based architecture)
    │   ├── feature-name/
    │   │   ├── api/         # Feature-specific API files (fetching, axios services)
    │   │   ├── components/  # Feature-specific UI components
    │   │   ├── dto/         # Feature-specific types/interfaces (Data Transfer Objects)
    │   │   ├── hooks/       # Custom React hooks (e.g. useFeatureX, useFeatureXMutation)
    │   │   ├── pages/       # Pages (if the feature has its own routing)
    │   │   └── usecases/    # Feature business logic (business/usecase layer)
    │   │
    │   └── another-feature/
    │
    ├── lib/                 # Utility libraries, helpers, or global services (axios instance, utils)
    │
    ├── routes/              # All globally registered routes (can import from features/pages)
    │   └── allRoutes.tsx
    │
    └── types/               # (Optional) Global types if needed (not feature-specific)


