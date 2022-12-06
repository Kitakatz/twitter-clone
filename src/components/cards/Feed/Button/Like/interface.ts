export interface LikeProps {
  tweetLikeCount: number;
};

export interface LikeState { 
  counter: number;
  isLiked: boolean;
};

export interface UseLikeHook {
  state: LikeState;
  onClickHandler: () => void;
  componentDidMountHandler: () => Promise<void>;
};

