# 🚀 Quick Start Guide - Ceylon Canary

## Setup (5 minutes)

### Step 1: Backend Setup
```bash
cd backend
npm install
```

### Step 2: Email Configuration
1. Copy `.env.example` to `.env`
2. For Gmail:
   - Go to https://myaccount.google.com/apppasswords
   - Select Mail and Windows
   - Copy the 16-character password
   - Paste in `.env` as EMAIL_PASSWORD
   - Set EMAIL_USER to your Gmail address

### Step 3: Start Backend
```bash
npm start
```
✅ Server running on port 5000

### Step 4: Open Frontend
1. Option A: In VS Code, right-click `frontend/index.html` → "Open with Live Server"
2. Option B: Use Python:
   ```bash
   cd frontend
   python -m http.server 8000
   ```
   Then visit http://localhost:8000

✅ Website is live!

## 🎯 Test It Out

1. Click "Start Planning"
2. Select 2-3 packages
3. Click "Review Your Journey"
4. Fill in your info and submit
5. Check your email inbox (and spam folder)

## 📝 Customization

### Change packages
- Edit `frontend/js/script.js` → find `const packages = [`

### Change colors
- Edit `frontend/css/styles.css` → find `:root {`

### Change company info
- Search for "Ceylon Canary" in HTML and replace with your company name
- Update contact details in the Contact section

## ✅ Done!

Your travel agency website is ready to use! 

For detailed documentation, see **README.md**

---

**Need help?** Check the Troubleshooting section in README.md
