import React, { useContext } from 'react';
import { ReplyOverlayContext } from '../../../../../contexts/ReplyOverlay';
import Icons from '../../../../icons';
import { ReplyProps } from './interface';
import './styles.css';

const Reply: React.FC<ReplyProps> = (props):React.ReactElement => {
  const { dispatch } = useContext(ReplyOverlayContext);

  const onClickHandler = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    dispatch({ type: 'TOGGLE', payload: props.tweetID });
  };

  return (
    <div 
      data-testid='reply-button'
      className='reply-container'
      onClick={onClickHandler}
    >
      <div className='comment-container'>
        <Icons.Comments isToggled={true}/>
      </div>

    </div>
  );
};

export default Reply;