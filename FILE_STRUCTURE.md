# Project File Structure & Overview

## 📁 Complete Project Layout

```
Ceylon Canary/
│
├── 📄 README.md                    # Comprehensive documentation
├── 📄 QUICKSTART.md               # 5-minute setup guide
├── 📄 PACKAGE_GUIDE.md            # How to customize packages
├── 📄 TESTING_GUIDE.md            # Complete testing checklist
├── 📄 DEPLOYMENT_GUIDE.md         # How to launch to production
├── 📄 FILE_STRUCTURE.md           # This file
│
├── 📂 frontend/                   # Frontend website files
│   ├── 📄 index.html              # Main HTML file (start here)
│   ├── 📂 css/
│   │   └── 📄 styles.css          # All styling (modern, responsive)
│   ├── 📂 js/
│   │   └── 📄 script.js           # All interactivity & package data
│   └── 📂 images/                 # Folder for images (currently empty)
│
└── 📂 backend/                    # Node.js/Express server
    ├── 📄 package.json            # Dependencies list
    ├── 📄 server.js               # Express server & email logic
    ├── 📄 .env.example            # Email setup template
    ├── 📄 .env                    # Your email config (create from .env.example)
    └── 📄 .gitignore              # Ignore files from git
```

## 📝 File Descriptions

### Root Files

#### README.md (Comprehensive)
- Full project documentation
- Setup instructions
- Features overview
- Troubleshooting guide
- Deployment info
- **Read this when**: You need detailed information

#### QUICKSTART.md
- Simple 5-minute setup
- Essential steps only
- Email configuration basics
- Testing instructions
- **Read this when**: You're in a hurry to get started

#### PACKAGE_GUIDE.md
- How to add/modify packages
- Package template
- Customization tips
- ID naming conventions
- **Read this when**: You want to add or change packages

#### TESTING_GUIDE.md
- Complete testing checklist
- Phase-by-phase verification
- Error scenarios
- Success criteria
- **Read this when**: You want to verify everything works

#### DEPLOYMENT_GUIDE.md
- Frontend deployment options
- Backend deployment options
- Domain setup
- Monitoring & maintenance
- **Read this when**: You're ready to launch

### Frontend Files

#### index.html (Main HTML)
**Location:** `frontend/index.html`
**Purpose:** Complete website structure

**Sections:**
- Navigation bar (sticky)
- Hero section
- Packages section
- Review & booking section
- About us
- Why choose us
- Testimonials
- Contact
- Footer

**Key Features:**
- 8 pre-built travel packages
- Multi-package selection
- Booking form
- Responsive design
- Font Awesome icons

**Edit When:**
- Adding new sections
- Changing text content
- Updating company info
- Modifying form fields

#### styles.css (All Styling)
**Location:** `frontend/css/styles.css`
**Purpose:** Modern, responsive design

**Includes:**
- Global styles & color scheme
- Responsive grid layouts
- Card designs
- Form styling
- Mobile breakpoints
- Animations & transitions

**Edit When:**
- Changing colors
- Adjusting layouts
- Modifying fonts
- Updating responsive breakpoints
- Adding animations

#### script.js (All Interactivity)
**Location:** `frontend/js/script.js`
**Purpose:** Frontend logic & package data

**Contains:**
- 8 travel packages (data)
- Package rendering
- Selection logic
- Journey summary calculation
- Itinerary generation
- Form submission
- Contact form handling
- Mobile menu
- Smooth scrolling

**Edit When:**
- Adding/removing packages
- Changing package details
- Modifying business logic
- Updating API endpoints
- Adjusting form handling

### Backend Files

#### package.json (Dependencies)
**Location:** `backend/package.json`
**Purpose:** List of required libraries

**Includes:**
- express (web framework)
- cors (cross-origin requests)
- nodemailer (email sending)
- express-validator (input validation)
- dotenv (environment variables)

**Edit When:**
- Adding new dependencies
- Updating versions
- Changing project info

#### server.js (Express Server)
**Location:** `backend/server.js`
**Purpose:** Backend server & email system

**Includes:**
- Express app setup
- CORS configuration
- Email transporter setup
- Health check endpoint
- Booking API endpoint
- Contact API endpoint
- Error handling
- Email generation

**Edit When:**
- Modifying email templates
- Changing API endpoints
- Adding validation rules
- Updating business logic

#### .env.example (Configuration Template)
**Location:** `backend/.env.example`
**Purpose:** Shows what variables you need

**Contains:**
- EMAIL_SERVICE (gmail, outlook, etc.)
- EMAIL_USER (sender email)
- EMAIL_PASSWORD (app password)
- OWNER_EMAIL (recipient email)
- PORT (server port)

**Use When:**
- Setting up environment variables
- Reference for what variables needed

#### .env (Your Configuration)
**Location:** `backend/.env`
**Purpose:** Your actual email credentials

