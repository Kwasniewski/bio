import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJs, faDocker, faGithub, faAws } from '@fortawesome/free-brands-svg-icons';
import { faGem, faVideo, faDharmachakra, faNetworkWired, faCubes } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Tooltip, TooltipTrigger } from './shared/Tooltip';

interface SkillData {
  name: string;
  icon: IconDefinition;
  description: string;
  isTypeScript?: boolean;
}

const SkillsSection = styled.section`
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
`;

const SkillsCategory = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    color: var(--secondary-color);
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const SkillItem = styled(TooltipTrigger)`
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
    box-shadow: 0 4px 15px rgb(0 0 0 / 15%);
  }
`;

const SkillIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: var(--card-background);
  
  svg {
    width: 100%;
    height: 100%;
    color: var(--secondary-color);
    padding: 1rem;
  }
`;

const TSIcon = styled(SkillIcon)`
  position: relative;

  &::after {
    content: 'TS';
    position: absolute;
    right: -5px;
    bottom: -5px;
    font-size: 0.9rem;
    font-weight: bold;
    font-family: monospace;
    background-color: var(--secondary-color);
    color: white;
    padding: 1px 3px;
    border-radius: 3px;
  }
`;

const SkillName = styled.span`
  color: var(--text-color);
  font-weight: 500;
  font-size: 1rem;
`;

const developmentSkills: SkillData[] = [
  {
    name: 'Java',
    icon: faJava,
    description: 'Developed OpenTok Java SDK integrations and enterprise applications'
  },
  {
    name: 'JavaScript',
    icon: faJs,
    description: 'Built web applications and implemented real-time communication features'
  },
  {
    name: 'TypeScript',
    icon: faJs,
    description: 'Developed type-safe applications and enhanced existing JavaScript codebases',
    isTypeScript: true
  },
  {
    name: 'Ruby',
    icon: faGem,
    description: 'Created authentication systems using Ruby and implemented LDAP strategies'
  },
  {
    name: 'WebRTC',
    icon: faVideo,
    description: 'Implemented video conferencing and screen sharing features using WebRTC'
  }
];

const infrastructureSkills: SkillData[] = [
  {
    name: 'Docker',
    icon: faDocker,
    description: 'Containerized applications and created development environments'
  },
  {
    name: 'Kubernetes',
    icon: faDharmachakra,
    description: 'Orchestrated container deployments and managed microservices architecture'
  },
  {
    name: 'DNS/Networking',
    icon: faNetworkWired,
    description: 'Developed DNS Split Relay for asynchronous split DNS implementation'
  },
  {
    name: 'AWS',
    icon: faAws,
    description: 'Deployed and managed cloud infrastructure and services'
  },
  {
    name: 'Terraform',
    icon: faCubes,
    description: 'Implemented infrastructure as code for cloud resources'
  },
  {
    name: 'GitHub',
    icon: faGithub,
    description: 'Managed version control, CI/CD pipelines, and open source contributions'
  }
];

const Skills: React.FC = () => {
  return (
    <SkillsSection>
      <h2>Skills</h2>
      <SkillsCategory>
        <h3>Code & Development</h3>
        <SkillsGrid>
          {developmentSkills.map((skill) => (
            <SkillItem key={skill.name}>
              <Tooltip>
                {skill.description}
              </Tooltip>
              {skill.isTypeScript ? (
                <TSIcon>
                  <FontAwesomeIcon icon={skill.icon} />
                </TSIcon>
              ) : (
                <SkillIcon>
                  <FontAwesomeIcon icon={skill.icon} />
                </SkillIcon>
              )}
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
        </SkillsGrid>
      </SkillsCategory>

      <SkillsCategory>
        <h3>Infrastructure & DevOps</h3>
        <SkillsGrid>
          {infrastructureSkills.map((skill) => (
            <SkillItem key={skill.name}>
              <Tooltip>
                {skill.description}
              </Tooltip>
              <SkillIcon>
                <FontAwesomeIcon icon={skill.icon} />
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
        </SkillsGrid>
      </SkillsCategory>
    </SkillsSection>
  );
};

export default Skills;