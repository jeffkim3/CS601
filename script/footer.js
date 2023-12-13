document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('site-footer');
    if (footer) {
        footer.innerHTML = `
            <p>&copy; ${(new Date()).getFullYear()} Jeffrey Kim. All rights reserved.</p>
        `;
    }
});
