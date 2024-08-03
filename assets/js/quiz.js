console.log('quiz.js loaded');

// Define priorities for categories
const priorities = {
    'Leadership and Extracurricular Involvement': 1,
    'Ethnic and Cultural Diversity': 2,
    'Gender and LGBTQIA+ Inclusivity': 3,
    'Major/Field of Interest Based': 4,
    'International Scholarships': 5
};

function submitQuiz() {
    // Retrieve values from the form
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;
    const question3 = document.getElementById('question3').value;
    const question4 = document.getElementById('question4').value;
    const question5 = document.getElementById('question5').value;
    const question6 = document.getElementById('question6').value;
    const question7 = document.getElementById('question7').value;
    const question8 = document.getElementById('question8').value;

    // Initialize category scores
    const categoryScores = {
        'Leadership and Extracurricular Involvement': 0,
        'Ethnic and Cultural Diversity': 0,
        'Gender and LGBTQIA+ Inclusivity': 0,
        'Major/Field of Interest Based': 0,
        'International Scholarships': 0
    };

    // Scoring based on responses
    if (question1 === 'STEM') categoryScores['Major/Field of Interest Based'] += 1;
    if (question1 === 'social sciences') categoryScores['Major/Field of Interest Based'] += 1;
    if (question1 === 'law') categoryScores['Major/Field of Interest Based'] += 1;
    if (question1 === 'medicine') categoryScores['Major/Field of Interest Based'] += 1;
    if (question1 === 'education') categoryScores['Major/Field of Interest Based'] += 1;
    if (question1 === 'business') categoryScores['Major/Field of Interest Based'] += 1;

    if (question2 === 'yes') {
        categoryScores['Leadership and Extracurricular Involvement'] += 1;
    }
    if (question3 === 'yes') {
        categoryScores['Leadership and Extracurricular Involvement'] += 1;
    }
    if (question4 === 'yes') {
        categoryScores['Ethnic and Cultural Diversity'] += 1;
        categoryScores['Gender and LGBTQIA+ Inclusivity'] += 1;
    }
    if (question5 === 'yes') {
        categoryScores['Gender and LGBTQIA+ Inclusivity'] += 1;
    }
    if (question6 === 'neither') {
        categoryScores['International Scholarships'] += 1;
    }
    if (question7 === 'yes') {
        categoryScores['Ethnic and Cultural Diversity'] += 1;
        categoryScores['Gender and LGBTQIA+ Inclusivity'] += 1;
        categoryScores['Leadership and Extracurricular Involvement'] += 1;
    }

    // Rank categories based on scores and priority
    const sortedCategories = Object.keys(categoryScores)
        .map(category => ({ name: category, score: categoryScores[category], priority: priorities[category] }))
        .sort((a, b) => b.score - a.score || a.priority - b.priority) // Sort by score, then by priority
        .slice(0, 3); // Get top 3 categories

    // Display results
    displayResults(sortedCategories);
}

function displayResults(categories) {
    const categoryResult = document.getElementById('categoryResult');
    const categoryDiv = document.getElementById('categories');

    categoryDiv.innerHTML = '';
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.style.marginBottom = '30px'; // Adds space below each category
        
        categoryElement.innerHTML = `
            <h3>${category.name}</h3>
            <p>Based on your answers, these are the top categories for scholarships and mentors that you are searching for.</p>
            <a href="mentors.html" class="button-fit" target="_blank" style="margin-top: 10px; display: inline-block;">See Mentors</a>
            <a href="scholarships.html" class="button-fit" target="_blank" style="margin-top: 10px; display: inline-block;">See Scholarships</a>
        `;
        categoryDiv.appendChild(categoryElement);
    });

    categoryResult.style.display = 'block';
}


