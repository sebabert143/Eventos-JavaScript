window.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const adScreen = document.getElementById('adScreen');
    const pageContent = document.getElementById('pageContent');
    const closeAd = document.getElementById('closeAd');
    const countdown = document.getElementById('countdown');

    // Mostrar pantalla de carga durante 3 segundos
    setTimeout(function() {
        loadingScreen.classList.add('hidden');  // Ocultar pantalla de carga
        adScreen.classList.remove('hidden');  // Mostrar publicidad
        startCountdown();  // Iniciar cuenta regresiva de la publicidad
    }, 3000);

    // Función de cuenta regresiva de 5 segundos
    function startCountdown() {
        let timeLeft = 5;
        const countdownInterval = setInterval(function() {
            timeLeft--;
            countdown.textContent = timeLeft;
            if (timeLeft === 0) {
                clearInterval(countdownInterval);
                closeAd.classList.remove('hidden');  // Mostrar botón de cerrar cuando la cuenta regresiva termina
            }
        }, 1000);
    }

    // Al hacer clic en el botón de cerrar, ocultar publicidad y mostrar contenido real
    closeAd.addEventListener('click', function() {
        adScreen.classList.add('hidden');  // Ocultar publicidad
        pageContent.classList.remove('hidden');  // Mostrar contenido real
    });
});


