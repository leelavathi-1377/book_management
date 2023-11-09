require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()

const mongoUrl = process.env.MONGO_URL
mongoose.connect('mongodb://127.0.0.1:27017/book_management' , {useNewUrlParser:true})

const db = mongoose.connection
db.on('error' , (error) => {
    console.log(error)
})

db.once('open' , () =>{
    console.log("mongodb database connected successfully")
})

app.use(express.json())

const booksRouter = require("./routes/books")
app.use('/books' , booksRouter)


const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})