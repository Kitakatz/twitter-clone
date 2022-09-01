import React from 'react';
import Like from './Like';
import { LikeProps } from './Like/interface';

const Button: {
  Like: React.FC<LikeProps>,
} = (): void => {
};

Button.Like = Like;

export default Button;