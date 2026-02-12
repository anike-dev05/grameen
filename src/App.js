import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
    const baseurl = "https://api.coindcx.com";

    const fetchPortfolioData = async () => {
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
            return response.data;
        } catch (error) {
            console.error('Error fetching portfolio data:', error);
        }
    };

    const displayPortfolioInfo = (portfolioData) => {
        return portfolioData.map(asset => (
            <View key={asset.currency} style={styles.assetContainer}>
                <Text style={styles.assetText}>{asset.currency}</Text>
                <Text style={styles.assetText}>Balance: {asset.balance}</Text>
            </View>
        ));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Portfolio Monitoring</Text>
            {displayPortfolioInfo(fetchPortfolioData())}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    assetContainer: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    assetText: {
        fontSize: 18,
    },
});

export default App;
