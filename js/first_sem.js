document.getElementById('toggleButton').addEventListener('click', function() {
    const table = document.getElementById('table1');
    
    // Проверяем текущее состояние display и меняем его
    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'table'; // Показываем таблицу
    } else {
        table.style.display = 'none'; // Скрываем таблицу
    }
});

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

const checkboxes = document.querySelectorAll('.confetti-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked ) {
            launchConfetti();
        }
    });
});