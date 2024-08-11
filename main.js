if (window.alt1) {
    alt1.identifyAppUrl("./appconfig.json");
    alt1.setOverlay(false);
}

const strangeRockRegex = /You (?:find|receive) a strange rock/;
const notificationSound = new Audio('notification.mp3'); // Add a sound file named "notification.mp3" in your app directory

function checkForStrangeRock() {
    if (!window.alt1 || !alt1.chat) return;

    const chat = alt1.chat.read();
    if (chat.length === 0) return;

    chat.forEach((message) => {
        if (strangeRockRegex.test(message.text)) {
            notifyStrangeRock();
        }
    });
}

function notifyStrangeRock() {
    alt1.overLayText("Strange Rock obtained!", 3000, 0, "green", "yellow");
    notificationSound.play();
}

setInterval(checkForStrangeRock, 1000); // Check every second
