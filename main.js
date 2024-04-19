const notification_audio = new Audio("notification_song.mp3");
const toast_notification_btn = document.querySelector(".toast-notification-btn");
const toastnotification_container = document.getElementById("toastnotification-container");
const notification_messages = ["👤 user started following you","🖤 user liked your post","🤳 user mentioned you in their post","🙅‍♂️ user unfollowed you","💰 your post got viral","💬 user messaged you"];

function show_notifications(message = null) {
    let toastnotification_element = document.createElement("div");
    toastnotification_element.classList.add("toastnotification");
    if(toastnotification_element.innerText = "") {
        toastnotification_element.innerText = message;
        notification_audio.play();
    }
    else {
        toastnotification_element.innerText = print_random_message();
        notification_audio.play();
    }
    toastnotification_container.appendChild(toastnotification_element);
    setTimeout(() => {
        toastnotification_element.remove();
    }, 3000);
}
toast_notification_btn.addEventListener("click",show_notifications);

// =================================================== iterating the array items & setting the random item as text for our toast notification text ===================================================
function print_random_message() {
    return notification_messages[Math.floor(Math.random() * notification_messages.length)];
}