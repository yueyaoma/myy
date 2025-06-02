// Main JavaScript functionality

// DOM Elements
const header = document.getElementById('header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const backToTop = document.getElementById('back-to-top');
const sections = document.querySelectorAll('section');
const skillCards = document.querySelectorAll('.skill-card');
const revealElements = document.querySelectorAll('.reveal');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// Initialize all functionality
function initApp() {
  // Setup event listeners
  setupEventListeners();
  
  // Initialize animations
  initScrollAnimations();
  
  // Set skill levels
  initSkillLevels();
  
  // Create placeholders
  createPlaceholderImages();
}

// Setup event listeners
function setupEventListeners() {
  // Header scroll effect
  window.addEventListener('scroll', () => {
    handleScroll();
    highlightActiveSection();
  });
  
  // Menu toggle
  menuToggle.addEventListener('click', toggleMenu);
  
  // Navigation item clicks
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // If on mobile, close the menu
      if (window.innerWidth < 992) {
        toggleMenu();
      }
    });
  });
  
  // Back to top button
  backToTop.addEventListener('click', scrollToTop);
  
  // Window resize event
  window.addEventListener('resize', handleResize);
}

// Handle scroll events
function handleScroll() {
  // Header scroll effect
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    header.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
  
  // Animate elements when they come into view
  animateOnScroll();
}

// Toggle mobile menu
function toggleMenu() {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('menu-open');
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Handle window resize
function handleResize() {
  // Close mobile menu if screen width > 992px
  if (window.innerWidth >= 992 && navLinks.classList.contains('active')) {
    toggleMenu();
  }
}

// Highlight active section in navigation
function highlightActiveSection() {
  let scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${sectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Initialize scroll animations
function initScrollAnimations() {
  // Check for elements in view on page load
  animateOnScroll();
}

// Animate elements when they come into view
function animateOnScroll() {
  // Reveal elements
  revealElements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('active');
    }
  });
  
  // Animate skill progress bars
  skillCards.forEach(card => {
    if (isInViewport(card)) {
      card.classList.add('in-view');
      const progressBar = card.querySelector('.progress');
      const level = progressBar.getAttribute('data-level');
      progressBar.style.setProperty('--level', level);
    }
  });
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
}

// Set skill levels with animation
function initSkillLevels() {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.setProperty('--level', level);
  });
}

// Create placeholder images
function createPlaceholderImages() {
  // Set profile image
  const profileImg = document.getElementById('profile-img');
  if (profileImg) {
    profileImg.src = 'images/profile/profile.jpg';
  }
  
  // Update hero background
  document.querySelector('.hero').style.backgroundImage = 'linear-gradient(to right, rgba(108, 92, 231, 0.8), rgba(253, 121, 168, 0.8)), url("images/hero/hero-bg.jpg")';
}