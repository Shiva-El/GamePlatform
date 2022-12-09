const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type    : String,
    required: true,
  },
  password: {
    type    : String,
    required: true,
  },
  minesweeper: {
    type    : Number,
    required: true,
  },
  lyrics: {
    type    : Number,
    required: true,
  },
  memory: {
    type    : Number,
    required: true,
  },
  flyingBean: {
    type    : Number,
    required: true,
  },

});

// Mongoose will assume there is a collection called the plural of this name
// (i.e. 'users' in this case).
const User = mongoose.model('User', UserSchema);

module.exports = User;