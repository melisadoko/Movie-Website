const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

function handleSearchKeyPress(event) {
  if (event.keyCode === 13) {
    // 13 is the key code for Enter key
    searchMovies();
  }
}

function searchMovies() {
  let movieTitle = document.getElementById("search_input").value.toUpperCase();
  var moviePosters = document.getElementsByClassName("movie-content");

  if (movieTitle !== "") {
    for (var i = 0; i < moviePosters.length; i++) {
      var movieCaption = moviePosters[i]
        .querySelector("figcaption")
        .innerText.trim()
        .toUpperCase();
      if (movieCaption.includes(movieTitle.trim())) {
        ShowFlexElement(moviePosters[i]);
      } else {
        HideFlexElement(moviePosters[i]);
      }
    }
  } else {
    for (var i = 0; i < moviePosters.length; i++) {
      ShowFlexElement(moviePosters[i]);
    }
  }
}

function ShowFlexElement(element) {
  element.closest(".movie").style.display = "block";
}

function HideFlexElement(element) {
  element.closest(".movie").style.display = "none";
}

function saveMovieNameLocalStorage(element) {
  debugger;
  var movieTitleObj = {
    title: element.alt,
    src: "https://www.youtube.com/embed/_inKs4eeHiI?si=lBRjuue_82icWN8t",
  };
  localStorage.setItem("movieTitle", JSON.stringify(movieTitleObj));
}

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve data from localStorage
  const localStorageData = localStorage.getItem("movieData");

  // Check if data exists in localStorage
  if (localStorageData) {
    // Parse JSON data if necessary
    const movieList = JSON.parse(localStorageData);

    // Get reference to the section
    const section = document.querySelector(".movie_section");

    // Loop through each movie in the list
    movieList.forEach((movieData, index) => {
      // Create article element
      const article = document.createElement("article");
      article.classList.add("movie");

      // Populate article content
      article.innerHTML = `
          <h5>${movieData.title}</h5>
          <a href="#">
            <figure class="movie-content">
              <img src="${movieData.imageSrc}" alt="${
        movieData.title
      }" class="movie-photo" />
              <figcaption>${movieData.title}</figcaption>
            </figure>
            <ul>
              ${movieData.listItems.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </a>
        `;

      // Append article to the section
      section.appendChild(article);
    });
  }
});
