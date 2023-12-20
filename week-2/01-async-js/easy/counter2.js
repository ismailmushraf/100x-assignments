function printCurrentTime() {
  const date = new Date();
  setTimeout(() => {
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    printCurrentTime();
  }, 1000);
}

printCurrentTime();
