// Creating a user interface for displaying portfolio information

function displayPortfolioInfo(portfolioData) {
    const portfolioDiv = document.getElementById('portfolio');
    portfolioDiv.innerHTML = '';

    portfolioData.forEach(asset => {
        const assetDiv = document.createElement('div');
        assetDiv.innerHTML = `<h3>${asset.currency}</h3><p>Balance: ${asset.balance}</p>`;
        portfolioDiv.appendChild(assetDiv);
    });
}

// Call displayPortfolioInfo with mock data for testing
const mockData = [
    { currency: 'BTC', balance: '0.5' },
    { currency: 'ETH', balance: '2.0' }
];
displayPortfolioInfo(mockData);
