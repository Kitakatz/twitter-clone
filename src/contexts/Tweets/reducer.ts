import { ActionType, TweetsProviderState } from '.';

export const initialState: TweetsProviderState = {
  tweets: [],
  isLoading: true
};

const reducer = (state: TweetsProviderState, action: ActionType) => {
  switch (action.type) {
    case 'UPDATE_TWEETS':
      return {
        tweets: action.payload.tweets,
        isLoading: action.payload.loading
      };
    default:
      return state;
  }
};

export default reducer;
