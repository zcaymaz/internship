const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    studentname: {
        type: String,
        required: true,
        trim: true
    },
    studentsurname: {
        type: String,
        required: true,
        trim: true
    },
    studentno: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    studentdepartment: {
        type: String,
        required: true,
        trim: true
    },
    studentclass: {
        type: String,
        required: true,
        trim: true
    },
    studenttcno: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    studentmail: {
        type: String,
        required: true,
        unique: true
    },
    studentgsmno: {
        type: String,
        required: true,
        unique: true
    },
    staj: {
        type: String,
        required: true,
    },
    corporationname: {
        type: String,
        required: true,
    },
    corporationaddress: {
        type: String,
        required: true,
    },
    corporationproduction: {
        type: String,
        required: true,
    },
    corporationworkercount: {
        type: String,
        required: true,
    },
    corporationpersonalitytcno: {
        type: String,
        required: true,
        unique: true
    },
    corporationgsmno: {
        type: String,
        required: true,
        unique: true
    },
    corporationfax: {
        type: String,
        required: true,
        unique: true
    },
    corporationtaxno: {
        type: String,
        required: true,
        unique: true
    },
    corporationtaxdepartment: {
        type: String,
        required: true,
    },
    corporationauthorizedperson: {
        type: String,
        required: true,
    },
    corporationwebaddress: {
        type: String,
        required: true,
    },
    corporationmail: {
        type: String,
        required: true,
        unique: true
    },
    corporationshef: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Users', userSchema)