import { User } from './utils';

interface ValidateResponse {
  username: (text: string) => string;
  password: (text: string) => string;
  validateUser: (user: User) => void;
};

const Validate = (): ValidateResponse => {
  const username = (text: string): string => {
    let message: string = '';

    if (text.length < 6) return message = 'Your username must be longer then 6 characters.';

    return message;
  };

  const password = (text: string): string => {
    let message: string = '';

    if (text.length < 6) return message = 'Your password must be longer then 6 characters.';

    return message;
  };

  const validateUser = (user: User): void => {
    const usernameError = username(user.username);
    const passwordError = password(user.password);
    const errorMessage = usernameError || passwordError;
    if (errorMessage) throw new Error(errorMessage);
  };

  return {
    username: username,
    password: password,
    validateUser: validateUser
  };
};

interface SanitizeResponse {
  [key: string]: (text: string) => string;
  username: (text: string) => string;
  password: (text: string) => string;
};

const Sanitize = (): SanitizeResponse => {
  const username = (text: string): string => {
    const regex: RegExp = /[a-zA-Z0-9!@#$%^&*()_]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  const password = (text: string): string => {
    const regex: RegExp = /[a-zA-Z0-9!@#$%^&*_]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  return {
    username: username,
    password: password
  };
};

export {
  Sanitize,
  Validate
};