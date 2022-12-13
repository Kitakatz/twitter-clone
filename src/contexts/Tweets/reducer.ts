import { ActionType, TweetsProviderState } from '.';
import { tweets } from '../../data/tweets';

export const initialState: TweetsProviderState = {
  tweets: tweets,
  isLoading: true
};

const reducer = (state: TweetsProviderState, action: ActionType) => {
  switch (action.type) {
    case 'UPDATE_TWEETS':
      return {
        tweets: action.payload,
        isLoading: state.isLoading,
      };
    default:
      return state;
  }
};

export default reducer;
