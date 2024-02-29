const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ismailmushraf:%40Ismail1603%23@cluster0.yzchtqc.mongodb.net/todos");

const BusinessCardSchema = mongoose.Schema({
    name: String,
    bio: String,
    social: [
        {
            platform: String,
            link: String
        }
    ],
    interests: [
        {
            type: String
        }
    ]
});

const BusinessCard = mongoose.model('bcards', BusinessCardSchema);

module.exports = { BusinessCard };
