import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface GoogleDocEmbedProps {
  docUrl: string;
  title?: string;
}

const EmbedContainer = styled.section`
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const EmbedTitle = styled.h2`
  margin-bottom: 0;
  color: var(--text-color);
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--secondary-color);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 800px;
  border: none;
  border-radius: 8px;
  background-color: white;
`;

const GoogleDocEmbed: React.FC<GoogleDocEmbedProps> = ({ docUrl, title }) => {
  // Convert the standard Google Doc URL to an embed URL
  const getEmbedUrl = (url: string) => {
    // Handle different URL formats
    if (url.includes('/edit')) {
      return url.replace('/edit', '/preview');
    }
    if (!url.endsWith('/preview')) {
      return `${url}/preview`;
    }
    return url;
  };

  // Convert the URL to a download URL (export as PDF)
  const getDownloadUrl = (url: string) => {
    const docId = url.match(/\/d\/(.*?)(\/|$)/)?.[1];
    if (docId) {
      return `https://docs.google.com/document/d/${docId}/export?format=pdf`;
    }
    return url;
  };

  return (
    <EmbedContainer>
      <TitleContainer>
        {title && <EmbedTitle>{title}</EmbedTitle>}
        <DownloadButton 
          href={getDownloadUrl(docUrl)}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <FontAwesomeIcon icon={faDownload} /> Download PDF
        </DownloadButton>
      </TitleContainer>
      <StyledIframe
        src={getEmbedUrl(docUrl)}
        title={title || 'Google Doc Embed'}
        allow="autoplay"
      />
    </EmbedContainer>
  );
};

export default GoogleDocEmbed; 