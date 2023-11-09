const booksModel = require("../models/books")
const  { getResponseObject } =  require("../helpers/supporter")

module.exports.getBookById = async(req, res) =>{
    const response = getResponseObject()
    const id = req.params.id
    try{
        let books
        books = await booksModel.find({book_id : id} , {_id : 0})
        if(!books.length){ 
            response.message = "Book not found!"
            return res.status(401).json(response)
        }
        response.data = books
        response.status = "success"
        return res.status(200).json(response)
    }catch(err){
        return res.status(500).json(response)
    }
}