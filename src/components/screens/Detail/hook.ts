import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TweetsContext } from '../../../contexts/Tweets';
import { DetailState, RouterParams, UseDetailScreenHookResponse } from './interfaces';
import { API } from '../../../utils/api';
import Cache from '../../../utils/cache';

const useDetailScreenHook = (): UseDetailScreenHookResponse => {
  const { state: globalState, dispatch } = useContext(TweetsContext);
  const parameters = useParams<RouterParams>();
  const [ state, setState ] = useState<DetailState>({
    tweet: {  
      id: "",
      author: "",
      tweet: "",
      likes: 0,
      replies: [],
    },
    loading: true
  });

  const setTweetState = (state: DetailState): void => {
    setState(state);
    dispatch ({
      type: 'UPDATE_TWEETS',
      payload: {
        tweets: [state.tweet],
        loading: false
      }
    });
  };
  
  const onMount = async (): Promise<void> => {
    try { 
      //Check Cache
      const cacheResponse = Cache().setTweetFromStorage(parameters.id || '', setTweetState);
      if (cacheResponse) return;
      
      //If Cache is empty, pull data
      const tweet = await API().fetchTweetById(parameters.id || '');

      //Store to cache
      localStorage.setItem('@tweets', JSON.stringify([tweet]));
      setState({ tweet: tweet, loading: false });

      Cache().setTweet(tweet, setTweetState);
    } catch(error) {
      console.log('Error: ', error);
    };
  };

  useEffect(() => {
    if (parameters.id) onMount();
  }, []);

  return {
    // @ts-ignore
    state: state
  };
};

export default useDetailScreenHook;