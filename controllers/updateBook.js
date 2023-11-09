const booksModel = require("../models/books")
const  { getResponseObject } =  require("../helpers/supporter")

module.exports.updateBook = async(req, res) =>{
    const response = getResponseObject()
    const id = req.params.id
    const content = req.body
    try{
        let books
        books = await booksModel.find({book_id : id})
        if(!books.length){ 
            response.message = "Book not found!"
            return res.status(401).json(response)
        }
        await booksModel.updateOne({book_id : id}, content)
        response.status = "success"
        response.message = "Book updated succesfully!"
        return res.status(200).json(response)
    }catch(err){
        response.message = "Internal Server error"
        return res.status(500).json(response)
    }
}