import React from 'react';
import { HomeProps } from './interfaces';
import './style.css';

const Home: React.FC<HomeProps> = (props): React.ReactElement => {
  return (
    <div className='container'>{ props.children }</div>
  );
};

export default Home;