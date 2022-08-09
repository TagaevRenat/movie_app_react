import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import Cards from "./../components/cards/Cards"
import Pagination from "./../components/pagination/pagination"

const Search = ({ query, setCurrentFilm, refer, currentPage, setCurrentPage, setQuery }) => {

    let navigate = useNavigate()
    const params = useParams().query
    useEffect(() => {
        if (query !== params) {
            setQuery(params)
        }
    }, [query])

    return (
        <div>
            {query ?
                <div>
                    <Cards
                        setFilm={setCurrentFilm}
                        refer={refer} title={query}
                    />
                    <Pagination refer={refer} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
                :
                <div className='fs-1 text-center'>Sorry, no results, please enter some text to find, or change the query :(</div>
            }

        </div>
    )
}

export default Search