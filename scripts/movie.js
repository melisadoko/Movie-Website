document.addEventListener("DOMContentLoaded", function () {
  // Retrieve data from local storage
  const movie = JSON.parse(localStorage.getItem("movieTitle"));

  if (movie) {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isFavourite = favourites.some(function (obj) {
      return obj.title === movie.title;
    });

    // If movie is favourite display red heart else white one
    if (isFavourite) {
      document.getElementById("dislike").style.display = "block";
    } else {
      document.getElementById("like").style.display = "block";
    }
    // Set video title
    document.getElementById("movie-title").innerText = movie.title;

    // Set video source
    document.getElementById("movie-video").src = movie.src;
    document.getElementById("description").innerText = movie.desc;
  }
});

function likeOrDislike(element) {
  element.style.display = "none";
  var favMovies = JSON.parse(localStorage.getItem("favourites")) || [];
  const movieSection = element.closest("#movie_section");
  const movieTitle = movieSection.querySelector("#movie-title").innerText;
  if (element.classList.contains("red")) {
    document.getElementById("like").style.display = "block";
    const index = favMovies.findIndex(function (obj) {
      return obj.title === movieTitle;
    });
    if (index !== -1) {
      favMovies.splice(index, 1);
    }
  } else {
    document.getElementById("dislike").style.display = "block";
    const movieForm = JSON.parse(localStorage.getItem("movieTitle"));
    const movie = {
      title: movieTitle,
      type: movieForm.type,
      img: movieForm.img,
    };
    favMovies.push(movie);
  }
  // Save the modified array back into localStorage
  localStorage.setItem("favourites", JSON.stringify(favMovies));
}

function handleSendImage(event) {
  if (event.keyCode === 13) {
    // 13 is the key code for Enter key
    sendMessage();
  }
}
function sendMessage() {
  const commentText = document.getElementById("comment-input").value;
  const commentsList = document.getElementById("comments-list");
  const newComment = document.createElement("li");
  newComment.classList.add("comment");
  newComment.textContent = commentText;
  commentsList.appendChild(newComment);
  document.getElementById("comment-input").value = "";
}
