// ============================================
// API CONFIGURATION
// ============================================

// Update this to your Railway URL after deployment
const API_BASE_URL = process.env.NODE_ENV === 'production' 
    ? 'https://your-railway-url.railway.app'  // Replace with your Railway URL
    : 'http://localhost:5000';

// ============================================
// TRAVEL PACKAGES DATA
// ============================================

const packages = [
    {
        id: 'sigiriya',
        name: 'Ancient Fortress Explorer',
        area: 'Central Province',
        duration: 2,
        images: [
            'https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://res.cloudinary.com/djsspfywo/image/upload/q_auto/f_auto/v1777995010/Dambullagt1_eb7lqy.jpg',
            'https://res.cloudinary.com/djsspfywo/image/upload/q_auto/f_auto/v1777994820/elephant-rides_qljrcb.webp'
        ],
        places: ['Sigiriya Rock', 'Dambulla Cave Temple', 'Local Village Tour'],
        experiences: ['Sunrise hike to Sigiriya', 'Ancient frescoes viewing', 'Traditional cooking class'],
        includes: ['Guided tour', 'Entry fees', 'Luxury local meals', '2 nights boutique stay']
    },
    {
        id: 'beaches',
        name: 'Southern Blue Paradise',
        area: 'South Coast',
        duration: 3,
        images: [
            'https://res.cloudinary.com/djsspfywo/image/upload/q_auto/f_auto/v1777994345/Galle-Fort-Walking-Tour_c4qajv.png',
            'https://images.unsplash.com/photo-1509982724584-2ce0d4366d8b?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        places: ['Mirissa Beach', 'Weligama Bay', 'Galle Fort'],
        experiences: ['Whale watching expedition', 'Surfing lessons', 'Stilt fishing experience', 'Sunset sailing'],
        includes: ['Beach resort stay', 'Water sports', 'Seafood dinners', 'Private transport']
    },
    {
        id: 'mountains',
        name: 'Emerald Mountain Retreat',
        area: 'Tea Country',
        duration: 3,
        images: [
            'https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1684758110953-5b39d6e86050?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1652643049080-72d95776424e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        places: ['Nuwara Eliya', 'Tea Estates', 'Ella', 'Nine Arch Bridge'],
        experiences: ['Tea factory masterclass', 'Scenic train journey', 'Little Adam\'s Peak hike', 'Waterfall picnic'],
        includes: ['Heritage bungalow stays', 'Tea tasting', 'Scenic train tickets', 'Professional guide']
    },
    {
        id: 'culture',
        name: 'Sacred Heritage Tour',
        area: 'Central & North',
        duration: 2,
        images: [
            'https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1626091022888-485eb96c494a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://res.cloudinary.com/djsspfywo/image/upload/q_auto/f_auto/v1778001661/37139635514_5d691b40b9_b_ibobvz.jpg'
        ],
        places: ['Kandy Temple', 'Peradeniya Gardens', 'Sacred City of Anuradhapura'],
        experiences: ['Tooth Relic ceremony', 'Cultural dance show', 'Buddhist meditation session', 'Artisan market tour'],
        includes: ['All site entries', 'Show tickets', 'Expert historian guide', 'Traditional hospitality']
    },
    {
        id: 'wildlife',
        name: 'Wild Heartland Safari',
        area: 'Yala & Udawalawe',
        duration: 2,
        images: [
            'https://res.cloudinary.com/djsspfywo/image/upload/q_auto/f_auto/v1777996020/yala-slider1_ytrcjg.jpg',
            'https://res.cloudinary.com/djsspfywo/image/upload/q_auto/f_auto/v1777995554/Safari_in_Willpaththu_National_Park_4_6f226e3247_grlvww.jpg',
            'https://res.cloudinary.com/djsspfywo/image/upload/q_auto/f_auto/v1777995554/LK50F01000-14-E_fsjfs2.webp'
        ],
        places: ['Yala National Park', 'Elephant Transit Home', 'Bundala Bird Sanctuary'],
        experiences: ['4x4 Leopard safari', 'Elephant bottle feeding', 'Star-gazing dinner', 'Nature walk'],
        includes: ['Private jeep & ranger', 'Camp/Lodge stay', 'All safari permits', 'Full board meals']
    },
    {
        id: 'spiritual',
        name: 'Lanka Wellness Escape',
        area: 'Central Highlands',
        duration: 3,
        images: [
            'https://images.unsplash.com/photo-1621764021299-bb223bc54fc5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://res.cloudinary.com/djsspfywo/image/upload/q_auto/f_auto/v1778000617/spice-garden-sri-lanka-holiday-packages_v3kcuc.jpg',
            'https://images.unsplash.com/photo-1737026329740-34a8770c7529?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        places: ['Kandy Wellness Center', 'Waterfall retreats', 'Herbal gardens'],
        experiences: ['Daily Yoga sessions', 'Ayurvedic treatments', 'Forest bathing', 'Vegan cooking workshop'],
        includes: ['Eco-resort accommodation', 'Wellness meals', 'All treatments', 'Yoga instructor']
    },
    {
        id: 'adventure',
        name: 'Kitulgala Thrills',
        area: 'Western Ghats',
        duration: 2,
        images: [
            'https://res.cloudinary.com/djsspfywo/image/upload/q_auto/f_auto/v1777996570/a3_aquetp.jpg',
            'https://res.cloudinary.com/djsspfywo/image/upload/q_auto/f_auto/v1777996572/rafting7_gyojjc.jpg',
            'https://images.unsplash.com/photo-1678914906706-391eebe3a9f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        places: ['Kelani River', 'Rainforest trails', 'Canyoning sites'],
        experiences: ['White water rafting', 'Confidence jumping', 'Rainforest trekking', 'River camping'],
        includes: ['Safety gear', 'Certified guides', 'Riverside meals', 'Camping equipment']
    },
    {
        id: 'city',
        name: 'Colombo Cosmopolitan',
        area: 'Western Capital',
        duration: 2,
        images: [
            'https://airlinescrewtours.com/wp-content/uploads/2022/09/Lotus-Tower-1.jpg',
            'https://images.unsplash.com/photo-1653151106233-8e928c21bc1a?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1710381535965-e2ed36b2a547?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        places: ['Colombo Fort', 'Lotus Tower', 'Galle Face Green', 'Pettah Market'],
        experiences: ['Heritage walking tour', 'Tuk-tuk street food tour', 'High tea at Grand Oriental', 'Roof-top dining'],
        includes: ['Luxury city hotel', 'All city tours', 'Dinner at Ministry of Crab', 'Private transfers']
    }
];

// ============================================
// GLOBAL STATE
// ============================================

let selectedPackages = JSON.parse(localStorage.getItem('selectedPackages')) || [];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    renderPackages();
    updatePackageUI();
    updateJourneySummary();
    setupMobileMenu();
    setupFormValidation();
    setupNavbarScroll();
    setupRevealOnScroll();
    startHeroSlider();
    startCardSliders();
    setupPackageModal();
    setupGalleryLightbox();
    setupCustomBuilder();
    setupAdBannerClose();
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// REVEAL ON SCROLL
// ============================================

function setupRevealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    reveals.forEach(el => observer.observe(el));
}

// ============================================
// PACKAGE RENDERING
// ============================================

function renderPackages() {
    const packagesGrid = document.getElementById('packagesGrid');
    packagesGrid.innerHTML = packages.map(pkg => `
        <div class="package-card reveal" data-id="${pkg.id}">
            <div class="package-img" onclick="openPackageModal('${pkg.id}')">
                <div class="card-slider">
                    ${pkg.images.map((img, i) => `
                        <div class="card-slide ${i === 0 ? 'active' : ''}" style="background-image: url('${img}')"></div>
                    `).join('')}
                </div>
                <div class="package-tag">${pkg.area}</div>
            </div>
            <div class="package-body">
                <div onclick="openPackageModal('${pkg.id}')" style="cursor: pointer;">
                    <h3>${pkg.name}</h3>
                    <div class="package-location">
                        <i class="fas fa-map-marker-alt"></i> ${pkg.area}
                    </div>
                    
                    <div class="package-details">
                        <div class="package-detail-item">
                            <i class="fas fa-calendar-check"></i> <strong>${pkg.duration} Days</strong>
                        </div>
                        <div class="package-detail-item">
                            <i class="fas fa-camera"></i> ${pkg.experiences.length} Experiences
                        </div>
                    </div>
                </div>

                <div class="package-footer">
                    <span class="package-duration"><i class="fas fa-clock"></i> ${pkg.duration}d Journey</span>
                    <button class="package-btn" onclick="togglePackage('${pkg.id}')">
                        <i class="fas fa-plus-circle"></i> Add Module
                    </button>
                </div>
            </div>
        </div>
    `).join('') + `
        <!-- Custom Inquiry Card -->
        <div class="package-card reveal custom-inquiry-card" data-id="custom">
            <div class="package-img" onclick="openCustomBuilderModal()">
                <div style="background-image: url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop'); background-size: cover; background-position: center; width: 100%; height: 100%;"></div>
                <div class="package-tag" style="background: var(--primary); color: var(--white); font-weight: 700;">Custom</div>
            </div>
            <div class="package-body">
                <div onclick="openCustomBuilderModal()" style="cursor: pointer;">
                    <h3 style="color: var(--secondary);"><i class="fas fa-wand-magic-sparkles" style="margin-right: 0.5rem;"></i>Design Your Own</h3>
                    <div class="package-location">
                        <i class="fas fa-globe"></i> Anywhere in Sri Lanka
                    </div>
                    
                    <p style="color: var(--text-light); font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.5;">
                        Create a tailor-made journey from scratch. Specify your preferred duration, places, activities, and budget style.
                    </p>
                </div>

                <div class="package-footer" style="margin-top: auto; padding-top: 1.5rem;">
                    <span class="package-duration" style="color: var(--secondary);"><i class="fas fa-sliders"></i> Flexible Odyssey</span>
                    <button class="package-btn" onclick="openCustomBuilderModal()" style="background: var(--secondary); color: var(--dark); border: none;">
                        <i class="fas fa-pencil-alt"></i> Customize Tour
                    </button>
                </div>
            </div>
        </div>
    `;

    setupRevealOnScroll();
}

// ============================================
// PACKAGE SELECTION LOGIC
// ============================================

function togglePackage(packageId) {
    const index = selectedPackages.findIndex(p => p.id === packageId);

    if (index > -1) {
        // Remove package
        selectedPackages.splice(index, 1);
    } else {
        // Add package
        const pkg = packages.find(p => p.id === packageId);
        selectedPackages.push(pkg);
    }

    updatePackageUI();
    updateJourneySummary();

    // Save to localStorage for the booking page
    localStorage.setItem('selectedPackages', JSON.stringify(selectedPackages));
}

function updatePackageUI() {
    document.querySelectorAll('.package-card').forEach(card => {
        const packageId = card.dataset.id;
        const btn = card.querySelector('.package-btn');
        const isSelected = selectedPackages.some(p => p.id === packageId);

        if (isSelected) {
            card.classList.add('selected-card');
            btn.classList.add('selected');
            if (packageId === 'custom') {
                btn.innerHTML = '<i class="fas fa-edit"></i> Edit Tour';
                btn.style.background = 'var(--secondary)';
                btn.style.color = 'var(--dark)';
            } else {
                btn.innerHTML = '<i class="fas fa-check-circle"></i> Selected';
                btn.style.background = '';
                btn.style.color = '';
            }
            card.style.borderColor = 'var(--secondary)';
        } else {
            card.classList.remove('selected-card');
            btn.classList.remove('selected');
            if (packageId === 'custom') {
                btn.innerHTML = '<i class="fas fa-pencil-alt"></i> Customize Tour';
                btn.style.background = 'var(--secondary)';
                btn.style.color = 'var(--dark)';
            } else {
                btn.innerHTML = '<i class="fas fa-plus-circle"></i> Add Module';
                btn.style.background = '';
                btn.style.color = '';
            }
            card.style.borderColor = 'transparent';
        }
    });
}

function updateJourneySummary() {
    const floatingSummary = document.getElementById('journeySummaryFloating');
    const countDisplay = document.getElementById('selectedCount');

    if (selectedPackages.length === 0) {
        floatingSummary.classList.remove('active');
        localStorage.removeItem('selectedPackages'); // Clear storage if nothing selected
        return;
    }

    floatingSummary.classList.add('active');
    countDisplay.textContent = `${selectedPackages.length} Selected`;

    // Calculate totals
    const totalDays = selectedPackages.reduce((sum, pkg) => sum + pkg.duration, 0);
    const totalExperiences = selectedPackages.reduce((sum, pkg) => sum + pkg.experiences.length, 0);
    const totalPlaces = selectedPackages.reduce((sum, pkg) => sum + pkg.places.length, 0);

    // Update stats
    document.getElementById('totalDays').textContent = totalDays;
    document.getElementById('totalExperiences').textContent = totalExperiences;
    document.getElementById('totalPlaces').textContent = totalPlaces;
}

function scrollToReview() {
    // Redirect to the separate booking page
    window.location.href = 'booking.html';
}

// ============================================
// ITINERARY GENERATION
// ============================================

function updateItinerary() {
    const itinerary = document.getElementById('itinerary');

    let itineraryHTML = '<h3 style="margin-bottom: 2rem; font-family: \'Playfair Display\', serif;"><i class="fas fa-route" style="color: var(--secondary);"></i> Your Island Odyssey</h3>';

    let dayCounter = 1;
    selectedPackages.forEach((pkg, index) => {
        const endDay = dayCounter + pkg.duration - 1;
        itineraryHTML += `
            <div style="margin-bottom: 2.5rem; position: relative; padding-left: 1.5rem; border-left: 2px solid var(--secondary);">
                <div style="position: absolute; left: -8px; top: 0; width: 15px; height: 15px; background: var(--secondary); border-radius: 50%;"></div>
                <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 0.5rem;">
                    Part ${index + 1}: ${pkg.name}
                </h4>
                <div style="font-weight: 700; color: var(--secondary); margin-bottom: 1rem; font-size: 0.9rem;">
                    DAYS ${dayCounter} — ${endDay}
                </div>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.5rem; display: flex; gap: 0.8rem; font-size: 0.95rem;">
                        <i class="fas fa-map-pin" style="margin-top: 4px; color: var(--text-light);"></i>
                        <span>${pkg.places.join(', ')}</span>
                    </li>
                    <li style="margin-bottom: 0.5rem; display: flex; gap: 0.8rem; font-size: 0.95rem;">
                        <i class="fas fa-star" style="margin-top: 4px; color: var(--text-light);"></i>
                        <span>${pkg.experiences.join(', ')}</span>
                    </li>
                </ul>
            </div>
        `;
        dayCounter += pkg.duration;
    });

    itineraryHTML += `
        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px dashed #cbd5e1;">
            <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 1.2rem; color: var(--primary);">
                <span>Total Journey Duration:</span>
                <span>${dayCounter - 1} Days</span>
            </div>
        </div>
    `;

    itinerary.innerHTML = itineraryHTML;
}

// ============================================
// FORM SUBMISSION
// ============================================

async function submitBooking(e) {
    e.preventDefault();

    if (selectedPackages.length === 0) {
        showToast('Please select at least one package module', 'error');
        return;
    }

    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        travelers: document.getElementById('travelers').value,
        startDate: document.getElementById('startDate').value,
        specialRequests: document.getElementById('specialRequests').value,
        packages: selectedPackages.map(p => p.name),
        totalDays: document.getElementById('totalDays').textContent
    };

    try {
        // Simulating API call for now since backend might not be ready
        console.log('Sending booking request:', formData);

        // await fetch('/api/bookings', { ... });

        setTimeout(() => {
            showToast('Enquiry sent! Our travel specialist will contact you shortly.', 'success');
            document.getElementById('bookingForm').reset();
            resetSelections();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1500);

    } catch (error) {
        console.error('Error:', error);
        showToast('Submission failed. Please try again or contact us via WhatsApp.', 'error');
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

function resetSelections() {
    selectedPackages = [];
    updatePackageUI();
    updateJourneySummary();
    document.getElementById('review').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// UTILS
// ============================================

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div style="position: fixed; top: 2rem; right: 2rem; background: ${type === 'success' ? '#10b981' : '#ef4444'}; color: white; padding: 1rem 2rem; border-radius: 0.5rem; box-shadow: var(--shadow-lg); z-index: 2000; animation: fadeInUp 0.5s ease;">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}" style="margin-right: 0.8rem;"></i>
            ${message}
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

async function submitContact(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
        showToast('Message sent successfully!', 'success');
        e.target.reset();
        btn.innerHTML = 'Send Message';
    }, 1000);
}

function setupFormValidation() {
    const startDateInput = document.getElementById('startDate');
    if (startDateInput) {
        const today = new Date().toISOString().split('T')[0];
        startDateInput.setAttribute('min', today);
    }
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.querySelectorAll('span').forEach((span, i) => {
                if (navMenu.classList.contains('active')) {
                    if (i === 0) span.style.transform = 'rotate(45deg) translate(8px, 8px)';
                    if (i === 1) span.style.opacity = '0';
                    if (i === 2) span.style.transform = 'rotate(-45deg) translate(8px, -8px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.querySelectorAll('span').forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            });
        });
    }
}

// ============================================
// HERO SLIDER LOGIC
// ============================================

function startHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// ============================================
// CARD SLIDER LOGIC
// ============================================

function startCardSliders() {
    const cards = document.querySelectorAll('.package-card');

    cards.forEach(card => {
        const slides = card.querySelectorAll('.card-slide');
        if (slides.length <= 1) return;

        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000 + Math.random() * 2000); // Random offset for more natural feel
    });
}

// ============================================
// MODAL LOGIC
// ============================================

function setupPackageModal() {
    const modal = document.getElementById('packageModal');
    const closeBtn = document.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = 'none';
    }

    window.addEventListener('click', (event) => {
        const customModal = document.getElementById('customBuilderModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
        if (event.target == customModal) {
            customModal.style.display = 'none';
        }
    });
}

function openPackageModal(packageId) {
    const pkg = packages.find(p => p.id === packageId);
    if (!pkg) return;

    const modal = document.getElementById('packageModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-image-area" style="background-image: url('${pkg.images[0]}')"></div>
            <div class="modal-info-area">
                <h2>${pkg.name}</h2>
                
                <div class="modal-section">
                    <h4><i class="fas fa-map-marked-alt"></i> Key Destinations</h4>
                    <ul class="modal-list">
                        ${pkg.places.map(place => `<li><i class="fas fa-check"></i> ${place}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-star"></i> Top Experiences</h4>
                    <ul class="modal-list">
                        ${pkg.experiences.map(exp => `<li><i class="fas fa-check"></i> ${exp}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-concierge-bell"></i> What's Included</h4>
                    <ul class="modal-list">
                        ${pkg.includes.map(inc => `<li><i class="fas fa-check"></i> ${inc}</li>`).join('')}
                    </ul>
                </div>

                <div style="margin-top: 2rem;">
                    <button class="btn btn-primary" onclick="togglePackage('${pkg.id}'); document.getElementById('packageModal').style.display='none';" style="width: 100%;">
                        Add This Module
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// ============================================
// GALLERY LIGHTBOX LOGIC
// ============================================

function setupGalleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const captionText = document.getElementById('lightboxCaption');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeBtn = document.querySelector('.close-lightbox');

    galleryItems.forEach(item => {
        item.onclick = function() {
            const img = this.querySelector('img');
            const caption = this.querySelector('.gallery-overlay span');
            
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            captionText.innerHTML = caption.innerHTML;
            document.body.style.overflow = 'hidden'; // Disable scroll
        }
    });

    if (closeBtn) {
        closeBtn.onclick = function() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scroll
        }
    }

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// ============================================
// CUSTOM INQUIRY / BUILDER MODAL LOGIC
// ============================================

function setupCustomBuilder() {
    const customBuilder = document.getElementById('customBuilderModal');
    if (customBuilder) {
        customBuilder.addEventListener('click', (e) => {
            const chip = e.target.closest('.chip');
            if (chip) {
                chip.classList.toggle('selected');
                return;
            }

            const radioCard = e.target.closest('.radio-card');
            if (radioCard) {
                const container = radioCard.closest('.radio-cards');
                container.querySelectorAll('.radio-card').forEach(card => card.classList.remove('selected'));
                radioCard.classList.add('selected');
                return;
            }
        });
    }
}

function openCustomBuilderModal() {
    const modal = document.getElementById('customBuilderModal');
    if (!modal) return;
    
    const customPkg = selectedPackages.find(p => p.id === 'custom');
    if (customPkg) {
        document.getElementById('customDuration').value = customPkg.duration;
        
        // Pre-select destinations
        document.querySelectorAll('#destinationChips .chip').forEach(chip => {
            const val = chip.getAttribute('data-value');
            if (customPkg.places.includes(val)) {
                chip.classList.add('selected');
            } else {
                chip.classList.remove('selected');
            }
        });
        
        // Pre-fill custom text box with extra places
        const standardPlaces = ["Sigiriya & Dambulla", "Kandy", "Ella", "Galle & Mirissa", "Nuwara Eliya", "Yala National Park", "Trincomalee", "Colombo"];
        const extraPlaces = customPkg.places.filter(p => !standardPlaces.includes(p));
        document.getElementById('customPlacesText').value = extraPlaces.join(', ');
        
        // Pre-select experiences
        document.querySelectorAll('#experienceChips .chip').forEach(chip => {
            const val = chip.getAttribute('data-value');
            if (customPkg.experiences.includes(val)) {
                chip.classList.add('selected');
            } else {
                chip.classList.remove('selected');
            }
        });
        
        // Pre-select accommodation
        const accomClass = customPkg.includes.find(inc => inc.startsWith('Accommodation Class:'));
        if (accomClass) {
            const accomVal = accomClass.replace('Accommodation Class: ', '');
            document.querySelectorAll('#accommodationCards .radio-card').forEach(card => {
                if (card.getAttribute('data-value') === accomVal) {
                    card.classList.add('selected');
                } else {
                    card.classList.remove('selected');
                }
            });
        }
        
        // Add or show "Remove Custom Tour" button
        let removeBtn = document.getElementById('removeCustomBtn');
        if (!removeBtn) {
            removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.id = 'removeCustomBtn';
            removeBtn.className = 'btn btn-outline';
            removeBtn.style.color = '#ef4444';
            removeBtn.style.borderColor = '#fca5a5';
            removeBtn.style.flex = '1';
            removeBtn.style.padding = '0.8rem 1.5rem';
            removeBtn.innerHTML = '<i class="fas fa-trash-can"></i> Remove';
            removeBtn.onclick = removeCustomPackage;
            
            const formButtons = document.querySelector('#customBuilderForm > div:last-child');
            if (formButtons) {
                formButtons.insertBefore(removeBtn, document.getElementById('saveCustomBtn'));
            }
        }
        removeBtn.style.display = 'block';
    } else {
        // Reset to default
        document.getElementById('customDuration').value = 7;
        document.querySelectorAll('#destinationChips .chip').forEach(chip => chip.classList.remove('selected'));
        document.getElementById('customPlacesText').value = '';
        document.querySelectorAll('#experienceChips .chip').forEach(chip => chip.classList.remove('selected'));
        
        document.querySelectorAll('#accommodationCards .radio-card').forEach((card, idx) => {
            if (idx === 0) card.classList.add('selected');
            else card.classList.remove('selected');
        });
        
        const removeBtn = document.getElementById('removeCustomBtn');
        if (removeBtn) {
            removeBtn.style.display = 'none';
        }
    }
    
    modal.style.display = 'block';
}

function closeCustomBuilderModal() {
    const modal = document.getElementById('customBuilderModal');
    if (modal) modal.style.display = 'none';
}

function saveCustomPackage(e) {
    e.preventDefault();
    
    const durationVal = parseInt(document.getElementById('customDuration').value) || 7;
    
    const selectedDestinations = [];
    document.querySelectorAll('#destinationChips .chip.selected').forEach(chip => {
        selectedDestinations.push(chip.getAttribute('data-value'));
    });
    
    const customPlacesText = document.getElementById('customPlacesText').value.trim();
    if (customPlacesText) {
        selectedDestinations.push(customPlacesText);
    }
    
    const selectedExperiences = [];
    document.querySelectorAll('#experienceChips .chip.selected').forEach(chip => {
        selectedExperiences.push(chip.getAttribute('data-value'));
    });
    
    const selectedAccommodation = document.querySelector('#accommodationCards .radio-card.selected').getAttribute('data-value');
    
    const includes = [
        'Private AC vehicle & professional English-speaking chauffeur-guide',
        `Accommodation Class: ${selectedAccommodation}`,
        'Custom tailormade sightseeing itinerary'
    ];
    
    if (selectedExperiences.includes('Ayurveda & Wellness')) {
        includes.push('Daily wellness sessions & consultations');
    }
    if (selectedExperiences.includes('Culinary & Food Tours')) {
        includes.push('Traditional Sri Lankan cooking masterclass');
    }
    
    const customPkg = {
        id: 'custom',
        name: 'Custom Tailor-Made Odyssey',
        area: selectedDestinations.join(', ') || 'Flexible - Your Choice',
        duration: durationVal,
        images: [
            'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop'
        ],
        places: selectedDestinations.length > 0 ? selectedDestinations : ['Your custom destinations'],
        experiences: selectedExperiences.length > 0 ? selectedExperiences : ['Custom curated experiences'],
        includes: includes
    };
    
    const existingIndex = selectedPackages.findIndex(p => p.id === 'custom');
    if (existingIndex > -1) {
        selectedPackages[existingIndex] = customPkg;
    } else {
        selectedPackages.push(customPkg);
    }
    
    localStorage.setItem('selectedPackages', JSON.stringify(selectedPackages));
    
    updatePackageUI();
    updateJourneySummary();
    closeCustomBuilderModal();
    showToast('Custom tour saved to your Odyssey!', 'success');
}

function removeCustomPackage() {
    const existingIndex = selectedPackages.findIndex(p => p.id === 'custom');
    if (existingIndex > -1) {
        selectedPackages.splice(existingIndex, 1);
        localStorage.setItem('selectedPackages', JSON.stringify(selectedPackages));
        updatePackageUI();
        updateJourneySummary();
        closeCustomBuilderModal();
        showToast('Custom tour removed from your Odyssey.', 'success');
    }
}

// ============================================
// AD BANNER CLOSE LOGIC
// ============================================

function setupAdBannerClose() {
    const adBannerClose = document.getElementById('adBannerClose');
    const adBanner = document.getElementById('adBanner');
    const adModalClose = document.getElementById('adModalClose');
    const adModal = document.getElementById('adModal');

    if (adBannerClose && adBanner) {
        adBannerClose.addEventListener('click', (e) => {
            e.stopPropagation();
            adBanner.style.animation = 'slideUp 0.4s ease-out forwards';
            setTimeout(() => {
                adBanner.classList.add('hidden');
            }, 400);
        });
    }

    if (adModalClose && adModal) {
        adModalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAdModal();
        });
    }

    if (adModal) {
        adModal.addEventListener('click', (e) => {
            if (e.target === adModal) {
                closeAdModal();
            }
        });
    }

    // Mobile banner close button
    setupAdBannerCloseMobile();
}

function setupAdBannerCloseMobile() {
    const adBannerCloseMobile = document.getElementById('adBannerCloseMobile');
    const adBannerMobile = document.getElementById('adBannerMobile');
    const adModalCloseMobile = document.getElementById('adModalCloseMobile');
    const adModalMobile = document.getElementById('adModalMobile');

    if (adBannerCloseMobile && adBannerMobile) {
        adBannerCloseMobile.addEventListener('click', (e) => {
            e.stopPropagation();
            adBannerMobile.style.animation = 'slideUp 0.4s ease-out forwards';
            setTimeout(() => {
                adBannerMobile.classList.add('hidden');
            }, 400);
        });
    }

    if (adModalCloseMobile && adModalMobile) {
        adModalCloseMobile.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAdModalMobile();
        });
    }

    if (adModalMobile) {
        adModalMobile.addEventListener('click', (e) => {
            if (e.target === adModalMobile) {
                closeAdModalMobile();
            }
        });
    }
}

function openAdModal() {
    const adModal = document.getElementById('adModal');
    if (adModal) {
        adModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function openAdModalMobile() {
    const adModalMobile = document.getElementById('adModalMobile');
    if (adModalMobile) {
        adModalMobile.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAdModal() {
    const adModal = document.getElementById('adModal');
    if (adModal) {
        adModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function closeAdModalMobile() {
    const adModalMobile = document.getElementById('adModalMobile');
    if (adModalMobile) {
        adModalMobile.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function scrollToContact() {
    closeAdModal();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}
