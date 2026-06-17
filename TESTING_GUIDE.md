# Testing Guide - Ceylon Canary Website

## Complete Testing Checklist

### Phase 1: Setup Verification ✅

#### Backend
- [ ] `npm install` completed without errors
- [ ] `.env` file created with credentials
- [ ] `npm start` runs without errors
- [ ] Console shows "Server running on port 5000"
- [ ] Can access `http://localhost:5000/api/health`

#### Frontend
- [ ] `frontend/index.html` opens in browser
- [ ] No console errors (F12 to open Developer Tools)
- [ ] All CSS loads (page is styled, not plain text)
- [ ] All images show correctly
- [ ] Navigation menu works

### Phase 2: Frontend Functionality 🎯

#### Navigation
- [ ] All nav links scroll to correct sections
- [ ] Sticky navbar stays at top while scrolling
- [ ] Mobile menu opens/closes (test on phone or zoom to 375px width)
- [ ] Logo links are clickable

#### Hero Section
- [ ] Background gradient displays correctly
- [ ] "Start Planning" button scrolls to packages
- [ ] Hero content is responsive

#### Package Section
- [ ] All 8 packages display correctly
- [ ] Package cards are responsive (3 columns → 1 on mobile)
- [ ] Each package shows:
    - [ ] Name and area
    - [ ] Duration badge
    - [ ] Places list
    - [ ] Experiences list
    - [ ] Includes list
    - [ ] Select/Deselect button

#### Package Selection
- [ ] Clicking a "Select Package" button highlights it
- [ ] Selected badge appears in journey summary
- [ ] Button text changes to "Selected" ✓
- [ ] Can select multiple packages
- [ ] "Remove" (×) button removes packages from selection
- [ ] Stats update correctly:
    - [ ] Total Days = sum of all selected durations
    - [ ] Total Experiences = count of all experiences
    - [ ] Total Places = count of all places

#### Journey Summary
- [ ] Appears only when packages selected
- [ ] Shows list of selected packages
- [ ] "Review Your Journey" button appears
- [ ] Button works and scrolls to review section

#### Review Section
- [ ] Only shows when at least one package selected
- [ ] Itinerary displays:
    - [ ] All selected packages listed
    - [ ] Duration for each package
    - [ ] Areas correctly shown
    - [ ] Places listed
    - [ ] Experiences listed

#### Booking Form
- [ ] All form fields are present:
    - [ ] Full Name (text input)
    - [ ] Email (email input)
    - [ ] Phone (tel input)
    - [ ] Travelers (number input)
    - [ ] Start Date (date input)
    - [ ] Special Requests (textarea)
- [ ] Form validation works:
    - [ ] Empty fields show as required
    - [ ] Email validation works (try "not-an-email")
    - [ ] Phone field accepts numbers
    - [ ] Travelers minimum is 1

#### Other Sections
- [ ] About section displays correctly
- [ ] Why Us features show (6 cards)
- [ ] Testimonials display properly
- [ ] Contact information visible
- [ ] Footer shows copyright and social links

### Phase 3: Backend Testing 🔧

#### Server Connectivity
1. Open browser console (F12 → Console tab)
2. Run: `fetch('http://localhost:5000/api/health').then(r => r.json()).then(console.log)`
3. [ ] Should show: `{status: "Server is running"}`

#### Email Configuration Test
1. Backend running with `.env` configured
2. [ ] No error messages in backend console
3. [ ] Can proceed to submission

### Phase 4: End-to-End Booking Test 🚀

#### Complete Booking Flow
1. [ ] Select 2-3 packages from different areas
2. [ ] Click "Review Your Journey"
3. [ ] Verify itinerary shows all selections
4. [ ] Fill in all form fields:
   ```
   Name: Test User
   Email: your-actual-email@gmail.com
   Phone: +94771234567
   Travelers: 2
   Start Date: Pick a future date
   Special Requests: This is a test booking
   ```
5. [ ] Click "Send to Travel Agent"
6. [ ] Wait for confirmation alert
7. [ ] Check email inbox for:
   - [ ] Confirmation email to you
   - [ ] (Admin would also get notification)

#### Email Content Verification
**Confirmation Email Should Have:**
- [ ] Thank you message
- [ ] Your name
- [ ] Trip details (days, travelers)
- [ ] List of packages
- [ ] Contact information
- [ ] Professional formatting

