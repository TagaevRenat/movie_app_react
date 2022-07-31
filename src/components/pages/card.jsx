import FilmCard from "../UI/filmCard"
import { useParams } from 'react-router-dom'
import { useEffect } from "react"

const Card = ({ id, setCurrentFilm }) => {
    const refer = useParams().id
    useEffect(() => {
        if (id !== refer) {
            setCurrentFilm(refer)
        }
    }, [])

    return (
        <FilmCard id={id} />
    )
}

export default Card