import { RegisterFormState } from './interfaces';
import { v4 as uuid } from 'uuid';

interface UtilsResponse {
  createUserEntity: (state: RegisterFormState) => User;
};

interface User { 
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string;
};

const Utils = (): UtilsResponse => {
  const createUserEntity = (state: RegisterFormState): User => {
    return{
      id: uuid(),
      firstName: state.firstName,
      lastName: state.lastName,
      phone: state.phone,
      email: state.email,
      username: state.username,
      password: state.password
    };
  };

  return {
    createUserEntity: createUserEntity
  };
};

export default Utils;