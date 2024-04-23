//Eventi thirret pasi ngarkohet dokumenti HTML
document.addEventListener("DOMContentLoaded", function () {
  // Marrim lista e filmove të preferuar nga localStorage
  const favouriteMovies = JSON.parse(localStorage.getItem("favourites")) || [];

  // Kontrollojme nese ka filma te preferuar
  if (favouriteMovies.length !== 0) {
    // Get reference to the section
    const section = document.querySelector(".movie_section");

    // iterojme per cdo film te preferuar
    favouriteMovies.forEach(function (movieData) {
      // Krijojme element article
      const article = document.createElement("article");
      article.classList.add("movie");

      // Mbushim permbajtjen me filmat e preferuar
      article.innerHTML = `
            <h5>${movieData.type}</h5>
            <a href="movie.html" onclick="saveMovieNameLocalStorage(this)">
              <figure class="movie-content">
                <img src="${movieData.img}" alt="${movieData.title}" class="movie-photo" />
                <figcaption>${movieData.title}</figcaption>
              </figure>             
            </a>
          `;

      // Append elementin article te krijuar
      section.appendChild(article);
    });
  }
});
