// ============================================
// API CONFIGURATION
// ============================================

const API_BASE_URL = 'http://localhost:5000'; // Update to Railway URL after deployment

// ============================================
// GALLERY CHRONICLES STATE & DATA
// ============================================

const defaultGalleryItems = [
    {
        id: 'g1',
        title: 'Dawn at the Sky Fortress',
        description: 'The ancient rock monolith of Sigiriya rising through the morning fog, framed by a sea of primeval emerald jungle.',
        category: 'Scenic Landscapes',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863961/WhatsApp_Image_2026-05-24_at_20.43.30_gx3lhm.jpg',
        date: '2026-05-15'
    },
    {
        id: 'g2',
        title: 'The Sovereign of Yala',
        description: 'A young wild Sri Lankan leopard sitting silently upon a sun-bleached granite boulder, scanning the dry plains.',
        category: 'Wildlife',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863961/WhatsApp_Image_2026-05-24_at_20.44.18_w2r9fl.jpg',
        date: '2026-05-12'
    },
    {
        id: 'g3',
        title: 'Vanguard of the Southern Reefs',
        description: 'Traditional Sri Lankan stilt fishermen perched precariously on poles above crashing ocean waves during a fiery, copper sunset.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863961/WhatsApp_Image_2026-05-24_at_20.43.59_hroxnh.jpg',
        date: '2026-05-10'
    },
    {
        id: 'g4',
        title: 'Highlands Railway Odyssey',
        description: 'The striking iconic blue train winding through mist-cloaked tea hills and crossing the historic masonry Nine Arch Bridge in Ella.',
        category: 'Scenic Landscapes',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863962/WhatsApp_Image_2026-05-24_at_19.28.00_1_l7bziq.jpg',
        date: '2026-05-08'
    },
    {
        id: 'g5',
        title: 'Symphony of the Indian Ocean',
        description: 'A cluster of tall coconut palms arching out over the warm turquoise shores and golden sands of Mirissa beach.',
        category: 'Beaches',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863962/WhatsApp_Image_2026-05-24_at_20.57.07_huesqg.jpg',
        date: '2026-05-05'
    },
    {
        id: 'g6',
        title: 'Novices of the Golden Shrine',
        description: 'Young Buddhist monks in saffron robes standing beneath the woodcarvings and brass lamps of the Temple of the Tooth Relic in Kandy.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863962/WhatsApp_Image_2026-05-24_at_21.00.45_wyz8t5.jpg',
        date: '2026-05-02'
    },
    {
        id: 'g7',
        title: 'Emerald Tea Valleys',
        description: 'Endless rolling hills covered in lush green tea plantations, with misty morning light casting ethereal shadows across the terrain.',
        category: 'Scenic Landscapes',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863962/WhatsApp_Image_2026-05-24_at_20.44.44_uqk3fe.jpg',
        date: '2026-04-28'
    },
    {
        id: 'g8',
        title: 'Sacred Temple at Twilight',
        description: 'An ancient Buddhist temple stands peacefully as golden sunset rays illuminate its sacred spires and ornate architecture.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863962/WhatsApp_Image_2026-05-24_at_20.43.10_kzn5c4.jpg',
        date: '2026-04-25'
    },
    {
        id: 'g9',
        title: 'Tropical Paradise Shore',
        description: 'Crystal clear turquoise waters meet pristine sandy beaches lined with swaying palm trees and colorful beach umbrellas.',
        category: 'Beaches',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863963/WhatsApp_Image_2026-05-24_at_20.45.57_j640v9.jpg',
        date: '2026-04-22'
    },
    {
        id: 'g10',
        title: 'Majestic Elephant in the Wild',
        description: 'A powerful Asian elephant moves gracefully through the natural habitat, showcasing the grandeur of Sri Lankan wildlife.',
        category: 'Wildlife',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863963/WhatsApp_Image_2026-05-24_at_20.45.28_auirjy.jpg',
        date: '2026-04-20'
    },
    {
        id: 'g11',
        title: 'Waterfall in the Rainforest',
        description: 'A cascading waterfall tumbles through lush tropical vegetation, creating a serene and misty sanctuary deep in the jungle.',
        category: 'Scenic Landscapes',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863963/WhatsApp_Image_2026-05-24_at_20.45.02_bdbhgn.jpg',
        date: '2026-04-18'
    },
    {
        id: 'g12',
        title: 'Sunrise Over the Hills',
        description: 'The sun breaks over misty mountain peaks, casting warm golden hues across the valleys and awakening the landscape.',
        category: 'Scenic Landscapes',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863963/WhatsApp_Image_2026-05-24_at_19.28.00_2_wrzbbn.jpg',
        date: '2026-04-15'
    },
    {
        id: 'g13',
        title: 'Coral Reef Underwater Paradise',
        description: 'Vibrant coral formations and tropical fish create a breathtaking underwater ecosystem teeming with colorful marine life.',
        category: 'Beaches',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863963/WhatsApp_Image_2026-05-24_at_20.46.18_gt2vd9.jpg',
        date: '2026-04-12'
    },
    {
        id: 'g14',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863963/WhatsApp_Image_2026-05-24_at_20.47.22_bo39tb.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g15',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863963/WhatsApp_Image_2026-05-24_at_20.47.58_itxdrf.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g16',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863964/WhatsApp_Image_2026-05-24_at_20.49.28_c02axn.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g17',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863964/WhatsApp_Image_2026-05-24_at_20.51.17_judslq.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g18',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://picsum.photos/400/600?random=14https://res.cloudinary.com/dqobayu5s/image/upload/v1779863964/WhatsApp_Image_2026-05-24_at_19.28.00_3_nrz5mr.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g19',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863964/WhatsApp_Image_2026-05-24_at_20.52.03_yrizeb.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g20',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863964/WhatsApp_Image_2026-05-24_at_20.52.21_iuk5pi.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g21',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863964/WhatsApp_Image_2026-05-24_at_20.53.07_oz6wml.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g22',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863964/WhatsApp_Image_2026-05-24_at_20.53.35_fvqxwr.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g23',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863965/WhatsApp_Image_2026-05-24_at_20.52.44_lzpadu.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g24',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863964/WhatsApp_Image_2026-05-24_at_20.51.49_cxvjbe.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g25',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863965/WhatsApp_Image_2026-05-24_at_20.54.03_yc2ujx.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g26',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863965/WhatsApp_Image_2026-05-24_at_20.55.32_gmpjoe.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g27',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863965/WhatsApp_Image_2026-05-24_at_20.55.14_hqhk1a.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g28',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863965/WhatsApp_Image_2026-05-24_at_20.56.38_aau6pt.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g29',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863970/WhatsApp_Image_2026-05-24_at_19.28.00_th6fzt.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g30',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863980/WhatsApp_Image_2026-05-24_at_19.28.01_1_bhiwnv.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g31',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779863990/WhatsApp_Image_2026-05-24_at_19.28.01_ojz3q8.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g32',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779864000/WhatsApp_Image_2026-05-24_at_20.39.59_n5zfcq.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g33',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779864007/WhatsApp_Image_2026-05-24_at_20.40.36_w51jjn.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g34',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779864007/WhatsApp_Image_2026-05-24_at_20.40.58_hchfcf.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g35',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779864008/WhatsApp_Image_2026-05-24_at_20.42.31_jjhidr.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g36',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779864008/WhatsApp_Image_2026-05-24_at_20.41.14_adxlvn.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g37',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779864008/WhatsApp_Image_2026-05-24_at_20.41.52_w2yxi7.jpg',
        date: '2026-04-10'
    },
    {
        id: 'g38',
        title: 'Village Life and Culture',
        description: 'Local villagers go about their daily life, offering an authentic glimpse into traditional Sri Lankan village culture and customs.',
        category: 'Culture & Temples',
        image: 'https://res.cloudinary.com/dqobayu5s/image/upload/v1779865272/WhatsApp_Image_2026-05-25_at_17.13.02_mhyc4j.jpg',
        date: '2026-04-10'
    },
    
];

