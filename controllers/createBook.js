const booksModel = require("../models/books")
const  { getResponseObject } =  require("../helpers/supporter")


//creating a Book
module.exports.createBook = async(req, res) =>{
    const response = getResponseObject()
    const books = await new booksModel({
        book_id : req.body.book_id,
        title :  req.body.title,
        author : req.body.author,
        summary : req.body.summary
    })
    try{
      const book = await booksModel.find({book_id: req.body.book_id})
      if(book.length){
        response.message = `Book has already exists with the book_id : ${req.body.book_id}`
        return res.status(400).json(response)
      }
      const bookData = await books.save()
      response.data = bookData
      response.status = "sucess"
      response.message = "Book created succesfully!"
      return res.status(200).json(response)
    }catch(err){
        return res.status(400).json(response)
    }
}


