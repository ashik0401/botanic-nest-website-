# 🌿 Plant Care Tracker

A full-stack, responsive web application to help users log, track, and manage care tasks for their indoor plants. This is a personal plant assistant that supports secure user accounts, personalized dashboards, and stylish, meaningful plant management tools.

![BiteLog Screenshot](https://i.postimg.cc/902cwgBn/Screenshot-2025-06-29-003447.png)

### 🔗 Live Website: (https://botanic-nest.web.app/)

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

 About Us
Overview of the mission behind BotaniNest

Goals to promote indoor gardening and plant mindfulness

Short profile of the developer and the inspiration behind the app

## 📊 Dashboard
- Personalized user dashboard with plant stats

- Integrated layout for profile info and add-new shortcuts

## 📞 Contact
- Contact form for user inquiries and suggestions

- Direct email address: gmail@example.com

- Links to social media or LinkedIn for professional communication

## 🆘 Support
- FAQ section with common user issues and solutions

- Guides on adding plants, updating care, and troubleshooting

- Customer support form for direct assistance

- Email support: support@botanihub.app             

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
## 🛠️ Local Installation and Setup

## 1. Clone the repository


## 2. Setup the Client
- cd client
- npm install

- Create a .env file inside the /client folder with:
- REACT_APP_API_URL=http://localhost:5000
- REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
- REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
- REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
- REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
- REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

- Start the React client:
- npm run dev

## 3. Setup the Server
- cd ../server
- npm install

- Create a .env file inside the /server folder with:
- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- FIREBASE_SERVICE_ACCOUNT=your_firebase_service_account_json_as_string_or_path

- Start the server:
- npm run start

 - Open in Browser
 - Go to http://localhost:3000 to use the application locally.
---



## 👨‍💻 Author

- Developed by [Ashik Mahmud]

---


## 📜 License

This project is licensed under the MIT License.
