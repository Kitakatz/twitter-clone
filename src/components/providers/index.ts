import React from 'react';
import Storage, { StorageProps } from './Storage';

interface ProvidersComponents {
  Storage: React.FC<StorageProps>;
};

const globalProviders: ProvidersComponents = (): void => { };

globalProviders.Storage = Storage;

export default globalProviders;