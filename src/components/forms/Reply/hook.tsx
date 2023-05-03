import { useContext, useEffect, useRef, useState } from 'react';
import { Tweet } from '../../../data/tweets';
import { ReplyFormState } from './interfaces';
import { v4 as uuid } from 'uuid';
import Cache from '../../../utils/cache';
import { API } from '../../../utils/api';
import { GiphyOverlayActionType, GiphyOverlayContext, ContextType } from '../../../contexts/GiphyOverlay';
import Icons from '../../icons';
import { TweetsContext } from '../../../contexts/Tweets';
import { ReplyOverlayContext, ReplyOverlayProviderState } from '../../../contexts/ReplyOverlay';

interface ReplyFormHookResponse {
  onChangeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeFileHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickFileHandler: () => void;
  onClickGifHandler: () => void;
  renderPreview: () => React.ReactElement | null;
  onSubmitHandler: () => Promise<void>;
  replyOverlayState: ReplyOverlayProviderState;
  state: ReplyFormState;
  giphyOverlayContext: ContextType;
  imageFileRef: React.RefObject<HTMLInputElement>;
};

const useReplyFormHook = (): ReplyFormHookResponse => {
  const { state: replyOverlayState, dispatch: replyOverlayDispatch } = useContext(ReplyOverlayContext);
  const { state: tweetState, dispatch } = useContext(TweetsContext);
  const giphyOverlayContext = useContext(GiphyOverlayContext);  const imageFileRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<ReplyFormState>({
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
    const mediaURL: string = state.previewUrl || giphyOverlayContext.state.gif;
    if (state.file) mediaType = state.file.type;
    if (giphyOverlayContext.state.gif) mediaType = 'image/gif';

    const reply = {
      id: uuid(),
      author: 'Kitakat',
      tweet: state.value,
      mediaURL: mediaURL,
      mediaType: mediaType,
      likes: 0,
      tweetID: replyOverlayState.tweetID
    };
    
    const tweet = tweetState.tweets.find((tweet) => tweet.id === replyOverlayState.tweetID);
    if (!tweet) return;
    
    tweet.replies.push(reply);
    Cache().setTweets(tweetState.tweets, setTweetStorage);

    replyOverlayDispatch({ type: 'TOGGLE', payload: { tweetID: replyOverlayState.tweetID } });
    giphyOverlayContext.dispatch({ type: GiphyOverlayActionType.TOGGLE_RESET });
    
    const response = await API().addReply(reply);
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
    onChangeFileHandler: onChangeFileHandler,
    onChangeHandler: onChangeHandler,
    onClickFileHandler: onClickFileHandler,
    onClickGifHandler: onClickGifHandler,
    onSubmitHandler: onSubmitHandler,
    replyOverlayState: replyOverlayState,
    state: state,
    giphyOverlayContext: giphyOverlayContext,
    imageFileRef: imageFileRef,
  };
};

export default useReplyFormHook;