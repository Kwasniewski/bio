import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 3rem 0;
`;

const ProfileSection = styled.div`
  margin-bottom: 2rem;
`;

const ProfileImage = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--secondary-color);
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
`;

const Tagline = styled.p`
  color: var(--secondary-color);
  font-size: 1.2rem;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ProfileSection>
        <ProfileImage>
          <img src="./images/jek.jpg" alt="Joseph Kwasniewski" />
        </ProfileImage>
        <Title>Joseph Kwasniewski</Title>
        <Tagline>Software Developer | Bay Area, CA</Tagline>
      </ProfileSection>
    </HeaderContainer>
  );
};

export default Header; 