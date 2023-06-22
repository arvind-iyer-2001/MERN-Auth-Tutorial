const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = async (_id) => {
    return await jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION})
}

// Register User
const registerPOST = async (req, res, next) => {
    const {email, password} = req.body;

    try {
      const user = await User.register(email, password);
      const token = await createToken(user._id);
      res.cookie('auth_token', token, { expiresIn: process.env.JWT_EXPIRATION });
      res.cookie('auth_email', email, { expiresIn: process.env.JWT_EXPIRATION });
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}
  

// Login User
const loginPOST = async (req, res, next) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);
        const token = await createToken(user._id);
        res.cookie('auth_token', token, { expiresIn: process.env.JWT_EXPIRATION });
        res.cookie('auth_email', email, { expiresIn: process.env.JWT_EXPIRATION });
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    
}

// Log Out User
const logoutPOST = async (req, res, next) => {}

module.exports = {
    loginPOST,
    registerPOST,
    logoutPOST,
}