// app.js

const baseurl = "https://api.coindcx.com";

// Function to fetch portfolio data
async function fetchPortfolio() {
    try {
        const response = await axios.get(`${baseurl}/exchange/ticker`);
        console.log(response.data);
        displayPortfolio(response.data);
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
    }
}

// Function to display portfolio data
function displayPortfolio(data) {
    const portfolioDiv = document.getElementById('portfolio');
    portfolioDiv.innerHTML = '';
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<p>Market: ${item.market}, Last Price: ${item.last_price}</p>`;
        portfolioDiv.appendChild(itemDiv);
    });
}

// Fetch portfolio data on page load
window.onload = fetchPortfolio;
