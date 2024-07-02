function updateTheme() {
    const now = new Date();
    const hour = now.getHours();
    const isMarketHours = hour >= 9 && hour < 16; // 9 AM to 4 PM

    if (isMarketHours) {
        document.body.style.backgroundColor = '#006400'; // Dark green
        document.body.style.color = '#FFFFFF'; // White
    } else {
        document.body.style.backgroundColor = '#000000'; // Black
        document.body.style.color = '#F0F0F0'; // Off-white
    }
}

function fetchStockData() {
    // You'll need to use a stock API here. For example:
    // const stocks = ['AAPL', 'GOOGL', 'MSFT'];
    // Fetch data for each stock and update the #stock-tracker div
}

function fetchNewsArticles() {
    // You'll need to use a news API here
    // Fetch relevant news articles and update the #news-feed div
}

function smoothScroll() {
    const secondPage = document.getElementById('second-page');
    secondPage.scrollIntoView({ behavior: 'smooth' });
}

// Update theme immediately and then every minute
updateTheme();
setInterval(updateTheme, 60000);

// Fetch stock data and news articles every 5 minutes
fetchStockData();
fetchNewsArticles();
setInterval(() => {
    fetchStockData();
    fetchNewsArticles();
}, 300000);

// Add smooth scroll to window object
window.smoothScroll = smoothScroll;