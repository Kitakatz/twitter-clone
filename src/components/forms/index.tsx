import React from 'react';
import Reply from './Reply';
import { ReplyFormProps } from './Reply/interfaces';

interface FormComponents {
  Reply: React.FC<ReplyFormProps>;
}

const Forms: FormComponents = (): void => {};

Forms.Reply = Reply;

export default Forms;