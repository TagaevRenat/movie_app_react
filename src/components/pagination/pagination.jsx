import { useState, useEffect } from 'react'
import './pagination.css'
import { getCards } from '../../servise/getFilmInfo'

const Pagination = ({ refer, currentPage, setCurrentPage }) => {
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                let response = await getCards(refer)
                setTotalPages(response.data.total_pages)
                setCurrentPage(response.data.page)
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
    }, [refer])


    let pagesArray = []
    for (let i = currentPage - 3; i < currentPage; i++) {
        if (i > 0) {
            pagesArray.push(i)
        }
    }
    for (let i = currentPage; i < currentPage + 4; i++) {
        if (i < totalPages + 1) {
            pagesArray.push(i)
        }
    }

    if (loading) {
        return null
    }

    if (error) {
        return null
    }

    return (
        <div className='pagination'>
            <div className="btn-group me-2" role="group" aria-label="Second group">
                {pagesArray.map((i) => <button key={i} type="button" className={i == currentPage ? 'btn btn-secondary active' : 'btn btn-secondary'} onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage(i)
                }}>{i}</button>)}

            </div>
        </div>
    )
}

export default Pagination