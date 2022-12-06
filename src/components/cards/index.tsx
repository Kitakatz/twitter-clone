import React from 'react';
import Feed from './Feed';
import Avatar from './Feed/Avatar';
import Content from './Feed/Content';
import { AvatarProps } from './Feed/Avatar/interfaces';
import { FeedProps } from './Feed/interfaces';
import { ContentProps } from './Feed/Content/interfaces';
import Reply from './Reply';
import { ReplyCardProps } from './Reply/interfaces';
import Detail from './Detail';
import { DetailProps } from './Detail/interfaces';

interface CardComponents {
  Feed: React.FC<FeedProps>;
  Avatar: React.FC<AvatarProps>;
  Content: React.FC<ContentProps>;
  Reply: React.FC<ReplyCardProps>;
  Detail: React.FC<DetailProps>;
};

const Cards: CardComponents = (): void => {};

Cards.Feed = Feed;
Cards.Avatar = Avatar;
Cards.Content = Content;
Cards.Reply = Reply;
Cards.Detail = Detail;

export default Cards;