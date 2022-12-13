import React, { useContext, useState } from 'react';
import { ReplyOverlayContext } from '../../../contexts/ReplyOverlay';
import { TweetsContext } from '../../../contexts/Tweets';
import { Tweet } from '../../../data/tweets';
import Buttons from '../../buttons';
import Layout from '../../layout';
import { v4 as uuid } from 'uuid';
import { ReplyFormProps, ReplyFormState } from './interfaces';
import './styles.css';

const Reply: React.FC<ReplyFormProps> = (props): React.ReactElement => {
  const { state: tweetState, dispatch } = useContext(TweetsContext);
  const { state: replyOverlayState, dispatch: replyOverlayDispatch } = useContext(ReplyOverlayContext);
  const [state, setState] = useState<ReplyFormState>({
    value: ''
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
   const value = event.target.value;

   setState({ value: value });
  };

  const onSubmitHandler = ( ): void => {
    const foundTweet = tweetState.tweets.find((tweet) => tweet.id === replyOverlayState.tweetID);

    foundTweet?.replies.push({
      id: uuid(),
      author: 'Kitakat',
      tweet: state.value
    });

    console.log('foundTweet', foundTweet);
    console.log('Tweets', [...tweetState.tweets, foundTweet] );

    dispatch({ type: 'updateTweets', payload: [...tweetState.tweets, foundTweet] });
    replyOverlayDispatch({ type: 'TOGGLE', payload: { tweetID: foundTweet?.id } });
  };

  return (
    <div className="form-reply-container">
      <Layout.Row
        flexDirection='column'
        paddingBottom={10}
      >
        <Layout.Column
          marginBottom={10}
        >
          <textarea 
            className="reply-textarea" 
            placeholder="Tweet your reply" 
            value={state.value}
            onChange={onChangeHandler}
          />
        </Layout.Column>
        <Layout.Column
          display='flex'
          justifyContent='end'
        >
          <Buttons.Primary 
            label='Reply' 
            onClick={onSubmitHandler}
          />
        </Layout.Column>
      </Layout.Row>
    </div>
  );
};

export default Reply;