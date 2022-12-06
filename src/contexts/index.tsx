import React from 'react';
import ReplyOverlayProvider, { ReplyOverlayProviderProps } from './ReplyOverlay';
import TweetsProvider, { TweetsProviderProps } from './Tweets';

interface ProvidersComponents { 
  ReplyOverlayProvider: React.FC<ReplyOverlayProviderProps>;
  TweetsProvider: React.FC<TweetsProviderProps>;
};

const Providers: ProvidersComponents = (): void => {};

Providers.ReplyOverlayProvider = ReplyOverlayProvider;
Providers.TweetsProvider = TweetsProvider;

export default Providers;