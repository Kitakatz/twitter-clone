import React from 'react';
import Reply from './Reply';
import { ReplyFormProps } from './Reply/interfaces';
import Register from './Register';
import { RegisterFormProps } from './Register/interfaces';
import Login from './Login';
import { LoginFormProps } from './Login/interfaces';

interface FormComponents {
  Reply: React.FC<ReplyFormProps>;
  Register: React.FC<RegisterFormProps>;
  Login: React.FC<LoginFormProps>;
}

const Forms: FormComponents = (): void => {};

Forms.Reply = Reply;
Forms.Register = Register;
Forms.Login = Login;

export default Forms;