import React, { useContext, useEffect, useState } from 'react';
import { AuthenticatedContext } from '../../contexts/Authenticated';
import { useNavigate } from 'react-router-dom';
import { API } from '../../utils/api';

export interface SilentRefreshProps {
  children: React.ReactNode;
};

const SilentRefresh: React.FC<SilentRefreshProps> = (props) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState<number>(5);
  const { dispatch } = useContext(AuthenticatedContext);
  
  useEffect(() => {
    if (timer === 0) {
      API().silentRefresh();
      console.log('logging user out');
      // dispatch({ type: 'LOGOUT' });
      // navigate('/auth/login');
    };

    const ticker = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearTimeout(ticker);
    };
  }, [timer]);

  console.log('timer: ', timer);

  return (
    <>{ props.children }</>
  );
};

export default SilentRefresh;