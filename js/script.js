// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Set Current Year in Footer
       ========================================================================== */
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ==========================================================================
       Initialize AOS Animation
       ========================================================================== */
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 50
    });

    /* ==========================================================================
       Navbar Scroll Effect & Mobile Menu Logic
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Sticky Navbar Styling based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('scrolled', 'py-2');
            navbar.classList.add('py-4');
        }
    });

    // Toggle Mobile Menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }

    // Close Mobile Menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    /* ==========================================================================
       Typed.js Initialization
       ========================================================================== */
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Cloud Engineer.', 'Full Stack Developer.', 'UI/UX Enthusiast.', 'Problem Solver.', 'Web Developer.'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    /* ==========================================================================
       Dynamic Skills Generation
       ========================================================================== */
    const skills = [
        { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500', bg: 'hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500', bg: 'hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400', bg: 'hover:border-yellow-400/50 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)]' },
        { name: 'Tailwind CSS', icon: 'fab fa-css3', color: 'text-teal-400', bg: 'hover:border-teal-400/50 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)]' },
        { name: 'React', icon: 'fab fa-react', color: 'text-blue-400', bg: 'hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500', bg: 'hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]' },
        { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-600', bg: 'hover:border-green-600/50 hover:shadow-[0_0_15px_rgba(22,163,74,0.2)]' },
        { name: 'Python', icon: 'fab fa-python', color: 'text-blue-500', bg: 'hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
        { name: 'Django', icon: 'fas fa-code', color: 'text-green-700', bg: 'hover:border-green-700/50 hover:shadow-[0_0_15px_rgba(21,128,61,0.2)]' },
        { name: 'Java', icon: 'fab fa-java', color: 'text-red-500', bg: 'hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]' },
        { name: 'C / C++', icon: 'fas fa-terminal', color: 'text-blue-600', bg: 'hover:border-blue-600/50 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]' },
        { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600', bg: 'hover:border-orange-600/50 hover:shadow-[0_0_15px_rgba(234,88,12,0.2)]' },
        { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-500', bg: 'hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
        { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-400', bg: 'hover:border-orange-400/50 hover:shadow-[0_0_15px_rgba(251,146,60,0.2)]' },
        { name: 'Azure', icon: 'fab fa-microsoft', color: 'text-blue-500', bg: 'hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
        { name: 'Firebase', icon: 'fas fa-fire', color: 'text-yellow-500', bg: 'hover:border-yellow-500/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]' }
    ];

    const skillsContainer = document.getElementById('skills-container');

    if (skillsContainer) {
        skills.forEach((skill, index) => {
            const delay = (index % 5) * 100; // Stagger animation
            const skillHTML = `
                <div class="glass-card p-6 flex flex-col items-center justify-center gap-3 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/5 ${skill.bg}" data-aos="zoom-in" data-aos-delay="${delay}">
                    <i class="${skill.icon} text-4xl ${skill.color}"></i>
                    <h4 class="text-white font-medium text-sm">${skill.name}</h4>
                </div>
            `;
            skillsContainer.innerHTML += skillHTML;
        });
    }

    /* ==========================================================================
       Number Counter Animation for About Section
       ========================================================================== */
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;

    const runCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps

            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    };

    // Observer to trigger counter when visible
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
            runCounters();
            hasCounted = true;
        }
    }, { threshold: 0.5 });

    const aboutSection = document.getElementById('about');
    if (aboutSection && counters.length > 0) {
        observer.observe(aboutSection);
    }

    /* ==========================================================================
       Contact Form Validation
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Elements
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');
            const successMsg = document.getElementById('form-success');
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            let isValid = true;

            // Name validation
            if (!nameInput.value.trim()) {
                nameError.classList.remove('hidden');
                nameInput.classList.add('border-red-500');
                isValid = false;
            } else {
                nameError.classList.add('hidden');
                nameInput.classList.remove('border-red-500');
            }

            // Email validation (simple regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                emailError.classList.remove('hidden');
                emailInput.classList.add('border-red-500');
                isValid = false;
            } else {
                emailError.classList.add('hidden');
                emailInput.classList.remove('border-red-500');
            }

            // Message validation
            if (!messageInput.value.trim()) {
                messageError.classList.remove('hidden');
                messageInput.classList.add('border-red-500');
                isValid = false;
            } else {
                messageError.classList.add('hidden');
                messageInput.classList.remove('border-red-500');
            }

            // If valid, simulate pseudo-submission
            if (isValid) {
                // Change button state
                const originalBtnContent = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-70');

                // Simulate network delay
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();

                    // Show success
                    successMsg.classList.remove('hidden');

                    // Reset button
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-70');

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMsg.classList.add('hidden');
                    }, 5000);

                }, 1500);
            }
        });

        // Remove error states on input
        ['name', 'email', 'message'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', () => {
                    document.getElementById(`${id}-error`).classList.add('hidden');
                    el.classList.remove('border-red-500');
                });
            }
        });
    }
});
