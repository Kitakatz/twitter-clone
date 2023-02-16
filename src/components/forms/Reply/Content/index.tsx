import React from 'react';
import { ContentProps } from './interfaces';
import './styles.css';

const Content: React.FC<ContentProps> = (props): React.ReactElement => {
  return (
    <div className='reply-preview-content'>
      <div className='handler-section'>
        <div className='handler'>AWS Amplify</div>
        <div className='replyTo'>@AWSAmplify</div>
        <div className='seperator'>·</div>
        <div className='timestamp'>Aug 2</div>
      </div>
      <div className='paragraph'>
        {props.tweet}
      </div>
      <div className='replying-to'>
        Replying to <a href=''>@AWSAmplify</a>
      </div>
    </div>
  );
};

export default Content;