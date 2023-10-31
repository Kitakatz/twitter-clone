import React from 'react';
import { LogoutProps } from './interfaces';
import './styles.css';

const Logout: React.FC<LogoutProps> = (props): React.ReactElement => {
  return (
    <button
      data-testid={props['data-testid']}
      className='logout-button'
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default Logout;