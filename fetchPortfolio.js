// Integrating API calls to fetch portfolio data

async function fetchPortfolioData() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiSecret = 'YOUR_API_SECRET'; // Replace with your actual API secret

    const headers = {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
        'X-API-SECRET': apiSecret
    };

    try {
        const response = await axios.get(`${baseurl}/user/balances`, { headers });
        console.log('Portfolio data:', response.data);
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
    }
}

// Call the fetchPortfolioData function
fetchPortfolioData();
