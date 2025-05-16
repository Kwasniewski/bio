import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface ProjectData {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
}

const ProjectsSection = styled.section`
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background-color: var(--card-background);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgb(0 0 0 / 15%);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 1rem;
  color: var(--text-color);
  font-size: 1.2rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-color);
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: var(--tag-background, rgba(0, 0, 0, 0.1));
  color: var(--text-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--secondary-color);
  }
`;

const projects: ProjectData[] = [
  {
    name: 'DNS Split Relay',
    description: 'Developed an asynchronous split DNS implementation for handling complex DNS routing scenarios in enterprise environments.',
    technologies: ['nodejs', 'dns', 'docker'],
    github: 'https://github.com/Kwasniewski/dns-split-relay',
    image: './images/dns.png'
  },
  {
    name: 'Semantic Release Jira Releases',
    description: 'Updated semantic release jira releases to use new jira auth method.',
    technologies: ['nodejs', 'jira', 'semantic-release'],
    github: 'https://github.com/Kwasniewski/semantic-release-jira-releases',
    live: 'https://webrtc-monitor.demo.com',
    image: './images/jira.webp'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.name}>
            <ProjectImage>
              <img src={project.image} alt={project.name} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                {project.github && (
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </ProjectLink>
                )}
                {project.live && (
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects; 