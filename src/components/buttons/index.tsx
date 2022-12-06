import React from 'react';
import Primary from './Primary';
import { PrimaryProps } from './Primary/interfaces';

interface ButtonComponents {
  Primary: React.FC<PrimaryProps>;
};

const Buttons: ButtonComponents = (): void => { };

Buttons.Primary = Primary;

export default Buttons;