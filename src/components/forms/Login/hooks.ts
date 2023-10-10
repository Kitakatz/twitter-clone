import { useContext, useState } from 'react';
import { LoginStateFormProps } from './interfaces';
import { Sanitize, Validate } from './validate';
import Utils from './utils';
// import { API } from '../../../utils/api';
import { AuthenticatedContext } from '../../../contexts/Authenticated';
import axios from 'axios';
// import Cookies from 'js-cookie';

interface UseLoginScreenHookResponse {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: () => Promise<void>;
  isFormDisabled: (state: any) => boolean;
  state: LoginStateFormProps;
};

const useLoginScreenHook = (): UseLoginScreenHookResponse => {
  const {state:authenticatedState, dispatch} = useContext(AuthenticatedContext);
  const validate = Validate();
  const utils = Utils();
  const [state, setState] = useState<LoginStateFormProps>({
    username: '',
    password: '',
    errorMessage: ''
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = Sanitize()[key](event.target.value);
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const onSubmitHandler = async (): Promise<void> => {
    try {
      const token = '__CLIENT_TOKEN__';
      const response = await axios.get('http://localhost:3001/api/event-test', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('response: ', response);


      // const user = utils.createUserEntity(state);

      // validate.validateUser(user);

      // const response = await API().login(user);
      // if (response.data.error) throw new Error(response.data.error.message);

      // Cookies.set('accessToken', response.data.authPayload.accessToken);
      // Cookies.set('refreshToken', response.data.authPayload.refreshToken);

      // dispatch({type:'LOGIN'});
    } catch(error: any) {
      setState(prevState => ({ ...prevState , errorMessage: error.message }));
      console.log(error);
    };
  };

  const isFormDisabled = (state: any): boolean => {
    if (
      state.username && 
      state.password 
      ) return false;
    return true;
  };
  
  return {
    onChangeHandler: onChangeHandler,
    onSubmitHandler: onSubmitHandler,
    isFormDisabled: isFormDisabled,
    state: state
  };
}; 

export default useLoginScreenHook;