### Phase 5: Contact Form Test 📧

1. [ ] Navigate to Contact section
2. [ ] Fill in form:
   ```
   Name: Test Contact
   Email: your-email@gmail.com
   Message: Testing the contact form
   ```
3. [ ] Click "Send Message"
4. [ ] Receive confirmation alert
5. [ ] Check email for confirmation

### Phase 6: Mobile Responsiveness 📱

Test at these widths:
- [ ] 375px (iPhone SE)
- [ ] 768px (iPad)
- [ ] 1024px (iPad Pro)
- [ ] 1440px (Desktop)

Check for each:
- [ ] No horizontal scrolling
- [ ] Text is readable
- [ ] Buttons are clickable
- [ ] Images scale properly
- [ ] Forms are functional
- [ ] Hamburger menu works (on mobile)

### Phase 7: Browser Compatibility 🌐

Test in these browsers:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (if available)
- [ ] Mobile Chrome
- [ ] Mobile Safari (iOS)

### Phase 8: Performance 🚀

- [ ] Page loads in under 3 seconds
- [ ] No console errors (F12 → Console)
- [ ] Smooth scrolling (not jerky)
- [ ] Animations are smooth
- [ ] No memory leaks (check DevTools)

## Error Testing

### Test Error Scenarios

#### Missing Backend
1. Stop the backend server
2. [ ] Try to submit booking
3. [ ] Should show error: "Failed to submit booking"

#### Invalid Email in .env
1. Update .env with wrong email
2. Restart backend
3. Try booking
4. [ ] Backend logs should show error

#### Form Validation
- [ ] Empty name: should not submit
- [ ] Invalid email: should not submit
- [ ] Past date: should warn user
- [ ] No travelers selected: should reject (min 1)

#### No Packages Selected
- [ ] Try accessing review without selecting packages
- [ ] [ ] Should show error or warning

## Test Data

### Sample Bookings
Use these for testing different scenarios:

**Test 1: Single Package**
- Packages: Beach Paradise
- Name: John Smith
- Email: john@example.com
- Travelers: 1
- Date: 30 days from today

**Test 2: Multi-Package**
- Packages: Ancient Fortress + Mountain Retreat + Beach Paradise
- Name: Jane Doe
- Email: jane@example.com
- Travelers: 4
- Date: 45 days from today
- Special Requests: Vegetarian meals needed

**Test 3: Budget Travel**
- Packages: Urban Explorer Pack + Cultural Heritage
- Name: Budget Traveler
- Email: budget@example.com
- Travelers: 2
- Date: 60 days from today
- Special Requests: Budget accommodation please

## Common Issues & Fixes

### Issue: "Cannot POST /api/bookings"
```
Fix: 
1. Check backend is running
2. Check port is 5000
3. Check URL is http://localhost:5000
4. Restart backend with: npm start
```

### Issue: Styles not loading
```
Fix:
1. Refresh page: Ctrl+R (Cmd+R on Mac)
2. Clear cache: Ctrl+Shift+Delete
3. Check file path in HTML is correct
4. Check all CSS files exist
```

### Issue: Email not received
```
Fix:
1. Check spam folder
2. Verify .env credentials are correct
3. Check backend console for errors
4. If Gmail: verify App Password was used
5. Try different email address
```

### Issue: Packages not showing
```
Fix:
1. Check browser console for errors
2. Verify script.js loaded
3. Refresh page
4. Check for JavaScript errors
```

## Success Criteria ✅

Website is working correctly when:
- ✅ All packages display and are selectable
- ✅ Journey summary updates dynamically
- ✅ Booking form submits without errors
- ✅ Confirmation emails received
- ✅ Mobile view is responsive
- ✅ No console errors
- ✅ All sections navigate smoothly
- ✅ Backend server runs without issues

## Performance Benchmarks

Aim for:
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Total Page Size < 5MB
- [ ] 0 console errors
- [ ] Mobile Lighthouse Score > 80

## Sign-Off Checklist

Before launching to production:
- [ ] All testing phases completed
- [ ] No critical bugs remaining
- [ ] All email functions working
- [ ] Package data is accurate
- [ ] Company information updated
- [ ] Phone numbers verified
- [ ] Email addresses verified
- [ ] Test bookings received successfully
- [ ] Responsive design verified
- [ ] Browser compatibility confirmed

---

**Ready to launch? You've got this! 🚀**
