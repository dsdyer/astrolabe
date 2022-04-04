import { render, screen } from '@testing-library/react';
import Grid from './Grid';
// import Cell from './Cell';

test('renders Grid', () => {
  render(<Grid />);
  const gridElement = screen.getByText(/Grid/i);
  expect(gridElement).toBeInTheDocument()
});

// test('fills grid with cells', () => {
//   render(<Grid />);
//   const gridElement = screen.getByText(/Grid/i);
//   const cellElements = screen.getAllByText(/Cell/i);

//   expect(gridElement).toContainElement(cellElements)
//   expect(cellElements.length).toBe(81)
// });
