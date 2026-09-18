const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db/database'); // initializes DB + users table on startup
const PORT = process.env.PORT ;

const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));