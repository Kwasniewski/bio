import React, { useState } from 'react';
import styled, { ThemeProvider as StyledThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Light theme (default) */
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --text-color: #333;
    --background-color: #f5f6fa;
    --card-background: #fff;
    --project-card-bg: #f8f9fa;
    --company-logo-filter: none;
    --company-logo-opacity: 90%;
  }

  [data-theme="dark"] {
    --primary-color: #61dafb;
    --secondary-color: #4fa3d1;
    --text-color: #e4e6eb;
    --background-color: #1a1a1a;
    --card-background: #242526;
    --project-card-bg: #2d2d2d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h2 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: var(--card-background);
  border: 2px solid var(--secondary-color);
  color: var(--text-color);
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const themeObject: DefaultTheme = {
    mode: theme
  };

  return (
    <StyledThemeProvider theme={themeObject}>
      <GlobalStyle />
      <ThemeToggle onClick={toggleTheme} aria-label="Toggle dark mode">
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </ThemeToggle>
      <Container>
        <Header />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </StyledThemeProvider>
  );
};

export default App; 