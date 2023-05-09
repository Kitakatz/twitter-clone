import { useContext } from 'react';
import { AuthenticatedContext } from '../../../contexts/Authenticated';
import { RegisterFormProps } from './interfaces';
import useRegisterScreenHook from '../../forms/Register/hook';
import './styles.css';
import Buttons from '../../buttons';

const Register: React.FC<RegisterFormProps> = (): React.ReactElement => {
  const utils = useRegisterScreenHook();
  const {state:authenticatedState, dispatch} = useContext(AuthenticatedContext);

  const onSubmit = (): void => {
    dispatch({type:'REGISTER'});
  };

  return (
    <div className='form-register'>
      <h1 className='form-register-title'>Create your account</h1>
      <div className="form-register-inputs">
        <input type='text' name='firstName' placeholder='First Name' onChange={utils.onChangeHandler} value={utils.state.firstName} className='form-register-input' />
        <input type='text' name='lastName' placeholder='Last Name' onChange={utils.onChangeHandler} value={utils.state.lastName} className='form-register-input' />
        <input type='text' name='phone' placeholder='Phone' onChange={utils.onChangeHandler} value={utils.state.phone} className='form-register-input' />
        <input type='text' name='email' placeholder='Email' onChange={utils.onChangeHandler} value={utils.state.email} className='form-register-input' />
        <input type='text' name='password' placeholder='Password' onChange={utils.onChangeHandler} value={utils.state.password} className='form-register-input' />
      </div>
      <div className='form-register-button'>
        <Buttons.Large label='Register' onClick={()=> console.log('form data', utils.state)} disabled={true} />
      </div>
    </div>
  );
};

export default Register;