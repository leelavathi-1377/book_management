const booksModel = require("../models/books")
const  { getResponseObject } =  require("../helpers/supporter")


//deleting a Book By Id
module.exports.deleteBookById = async(req, res) =>{
    const response = getResponseObject()
    const id = req.params.id
    try{
        let books
        books = await booksModel.find({book_id : id})
        if(!books.length){ 
            response.message = "Book not found!"
            return res.status(401).json(response)
        }
        await booksModel.deleteOne({book_id : id})
        response.status = "success"
        response.message = "Book deleted succesfully!"
        return res.status(200).json(response)
    }catch(err){
        return res.status(500).json(response)
    }
}