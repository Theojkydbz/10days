const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/dev')

const userSchema = new Schema({
    email: { type: String,
        required: 'Email is Required',
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]},
    firstname: { type: String,
        required: true,
        minlength: [2, 'Too short, min is 2 characters']},
    surname: { type: String,
        required: true,
        minlength: [2, 'Too short, min is 2 characters']},
    password: {
        type: String,
        minlength: [6, 'Too short, min is 6 characters'],
        maxlength: [32, 'Too long, max is 32 characters'],
        required: 'Password is required'
        },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

userSchema.pre("save", function(next){
    const user = this;
 
    bcrypt.genSalt(10, function(err, salt) {
       if(err){ return next(err);}
 
       bcrypt.hash(user.password, salt, function(err, hash){
           if(err){ return next(err);}
 
           user.password = hash;
           next();
       });
    });
 });

 module.exports = mongoose.model('User', userSchema );
