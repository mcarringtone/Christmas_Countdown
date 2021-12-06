const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const christmas = 25;
  let currentTime = new Date();

  let todayDate = currentTime.getDate();

  let remaining = christmas - todayDate;

  countdownDisplay.textContent = remaining;
}

renderCountdown();
