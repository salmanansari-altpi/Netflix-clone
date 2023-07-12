const container = document.querySelector('.inner')
const wishlist = JSON.parse(localStorage.getItem('wishlist'))

console.log(wishlist);

const showWishlist = () => {
    wishlist?.map(data => {
        container.innerHTML += `
        <div class="card">
            <img src=${`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt=${data.id}>
            <div class="detail">
                <h2>${data.original_title}</h2>
            </div>
        </div>
        `
    })
}

showWishlist()
