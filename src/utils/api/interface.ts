import { Tweet } from '../../data/tweets';

export interface APIResponse {
  fetchTweets: () => Promise<Tweet[]>;
  fetchTweetById: (id: string) => Promise<Tweet>;
  addReply: (reply: AxiosPostAddReplyParams) => Promise<any>;
  fetchLikes: (id: string) => Promise<number>;
  like: (id: string) => Promise<void>;
  unlike: (id: string) => Promise<void>;
};

export interface AxiosGetFetchTweetsResponse {
  data: {
    tweets: Tweet[]
  }
};

export interface AxiosGetFetchTweetResponse {
  data: {
    tweet: Tweet
  }
};

export interface AxiosGetFetchTweetParams {
  id: string | undefined
};

export type AxiosPostAddReplyResponse = AxiosPostAddReplySuccess | AxiosPostAddReplyError;

export interface AxiosPostAddReplySuccess {
  data: {
    message: string;
  };
};

export interface AxiosPostAddReplyError {
  data: {
    error: {
      message: string;
    };
  };
};

export interface AxiosPostAddReplyParams {
  id: string;
  author: string;
  tweet: string;
  mediaURL: string;
  mediaType: string;
  likes: number;
  tweetID: string;
};

export interface AxiosGetFetchLikesResponse {
  data: {
    likes: number
  }
};

export interface AxiosPostAddLikeParams {
  id: string
};
