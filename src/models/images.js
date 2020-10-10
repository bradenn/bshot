const mongoose = require('mongoose');

let ImageSchema = new mongoose.Schema({
    image: Buffer,
    uuid: String,
    dateCreated: {type: Date, default: Date.now}
});

let Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
