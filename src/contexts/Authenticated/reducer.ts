import { AuthenticatedState, ActionType } from '.';

export const initialState: AuthenticatedState = {
  isLoggedIn: false
};

const reducer = (state: AuthenticatedState, action: ActionType) => {
  switch (action.type) {
    case 'LOGIN':
      const _isLoggedIn = (): AuthenticatedState => {
        localStorage.setItem('isLoggedIn', 'true');
        return {
          isLoggedIn: true
        };
      };

      return _isLoggedIn();

    case 'LOGOUT':
      const _isLoggedOut = (): AuthenticatedState => {
        localStorage.removeItem('isLoggedIn');
        return {
          isLoggedIn: false
        };
      };

      return _isLoggedOut();
    default:
      return state;
  };
};

export default reducer;