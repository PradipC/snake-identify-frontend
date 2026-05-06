import { render, screen } from '@testing-library/react';
import App from './App';

test('renders snake identifier upload screen', () => {
  render(<App />);
  expect(screen.getByText(/Snake Identifier/i)).toBeInTheDocument();
  expect(screen.getByText(/PHOTOGRAPH THE SNAKE/i)).toBeInTheDocument();
  expect(screen.getByText(/Open Camera/i)).toBeInTheDocument();
  expect(screen.getByText(/Upload Gallery/i)).toBeInTheDocument();
});
