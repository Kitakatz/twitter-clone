import { render, screen } from '@testing-library/react';
import Footer from '.';

beforeEach(() => {
  const onChangeFileHandler = () => {};
  const onClickFileHandler = () => {};
  const onClickGifHandler = () => {};
  const onSubmitHandler = () => {};

  render(
    <Footer 
      tweet=''
      onChangeFileHandler={onChangeFileHandler}
      onClickFileHandler={onClickFileHandler}
      onClickGifHandler={onClickGifHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
});

test('if button is disabled without user text being input.', () => {
  const submitButtonNode = screen.getByTestId('tweet-reply-button');

  expect(submitButtonNode).toBeDisabled();
});