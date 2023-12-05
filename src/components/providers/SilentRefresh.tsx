import React, { useContext, useEffect, useState } from 'react';
import { AuthenticatedContext } from '../../contexts/Authenticated';
import { useNavigate } from 'react-router-dom';
import { API } from '../../utils/api';
import TokenManager from '../../utils/TokenManager';

export interface SilentRefreshProps {
  children: React.ReactNode;
};

const SilentRefresh: React.FC<SilentRefreshProps> = (props) => {
  const refreshTokenToExpire: number = (60 * 30);
  const navigate = useNavigate();
  const [timer, setTimer] = useState<number>(refreshTokenToExpire);
  const { dispatch } = useContext(AuthenticatedContext);

  const onMount = async (): Promise<void> => {
    try {
      const response = await API().silentRefresh();
      const accessToken: string = response.data.authPayload.accessToken;
      const refreshToken: string = TokenManager().getRefreshToken();
      dispatch({
        type: "LOGIN",
        payload: {
          accessToken: accessToken,
          refreshToken: refreshToken
        }
      });
      setTimer(15);
    } catch(error) {
      dispatch({ type: 'LOGOUT' });
      navigate('/auth/login');
      console.log("Something failed while refreshing session: ",  error);
    };

  };
  
  useEffect(() => {
    if (timer === 0) {
      onMount(); 
    };

    const ticker = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearTimeout(ticker);
    };
  }, [timer]);
  // console.log('timer: ', timer);

  return (
    <>{ props.children }</>
  );
};

export default SilentRefresh;