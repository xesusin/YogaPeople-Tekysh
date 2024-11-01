// Добавление стилей через JS
const style = document.createElement('style');
style.textContent = `
    /* Стили для всплывающего окна */
    .popup {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s ease-in-out;
        opacity: 0;
        z-index: 99999; /* фоновая область */
        padding: 10px;
    }

    .popup.show {
        display: flex;
        opacity: 1;
    }

    .popup-content {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        transform: scale(0.7);
        transition: transform 0.5s ease-in-out;
        z-index: 999; /* содержимое окна */
        position: relative;
    }

    .popup.show .popup-content {
        transform: scale(1);
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

// Открытие всплывающего окна
document.getElementById('openPopup').addEventListener('click', function () {
    const popup = document.getElementById('popup');
    popup.classList.add('show');
});

// Закрытие всплывающего окна
document.getElementById('closePopup').addEventListener('click', function () {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
});

// Закрытие по клику вне окна
window.addEventListener('click', function (event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.classList.remove('show');
    }
});
