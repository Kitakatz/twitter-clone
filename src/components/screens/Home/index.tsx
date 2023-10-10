import React, { useContext, useEffect } from 'react';
import Containers from '../../containers';
import Cards from '../../cards';
import Overlays from '../../overlays';
import { HomeScreenProps } from './interfaces';
import { Tweet } from '../../../data/tweets';
import useHomeScreenHook from './hook';
import Animations from '../../animations';
import { AuthenticatedContext } from '../../../contexts/Authenticated';
import useWindowSize from '../../../hooks/useWindowDimensions';
import Layout from '../../layout';
import Navigation from '../../navigation';
import Forms from '../../forms';
import getCurrentPosition from '../../../utils/getCurrentPosition';

const Home: React.FC<HomeScreenProps> = (props): React.ReactElement => {
  const { state } = useHomeScreenHook();
  const { dispatch } = useContext(AuthenticatedContext);
  const windowSize = useWindowSize(true);

  const logout = (): void => {
    dispatch({ type: 'LOGOUT' });
  };

  const renderItems = (): React.ReactElement[] => {
    const items = state.tweets.map((tweet: Tweet, index: number) => {
      return (
        <Animations.FadeInFromTop key={tweet.id} index={index}>
          <Cards.Feed key={tweet.id} tweet={tweet} />
        </Animations.FadeInFromTop>
      );
    });
    return items;
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <div data-testid='home-screen' className="App" style={{ height: windowSize.height }}>
      {/* Overlays */}
      <Overlays.Reply />
      <Containers.Home>
        <Layout.Row>
          <Layout.Column height={windowSize.height}>
            <Navigation />
          </Layout.Column>
          <Layout.Column overflowY='scroll' height={windowSize.height}>
            <Forms.Tweet />
            {!state.loading ? (
              <div data-testid='tweets'>
                {renderItems()}
              </div>
            ) : 'Loading tweets...' }
          </Layout.Column>
          <Layout.Column height={windowSize.height}>
            <div style={{ width: 350 }}></div>
          </Layout.Column>
        </Layout.Row>
      </Containers.Home>
    </div>
  );
};

export default Home;