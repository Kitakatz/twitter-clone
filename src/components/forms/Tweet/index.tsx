import Cards from '../../cards';
import Layout from '../../layout';
import useTweetFormHook from './hooks';
import { TweetProps } from './interfaces';
import './styles.css';
import Footer from '../Reply/Footer';

const Tweet: React.FC<TweetProps> = (): React.ReactElement => {
  const util = useTweetFormHook();

  return (
    <div className='form-tweet-container'>
      <Layout.Row flexDirection='row'>
        <Layout.Column width={40} marginRight={12}>
          <Cards.Avatar src='/user-profile.jpeg'/>
        </Layout.Column>
        <Layout.Column flex={1}>
          <textarea 
            className='tweet-area'
            placeholder='What is happening?!'
            value={util.state.value}
            onChange={util.onChangeHandler}
            data-testid= 'tweet-tweet'
          />
          {util.state.previewUrl || util.giphyOverlayContext.state.gif ? util.renderPreview() : null}
          <Footer
            ref={util.imageFileRef}
            tweet={util.state.value}
            onChangeFileHandler={util.onChangeFileHandler}
            onClickFileHandler={util.onClickFileHandler}
            onClickGifHandler={util.onClickGifHandler}
            onSubmitHandler={util.onSubmitHandler}
          />
        </Layout.Column>
      </Layout.Row>
    </div>
  );
};

export default Tweet;