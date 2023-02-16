import React from 'react';
import ReplyOverlayProvider, { ReplyOverlayProviderProps } from './ReplyOverlay';
import TweetsProvider, { TweetsProviderProps } from './Tweets';
import Authenticated, { AuthenticatedProps } from './Authenticated';
import GiphyOverlay, { GiphyOverlayProviderProps } from './GiphyOverlay';

interface ProvidersComponents {
  ReplyOverlayProvider: React.FC<ReplyOverlayProviderProps>;
  TweetsProvider: React.FC<TweetsProviderProps>;
  Authenticated: React.FC<AuthenticatedProps>;
  GiphyOverlay: React.FC<GiphyOverlayProviderProps>;
};

const Providers: ProvidersComponents = (): void => {};

Providers.ReplyOverlayProvider = ReplyOverlayProvider;
Providers.TweetsProvider = TweetsProvider;
Providers.Authenticated = Authenticated;
Providers.GiphyOverlay = GiphyOverlay;

export default Providers;