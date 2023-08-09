var endDate = new Date('August 25, 2023 09:30:00');
var startDate = new Date('May 29, 2023');
var dateContainer = document.getElementById('dates');

// Populate dates
while (startDate <= endDate) {
    var dateElement = document.createElement('div');
    dateElement.className = 'date';
    dateElement.innerText = startDate.getDate() + ' ' + startDate.toLocaleString('default', { month: 'short' });
    if (startDate.toDateString() === endDate.toDateString()) {
        dateElement.className += ' gold-date';
    } else if (startDate.toDateString() === new Date().toDateString()) {
        dateElement.className += ' date-today';
    } else if (startDate < new Date()) {
        dateElement.className += ' crossed';
    }
    dateContainer.appendChild(dateElement);
    startDate.setDate(startDate.getDate() + 1);
}

function updateClockAndBoxes() {
    var now = new Date();
    var distance = endDate - now;
    var passedDistance = now - new Date('May 29, 2023');

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var totalHoursLeft = Math.floor(distance / (1000 * 60 * 60));
    var totalMinutesLeft = Math.floor(distance / (1000 * 60));
    var totalHoursPassed = Math.floor(passedDistance / (1000 * 60 * 60));
    var totalMinutesPassed = Math.floor(passedDistance / (1000 * 60));

    document.getElementById('clock').innerHTML = `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    document.getElementById('hoursLeft').innerHTML = "Total Number of Hours Left: " + totalHoursLeft;
    document.getElementById('minutesLeft').innerHTML = "Total Number of Minutes Left: " + totalMinutesLeft;
    document.getElementById('totalHoursPassed').innerHTML = "Total Number of Hours Passed: " + totalHoursPassed;
    document.getElementById('totalMinutesPassed').innerHTML = "Total Number of Minutes Passed: " + totalMinutesPassed;
    document.getElementById('days-message').innerHTML = `${days} Days Remaining till reunited with baobei`;


    if (distance < 0) {
        clearInterval(x);
        document.getElementById('clock').innerHTML = "EXPIRED";
    }
}

var x = setInterval(updateClockAndBoxes, 1000);
