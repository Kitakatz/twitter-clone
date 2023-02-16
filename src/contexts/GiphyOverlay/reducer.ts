import { GiphyOverlayProviderState, ActionType } from '.';

export const initialState: GiphyOverlayProviderState = {
  isToggled: false,
  gif: ''
};

const reducer = (state: GiphyOverlayProviderState, action: ActionType) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        isToggled: !state.isToggled,
        gif: state.gif
      };

    case 'UPDATE_GIF':
      return {
        isToggled: state.isToggled,
        gif: action.payload
      };

    case 'TOGGLE_RESET':
      return {
        isToggle: false,
        gif: ''
      };
    default:
      return state;
  }
};

export default reducer;