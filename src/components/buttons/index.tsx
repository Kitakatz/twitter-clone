import React from 'react';
import Primary from './Primary';
import { PrimaryProps } from './Primary/interfaces';
import Large from './Large';
import { LargeProps } from './Large/interfaces';

interface ButtonComponents {
  Primary: React.FC<PrimaryProps>;
  Large: React.FC<LargeProps>;
};

const Buttons: ButtonComponents = (): void => { };

Buttons.Primary = Primary;
Buttons.Large = Large;

export default Buttons;