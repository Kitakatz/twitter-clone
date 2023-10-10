import { RefObject } from 'react';

export interface VerifyFormProps {

};

export interface VerifyFormStateProps {
  digitOne: string;
  digitTwo: string;
  digitThree: string;
  digitFour: string;
  digitFive: string;
  digitSix: string;
  errorMessage: string;
};

export interface InputRefs {
  inputDigitOneRef: RefObject<HTMLInputElement>;
  inputDigitTwoRef: RefObject<HTMLInputElement>;
  inputDigitThreeRef: RefObject<HTMLInputElement>;
  inputDigitFourRef: RefObject<HTMLInputElement>;
  inputDigitFiveRef: RefObject<HTMLInputElement>;
  inputDigitSixRef: RefObject<HTMLInputElement>;
};