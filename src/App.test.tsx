import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const gameTitle = screen.getByText(/Guess The Number/i);
  expect(gameTitle).toBeInTheDocument();
});
