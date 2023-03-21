import { useEffect, useState } from 'react';
import { Button, Container, Input, Pagination } from 'rsuite';
import axios from 'axios';
import style from './Axios.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { oksanaActions } from '../../../redux/action/oksanaActions';

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
  const dispatch = useDispatch()
  const store = useSelector(state => state.oksanaReducer)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const loadMovies = (page) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=11770bcf&page=${page}`;
    setLoading(true)

    axios.get(url)
      .then((response) => {
        dispatch(oksanaActions.setMovies({
          data: response.data.Search || [],
          total: +response.data.totalResults,
          page: page
        }))
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
              onClick={() => loadMovies(1)}
              appearance="primary"
            >
              Search
            </Button>
          </div>
            <div className={style.cardList}>
              {store.movies.data.map((movie) => (<Card key={movie.imdbID} movie={movie}/>))}
            </div>
        {store.movies.data.length > 0 && (
          <Pagination
            prev
            last
            next
            first
            size="md"
            total={store.movies.total}
            limit={10}
            activePage={store.movies.page}
            onChangePage={loadMovies}
          />
        )
        }
      </Container>
    </div>
  )
}

export default AxiosRoute