let galleryItems = [];
let activeCategory = 'All';
let activeSearchQuery = '';
let selectedFileBase64 = '';
let isAdmin = localStorage.getItem('isCanaryAdmin') === 'true';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadGalleryData();
    setupFilters();
    setupSearch();
    setupDropzone();
    setupLightbox();
    setupMobileMenu();
    updateAdminUI();
});

// ============================================
// CORE DATA LOAD & RENDER
// ============================================

async function loadGalleryData() {
    try {
        // Try fetching from Express Backend
        const response = await fetch(`${API_BASE_URL}/api/gallery`);
        if (response.ok) {
            const serverItems = await response.json();
            galleryItems = [...serverItems, ...defaultGalleryItems];
        } else {
            throw new Error('Server not available');
        }
    } catch (e) {
        // Fallback: Read custom items from LocalStorage and append defaults
        const localItems = JSON.parse(localStorage.getItem('customUploadedPhotos')) || [];
        galleryItems = [...localItems, ...defaultGalleryItems];
        console.log('Backend not connected. Loaded from LocalStorage: ', localItems.length, 'custom items.');
    }
    
    renderGallery();
}

function renderGallery() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    
    // Apply filters
    const filtered = galleryItems.filter(item => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = activeSearchQuery === '' || 
            item.title.toLowerCase().includes(activeSearchQuery) || 
            item.description.toLowerCase().includes(activeSearchQuery);
        return matchesCategory && matchesSearch;
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-camera-retro"></i>
                <h3>No Chronicles Found</h3>
                <p>Try resetting your filters or search keywords to view the portfolio.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filtered.map(item => {
        return `
            <div class="portfolio-card reveal" data-id="${item.id}" style="position: relative;">
                <div class="portfolio-img-wrapper" onclick="openLightbox('${item.id}')">
                    <img src="${item.image}" alt="${item.title}" class="portfolio-img" loading="lazy">
                </div>
                ${isAdmin ? `
                    <button class="delete-btn" onclick="deletePhoto('${item.id}')" title="Delete Photograph" style="position: absolute; top: 0.5rem; right: 0.5rem; z-index: 10;">
                        <i class="fas fa-trash-can"></i>
                    </button>
                ` : ''}
            </div>
        `;
    }).join('');
    
    // Activate reveal animation for all cards
    setTimeout(() => {
        document.querySelectorAll('.portfolio-card.reveal').forEach(card => {
            card.classList.add('active');
        });
    }, 50);
}

