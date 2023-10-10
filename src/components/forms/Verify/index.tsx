import axios from 'axios';
import Buttons from '../../buttons';
import verifyScreenHook from './hooks';
import { VerifyFormProps } from './interfaces';
import './styles.css';

const Verify: React.FC<VerifyFormProps> = (): React.ReactElement => {
  const utils = verifyScreenHook();

  return (
    <div className='form-verify'>
      <h2 className='form-verify-title'>Verify your account</h2>
      <div className="form-verify-inputs">
        <input ref={utils.inputRefs.inputDigitOneRef} type='text' name='digitOne' placeholder='0' onChange={utils.onChangeHandler} onKeyDown={utils.onKeyDownHandler} value={utils.state.digitOne} className='form-verify-input' />
        <input ref={utils.inputRefs.inputDigitTwoRef} type='text' name='digitTwo' placeholder='0' onChange={utils.onChangeHandler} onKeyDown={utils.onKeyDownHandler} value={utils.state.digitTwo} className='form-verify-input' />
        <input ref={utils.inputRefs.inputDigitThreeRef}type='text' name='digitThree' placeholder='0' onChange={utils.onChangeHandler} onKeyDown={utils.onKeyDownHandler} value={utils.state.digitThree} className='form-verify-input' />
        <input ref={utils.inputRefs.inputDigitFourRef} type='text' name='digitFour' placeholder='0' onChange={utils.onChangeHandler} onKeyDown={utils.onKeyDownHandler} value={utils.state.digitFour} className='form-verify-input' />
        <input ref={utils.inputRefs.inputDigitFiveRef} type='text' name='digitFive' placeholder='0' onChange={utils.onChangeHandler} onKeyDown={utils.onKeyDownHandler} value={utils.state.digitFive} className='form-verify-input' />
        <input ref={utils.inputRefs.inputDigitSixRef} type='text' name='digitSix' placeholder='0' onChange={utils.onChangeHandler} onKeyDown={utils.onKeyDownHandler} value={utils.state.digitSix} className='form-verify-input' />
      </div>
      <div className='form-verify-button'>
        <Buttons.Large label='Verify' onClick={utils.onSubmitHandler} disabled={utils.isFormDisabled(utils.state)} />
      </div>
      {
        !utils.state.errorMessage
        ? null
        : <div className='form-verify-error'>{ utils.state.errorMessage }</div>
      }
    </div>
  );
};

export default Verify;