// Sound-Toggle-Funktion
const soundToggle = document.getElementById('soundToggle');
const elephantIcon = document.getElementById('elephantIcon');
const ambientSound = document.getElementById('ambientSound');

soundToggle.addEventListener('click', () => {
    if (ambientSound.paused) {
        ambientSound.volume = 0.3;
        ambientSound.play();
        ambientSound.loop = true;
        elephantIcon.src = 'images/elefant-unmute.png';
        // Fade-in
        let volume = 0;
        const fadeIn = setInterval(() => {
            if (volume >= 0.3) clearInterval(fadeIn);
            else {
                volume += 0.05;
                ambientSound.volume = volume;
            }
        }, 100);
    } else {
        // Fade-out
        const fadeOut = setInterval(() => {
            if (ambientSound.volume <= 0.05) {
                ambientSound.pause();
                elephantIcon.src = 'images/elefant-mute.png';
                clearInterval(fadeOut);
            } else {
                ambientSound.volume -= 0.05;
            }
        }, 100);
    }
});
