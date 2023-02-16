import React, { useContext } from 'react';
import { GiphyOverlayActionType, GiphyOverlayContext } from '../../../contexts/GiphyOverlay';
import GiphyGrid from '../../giphy';
import Icons from '../../icons';
import Layout from '../../layout';
import { GifsProps } from './interfaces';
import './styles.css';

const Gifs: React.FC<GifsProps> = (props): React.ReactElement => {
  const { dispatch } = useContext(GiphyOverlayContext);

  const onClickHandler = (): void => {
      dispatch({ type: GiphyOverlayActionType.TOGGLE });
  };

  return (
    <div className='gifs-card-container'>
      <Layout.Row
        flexDirection='column'
      >
        <Layout.Column
          display='flex'
          alignItems='center'
          height={53}
        >
          <div
            className='close'
            onClick={onClickHandler}
          >
            <Icons.Close />
          </div>
        </Layout.Column>
        <Layout.Column>
          <GiphyGrid />
        </Layout.Column>
      </Layout.Row>
    </div>
  );
};

export default Gifs;