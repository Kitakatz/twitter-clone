import React, { useReducer, createContext, Dispatch } from 'react';
import reducer, { initialState } from './reducer';

export interface AuthenticatedProps {
  children: React.ReactNode;
};

export type AuthenticatedState = {
  isLoggedIn: boolean;
  tokens: {
    accessToken: string;
    refreshToken: string;
  }
};

export type ActionType = {
  type: string;
  payload?: any;
};

type ContextType = {
  state: AuthenticatedState;
  dispatch: Dispatch<ActionType>;
};

export const AuthenticatedContext = createContext({} as ContextType);

const Authenticated: React.FC<AuthenticatedProps> = ({ children }): React.ReactElement => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);

 return (
    <AuthenticatedContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticatedContext.Provider>
 );
};

export default Authenticated;