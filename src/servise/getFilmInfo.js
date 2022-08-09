import axios from 'axios';

export async function getFilmInfo(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b40bcd1b7a69127917daf2a39a52c832&language=en-US`)
    const regExp = /null/
    const film = {
        title: response.data.title,
        overview: response.data.overview,
        genres: response.data.genres.map(el => el.name).join(', '),
        posterPath: regExp.test(response.data.poster_path) ? 'https://tagaevrenat.github.io/movieApp/posterNotFound.jpg' : `https://image.tmdb.org/t/p/w500${response.data.poster_path}`,
        originalLanguage: response.data.original_language,
        popularity: response.data.popularity,
        realeseDate: response.data.release_date,
        voteAverage: response.data.vote_average,
        voteCount: response.data.vote_count,
        budget: response.data.budget,
        status: response.data.status,
        country: response.data.production_countries.length !== 0 ? response.data.production_countries[0].name : ''
    }
    return film
}

export async function getCards(url) {
    const response = await axios.get(url)
    return response
}
