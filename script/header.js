document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('site-header');
    if (header) {
        header.innerHTML = `
            <div class="left-container">
                <img src="./img/logo.png" alt="Logo" />
            </div>
            <div class="right-container">
                <nav>
                    <ul>
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="lifestyle.html">LIFESTYLE</a></li>
                        <li><a href="profile.html">PROFILE</a></li>
                        <li><a href="project.html">PROJECT</a></li>
                        <li><a href="contents.html">CONTENTS</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        `;

        // Logic for active link highlighting
        const navLinks = header.querySelectorAll('nav ul li a');
        const currentUrl = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentUrl) {
                link.classList.add('active');
            }
        });
    }
});
