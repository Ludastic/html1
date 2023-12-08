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
let notifications = [];
var num = 1;
function addNotifaction() {
    let notification;
    if (notifications.length === 0) {
        notification = {
            title: "уведомление 1",
            description: "описание уведомления 1",
            id: num 
        };
        console.log('ddd1');
        const notificationItem = document.createElement("div");
        notificationItem.classList.add("notification");
        notificationItem.innerHTML = `
            <h3>${notification.title}</h3>
            <p>${notification.description}</p>
        `;
        let btn = document.createElement('button');
        btn.className = 'delete-button';
        btn.textContent = '❌';
        notificationItem.appendChild(btn);
        notificationList.appendChild(notificationItem);
        num++;
        notifications.push(notificationItem);
    } 
    else {
        notification = {
            title:"уведомление "+num,
            description: "описание уведомления " + num
        };
        const notificationItem = document.createElement("div");
        notificationItem.classList.add("notification");
        notificationItem.innerHTML = `
            <h3>${notification.title}</h3>
            <p>${notification.description}</p>
        `;
        let btn = document.createElement('button');
        btn.className = 'delete-button';
        btn.textContent = '❌';
        notificationItem.appendChild(btn);
        notificationList.appendChild(notificationItem);
        num++;
        notifications.push(notificationItem);
    }
};
let timerId = setInterval(() => {
    addNotifaction();
    redraw();
}, 2000);
function pauseDecorator(timerId) {
    clearInterval(timerId);
    setTimeout(function() {
        timerId = setInterval(() => {
            addNotifaction();
            redraw();
        }, 2000);
    }, 2000);
};

notificationList.addEventListener('click', function(ev) {
    if (ev.target.className == "delete-button") {
        notifications = notifications.filter((item) => item != ev.target.parentNode);
        redraw();
    }
})
function redraw() {
    notificationList.innerHTML = '';
    notifications.forEach((n) => {
        notificationList.appendChild(n);
    })
}