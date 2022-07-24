const express = require("express");
const router = express.Router();
const BookController = require("../controllers/book.controller");
const auth = require("../middleware/auth");

router.get("/", auth, BookController.apiGetAllBooks);
router.post("/", auth, BookController.apiCreateBook);
router.get("/:id", auth, BookController.apiGetBookById);
router.put("/:id", auth, BookController.apiUpdateBook);
router.delete("/:id", auth, BookController.apiDeleteBook);

module.exports = router;