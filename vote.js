const form = document.getElementById('vote-form');
const result = document.getElementById('vote-result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const token = document.getElementById('token').value;
    const vote = document.getElementById('vote').value;
    console.log(token.toString());
    
    try {
        const response = await fetch('https://electronic-election-system.onrender.com:5000/vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: token.toString(), vote: vote }),
        });

        const data = await response.json();

        if (response.ok) {
            result.textContent = 'Vote submitted successfully!';
            result.style.color = 'green';
        } else {
            result.textContent = `Error: ${data.error}`;
            result.style.color = 'red';
        }
    } catch (error) {
        result.textContent = 'An error occurred. Please try again later.';
        result.style.color = 'red';
    }
});
