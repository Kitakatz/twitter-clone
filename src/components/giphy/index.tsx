import React, { SyntheticEvent, useContext } from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import './styles.css';
import { IGif } from '@giphy/js-types';
import { GiphyOverlayActionType, GiphyOverlayContext } from '../../contexts/GiphyOverlay';

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch('seTcWWCcnRJ2xmftFLWX0tVadHwv8xld')

// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })

// Render the React Component and pass it your fetchGifs as a prop
const GiphyGrid: React.FC = (): React.ReactElement => {
  const { dispatch } = useContext(GiphyOverlayContext);

  const onGifClickHandler = (gif: IGif, event: SyntheticEvent<HTMLElement, Event>): void => {
    event.preventDefault();
    const gifURL: string = gif.images.original.url;

    console.log('Gif URL: ', gifURL);
    dispatch({ type: GiphyOverlayActionType.UPDATE_GIF , payload: gifURL });
    dispatch({ type: GiphyOverlayActionType.TOGGLE });
  };

  return (
    <Grid 
    className='giphy-container'
    width={568} 
    columns={2} 
    fetchGifs={fetchGifs}
    onGifClick={onGifClickHandler} />
  );
};
  
export default GiphyGrid;