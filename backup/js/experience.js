// Create tooltip container
const experienceTooltipContainer = document.createElement('div');
experienceTooltipContainer.className = 'tooltip-container';
document.body.appendChild(experienceTooltipContainer);

// Company descriptions
const companyDescriptions = {
  'ringcentral / hopin': {
    role: 'Senior Staff Software Engineer',
    period: '2021 - 2025',
    description: 'Led development of enterprise communication and virtual event solutions.'
  },
  classpass: {
    role: 'Staff Software Engineer',
    period: '2018 - 2021',
    description: 'Developed fitness platform infrastructure and scaling solutions.'
  },
  tokbox: {
    role: 'Senior DevOps Engineer',
    period: '2014 - 2018',
    description: 'Led DevOps initiatives and managed WebRTC platform infrastructure.'
  },
  adobe: {
    role: 'Technical Architect',
    period: '2012 - 2014',
    description: 'Architected enterprise software solutions and led technical initiatives.'
  },
  contextoptional: {
    role: 'Operation Lead',
    period: '2009 - 2012',
    description: 'Led operations team and managed infrastructure deployment.'
  },
  'reach systems': {
    role: 'Linux System Admin',
    period: '2008 - 2009',
    description: 'Managed Linux systems and infrastructure deployment.'
  },
  itiva: {
    role: 'Operations Specialist',
    period: '2007 - 2008',
    description: 'Handled operations and system administration responsibilities.'
  }
};

// Create and manage company tooltips
document.querySelectorAll('.company-item').forEach(item => {
  const companyName = item.querySelector('span').textContent.toLowerCase();
  const companyInfo = companyDescriptions[companyName];
  
  if (companyInfo) {
    // Create tooltip content
    const createTooltipContent = () => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip company-tooltip';
      
      const role = document.createElement('div');
      role.className = 'company-role';
      role.textContent = companyInfo.role;
      
      const period = document.createElement('div');
      period.className = 'company-period';
      period.textContent = companyInfo.period;
      
      const description = document.createElement('div');
      description.className = 'company-description';
      description.textContent = companyInfo.description;
      
      tooltip.appendChild(role);
      tooltip.appendChild(period);
      tooltip.appendChild(description);
      
      return tooltip;
    };

    // Show tooltip on hover
    item.addEventListener('mouseenter', () => {
      const tooltip = createTooltipContent();
      experienceTooltipContainer.appendChild(tooltip);
      
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
      experienceTooltipContainer.innerHTML = '';
    });
  }
}); 