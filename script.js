// script.js

// Prayer Times Clock
function prayerTimesClock() {
    const times = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
    const now = new Date();
    const formattedTime = `Current UTC Time: ${now.toISOString()}`;
    console.log(formattedTime);
    times.forEach(time => {
        console.log(`${time} will be at...`);
    });
}

// Countdown Timer
function countdownTimer(duration) {
    let countdown = duration;
    const interval = setInterval(() => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        console.log(`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`);
        if (--countdown < 0) {
            clearInterval(interval);
            console.log('Countdown finished!');
        }
    }, 1000);
}

// Table Generation for Prayer Times
function generatePrayerTable(prayerTimes) {
    const table = document.createElement('table');
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    const headers = ['Prayer', 'Time'];
    headers.forEach((text, index) => {
        const cell = headerRow.insertCell(index);
        cell.textContent = text;
    });
    const body = table.createTBody();
    prayerTimes.forEach(time => {
        const row = body.insertRow();
        row.insertCell(0).textContent = time.prayer;
        row.insertCell(1).textContent = time.time;
    });
    document.body.appendChild(table);
}

// PWA Install Functionality
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service worker registered with scope:', registration.scope);
        }).catch(error => {
            console.error('Service worker registration failed:', error);
        });
    }
}

// Initialize the app
function initializeApp() {
    prayerTimesClock();
    countdownTimer(90); // 90 seconds countdown
    generatePrayerTable([{ prayer: 'Fajr', time: '05:00' }, { prayer: 'Dhuhr', time: '12:15' }]); // Add actual prayer times
    registerServiceWorker();
}

document.addEventListener('DOMContentLoaded', initializeApp);