# Deployment Guide - Ceylon Canary

## Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All testing completed (see TESTING_GUIDE.md)
- [ ] All packages updated with final details
- [ ] Company information correct
- [ ] Email system tested and working
- [ ] No console errors
- [ ] Mobile responsive verified
- [ ] Backup of all files created

## Frontend Deployment

### Option 1: Netlify (Recommended - Free & Easy)

1. **Create Account**
   - Go to https://netlify.com
   - Sign up with GitHub, Google, or email

2. **Deploy Frontend**
   - Click "Add new site"
   - Select "Deploy manually"
   - Drag and drop the `frontend` folder
   - Wait for deployment to complete

3. **Update Backend URL**
   - Get your Netlify domain (e.g., `ceylon-canary.netlify.app`)
   - In `frontend/js/script.js`, update:
   ```javascript
   // OLD:
   fetch('http://localhost:5000/api/bookings'
   
   // NEW:
   fetch('https://your-backend-url.com/api/bookings'
   ```

### Option 2: Vercel (Free & Fast)

1. **Create Account**
   - Go to https://vercel.com
   - Sign up with GitHub or email

2. **Deploy**
   - Click "New Project"
   - Select "Import Git Repository" or upload folder
   - Select framework: Static
   - Deploy

### Option 3: GitHub Pages (Free)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ceylon-canary.git
   git push -u origin main
   ```

2. **Enable Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Select main branch, /root folder
   - Your site is live!

### Option 4: Traditional Web Host

1. Upload `frontend` folder contents to your web host via FTP
2. Update backend URL in `script.js`
3. Access via your domain

## Backend Deployment

### Option 1: Heroku (Easy - Paid after free tier)

1. **Create Account**
   - Go to https://heroku.com
   - Sign up

2. **Install Heroku CLI**
   ```bash
   # Download from https://devcenter.heroku.com/articles/heroku-cli
   ```

3. **Deploy Backend**
   ```bash
   cd backend
   heroku login
   heroku create your-app-name
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASSWORD=your-app-password
   heroku config:set OWNER_EMAIL=owner@ceyloncanary.com
   git push heroku main
   ```

4. **Get URL**
   - Your backend URL: `https://your-app-name.herokuapp.com`

### Option 2: Railway (Easy - Paid)

1. **Create Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Deploy**
   - Click "New Project"
   - Select "Deploy from GitHub"
   - Select your repository
   - Add environment variables:
     - EMAIL_USER
     - EMAIL_PASSWORD
     - OWNER_EMAIL
     - PORT

### Option 3: Render (Free - Simple)

1. **Create Account**
   - Go to https://render.com
   - Sign up

2. **Create Web Service**
   - Click "New +"
   - Select "Web Service"
   - Connect GitHub repo
   - Set runtime: Node
   - Add environment variables
   - Deploy

### Option 4: Your Own Server

1. **Requirements**
   - Node.js installed
   - SSH access
   - Server with 512MB+ RAM

2. **Setup**
   ```bash
   ssh user@your-server.com
   cd /var/www
   git clone your-repo.git
   cd ceylon-canary/backend
   npm install
   npm install -g pm2
   pm2 start server.js
   pm2 startup
   pm2 save
   ```

