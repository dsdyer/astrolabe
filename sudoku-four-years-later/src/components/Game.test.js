import { render, screen } from '@testing-library/react';
import Game from './Game';

test('renders Game', () => {
  render(<Game />);
  const gameElement = screen.getByText(/Game/i);
  expect(gameElement).toBeInTheDocument();
});
