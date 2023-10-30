import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface StorageProps {
  children: React.ReactNode;
};

const Storage: React.FC<StorageProps> = (props): React.ReactElement => {
  const navigate = useNavigate();
  const syncLogoutAllTabs = (event: any) => {
    if (event.newValue === 'false') {
      console.log('event: ', event);
      navigate('/auth/login')
    };
  };

  window.addEventListener('storage', syncLogoutAllTabs);

  return <>{props.children}</>;
};

export default Storage;