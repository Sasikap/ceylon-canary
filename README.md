# Ceylon Canary - Travel Agency Website

A modern, fully-featured travel agency website for Sri Lanka with custom multi-package trip planning and email booking system.

## 🌟 Key Features

### Frontend
- **Modern, Responsive Design** - Beautiful UI that works on desktop, tablet, and mobile
- **Multi-Package Selection** - Users can select multiple travel packages to create custom round trips
- **Interactive Journey Builder** - Real-time trip summary with total days, places, and experiences
- **Package Details** - Each package includes:
  - Specific geographic area
  - Places to visit
  - Experiences included
  - What's included in the package
  - Duration
- **Booking Form** - Comprehensive form to collect traveler information
- **Beautiful Sections**:
  - Hero section with call-to-action
  - 8 Pre-designed travel packages
  - About us section
  - Why choose us (features)
  - Testimonials
  - Contact section
  - Sticky navigation

### Backend
- **Email System** - Sends booking details to owner and confirmation to customers
- **Form Validation** - Server-side validation for all submissions
- **CORS Support** - Allows frontend-backend communication
- **Environment Configuration** - Easy setup with .env file

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- A text editor (VS Code recommended)
- Gmail account (or other email service)

### Installation

#### 1. Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Configure your email in `.env`:
   - For Gmail:
     1. Enable 2-Factor Authentication
     2. Go to https://myaccount.google.com/apppasswords
     3. Select Mail and Windows (or your device)
     4. Copy the 16-character password
     5. Paste it in `EMAIL_PASSWORD`
     6. Update `EMAIL_USER` with your Gmail address
     7. Update `OWNER_EMAIL` with where you want bookings sent

5. Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:5000`

#### 2. Frontend Setup

1. Open the `frontend` folder in your browser or a local server:
   - Option A: Double-click `index.html` (works but limited functionality)
   - Option B: Use Live Server extension in VS Code
   - Option C: Use Python's built-in server:
     ```bash
     cd frontend
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000`

## 📦 Project Structure

```
Ceylon Canary/
├── frontend/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   └── styles.css      # All styling
│   ├── js/
│   │   └── script.js       # Frontend logic & package data
│   └── images/             # Image folder
├── backend/
│   ├── package.json        # Dependencies
│   ├── server.js          # Express server & email logic
│   ├── .env.example       # Example env configuration
│   └── .env               # Your actual config (create this)
└── README.md              # This file
```

## 🎯 How It Works

### User Journey

1. **Browse Packages** - User sees 8 different travel packages with details
2. **Select Packages** - Click "Select Package" on any package (can select multiple)
3. **View Summary** - See selected packages, total days, places, and experiences
4. **Review Journey** - Click "Review Your Journey" to see complete itinerary
5. **Fill Booking Form** - Enter traveler details
6. **Submit** - Send to travel agent (backend processes and sends emails)

### Package Data Structure

Each package contains:
```javascript
{
    id: 'unique-id',
    name: 'Package Name',
    area: 'Geographic Area',
    duration: 2,  // Days
    places: ['Place 1', 'Place 2'],
    experiences: ['Experience 1', 'Experience 2'],
    includes: ['What is included 1', 'What is included 2']
}
```

### Email System

**To Owner:**
- Booking request with all customer details
- List of selected packages with places and experiences
- Trip summary (total days, experiences, places)
- Special requests
- Traveler information (name, email, phone)

**To Customer:**
- Confirmation email
- Trip summary
- Contact information for follow-up

## 🎨 Customization

### Add More Packages

Edit `frontend/js/script.js` - Find the `packages` array and add new packages:

```javascript
{
    id: 'your-package-id',
    name: 'Your Package Name',
    area: 'Your Area',
    duration: 2,
    places: ['Place 1', 'Place 2'],
    experiences: ['Experience 1'],
    includes: ['Include 1']
}
```

### Change Colors

Edit `frontend/css/styles.css` - Modify CSS variables at the top:

```css
:root {
    --primary-color: #2c3e50;      /* Change this */
    --secondary-color: #e74c3c;    /* Change this */
    --accent-color: #3498db;       /* Change this */
    /* ... more variables */
}
```

### Update Contact Information

1. In `frontend/index.html` - Find the contact section and update:
   - Phone number
   - Email address
   - Location

2. In `backend/.env` - Update `OWNER_EMAIL`

### Change Company Name

Replace "Ceylon Canary" throughout the files with your company name

## 📧 Email Troubleshooting

### Gmail Error: "Less secure apps"
- Gmail no longer supports "Less secure apps"
- Use App Passwords instead (see setup instructions above)

### Email Not Sending
1. Check backend console for error messages
2. Verify `.env` file has correct credentials
3. Make sure backend server is running (`npm start`)
4. Check that frontend is calling `http://localhost:5000` endpoints

### Test Email Setup
Run this in Node.js console to test:
```javascript
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

transporter.sendMail({
    from: 'your-email@gmail.com',
    to: 'test@example.com',
    subject: 'Test',
    text: 'Test email'
}, (err, info) => {
    if (err) console.log(err);
    else console.log('Sent:', info.response);
});
```

## 🔒 Security Considerations

1. **Never commit `.env` file** - Add to `.gitignore`
2. **Use environment variables** - Never hardcode credentials
3. **Validate all inputs** - Backend validates all form submissions
4. **CORS configured** - Currently allows all origins; restrict in production
5. **Rate limiting** - Consider adding rate limiting for production

## 📱 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Frontend
- Can be deployed to: Netlify, Vercel, GitHub Pages, AWS S3, or any static hosting
- Just upload the `frontend` folder contents

### Backend
- Can be deployed to: Heroku, Railway, Render, AWS, or your own server
- Update `http://localhost:5000` to your deployed URL in `script.js`

## 📋 Checklist Before Launch

- [ ] Backend `.env` file configured with email credentials
- [ ] Backend server running and tested
- [ ] Frontend able to connect to backend (check browser console)
- [ ] All package information updated with correct details
- [ ] Contact information updated
- [ ] Company branding/name updated throughout
- [ ] Test a complete booking from start to finish
- [ ] Test email delivery (check spam folder)
- [ ] Mobile responsive test on phone

## 💡 Tips & Best Practices

1. **Test Bookings** - Send test bookings to verify email system works
2. **Monitor Spam** - Email confirmations might go to spam folder
3. **Update Packages** - Keep package descriptions fresh and current
4. **Mobile First** - Always test on mobile devices
5. **Backup Emails** - Keep copies of booking requests
6. **Response Time** - Set up alerts for new bookings to respond quickly

## 🆘 Support & Troubleshooting

### Issue: "Cannot POST /api/bookings"
- Ensure backend server is running
- Check that URL is `http://localhost:5000`
- Verify no CORS errors in browser console

### Issue: "Styles not loading"
- Check file paths in HTML
- Ensure CSS file is in `css/styles.css`
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: "Button selections not working"
- Check browser console for JavaScript errors
- Verify `script.js` is loading
- Check that package IDs are unique

### Issue: "Emails not sending"
- See Email Troubleshooting section above
- Check backend console for errors
- Verify `.env` credentials are correct

## 📄 License

This project is created for Ceylon Canary Travel Agency.

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [Nodemailer Guide](https://nodemailer.com/)
- [CSS Grid & Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

**Ready to explore? Start your adventure with Ceylon Canary! 🌴✈️**
