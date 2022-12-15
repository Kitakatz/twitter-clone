import React from 'react';
import FadeInFromTop, { FadeInFromTopProps } from './FadeInFromTop';

interface AnimationsComponents {
  FadeInFromTop: React.FC<FadeInFromTopProps>
};

const Animations: AnimationsComponents = () => {};

Animations.FadeInFromTop = FadeInFromTop;

export default Animations;