// backend/services/auth/models/user.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING },
  googleId: { type: DataTypes.STRING },
  facebookId: { type: DataTypes.STRING },
  profilePicture: { type: DataTypes.STRING },
  resetPasswordToken: { type: DataTypes.STRING },
  resetPasswordExpires: { type: DataTypes.DATE }
});

module.exports = User;