**You create this from .env.example**

⚠️ **IMPORTANT:**
- Never commit this file
- Never share credentials
- Keep private and secure
- Added to .gitignore

#### .gitignore (Git Ignore Rules)
**Location:** `backend/.gitignore`
**Purpose:** Tells git what files to ignore

**Ignores:**
- node_modules/
- .env (private file!)
- Log files
- IDE files

### Frontend Folder Structure

```
frontend/
├── index.html          # Main file (630 lines)
├── css/
│   └── styles.css      # Styling (690 lines)
├── js/
│   └── script.js       # Logic & data (450 lines)
└── images/             # Empty - add your images here
```

### Backend Folder Structure

```
backend/
├── package.json        # 19 lines
├── server.js           # 220 lines
├── .env.example        # 18 lines
├── .env                # You create this
└── .gitignore          # 6 lines
```

## 📊 File Statistics

| File | Type | Lines | Purpose |
|------|------|-------|---------|
| index.html | HTML | 630 | Website structure |
| styles.css | CSS | 690 | All styling |
| script.js | JS | 450 | Logic & packages |
| server.js | JS | 220 | Backend server |
| package.json | JSON | 19 | Dependencies |
| README.md | Markdown | 350+ | Documentation |
| QUICKSTART.md | Markdown | 60 | Quick setup |

**Total Website Code:** ~2,000 lines

## 🔄 File Dependencies

```
Browser Opens: index.html
    ├── Loads: css/styles.css
    │   └── Applies styling
    ├── Loads: js/script.js
    │   ├── Has package data
    │   ├── Sets up interactivity
    │   └── Calls backend endpoints
    │
    └── User submits form
        └── Sends POST to backend:5000
            ├── server.js processes
            ├── Validates data
            ├── Sends emails
            └── Returns response to browser
```

## 🎨 Customization Priority

**Highest Priority** (Most likely to customize):
1. Package data in `script.js`
2. Company name throughout files
3. Contact info in `index.html`
4. Email addresses in `.env`

**Medium Priority**:
1. Colors in `styles.css`
2. Package section text
3. About us content

**Lower Priority**:
1. Page structure (`index.html`)
2. Form fields
3. Animations

## 🔍 Quick File Finder

**What to edit for...**

| Task | File | Location |
|------|------|----------|
| Add package | script.js | Line 10-50 |
| Change colors | styles.css | Line 5-15 |
| Update company name | index.html, all files | Search & replace |
| Email setup | .env | Create from .env.example |
| Change contact form | index.html | Line 450-500 |
| Modify styling | styles.css | Entire file |
| Fix bugs | script.js | Logic sections |
| Add section | index.html | Add new section + CSS |

## 📦 What Each File Does

### Backend Process Flow

```
User clicks "Send to Travel Agent"
    ↓
server.js:submitBooking() called
    ↓
Form validated
    ↓
Booking email generated
    ↓
nodemailer.sendMail() to owner
    ↓
Confirmation email generated
    ↓
nodemailer.sendMail() to customer
    ↓
Response sent to browser
    ↓
User sees confirmation
```

### Frontend Process Flow

```
User visits index.html
    ↓
Loads styles.css (styling)
    ↓
Loads script.js (logic + packages)
    ↓
Packages rendered from data
    ↓
User selects packages
    ↓
script.js calculates stats
    ↓
Updates DOM dynamically
    ↓
User submits form
    ↓
Calls backend API
    ↓
Displays result
```

## 📝 Before You Start

Check you have:
- [ ] index.html exists
- [ ] css/styles.css exists
- [ ] js/script.js exists
- [ ] server.js exists
- [ ] package.json exists

Check configuration:
- [ ] .env file created
- [ ] Email credentials entered
- [ ] Backend running on port 5000
- [ ] Frontend accessible in browser

## 🆘 File Issues

| Issue | Check |
|-------|-------|
| CSS not loading | styles.css path in index.html |
| Packages not showing | script.js loaded, no console errors |
| Form not submitting | Backend running, correct API URL |
| Emails not sending | .env configured correctly |
| 404 errors | Check file paths |

## 🔐 Security Notes

**Never Commit to Git:**
- .env file (has email credentials)
- node_modules/ folder
- .DS_Store files

**Keep Secure:**
- Gmail app password in .env
- Owner email address
- Booking data

**Files OK to Share:**
- index.html
- styles.css
- .env.example (no actual credentials)

## 📚 Reading Order

For first-time setup:
1. QUICKSTART.md
2. PACKAGE_GUIDE.md (if customizing)
3. index.html + styles.css + script.js (review code)
4. server.js (understand backend)
5. TESTING_GUIDE.md (verify everything)
6. DEPLOYMENT_GUIDE.md (when ready)

---

**Everything is organized and ready to use! Start with QUICKSTART.md 🚀**
