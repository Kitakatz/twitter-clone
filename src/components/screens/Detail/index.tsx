import React from 'react';
import Cards from '../../cards';
import Containers from '../../containers';
import Overlays from '../../overlays';
import { DetailProps } from './interfaces';
import useDetailScreenHook from './hook';
import Lists from '../../lists';
import Layout from '../../layout';
import Navigation from '../../navigation';
import useWindowSize from '../../../hooks/useWindowDimensions';

const Detail: React.FC<DetailProps> = (props): React.ReactElement | null => {
  const { state } = useDetailScreenHook();
  const windowSize = useWindowSize(true);

  return (
    <div 
      data-testid='detail-screen'
      className="App"
    >
      {/* Overlays */}
      <Overlays.Reply />
      <Containers.Home>
        <Layout.Row>
          <Layout.Column height={windowSize.height}>
            <Navigation />
          </Layout.Column>
          <Layout.Column overflowY='scroll' height={windowSize.height}>
            {!state.loading ? (
              <>
                <Cards.Detail tweet={state.tweet} />
                <Lists.DetailTweets items={state.tweet.replies} /> 
              </>
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

export default Detail;