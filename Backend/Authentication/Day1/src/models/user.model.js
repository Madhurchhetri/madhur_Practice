let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }

},{
    timestamps: true
});

let userModel = mongoose.model('users', userSchema);
module.exports = userModel;