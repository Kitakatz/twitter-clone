import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedContext } from '../../contexts/Authenticated';
import TokenManager from '../../utils/TokenManager';

export interface StorageProps {
  children: React.ReactNode;
};

const Storage: React.FC<StorageProps> = (props): React.ReactElement => {
  const navigate = useNavigate();
  const { state } = useContext(AuthenticatedContext);

  useEffect(() => {
    const BC: BroadcastChannel = new BroadcastChannel("dcode");
    const syncAllTabLogin = (event: MessageEvent<any>) => {
      const accessToken: string = event.data.accessToken;
      const refreshToken: string = event.data.refreshToken;
      TokenManager().setAccessToken(accessToken);
      TokenManager().setRefreshToken(refreshToken);
    };

    BC.addEventListener("message", syncAllTabLogin);

    if (state.isLoggedIn) {
      BC.postMessage({
        accessToken: state.tokens.accessToken,
        refreshToken: state.tokens.refreshToken
      });
    };

    return () => {
      BC.removeEventListener("message", syncAllTabLogin);
    };
  }, [state]);

  useEffect(() => {
    const syncLogoutAllTabs = (event: any) => {
      if (event.key === 'isLoggedIn' && event.newValue === 'true') {
        navigate('/home');
      };
      
      if (event.key === 'isLoggedIn' && event.newValue === 'false') {
        TokenManager().removeAccessToken();
        TokenManager().removeRefreshToken();
        navigate('/auth/login');
      };
    };

    window.addEventListener('storage', syncLogoutAllTabs);
 
    return () => {
      window.removeEventListener('storage', syncLogoutAllTabs);
    }
  }, [state]);

  return <>{props.children}</>;
};

export default Storage;