const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.register = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  // Check if valid email
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  
  // Check if email is not in database
  const emailExists = await this.findOne({ email });
  if (emailExists) {
    throw new Error(`User with email '${email}' already exists`);
  }

  // Check if password is strong enough
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }
  
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });

    return user;
  } catch (error) {
    console.error(`Error during user registration: ${error.message}`);
    throw error;
  }
};

userSchema.statics.login = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  // Check if email is in database
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error(`User with email '${email}' does not exist`);
  }

  const match = await bcrypt.compare(password, user.password);

  if(!match){
    throw Error('Incorrect Password');
  }

  return user;
}

const User = mongoose.model('User', userSchema);

module.exports = User;
