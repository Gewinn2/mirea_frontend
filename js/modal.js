// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const btn = document.getElementsByClassName("order-button");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Открываем модальное окно при нажатии на кнопку
// Открываем модальное окно при нажатии на любую из кнопок
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modal.style.display = "block";
    }
}

form.onsubmit = function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    // Можно добавить валидацию данных формы, если требуется

    // Переадресация на страницу успеха
    window.location.href = '/success.html';
};

// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
 modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
 if (event.target === modal) {
 modal.style.display = "none";
 }
}