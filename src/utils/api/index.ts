import axios from 'axios';
import { Tweet, tweets as localTweets } from '../../data/tweets';
import { APIResponse, AxiosGetFetchLikesResponse, AxiosGetFetchTweetParams, AxiosGetFetchTweetResponse, AxiosGetFetchTweetsResponse, AxiosPostAddLikeParams, AxiosPostAddReplyParams, AxiosPostAddReplyResponse } from './interface';

const getAllTweets = async (): Promise<Tweet[]> => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const error: boolean = false;

      if (error) return reject('Network error.');

      resolve(localTweets);
    }, 2000);
  });
};

const getTweetById = async ( tweetID: string | undefined, tweets: Tweet[]): Promise<Tweet> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error: boolean = false;
  
      if (error) reject('Network error.'); 

      console.log('TweetID', tweetID); 
  
      const tweet = tweets.find((tweet) => tweet.id === tweetID);
  
      if(!tweet) return reject('No tweet was found by that ID.');
  
      resolve(tweet);
    }, 2000);
  });
};

const API = (): APIResponse  => {
  const fetchTweets = async (): Promise<Tweet[]> => {
    const response = await axios.get<any, AxiosGetFetchTweetsResponse, any>('http://localhost:3001/fetchTweets');
    const tweets: Tweet[] = response.data.tweets;
    return tweets;
  };

  const fetchTweetById = async (id: string): Promise<Tweet> => {
    const params: AxiosGetFetchTweetParams = {
      id: id
    };
    const response = await axios.get<any, AxiosGetFetchTweetResponse, any>('http://localhost:3001/fetchTweetById', {
      params: params
    });
    const tweet: Tweet = response.data.tweet;
    return tweet;
  };

  const addReply = async (reply: AxiosPostAddReplyParams): Promise<any> => {
    const response = await axios.post<any, AxiosPostAddReplyResponse , AxiosPostAddReplyParams>('http://localhost:3001/addReply', reply);

    return response;
  };

  const fetchLikes = async (id: string): Promise<number> => {
    const params: AxiosGetFetchTweetParams = {
      id: id
    };
    const response = await axios.get<any, AxiosGetFetchLikesResponse, any>('http://localhost:3001/fetchLikes', {
      params: params
    });
    const likes: number = response.data.likes;
    return likes;
  };

  const like = async (id: string): Promise<void> => {
    await axios.post<any, any, AxiosPostAddLikeParams>('http://localhost:3001/like', { id: id });
  };

  const unlike = async (id: string): Promise<void> => {
    await axios.post<any, any, AxiosPostAddLikeParams>('http://localhost:3001/unlike', { id: id });
  };



  return {
    fetchTweets: fetchTweets,
    fetchTweetById: fetchTweetById,
    addReply: addReply,
    fetchLikes: fetchLikes,
    like: like,
    unlike: unlike
  };
};

export { 
  getTweetById,
  getAllTweets,
  API
 };