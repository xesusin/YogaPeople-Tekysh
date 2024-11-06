// Открытие модального окна с учетом конкретной кнопки
function openModal(button, courseType) {
    const modal = document.getElementById('buyNowModal');
    modal.style.display = 'block'; // Открываем модальное окно
    modal.dataset.link = button.dataset.link; // Сохраняем ссылку
    modal.dataset.courseType = courseType; // Сохраняем тип курса
}

// Обработчики для кнопок
const buyNowButtonMassage = document.getElementById('new_buyNowButtonMassage');
const buyNowButtonNoMassage = document.getElementById('new_buyNowButtonNoMassage');

if (buyNowButtonMassage && buyNowButtonNoMassage) {
    // Поддержка событий 'click' и 'touchstart'
    ['click', 'touchstart'].forEach(eventType => {
        buyNowButtonMassage.addEventListener(eventType, function (event) {
            event.preventDefault();
            openModal(this, 'С массажем');
        });
        
        buyNowButtonNoMassage.addEventListener(eventType, function (event) {
            event.preventDefault();
            openModal(this, 'Без массажа');
        });
    });
}

// Закрытие модального окна
const closeModalButton = document.getElementById('closeModal');
if (closeModalButton) {
    closeModalButton.addEventListener('click', function () {
        document.getElementById('buyNowModal').style.display = 'none';
    });
}

// Закрытие модального окна при клике вне его
window.addEventListener('click', function (event) {
    const modal = document.getElementById('buyNowModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// Отправка сообщения
document.getElementById('new_sendMessage').addEventListener('click', function () {
    const message = document.getElementById('new_chatMessage').value.trim();
    const new_senderPhone = document.getElementById('new_senderPhone').value.trim().replace(/\s+/g, ''); // Удаляем пробелы

    // Проверка номера телефона
    const phoneRegex = /^(8\d{10}|\+7\d{10})$/; // Регулярное выражение для проверки формата
    if (!phoneRegex.test(new_senderPhone)) {
        alert('Введите корректный номер телефона:\n\n8(999)-999-99-99 или +7(999)-999-99-99.');
        return;
    }

    // Проверка имени
    if (message === '') {
        alert('Введите имя.');
        return;
    }

    // Получаем тип курса из data-атрибута модального окна
    const courseType = document.getElementById('buyNowModal').dataset.courseType;

    // Форматирование сообщения
    const formattedMessage = `Курс «Здоровая спина»\nТип курса: ${courseType}\nТелефон: ${new_senderPhone}\nИмя: ${message}`;

    // Отправка сообщения в Telegram
    fetch(`https://api.telegram.org/bot8162513641:AAGbyFDIZ5dPSrRBtXXzusB_8k3M8cIgXvw/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '-1002260812823',
            text: formattedMessage,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // Показать всплывающее окно
                const new_popup = document.getElementById('redirectPopup');
                new_popup.style.display = 'flex'; // Показать всплывающее окно

                // Моментальное открытие ссылки на Робокассу из data-link модального окна
                window.open(document.getElementById('buyNowModal').dataset.link, '_blank'); // Открыть ссылку

                // Очистить поля формы
                document.getElementById('new_chatMessage').value = '';
                document.getElementById('new_senderPhone').value = '';
            } else {
                alert('Ошибка отправки.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Ошибка подключения.');
        });
});
