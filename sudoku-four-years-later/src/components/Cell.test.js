import { render, screen } from '@testing-library/react';
import Cell from './Cell';

test('renders Cell', () => {
  render(<Cell />);
  const cellElement = screen.getByText(/Cell/i);
  expect(cellElement).toBeInTheDocument();
});
