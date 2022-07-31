import Cards from "../UI/Cards"
import Pagination from "../UI/pagination/pagination"

const Main = ({ setCurrentFilm, currentPage, setCurrentPage, title, refer }) => {
    return (
        <div>
            <Cards
                setFilm={setCurrentFilm}
                refer={refer} title={title} />
            <Pagination refer={refer} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>

    )
}

export default Main