import React from 'react';
import { PrimaryProps } from './interfaces';
import './styles.css';

const Primary: React.FC<PrimaryProps> = (props): React.ReactElement => {
  return (
    <button
      className='primary-button'
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Primary;