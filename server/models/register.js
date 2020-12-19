const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var registerSchema = new Schema({
    companyname: {
        type: String,
        required: true,
    },
    founder: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    sector: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    
    

}, {
    timestamps: true
});


var Register = mongoose.model('Register', registerSchema);

module.exports = Register;