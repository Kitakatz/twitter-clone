import { render, screen, waitFor, waitForOptions } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Screens from '..';

const _waitForOptions: waitForOptions = { timeout: 2250 };

describe('Home screen', () => {
  test('If component initializes to loading.', async () => {
    render(<Screens.Home />);

    expect(await screen.findByText('Loading tweets...')).toBeVisible();
  });

  test('If component loads and renders tweets.', async () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Routes>
          <Route
            path='/home'
            element={<Screens.Home />}
          />
        </Routes>
      </MemoryRouter>
    );

    const divNode = await waitFor(() => screen.getByTestId('tweets'), _waitForOptions);

    expect(divNode.outerHTML).toBeTruthy();
  });
});