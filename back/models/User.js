//sukuriu modeli, pirmasis pagal pavyzdi user.js, pagal ji pabandau
//treciu zingsniu app.js creatinti irasa, bet po to ta CRUD'A turiu iskelti i controllers kataloga

const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}));

module.exports = User;