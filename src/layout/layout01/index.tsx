/* eslint-disable react-hooks/exhaustive-deps */
import { FC }from 'react';

import { MovieList } from '../../components/MovieList';
import { Filter } from '../../components/Filter';

import './styles.scss';

export const Layout:FC = () => {
  return (
    <div className='layout-container'>
      <div className='panel-left'>
        <MovieList />
      </div>
      <div className='panel-right'>
        <Filter />
      </div>
    </div>
  );
};
