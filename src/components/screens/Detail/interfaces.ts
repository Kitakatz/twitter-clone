import { Tweet } from '../../../data/tweets'

export interface DetailProps {

};

export interface DetailState {
  tweet: Tweet;
  loading: boolean;
};

export type RouterParams = {
  id: string;
};

export interface UseDetailScreenHookResponse {
  state: DetailState;
};