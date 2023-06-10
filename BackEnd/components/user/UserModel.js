const mongoose = require('mongoose');
const { ROLES } = require('../AppConstant/AppConstants');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {type: Number, default: ROLES.USER}
});


module.exports = mongoose.models.user || mongoose.model('user', schema);