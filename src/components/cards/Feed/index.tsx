import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '..';
import Layout from '../../layout';
import Button from './Button';
import { FeedProps } from './interfaces';
import './styles.css';

const Feed: React.FC<FeedProps> = (props): React.ReactElement => {
  return (
    <div className="card-container">
      <Link 
        to={`detail/${props.tweet.id}`}
      >
        <Layout.Row>
          <Layout.Column>
            <Cards.Avatar />
          </Layout.Column>
          <Layout.Column>
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
      </Link>
    </div>
  );
};

export default Feed;