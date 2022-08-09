import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import Cards from "./../components/cards/Cards"
import Pagination from "./../components/pagination/pagination"

const Genres = ({ currentPage, setCurrentPage, setCurrentFilm, currentGenre, refer, setCurrentGenre, genres }) => {
    let navigate = useNavigate()
    const params = useParams().currentGenre
    useEffect(() => {
        if (currentGenre[1] !== params && genres.length !== 0) {
            const findGenreId = genres.find(el => el[0] == params)
            findGenreId ? setCurrentGenre([findGenreId[1], params]) : navigate('*')
        }
    }, [genres])

    return (
        <div>
            <Cards
                setFilm={setCurrentFilm}
                refer={refer} title={currentGenre[1]} />
            <Pagination refer={refer} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>

    )
}

export default Genres