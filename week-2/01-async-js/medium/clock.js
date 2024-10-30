function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time for 24-hour clock
    const time24 = [
        String(hours).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(seconds).padStart(2, '0')
    ].join(':');

    // Format time for 12-hour clock
    const hours12 = hours % 12 || 12;
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const time12 = [
        String(hours12).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(seconds).padStart(2, '0')
    ].join(':') + ` ${amPm}`;

    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

// Update the clock every second
setInterval(updateClock, 1000);
