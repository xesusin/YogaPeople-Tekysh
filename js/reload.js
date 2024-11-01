function reloadPage() {
    var currentUrl = window.location.href;
    var newUrl = currentUrl.split('?')[0] + '?v=' + new Date().getTime(); // добавляет временную метку
    window.location.href = newUrl;
}

window.onload = function () {
    // Получаем количество обновлений
    let reloadCount = parseInt(localStorage.getItem('reloadCount')) || 0;

    // Проверяем, сколько раз уже происходило обновление
    if (reloadCount < 2) {
        reloadPage(); // Вызовите функцию при загрузке страницы
        localStorage.setItem('reloadCount', reloadCount + 1); // Увеличиваем счетчик обновлений
    }
};