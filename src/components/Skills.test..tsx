import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('skills displays', () => {
  render(<Skills />);
  const linkElement = screen.getByText(/JavaScript/i);
  expect(linkElement).toBeInTheDocument();
});
