import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders heading text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/An application for getting car information./i);
  expect(textElement).toBeInTheDocument();
});
