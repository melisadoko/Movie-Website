document.addEventListener("DOMContentLoaded", function () {
  // Retrieve favourites movies from localStorage
  const favouriteMovies = JSON.parse(localStorage.getItem("favourites")) || [];

  // Check if there is any favourite movie in Local Storage
  if (favouriteMovies.length !== 0) {
    // Get reference to the section
    const section = document.querySelector(".movie_section");

    // Loop through each movie in the list
    favouriteMovies.forEach(function (movieData) {
      // Create article element
      const article = document.createElement("article");
      article.classList.add("movie");

      // Populate article content
      article.innerHTML = `
            <h5>${movieData.type}</h5>
            <a href="movie.html" onclick="saveMovieNameLocalStorage(this)">
              <figure class="movie-content">
                <img src="${movieData.img}" alt="${movieData.title}" class="movie-photo" />
                <figcaption>${movieData.title}</figcaption>
              </figure>             
            </a>
          `;

      // Append article to the section
      section.appendChild(article);
    });
  }
});
