const URL = "https://omdbapi.com/";
const API_KEY = "fc1fef96";

let movieSearch = document.getElementById("form");
let movieSearchBox = document.getElementById("search-input");

window.onload = () => {
  movieSearchBox.value = "";
};

movieSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  const Title = movieSearchBox.value;
  const FULL_URL = `${URL}?t=${Title}&apikey=${API_KEY}`;

  getMovieData(FULL_URL).then((res) => {
    showMovie(res);
  });
});

let getMovieData = (URL) => {
  let moviePromis = fetch(URL);
  return moviePromis
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

let showMovie = (moviesData) => {
  if (moviesData.Error === "Movie not found!") {
    document.getElementById("result-grid").innerHTML = "";
    document.getElementById("not-found").innerHTML = ` 
    <div class="movie-info movie-notfound">
        <h3 class="">Opps! Movie not found!</h3>
        <span>The Movie you were looking for doesn't exist.</span>
      </div>
    `;
  } else {
    document.getElementById("not-found").innerHTML = "";
    document.getElementById("result-grid").innerHTML = `
    <!-- movie information here -->
            <div class="movie-poster">
              <img src="${moviesData["Poster"]}" alt="movie poster" />
            </div>
            <div class="movie-info">
              <h3 class="movie-title">${moviesData["Title"]}</h3>
              <ul class="movie-misc-info">
                <li class="year">Year: ${moviesData["Year"]} </li>
                 ${
                   moviesData["Rated"] == "Not Rated" ||
                   moviesData["Rated"] == "N/A"
                     ? ""
                     : `<li class="rated">Ratings: ${moviesData["Rated"]} </li>`
                 } 
                <li class="released">Released: ${moviesData["Released"]} </li>
              </ul>
              <p class="genre"><b>Genre:</b> ${moviesData["Genre"]}</p>
              <p class="writer">
                <b>Writer:</b> ${moviesData["Writer"]}
              </p>
              <p class="actors">
                <b>Actors: </b> ${moviesData["Actors"]}
              </p>
              <p class="plot">
                <b>Plot:</b>  ${moviesData["Plot"]}
              </p>
              <p class="language"><b>Language:</b> ${
                moviesData["Language"]
              } </p>
              <p class="awards">
                <b><i class="fas fa-award"></i></b>  ${
                  moviesData["Awards"] === "N/A" ? "" : moviesData["Awards"]
                }
              </p>
            </div>
    
    `;
  }
};