const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const WEBHOOK_SITE_ADDRESS = process.env.WEBHOOK_SITE_ADDRESS;

app.use(express.json());

app.all('*', async (req, res) => {
    try {
        await axios.post(WEBHOOK_SITE_ADDRESS, req.body);
        res.status(200).send('Webhook triggered successfully');
    } catch (error) {
        res.status(500).send('Error triggering webhook');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});