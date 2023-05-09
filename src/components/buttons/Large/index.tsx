import React from 'react';
import { LargeProps } from './interfaces';
import './styles.css';

const Large: React.FC<LargeProps> = (props): React.ReactElement => {
  return (
    <button
      data-testid={props['data-testid']}
      className='large-button'
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default Large;