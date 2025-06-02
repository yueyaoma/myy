// Animation functionality

// DOM Elements
const skillCards = document.querySelectorAll('.skill-card');
const hobbyCards = document.querySelectorAll('.hobby-card');
const sectionHeaders = document.querySelectorAll('.section-header');

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
});

// Initialize animations
function initAnimations() {
  // Add reveal classes to elements
  addRevealClasses();
  
  // Trigger initial animations for visible elements
  animateVisibleElements();
  
  // Setup scroll animations
  window.addEventListener('scroll', () => {
    animateVisibleElements();
  });
}

// Add reveal classes to elements
function addRevealClasses() {
  // Add reveal classes to skill cards
  skillCards.forEach((card, index) => {
    card.classList.add('reveal', 'reveal-up');
    card.style.transitionDelay = `${index * 0.1}s`;
  });
  
  // Add reveal classes to hobby cards
  hobbyCards.forEach((card, index) => {
    card.classList.add('reveal', 'reveal-up');
    card.style.transitionDelay = `${index * 0.1}s`;
  });
  
  // Add reveal classes to section headers
  sectionHeaders.forEach((header) => {
    header.classList.add('reveal', 'reveal-down');
  });
  
  // Add reveal classes to about content
  const aboutImage = document.querySelector('.about-image');
  const aboutText = document.querySelector('.about-text');
  
  if (aboutImage) {
    aboutImage.classList.add('reveal', 'reveal-left');
  }
  
  if (aboutText) {
    aboutText.classList.add('reveal', 'reveal-right');
  }
  
  // Add reveal classes to contact content
  const contactInfo = document.querySelector('.contact-info');
  const contactForm = document.querySelector('.contact-form');
  
  if (contactInfo) {
    contactInfo.classList.add('reveal', 'reveal-left');
  }
  
  if (contactForm) {
    contactForm.classList.add('reveal', 'reveal-right');
  }
}

// Animate elements when they become visible
function animateVisibleElements() {
  const revealElements = document.querySelectorAll('.reveal');
  
  revealElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    }
  });
}

// Check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Element is considered in viewport if its top is within the bottom 80% of the screen
  // or if its bottom is in the top 20% of the screen
  return (
    rect.top <= windowHeight * 0.8 &&
    rect.bottom >= windowHeight * 0.2
  );
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrollPosition = window.pageYOffset;
  
  if (hero) {
    // Move the background image at a slower rate than the scroll
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  }
});

// Animate skill bars when in view
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-level .progress');
  
  skillBars.forEach((bar) => {
    const level = bar.getAttribute('data-level');
    const card = bar.closest('.skill-card');
    
    if (isElementInViewport(card)) {
      bar.style.width = level;
    }
  });
}

// Call the skill bar animation on scroll
window.addEventListener('scroll', animateSkillBars);