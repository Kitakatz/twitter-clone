import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedContext } from '../../contexts/Authenticated';

export interface StorageProps {
  children: React.ReactNode;
};

const Storage: React.FC<StorageProps> = (props): React.ReactElement => {
  const navigate = useNavigate();
  const { state } = useContext(AuthenticatedContext);
  const authStateCopy = useRef(state);

  useEffect(() => {
    const syncLogoutAllTabs = (event: any) => {
      if (event.key === 'isLoggedIn' && event.newValue === 'true') {
        console.log('useRef ', authStateCopy.current);
        navigate('/home');
      };

      if (event.key === 'isLoggedIn' && event.newValue === 'false') {
        console.log('useRef ', authStateCopy.current);
        navigate('/auth/login');
      };
    };

    const storageListener = window.addEventListener('storage', syncLogoutAllTabs);
 
    return () => storageListener;
  }, [state]);

  useEffect(() => {
    authStateCopy.current = state;
  }, [state]);
  
  return <>{props.children}</>;
};

export default Storage;