// ============================================
// FILTER & SEARCH LOGIC
// ============================================

function setupFilters() {
    const chipsContainer = document.getElementById('filterChips');
    if (!chipsContainer) return;
    
    chipsContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;
        
        // Toggle active style
        chipsContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        
        activeCategory = chip.getAttribute('data-category');
        renderGallery();
    });
}

function setupSearch() {
    const searchInput = document.getElementById('gallerySearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        activeSearchQuery = e.target.value.toLowerCase().trim();
        renderGallery();
    });
}

// ============================================
// UPLOAD MODAL & FILE HANDLING
// ============================================

function openUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) modal.style.display = 'block';
}

function closeUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.style.display = 'none';
        resetUploadForm();
    }
}

function setupDropzone() {
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('photoFile');
    if (!dropzone || !fileInput) return;
    
    // Prevent defaults
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
        }, false);
    });
    
    // Visual indicators
    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
            dropzone.classList.add('dragover');
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
            dropzone.classList.remove('dragover');
        }, false);
    });
    
    // Handle dropped files
    dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 0) {
            fileInput.files = files;
            processSelectedFile(files[0]);
        }
    });
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        processSelectedFile(file);
    }
}

function processSelectedFile(file) {
    if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file.', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        selectedFileBase64 = e.target.result;
        
        // Show in UI
        const previewImg = document.getElementById('previewImg');
        const dropzone = document.getElementById('dropzone');
        previewImg.src = selectedFileBase64;
        dropzone.classList.add('has-image');
    };
    reader.readAsDataURL(file);
}

