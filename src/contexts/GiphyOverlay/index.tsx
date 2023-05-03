import React, { useReducer, createContext, Dispatch } from 'react';
import reducer, { initialState } from './reducer';

export interface GiphyOverlayProviderProps {
  children: React.ReactNode;
};

export type GiphyOverlayProviderState = {
  isToggled: boolean;
  gif: string;
};

export type ActionType = {
  type: GiphyOverlayActionType;
  payload?: any;
};

export enum GiphyOverlayActionType {
  TOGGLE = 'TOGGLE',
  UPDATE_GIF = 'UPDATE_GIF',
  TOGGLE_RESET = 'TOGGLE_RESET'
};

export type ContextType = {
  state: GiphyOverlayProviderState;
  dispatch: Dispatch<ActionType>;
};

export const GiphyOverlayContext = createContext({} as ContextType);

const GiphyOverlayProvider: React.FC<GiphyOverlayProviderProps> = ({ children }): React.ReactElement => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);

 return (
    <GiphyOverlayContext.Provider value={{ state, dispatch }}>
      {children}
    </GiphyOverlayContext.Provider>
 );
};

export default GiphyOverlayProvider;