const cardWrapper = document.querySelector('.content__cards');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

const films = [
    {
        id: 0,
        title: 'Марсианин 1',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: './movie.html',
        image: './img/movie.png'
    },
    {
        id: 1,
        title: 'Марсианин 2',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: './movie.html',
        image: './img/movie.png'
    },
    {
        id: 2,
        title: 'Марсианин 3',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: './movie.html',
        image: './img/movie.png'
    }
]

const render = (array) => {
    cardWrapper.innerHTML = '';

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href = "${item.link}" class = "content__cards__item">
                <div class = "content__cards__item__img" >
                <img src = "${item.image}" alt = "Карточка фильма">
                </div> 
                <div class = "content__cards__item__title">
                <h4> ${item.title}, </h4>
                <span> ${item.original} </span> 
                </div> 
                <p class = "content__cards__item__description"> ${item.category} </p> 
                <p class = "content__cards__item__pating"> ${item.rating} </p> 
            </a>
            `)
    })
}

searchButton.addEventListener('click', () => {
    render(films.filter((item) => item.title.includes(searchInput.value)));
});

render(films);