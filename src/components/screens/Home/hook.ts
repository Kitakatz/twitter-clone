import { useContext, useEffect } from 'react';
import { UseHomeScreenHookResponse } from './interfaces';
import { TweetsContext } from '../../../contexts/Tweets';
import { API } from '../../../utils/api';
import Cache from '../../../utils/cache';
import { Tweet } from '../../../data/tweets';


const useHomeScreenHook = (): UseHomeScreenHookResponse => {
  const { state: globalState, dispatch } = useContext(TweetsContext);

  const setTweetStorage = (tweets: Tweet[]): void => {
     dispatch({
      type: 'UPDATE_TWEETS',
      payload: {
        tweets: tweets,
        loading: false
      }
    });
  };

  const onMount = async (): Promise<void> => {
    try {
      // Check Cache
      const cacheResponse = Cache().setTweetsFromStorage(setTweetStorage);
      if (cacheResponse) return;

      //If cache is empty, pull data
      const tweets = await API().fetchTweets();

      // Store to cache
      Cache().setTweets(tweets, setTweetStorage);

    } catch (error) {
      console.log('Error: ', error);
    };
  };

  useEffect(() => {
    onMount();
  }, []);

  return {
    //@ts-ignore
    state: globalState
  };
};

export default useHomeScreenHook;