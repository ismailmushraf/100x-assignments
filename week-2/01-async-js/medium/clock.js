const readline = require('readline');

function clearLine() {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
}

function format(is24hrFormat) {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timelabel = "";

  if (!is24hrFormat) {
    if (hours == 0) {
      hours = 12;
      timelabel = "AM";
    } else if (hours <= 12) {
      hours = 12;
      timelabel = "AM";
    } else if (hours > 12) {
      hours = hours - 12;
      timelabel = "PM"; 
    }
  }

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return `${hours}:${minutes}:${seconds} ${timelabel}`;
}
setInterval(() => {
  clearLine();
  const date = new Date();
  let timeIn24 = format(true);  
  let timeIn12 = format(false);
  process.stdout.write(timeIn24 + " | " + timeIn12);
}, 1000);
