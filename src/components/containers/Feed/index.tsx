import React from 'react';
import './style.css';
import { FeedProps } from './interfaces';

const Feed: React.FC<FeedProps> = (props): React.ReactElement => {
  return (
    <div className='container'>{ props.children }</div>
  );
};

export default Feed;