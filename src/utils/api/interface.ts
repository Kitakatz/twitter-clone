import { Tweet } from '../../data/tweets';

export interface APIResponse {
  fetchTweets: () => Promise<Tweet[]>;
  fetchTweetById: (id: string) => Promise<Tweet>;
  addReply: (reply: AxiosPostAddReplyParams) => Promise<any>;
  fetchLikes: (id: string) => Promise<number>;
  like: (id: string) => Promise<void>;
  unlike: (id: string) => Promise<void>;
  register: (user: AxiosPostUserReplyParams) => Promise<any>;
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

export type AxiosPostAddUserResponse = AxiosPostAddUserSuccess | AxiosPostAddUserError;

export interface AxiosPostAddUserSuccess {
  data: {
    message: string;
  };
};

export interface AxiosPostAddUserError {
  data: {
    error: {
      message: string;
    };
  };
};

export interface AxiosPostUserReplyParams {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string;
};