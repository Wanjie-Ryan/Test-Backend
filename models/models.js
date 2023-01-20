const mongoose = require('mongoose')



const Personschema = new mongoose.Schema({


    name:{

        type:String,
        required:[true, 'Must provide the name'],
        trim:true,
        maxLength:[20, 'Characters cannot be more than 20']
    },

    createdAt:{

        type:Date,
        default:Date.now()

    },

    email:{

        type:String,
        require:[true, 'Must provide an email address']
    },

    sex:{
        type:String,
        default: 'M'
    },

    age:{

        type:Number,
        default: 15
    }





}) 

module.exports = new mongoose.model('Person', Personschema)