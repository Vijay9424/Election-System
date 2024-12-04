const form = document.getElementById('auth-form');
const result = document.getElementById('auth-result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const voterId = document.getElementById('voter-id').value;
    const otp = document.getElementById('otp').value;

    try {
        const response = await fetch('https://127.0.0.1:5000/authenticate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ voter_id: voterId, otp: otp }),
        });
        console.log("f");
        

        const data = await response.json();

        if (response.ok) {
            result.textContent = `Authenticated successfully! Your token: ${data.token}`;
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
