import Buttons from '../../buttons';
import useLoginScreenHook from './hooks';
import { LoginFormProps } from './interfaces';
import './styles.css';

const Login: React.FC<LoginFormProps> = (): React.ReactElement => {
  const utils = useLoginScreenHook();

  return (
    <div className='form-login'>
      <h2 className='form-login-title'>Log in to your account</h2>
      <div className="form-login-inputs">
        <input type='text' name='username' placeholder='Username' onChange={utils.onChangeHandler} value={utils.state.username} className='form-register-input' />
        <input type='text' name='password' placeholder='Password' onChange={utils.onChangeHandler} value={utils.state.password} className='form-register-input' />
      </div>
      <div className='form-register-button'>
        <Buttons.Large label='Login' onClick={utils.onSubmitHandler} disabled={utils.isFormDisabled(utils.state)} />
      </div>
      { 
        !utils.state.errorMessage
        ? null
        : <div className='form-register-error'>{ utils.state.errorMessage }</div>
      }
    </div>
  );
};

export default Login;