const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    book_id:{
        type : Number,
        required : true,
        unique: true
    },
    title : {
        type : String,
        required : true
    } ,
    author : {
        type : String,
        required : true
    },
    summary:{
        type : String,
        required : true
    }
})
bookSchema.set('versionKey', false);

module.exports = mongoose.model('Books' , bookSchema)