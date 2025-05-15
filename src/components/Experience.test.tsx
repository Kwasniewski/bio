import { render, screen } from '@testing-library/react';
import Experience from './Experience';

test('skills displays', () => {
  render(<Experience />);
  const linkElement = screen.getByText(/Operations Specialist/i);
  expect(linkElement).toBeInTheDocument();
});
