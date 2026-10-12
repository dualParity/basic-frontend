// Basic Frontend Starter - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    console.log('Frontend Starter initialized');
}

function setupEventListeners() {
    // CTA Button
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', handleCTAClick);
    });

    // Contact Form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Navbar smooth scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function handleCTAClick(e) {
    const button = e.target;
    const text = button.textContent;
    console.log(`Button clicked: ${text}`);
    
    // Add visual feedback
    button.style.opacity = '0.8';
    setTimeout(() => {
        button.style.opacity = '1';
    }, 100);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Get form values
    const inputs = form.querySelectorAll('input, textarea');
    const data = {};
    inputs.forEach(input => {
        data[input.placeholder] = input.value;
    });
    
    console.log('Form submitted with data:', data);
    
    // Show success message
    showNotification('Message sent successfully!', 'success');
    
    // Reset form
    form.reset();
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Utility function to log app state
function logAppState() {
    console.log('App State:', {
        title: document.title,
        url: window.location.href,
        timestamp: new Date().toLocaleString()
    });
}

// Log app state on page load
window.addEventListener('load', logAppState);
