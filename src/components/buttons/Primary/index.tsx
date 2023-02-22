import React from 'react';
import { PrimaryProps } from './interfaces';
import './styles.css';

const Primary: React.FC<PrimaryProps> = (props): React.ReactElement => {
  return (
    <button
      data-testid={props['data-testid']}
      className='primary-button'
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default Primary;