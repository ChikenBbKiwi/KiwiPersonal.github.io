function toChineseDate(date) {
    const chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const chineseDate = date.getDate().toString().split('').map(num => chineseNumbers[num]).join('');
    const chineseMonth = (date.getMonth() + 1).toString().split('').map(num => chineseNumbers[num]).join('') + '月';
    return `${chineseMonth}${chineseDate}日`;
}

var endDate = new Date('August 25, 2023 09:30:00');
var startDate = new Date('May 29, 2023');
var dateContainer = document.getElementById('dates');

// Populate dates
while (startDate <= endDate) {
    var dateElement = document.createElement('div');
    dateElement.className = 'date';
    dateElement.innerText = toChineseDate(startDate);
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

    document.getElementById('clock').innerHTML = `${hours}小时${minutes}分${seconds}秒`;
    document.getElementById('hoursLeft').innerHTML = "剩余总小时数：" + totalHoursLeft;
    document.getElementById('minutesLeft').innerHTML = "剩余总分钟数：" + totalMinutesLeft;
    document.getElementById('totalHoursPassed').innerHTML = "已过总小时数：" + totalHoursPassed;
    document.getElementById('totalMinutesPassed').innerHTML = "已过总分钟数：" + totalMinutesPassed;
    document.getElementById('days-message').innerHTML = `${days}天后再次与宝贝团聚`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('clock').innerHTML = "已过期";
    }
}

var x = setInterval(updateClockAndBoxes, 1000);