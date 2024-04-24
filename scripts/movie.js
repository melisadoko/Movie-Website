document.addEventListener("DOMContentLoaded", function () {
  // Merr filmin nga localStorage
  const movie = JSON.parse(localStorage.getItem("movieTitle"));

  if (movie) {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isFavourite = favourites.some(function (obj) {
      return obj.title === movie.title;
    });

    // Nese movie eshte i preferuar bej display zemren e kuqe else te bardhen
    if (isFavourite) {
      document.getElementById("dislike").style.display = "block";
    } else {
      document.getElementById("like").style.display = "block";
    }
    // Titulli i filmit
    document.getElementById("movie-title").innerText = movie.title;

    // videoja dhe description
    document.getElementById("movie-video").src = movie.src;
    document.getElementById("description").innerText = movie.desc;
  }
});

function likeOrDislike(element) {
  // Fsheh butonin që është klikuar
  element.style.display = "none";

  // Merr listën e filmove të preferuar nga localStorage ose krijon një listë të re nëse nuk ka
  var favMovies = JSON.parse(localStorage.getItem("favourites")) || [];
  const movieSection = element.closest("#movie_section");
  const movieTitle = movieSection.querySelector("#movie-title").innerText; //marrim titullin e filmit
  if (element.classList.contains("red")) {
    //nese ka qene favourite, nxjerr zemren e bardhe dhe e fshin nga array ne ls
    document.getElementById("like").style.display = "block";
    const index = favMovies.findIndex(function (obj) {
      return obj.title === movieTitle;
    });
    if (index !== -1) {
      favMovies.splice(index, 1);
    }
  } else {
    //nxjerr zemren e kuqe
    document.getElementById("dislike").style.display = "block";
    const movieForm = JSON.parse(localStorage.getItem("movieTitle"));
    const movie = {
      title: movieTitle,
      type: movieForm.type,
      img: movieForm.img,
    };
    favMovies.push(movie); //shton filmin ne arrayn me objektet movie te preferuara
  }
  // Ruajme array ne ls
  localStorage.setItem("favourites", JSON.stringify(favMovies));
}

function handleSendImage(event) {
  if (event.keyCode === 13) {
    // 13 is the kodi per Enter
    sendMessage();
  }
}
function sendMessage() {
  const commentText = document.getElementById("comment-input").value; //vlera e shkruar ne input
  const commentsList = document.getElementById("comments-list");
  if (commentText.trim() != "") {
    //nese kemi shkruar dicka e shtojme si koment
    const newComment = document.createElement("li");
    newComment.classList.add("comment");
    let user = JSON.parse(localStorage.getItem("user"));
    newComment.textContent = user.name + " : " + commentText;
    commentsList.appendChild(newComment);
    document.getElementById("comment-input").value = "";
  }
}
