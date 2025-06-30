let intervalID;

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
  updateClock();
  intervalID = setInterval(updateClock, 1000);
}

function stopClock() {
  clearInterval(intervalID);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    startClock();
  } else {
    stopClock();
  }
});

startClock();
