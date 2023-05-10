import { useState } from 'react';
import { RegisterFormState } from './interfaces';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { API } from '../../../utils/api';

interface useRegisterScreenHookResponse {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: () => Promise<void>;
  isFormDisabled: (state: any) => boolean;
  state: RegisterFormState;
};

const useRegisterScreenHook = (): useRegisterScreenHookResponse => {
  const [state, setState] = useState<RegisterFormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
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

  const onSubmitHandler = async (): Promise<void> => {
    try {
      const user = {
        id: uuid(),
        ...state
      };

      const response = await API().addUser(user);
      if (response.data.error) throw new Error(response.data.error.message);

      console.log("User added!");
    } catch(error) {
      console.log(error);
    };
  };

  const isFormDisabled = (state: any): boolean => {
    if ( state.firstName && 
      state.lastName && 
      state.email && 
      state.phone && 
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
  }
};

export default useRegisterScreenHook;