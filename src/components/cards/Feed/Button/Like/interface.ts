export interface LikeProps {
  tweetLikeCount: number;
  tweetID: string;
};

export interface LikeState { 
  isInitialized: boolean;
  counter: number;
  isLiked: boolean;
};

export interface UseLikeHook {
  state: LikeState;
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
  componentDidMountHandler: () => Promise<void>;
};

