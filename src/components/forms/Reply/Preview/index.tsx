import Layout from '../../../layout';
import Content from '../Content';
import Timeline from '../Timeline';
import { PreviewProps } from './interfaces';

const Preview: React.FC<PreviewProps> = (props): React.ReactElement => {
  return (
    <div className='form-reply-preview-container'>
      <Layout.Row flexDirection='row'>
        <Layout.Column>
          <Timeline />
        </Layout.Column>
        <Layout.Column flex={1}>
          <Content tweet={props.tweet} />
        </Layout.Column>
      </Layout.Row>
    </div>
  );
};

export default Preview;