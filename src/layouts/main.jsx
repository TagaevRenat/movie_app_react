import Cards from "./../components/cards/Cards"
import Pagination from "./../components/pagination/pagination"

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