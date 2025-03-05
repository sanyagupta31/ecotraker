document.getElementById('getStarted').addEventListener('click', () => {
    alert('Get Started button clicked!');
});

document.getElementById('learnMore').addEventListener('click', () => {
    alert('Learn More button clicked!');
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️'; // Set sun emoji for dark mode
}

// Add event listener for dark mode toggle
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️'; // Change to sun emoji
        localStorage.setItem('darkMode', 'enabled'); // Save preference
    } else {
        darkModeToggle.textContent = '🌙'; // Change back to moon emoji
        localStorage.setItem('darkMode', 'disabled');
    }
});

