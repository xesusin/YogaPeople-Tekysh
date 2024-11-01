const endDate = new Date(2024, 10, 18, 10, 0, 0);
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
        timerElement.textContent = 'Курс доступен';
        clearInterval(timerInterval);

        // Меняем стили по завершению таймера
        timerElement.classList.add('course-available');

        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    timerElement.textContent = `⏰️${days} дней и ${hours} часов`
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();