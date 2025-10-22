# 🔄 Full Stack Data Flow (Frontend ⇄ Backend ⇄ Database)

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Server-blue)
![REST API](https://img.shields.io/badge/API-REST-orange)

---

## 🌐 Overview

This project demonstrates how data flows **from the frontend → backend → database**,  
and how the backend returns processed data **back to the frontend**.

It uses:
- 🟢 **Express + Node.js** for the server-side logic  
- 🍃 **MYsql** for data storage
---

## 🔁 Data Flow Explanation

### 1️⃣ Frontend ➡️ Backend
- User interacts with the UI (e.g., submits a form or clicks a button).
- React uses `fetch()` or `axios` to send an **HTTP request** (POST/GET) to the **Express backend**.
- Example:
```js
// Frontend (React)
axios.post("http://localhost:5000/api/users", {
  name: "Bharath",
  email: "bharath@example.com",
});
```
### 2️⃣ Backend ➡️ Database
- The Express server receives the request in a route handler.
- It parses the data (using express.json() middleware).
-T hen it interacts with the MySQL database

### 3️⃣ Database ➡️ Backend

- MYsql confirms that the data was stored successfully.
- The backend receives the response (like the saved document or an acknowledgment).
- Backend can process it or simply send it back to the frontend as JSON.

### 4️⃣ Backend ➡️ Frontend
- Backend sends a response (JSON object) back to the frontend.
- React receives it and updates the UI dynamically.

### Flow-chat
```bash
[ React Frontend ]
      ⬇️  (HTTP POST / GET)
[ Express Backend ]
      ⬇️  (Mongoose Query)
[ MongoDB Database ]
      ⬆️  (Response / Data)
[ Express Backend ]
      ⬆️  (JSON Response)
[ React Frontend (UI updates) ]

```

### Tech Stack
```bash
| Layer         | Technology            | Description                                       |
| ------------  | --------------------  | --------------------------------------------------|
| 🖥️ Frontend  | React.js             | Builds UI and sends HTTP requests                  |
| ⚙️ Backend   | Node.js + Express.js | Handles API requests, connects to DB               |
| 🗄️ Database  | MY SQL               | Stores and retrieves data                          |
| 🔌 API       | RESTful endpoints    | Enables communication between frontend and backend |


```
### Directory Structure
```bash
project/
├── backend/
│   ├── server.js
│
├── frontend/
│   ├── index.html
│
└── README.md

```
#### Better to install all modules as in that
- Nodemon installation
  ``` bash
  cd backend
  ```
  ``` bash
  npm install -g nodemon
  ```
  ``` bash
  npx nodemon server.js
  ```
