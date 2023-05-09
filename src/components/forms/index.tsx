import React from 'react';
import Reply from './Reply';
import { ReplyFormProps } from './Reply/interfaces';
import Register from './Register';
import { RegisterFormProps } from './Register/interfaces';

interface FormComponents {
  Reply: React.FC<ReplyFormProps>;
  Register: React.FC<RegisterFormProps>;
}

const Forms: FormComponents = (): void => {};

Forms.Reply = Reply;
Forms.Register = Register;

export default Forms;