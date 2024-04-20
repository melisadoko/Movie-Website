const userData = JSON.parse(localStorage.getItem("user"));
// Check if data exists
if (userData) {
  document.getElementById("user-div").textContent =
    "Përshëndetje " + userData.name;
} else {
  // Set default value if data doesn't exist
  document.getElementById("user-div").textContent = "Përshëndetje Përdorues";
}

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const movie_date = new Date(2024, 03, 30);
  const countDown = new Date(movie_date).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;
      if (distance > 0) {
        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
      } else {
        document.getElementById("movie_released").innerText = "Movie out now!";
        document.getElementById("content").style.display = "none";
        clearInterval(x);
      }
    }, 0);
})();
