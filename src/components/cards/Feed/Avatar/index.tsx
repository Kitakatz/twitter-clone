import React from "react";
import './style.css';
import { AvatarProps } from "./interfaces";

const Avatar: React.FC<AvatarProps> = (props): React.ReactElement => {
  return (
    <div className='avatar'>
      <div className='logo'>
        <img src='/aws-amplified.png' alt='user-avatar' />
      </div>
    </div>
  );
};

export default Avatar;