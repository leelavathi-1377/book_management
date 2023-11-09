const express = require("express")
const router = express.Router()

const controller = require("../controllers/index")

//create new book 
router.post('/book' , controller.createBook);

//getting book details by id
router.get('/book/:id' , controller.getBookById);

//getting all book details
router.get('/books' , controller.getAllBooks);

//update book detials by id
router.put('/book/:id' , controller.updateBook);

// //delete book by id
router.delete('/book/:id' , controller.deleteBookById); 


module.exports = router