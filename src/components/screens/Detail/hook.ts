import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tweet } from '../../../data/tweets';
import { getTweetById } from '../../../utils/api';
import { DetailState, RouterParams, UseDetailScreenHookResponse } from './interfaces';

const useDetailScreenHook = (): UseDetailScreenHookResponse => {
  const params = useParams<RouterParams>();
  const [state, setState] = useState<DetailState>({
    tweet: {
      id: '',
      author: '',
      tweet: '',
      replies: [],
      likes: 0
    },
    loading: true
  });

  const onMount = async (): Promise<void> => {
    try { 
      const tweet = await getTweetById(params.id);

      setState({
        tweet: {
          id: tweet.id,
          author: tweet.author,
          tweet: tweet.tweet,
          replies: tweet.replies,
          likes: tweet.likes
        },
        loading: false
      });
    } catch(error) {
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

export default useDetailScreenHook;