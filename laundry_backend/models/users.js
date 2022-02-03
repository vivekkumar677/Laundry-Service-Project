const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique:true},
    phone:{type: Number, required: true, unique:true},
    password:{type: String, required: true},
    state:{type: String, required: true},
    district:{type: String, required: true},
    address:{type: String, required: true},
    pincode:{type: Number, required: true}
});
const User = mongoose.model("User", UserSchema);
module.exports = User;