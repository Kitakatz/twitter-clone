import React from 'react';
import Like from './Like';
import Reply from './Reply';
import { LikeProps } from './Like/interface';
import { ReplyProps } from './Reply/interface';

const Button: {
  Like: React.FC<LikeProps>,
  Reply: React.FC<ReplyProps>
} = (): void => {
};

Button.Like = Like;
Button.Reply = Reply;

export default Button;