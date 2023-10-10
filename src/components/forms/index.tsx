import React from 'react';
import Reply from './Reply';
import { ReplyFormProps } from './Reply/interfaces';
import Register from './Register';
import { RegisterFormProps } from './Register/interfaces';
import Login from './Login';
import { LoginFormProps } from './Login/interfaces';
import Verify from './Verify';
import { VerifyFormProps } from './Verify/interfaces';
import Tweet from './Tweet';
import { TweetProps } from './Tweet/interfaces';

interface FormComponents {
  Reply: React.FC<ReplyFormProps>;
  Register: React.FC<RegisterFormProps>;
  Login: React.FC<LoginFormProps>;
  Verify: React.FC<VerifyFormProps>;
  Tweet: React.FC<TweetProps>;
};

const Forms: FormComponents = (): void => {};

Forms.Reply = Reply;
Forms.Register = Register;
Forms.Login = Login;
Forms.Verify = Verify;
Forms.Tweet = Tweet;

export default Forms;