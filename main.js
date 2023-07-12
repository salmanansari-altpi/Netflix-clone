const container = document.querySelectorAll(".d");
const containerPopular = document.querySelector(".popular");
const containerTop = document.querySelector(".top-rated");
const containerUpcoming = document.querySelector(".upcoming");

const heroImg = document.querySelector(".hero-img");
const labelTitle = document.querySelector(".title");
const labelDesc = document.querySelector(".desc");

const KEY = `?api_key=2bf24b97167c68a8a60b6e158306e2b9`;
const TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmYyNGI5NzE2N2M2OGE4YTYwYjZlMTU4MzA2ZTJiOSIsInN1YiI6IjY0YTdkZmJiZjA1NmQ1MDBhZDA5N2M1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2TdqjxJdYLgM0lFon6FYcb3F1dwEb1z2JbE3cDGtbSU`;

const URL = `https://api.themoviedb.org/3/movie/`;
const IMAGE_URL = `https://image.tmdb.org/t/p/w500/`;

let popular = [];
let upcoming = [];
let topRated = [];
let wishlist = [];

const fetchMovie = async (type) => {
  const res = await fetch(URL + type + KEY);
  const data = await res.json();
  if (type === "popular") popular.push(...data.results);
  else if (type === "top_rated") topRated.push(...data.results);
  else if (type === "upcoming") upcoming.push(...data.results);
};

fetchMovie("popular");
fetchMovie("top_rated");
fetchMovie("upcoming");

setTimeout(() => {
  showPopularMovie(containerPopular, popular);
  showPopularMovie(containerTop, topRated);
  showPopularMovie(containerUpcoming, upcoming);
}, 1000);

async function changeBanner() {
  const res = await fetch(URL + "popular" + KEY);
  const data = await res.json();
  const movieData = data.results[Math.floor(Math.random() * 20) + 1];
  heroImg.setAttribute("src", `${IMAGE_URL}${movieData.poster_path}`);
  labelTitle.textContent = movieData.original_title;
  labelDesc.textContent = movieData.overview.slice(0, 200).padEnd(3, "...");
}
changeBanner();

// function showPopularMovie(arrName) {
//   arrName.forEach((data) => {
//     containerInner.innerHTML += `
//     <div class="card">
//         <img src=${IMAGE_URL + data.poster_path} alt="">
//     </div>
//     `;
//   });
// }

function showPopularMovie(container, arrName) {
  const child = container.children[0].children[1];
  arrName.forEach((data) => {
    child.innerHTML += `
    <div class="card" >
        <img src=${IMAGE_URL + data.poster_path} alt=${data.id}>
    </div>
    `;
  });
}

// ADD TO WISHLIST
// containerPopular.addEventListener("click", async function (e) {
//   const movie = e.target;
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${movie.alt}${KEY}`
//   );
//   const data = await res.json();
//   wishlist.push(data);
//   localStorage.setItem("wishlist", JSON.stringify(wishlist));
// });

// containerTop.addEventListener("click", async function (e) {
//   const movie = e.target;
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${movie.alt}${KEY}`
//   );
//   const data = await res.json();
//   wishlist.push(data);
//   localStorage.setItem("wishlist", JSON.stringify(wishlist));
// });

// containerUpcoming.addEventListener("click", async function (e) {
//   const movie = e.target;
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${movie.alt}${KEY}`
//   );
//   const data = await res.json();
//   wishlist.push(data);
//   localStorage.setItem("wishlist", JSON.stringify(wishlist));
// });

// ADD TO WISHLIST
container.forEach((cont) => {
  cont.addEventListener("click", async function (e) {
    const movie = e.target;
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.alt}${KEY}`
    );
    const data = await res.json();
    wishlist.push(data);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  });
});
