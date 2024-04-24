const userData = JSON.parse(localStorage.getItem("user"));
// Kontrollojme nese ekziston useri
if (userData) {
  document.getElementById("user-div").textContent =
    "Përshëndetje " + userData.name;
} else {
  // Vlera default nese nuk ekziston
  document.getElementById("user-div").textContent = "Përshëndetje Përdorues";
}

(function () {
  // Përcaktojme ndarjen e kohës në milidetë, minuta, orë dhe ditë
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  //data kur del filmi
  const movie_date = new Date(2024, 03, 30);
  const countDown = new Date(movie_date).getTime(),
    //funksioni do te ekzekutohet cdo sekonde
    x = setInterval(function () {
      // Merr kohën aktuale
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
        clearInterval(x); //ndalon azhornimi periodik i kodit
      }
    }, 0);
})();
