const express = require("express");
const router = express.Router();
const BookController = require("../controllers/book.controller");
const auth = require("../middleware/auth");

router.get("/", auth, BookController.apiGetAllBooks);
router.post("/", auth, BookController.apiCreateBook);
router.get("/Book/:id", auth, BookController.apiGetBookById);
router.put("/Book/:id", auth, BookController.apiUpdateBook);
router.delete("/Book/:id", auth, BookController.apiDeleteBook);

module.exports = router;