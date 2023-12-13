// Function to load and display resume content
function loadResumeContent() {
    fetchResumeContent().then(htmlContent => {
        renderResumeContent(htmlContent);
    });
}

// Initialize content on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    loadResumeContent();
    loadMemes();
});