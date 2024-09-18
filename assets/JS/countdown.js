function startCountdown(targetDate, ids) {
    // Function to update the countdown
    const updateCountdown = () => {
        // Get the current date and time
        const currentDate = new Date().getTime();

        // Calculate the remaining time
        let remainingTime = targetDate - currentDate;

        // If the remaining time is less than or equal to 0, reset the countdown for 1 hour
        if (remainingTime <= 0) {
            targetDate = new Date(currentDate + 3600000).getTime(); // 3600000 milliseconds = 1 hour
            remainingTime = targetDate - currentDate;
            // Store the new target date in local storage
            localStorage.setItem("targetDate", targetDate);
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Update the HTML elements with the remaining time
        const daysElement = document.getElementById(ids.days);
        const hoursElement = document.getElementById(ids.hours);
        const minutesElement = document.getElementById(ids.minutes);
        const secondsElement = document.getElementById(ids.seconds);

        if (daysElement) {
            daysElement.textContent = days.toString().padStart(2, "0");
        }
        if (hoursElement) {
            hoursElement.textContent = hours.toString().padStart(2, "0");
        }
        if (minutesElement) {
            minutesElement.textContent = minutes.toString().padStart(2, "0");
        }
        if (secondsElement) {
            secondsElement.textContent = seconds.toString().padStart(2, "0");
        }
    };

    // Update the countdown immediately
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
}

let targetDate = localStorage.getItem("targetDate");
if (!targetDate) {
    targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 1);
    targetDate.setMinutes(0);
    targetDate.setSeconds(0);
    localStorage.setItem("targetDate", targetDate.getTime());
} else {
    targetDate = parseInt(targetDate);
}

// id for the first counter
const firstCounterIds = {
    days: "first-days",
    hours: "first-hours",
    minutes: "first-minutes",
    seconds: "first-seconds",
};

// id for the second counter
const secondCounterIds = {
    days: "second-days",
    hours: "second-hours",
    minutes: "second-minutes",
    seconds: "second-seconds",
};
startCountdown(targetDate, firstCounterIds);
startCountdown(targetDate, secondCounterIds);