import React from 'react';
import './style.css';
import { HomeProps } from './interfaces';
import useWindowSize from '../../../hooks/useWindowDimensions';

const Home: React.FC<HomeProps> = (props): React.ReactElement => {
  const windowSize = useWindowSize(true);

  return (
    <div className='container' style={{ height: windowSize.height }}>{ props.children }</div>
  );
};

export default Home;