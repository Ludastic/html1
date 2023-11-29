const notificationButton = document.getElementById("notification-button");
const notificationPopup = document.getElementById("notification-popup");
const notificationList = document.getElementById("notification-list");
const noNotifications = document.getElementById("no-notifications");

notificationButton.addEventListener("click", function() {
    pauseDecorator(timerId);
    if (notificationPopup.classList.contains("hidden")) {
        notificationPopup.classList.remove("hidden");
        notificationPopup.classList.add("appear");
    } else {
        notificationPopup.classList.remove("appear");
        notificationPopup.classList.add("disappear");

        
        setTimeout(function() {
            notificationPopup.classList.add("hidden");
            notificationPopup.classList.remove("disappear");
        }, 500); 
    }
});
const notifications = [];
var num = 0;
function addNotifaction() {
    let notification;
    if (notifications.length === 0) {
        notification = {
            title: "уведомление 1",
            description: "описание уведомления 1"
        };
        num++;
        notifications.push(notification);
    } 
    else {
        notification = {
            title:"уведомление "+num,
            description: "описание уведомления " + num
        };
        num++;
        notifications.push(notification);
    }
};
let timerId = setInterval(redraw, 30000);
function pauseDecorator(timerId) {
    clearInterval(timerId);
    setTimeout(function() {
        timerId = setInterval(redraw, 3000);
    }, 5000);
};
function redraw() {
    addNotifaction();
    var child = notificationList.lastElementChild;
    while (child) {
        notificationList.removeChild(child);
        child = notificationList.lastElementChild;
    }
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
}