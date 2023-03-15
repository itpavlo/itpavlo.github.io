import { useState } from 'react';
import { Button, Container, Input } from 'rsuite';
import axios from 'axios';
import style from './Axios.module.scss'

const Card = ({movie}) => (
  <div className={style.card}>
    <div>
      <img src={movie.Poster}/>
    </div>
    <div>
      {movie.Title}
    </div>
    <div>
      {movie.Year}
    </div>
  </div>
)

const AxiosRoute = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  const loadMovies = () => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=11770bcf`;
    setLoading(true)

    axios.get(url)
      .then((response) => {
        setMovies(response.data.Search)
        setLoading(false)
      })
  }

  return (
    <div>
      <Container>
         <div className={style.search}>
            <Input
              style={{width: '90%'}}
              value={search}
              onChange={(e) => setSearch(e)}
              placeholder="Search movie"
            />
            <Button
              loading={loading}
              onClick={loadMovies}
              appearance="primary"
            >
              Search
            </Button>
          </div>
            <div className={style.cardList}>
              {movies.map((movie) => (<Card key={movie.imdbID} movie={movie}/>))}
            </div>
      </Container>
    </div>
  )
}

export default AxiosRoute
