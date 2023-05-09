import { useState } from 'react';
import { RegisterState } from '../../screens/Register/interfaces';

interface useRegisterScreenHookResponse {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state: RegisterState;
};

const useRegisterScreenHook = (): useRegisterScreenHookResponse => {
  const [state, setState] = useState<RegisterState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  return {
    onChangeHandler: onChangeHandler,
    state: state
  }
};

export default useRegisterScreenHook;