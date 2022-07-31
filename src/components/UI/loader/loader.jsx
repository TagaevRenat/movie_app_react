import './../loader/loader.css'
const Loader = () => {
    return (
        <div className='loader'>
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader