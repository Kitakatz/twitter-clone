import { useRef, useState } from 'react';
import { InputRefs, VerifyFormStateProps } from './interfaces';
import { Sanitize } from './validate';

interface UseVerifyScreenHookResponse {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmitHandler: () => Promise<void>;
  isFormDisabled: (state: any) => boolean;
  inputRefs: InputRefs;
  state: VerifyFormStateProps;
};

const useVerifyScreenHook = (): UseVerifyScreenHookResponse => {
  const [ state, setState ] = useState<VerifyFormStateProps>({
    digitOne: '',
    digitTwo: '',
    digitThree: '',
    digitFour: '',
    digitFive: '',
    digitSix: '',
    errorMessage: ''
  });

  const inputDigitOneRef = useRef<HTMLInputElement>(null);
  const inputDigitTwoRef = useRef<HTMLInputElement>(null);
  const inputDigitThreeRef = useRef<HTMLInputElement>(null);
  const inputDigitFourRef = useRef<HTMLInputElement>(null);
  const inputDigitFiveRef = useRef<HTMLInputElement>(null);
  const inputDigitSixRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = Sanitize().digit(event.target.value);
    
    if ( value.length === 6 ) {
      console.log('user pasted in six digits.', value);
      setState(prevState => ({
        ...prevState,
        digitOne: value[0],
        digitTwo: value[1],
        digitThree: value[2],
        digitFour: value[3],
        digitFive: value[4],
        digitSix: value[5],
      }));
      inputDigitSixRef.current?.focus();
    };

    if ( value.length > 1 ) {
      return;
    };

    setState(prevState => ({
      ...prevState,
      [key]: value
    }));

    if ( key === 'digitOne' && value ) {
      inputDigitTwoRef.current?.focus();
    };
    if ( key === 'digitTwo' && value ) {
      inputDigitThreeRef.current?.focus();
    };
    if ( key === 'digitThree' && value ) {
      inputDigitFourRef.current?.focus();
    };
    if ( key === 'digitFour' && value ) {
      inputDigitFiveRef.current?.focus();
    };
    if ( key === 'digitFive' && value ) {
      inputDigitSixRef.current?.focus();
    };
  };

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if ( event.key === 'Backspace' ) {
      if ( event.target.name === 'digitTwo' ) {
        inputDigitOneRef.current?.focus();
      };
      if ( event.target.name === 'digitThree' ) {
        inputDigitTwoRef.current?.focus();
      };
      if ( event.target.name === 'digitFour' ) {
        inputDigitThreeRef.current?.focus();
      };
      if ( event.target.name === 'digitFive' ) {
        inputDigitFourRef.current?.focus();
      };
      if ( event.target.name === 'digitSix' && !state.digitSix ) {
        inputDigitFiveRef.current?.focus();
      };
    };
  };

  const onSubmitHandler = async (): Promise<void> => {
    try {
      // const user = utils.createUserEntity(state);

      // validate.validateUser(user);

      // const response = await API().login(user);
      // if (response.data.error) throw new Error(response.data.error.message);

      // dispatch({type:'LOGIN'});
    } catch(error: any) {
      setState(prevState => ({ ...prevState , errorMessage: error.message }));
      console.log(error);
    };
  };

  const isFormDisabled = (state: any): boolean => {
    if (
      state.digitOne && 
      state.digitTwo &&
      state.digitThree &&
      state.digitFour &&
      state.digitFive &&
      state.digitSix
      ) return false;
    return true;
  };

  return {
    onChangeHandler: onChangeHandler,
    onKeyDownHandler: onKeyDownHandler,
    onSubmitHandler: onSubmitHandler,
    isFormDisabled: isFormDisabled,
    inputRefs: {
      inputDigitOneRef: inputDigitOneRef,
      inputDigitTwoRef: inputDigitTwoRef,
      inputDigitThreeRef: inputDigitThreeRef,
      inputDigitFourRef: inputDigitFourRef,
      inputDigitFiveRef: inputDigitFiveRef,
      inputDigitSixRef: inputDigitSixRef
    },
    state: state
  };
};

export default useVerifyScreenHook;
