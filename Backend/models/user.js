// const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
    role: { type: String, enum: ['student', 'worker', 'warden'], required: true },

    room: String,        // for student
    hostel: String,      // for student & warden
    workType: String,
    username: String
});

userSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model('User', userSchema);
