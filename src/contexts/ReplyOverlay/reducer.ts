import { ReplyOverlayProviderState, ActionType } from '.';

export const initialState: ReplyOverlayProviderState = {
  isToggled: false,
  tweetID: ''
};

const reducer = (state: ReplyOverlayProviderState, action: ActionType) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        isToggled: !state.isToggled,
        tweetID: action.payload
      };
    default:
      return state;
  }
};

export default reducer;