const { default: mongoose } = require("mongoose");

let userSchema = new mongoose.Schema({
    name :{
        type : String,
    },
    email:{
        type : String,
        require: true,
        unique : [true,'email already exist']
    },
    password:{
        type: String,
        require: true,
    },
    refreshToken:{
        type: String
    }

},{
    timestamps:true
});

let userModel = mongoose.model('user',userSchema)

module.exports = userModel