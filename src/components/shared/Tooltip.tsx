import styled from 'styled-components';

export const Tooltip = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  padding: 0.8rem;
  background-color: var(--card-background);
  color: var(--text-color);
  border-radius: 6px;
  font-size: 0.9rem;
  width: max-content;
  max-width: 250px;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  text-align: center;
  border: 2px solid var(--secondary-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent var(--secondary-color) transparent;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: calc(100% - 2px);
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent var(--card-background) transparent;
    z-index: 1;
  }
`;

export const TooltipTrigger = styled.div`
  position: relative;
  z-index: 1;

  &:hover {
    z-index: 2;
  }

  &:hover ${Tooltip} {
    opacity: 1;
    visibility: visible;
  }
`; 