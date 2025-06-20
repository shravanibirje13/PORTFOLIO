        // Navigation functionality
        function showSection(sectionName) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            const targetSection = document.getElementById(sectionName);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Update active nav link
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked nav item
            if (event && event.target) {
                event.target.classList.add('active');
            } else {
                // If called programmatically, find the corresponding nav link
                const navLink = document.querySelector(`.nav-links a[onclick="showSection('${sectionName}')"]`);
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Set home as active by default
            document.querySelector('.nav-links a[onclick="showSection(\'home\')"]').classList.add('active');
        });

        // Smooth scrolling for better UX
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });