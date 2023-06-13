import { useContext, useState } from 'react';
import { AuthenticatedContext } from '../../../contexts/Authenticated';
import { LoginProps } from './interfaces';
import Forms from '../../forms';
import useWindowSize from '../../../hooks/useWindowDimensions';
import './styles.css';

const Login: React.FC<LoginProps> = (): React.ReactElement => {
  const [state, setState] = useState<string>('');
  const windowSize = useWindowSize(true);

  return (
    <div className="screen-login-form" style={{ height: windowSize.height }}>
      <Forms.Login />
    </div>
  );
};

export default Login;