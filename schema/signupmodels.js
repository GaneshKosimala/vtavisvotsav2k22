const mongoose = require('mongoose')
const signUpTemplate=new mongoose.Schema({
    idnumber:{
        type:Number,
        required:true
    },
    selectedevent:{
        type:String,
        required:true
    },
    collegename:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    noofmembers:{
        type:Number,
        required:true
    },
    
    names:{
        type:String,
        required:true
    },
    rollnos:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    refno:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})



const User = mongoose.model('students',signUpTemplate)
module.exports = User;