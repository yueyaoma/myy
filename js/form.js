// Contact form functionality

// DOM Elements
const contactForm = document.getElementById('contact-form');

// Initialize form
document.addEventListener('DOMContentLoaded', () => {
  initForm();
});

// Initialize form functionality
function initForm() {
  // Setup form validation and submission
  setupFormValidation();
}

// Setup form validation and submission
function setupFormValidation() {
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form fields
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const subjectField = document.getElementById('subject');
  const messageField = document.getElementById('message');
  
  // Validate form fields
  if (!validateForm(nameField, emailField, subjectField, messageField)) {
    return;
  }
  
  // Collect form data
  const formData = {
    name: nameField.value,
    email: emailField.value,
    subject: subjectField.value,
    message: messageField.value
  };
  
  // Process form submission (simulated)
  processFormSubmission(formData);
}

// Validate form fields
function validateForm(nameField, emailField, subjectField, messageField) {
  let isValid = true;
  
  // Remove any existing error messages
  removeErrorMessages();
  
  // Validate name (required, min length 2)
  if (!nameField.value || nameField.value.length < 2) {
    showError(nameField, '请输入有效的姓名');
    isValid = false;
  }
  
  // Validate email (required, valid format)
  if (!emailField.value || !isValidEmail(emailField.value)) {
    showError(emailField, '请输入有效的邮箱地址');
    isValid = false;
  }
  
  // Validate subject (required, min length 2)
  if (!subjectField.value || subjectField.value.length < 2) {
    showError(subjectField, '请输入主题');
    isValid = false;
  }
  
  // Validate message (required, min length 10)
  if (!messageField.value || messageField.value.length < 10) {
    showError(messageField, '请输入至少10个字符的消息');
    isValid = false;
  }
  
  return isValid;
}

// Show error message for a field
function showError(field, message) {
  // Create error message element
  const errorElement = document.createElement('div');
  errorElement.className = 'form-error';
  errorElement.textContent = message;
  errorElement.style.color = 'var(--error-color)';
  errorElement.style.fontSize = 'var(--font-size-sm)';
  errorElement.style.marginTop = '5px';
  
  // Add error class to field
  field.style.borderColor = 'var(--error-color)';
  
  // Insert error message after the field
  field.parentNode.appendChild(errorElement);
}

// Remove all error messages
function removeErrorMessages() {
  // Remove error messages
  const errorMessages = document.querySelectorAll('.form-error');
  errorMessages.forEach(error => error.remove());
  
  // Reset field styles
  const formFields = contactForm.querySelectorAll('input, textarea');
  formFields.forEach(field => {
    field.style.borderColor = '';
  });
}

// Check if email is valid
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Process form submission (simulated)
function processFormSubmission(formData) {
  // In a real application, this would send data to a server
  // For this static site, we'll simulate a successful submission
  
  // Show loading state
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  submitButton.textContent = '发送中...';
  submitButton.disabled = true;
  
  // Simulate server processing time
  setTimeout(() => {
    // Show success message
    showFormMessage('success', '消息已成功发送！我会尽快回复您。');
    
    // Reset the form
    contactForm.reset();
    
    // Reset button
    submitButton.textContent = originalButtonText;
    submitButton.disabled = false;
    
    // Clear success message after a delay
    setTimeout(() => {
      const successMessage = document.querySelector('.form-message');
      if (successMessage) {
        successMessage.remove();
      }
    }, 5000);
  }, 1500);
}

// Show form submission message
function showFormMessage(type, message) {
  // Remove any existing messages
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create message element
  const messageElement = document.createElement('div');
  messageElement.className = `form-message ${type}`;
  messageElement.textContent = message;
  
  // Style based on message type
  if (type === 'success') {
    messageElement.style.backgroundColor = 'rgba(0, 184, 148, 0.1)';
    messageElement.style.color = 'var(--success-color)';
    messageElement.style.border = '1px solid var(--success-color)';
  } else {
    messageElement.style.backgroundColor = 'rgba(214, 48, 49, 0.1)';
    messageElement.style.color = 'var(--error-color)';
    messageElement.style.border = '1px solid var(--error-color)';
  }
  
  // Additional styles
  messageElement.style.padding = 'var(--space-4)';
  messageElement.style.borderRadius = 'var(--border-radius)';
  messageElement.style.marginBottom = 'var(--space-4)';
  
  // Insert message before the form
  contactForm.parentNode.insertBefore(messageElement, contactForm);
}