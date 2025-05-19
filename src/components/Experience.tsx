import React from 'react';
import styled from 'styled-components';
import { Tooltip, TooltipTrigger } from './shared/Tooltip';

interface CompanyData {
  name: string;
  logo: string;
  role: string;
  period: string;
  description: string;
}

const ExperienceSection = styled.section`
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
`;

const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const CompanyItem = styled(TooltipTrigger)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--card-background);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
  }
`;

const CompanyIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: var(--card-background);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: var(--company-logo-opacity);
    filter: var(--company-logo-filter);
  }
`;

const CompanyName = styled.span`
  color: var(--text-color);
  font-weight: 500;
  margin-top: 0.5rem;
`;

const Role = styled.div`
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const Period = styled.div`
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 0.5rem;
`;

const companies: CompanyData[] = [
  {
    name: 'RingCentral / Hopin',
    logo: './images/ringcentral.webp',
    role: 'Senior Staff Software Engineer',
    period: '2021 - 2025',
    description: 'Designed, managed and scaled several AWS based k8s clusters across media, ai and web workflows.'
  },
  {
    name: 'Classpass',
    logo: './images/classpass.jpg',
    role: 'Staff Software Engineer',
    period: '2018 - 2021',
    description: 'Managed microservices in AWS with a mix of Amazon ECS and EKS.'
  },
  {
    name: 'TokBox',
    logo: './images/tokbox.png',
    role: 'Senior DevOps Engineer',
    period: '2014 - 2018',
    description: 'Scaled Java / C based WebRTC platform to support SaaS offering.'
  },
  {
    name: 'Adobe',
    logo: './images/adobe.png',
    role: 'Technical Architect',
    period: '2012 - 2014',
    description: 'Managed a large Linux environment with >40,000 servers as part of SiteCatalyst TechOps team.'
  },
  {
    name: 'ContextOptional',
    logo: './images/contextoptional.png',
    role: 'Operation Lead',
    period: '2009 - 2012',
    description: 'Led operations team and managed infrastructure deployments.'
  },
  {
    name: 'Reach Systems',
    logo: './images/reach.png',
    role: 'Linux System Admin',
    period: '2008 - 2009',
    description: 'Managed Linux systems and infrastructure deployments.'
  },
  {
    name: 'Itiva',
    logo: './images/itiva.jpg',
    role: 'Operations Specialist',
    period: '2007 - 2008',
    description: 'Handled operations and system administration responsibilities.'
  }
];

const Experience: React.FC = () => {
  return (
    <ExperienceSection>
      <h2>Experience</h2>
      <CompanyGrid>
        {companies.map((company) => (
          <CompanyItem key={company.name}>
            <Tooltip>
              <Role>{company.role}</Role>
              <Period>{company.period}</Period>
              {company.description}
            </Tooltip>
            <CompanyIcon>
              <img src={company.logo} alt={company.name} />
            </CompanyIcon>
            <CompanyName>{company.name}</CompanyName>
          </CompanyItem>
        ))}
      </CompanyGrid>
    </ExperienceSection>
  );
};

export default Experience; 