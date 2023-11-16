var buttons = document.querySelectorAll(".like-button");

// Добавляем обработчик события на нажатие кнопки
areClicked = Array(buttons.length).fill(false);
for (let button of buttons) {
    button.style.backgroundColor = "#7A5F48";
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // Изменяем стиль кнопки при нажатии
        if (areClicked[i]) {
            buttons[i].style.backgroundColor = "#7A5F48";
            buttons[i].style.animation = "";
        }
        else {
            buttons[i].style.backgroundColor = "#AE3737";
            buttons[i].style.animation = "pulse 0.3s cubic-bezier(.82,.4,.86,.79) backwards";
        }

        areClicked[i] = !areClicked[i];
    });
}

