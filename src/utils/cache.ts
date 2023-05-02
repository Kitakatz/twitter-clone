import { DetailState } from '../components/screens/Detail/interfaces';
import { ActionType } from '../contexts/Tweets';
import { Tweet } from '../data/tweets';

interface CacheResponse {
  setTweetsFromStorage: (setTweetStorage: (tweets: Tweet[]) => void) => boolean;
  setTweets: (tweets: Tweet[], setTweetStorage: (tweets: Tweet[]) => void) => void;
  setTweetFromStorage: (id: string, setTweetState : (state: DetailState) => void) => boolean;
  setTweet: (tweet: Tweet, setTweetState: (state: DetailState) => void) => void;
};

const Cache = (): CacheResponse => {
  const setTweetsFromStorage = (setTweetStorage: (tweets: Tweet[]) => void): boolean => {
    const localTweetsFromCache: string | null = localStorage.getItem('@tweets');
    if (!localTweetsFromCache) return false;

    const localTweets: Tweet[] = JSON.parse(localTweetsFromCache);  
    setTweetStorage(localTweets);
    return true;
  };

  const setTweets = (tweets: Tweet[], setTweetStorage: (tweets: Tweet[]) => void): void => {
    localStorage.setItem('@tweets', JSON.stringify(tweets));
    setTweetStorage(tweets);
  };

  const setTweetFromStorage = (id: string, setTweetState: (state: DetailState) => void): boolean => {
    const localTweetsFromStorage = localStorage.getItem('@tweets');
    if (!localTweetsFromStorage) return false;
    const localTweets: Tweet[] = JSON.parse(localTweetsFromStorage) || [];

    if (localTweets.length === 0) return false;
    const foundTweet: Tweet = localTweets.find((tweet: Tweet) => tweet.id === id) || {  id: "", author: "", tweet: "", likes: 0, replies: [] };
    setTweetState({ tweet: foundTweet, loading: false });

    return true;
  };

  const setTweet = (tweet: Tweet, setTweetState: (state: DetailState) => void): void => {
    localStorage.setItem('@tweets', JSON.stringify([tweet]));
    setTweetState({ tweet: tweet, loading: false });
  };  

  return {
    setTweetsFromStorage: setTweetsFromStorage,
    setTweets: setTweets,
    setTweetFromStorage: setTweetFromStorage,
    setTweet: setTweet
  };
};

export default Cache;