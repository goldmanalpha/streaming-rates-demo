import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Streaming Rates Demo/i);
  expect(linkElement).toBeInTheDocument();
});
