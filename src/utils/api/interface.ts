import { Tweet } from '../../data/tweets';

export interface APIResponse {
  fetchTweets: (accessToken: string) => Promise<Tweet[]>;
  fetchTweetById: (id: string) => Promise<Tweet>;
  addReply: (reply: AxiosPostAddReplyParams) => Promise<any>;
  addTweet: (accessToken: string, tweet: AxiosPostAddTweetParams) => Promise<any>;
  fetchLikes: (accessToken: string, id: string) => Promise<number>;
  like: (id: string) => Promise<void>;
  unlike: (id: string) => Promise<void>;
  register: (user: AxiosPostUserReplyParams) => Promise<any>;
  login: (user: AxiosPostLoginParams) => Promise<any>;
  silentRefresh: () => Promise<any>;
  syncSessionTokens: () => Promise<any>;
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

export type AxiosPostAddTweetResponse = AxiosPostAddTweetSuccess | AxiosPostAddTweetError;

export interface AxiosPostAddTweetSuccess {
  data: {
    message: string;
  };
};

export interface AxiosPostAddTweetError {
  data: {
    error: {
      message: string;
    };
  };
};


export interface AxiosPostAddTweetParams {
  id: string;
  author: string; 
  tweet: string;
  replies: any;
  likes: number;
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

export type AxiosPostRegisterResponse = AxiosPostRegisterSuccess | AxiosPostRegisterError;

export interface AxiosPostRegisterSuccess {
  data: {
    message: string;
  };
};

export interface AxiosPostRegisterError {
  data: {
    error: {
      message: string;
    };
  };
};

export interface AxiosPostRegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string;
};

export type AxiosPostLoginResponse = AxiosPostLoginSuccess | AxiosPostLoginError;

export interface AxiosPostLoginSuccess {
  data: {
    authPayload: {
      accessToken: string;
      refreshToken: string;
    };
  };
};

export interface AxiosPostLoginError {
  data: {
    error: {
      message: string;
    };
  };
};

export interface AxiosPostLoginParams {
  username: string;
  password: string;
};