import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('projects displays', () => {
  render(<Projects />);
  const linkElement = screen.getByText(/DNS Split Relay/i);
  expect(linkElement).toBeInTheDocument();
});
