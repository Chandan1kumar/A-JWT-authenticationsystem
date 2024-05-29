const Candidate = require('../models/Candidate');

exports.addCandidate = async (req, res) => {
  const { first_name, last_name, email } = req.body;

  try {
    const newCandidate = new Candidate({
      first_name,
      last_name,
      email,
      user_id: req.user.id
    });

    await newCandidate.save();
    res.json(newCandidate);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find({ user_id: req.user.id });
    res.json(candidates);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
