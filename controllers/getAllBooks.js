const booksModel = require("../models/books")
const  { getResponseObject } =  require("../helpers/supporter")


//Get all the detials of the Book
module.exports.getAllBooks = async(req, res) =>{
    const response = getResponseObject()
    try{
        const books = await booksModel.find({} , {_id : 0})
        if(!books.length){
            response.message = `No book exists in the Book_Management_System!`
            return res.status(400).json(response)
        }
        response.data = books
        response.status = "success"
        response.message = "Book details fetched succesfully!"
        return res.status(200).json(response)
    }catch(err){
        return res.status(500).json(response)
    }
}
