const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/zomato-clone', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const shopSchema = new mongoose.Schema({
  name: String,
  photo: String,
});

const favoriteSchema = new mongoose.Schema({
  name: String,
  photo: String,
});

const Shop = mongoose.model('Shop', shopSchema);
const Favorite = mongoose.model('Favorite', favoriteSchema);

app.post('/api/shops', async (req, res) => {
  try {
    const shop = new Shop(req.body);
    await shop.save();
    res.status(201).send(shop);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/shops', async (req, res) => {
  try {
    const shops = await Shop.find();
    res.status(200).send(shops);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/api/favorites', async (req, res) => {
  try {
    const favorite = new Favorite(req.body);
    await favorite.save();
    res.status(201).send(favorite);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/favorites', async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.status(200).send(favorites);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
