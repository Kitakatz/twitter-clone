
interface ValidateResponse {
  username: (text: string) => string;
  validateUser: (user: { username: string; password: string }) => void;
};

const Validate = (): ValidateResponse => {
  const username = (text: string): string => {
    let message: string = '';

    if (text.length < 6) return message = 'Your username must be longer then 6 characters.';

    return message;
  };

  const validateUser = (user: { username: string; password: string }): void => {
    const usernameError = username(user.username);
    const errorMessage = usernameError;
    if (errorMessage) throw new Error(errorMessage);
  };

  return {
    username: username,
    validateUser: validateUser
  };
};

interface SanitizeResponse {
  [key: string]: (text: string) => string;
  digit: (text: string) => string;
};

const Sanitize = (): SanitizeResponse => {
  const digit = (text: string): string => {
    const regex: RegExp = /[0-9]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  return {
    digit: digit,
  };
};

export {
  Sanitize,
  Validate
};