const lifestyleModel = {
    family: {
        photos: ['./img/photo1a.jpg', './img/photo2.jpeg', './img/photo2a.jpeg', './img/photo3.jpeg', './img/photo3a.jpeg'],
        header: 'Family: My beloved wife, still adorable daughter and son.',
        paragraph: 'I bumped into my wife back in 2010, married in 2011, and the first one came to my life in 2012. After 3 months of honeymoon-like time period, fathering and racing thereafter forever.'
    },
    hobby: {
        photos: ['./img/photo4a.jpg', './img/photo5.jpeg'],
        header: 'Hobby: Drumming/Percussion, Tech Research.',
        paragraph: 'I have been playing drum since 1992, of course as a hobby. My current kits are TAMA Starclassic Acoustic Kit and Roland TD-20. Both are from back in 2002.'
    },
    fitness: {
        photos: ['./img/photo7a.jpg', './img/photo8.jpeg', './img/photo9a.jpg'],
        header: 'Fitness: Hiking, Golf and Boxing.',
        paragraph: 'I do hiking to live longer. I play golf for relationship building. Boxing is for stress management.'
    },
    work: {
        photos: ['./img/profile9.jpg', './img/profile10.jpg', './img/profile11.jpeg', './img/profile12.jpeg', './img/profile13.jpg'],
        header: 'At Work',
        paragraph: 'I have been through a various technologies and indstries.'
    }
};

// Expose the lifestyleModel to be accessible from other scripts
export function getLifestyleData() {
    return lifestyleModel;
}

// Function to fetch resume content
function fetchResumeContent() {
    const resumeContentUrl = 'resumeContents.html';

    return fetch(resumeContentUrl)
        .then(response => response.text())
        .catch(error => console.error('Error fetching resume content:', error));
}

export { fetchResumeContent };



