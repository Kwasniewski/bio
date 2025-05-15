import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('name displays', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Get in Touch/i);
  expect(linkElement).toBeInTheDocument();
});
