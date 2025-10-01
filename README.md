# Mini Event Tracker (Frontend)

This is the **frontend** for the **Mini Event Tracker** app.  
It provides a simple UI for **signup, login, and event management** using the backend APIs.

## Tech Stack
- **React (Vite)** – Fast frontend framework
- **React Router DOM** – Client-side routing
- **Bootstrap 5** – Styling & layout
- **React Toastify** – Notifications
- **Custom Hooks** – `useFetchGet`, `useFetchPost` for API calls

## Deployed URLs
- [Backend](https://backend-dpc.vercel.app/)
- [Frontend](https://frontend-dpc.vercel.app/)

## Project Structure
```

.
├── api.js                 # API functions for backend requests
├── App.jsx                # Main router configuration
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Signup.jsx
│   ├── Login.jsx
│   └── Events.jsx
├── useFetchGet.js         # Custom hook for GET requests
├── useFetchPost.js        # Custom hook for POST requests
├── index.css
├── index.html
├── main.jsx
├── package.json
└── vite.config.js

````

## Setup & Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/ravipatelctf/mini-event-tracker-frontend.git
    cd mini-event-tracker-frontend
    ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set API Base URL**
   In [`api.js`](./api.js), update the backend URL if needed:

   ```js
   // For local development
   export const baseUrl = "http://localhost:5000";

   // For production (deployed backend)
   export const baseUrl = "https://backend-dpc.vercel.app";
   ```

4. **Run the app**

   ```bash
   npm run dev
   ```

   App will be available at:

   ```
   http://localhost:5173
   ```

## Features

* **Signup & Login** : JWT-based authentication
* **Session Storage** : to persist login state
* **Event Creation** : title, date and time, location, description
* **Event Listing** : sorted by creation time
* **Protected Routes** : `/events` requires login
* **Logout** : button in header, clears token and email from session storage and navigates to `/login` page

## Backend

This frontend communicates with the backend repo:
[Mini Event Tracker Backend](https://github.com/ravipatelctf/mini-event-tracker)

## Assumptions & Notes

* Backend must be deployed and accessible (default: `https://backend-dpc.vercel.app`).
* Events are **fetched & displayed in reverse chronological order** (newest first).
* Token and email are stored in **`sessionStorage`** (not cookies/localStorage for simplicity).

## Contact
Visit developer portfolio at [ravipatelctf](https://ravipatelctf.vercel.app/)

