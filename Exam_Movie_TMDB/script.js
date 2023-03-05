const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '19dca9034c3696b7ba3e9da47277db87';

// let searchBtn = document.querySelector('.searchBtn');
// let searchMovie = document.querySelector('.searhMovie');
// let XBtn = document.querySelector('.XBtn');

// searchBtn.addEventListener('click', ()=> {
// searchMovie.style.height = 250 + 'px';
// searchBtn.style.display = 'block';
// XBtn.style.display = 'none';
// });

$('.searchBtn').click(function() {
    $('.searchMovie').slideDown(250);
    $('.searchBtn').hide();
    $('.XBtn').show();
})