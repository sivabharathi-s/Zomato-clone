const Food = require('../models/foodModel');

exports.addFood = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const newFood = new Food({ name, description, price });
    await newFood.save();
    res.status(201).json({ message: 'Food item added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
