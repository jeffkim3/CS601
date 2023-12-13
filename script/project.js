async function loadProjects() {
    try {
        const response = await fetch('./data/project.json');
        const projects = await response.json();
        renderProjects(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);

function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <h1>${project.name}</h1>
            <p><strong>Year:</strong> ${project.year}</p>
            <p><strong>Solution:</strong> ${project.solution}</p>
            <p>${project.description}</p>
        `;
        container.appendChild(projectElement);
    });
}