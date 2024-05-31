function startClock() {
    let timeElement = document.getElementById('time');
    let secondsElement = document.getElementById('seconds');

    if (timeElement && secondsElement) {
        showTime(timeElement, secondsElement);
        setInterval(function() {
            showTime(timeElement, secondsElement);
        }, 1000);
    } else {
        console.error('Unable to find required elements on the page.');
    }
}

function showTime(timeElement, secondsElement) {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    timeElement.innerHTML = currentTime;
    secondsElement.innerHTML = today.getSeconds();
}
setInterval(showTime,1000);
startClock();
