import { useEffect, useState } from 'react';
import { Button, Container, Input, Pagination } from 'rsuite';
import axios from 'axios';
import style from './Axios.module.scss'

const Card = ({movie}) => (
  <div className={style.card}>
    <div>
      <img src={movie.Poster}/>
    </div>
    <div style={{marginTop: '10px'}}>
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
  const [activePage, setActivePage] = useState(0);
  const [result, setResult] = useState(
    {
    movies: [],
    total: 0
  })

  const loadMovies = (page) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=11770bcf&page=${page}`;
    setLoading(true)

    axios.get(url)
      .then((response) => {
        setResult({
          movies: response.data.Search,
          total: response.data.totalResults
        })
        setLoading(false)
      })
  }

  useEffect(() => {
      if (activePage > 0) {
        loadMovies(activePage)
      }
    }
  , [activePage]);


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
              {result.movies.map((movie) => (<Card key={movie.imdbID} movie={movie}/>))}
            </div>
        {result.movies.length > 0 && (
          <Pagination
            prev
            last
            next
            first
            size="md"
            total={result.total}
            limit={10}
            activePage={activePage}
            onChangePage={setActivePage}
          />
        )
        }
      </Container>
    </div>
  )
}

export default AxiosRoute
