import axios from 'axios';

export default async function getGenresCollection() {
    let genres = []
    const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=b40bcd1b7a69127917daf2a39a52c832&language=en-US")
    for (let i = 0; i < 19; i++) {
        genres.push([response.data.genres[i].name, response.data.genres[i].id])
    }
    return genres
}
