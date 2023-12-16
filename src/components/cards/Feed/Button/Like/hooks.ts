import React, { useCallback, useState } from 'react';
import { LikeState, UseLikeHook } from './interface';
import { API } from '../../../../../utils/api';
import { useParams } from 'react-router-dom';
import { RouterParams } from '../../../../screens/Detail/interfaces';
import TokenManager from '../../../../../utils/TokenManager';

const useLikeHook = (tweetID: string): UseLikeHook => {
  const params = useParams<RouterParams>();
  const [state, setState] = useState<LikeState>({
    isInitialized: false,
    counter: 0,
    isLiked: false
  });

  const onClickHandler = async (event: React.MouseEvent<HTMLElement>): Promise<void> => {
    event.preventDefault();
    const countering = (isLiked: boolean, counter: number): number => !isLiked ? counter + 1 : counter - 1;

    try {
      const accessToken = TokenManager().getAccessToken();
      !state.isLiked ?   await API().like(accessToken, params.id || '') : await API().unlike(accessToken, params.id || '');
      setState(prevState => ({
        isInitialized: prevState.isInitialized, 
        counter: countering(prevState.isLiked, prevState.counter),
        isLiked: !prevState.isLiked
      }));
    } catch (error) {
      console.error('Error has been detected. Reverting state.. ', error);
      setState(prevState => ({
        isInitialized: prevState.isInitialized, 
        counter: countering(prevState.isLiked, prevState.counter),
        isLiked: !prevState.isLiked
      }));
    };
  };

  const componentDidMountHandler = useCallback(async () => {
    try{
      const accessToken = TokenManager().getAccessToken();
      const response = await API().fetchLikes( accessToken, params.id || tweetID );
  
      if (response.data.error) throw new Error(response.data.error.message);
  
      setState({ isInitialized: true, counter: response.data.likes, isLiked: false });
    } catch(error: any) {
      setState({ isInitialized: true, counter: 0, isLiked: false });
    };
  }, []);
  

  return {
    state: state,
    onClickHandler: onClickHandler,
    componentDidMountHandler: componentDidMountHandler
  };
};

export default useLikeHook;