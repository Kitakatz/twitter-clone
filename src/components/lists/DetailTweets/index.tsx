import React, { useContext } from 'react';
import { TweetsContext } from '../../../contexts/Tweets';
import Animations from '../../animations';
import FadeInFromTop from '../../animations/FadeInFromTop';
import Cards from '../../cards';
import Layout from '../../layout';
import { DetailTweetsProps } from './interfaces';
import './styles.css';

const DetailTweets: React.FC<DetailTweetsProps> = (props): React.ReactElement | null => {
  const { state } = useContext(TweetsContext);

  const renderPreview = (mediaType: string, mediaUrl: string): React.ReactElement | null => {
    if (mediaType === 'image/gif') return (
      <div className='image-preview'>
        <img src={mediaUrl} style={{ width: '100%' }} />
      </div>
    );


    if ( mediaType === 'image/jpeg' ) return (
      <div className='image-preview'>
        <img src={mediaUrl} style={{ width: '100%' }} />
      </div>
    );

    if ( mediaType === 'video/mp4' ) return (
      <div className='image-preview'>
        <video controls>
          <source src={mediaUrl} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    );

    return null;
  };


  const renderItems = (): React.ReactElement[] => {
    const items = props.items.map((item: any, index: number) => {
      return (
        <Animations.FadeInFromTop key={item.id} index={index}>
          <div className="tweet">
            <Layout.Row>
              <Layout.Column width={48} marginRight={16}>
                <Cards.Avatar />
              </Layout.Column>
              <Layout.Column flex="1">
                <div className="handler-section">
                  <div className="handler">AWS Amplify</div>
                  <div className="replyTo">@{item.author}</div>
                  <div className="seperator">·</div>
                  <div className="timestamp">Aug 2</div>
                </div>
                <div className='replying-to'>
                  Replying to <a href=''>@AWSAmplify</a>
                </div>
                <div className="paragraph">{item.tweet}</div>
                {renderPreview(item.mediaType, item.mediaUrl)}
              </Layout.Column>
            </Layout.Row>
          </div>
        </Animations.FadeInFromTop>
      );
    });

    return items;
  };

  return (
    <div className='detail-tweets-container'>
      {renderItems()}
    </div>
  );
};

export default DetailTweets;