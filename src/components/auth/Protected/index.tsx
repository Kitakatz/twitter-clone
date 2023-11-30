import React, { useContext, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { AuthenticatedContext } from '../../../contexts/Authenticated';
import TokenManager from '../../../utils/TokenManager';
import Cookies from 'js-cookie';
import { API } from '../../../utils/api';

interface PrivateProps {
  children: React.ReactNode;
};

const Protected: React.FC<PrivateProps> = (props): React.ReactElement => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthenticatedContext);

  const onMount = async (): Promise<any> => {
    const accessToken = sessionStorage.getItem('accessToken');
    const refreshToken = sessionStorage.getItem('refreshToken');
    if (accessToken && TokenManager().isTokenValid(accessToken)) {
      dispatch({ 
        type: 'LOGIN', 
        payload: {
          accessToken: accessToken,
          refreshToken: refreshToken
        } 
      })
    };

    // const cookie = Cookies.get('auth-client');
    // const cookieData = JSON.parse(cookie ? cookie : '');
    // if (!cookieData.accessToken) navigate('/auth/login');

    const response = await API().syncSessionTokens();
    console.log('Response: ', response);

    TokenManager().setAccessToken(response.data.authPayload.accessToken);
    TokenManager().setRefreshToken(response.data.authPayload.refreshToken);
    localStorage.setItem('isLoggedIn', 'true');
  };

  useEffect(() => {
    onMount();
  }, [state.isLoggedIn]);

  return (
    <>
      {props.children}
    </>
  );
};

export default Protected;