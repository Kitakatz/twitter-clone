
//Checking if input initializes to empty string.
//Check if typing a value updates the state.

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Reply from '.';
import Providers from '../../../contexts';

beforeEach(() => {
  render(
    <Providers.ReplyOverlayProvider>
      <Providers.GiphyOverlay>
        <Providers.TweetsProvider>
          <Reply />
        </Providers.TweetsProvider>
      </Providers.GiphyOverlay>
    </Providers.ReplyOverlayProvider>
  );
});

test('If text area input defaults to empty value.', () => {
  const inputNode = screen.getByTestId('reply-tweet');

  expect(inputNode).toHaveDisplayValue('');
});

test('If tweet input changes when user types.', () => {
  const inputNode = screen.getByTestId('reply-tweet');
  const tweetMessage = 'This is a tweet to post by Andrew.'

  userEvent.type(inputNode, tweetMessage);

  expect(inputNode).toHaveDisplayValue(tweetMessage);
})