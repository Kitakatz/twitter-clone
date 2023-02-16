import { LayoutGroupContext } from 'framer-motion';
import React, { useContext } from 'react';
import { GiphyOverlayActionType, GiphyOverlayContext } from '../../../contexts/GiphyOverlay';
import { ReplyOverlayContext } from '../../../contexts/ReplyOverlay';
import Forms from '../../forms';
import Icons from '../../icons';
import Layout from '../../layout';
import { ReplyCardProps } from './interfaces';
import './styles.css';

const Reply: React.FC<ReplyCardProps> = (): React.ReactElement => {
  const { dispatch } = useContext(ReplyOverlayContext);
    const giphyOverlayContext = useContext(GiphyOverlayContext);

  const onClickHandler = () => {
    dispatch({ type: 'TOGGLE', payload: { tweetID: '', tweetPreview: '' } });
    giphyOverlayContext.dispatch({ type: GiphyOverlayActionType.TOGGLE_RESET });
  };

  return (
    <div className="reply-card-container">
      <Layout.Row
        flexDirection='column'
      >
        <Layout.Column
          display='flex'
          alignItems='center'
          height={53}
        >
          <div 
            className='close'
            onClick={onClickHandler}
          >
            <Icons.Close />
          </div>
        </Layout.Column>
        <Layout.Column>
          <Forms.Reply />
        </Layout.Column>
      </Layout.Row>
    </div>
  );
};

export default Reply;
