function displayTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const currentTime = `${hour}:${minute}:${second}`;
  document.querySelector(".clock").textContent = currentTime;
}

displayTime();
setInterval(displayTime, 1000);
