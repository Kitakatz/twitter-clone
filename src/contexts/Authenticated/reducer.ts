import { AuthenticatedState, ActionType } from '.';
import TokenManager from '../../utils/TokenManager';

export const initialState: AuthenticatedState = {
  isLoggedIn: false
};

const reducer = (state: AuthenticatedState, action: ActionType) => {
  switch (action.type) {
    case 'LOGIN':
      const _isLoggedIn = (): AuthenticatedState => {
        // set cache 
        TokenManager().setAccessToken(action.payload.accessToken);
        TokenManager().setRefreshToken(action.payload.refreshToken);
        localStorage.setItem('isLoggedIn', 'true');

        return {
          isLoggedIn: true
        };
      };

      return _isLoggedIn();

    case 'LOGOUT':
      const _isLoggedOut = (): AuthenticatedState => {
        // sanitize cache 
        window.localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('@tweets');
        TokenManager().removeAccessToken();
        TokenManager().removeRefreshToken();

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