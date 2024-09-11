document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Update skill logos
    const skillLogos = {
        'Python': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        'Machine Learning': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
        'SQL': 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
        'Data Visualization': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png',
        'Cloud Computing': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        'NLP & Deep Learning': 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
        'Version Control': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
        'Data Analysis': 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg'
    };

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const skillName = item.querySelector('span').textContent;
        const imgElement = item.querySelector('img');
        if (skillLogos[skillName]) {
            imgElement.src = skillLogos[skillName];
            imgElement.alt = skillName;
        }
    });
});
