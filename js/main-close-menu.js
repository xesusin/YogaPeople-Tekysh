const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Закрытие меню по клику вне его
document.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});