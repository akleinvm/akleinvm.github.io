// Sample array of skills
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Git'];

// Function to add skills to the page
function addSkills() {
    const skillsList = document.getElementById('skillsList');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

// Call the function when the page loads
window.onload = addSkills;