3. **Setup Domain**
   - Point domain to server IP
   - Setup SSL certificate (Let's Encrypt)
   - Configure nginx/apache as reverse proxy

## Full URL Updates

After deploying, update these URLs:

### In Frontend (`frontend/js/script.js`)

Find and replace:
```javascript
// Line ~161: submitBooking function
const response = await fetch('http://localhost:5000/api/bookings'
// Change to:
const response = await fetch('https://your-backend-url.com/api/bookings'

// Line ~203: submitContact function  
const response = await fetch('http://localhost:5000/api/contact'
// Change to:
const response = await fetch('https://your-backend-url.com/api/contact'
```

### In Backend (if using custom domain)

Update CORS in `backend/server.js`:
```javascript
// Before (allows all):
app.use(cors());

// After (restrict to your domains):
app.use(cors({
    origin: 'https://your-frontend-domain.com',
    credentials: true
}));
```

## Environment Variables for Production

### Backend .env
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-business-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
OWNER_EMAIL=bookings@ceyloncanary.com
PORT=5000
NODE_ENV=production
```

## SSL/HTTPS Setup

Most hosting platforms provide free SSL. Ensure:
- [ ] Frontend is HTTPS
- [ ] Backend is HTTPS
- [ ] Mixed content warnings resolved

## Domain Setup

### Using Custom Domain

1. **Purchase Domain**
   - Providers: GoDaddy, Namecheap, Google Domains

2. **Point to Hosting**
   - Frontend: Update A record to hosting provider's IP
   - Backend: Update A record or CNAME to your API URL

3. **Setup SSL**
   - Most hosting includes free SSL
   - Verify HTTPS works

### Example Domain Structure
```
Frontend: ceyloncanary.com
Backend: api.ceyloncanary.com
```

## Monitoring & Maintenance

### Setup Alerts
- [ ] Email notifications for failed bookings
- [ ] Uptime monitoring (https://uptimerobot.com)
- [ ] Error tracking (https://sentry.io)

### Regular Maintenance
- [ ] Weekly: Check for new bookings
- [ ] Monthly: Update packages/pricing
- [ ] Monthly: Review analytics
- [ ] Quarterly: Update security patches
- [ ] Yearly: Renew SSL certificates

## Performance Optimization

### Frontend
```bash
# Minify CSS
npm install -g csso-cli
csso frontend/css/styles.css -o frontend/css/styles.min.css

# Minify JavaScript
npm install -g terser
terser frontend/js/script.js -o frontend/js/script.min.js
```

### Backend
- Enable gzip compression
- Add caching headers
- Setup CDN for static assets

## Backup Strategy

### Daily Backups
```bash
# Backend backup
tar -czf backup-$(date +%Y%m%d).tar.gz backend/

# Database backup (if using database)
mongodump --archive=backup-$(date +%Y%m%d).archive
```

### Storage
- [ ] Store in cloud storage (Google Drive, Dropbox)
- [ ] Keep local copy
- [ ] Test restore process

## Troubleshooting Deployment

### Issue: CORS Errors
```
Fix: Ensure backend URL in frontend matches exactly
- No trailing slashes
- HTTPS if backend is HTTPS
```

### Issue: Mixed Content Warnings
```
Fix: Use HTTPS for both frontend and backend
- Update URLs to https://
- Setup SSL certificate
```

### Issue: Emails Not Sending
```
Fix:
1. Verify environment variables set in hosting
2. Check email credentials
3. Review backend logs
4. Test with different email address
```

### Issue: Database Connection Errors
```
Fix:
1. Verify connection string
2. Check IP whitelist
3. Confirm credentials
4. Test connection manually
```

## Going Live Checklist

Before launching to public:
- [ ] Domain registered and configured
- [ ] SSL certificate installed
- [ ] Frontend deployed and working
- [ ] Backend deployed and working
- [ ] Email system tested with real emails
- [ ] Booking flow tested end-to-end
- [ ] Analytics installed (if using)
- [ ] SEO configured (title, meta tags)
- [ ] Contact information verified
- [ ] Backup system in place
- [ ] Monitoring setup
- [ ] Error tracking configured
- [ ] Load testing completed
- [ ] Security audit performed
- [ ] Announcement email sent to subscribers

## Post-Launch

### Monitor First Week
- Check for errors daily
- Respond to inquiries quickly
- Monitor server performance
- Check email delivery

### Continuous Improvement
- Collect user feedback
- Fix reported issues promptly
- Update content regularly
- Add new packages as needed
- Improve SEO over time

## Common Deployment Issues

| Issue | Solution |
|-------|----------|
| 404 Not Found | Check file paths and URLs |
| 500 Server Error | Check backend logs, verify environment variables |
| CORS Error | Verify backend URL, check CORS configuration |
| Email not sent | Verify credentials, check spam folder |
| Slow loading | Enable compression, optimize images |
| SSL warning | Install proper SSL certificate |

## Support Resources

- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [Heroku Docs](https://devcenter.heroku.com)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [Node.js Production Checklist](https://nodejs.org/en/docs/guides/nodejs-web-app-security-checklist/)

## Getting Help

- Check deployment platform's documentation
- Visit community forums
- Contact platform support
- Review error logs carefully
- Test changes locally first

---

**Your website is ready to share with the world! 🌍**

Questions? Check README.md for troubleshooting.
