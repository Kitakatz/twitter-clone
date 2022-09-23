import { useState } from "react";
import { LikeState, UseLikeHook } from "./interface";
import { httpRequest } from "./utils";

const useLikeHook = (): UseLikeHook => {
  const [state, setState] = useState<LikeState>({
    counter: 0,
    isLiked: false
  });

  const onClickHandler = async (): Promise<void> => {
    const response = await httpRequest();

    const countering = (isLiked: boolean, counter: number): number => !isLiked ? counter + 1 : counter - 1;;

    setState(prevState => ({
      counter: countering(prevState.isLiked, prevState.counter),
      isLiked: !prevState.isLiked
    }));
  };

  const componentDidMountHandler = async (): Promise<void> => {
    const response:any = await httpRequest();

    console.log('response from server', response);

    setState({ counter: response.data.likeCounter, isLiked: false})
  };

  return {
    state: state,
    onClickHandler: onClickHandler,
    componentDidMountHandler: componentDidMountHandler
  };
};

export default useLikeHook;