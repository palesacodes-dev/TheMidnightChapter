document.addEventListener('DOMContentLoaded', () => {
  // --- 1. SEARCH FILTER ---
  const searchInput = document.getElementById('searchInput');
  
  if (searchInput) {
    searchInput.addEventListener('keyup', function() {
      let filter = this.value.toLowerCase().trim();
      let cards = document.querySelectorAll('.card');
      
      cards.forEach(card => {
        let text = card.textContent.toLowerCase();
        let keywords = card.getAttribute('data-keywords') ? card.getAttribute('data-keywords').toLowerCase() : '';
        
        // Matches normal text OR custom data-keywords
        if (text.includes(filter) || keywords.includes(filter)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });

      // Hide section titles if all cards in that section are hidden
      let sections = document.querySelectorAll('section.grid');
      sections.forEach(section => {
        let visibleCards = section.querySelectorAll('.card:not([style*="display: none"])');
        let precedingTitle = section.previousElementSibling;
        
        if (visibleCards.length === 0 && filter !== "") {
          section.style.display = "none";
          if (precedingTitle && precedingTitle.classList.contains('section-title')) {
            precedingTitle.style.display = "none";
          }
        } else {
          section.style.display = "";
          if (precedingTitle && precedingTitle.classList.contains('section-title')) {
            precedingTitle.style.display = "";
          }
        }
      });
    });
  }

      // Hide section titles if all cards in that section are hidden
      let sections = document.querySelectorAll('section.grid');
      sections.forEach(section => {
        let visibleCards = section.querySelectorAll('.card:not([style*="display: none"])');
        let precedingTitle = section.previousElementSibling;
        
        if (visibleCards.length === 0 && filter !== "") {
          section.style.display = "none";
          if (precedingTitle && precedingTitle.classList.contains('section-title')) {
            precedingTitle.style.display = "none";
          }
        } else {
          section.style.display = "";
          if (precedingTitle && precedingTitle.classList.contains('section-title')) {
            precedingTitle.style.display = "";
          }
        }
      });
    });

  // --- 2. LIGHTBOX GALLERY ---
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const images = document.querySelectorAll('.card img'); // Targets the images inside your menu cards

  if (modal && modalImg) {
    images.forEach(img => {
      img.style.cursor = "pointer";
      
      img.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
      });
    });

    // Hide modal when clicked anywhere on the dark background
    modal.addEventListener('click', function() {
      modal.style.display = "none";
    });
  }
// --- FORM VALIDATION FOR ENQUIRY FORM ---
const enquiryForm = document.getElementById('enquiryForm');

if (enquiryForm) {
  enquiryForm.addEventListener('submit', function (e) {
    let isValid = true;

    // Grab elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset previous error indicators
    [nameInput, emailInput, messageInput].forEach(input => {
      if (input) input.classList.remove('input-error');
    });
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (messageError) messageError.textContent = '';

    // 1. Validate Full Name
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your full name.';
      nameInput.classList.add('input-error');
      isValid = false;
    }

    // 2. Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Please enter your email address.';
      emailInput.classList.add('input-error');
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.classList.add('input-error');
      isValid = false;
    }

    // 3. Validate Message
    if (!messageInput.value.trim()) {
      messageError.textContent = 'Please enter your message or booking details.';
      messageInput.classList.add('input-error');
      isValid = false;
    }

    // Stop form submission if any field is invalid
    if (!isValid) {
      e.preventDefault();
    }
  });
}
// --- MOBILE NAVIGATION TOGGLE ---
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open');
    });
}
// --- ACTIVE NAV LINK HIGHLIGHTING ---
const navLinks = document.querySelectorAll('nav ul li a');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.style.fontWeight = 'bold';
        link.style.color = '#b5838d';
    }
});