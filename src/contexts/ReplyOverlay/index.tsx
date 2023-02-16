import React, { useReducer, createContext, Dispatch } from 'react';
import reducer, { initialState } from './reducer';

export interface ReplyOverlayProviderProps {
  children: React.ReactNode;
};

export type ReplyOverlayProviderState = {
  isToggled: boolean;
  tweetID: string;
  tweetPreview: string;
};

export type ActionType = {
  type: string;
  payload?: any;
};

type ContextType = {
  state: ReplyOverlayProviderState;
  dispatch: Dispatch<ActionType>;
};

export const ReplyOverlayContext = createContext({} as ContextType);

const ReplyOverlayProvider: React.FC<ReplyOverlayProviderProps> = ({ children }): React.ReactElement => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);

 return (
    <ReplyOverlayContext.Provider value={{ state, dispatch }}>
      {children}
    </ReplyOverlayContext.Provider>
 );
};

export default ReplyOverlayProvider;