const resultsContainer = document.getElementById('results-container');

// Connect to the WebSocket server
const socket = io('wss://127.0.0.1:5000/'); // Use your backend URL

// Listen for real-time updates
socket.on('update_results', (data) => {
    // Update the results on the page
    resultsContainer.innerHTML = '';

    for (const [rep, count] of Object.entries(data)) {
        const resultItem = document.createElement('p');
        resultItem.textContent = `${rep}: ${count} votes`;
        resultsContainer.appendChild(resultItem);
    }
});
