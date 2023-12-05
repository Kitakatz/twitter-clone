import React, { useContext, useEffect } from 'react';
import { AuthenticatedContext } from '../../../contexts/Authenticated';
import TokenManager from '../../../utils/TokenManager';
import { API } from '../../../utils/api';
// import Cookies from 'js-cookie';

interface PrivateProps {
  children: React.ReactNode;
};

const Protected: React.FC<PrivateProps> = (props): React.ReactElement => {
  const { state, dispatch } = useContext(AuthenticatedContext);

  const onMount = async (): Promise<any> => {
    const accessToken = sessionStorage.getItem('accessToken');
    const refreshToken = sessionStorage.getItem('refreshToken');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!accessToken && !refreshToken && isLoggedIn === 'true') {
      const response = await API().syncSessionTokens();

      TokenManager().setAccessToken(response.data.authPayload.accessToken);
      TokenManager().setRefreshToken(response.data.authPayload.refreshToken);
    };

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