function removeSelectedFile(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const fileInput = document.getElementById('photoFile');
    if (fileInput) fileInput.value = '';
    
    selectedFileBase64 = '';
    
    const previewImg = document.getElementById('previewImg');
    const dropzone = document.getElementById('dropzone');
    previewImg.src = '';
    dropzone.classList.remove('has-image');
}

function resetUploadForm() {
    document.getElementById('uploadPhotoForm').reset();
    selectedFileBase64 = '';
    const previewImg = document.getElementById('previewImg');
    const dropzone = document.getElementById('dropzone');
    if (previewImg) previewImg.src = '';
    if (dropzone) dropzone.classList.remove('has-image');
}

// ============================================
// UPLOAD / PUBLISH PHOTO
// ============================================

async function uploadPhoto(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('uploadSubmitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publishing...';
    submitBtn.disabled = true;
    
    const title = document.getElementById('photoTitle').value.trim();
    const category = document.getElementById('photoCategory').value;
    const description = document.getElementById('photoDesc').value.trim();
    const fileInput = document.getElementById('photoFile');
    
    if (!selectedFileBase64) {
        showToast('Please select or drag an image first.', 'error');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
    }
    
    const newId = 'c_' + Date.now();
    const today = new Date().toISOString().split('T')[0];
    
    const newPhotoObject = {
        id: newId,
        title: title,
        description: description,
        category: category,
        image: selectedFileBase64,
        date: today
    };
    
    let uploadedSuccessfully = false;
    
    try {
        // Try uploading to server
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('photo', fileInput.files[0]);
        
        const response = await fetch(`${API_BASE_URL}/api/gallery/upload`, {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            const result = await response.json();
            // Server responds with { success: true, photo: newPhoto }
            newPhotoObject.image = result.photo.image;
            newPhotoObject.id = result.photo.id;
            uploadedSuccessfully = true;
        } else {
            throw new Error('Upload failed on server');
        }
    } catch (err) {
        // Fallback: Save local Base64 item in LocalStorage
        const localItems = JSON.parse(localStorage.getItem('customUploadedPhotos')) || [];
        localItems.unshift(newPhotoObject);
        localStorage.setItem('customUploadedPhotos', JSON.stringify(localItems));
        uploadedSuccessfully = true;
    }
    
    if (uploadedSuccessfully) {
        showToast('Photograph published to the chronicles!', 'success');
        closeUploadModal();
        loadGalleryData(); // Reload and re-render
    } else {
        showToast('Failed to upload image. Please try again.', 'error');
    }
    
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
}

// ============================================
// DELETE PHOTO
// ============================================

async function deletePhoto(id) {
    if (!confirm('Are you sure you want to delete this photograph from your portfolio?')) return;
    
    let deletedSuccessfully = false;
    
    try {
        // Try deleting from backend
        const response = await fetch(`${API_BASE_URL}/api/gallery/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            deletedSuccessfully = true;
        } else {
            throw new Error('Delete failed on server');
        }
    } catch (err) {
        // Fallback: Delete from localstorage
        const localItems = JSON.parse(localStorage.getItem('customUploadedPhotos')) || [];
        const index = localItems.findIndex(p => p.id === id);
        if (index > -1) {
            localItems.splice(index, 1);
            localStorage.setItem('customUploadedPhotos', JSON.stringify(localItems));
            deletedSuccessfully = true;
        }
    }
    
    if (deletedSuccessfully) {
        showToast('Photograph removed from the chronicles.', 'success');
        loadGalleryData(); // Reload and re-render
    } else {
        showToast('Failed to delete image.', 'error');
    }
}

// ============================================
// THEATER MODE LIGHTBOX LOGIC
// ============================================

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.close-lightbox');
    if (!lightbox || !closeBtn) return;
    
    closeBtn.onclick = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        const uploadModal = document.getElementById('uploadModal');
        if (e.target === uploadModal) {
            closeUploadModal();
        }
        
        const adminModal = document.getElementById('adminAuthModal');
        if (e.target === adminModal) {
            closeAdminAuthModal();
        }
    });
}

function openLightbox(id) {
    const item = galleryItems.find(p => p.id === id);
    if (!item) return;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    if (!lightbox || !lightboxImg) return;
    
    lightbox.style.display = 'block';
    lightboxImg.src = item.image;
    
    document.body.style.overflow = 'hidden'; // Lock scrolling
}

// ============================================
// MOBILE NAVIGATION MENU LOGIC
// ============================================

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.onclick = () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        };
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.onclick = () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            };
        });
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : 'toast-error'}`;
    toast.style.cssText = `
        background: ${type === 'success' ? '#0f172a' : '#ef4444'};
        color: var(--white);
        padding: 1rem 1.5rem;
        border-radius: var(--radius-sm);
        margin-bottom: 0.8rem;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-weight: 500;
        font-size: 0.95rem;
        border-left: 4px solid ${type === 'success' ? 'var(--secondary)' : '#fca5a5'};
        animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: auto;
    `;
    
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
    const iconColor = type === 'success' ? 'var(--secondary)' : '#fca5a5';
    
    toast.innerHTML = `
        <i class="fas ${icon}" style="color: ${iconColor}; font-size: 1.1rem;"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ============================================
// PHOTOGRAPHER ACCESS PORTAL
// ============================================

function toggleAdminPortal() {
    if (isAdmin) {
        // Logout
        if (confirm('Log out from Photographer Mode?')) {
            isAdmin = false;
            localStorage.setItem('isCanaryAdmin', 'false');
            updateAdminUI();
            renderGallery();
            showToast('Logged out of Photographer Mode.', 'success');
        }
    } else {
        // Show login modal
        openAdminAuthModal();
    }
}

function openAdminAuthModal() {
    const modal = document.getElementById('adminAuthModal');
    if (modal) {
        modal.style.display = 'block';
        document.getElementById('adminPassCode').focus();
    }
}

function closeAdminAuthModal() {
    const modal = document.getElementById('adminAuthModal');
    if (modal) {
        modal.style.display = 'none';
        document.getElementById('adminAuthForm').reset();
    }
}

function verifyAdminPass(e) {
    e.preventDefault();
    const passwordField = document.getElementById('adminPassCode');
    const password = passwordField.value;
    
    // Accept "canaryadmin" or "photographer" as secure passcode entries
    if (password === 'canaryadmin' || password === 'photographer') {
        isAdmin = true;
        localStorage.setItem('isCanaryAdmin', 'true');
        closeAdminAuthModal();
        updateAdminUI();
        renderGallery();
        showToast('Photographer Mode unlocked successfully!', 'success');
    } else {
        showToast('Invalid access code. Please try again.', 'error');
        passwordField.value = '';
        passwordField.focus();
    }
}

function updateAdminUI() {
    const uploadBtn = document.getElementById('uploadTriggerBtn');
    const lockIcon = document.getElementById('adminPortalIcon');
    const lockLink = document.getElementById('adminPortalLink');
    
    if (isAdmin) {
        if (uploadBtn) uploadBtn.style.display = 'flex';
        if (lockIcon) {
            lockIcon.className = 'fas fa-lock-open';
            lockIcon.style.color = 'var(--secondary)';
        }
        if (lockLink) {
            lockLink.style.opacity = '1';
            lockLink.title = 'Photographer Mode Active - Click to Lock';
        }
    } else {
        if (uploadBtn) uploadBtn.style.display = 'none';
        if (lockIcon) {
            lockIcon.className = 'fas fa-lock';
            lockIcon.style.color = 'inherit';
        }
        if (lockLink) {
            lockLink.style.opacity = '0.35';
            lockLink.title = 'Unlock Photographer Mode';
        }
    }
}

