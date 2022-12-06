import React from 'react';
import { RowProps } from './interfaces';
import './styles.css';

const Row:React.FC<RowProps> = (props): React.ReactElement => {
  const dynamicStyles: React.CSSProperties = {
    ...props
  };


  return (
    <div 
      className='row-container'
      style={dynamicStyles}
    >
      { props.children }
    </div>
  );
};

export default Row;