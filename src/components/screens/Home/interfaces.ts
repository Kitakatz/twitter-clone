import { Tweet } from '../../../data/tweets';

export interface HomeScreenProps {

};

export interface HomeScreenState {
  tweets: Tweet[];
  loading: boolean;
};

export interface UseHomeScreenHookResponse {
  state: HomeScreenState;
};