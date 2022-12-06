import React from 'react';
import { ColumnProps } from './interfaces';
import './styles.css';

const Column: React.FC<ColumnProps> = (props): React.ReactElement => {
    const dynamicStyles: React.CSSProperties = {
      ...props
    };

  return (
    <div
      className='column-container'
      style={dynamicStyles}
    >
      { props.children }
    </div>
  );
};

export default Column;