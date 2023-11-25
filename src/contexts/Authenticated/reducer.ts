import { AuthenticatedState, ActionType } from '.';
import TokenManager from '../../utils/TokenManager';
import Cookies from 'js-cookie';

export const initialState: AuthenticatedState = {
  isLoggedIn: false,
  tokens: {
    accessToken: '',
    refreshToken: ''
  }
};

const reducer = (state: AuthenticatedState, action: ActionType) => {
  switch (action.type) {
    case 'LOGIN':
      const _isLoggedIn = (): AuthenticatedState => {
        const accessToken: string = action.payload.accessToken;
        const refreshToken: string = action.payload.refreshToken;
        
        // set cache 
        TokenManager().setAccessToken(accessToken);
        TokenManager().setRefreshToken(refreshToken);
        localStorage.setItem('isLoggedIn', 'true');
        Cookies.set("auth-client", JSON.stringify({ accessToken: accessToken, refreshToken: refreshToken }));

        return {
          isLoggedIn: true,
          tokens: {
            accessToken: accessToken,
            refreshToken: refreshToken
          }
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
          isLoggedIn: false,
          tokens: {
            accessToken: '',
            refreshToken: ''
          }
        };
      };

      return _isLoggedOut();
    default:
      return state;
  };
};

export default reducer;