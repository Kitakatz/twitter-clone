import React from 'react';
import Primary from './Primary';
import { PrimaryProps } from './Primary/interfaces';
import Large from './Large';
import { LargeProps } from './Large/interfaces';
import Logout from './Logout';
import { LogoutProps } from './Logout/interfaces';

interface ButtonComponents {
  Primary: React.FC<PrimaryProps>;
  Large: React.FC<LargeProps>;
  Logout: React.FC<LogoutProps>;
};

const Buttons: ButtonComponents = (): void => { };

Buttons.Primary = Primary;
Buttons.Large = Large;
Buttons.Logout = Logout;

export default Buttons;