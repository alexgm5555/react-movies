/* eslint-disable no-cond-assign */
/* eslint-disable no-restricted-globals */
import { FC, useEffect, useState }from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './styles.scss';
import connectDB from '../../services/connectDB';

export const Filter:FC = () => {
  const [textField, setTextField] = useState('');
  const [errorDB, setErrorDB] = useState('');

  const connect: any = new connectDB();

  const handleClick = async (type: 'name' | 'order' | 'genre' | '')=>{
    const data = await connect.get(`movies?${type}=${textField}`);
    if(!data.message && data.error === 'Movie not found')
      setErrorDB('No se encontro la pelicula.')
    console.log(data);
  }

  const handleChange = async (event: any)=>{
    setTextField(event.target.value);
  }

  return (
    <div className='filter-container'>
      FilterList
      <TextField
        id='filte01'
        label='Filtrar pelicula por:'
        onChange={handleChange}
      />
      <br />
      <Button
        className='button-filter'
        id="contained"
        variant='contained'
        onClick={() => handleClick('name')}>
          nombre
      </Button>
      <br />
      <Button
        className='button-filter'
        id="contained"
        variant='contained'
        onClick={() => handleClick('genre')}>
          genero
      </Button>
      <br />
      <Button
        className='button-filter'
        id="contained"
        variant='contained'
        onClick={() => handleClick('order')}>
          Ordenar Peliculas
      </Button>
      <label className='label-error'>
        {errorDB}
      </label>
      
    </div>
  );
};
