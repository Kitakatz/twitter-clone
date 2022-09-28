import React, { useEffect } from 'react';
import Icons from '../../../../icons';
import useLikeHook from './hooks';
import { LikeProps } from "./interface";
import './styles.css';


const Like: React.FC<LikeProps> = (): React.ReactElement | null => {
  const { state, onClickHandler, componentDidMountHandler } = useLikeHook();

  useEffect(() => {
    componentDidMountHandler();
  }, []);

  if ( !state.counter ) return null;

  return (
    <div
      data-testid='like-button'
      onClick={onClickHandler}
      className='like-container'
    >
      <div className='heart-container'>
        <Icons.Heart isToggled={state.isLiked} />
      </div>
      <div data-testid='like-counter' className='like-counter'>{state.counter}</div>
    </div>
  );
};

export default Like;