const express = require('express');
const fetch = require('cross-fetch'); 
const cors = require('cors');

const app = express();
app.use(cors());


app.use(express.static(__dirname)); 

const API_URL = "https://api.football-data.org/v4/competitions/FL1/standings";
const API_TOKEN = "2a3db64ded324c9a8ad1a27a9dbec91b";

app.get("/server", async (req, res) => {
    try {
        const response = await fetch(API_URL, {
            headers: { "X-Auth-Token": API_TOKEN }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 4002;
app.listen(PORT, () => console.log(`✅ Serveur proxy démarré`));

