// Function to fetch memes
async function getMemes() {
    try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        return data.success ? data.data.memes : [];
    } catch (error) {
        console.error('Error fetching memes:', error);
        return [];
    }
}

// Function to load and display memes
async function loadMemes() {
    const memes = await getMemes();
    renderMemes(memes);
}

// Function to render memes
function renderMemes(memes) {
    const container = document.getElementById('memes-container');
    container.innerHTML = '';
    memes.forEach(meme => {
        const memeElement = document.createElement('div');
        memeElement.className = 'meme';
        memeElement.innerHTML = `
            <h3>${meme.name}</h3>
            <img src="${meme.url}" alt="${meme.name}" style="width:100%;">
        `;
        container.appendChild(memeElement);
    });
}

// Invoke loadMemes after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadMemes);