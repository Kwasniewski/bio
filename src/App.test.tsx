import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('name displays', () => {
  render(<App />);
  const linkElement = screen.getByText(/Joseph Kwasniewski/i);
  expect(linkElement).toBeInTheDocument();
});

test('background color changes on mode switch', () => {
  render(<App />);
  const linkElement = screen.getByLabelText(/Toggle dark mode/i);
  fireEvent.click(linkElement);
  const theme = document.documentElement.getAttribute('data-theme');
  fireEvent.click(linkElement);
  const newTheme = document.documentElement.getAttribute('data-theme');
  expect(theme).not.toEqual(newTheme);
});
