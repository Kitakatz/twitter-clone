import { useContext, useEffect } from 'react';
import { UseHomeScreenHookResponse } from './interfaces';
import { TweetsContext } from '../../../contexts/Tweets';
import { API } from '../../../utils/api';
import Cache from '../../../utils/cache';
import { Tweet } from '../../../data/tweets';
import TokenManager from '../../../utils/TokenManager';
import { AuthenticatedContext } from '../../../contexts/Authenticated';


const useHomeScreenHook = (): UseHomeScreenHookResponse => {
  const { state: globalState, dispatch } = useContext(TweetsContext);
  const { dispatch: authenticatedDispatch } = useContext(AuthenticatedContext);

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
      const cacheResponse = Cache().setTweetsFromStorage(setTweetStorage);
      if (cacheResponse) return;

      const accessToken = TokenManager().getJwtToken();
      const isTokenValid = TokenManager().isTokenValid(accessToken);
      
      if (!isTokenValid) {
        authenticatedDispatch({type: 'LOGOUT'})
        throw new Error('Session has expired.')
      };

      const tweets = await API().fetchTweets(accessToken);

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