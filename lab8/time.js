function startClock() {
    let timeElement = document.getElementById('time');
    let secondsElement = document.getElementById('seconds');
    let analogHandElement = document.getElementById('analog-hand');

    if (timeElement && secondsElement && analogHandElement) {
        showTime(timeElement, secondsElement, analogHandElement);
        setInterval(function() {
            showTime(timeElement, secondsElement, analogHandElement);
        }, 1000);
    } else {
        console.error('Unable to find required elements on the page.');
    }
}

function showTime(timeElement, secondsElement, analogHandElement) {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    let seconds = today.getSeconds();

    timeElement.textContent = currentTime;
    secondsElement.textContent = seconds;
    analogHandElement.style.transform = `rotate(${seconds * 6}deg)`;
}

startClock();