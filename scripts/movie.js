document.addEventListener("DOMContentLoaded", function () {
  debugger;
  // Retrieve data from local storage
  const movie = JSON.parse(localStorage.getItem("movieTitle"));

  if (movie) {
    // Set video title
    document.getElementById("movie-title").innerText = movie.title;

    // Set video source
    document.getElementById("movie-video").src = movie.src;
  }
});

function likeOrDislike(element) {
  debugger;
  element.style.display = "none";
  var favMovies = JSON.parse(localStorage.getItem("favourites")) || [];
  const movieSection = element.closest("#movie_section");
  const movieText = movieSection.querySelector("#movie-title").innerText;
  if (element.classList.contains("red")) {
    document.getElementById("like").style.display = "block";
    let index = favMovies.indexOf(movieText);
    if (index !== -1) {
      favMovies.splice(index, 1);
    }
  } else {
    document.getElementById("dislike").style.display = "block";
    favMovies.push(movieText);
  }
  // Save the modified array back into localStorage
  localStorage.setItem("favourites", JSON.stringify(favMovies));
}
