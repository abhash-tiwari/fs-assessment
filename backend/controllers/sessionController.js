const Session = require('../models/Session');

exports.createSession = async (req, res) => {
  const { participants, start, end, duration } = req.body;
  try {
    const session = new Session({ participants, start, end, duration });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getUserSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ participants: req.userId }).populate('participants', 'email');
    res.json(sessions);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
