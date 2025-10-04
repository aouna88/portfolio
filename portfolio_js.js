/* ============================================ */
/* PORTFOLIO JAVASCRIPT */
/* This file handles navigation, scroll effects, and animations */
/* ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Change icon
        const icon = this.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // ============================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ============================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll to section
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // ACTIVE NAVIGATION ON SCROLL
    // ============================================
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);

    // ============================================
    // SCROLL ANIMATION FOR ELEMENTS
    // ============================================
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-item, .education-item, .contact-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            // Check if element is in viewport
            if (elementTop < windowHeight - 100 && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize animation styles
    document.querySelectorAll('.skill-item, .education-item, .contact-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run on page load

    // ============================================
    // SKILL BAR ANIMATION ON SCROLL
    // ============================================
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (barTop < windowHeight - 100) {
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    }

    // Animate skill bars once when they come into view
    let skillsAnimated = false;
    window.addEventListener('scroll', function() {
        if (!skillsAnimated) {
            const skillsSection = document.getElementById('skills');
            const skillsTop = skillsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (skillsTop < windowHeight - 200) {
                animateSkillBars();
                skillsAnimated = true;
            }
        }
    });

    // ============================================
    // TYPING EFFECT FOR ROLE TEXT (OPTIONAL)
    // ============================================
    // Uncomment the code below if you want a typing animation effect
    
    /*
    const roleElement = document.querySelector('.role .highlight');
    const roles = ['Student & Tech Enthusiast', 'Quick Learner', 'Problem Solver']; // EDIT: Add your roles here
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeRole() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before next role
        }

        setTimeout(typeRole, typeSpeed);
    }

    // Start typing effect
    // typeRole();
    */

    // ============================================
    // SCROLL TO TOP BUTTON (OPTIONAL)
    // ============================================
    // Uncomment if you want to add a scroll-to-top button
    
    /*
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s;
    `;
    document.body.appendChild(scrollTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    */

    // ============================================
    // FORM SUBMISSION (If you add a contact form)
    // ============================================
    /*
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // EDIT: Add your form submission logic here
            // Example: Send to email service, API, etc.
            
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    */

    // ============================================
    // INITIALIZE ON PAGE LOAD
    // ============================================
    console.log('Portfolio loaded successfully!');
    
    // Set initial active nav
    updateActiveNav();
});

// ============================================
// ADDITIONAL UTILITY FUNCTIONS
// ============================================

// Function to add more social links dynamically (if needed)
function addSocialLink(platform, url, iconClass) {
    const socialLinks = document.querySelector('.social-links');
    const link = document.createElement('a');
    link.href = url;
    link.className = 'social-icon';
    link.target = '_blank';
    link.innerHTML = `<i class="${iconClass}"></i>`;
    socialLinks.appendChild(link);
}

// Function to add more skills dynamically (if needed)
function addSkill(skillName, percentage) {
    const skillsGrid = document.querySelector('.skills-grid');
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <div class="skill-header">
            <span class="skill-name">${skillName}</span>
            <span class="skill-percent">${percentage}%</span>
        </div>
        <div class="skill-bar">
            <div class="skill-progress" style="width: ${percentage}%"></div>
        </div>
    `;
    skillsGrid.appendChild(skillItem);
}

// Example usage (uncomment to use):
// addSocialLink('Instagram', 'https://instagram.com/yourprofile', 'fab fa-instagram');
// addSkill('Python Programming', 70);