import React from 'react';
import Layout from '../../layout';
import { ReplyFormProps } from './interfaces';
import './styles.css';
import Cards from '../../cards';
import Preview from './Preview';
import Footer from './Footer';
import useReplyFormHook from './hook';

const Reply: React.FC<ReplyFormProps> = (props): React.ReactElement => {
  const util = useReplyFormHook();

  return (
    <>  
      {/* Preview Section */}
      <Preview tweet={util.replyOverlayState.tweetPreview}/>
      {/* Form Section */}
      <div className='form-reply-container'>
        <Layout.Row flexDirection='row'>
          <Layout.Column width={48} marginRight={16}>
            <Cards.Avatar src='/user-profile.jpeg'/>
          </Layout.Column>
          <Layout.Column flex={1}>
            <textarea 
              className='reply-textarea'
              placeholder='Tweet your reply'
              value={util.state.value}
              onChange={util.onChangeHandler}
              data-testid= 'reply-tweet'
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
    </>
  );
};

export default Reply;