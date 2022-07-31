import { useState } from 'react'
import About from './components/pages/about'
import './App.css'
import Genres from './components/pages/genres';
import Main from './components/pages/main';
import Search from './components/pages/search';
import Navbar from './components/UI/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from './components/pages/notFoundPage';
import Card from './components/pages/card';




function App() {
  const [currentGenre, setCurrentGenre] = useState([35, 'Comedy'])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentFilm, setCurrentFilm] = useState(38)
  const [query, setQuery] = useState('')
  const refs = [
    ['Top movies', `https://api.themoviedb.org/3/movie/top_rated?api_key=b40bcd1b7a69127917daf2a39a52c832&language=en-US&page=${currentPage}`],
    [`https://api.themoviedb.org/3/discover/movie?api_key=b40bcd1b7a69127917daf2a39a52c832&language=en-US&sort_by=vote_average.desc&include_adult=true&include_video=false&page=${currentPage}&vote_count.gte=500&with_genres=${currentGenre[0]}&with_watch_monetization_types=flatrate`],
    [`https://api.themoviedb.org/3/search/movie?api_key=b40bcd1b7a69127917daf2a39a52c832&query=${query}&page=${currentPage}`]
  ]
  const [genres, setGenres] = useState([])

  return (
    <BrowserRouter>
      <div>
        <Navbar query={query} setQuery={setQuery} setCurrentPage={setCurrentPage} setCurrentGenre={setCurrentGenre} genres={genres} setGenres={setGenres} />
        <Routes>
          <Route path='/' element={<Main setCurrentFilm={setCurrentFilm} currentPage={currentPage} setCurrentPage={setCurrentPage} title={refs[0][0]} refer={refs[0][1]} />} />
          <Route path='/genres/:currentGenre' element={<Genres currentPage={currentPage} setCurrentPage={setCurrentPage} setCurrentFilm={setCurrentFilm} currentGenre={currentGenre} refer={refs[1][0]} setCurrentGenre={setCurrentGenre} genres={genres} />} />
          <Route path='/search/:query' element={<Search query={query} setCurrentFilm={setCurrentFilm} refer={refs[2]} currentPage={currentPage} setCurrentPage={setCurrentPage} setQuery={setQuery} />} />
          <Route path='/film/:id' element={<Card id={currentFilm} setCurrentFilm={setCurrentFilm} />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
