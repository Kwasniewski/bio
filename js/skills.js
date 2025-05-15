// Skill descriptions
const skillDescriptions = {
    java: "Developed OpenTok Java SDK integrations and enterprise applications",
    javascript: "Built web applications and implemented real-time communication features",
    typescript: "Developed type-safe applications and enhanced existing JavaScript codebases",
    ruby: "Created authentication systems using Ruby and implemented LDAP strategies",
    webrtc: "Implemented video conferencing and screen sharing features using WebRTC",
    docker: "Containerized applications and created development environments",
    kubernetes: "Orchestrated container deployments and managed microservices architecture",
    dns: "Developed DNS Split Relay for asynchronous split DNS implementation",
    aws: "Deployed and managed cloud infrastructure and services",
    terraform: "Implemented infrastructure as code for cloud resources",
    github: "Managed version control, CI/CD pipelines, and open source contributions"
};

// Create and manage tooltips
document.querySelectorAll('.skill-item').forEach(item => {
    const skillName = item.querySelector('span').textContent.toLowerCase();
    const description = skillDescriptions[skillName.replace(/[^a-z]/g, '')];
    
    if (description) {
        item.setAttribute('data-tooltip', description);
        
        // Show tooltip on hover
        item.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = description;
            
            // Position tooltip
            item.appendChild(tooltip);
            
            // Ensure tooltip stays within viewport
            const rect = tooltip.getBoundingClientRect();
            const offset = 10;
            
            if (rect.right > window.innerWidth) {
                tooltip.style.left = 'auto';
                tooltip.style.right = '0';
            }
            if (rect.bottom > window.innerHeight) {
                tooltip.style.top = 'auto';
                tooltip.style.bottom = '100%';
            }
        });

        // Remove tooltip when mouse leaves
        item.addEventListener('mouseleave', () => {
            const tooltip = item.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    }
}); 