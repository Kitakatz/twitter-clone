import React from 'react';
import { VerifyProps } from './interfaces';
import Forms from '../../forms';
import useWindowSize from '../../../hooks/useWindowDimensions';
import './styles.css';

const Verify: React.FC<VerifyProps> = (): React.ReactElement => {
  const windowSize = useWindowSize(true);

  return (
    <div className="screen-verify-form" style={{ height: windowSize.height }}>
      <Forms.Verify />
    </div>
  );
};

export default Verify;