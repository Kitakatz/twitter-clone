import { useEffect, useState } from 'react';
import { getAllTweets } from '../../../utils/api';
import { HomeScreenState, UseHomeScreenHookResponse } from './interfaces';

const useHomeScreenHook = (): UseHomeScreenHookResponse => {
  const [state, setState] = useState<HomeScreenState>({ 
    tweets: [],
    loading: true
  });

  const onMount = async (): Promise<void> => {
    try {
      const tweets = await getAllTweets();

      setState({
        tweets: tweets,
        loading: false
      });
    } catch (error) {
      console.log('Error: ', error);
    };
  };

  useEffect(() => {
    onMount();
  }, []);

  return {
    state: state
  };
};

export default useHomeScreenHook;