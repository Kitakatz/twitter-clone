import React, { useContext } from 'react';
import { ReplyOverlayContext } from '../../../contexts/ReplyOverlay';
import Cards from '../../cards';
import { ReplyOverlayProps } from './interfaces';
import './styles.css';

const Reply: React.FC<ReplyOverlayProps> = (props): React.ReactElement | null=> {
  const { state, dispatch } = useContext(ReplyOverlayContext);

  const onClickHandler = () => {
    dispatch({ type: 'TOGGLE' });
  };

  if (!state.isToggled) return null;

  return (
    <div className='overlay-reply-container'>
      <div 
        className='overlay-reply'
        onClick={onClickHandler}
      >
      </div>
      <Cards.Reply />
    </div>
  );
};

export default Reply;