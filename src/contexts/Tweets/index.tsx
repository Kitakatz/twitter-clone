import React, { createContext, Dispatch, useReducer } from 'react';
import { Tweet } from '../../data/tweets';
import reducer, { initialState } from './reducer';

export interface TweetsProviderProps {
  children: React.ReactNode;
};

export type TweetsProviderState = {
  tweets: Tweet[];
  isLoading: boolean;
};

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  state: TweetsProviderState;
  dispatch: Dispatch<ActionType>;
};

export const TweetsContext = createContext({} as ContextType);

const TweetsProvider: React.FC<TweetsProviderProps> = ({ children }): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TweetsContext.Provider value={{ state, dispatch }}>
      { children }
    </TweetsContext.Provider>
  );
};  

export default TweetsProvider;