import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio name', () => {
  render(<App />);
  expect(screen.getAllByText(/Dipendu Dey/i).length).toBeGreaterThan(0);
});
