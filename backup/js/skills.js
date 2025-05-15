// Create tooltip container
const skillsTooltipContainer = document.createElement('div');
skillsTooltipContainer.className = 'tooltip-container';
document.body.appendChild(skillsTooltipContainer);

// Skill descriptions
const skillDescriptions = {
  java: 'Developed OpenTok Java SDK integrations and enterprise applications',
  javascript: 'Built web applications and implemented real-time communication features',
  typescript: 'Developed type-safe applications and enhanced existing JavaScript codebases',
  ruby: 'Created authentication systems using Ruby and implemented LDAP strategies',
  webrtc: 'Implemented video conferencing and screen sharing features using WebRTC',
  docker: 'Containerized applications and created development environments',
  kubernetes: 'Orchestrated container deployments and managed microservices architecture',
  dns: 'Developed DNS Split Relay for asynchronous split DNS implementation',
  aws: 'Deployed and managed cloud infrastructure and services',
  terraform: 'Implemented infrastructure as code for cloud resources',
  github: 'Managed version control, CI/CD pipelines, and open source contributions'
};

// Create and manage tooltips
document.querySelectorAll('.skill-item').forEach(item => {
  const skillName = item.querySelector('span').textContent.toLowerCase();
  const description = skillDescriptions[skillName.replace(/[^a-z]/g, '')];
    
  if (description) {
    // Create tooltip content
    const createTooltipContent = () => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = description;
      return tooltip;
    };

    // Show tooltip on hover
    item.addEventListener('mouseenter', () => {
      const tooltip = createTooltipContent();
      skillsTooltipContainer.appendChild(tooltip);
            
      // Position tooltip below the item
      const rect = item.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
            
      let left = rect.left + (rect.width - tooltipRect.width) / 2;
      let top = rect.bottom + 10;

      // Keep tooltip within viewport
      if (left < 10) left = 10;
      if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
      }
            
      if (top + tooltipRect.height > window.innerHeight - 10) {
        top = rect.top - tooltipRect.height - 10;
      }

      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    });

    // Remove tooltip when mouse leaves
    item.addEventListener('mouseleave', () => {
      skillsTooltipContainer.innerHTML = '';
    });
  }
}); 