import { LoginStateFormProps } from './interfaces';

interface UtilsResponse {
  createUserEntity: (state: LoginStateFormProps) => User;
};

export interface User { 
  username: string;
  password: string;
};

const Utils = (): UtilsResponse => {
  const createUserEntity = (state: LoginStateFormProps): User => {
    return{
      username: state.username,
      password: state.password
    };
  };

  return {
    createUserEntity: createUserEntity
  };
};

export default Utils;