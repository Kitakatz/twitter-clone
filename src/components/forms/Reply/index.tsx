import React, { useContext, useEffect, useRef, useState } from 'react';
import { ReplyOverlayContext } from '../../../contexts/ReplyOverlay';
import { TweetsContext } from '../../../contexts/Tweets';
import Buttons from '../../buttons';
import Layout from '../../layout';
import { ReplyFormProps, ReplyFormState } from './interfaces';
import { v4 as uuid } from 'uuid';
import './styles.css';
import Icons from '../../icons';
import Cards from '../../cards';
import Content from './Content';
import Timeline from './Timeline';
import Preview from './Preview';
import Footer from './Footer';
import { GiphyOverlayActionType, GiphyOverlayContext } from '../../../contexts/GiphyOverlay';

const Reply: React.FC<ReplyFormProps> = (props): React.ReactElement => {
  const { state: tweetState, dispatch } = useContext(TweetsContext);
  const { state: replyOverlayState, dispatch: replyOverlayDispatch } = useContext(ReplyOverlayContext);
  const giphyOverlayContext = useContext(GiphyOverlayContext);
  const [state, setState] = useState<ReplyFormState>({
    value: '',
    file: null,
    previewUrl: ''
  });
  const imageFileRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const value: string = event.target.value;

    setState(prevState => ({ 
      ...prevState, 
      value: value 
    }));
  };

  const onChangeFileHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = event.target.files ? event.target.files[0] : null;

    if (!event.target.files) return;

    const url = URL.createObjectURL(event.target.files[0]);
    
    giphyOverlayContext.dispatch({ type: GiphyOverlayActionType.TOGGLE_RESET })
    setState(prevState => ({ 
      ...prevState, 
      file: file, 
      previewUrl: url 
    }));
  };

  const onClickFileHandler = (): void => {
    imageFileRef.current?.click();
  };

  const onClickGifHandler = (): void => {
    giphyOverlayContext.dispatch({ type: GiphyOverlayActionType.TOGGLE });
  };

  const onClickClosePreview = (): void => {
    if (!imageFileRef.current) return;

    setState(prevState => ({
      ...prevState,
      file: null,
      previewUrl: ''
    }));

    imageFileRef.current.value = '';
  };

  const renderPreview = (): React.ReactElement | null => {
     if ( giphyOverlayContext.state.gif ) return (
      <div className='image-preview'>
        <div className='icon' onClick={onClickClosePreview}><Icons.Close size={18} /></div>
        <img src={giphyOverlayContext.state.gif} style={{ width: '100%' }}/>
      </div>
    );

    if ( state.file?.type === 'image/jpeg' ) return (
      <div className='image-preview'>
        <div className='icon' onClick={onClickClosePreview}><Icons.Close size={18} /></div>
        <img src={state.previewUrl} style={{ width: '100%' }}/>
      </div>
    );

    if ( state.file?.type === 'video/mp4' ) return (
      <div className='image-preview'>
        <div className='icon' onClick={onClickClosePreview}><Icons.Close size={18} /></div>
        <video controls>
          <source src={state.previewUrl} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    );

    return null;
  };


  const onSubmitHandler = ( ): void => {
    console.log('Reference', imageFileRef);
    const foundTweet = tweetState.tweets.find((tweet) => tweet.id === replyOverlayState.tweetID);

    foundTweet?.replies.push({
      id: uuid(),
      author: 'Kitakat',
      tweet: state.value,
      mediaURL: state.previewUrl,
      mediaType: state.file?.type || ''
    });

    dispatch({ type: 'UPDATE_TWEETS', payload: [ ...tweetState.tweets ] });
    replyOverlayDispatch({ type: 'TOGGLE', payload: { tweetID: foundTweet?.id } });
    giphyOverlayContext.dispatch({ type: GiphyOverlayActionType.TOGGLE_RESET });
  };

  useEffect(() => {
    if (!imageFileRef.current) return;

    if (giphyOverlayContext.state.gif) {
      setState(prevState => ({
        ...prevState,
        file: null,
        previewUrl: ''
      }));
      imageFileRef.current.value = '';
    };
  }, [giphyOverlayContext.state.gif]);

  return (
    <>  
      {/* Preview Section */}
      <Preview tweet={replyOverlayState.tweetPreview}/>
      {/* Form Section */}
      <div className='form-reply-container'>
        <Layout.Row flexDirection='row'>
          <Layout.Column width={48} marginRight={16}>
            <Cards.Avatar src='/user-profile.jpeg'/>
          </Layout.Column>
          <Layout.Column flex={1}>
            <textarea 
              className='reply-textarea'
              placeholder='Tweet your reply'
              value={state.value}
              onChange={onChangeHandler}
              data-testid= 'reply-tweet'
            />
            {state.previewUrl || giphyOverlayContext.state.gif ? renderPreview() : null}
            <Footer 
              ref={imageFileRef}
              onChangeFileHandler={onChangeFileHandler}
              onClickFileHandler={onClickFileHandler}
              onClickGifHandler={onClickGifHandler}
              onSubmitHandler={onSubmitHandler}
            />
          </Layout.Column>
        </Layout.Row>
      </div>
    </>
  );
};

export default Reply;