# 🌿 Plant Care Tracker

A full-stack, responsive web application to help users log, track, and manage care tasks for their indoor and outdoor plants. This is a personal plant assistant that supports secure user accounts, personalized dashboards, and stylish, meaningful plant management tools.

### 🔗 Live Name: BotaniNest
### 🔗 Live Website: (https://plant-care-app-5b85c.web.app/)

---

## 🌱 Key Features

- 🔐 **Secure Authentication** with Firebase (Email/Password + Google)
- 📋 **CRUD Functionality**: Add, view, update, and delete plants
- 🗓️ **Smart Scheduling**: Track watering frequency, health, care level, and next watering dates
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop
- 🌘 **Dark/Light Mode Toggle** for a personalized viewing experience
- 🔍 **Sort & Filter** by next watering date or care difficulty
- ✨ **Custom Alerts** using SweetAlert and React Hot Toast
- ⚙️ **Protected Routes** that persist login state on reload
- 🌼 **Unique Theme**: Inspired by lush indoor jungle aesthetics
- 📈 **Styled Feedback** for all actions — no default browser alerts

---

## 🧩 Tech Stack

### Client-Side
- **React**, **React Router**
- **Tailwind CSS**, **DaisyUI**
- **Firebase Auth**
- **React Hot Toast**, **SweetAlert2**
- **React Icons**, **React Tooltip**
- **Date-fns**,

### Server-Side
- **Node.js**, **Express**
- **MongoDB** (Atlas)
- **Deployed on Vercel (Server)**

---

## 🗂️ Project Pages & Functionality

### 🔐 Authentication
- Register and Login with Email/Password and Google
- Password validation with security rules
- Conditional navbar links based on auth state

### 🏠 Home Page
- Beautiful banner slider with plant care tips
- "New Plants" section featuring latest entries
- Extra sections: "Seasonal Plant Care Tips" and "Rare & Exotic Plant Spotlight"

### 🪴 Add Plant
- Form includes dropdowns, image URL, dates, and care level
- Adds plant with logged-in user info
- Styled success message on submission

### 📋 All Plants
- Tabular view of all plants
- Includes sorting by care level 
- "View Details" button for each plant

### 👤 My Plants
- Only shows plants added by logged-in user
- Update/Delete buttons for easy management
- SweetAlert confirmation before deletion

### 🧾 View & Update Pages
- View page styled with creative layout
- Update page pre-filled with current plant data

### ⚠️ 404 Page
- Custom 404 Not Found page for broken routes

### 🔁 Loading States
- Custom loading spinner while data is fetched

---

## 🚀 Deployment

### Hosting Platforms
- **Client:** firebase 
- **Server:** Vercel (with Express backend and MongoDB Atlas)

### Environment Variables
All sensitive keys (Firebase, MongoDB URI, etc.) are stored in `.env` files and never exposed in code.

---

## 📌 GitHub Commit Requirements

- ✅ **15+ meaningful commits** on the client side
- ✅ **8+ meaningful commits** on the server side

---

## 👨‍💻 Author

- Developed by [Ashik Mahmud]

---


## 📜 License

This project is licensed under the MIT License.

