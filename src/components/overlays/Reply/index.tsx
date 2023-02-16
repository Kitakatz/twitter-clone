import React, { useContext } from 'react';
import { ReplyOverlayContext } from '../../../contexts/ReplyOverlay';
import { GiphyOverlayContext } from '../../../contexts/GiphyOverlay';
import Cards from '../../cards';
import { ReplyOverlayProps } from './interfaces';
import './styles.css';

const Reply: React.FC<ReplyOverlayProps> = (props): React.ReactElement | null=> {
  const { state, dispatch } = useContext(ReplyOverlayContext);
  const giphyOverlayContext = useContext(GiphyOverlayContext);

  const onClickHandler = () => {
    dispatch({ type: 'TOGGLE', payload: { tweetID: '', tweetPreview: '' } });
  };

  if (!state.isToggled) return null;

  // console.log(giphyOverlayContext.state);
  return (
    <div className='overlay-reply-container'>
      <div 
        className='overlay-reply'
        onClick={onClickHandler}
      >
      </div>
      { giphyOverlayContext.state.isToggled ? <Cards.Gifs /> : null }
      <Cards.Reply />
    </div>
  );
};

export default Reply;