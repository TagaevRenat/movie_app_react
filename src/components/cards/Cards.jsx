import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCards } from '../../servise/getFilmInfo'
import Loader from "../loader/loader"
import Error from '../error/error'

const Cards = ({ setFilm, refer, title }) => {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                let response = await getCards(refer)
                let cards = []
                for (let i = 0; i < response.data.results.length; i++) {
                    cards.push([response.data.results[i].poster_path, response.data.results[i].id, response.data.results[i].original_title])
                }
                setCards(cards)
            }
            catch (e) {
                console.log(e.message)
                setError(e)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [refer])

    if (cards.length == 0) {
        return <div className='fs-1 text-center'>No results found</div>
    }

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <Error />
    }

    return (
        <div className="countainer">
            <p className="fs-1 text-center"><b>{title}</b></p>
            <div className='row'>
                {cards.map((item) =>
                    <div className='col-xs-12 col-md-5 col-lg-3' onClick={(e) => {
                        e.preventDefault()
                        setFilm(item[1])
                        navigate(`/film/${item[1]}`)
                    }
                    } key={item}>
                        <div className="card border border-secondary"  >
                            {item[0] ?
                                <img src={`https://image.tmdb.org/t/p/w500${item[0]}`} id={item[1]} className="card-img-top" alt={item[2]}></img>
                                : <div className='fs-3 text-center'>{item[2]}</div>
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Cards