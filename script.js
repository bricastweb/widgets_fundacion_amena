document.addEventListener('DOMContentLoaded', function() {
    // Configuración del Intersection Observer
    const observerOptions = {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };

    // Observador para la sección principal
    const valoresSection = document.querySelector('.valores-fundacion');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Activar animación de las tarjetas después de un breve retraso
                setTimeout(() => {
                    const cards = entry.target.querySelectorAll('.valor-card');
                    cards.forEach(card => {
                        card.classList.add('visible');
                    });
                }, 300);
                
                // Dejar de observar después de activar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Comenzar a observar la sección
    if (valoresSection) {
        observer.observe(valoresSection);
    }
});