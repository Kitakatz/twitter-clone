import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedContext } from '../../../contexts/Authenticated';

interface PublicProps {
  children: React.ReactNode;
};

const Public: React.FC<PublicProps> = (props):React.ReactElement => {
  const navigate = useNavigate();
  const { state } = useContext(AuthenticatedContext);

  const onMount = (): void => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
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

export default Public;