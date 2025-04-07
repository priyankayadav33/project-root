Here's a clean and complete `README.md` file. It includes setup steps for both frontend and backend, and walks through Auth0 configuration too.

---

```md
# 🔐 Next.js + Auth0 + Node.js Token Emailer

A full-stack demo app that authenticates users using **Auth0** in a **Next.js** frontend, then sends the authentication token to a **Node.js (Express)** backend, which verifies it and sends an email to the user with the token.

---

## 📁 Project Structure

```
root/
├── frontend/     # Next.js App with Auth0 Authentication
└── backend/      # Node.js + Express Backend with Email Service
```

---

## ✨ Features

- 🔐 Auth0 Login
- 🔗 Sends token to backend on button click
- ✅ Backend validates token
- 📧 Email with token sent to the user's email
- 🧪 Logs for success/debugging

---

## ⚙️ Prerequisites

- Node.js >= 18
- Auth0 account (free tier is fine)
- A test email you can receive messages at (e.g., Gmail)

---

## 🚀 Setup Instructions

### 🔐 1. Auth0 Configuration

1. Go to [Auth0 Dashboard](https://manage.auth0.com)
2. **Create a new Application**  
   - Type: **Single Page Web App**
   - Name: `NextAuth App`

3. **Application Settings**
   - **Allowed Callback URLs**: `http://localhost:3000/api/auth/callback`
   - **Allowed Logout URLs**: `http://localhost:3000`
   - **Allowed Web Origins**: `http://localhost:3000`

4. (Optional) Go to **APIs** in Auth0 and create a new API:
   - Name: `My API`
   - Identifier: `https://my-api`
   - This becomes your `AUTH0_AUDIENCE`

---

### ⚙️ 2. Frontend Setup

```bash
cd frontend
npm install
```

#### 🔑 Create `.env.local`

```env
AUTH0_SECRET=your_random_32byte_string
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://your-tenant.us.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
AUTH0_AUDIENCE=https://my-api        # If you created API
BACKEND_API=http://localhost:5000
```

Generate a 32-byte secret:

```bash
openssl rand -base64 32
```

#### ▶️ Start Frontend

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

### ⚙️ 3. Backend Setup

```bash
cd backend
npm install
```

#### 🛠️ Create `.env`

```env
PORT=5000
AUTH0_DOMAIN=your-tenant.us.auth0.com
AUTH0_AUDIENCE=https://my-api
SMTP_USER=youremail@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=youremail@gmail.com
```

> ⚠️ If using Gmail, make sure to enable "App Passwords" for your account.

#### ▶️ Start Backend

```bash
npm run dev
```

---

## 🧪 How to Use

1. Visit [http://localhost:3000](http://localhost:3000)
2. Click **Login**
3. Login via Auth0
4. Click **"Send Token to Backend"**
5. Check your email — you'll receive a message with your token!

---

## 🛡️ Tech Stack

- Frontend: Next.js + Auth0 SDK
- Backend: Node.js + Express
- Auth: Auth0
- Email: Nodemailer + Gmail SMTP

---

## 📝 License

MIT

---

## 🙌 Acknowledgments


```

---

