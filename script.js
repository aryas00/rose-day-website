// Rose Day Website - Interactive JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all interactive features
    initCustomCursor();
    initParticles();
    initThemeToggle();
    initMusicToggle();
    initMagicRose();
    initTypewriter();
    initGallery();
    initGiftBox();
    initDraggables();
    initLoveLetter();
    initShareButtons();
    initScrollAnimations();
});

// Custom Cursor
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorHeart = document.querySelector('.cursor-heart');

    if (!cursor || !cursorHeart) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursorHeart.style.left = e.clientX + 15 + 'px';
        cursorHeart.style.top = e.clientY + 15 + 'px';
    });

    document.querySelectorAll('button, a, .clickable').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'rgba(220, 20, 60, 0.3)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}

// Floating Particles (Roses, Hearts, Petals)
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const particles = ['🌹', '💕', '🌸', '❤️', '💗', '✨', '💮'];

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        container.appendChild(particle);

        setTimeout(() => particle.remove(), 10000);
    }

    setInterval(createParticle, 800);
    for (let i = 0; i < 10; i++) {
        setTimeout(createParticle, i * 200);
    }
}

// Theme Toggle (Light/Dark)
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    if (localStorage.getItem('roseTheme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('roseTheme',
            document.body.classList.contains('dark-theme') ? 'dark' : 'light'
        );
    });
}

// Music Toggle
function initMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    if (!musicToggle || !bgMusic) return;

    bgMusic.volume = 0.3;

    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.classList.add('playing');
        } else {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        }
    });
}

// Magic Rose Click Effect
function initMagicRose() {
    const singleRose = document.getElementById('singleRose');
    const bouquetReveal = document.getElementById('bouquetReveal');
    const sparklesContainer = document.getElementById('sparkles');

    if (!singleRose || !bouquetReveal) return;

    singleRose.addEventListener('click', () => {
        singleRose.style.display = 'none';
        bouquetReveal.classList.add('active');
        createSparkles(sparklesContainer);
        createHeartBurst();
    });
}

function createSparkles(container) {
    if (!container) return;
    const sparkleEmojis = ['✨', '💖', '⭐', '💕', '🌟'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('span');
            sparkle.className = 'sparkle';
            sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
            sparkle.style.left = 50 + '%';
            sparkle.style.top = 50 + '%';
            sparkle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
            sparkle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
            container.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 50);
    }
}

function createHeartBurst() {
    const hearts = ['💕', '❤️', '💗', '💖', '💝'];
    const container = document.getElementById('heartExplosion');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('span');
            heart.className = 'explosion-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = 50 + '%';
            heart.style.top = 50 + '%';
            heart.style.setProperty('--tx', (Math.random() - 0.5) * window.innerWidth + 'px');
            heart.style.setProperty('--ty', (Math.random() - 0.5) * window.innerHeight + 'px');
            container.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }, i * 30);
    }
}

// Typewriter Effect
function initTypewriter() {
    const text = "Happy rose day you phool 💕🌸";
    const typewriterEl = document.getElementById('typewriterText');
    if (!typewriterEl) return;
    let index = 0;
    let isVisible = false;
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isVisible) {
            isVisible = true;
            typeText();
        }
    }, { threshold: 0.5 });
    observer.observe(typewriterEl.parentElement);
    function typeText() {
        if (index < text.length) {
            typewriterEl.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
}

// Gallery Slider
function initGallery() {
    const slider = document.getElementById('gallerySlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (!slider || !prevBtn || !nextBtn) return;
    const scrollAmount = 280;
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

// Gift Box Animation
function initGiftBox() {
    const giftBox = document.getElementById('giftBox');
    const giftSurprise = document.getElementById('giftSurprise');
    if (!giftBox || !giftSurprise) return;
    giftBox.addEventListener('click', () => {
        if (giftBox.classList.contains('opened')) return;
        giftBox.classList.add('opened');
        setTimeout(() => {
            giftSurprise.classList.add('active');
        }, 500);
        createHeartBurst();
    });
}

// Draggable Elements
function initDraggables() {
    const draggables = document.querySelectorAll('.draggable-item');
    const playgroundArea = document.getElementById('playgroundArea');
    if (!playgroundArea) return;
    draggables.forEach(item => {
        let isDragging = false;
        let startX, startY, initialX, initialY;
        item.addEventListener('mousedown', startDrag);
        item.addEventListener('touchstart', startDrag, { passive: false });
        function startDrag(e) {
            isDragging = true;
            item.style.zIndex = 1000;
            if (e.type === 'touchstart') {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            } else {
                startX = e.clientX;
                startY = e.clientY;
            }
            initialX = item.offsetLeft;
            initialY = item.offsetTop;
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('touchend', stopDrag);
        }
        function drag(e) {
            if (!isDragging) return;
            e.preventDefault();
            let currentX, currentY;
            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX;
                currentY = e.touches[0].clientY;
            } else {
                currentX = e.clientX;
                currentY = e.clientY;
            }
            const dx = currentX - startX;
            const dy = currentY - startY;
            let newX = initialX + dx;
            let newY = initialY + dy;
            const rect = playgroundArea.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();
            newX = Math.max(0, Math.min(newX, rect.width - itemRect.width));
            newY = Math.max(0, Math.min(newY, rect.height - itemRect.height));
            item.style.left = newX + 'px';
            item.style.top = newY + 'px';
        }
        function stopDrag() {
            isDragging = false;
            item.style.zIndex = 1;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('touchend', stopDrag);
        }
    });
}

// Love Letter
function initLoveLetter() {
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letterContent');
    const sendLoveBtn = document.getElementById('sendLoveBtn');
    if (!envelope || !letterContent) return;
    envelope.addEventListener('click', () => {
        if (envelope.classList.contains('opened')) return;
        envelope.classList.add('opened');
        setTimeout(() => {
            envelope.style.display = 'none';
            letterContent.classList.add('active');
        }, 500);
    });
    if (sendLoveBtn) {
        sendLoveBtn.addEventListener('click', () => {
            createHeartBurst();
            sendLoveBtn.textContent = 'Love Sent! 💕';
            sendLoveBtn.disabled = true;
            sendLoveBtn.style.background = 'linear-gradient(135deg, #90EE90, #32CD32)';
        });
    }
}

// Share Buttons
function initShareButtons() {
    const whatsappBtn = document.getElementById('shareWhatsApp');
    const instagramBtn = document.getElementById('shareInstagram');
    const shareText = "🌹 Happy Rose Day! Check out this beautiful website made with love! 💕";
    const shareUrl = window.location.href;
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            window.open('https://wa.me/?text=' + encodeURIComponent(shareText + ' ' + shareUrl), '_blank');
        });
    }
    if (instagramBtn) {
        instagramBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(shareUrl).then(() => {
                instagramBtn.innerHTML = '<span class="share-icon">✓</span><span>Copied!</span>';
                setTimeout(() => {
                    instagramBtn.innerHTML = '<span class="share-icon">📷</span><span>Instagram</span>';
                }, 2000);
            });
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
    const hero = document.getElementById('hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
}
