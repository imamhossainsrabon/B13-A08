# SunCart – Summer Essentials Store 🌞🛒

A modern summer-themed eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare items, beach accessories, and more. The application provides a smooth shopping experience with authentication, protected routes, responsive UI, and stylish summer-inspired design.

---

## 🌐 Live Website

🔗 **Live URL:** [https://b13-a08-gules.vercel.app/](https://b13-a08-gules.vercel.app/)

> Replace the link above with your deployed Vercel/Render URL.

---

## 📌 Project Purpose

SunCart is built to provide users with a clean, responsive, and engaging summer shopping experience.
The project demonstrates modern frontend development practices using **Next.js**, **Tailwind CSS**, and **BetterAuth** while implementing authentication, protected routes, responsive layouts, and reusable UI components.

---

## 🚀 Key Features

### 🔐 Authentication System

* Email & Password Login/Register
* Google Social Login
* Protected Product Details Route
* Redirect back after login
* Logout functionality

### 🛍️ Product Features

* Summer-themed product showcase
* Product details page
* Dynamic product cards
* Popular products section
* Product JSON data management

### 👤 User Features

* My Profile page
* View profile information
* Update user name & profile image
* User avatar in navbar

### 🎨 UI/UX Features

* Fully responsive design
* Modern summer-inspired UI
* Hero banner / slider
* Animated sections using Lottie / Animate.css / React-Spring
* Toast notifications for auth actions

### ⚡ Technical Features

* Next.js App Router
* Persistent Navbar & Footer
* Environment variable security
* Route protection middleware
* Clean component-based architecture

---

## 🧰 Tech Stack

### Frontend

* **Next.js**
* **React**
* **Tailwind CSS**
* **DaisyUI / HeroUI**

### Authentication

* **BetterAuth**

### Animation / Effects

* **Lottie React** *(or Animate.css / React-Spring)*

### Deployment

* **Vercel / Render**

---

## 📦 NPM Packages Used

```bash
next
react
react-dom
tailwindcss
daisyui
better-auth
react-hot-toast
lottie-react
lucide-react
clsx
axios
```

> Add or remove packages based on your actual implementation.

---

## 📁 Folder Structure

```bash
src/
│
├── app/
│   ├── login/
│   ├── register/
│   ├── products/
│   ├── my-profile/
│   └── layout.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   └── ProtectedRoute.jsx
│
├── data/
│   └── products.json
│
├── lib/
│   └── auth.js
│
├── styles/
│
└── utils/
```

---

## 📦 Sample Product JSON

```json
[
  {
    "id": 1,
    "name": "UV Protection Sunglasses",
    "brand": "SunShade",
    "price": 15,
    "rating": 4.7,
    "stock": 10,
    "description": "Stylish UV protection sunglasses perfect for summer outings.",
    "image": "https://i.postimg.cc/example1.png",
    "category": "Accessories"
  }
]
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000

BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 💻 Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/suncart.git
```

### Navigate to project folder

```bash
cd suncart
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

---

## 📱 Responsiveness

The application is optimized for:

* 📱 Mobile Devices
* 📲 Tablets
* 💻 Desktop Screens

---

## 🔒 Protected Routes

The following routes require authentication:

* `/products/[id]`
* `/my-profile`
* `/update-profile`

Unauthorized users are redirected to the login page and returned after successful authentication.

---

## 🌟 Extra Sections

### ☀️ Summer Care Tips

* Hydration reminders
* Summer skincare suggestions
* Sun protection guidance

### 🏷️ Top Brands

* SunShade
* BeachWear
* GlowSkin
* SummerFlex

---

## 🚀 Deployment

You can deploy this project easily using:

* **Vercel**
* **Render**

> Make sure to configure environment variables in the deployment dashboard.

---

## ✅ Project Requirements Checklist

* [x] Responsive Design
* [x] Protected Routes
* [x] Login/Register System
* [x] Google Authentication
* [x] My Profile Page
* [x] Update User Info Feature
* [x] Summer-Themed Unique Design
* [x] Environment Variables
* [x] Minimum 6 Products
* [x] Persistent Navbar & Footer
* [x] README Included
* [x] Meaningful GitHub Commits

---

## 👨‍💻 Developer

Imam Hossain
📧 [imamhossainsrabon@gmail.com](mailto:imamhossainsrabon@gmail.com)

---

## 📄 License

This project is created for educational and assignment purposes.
