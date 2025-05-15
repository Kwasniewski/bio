import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('skills displays', () => {
  render(<Skills />);
  const linkElement = screen.getByText(/TypeScript/i);
  expect(linkElement).toBeInTheDocument();
});
