import React from 'react';
import Storage, { StorageProps } from './Storage';
import SilentRefresh, { SilentRefreshProps } from './SilentRefresh';

interface ProvidersComponents {
  Storage: React.FC<StorageProps>;
  SilentRefresh: React.FC<SilentRefreshProps>;
};

const globalProviders: ProvidersComponents = (): void => { };

globalProviders.Storage = Storage;
globalProviders.SilentRefresh = SilentRefresh;

export default globalProviders;