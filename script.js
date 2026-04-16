const startBtn = document.getElementById('startBtn');
const introScreen = document.getElementById('intro-screen');
const mistLayer = document.getElementById('mist-layer');
const mainMenu = document.getElementById('main-menu');
const lagu = new Audio('p.mp3'); 

startBtn.addEventListener('click', () => {
    // 1. Play Musik
    lagu.play().catch(() => console.log("Izin audio aktif"));

    // 2. Transisi Intro Out
    introScreen.style.opacity = '0';
    setTimeout(() => {
        introScreen.style.display = 'none';
        
        // 3. Munculkan Embun & Salju
        mistLayer.style.opacity = '1';
        for (let i = 0; i < 40; i++) {
            let snow = document.createElement('div');
            snow.className = 'snow';
            let size = Math.random() * 5 + 2 + 'px';
            snow.style.width = size;
            snow.style.height = size;
            snow.style.left = Math.random() * 100 + 'vw';
            snow.style.animationDuration = Math.random() * 2 + 2 + 's';
            document.body.appendChild(snow);
        }

        // 4. Menu Utama Muncul
        setTimeout(() => {
            mainMenu.classList.add('visible');
        }, 1000);
    }, 800);
});
