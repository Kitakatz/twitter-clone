import React from 'react';
import Buttons from '../../../buttons';
import Icons from '../../../icons';
import Layout from '../../../layout';
import { FooterProps } from './interfaces';
import './styles.css';

const Footer = React.forwardRef<HTMLInputElement, FooterProps>((props, ref): React.ReactElement => {
  return (
    <Layout.Row marginTop={10} marginBottom={16}>
      <Layout.Column flex='1'>
        <div className='media-icon' onClick={props.onClickFileHandler}>
          <Icons.Media />
        </div>
        <input
          type='file'
          name='file'
          onChange={props.onChangeFileHandler}
          ref={ref}
          accept='.jpeg, .png, image/png, .gif, .mp4, application/mp4'
          style={{ display: 'none' }}
        />
      </Layout.Column>
      <Layout.Column flex='1'>
        <div className='gif-icon' onClick={props.onClickGifHandler}>
          <Icons.Gif />
        </div>
      </Layout.Column>
      <Layout.Column>
        <Buttons.Primary
          data-testid='tweet-reply-button'
          label='Reply'
          onClick={props.onSubmitHandler}
          disabled={!props.tweet ? true : false}
        />
      </Layout.Column>
    </Layout.Row>
  );
});

export default Footer;