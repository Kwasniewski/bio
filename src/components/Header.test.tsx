import { render, screen } from '@testing-library/react';
import Header from './Header';

test('header displays', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Software Developer/i);
  expect(linkElement).toBeInTheDocument();
});
