import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const ContactSection = styled.section`
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: var(--text-color);
  font-size: 2.5rem;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: var(--secondary-color);
    transform: translateY(-3px);
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <h2>Get in Touch</h2>
      <SocialLinks>
        <SocialLink 
          href="https://github.com/Kwasniewski" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
        <SocialLink 
          href="https://www.linkedin.com/in/joseph-kwasniewski-273b8b8/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialLink>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact; 