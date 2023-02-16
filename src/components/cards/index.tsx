import React from 'react';
import Feed from './Feed';
import { FeedProps } from './Feed/interfaces';
import Avatar from './Feed/Avatar';
import { AvatarProps } from './Feed/Avatar/interfaces';
import Content from './Feed/Content';
import { ContentProps } from './Feed/Content/interfaces';
import Reply from './Reply';
import { ReplyCardProps } from './Reply/interfaces';
import Detail from './Detail';
import { DetailProps } from './Detail/interfaces';
import Gifs from './Gifs';
import { GifsProps } from './Gifs/interfaces';

interface CardComponents {
  Feed: React.FC<FeedProps>;
  Avatar: React.FC<AvatarProps>;
  Content: React.FC<ContentProps>;
  Reply: React.FC<ReplyCardProps>;
  Detail: React.FC<DetailProps>;
  Gifs: React.FC<GifsProps>;
};

const Cards: CardComponents = (): void => {};

Cards.Feed = Feed;
Cards.Avatar = Avatar;
Cards.Content = Content;
Cards.Reply = Reply;
Cards.Detail = Detail;
Cards.Gifs = Gifs;

export default Cards;