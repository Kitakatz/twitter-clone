import Heart from './Heart';
import { HeartProps } from './Heart/interface';
import Comments from './Comments';
import { CommentsProps } from './Comments/interface';
import Close from './Close';
import { CloseProps } from './Close/interface';

interface IconComponents {
  Heart: React.FC<HeartProps>;
  Comments: React.FC<CommentsProps>;
  Close: React.FC<CloseProps>;
};

const Icons: IconComponents = (): void => {};

Icons.Heart = Heart;
Icons.Comments = Comments;
Icons.Close = Close;

export default Icons;