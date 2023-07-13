const labelTitle = document.querySelector('.title')
const labelDesc = document.querySelector('.desc')
const labelLang = document.querySelector('.languages')

const labelGenres = document.querySelector('.genres')
const labelRating = document.querySelector('.rating')
const labelStatus = document.querySelector('.status')
const labelRevenue = document.querySelector('.revenue')

const containerCompany = document.querySelector('.company')
const containerCountry = document.querySelector('.countries')
const containerIframe = document.querySelector('iframe')

const btnAdd = document.querySelector('.add')

const YOUTUBE = `https://www.youtube.com/embed/`
const URL_SETING = `?autoplay=1&mute=1&loop=1&controls=0&rel=0&showinfo=0&modestbranding=1`

const movieDetail = JSON.parse(localStorage.getItem('movie'))
console.log(movieDetail);

let wishlist = []

const showTrailer = async (id) => {
    const res = await fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=2bf24b97167c68a8a60b6e158306e2b9`)
    const data = await res.json()
    containerIframe.setAttribute('src', `https://www.youtube.com/embed/${data.results[0].key}${URL_SETING}`)
    console.log(containerIframe.getAttribute('src'));
}

const showDetail = () => {
    labelTitle.textContent = movieDetail.original_title
    labelDesc.textContent = movieDetail.overview
    movieDetail.spoken_languages.forEach(lang => {
        labelLang.textContent = lang.name
    })
    movieDetail.genres?.forEach(gen => {
        labelGenres.textContent = gen.name + " "
    })
    labelRating.textContent = Math.round(movieDetail.vote_average)
    labelStatus.textContent = movieDetail.status
    labelRevenue.textContent = movieDetail.revenue
    
    movieDetail.production_companies.forEach(data => {
        containerCompany.innerHTML += `
        <div class="card">
            <img src=${`https://image.tmdb.org/t/p/w500/${data.logo_path}`} alt="">
            <span>${data.name}</span>
        </div>
        `
    })
    movieDetail.production_countries.forEach(data => {
        containerCountry.innerHTML += `
        <ul>
            <li>${data.name}</li>
        </ul>
        `
    })
}
showTrailer(movieDetail.id)
showDetail()

btnAdd.addEventListener('click', function(e) {
    wishlist.push(movieDetail)
    console.log(wishlist);
    const demo = JSON.parse(localStorage.getItem('wishlist'))
    demo?.forEach(movie => {
        wishlist.push(movie)
    })
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
})