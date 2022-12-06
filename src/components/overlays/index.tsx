import Reply from './Reply/index';
import { ReplyOverlayProps } from './Reply/interfaces';

const Overlays: {
  Reply: React.FC<ReplyOverlayProps>
} = (): void => {};

Overlays.Reply = Reply;

export default Overlays;