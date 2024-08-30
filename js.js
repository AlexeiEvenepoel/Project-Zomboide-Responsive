document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Duración del desplazamiento en milisegundos
        let start = null;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const progressPercentage = Math.min(progress / duration, 1);
            window.scrollTo(0, startPosition + distance * progressPercentage);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        });
    });
});