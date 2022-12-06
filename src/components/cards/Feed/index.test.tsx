import { render, screen } from '@testing-library/react';
import sum from './sum';
import Feed from '.';
import tweets from '../../../data/tweets';
import { BrowserRouter } from 'react-router-dom';

// todo
describe('first test group', () => {
  test('adds 1 + 2 = 3', () => {
    const result: number = sum(1,2);
  
    expect(result).toBe(3);
  });
  
  test('renders list of nodes without crashing', () => {
    render(<Feed tweet={tweets[0]} />, { wrapper: BrowserRouter });
  
    const customNode = screen.getByTestId('custom-element');
  
    console.log('customNode: ', customNode.innerHTML);
  
    expect(customNode).toBeTruthy();
  });
  
  test('renders a list of four nodes', () => {
    render(<Feed tweet={tweets[0]} />, { wrapper: BrowserRouter });
  
    const customNode = screen.getByTestId('custom-element');
  
    const nodeListLength = customNode.children[0].children.length;
  
    console.log('customNode: ', nodeListLength);
  
    expect(nodeListLength).toBe(4);
  });
})
