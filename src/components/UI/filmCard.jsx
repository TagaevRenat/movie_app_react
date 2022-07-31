import { useState, useEffect } from 'react'
import { getFilmInfo } from '../servise/getFilmInfo'
import Loader from "./loader/loader"
import Error from './error'

const FilmCard = ({ id }) => {
    const [film, setFilm] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                let responseFilm = await getFilmInfo(id)
                setFilm(responseFilm)
            }
            catch (e) {
                console.log(e)
                setError(e)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [id])

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <Error />
    }

    return (

        <div className="countainer">
            <div className="row">
                <div className="col-lg-2 col-s-0 col-xs-0"></div>
                <div className="col-lg-8 col-s-12 col-xs-12">
                    <div className="card text-center">
                        <div className="card-header">
                            {film.title}
                        </div>
                        <div className="card-body row">
                            <div className="col-xs-12 col-md-6 col-lg-6">
                                <div className="col-10">
                                    <div className="card border border-secondary" >
                                        <img src={film.posterPath == null ? 'https://tagaevrenat.github.io/movieApp/posterNotFound.jpg' : film.posterPath} id={film.title} className="card-img-top" alt={film.posterPath} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-6">
                                <div className="genreInfo info">Genres: {film.genres}</div>
                                <div className="languageInfo info">Original languague: {film.originalLanguage}</div>
                                <div className="popularityInfo info">Popularity: {film.popularity}</div>
                                <div className="releaseDateInfo info">Release date: {film.realeseDate} </div>
                                <div className="voteAverageInfo info">Vote average: {film.voteAverage}</div>
                                <div className="voteCountInfo info">Vote count: {film.voteCount}</div>
                                <div className="budgetInfo info">Budget: {film.budget}</div>
                                <div className="statusInfo info">Status: {film.status}</div>
                                <div className="countryInfo info">Country: {film.country}</div>
                                <div className="overviewInfo info">Overview: {film.overview}</div>

                            </div>
                        </div>
                        <div className="card-footer text-muted">
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-s-0 col-xs-0"></div>
            </div>
        </div>
    )
}

export default FilmCard