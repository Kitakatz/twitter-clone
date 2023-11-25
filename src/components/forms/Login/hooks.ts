import { useContext, useState } from 'react';
import { LoginStateFormProps } from './interfaces';
import { Sanitize, Validate } from './validate';
import Utils from './utils';
import { AuthenticatedContext } from '../../../contexts/Authenticated';
import { API } from '../../../utils/api';
import TokenManager from '../../../utils/TokenManager';
import { useNavigate } from 'react-router-dom';

interface UseLoginScreenHookResponse {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: () => Promise<void>;
  isFormDisabled: (state: any) => boolean;
  state: LoginStateFormProps;
};

const useLoginScreenHook = (): UseLoginScreenHookResponse => {
  const navigate = useNavigate();
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
      const user = utils.createUserEntity(state);

      // validate.validateUser(user);

      const response = await API().login(user);
      if (response.data.error) throw new Error(response.data.error.message);

      dispatch({
        type:'LOGIN',
        payload: {
          accessToken: response.data.authPayload.accessToken,
          refreshToken: response.data.authPayload.refreshToken
        }
      });

      navigate("/home");
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