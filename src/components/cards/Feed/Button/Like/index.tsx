import React, { useState } from 'react';
import { LikeProps, LikeState } from "./interface";
import './styles.css';


const Like: React.FC<LikeProps> = (): React.ReactElement => {
  const [state, setState] = useState<LikeState>({
    counter: 0,
    isLiked: false
  });

  const onClickHandler = () => {
    const countering = (isLiked: boolean, counter: number): number => !isLiked ? counter + 1 : counter - 1;;

    setState(prevState => ({
      counter: countering(prevState.isLiked, prevState.counter),
      isLiked: !prevState.isLiked
    }));
  };

  return (
    <div 
    data-testid='like-button'
    onClick={onClickHandler}
    className='like-container'
    > 
      <div style={{ width: 20, height: 20 }}>
        <svg data-testid='heart-icon' className={!state.isLiked ? 'unliked andrew' : 'liked andrew'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={!state.isLiked ? 'black' : 'red'}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </div>
      <div data-testid='like-counter' style={{ width:20 }}>{ state.counter }</div>
    </div>
  );
};

export default Like;