# BeyondChat - Chatbot Setup UI

Welcome to **BeyondChat**, a chatbot setup UI built using **Next.js**.  
This project is a part of an assignment for **BeyondChats**, where users can register, set up an organization, and integrate a chatbot into their website.

## 🚀 Live Demo
🔗 [BeyondChat Live](https://beyond-chat-jgc36to49-saadshaikh139gmailcoms-projects.vercel.app/)

## 📂 Repository
🔗 [GitHub Repository](https://github.com/saadshaikh1023/BeyondChat/tree/main)

---

## 📌 Features

### 1️⃣ **User Registration**
- Users can sign up with their **name, email, and password**.
- **Google authentication** is available.
- Users must verify their email using a **verification code** before proceeding.

### 2️⃣ **Organization Setup**
- Users enter their **Company Name, Website URL, and Description**.
- The system **automatically fetches the meta description** from the website URL (Bonus feature).
- Displays **scraped webpages** and their **scraping status** (detected, scraped, pending).
- Users can view **data chunks** scraped from each webpage.

### 3️⃣ **Chatbot Integration & Testing**
- **Test Chatbot**: Opens the client's website with a dummy chatbot.
- **Integrate on Website**:
  - Provides **step-by-step instructions** for chatbot integration.
  - Allows sending **integration instructions via email**.
- **Test Integration**:
  - If successful, displays a **confetti UI** and provides:
    - **Explore Admin Panel** button.
    - **Start Talking to Chatbot** button.
    - **Social Media Sharing** options.
  - If unsuccessful, shows a **retry UI**.

---

## 🎨 UI/UX Highlights
- **Modern & clean design** with an intuitive flow.
- **Fully responsive** for desktop & mobile.
- **Smooth animations & transitions**.
- **Minimalistic yet engaging color scheme**.

---

## 🛠️ Tech Stack
- **Framework:** Next.js  
- **UI Library:** Tailwind CSS  
- **Authentication:** NextAuth.js  
- **State Management:** React Hooks  
- **Deployment:** Vercel  

---

## 🔑 Test Credentials (Dummy Data)
To test the registration flow, use the following credentials:

- **Email:** `saadshaikh139@gmail.com`
- **Password:** `2003`
- **Verification Code:** `1234`

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/saadshaikh1023/BeyondChat.git
cd BeyondChat
```
### 2️⃣ Install dependencies:
```bash
npm install
# or
yarn install
```
### 3️⃣ Set up environment variables:
create .env named file and add
```bash
NEXTAUTH_SECRET = any generated ssl key, you can use below method to generate it
openssl rand -base64 32
```
### 4️⃣ Run the development server:
```bash
npm run dev
# or
yarn dev
```
# 📧 Contact
For any queries, feel free to reach out:
📧 Email: saadshaikh139@gmail.com
