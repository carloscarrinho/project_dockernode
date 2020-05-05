const User = require('../models/User');

module.exports = {

  async list(req, res) {
    const users = await User.find();
    res.status(200).json({users});

  },

  async create(req, res) {
    const {name, email} = req.body;

    if (await User.findOne({ email }))
      return res.status(400).json({error: 'This e-mail already exists.'});

    try {
      const user = await User.create({name, email});

      return res.status(200).json({user});

    } catch (err) {
      console.log(err);
      res.status(400).json({error: 'User not created.'});

    }
  }
}