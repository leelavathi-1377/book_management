let controller = {}

controller = Object.assign(controller , require("./createBook"));
controller = Object.assign(controller , require("./updateBook"));
controller = Object.assign(controller , require("./getBookById"));
controller = Object.assign(controller , require("./getAllBooks"));
controller = Object.assign(controller , require("./deleteBook"));

module.exports = controller