import React from 'react';
import Cards from '..';
import Layout from '../../layout';
import Button from '../Feed/Button';
import { DetailProps } from './interfaces';
import './styles.css';

const Detail: React.FC<DetailProps> = (props): React.ReactElement => {
  return (
    <div className="card-container">
      <Layout.Row>
        <Layout.Column width={48} marginRight={16}>
          <Cards.Avatar />
        </Layout.Column>
        <Layout.Column flex={1}>
          <Cards.Content tweet={props.tweet} />
          <div className="buttons-container" data-testid="custom-element">
            <Layout.Row width="100%" justifyContent="space-between">
              <Layout.Column>
                <Button.Like tweetLikeCount={props.tweet.likes} />
              </Layout.Column>
              <Layout.Column>
                <Button.Reply tweetID={props.tweet.id} tweetPreview={props.tweet.tweet} />
              </Layout.Column>
              <Layout.Column>
                <div className="square"></div>
              </Layout.Column>
              <Layout.Column>
                <div className="square"></div>
              </Layout.Column>
            </Layout.Row>
          </div>
        </Layout.Column>
      </Layout.Row>
    </div>
  );
};

export default Detail;