import Heart from './Heart';
import { HeartProps } from './Heart/interface';
import Comments from './Comments';
import { CommentsProps } from './Comments/interface';
import Close from './Close';
import { CloseProps } from './Close/interface';
import Media from './Media';
import { MediaProps } from './Media/interface';
import Gif from './Gif';
import { GifProps } from './Gif/interface';

interface IconComponents {
  Heart: React.FC<HeartProps>;
  Comments: React.FC<CommentsProps>;
  Close: React.FC<CloseProps>;
  Media: React.FC<MediaProps>;
  Gif: React.FC<GifProps>;
};

const Icons: IconComponents = (): void => {};

Icons.Heart = Heart;
Icons.Comments = Comments;
Icons.Close = Close;
Icons.Media = Media;
Icons.Gif = Gif;

export default Icons;