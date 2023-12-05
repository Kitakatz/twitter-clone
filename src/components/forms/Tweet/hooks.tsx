import { useContext, useEffect, useRef, useState } from 'react';
import Cache from '../../../utils/cache';
import { TweetFormState } from './interfaces';
import { v4 as uuid } from 'uuid';
import { API } from '../../../utils/api';
import { GiphyOverlayActionType, GiphyOverlayContext } from '../../../contexts/GiphyOverlay';
import { ReplyOverlayContext } from '../../../contexts/ReplyOverlay';
import Icons from '../../icons';
import { TweetsContext } from '../../../contexts/Tweets';
import { Tweet } from '../../../data/tweets';
import TokenManager from '../../../utils/TokenManager';

const useTweetFormHook = () => {
  const { state: replyOverlayState, dispatch: replyOverlayDispatch } = useContext(ReplyOverlayContext);
  const { state: tweetState, dispatch } = useContext(TweetsContext);
  const giphyOverlayContext = useContext(GiphyOverlayContext);
  const imageFileRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<TweetFormState>({
    value: '',
    file: null,
    previewUrl: ''
  });

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
    

    // giphyOverlayContext.dispatch({ type: GiphyOverlayActionType.TOGGLE });
  };

  const onClickClosePreview = (): void => {
    //did we still need a plugin in estint
    if (!imageFileRef.current) return;

    setState(prevState => ({
      ...prevState,
      file: null,
      previewUrl: ''
    }));

    imageFileRef.current.value = '';
    
    giphyOverlayContext.dispatch({ type: GiphyOverlayActionType.TOGGLE_RESET })
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

  const setTweetStorage = (tweets: Tweet[]): void => {
    dispatch({ type: 'UPDATE_TWEETS', payload: { tweets: tweets, isLoading: false } });
  };

  const onSubmitHandler = async ( ): Promise<void> => {
    try {
      let mediaType: string = '';
      // const mediaURL: string = state.previewUrl || giphyOverlayContext.state.gif;
      if (state.file) mediaType = state.file.type;
      if (giphyOverlayContext.state.gif) mediaType = 'image/gif';
      
      const tweet = {
        id: uuid(),
        author: 'Kitakat',
        tweet: state.value,
        replies: [],
        likes: 0
      };
      
      // const tweet = tweetState.tweets.find((tweet) => tweet.id === replyOverlayState.tweetID);
      console.log('clicked', tweetState.tweets);
      // if (!tweet) return;
      
      tweetState.tweets.push(tweet);
      Cache().setTweets(tweetState.tweets, setTweetStorage);

      giphyOverlayContext.dispatch({ type: GiphyOverlayActionType.TOGGLE_RESET });

      const accessToken = TokenManager().getAccessToken();
      // const isTokenValid = TokenManager().isTokenValid(accessToken);
      
      const response = await API().addTweet(accessToken, tweet);
      setState({
        value: '',
        file: null,
        previewUrl: ''
      });
      
      if (response.data.error) throw new Error(response.data.error.message);

    } catch (error) {
      console.log(error);

      const tweet = tweetState.tweets.find((tweet) => tweet.id === replyOverlayState.tweetID);
      tweet?.replies.pop();

      const tweetsForCache = JSON.stringify(tweetState.tweets);
      localStorage.setItem('@tweets', tweetsForCache);
      setTweetStorage(tweetState.tweets);
    };
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
  
  return {
    renderPreview: renderPreview,
    onChangeHandler: onChangeHandler,
    onChangeFileHandler: onChangeFileHandler,
    onClickFileHandler: onClickFileHandler,
    onClickGifHandler: onClickGifHandler,
    onSubmitHandler: onSubmitHandler,
    state: state,
    imageFileRef: imageFileRef,
    giphyOverlayContext: giphyOverlayContext
  };
};

export default useTweetFormHook;

