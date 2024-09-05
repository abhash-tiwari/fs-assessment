const Availability = require('../models/Availability');

exports.addAvailability = async (req, res) => {
  const { start, end } = req.body;
  try {
    const availability = new Availability({ user: req.userId, start, end });
    await availability.save();
    res.status(201).json(availability);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getUserAvailability = async (req, res) => {
  try {
    const availability = await Availability.find({ user: req.userId });
    res.json(availability);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
