const express = require("express");
const router = express.Router();
const BookController = require("../controllers/book.controller");

router.get("/", BookController.apiGetAllBooks);
router.post("/", BookController.apiCreateBook);
router.get("/Book/:id", BookController.apiGetBookById);
router.put("/Book/:id", BookController.apiUpdateBook);
router.delete("/Book/:id", BookController.apiDeleteBook);

module.exports = router;