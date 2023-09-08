import { FC, useEffect, useState }from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './styles.scss';
import connectDB from '../../services/connectDB';

export const Filter:FC = () => {
  const [textField, setTextField] = useState('ggggc');
  // const connect: any = new connectDB();
  const handleClic = ()=>{
    // connect.get('')
    console.log('clicked');
  }
  return (
    <div className='filter-container'>
      FilterList
      <TextField
        id='filte01'
        label='Filter'
        value={textField}
      />
      <br />
      <Button id="contained" variant='contained' onClick={handleClic}>search</Button>
      Otro texto
    </div>
  );
};