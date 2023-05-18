import { User } from '../../../types/User';

interface ValidateResponse {
  username: (text: string) => string;
  password: (text: string) => string;
  phone: (text: string) => string;
  email: (text: string) => string;
  firstName: (text: string) => string;
  lastName: (text: string) => string;
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

  const phone = (text: string): string => {
    let message: string = '';
    const textFormatted = text.replaceAll('-', '');

    if (textFormatted.length !== 10) return message = 'Phone must be a valid 10 digit number.';
    
    return message;
  };

  const email = (text: string): string => {
    let message: string = '';
    const regex: RegExp = /.(com|org|net)/;

    if (!text.includes('@')) return message = 'Email must include @.';
    if (!regex.test(text)) return message = 'Email must include .com, .net, .org.';
    
    return message;
  };

  const firstName = (text: string): string => {
    let message: string = '';

    if (text.length < 2) return message = 'Your first name must be longer then 2 characters.';

    return message;
  };

  const lastName = (text: string): string => {
    let message: string = '';

    if (text.length < 2) return message = 'Your last name must be longer then 2 characters.';

    return message;
  };

  const validateUser = (user: User): void => {
    const usernameError = username(user.username);
    const passwordError = password(user.password);
    const phoneError = phone(user.phone);
    const emailError = email(user.email);
    const firstNameError = firstName(user.firstName);
    const lastNameError = lastName(user.lastName);
    const errorMessage = usernameError || passwordError || phoneError || emailError || firstNameError || lastNameError;
    if (errorMessage) throw new Error(errorMessage);
  };

  return {
    username: username,
    password: password,
    phone: phone,
    email: email,
    firstName: firstName,
    lastName: lastName,
    validateUser: validateUser
  };
};

interface SanitizeResponse {
  [key: string]: (text: string) => string;
  username: (text: string) => string;
  password: (text: string) => string;
  phone: (text: string) => string;
  email: (text: string) => string;
  firstName: (text: string) => string;
  lastName: (text: string) => string;
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

  const phone = (text: string): string => {
    const regex: RegExp = /[0-9]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    if (joinedText.length > 6) return `${joinedText.substring(0, 3)}-${joinedText.substring(3, 6)}-${joinedText.substring(6, 10)}`;

    if (joinedText.length > 3) return `${joinedText.substring(0, 3)}-${joinedText.substring(3, 6)}`;

    return joinedText.substring(0, 3);
  };

  const email = (text: string): string => {
    const regex: RegExp = /[a-zA-Z0-9@_.]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  const firstName = (text: string): string => {
    const regex: RegExp = /[a-zA-Z ]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('').trim();

    return joinedText;
  };

  const lastName = (text: string): string => {
    const regex: RegExp = /[a-zA-Z ]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('').trim();

    return joinedText;
  };

  return {
    username: username,
    password: password,
    phone: phone,
    email: email, 
    firstName: firstName,
    lastName: lastName
  }
};

export {
  Sanitize,
  Validate
};