// Audio Player Functionality
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = playPauseBtn.querySelector('i');
    
    let isPlaying = false;
    
    // Auto-play music when page loads (with user interaction)
    document.addEventListener('click', function() {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                playIcon.className = 'fas fa-pause';
            }).catch(error => {
                console.log('Auto-play prevented:', error);
            });
        }
    }, { once: true });
    
    // Play/Pause button functionality
    playPauseBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (isPlaying) {
            audio.pause();
            playIcon.className = 'fas fa-play';
            isPlaying = false;
        } else {
            audio.play();
            playIcon.className = 'fas fa-pause';
            isPlaying = true;
        }
    });
    
    // Update button state when audio ends
    audio.addEventListener('ended', function() {
        isPlaying = false;
        playIcon.className = 'fas fa-play';
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Countdown Timer
function updateCountdown() {
    // Set the wedding date (December 15, 2024 at 2:00 PM)
    const weddingDate = new Date('December 15, 2024 14:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update DOM elements
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // Check if countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = `
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h2 class="section-title">¡El Gran Día Ha Llegado!</h2>
                        <p class="fs-4 text-primary">¡Bienvenidos a nuestra boda!</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize countdown on page load
updateCountdown();

// Smooth reveal animations on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.detail-item, .couple-photo, .map-container');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', revealOnScroll);

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate__animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    
    .animate__fadeInUp {
        animation-name: fadeInUp;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .loading-spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
    }
`;
document.head.appendChild(loadingStyle);

// Add loading spinner
const spinner = document.createElement('div');
spinner.className = 'loading-spinner';
spinner.innerHTML = `
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
    </div>
`;
document.body.appendChild(spinner);

// Remove spinner when page is loaded
window.addEventListener('load', function() {
    setTimeout(() => {
        spinner.remove();
    }, 500);
}); 