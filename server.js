const express = require('express');
const app = express();
const path = require('path');

// Import routes
const gameRoutes = require('./server/routes/gameRoutes');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/game', gameRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
