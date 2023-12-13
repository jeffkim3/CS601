// Function to render resume
function renderResumeContent(htmlContent) {
    const resumeContainer = document.getElementById('resumeContainer');
    if (resumeContainer) {
        resumeContainer.innerHTML = htmlContent;
    }
}