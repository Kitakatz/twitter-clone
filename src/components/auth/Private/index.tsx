import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

interface PrivateProps {
  children: React.ReactNode;
};

const Private: React.FC<PrivateProps> = (props): React.ReactElement => {
  const navigate = useNavigate();

  const onMount = (): void => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if ( !isLoggedIn ) navigate('/auth/login');
  };

  useEffect(() => {
    onMount();
  }, []);

  return (
    <>
      {props.children}
    </>
  );
};

export default Private;