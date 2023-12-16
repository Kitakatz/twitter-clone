import axios from 'axios';
import { Tweet, tweets as localTweets } from '../../data/tweets';
import { APIResponse, AxiosGetFetchLikesResponse, AxiosGetFetchTweetParams, AxiosGetFetchTweetResponse, AxiosGetFetchTweetsResponse, AxiosPostAddLikeParams, AxiosPostAddReplyParams, AxiosPostAddReplyResponse, AxiosPostAddTweetParams, AxiosPostAddTweetResponse, AxiosPostAddUserResponse, AxiosPostLoginParams, AxiosPostLoginResponse, AxiosPostRegisterParams, AxiosPostRegisterResponse, AxiosPostUserReplyParams } from './interface';

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
  const fetchTweets = async (accessToken: string): Promise<Tweet[]> => {
    const response = await axios.get<any, AxiosGetFetchTweetsResponse, any>('http://localhost:3001/api/tweets/fetchTweets', {
      withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
    });
    const tweets: Tweet[] = response.data.tweets;
    return tweets;
  };

  const fetchTweetById = async (id: string): Promise<Tweet> => {
    const params: AxiosGetFetchTweetParams = {
      id: id
    };
    const response = await axios.get<any, AxiosGetFetchTweetResponse, any>('http://localhost:3001/api/tweets/fetchTweetById', {
      params: params
    });
    const tweet: Tweet = response.data.tweet;
    return tweet;
  };

  const addTweet = async (accessToken: string, tweet: AxiosPostAddTweetParams): Promise<any> => {
    const response = await axios.post<any, AxiosPostAddTweetResponse , AxiosPostAddTweetParams>('http://localhost:3001/api/tweets/addTweet', tweet, {
      withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    return response;
  };

  const addReply = async (accessToken: string, reply: AxiosPostAddReplyParams): Promise<any> => {
    const response = await axios.post<any, AxiosPostAddReplyResponse , AxiosPostAddReplyParams>('http://localhost:3001/api/replies/addReply', reply, {
      withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    return response;
  };

  const fetchLikes = async (accessToken: string, id: string): Promise<any> => {
    const params: AxiosGetFetchTweetParams = {
      id: id
    };
    const response = await axios.get<any, AxiosGetFetchLikesResponse, any>('http://localhost:3001/api/likes/fetchLikes', {
      params: params,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response;
  };

  const like = async (accessToken: string, id: string): Promise<void> => {
    await axios.post<any, any, AxiosPostAddLikeParams>('http://localhost:3001/api/likes/like', 
      { id: id }, 
      {
        withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
      }
    );
  };

  const unlike = async (accessToken: string, id: string): Promise<void> => {
    await axios.post<any, any, AxiosPostAddLikeParams>('http://localhost:3001/api/likes/unlike', 
      { id: id },
      {
        withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
    );
  };

  const register = async (user: AxiosPostRegisterParams): Promise<any> => {
    const response = await axios.post<any, AxiosPostRegisterResponse, AxiosPostRegisterParams>('http://localhost:3001/api/auth/register', user);

    return response;
  };

  const login = async (user: AxiosPostLoginParams): Promise<any> => {
    const response = await axios.post<any, AxiosPostLoginResponse, AxiosPostLoginParams>('http://localhost:3001/api/auth/login', user, { withCredentials: true });

    return response;
  };

  const silentRefresh = async (): Promise<any> => {
    const response = await axios.post<any, AxiosPostLoginResponse>('http://localhost:3001/api/auth/refreshToken', null, {
      withCredentials: true
    });

    return response;
  };

  const syncSessionTokens = async (): Promise<AxiosPostLoginResponse> => {
    const response = await axios.post<any, AxiosPostLoginResponse>('http://localhost:3001/api/auth/syncSessionTokens', null, {
      withCredentials: true
    });

    return response;
  };


  return {
    fetchTweets: fetchTweets,
    fetchTweetById: fetchTweetById,
    addTweet: addTweet,
    addReply: addReply,
    fetchLikes: fetchLikes,
    like: like,
    unlike: unlike,
    register: register,
    login: login,
    silentRefresh: silentRefresh,
    syncSessionTokens: syncSessionTokens
  };
};

export { 
  getTweetById,
  getAllTweets,
  API
 };