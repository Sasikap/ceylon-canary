// ============================================
// API CONFIGURATION
// ============================================

const API_BASE_URL = 'http://localhost:5000'; // Update to Railway URL after deployment

// ============================================
// BOOKING PAGE LOGIC
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const selectedPackages = JSON.parse(localStorage.getItem('selectedPackages')) || [];
    
    if (selectedPackages.length === 0) {
        window.location.href = 'index.html#packages';
        return;
    }

    renderItinerary(selectedPackages);
    setupFormValidation();
    setupMobileMenu();
});

function renderItinerary(selectedPackages) {
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

    const totalDays = dayCounter - 1;
    itineraryHTML += `
        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px dashed #cbd5e1;">
            <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 1.2rem; color: var(--primary);">
                <span>Total Journey Duration:</span>
                <span>${totalDays} Days</span>
            </div>
        </div>
    `;

    itinerary.innerHTML = itineraryHTML;
    
    // Store total days for form submission
    window.totalDays = totalDays;
    window.selectedPackages = selectedPackages;
}

async function submitBooking(e) {
    e.preventDefault();

    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        travelers: parseInt(document.getElementById('travelers').value) || 1,
        startDate: document.getElementById('startDate').value,
        specialRequests: document.getElementById('specialRequests').value,
        packages: window.selectedPackages.map(p => ({
            name: p.name,
            area: p.area,
            duration: p.duration,
            places: p.places,
            experiences: p.experiences
        })),
        totalDays: window.totalDays,
        totalExperiences: window.selectedPackages.reduce((sum, pkg) => sum + pkg.experiences.length, 0),
        totalPlaces: window.selectedPackages.reduce((sum, pkg) => sum + pkg.places.length, 0)
    };

    try {
        const response = await fetch(`${API_BASE_URL}/api/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            showToast('Thank you! Your inquiry has been sent. We will contact you shortly.', 'success');
            localStorage.removeItem('selectedPackages');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        } else {
            throw new Error('Failed to send inquiry');
        }
    } catch (error) {
        console.error('Error:', error);
        showToast('Failed to send inquiry. Please try again or contact us via WhatsApp.', 'error');
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 2000;
        font-weight: 600;
        animation: slideIn 0.3s ease-out;
    `;
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}" style="margin-right: 0.8rem;"></i> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

function setupFormValidation() {
    const startDateInput = document.getElementById('startDate');
    if (startDateInput) {
        const today = new Date().toISOString().split('T')[0];
        startDateInput.setAttribute('min', today);
    }
}
