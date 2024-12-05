const resultsContainer = document.getElementById('results-container');

// Connect to the WebSocket server
const socket = io('wss://electronic-election-system.onrender.com/'); // Use your backend URL

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
