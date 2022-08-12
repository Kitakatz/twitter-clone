import React from 'react';
import { ContentProps } from './interfaces';
import './style.css';

const Content: React.FC<ContentProps> = (): React.ReactElement => {
  return (
    <div className='content'>
      <div className='handler-section'>
        <div className='handler'><a href='#'>AWS Amplify</a></div>
        <div className='replyTo'>@AWSAmplifiy</div>
        <div className='seperator'> · </div>
        <div className='timestamp'>Aug 2</div>
      </div>
      <div className='paragraph'>
        NEW Amplify Flutter Authentication support for Web and Desktop (Developer Preview) 🙌🏻🙌🏻
      </div>
      <div className='paragraph'>
        With the latest release from AWS Amplify Flutter, you can set up a fully functional authentication flows for Mobile, Web and Desktop 📱🕸🖥
      </div>
    </div>
  );
};

export default Content;