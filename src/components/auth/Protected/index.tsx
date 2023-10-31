import React, { useContext, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { AuthenticatedContext } from '../../../contexts/Authenticated';
import TokenManager from '../../../utils/TokenManager';

interface PrivateProps {
  children: React.ReactNode;
};

const Protected: React.FC<PrivateProps> = (props): React.ReactElement => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthenticatedContext);

  const onMount = (): void => {
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

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if ( !isLoggedIn || isLoggedIn === 'false' ) navigate('/auth/login');
    if ( isLoggedIn === 'true' ) navigate('/home');
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