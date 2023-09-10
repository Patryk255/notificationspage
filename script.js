
const notifications = document.querySelectorAll('.single-notification');
const markAllBtn = document.querySelector('.mark');
const notificationNumber = document.querySelector('.numOfNotifi');

notifications.forEach(notification => {
    notification.addEventListener('click', () => {
        if (notification.classList.contains('toread')) {
            notification.classList.remove('toread');
            changeToReadNotifications();
        }
    });
    });

markAllBtn.addEventListener('click', () => {
    notifications.forEach(notification => {
        notification.classList.remove('toread');
        changeToReadNotifications();
    });
});

const changeToReadNotifications = () => {
    let count = 0;
    notifications.forEach(notification => {
        if (notification.classList.contains('toread')) {
            count++;
        }
    });
    notificationNumber.textContent = count;
};