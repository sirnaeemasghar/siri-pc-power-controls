const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint to restart PC
app.post('/restart', (req, res) => {
    exec('shutdown /r /t 0', (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json({ status: "success", message: "PC restarting" });
    });
});

// Endpoint to shutdown PC
app.post('/shutdown', (req, res) => {
    exec('shutdown /s /t 0', (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json({ status: "success", message: "PC shutting down" });
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});