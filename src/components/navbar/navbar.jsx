import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import getGenresCollection from '../servise/getGenresCollection'
import Error from '../error/error'
import Loader from '../loader/loader'

const Navbar = ({ setCurrentGenre, setQuery, setCurrentPage, genres, setGenres }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [localQuery, setLocalQuery] = useState('')
    let navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                let response = await getGenresCollection()
                setGenres(response)
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
    }, [])

    if (error) {
        return <Error />
    }

    if (loading) {
        return <Loader />
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
            <div className="container-fluid">
                <Link className="navbar-brand" aria-current="page" to="/" onClick={() => setCurrentPage(1)}>RMOVIES</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Genre collections
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {genres.map((item) =>
                                    <li key={item[1]}>
                                        <Link className="dropdown-item" id={item[1]} onClick={() => {
                                            setCurrentGenre([item[1], item[0]])
                                            setCurrentPage(1)
                                        }} to={`/genres/${item[0]}`}>{item[0]}</Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                        <Link className="nav-link" aria-current="page" to="/about">About</Link>
                    </ul>

                    <form className="d-flex"
                        onSubmit={(e) => {
                            e.preventDefault()
                            setQuery(localQuery)
                            setCurrentPage(1)
                            navigate(`/search/${localQuery}`)
                        }}

                    >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={
                            (e) => {
                                e.stopPropagation()
                                setLocalQuery(e.target.value)
                            }
                        } />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div >
        </nav >
    )
}

export default Navbar