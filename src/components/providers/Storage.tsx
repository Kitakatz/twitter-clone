import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedContext } from '../../contexts/Authenticated';

export interface StorageProps {
  children: React.ReactNode;
};

const Storage: React.FC<StorageProps> = (props): React.ReactElement => {
  const navigate = useNavigate();
  const { state } = useContext(AuthenticatedContext);

  useEffect(() => {
    //addeventlisterner cant read state changes *react relate issue
    //sessionstorage isnt persist across all tabs
    const syncLogoutAllTabs = (event: any) => {
      const accessToken = sessionStorage.getItem('accessToken');
      if (event.key === 'isLoggedIn' && event.newValue === 'true') {
        if (accessToken) sessionStorage.setItem('accessToken', accessToken);
        navigate('/home');
      };

      if (event.key === 'isLoggedIn' && event.newValue === 'false') {
        navigate('/auth/login');
      };
    };
//addeventlistener doesnt have changes from other tabs states
    const storageListener = window.addEventListener('storage', syncLogoutAllTabs);

    return () => storageListener;
  }, [state]);
  
  return <>{props.children}</>;
};

export default Storage;