import React from 'react';
import { ContentProps } from './interfaces';
import './style.css';

const Content: React.FC<ContentProps> = (props): React.ReactElement => {
  return (
    <div className='content'>
      <div className='handler-section'>
        <div className='handler'>AWS Amplify</div>
        <div className='replyTo'>@{props.tweet.author}</div>
        <div className='seperator'>·</div>
        <div className='timestamp'>Aug 2</div>
      </div>
      <div className='paragraph'>
        {props.tweet.tweet}
      </div>
    </div>
  );
};

export default Content;