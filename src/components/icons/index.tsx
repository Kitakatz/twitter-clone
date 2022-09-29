import Heart from './Heart';
import { HeartProps } from './Heart/interface';

const Icons: {
  Heart: React.FC<HeartProps>
} = (): void => {};

Icons.Heart = Heart;

export default Icons;