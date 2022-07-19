require('dotenv-safe').config();
var express = require('express');
const bookRoutes = require("./routes/book.routes");
const userRoutes = require("./routes/user.routes");

const bodyParser = require("body-parser");
const app = express();
var cors = require('cors')
const port = process.env.PORT;

require("./config/database").connect();

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(`<h1>Hello!</h1>`)
});

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});

app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/users", userRoutes);

module.exports = app
