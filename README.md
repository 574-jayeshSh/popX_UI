````md
# PopX Authentication UI

A modern mobile-first authentication UI built using React, Tailwind CSS, React Router, and Cloudinary image upload integration.

---

## 🚀 Features

- Mobile-first responsive design
- Login Page
- Signup Page
- Account Settings Page
- Form validation
- React state management
- React Router navigation
- Cloudinary image upload
- Floating label inputs
- Profile image upload
- Clean modern UI

---

## 🛠️ Tech Stack

- React.js
- Tailwind CSS
- React Router DOM
- Axios
- React Icons
- Cloudinary

---

## 📂 Project Structure

```bash
src/
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Account.jsx
│
├── App.jsx
├── main.jsx
└── index.css
````

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into project:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## 📦 Required Packages

```bash
npm install react-router-dom
npm install axios
npm install react-icons
npm install tailwindcss @tailwindcss/vite
```

---

## ☁️ Cloudinary Setup

Create a Cloudinary account:

https://cloudinary.com

### Create Upload Preset

1. Go to Settings
2. Open Upload tab
3. Scroll to Upload Presets
4. Create new preset
5. Set Signing Mode → Unsigned

Replace values inside Account page:

```js
upload_preset: "YOUR_UPLOAD_PRESET"
```

```js
https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload
```

---

## 🔐 Admin Login Credentials

Use these credentials to test authentication:

```bash
Email: admin@gmail.com
Password: 123456
```

---

## 📱 Pages

### Home Page

* Landing page
* Navigation buttons

### Login Page

* Authentication validation
* Error handling
* Floating input labels

### Signup Page

* User registration form
* Radio button handling
* Validation system

### Account Page

* User profile UI
* Cloudinary image upload
* Responsive mobile layout

---

## 🎨 UI Features

* Mobile-centered container
* Modern spacing system
* Responsive layout
* Hover effects
* Smooth transitions
* Tailwind utility styling

---

## 📚 Learning Outcomes

This project demonstrates understanding of:

* React Components
* useState Hook
* Event Handling
* Form Validation
* React Router
* API Integration
* Image Upload Handling
* Tailwind CSS
* State Management
* Responsive Design

---

## 🚀 Future Improvements

* JWT Authentication
* Backend Integration
* MongoDB Database
* Protected Routes
* Dark Mode
* Redux Toolkit
* User Sessions
* Real Authentication System

---

## 👨‍💻 Author

### Jayesh Sharma

Computer Engineering Student
Frontend Developer | React Enthusiast

Built as part of a React JS frontend assignment project.

```
```
