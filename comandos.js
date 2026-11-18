// Inicializar tsParticles para fondo de partículas mágicas
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('intro-audio');
    const soundButton = document.getElementById('sound-button');
    audio.volume = 0.25;

    audio.play().then(() => {
        soundButton.textContent = 'Detener música';
        soundButton.hidden = false;
    }).catch(() => {
        soundButton.textContent = 'Activar música';
        soundButton.hidden = false;
    });

    soundButton.addEventListener('click', () => {
        if (!audio.paused) {
            audio.pause();
            soundButton.textContent = 'Activar música';
            return;
        }

        audio.play().then(() => {
            soundButton.textContent = 'Detener música';
            soundButton.hidden = false;
        }).catch((error) => {
            console.error('No se pudo reproducir sonido/intro.mp3:', error);
        });
    });

    audio.addEventListener('ended', () => {
        soundButton.textContent = 'Activar música';
    });

    if (window.tsParticles) {
        tsParticles.load('tsparticles', {
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
                number: { value: 80, density: { enable: true, area: 800 } },
                color: { value: '#ffd700' },
                shape: { type: 'star' },
                opacity: { value: 0.7 },
                size: { value: 2.5, random: true },
                move: { enable: true, speed: 0.7, direction: 'none', random: true, straight: false, outModes: 'out' }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: 'repulse' },
                    onClick: { enable: true, mode: 'push' }
                },
                modes: {
                    repulse: { distance: 80, duration: 0.4 },
                    push: { quantity: 4 }
                }
            },
            detectRetina: true
        });
    }

});
