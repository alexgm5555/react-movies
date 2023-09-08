/* eslint-disable no-throw-literal */
/* eslint-disable array-callback-return */
/* eslint-disable no-cond-assign */
/* eslint-disable no-restricted-globals */
import { FC, useEffect, useState }from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './styles.scss';
import connectDB from '../../services/connectDB';

export const MovieList:FC = () => {
  const [movieList, setMovieList] = useState([]);
  const [errorDB, setErrorDB] = useState('');

  const connect: any = new connectDB();

  const getMovies = async () => {
    try {
      const data = await connect.get(`movies`);
      if(!data.message && data.error === 'Movie not found')
        throw 'No se encontraron peliculas.';
      console.log(data.message);
      
      setMovieList(data.message)
    } catch (error: any) {
      setErrorDB(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])
  

  return (
    <div className='movie-list-container'>
      {movieList && movieList.map((movie: any)=>(
        <div key={movie?.id} className='label-error'>
          <img className='img-movies' src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.image}`} alt="" />
          <p> {movie.title}</p>
        </div>
      ))}
      <label className='label-error'>
        {errorDB}
      </label>
    </div>
  );
};
