import { render, screen, waitFor, waitForOptions } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Screens from '..';

const _waitForOptions: waitForOptions = { timeout: 2250 };

describe('Detail Screen', () => {
  test('If component returns null when initializes', () => {
    const component = render(<Screens.Detail />);

    expect(component.container.innerHTML).toBeFalsy();
  });

  test('If it renders when the tweet is fetched', async () => {
    render(
      <MemoryRouter initialEntries={['/home/detail/01']}> 
        <Routes>
          <Route 
            path='/home/detail/:id'
            element={<Screens.Detail />}
          />      
        </Routes>
      </MemoryRouter>
    );
      
    const detailScreenNode = await waitFor(() => screen.getByTestId('detail-screen'), _waitForOptions);

    expect(detailScreenNode.innerHTML).toBeTruthy();
  });
});