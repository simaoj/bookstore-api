require('dotenv-safe').config();
var express = require('express');
var mongoose = require('mongoose');
const books = require("./routes/book.routes");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;

const jwt = require('jsonwebtoken');

mongoose.connect(process.env.MONGODB_URI)
    .then(res => console.log(`Connection Succesful ${res}`))
    .catch(err => console.log(`Error in DB connection ${err}`));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(`<h1>Hello!</h1>`)
});

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});

app.use("/api/v1/books", books);
