const notificationButton = document.getElementById("notification-button");
const notificationPopup = document.getElementById("notification-popup");
const notificationList = document.getElementById("notification-list");
const noNotifications = document.getElementById("no-notifications");

notificationButton.addEventListener("click", function() {
    if (notificationPopup.classList.contains("hidden")) {
        notificationPopup.classList.remove("hidden");
        notificationPopup.classList.add("appear");
    } else {
        notificationPopup.classList.remove("appear");
        notificationPopup.classList.add("disappear");

        // Задержка перед скрытием окна (должна быть равной длительности анимации)
        setTimeout(function() {
            notificationPopup.classList.add("hidden");
            notificationPopup.classList.remove("disappear");
        }, 500); // Длительность анимации 0.5 секунды
    }
});

// Пример добавления уведомлений динамически
const notifications = [
    { title: "Первое уведомление", description: "Описание первого уведомления" },
    { title: "Второе уведомление", description: "Описание второго уведомления" },
];

if (notifications.length > 0) {
    noNotifications.style.display = "none";
    notifications.forEach(notification => {
        const notificationItem = document.createElement("div");
        notificationItem.classList.add("notification");
        notificationItem.innerHTML = `
            <h3>${notification.title}</h3>
            <p>${notification.description}</p>
        `;
        notificationList.appendChild(notificationItem);
    });
} else {
    notificationList.style.display = "none";
    noNotifications.style.display = "block";
}