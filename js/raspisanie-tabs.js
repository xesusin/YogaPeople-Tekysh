document.querySelectorAll('.tab-link').forEach(button => {
    button.addEventListener('click', () => {
        const tabContent = document.querySelectorAll('.tab-content');
        const tabButtons = document.querySelectorAll('.tab-link');

        // Убираем active со всех кнопок
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // Убираем active со всех вкладок
        tabContent.forEach(content => content.classList.remove('active'));

        // Добавляем active к текущей кнопке и вкладке
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});