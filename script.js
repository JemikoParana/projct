const numberOfFilms = +prompt("How many movies are you watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("The last viewed movie?", ""),
  b = prompt("How much like it for you?", ""),
  c = prompt("The last viewed movie?", ""),
  d = prompt("How much like it for you?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);