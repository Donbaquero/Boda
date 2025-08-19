// Variables globales
let isPlaying = false;
let countdownInterval;

// Función principal que se ejecuta cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeInvitation();
    initializeAudio();
    initializeCountdown();
    initializeSmoothScrolling();
    initializeScrollAnimations();
});

// Inicializar la carta de invitación
function initializeInvitation() {
    const invitationCover = document.getElementById('invitation-cover');
    const openInvitationBtn = document.getElementById('open-invitation-btn');
    const mainContent = document.getElementById('main-content');

    openInvitationBtn.addEventListener('click', function() {
        // Ocultar la carta de invitación con animación
        invitationCover.classList.add('hidden');
        
        // Mostrar el contenido principal
        setTimeout(() => {
            mainContent.classList.add('visible');
            // Reproducir música automáticamente después de abrir la invitación
            playMusic();
        }, 800);
    });
}

// Inicializar el reproductor de audio
function initializeAudio() {
    const audio = document.getElementById('background-music');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = playPauseBtn.querySelector('i');

    // Función para reproducir música
    window.playMusic = function() {
        if (audio && !isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                playIcon.className = 'fas fa-pause';
            }).catch(error => {
                console.log('Auto-play prevented:', error);
                // Si el auto-play falla, mostrar mensaje al usuario
                showPlayMessage();
            });
        }
    };

    // Botón de play/pause
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

    // Actualizar estado del botón cuando el audio termina
    audio.addEventListener('ended', function() {
        isPlaying = false;
        playIcon.className = 'fas fa-play';
    });

    // Manejar errores de audio
    audio.addEventListener('error', function() {
        console.error('Error loading audio file');
        showPlayMessage();
    });
}

// Mostrar mensaje para reproducir música manualmente
function showPlayMessage() {
    const audioPlayer = document.querySelector('.audio-player');
    if (audioPlayer) {
        const message = document.createElement('div');
        message.className = 'audio-message';
        message.innerHTML = '<i class="fas fa-music"></i> Haz clic para reproducir música';
        message.style.cssText = `
            position: absolute;
            top: 50px;
            right: 0;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            white-space: nowrap;
            z-index: 1001;
        `;
        audioPlayer.appendChild(message);
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }
}

// Inicializar el cronómetro
function initializeCountdown() {
    // Función para actualizar el cronómetro
    function updateCountdown() {
        // Fecha de la boda: 15 de Noviembre, 2025 a las 2:00 PM
        const weddingDate = new Date('November 15, 2025 14:00:00').getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Calcular unidades de tiempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizar elementos del DOM
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');

        // Verificar si el cronómetro ha terminado
        if (distance < 0) {
            clearInterval(countdownInterval);
            const countdownSection = document.getElementById('countdown');
            if (countdownSection) {
                countdownSection.innerHTML = `
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
    }

    // Actualizar cronómetro cada segundo
    updateCountdown(); // Ejecutar inmediatamente
    countdownInterval = setInterval(updateCountdown, 1000);
}

// Inicializar navegación suave
function initializeSmoothScrolling() {
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
}

// Inicializar animaciones de scroll
function initializeScrollAnimations() {
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

    // Agregar event listener para scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Ejecutar una vez al cargar
    revealOnScroll();
}

// Efecto parallax para la sección hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Agregar CSS para animaciones
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

// Agregar estado de carga
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Agregar CSS para estado de carga
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle); 